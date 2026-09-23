'use client';

import { FormEvent, useRef, useState } from 'react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ServerEvent = {
  content?: string;
  message?: string;
};

function formatAssistantText(content: string) {
  return content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/^\s*[#>*]+\s?/gm, '')
    .replace(/^\s*[-+]\s+/gm, '')
    .replace(/\*{1,3}([^*]+)\*{1,3}/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function Icon({ name }: { name: 'chat' | 'close' | 'send' }) {
  if (name === 'close') {
    return (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
      </svg>
    );
  }

  if (name === 'send') {
    return (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 8h10M7 12h6m7-1a8 8 0 01-8 8 8.4 8.4 0 01-3.4-.7L5 20l.8-3A8 8 0 1119 11z" />
    </svg>
  );
}

export function AIChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const abortController = useRef<AbortController | null>(null);

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = input.trim();
    if (!content || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content };
    const conversation = [...messages, userMessage];
    setMessages([...conversation, { role: 'assistant', content: '' }]);
    setInput('');
    setError(null);
    setIsLoading(true);
    abortController.current = new AbortController();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversation }),
        signal: abortController.current.signal,
      });

      if (!response.body) {
        throw new Error('El servicio de IA no está disponible.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let assistantContent = '';

      const processEvent = (rawEvent: string) => {
        const eventName = rawEvent.match(/^event:\s*(.+)$/m)?.[1]?.trim();
        const data = rawEvent.match(/^data:\s*(.+)$/m)?.[1];
        if (!data) return;

        const payload = JSON.parse(data) as ServerEvent;
        if (eventName === 'error') {
          throw new Error(payload.message || 'El asistente no pudo responder.');
        }
        if (eventName === 'token' && payload.content) {
          assistantContent += payload.content;
          setMessages([...conversation, { role: 'assistant', content: assistantContent }]);
        }
      };

      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const events = buffer.split('\n\n');
        buffer = events.pop() || '';
        events.filter(Boolean).forEach(processEvent);
        if (done) break;
      }
      if (buffer.trim()) processEvent(buffer);

      if (!response.ok && !error) {
        throw new Error('El servicio de IA no está disponible.');
      }
    } catch (requestError) {
      if ((requestError as Error).name !== 'AbortError') {
        setError(requestError instanceof Error ? requestError.message : 'No se pudo conectar con el asistente.');
        setMessages(conversation);
      }
    } finally {
      setIsLoading(false);
      abortController.current = null;
    }
  };

  const closeChat = () => {
    abortController.current?.abort();
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      {isOpen && (
        <section className="mb-4 flex h-[min(580px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-[#d8dfdf] bg-white shadow-[0_20px_60px_rgba(8,43,79,0.22)]" aria-label="Tutor virtual IA">
          <header className="flex items-center justify-between bg-[#082b4f] px-5 py-4 text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f2c230]">Tutor virtual</p>
              <h2 className="mt-1 text-lg font-black">¿En qué te ayudamos?</h2>
            </div>
            <button type="button" onClick={closeChat} className="rounded-full p-2 text-[#dce8ed] transition-colors hover:bg-white/10 hover:text-white" aria-label="Cerrar chat">
              <Icon name="close" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f8fafc] p-4" aria-live="polite">
            {messages.length === 0 && (
              <div className="rounded-xl border border-[#dce8ed] bg-white p-4 text-sm text-[#31516b]">
                <p className="font-bold text-[#082b4f]">Hola, soy tu asistente académico.</p>
                <p className="mt-1">Puedo orientarte sobre las áreas de apoyo y tus cursos.</p>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm ${message.role === 'user' ? 'ml-auto rounded-br-sm bg-[#123f68] text-white' : 'mr-auto rounded-bl-sm border border-[#dce8ed] bg-white text-[#24445f]'}`}>
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.12em] opacity-65">{message.role === 'user' ? 'Tú' : 'Tutor IA'}</p>
                {message.content ? (
                  <p className={message.role === 'assistant' ? 'whitespace-pre-line text-justify leading-relaxed' : 'whitespace-pre-line'}>
                    {message.role === 'assistant' ? formatAssistantText(message.content) : message.content}
                  </p>
                ) : (isLoading && index === messages.length - 1 ? <span className="animate-pulse">Escribiendo...</span> : null)}
              </div>
            ))}
            {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}
          </div>

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-[#d8dfdf] bg-white p-3">
            <label htmlFor="ai-chat-input" className="sr-only">Escribe tu pregunta</label>
            <input id="ai-chat-input" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Escribe tu pregunta..." disabled={isLoading} className="min-w-0 flex-1 rounded-lg border border-[#c8d8dc] px-3 py-2 text-sm text-[#082b4f] outline-none transition-shadow placeholder:text-slate-400 focus:ring-2 focus:ring-[#f2c230]" />
            <button type="submit" disabled={isLoading || !input.trim()} aria-label="Enviar pregunta" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f2c230] text-[#082b4f] transition-colors hover:bg-[#d9a912] disabled:cursor-not-allowed disabled:opacity-50">
              <Icon name="send" />
            </button>
          </form>
        </section>
      )}

      <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? 'Cerrar tutor virtual' : 'Abrir tutor virtual'} className="ml-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f2c230] text-[#082b4f] shadow-[0_10px_30px_rgba(8,43,79,0.25)] transition-transform hover:scale-105 focus-visible:outline-[#082b4f]">
        <Icon name={isOpen ? 'close' : 'chat'} />
      </button>
    </div>
  );
}