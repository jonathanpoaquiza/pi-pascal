const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/interactions';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ChatMessage = {
  role?: string;
  content?: string;
};

type GeminiEvent = {
  event_type?: string;
  delta?: {
    type?: string;
    text?: string;
  };
};

function sseEvent(event: 'token' | 'done' | 'error', payload: Record<string, string>) {
  return `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
}

function errorStream(message: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(sseEvent('error', { message })));
      controller.close();
    },
  });

  return new Response(stream, {
    status: 500,
    headers: {
      'Cache-Control': 'no-cache, no-transform',
      'Content-Type': 'text/event-stream; charset=utf-8',
    },
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return errorStream('Configura GEMINI_API_KEY en el archivo .env.local.');
  }

  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = body.messages || [];
    const input = messages.slice(-8)
      .filter((message) => message.content?.trim())
      .map((message) => `${message.role === 'assistant' ? 'Tutor IA' : 'Estudiante'}: ${message.content?.trim()}`)
      .join('\n\n');

    if (!input) {
      return errorStream('Escribe una pregunta para iniciar la conversación.');
    }

    const upstream = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Api-Revision': '2026-05-20',
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        model: GEMINI_MODEL,
        input: `Eres el tutor académico de Pi Pascal. Responde únicamente sobre los cursos, áreas académicas y servicios educativos de Pi Pascal.

Reglas de respuesta:
- Responde siempre en español.
- Sé breve: máximo 80 palabras y 2 párrafos cortos.
- Ve directamente a la respuesta y evita explicaciones repetidas.
- No uses Markdown, asteriscos, almohadillas, listas, emojis ni símbolos decorativos.
- Si la pregunta no está relacionada con Pi Pascal o la educación, responde: "Puedo ayudarte únicamente con los cursos y servicios académicos de Pi Pascal."

Historial reciente:
${input}`,
        stream: true,
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const details = await upstream.text();
      console.error('Gemini request failed:', upstream.status, details);
      return errorStream('Gemini no pudo responder en este momento.');
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const reader = upstream.body.getReader();
    let buffer = '';
    let closed = false;

    const stream = new ReadableStream({
      async start(controller) {
        const close = () => {
          if (!closed) {
            closed = true;
            controller.close();
          }
        };

        try {
          while (true) {
            const { value, done } = await reader.read();
            buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
            const events = buffer.split('\n\n');
            buffer = events.pop() || '';

            for (const rawEvent of events) {
              const data = rawEvent
                .split('\n')
                .find((line) => line.startsWith('data:'))
                ?.slice(5)
                .trim();
              if (!data || data === '[DONE]') continue;

              const event = JSON.parse(data) as GeminiEvent;
              if (event.event_type === 'step.delta' && event.delta?.type === 'text' && event.delta.text) {
                controller.enqueue(encoder.encode(sseEvent('token', { content: event.delta.text })));
              }
            }

            if (done) break;
          }

          controller.enqueue(encoder.encode(sseEvent('done', {})));
        } catch (error) {
          console.error('Gemini stream failed:', error);
          if (!closed) {
            controller.enqueue(encoder.encode(sseEvent('error', { message: 'Gemini interrumpió la respuesta.' })));
          }
        } finally {
          close();
        }
      },
      cancel() {
        reader.cancel();
      },
    });

    return new Response(stream, {
      headers: {
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Chat route failed:', error);
    return errorStream('No se pudo procesar la conversación.');
  }
}