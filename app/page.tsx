'use client';

/**
 * NOTA DE TIPOGRAFÍA:
 * Este diseño usa dos familias: "Sora" (titulares, con más carácter) e "Inter" (cuerpo, limpia).
 * En tu app/layout.tsx, cárgalas con next/font y expón las variables CSS, por ejemplo:
 *
 *   import { Sora, Inter } from 'next/font/google';
 *   const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
 *   const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
 *   // <body className={`${sora.variable} ${inter.variable}`}>
 *
 * Si no quieres tocar el layout todavía, el diseño se sigue viendo bien con las fuentes
 * del sistema; solo pierdes el contraste de la tipografía display en los titulares.
 */

import { Button } from '@/components/ui';
import { TESTIMONIALS, FEATURES, FAQ, SITE_NAME } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';

const display = 'font-[family-name:var(--font-sora),ui-sans-serif,system-ui]';

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <>
      <style jsx global>{`
        .snap-row { scrollbar-width: none; }
        .snap-row::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2340] via-[#082b4f] to-[#123f68] pb-24 pt-20 text-white">
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-[#f2c230]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#f2c230]/[0.06] blur-[90px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-[#f2c230]">
              Refuerzo académico para todas las áreas
            </div>
            <h1 className={`${display} mb-6 text-4xl font-black leading-[1.05] text-white md:text-6xl`}>
              Clases de nivelación
              <br />
              <span className="relative inline-block">
                académica
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 h-3 w-full text-[#f2c230]"
                  preserveAspectRatio="none"
                >
                  <path d="M2 9 C50 2, 150 2, 198 9" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-xl text-[#c9d6e0]">
              Fortalecemos a estudiantes en ciencias exactas, sociales, naturales, lengua y literatura y mucho más.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <Link href="/cursos">Ver áreas</Link>
              </Button>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#082b4f]"
              >
                Conocer más
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm sm:gap-0 sm:divide-x sm:divide-white/20">
              <div className="sm:pr-6">
                <p className="text-2xl font-black text-[#f2c230]">6+</p>
                <p className="text-[#e7eef0]">Áreas de apoyo</p>
              </div>
              <div className="sm:px-6">
                <p className="text-2xl font-black text-[#f2c230]">1:1</p>
                <p className="text-[#e7eef0]">Acompañamiento</p>
              </div>
              <div className="sm:pl-6">
                <p className="text-2xl font-black text-[#f2c230]">4.8★</p>
                <p className="text-[#e7eef0]">Satisfacción</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative mx-auto max-w-md rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-[0_30px_60px_rgba(4,20,40,0.45)]">
              <div className="rounded-xl bg-white p-5 text-[#0a2340] shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-wide text-[#123f68]">{SITE_NAME}</span>
                  <span className="rounded-full bg-[#f2c230] px-3 py-1 text-xs font-bold text-[#082b4f]">2026</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
                  <div className="rounded-lg bg-[#eef3f3] p-3">📐 Matemáticas</div>
                  <div className="rounded-lg bg-[#eef3f3] p-3">🧪 Química</div>
                  <div className="rounded-lg bg-[#eef3f3] p-3">🧬 Biología</div>
                  <div className="rounded-lg bg-[#eef3f3] p-3">🌍 Sociales</div>
                  <div className="rounded-lg bg-[#eef3f3] p-3">📖 Literatura</div>
                  <div className="rounded-lg bg-[#eef3f3] p-3">⚛️ Física</div>
                </div>
                <div className="mt-5 rounded-lg bg-[#123f68] p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#dce8ed]">Plan de apoyo</p>
                  <p className="mt-2 text-xl font-black">Tu progreso académico, en movimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort banner — overlaps the hero/section seam for depth without a harsh cut */}
      <div className="relative z-10 mx-4 -mt-10 sm:mx-6 lg:mx-auto lg:max-w-6xl">
        <div className="flex flex-col gap-4 rounded-xl bg-[#f2c230] p-6 text-[#082b4f] shadow-[0_16px_40px_rgba(8,43,79,0.2)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em]">Acompañamiento para tu próximo logro</p>
            <p className="mt-1 text-lg font-bold">Prepárate para aprobar tus cursos y avanzar con confianza.</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-sm font-bold sm:flex sm:gap-8 sm:divide-x sm:divide-[#082b4f]/15">
            <span><strong className="block text-xl">40-200</strong>horas</span>
            <span className="sm:pl-8"><strong className="block text-xl">250</strong>horas</span>
            <span className="sm:pl-8"><strong className="block text-xl">330</strong>horas</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-[#eef3f3] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={`${display} mb-8 max-w-lg text-3xl font-black text-[#0a2340] md:text-4xl`}>
            ¿Por qué elegir {SITE_NAME}?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => {
              const highlighted = index === 0;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-8 shadow-sm transition-shadow hover:shadow-lg ${
                    highlighted ? 'bg-[#082b4f] text-white' : 'border border-slate-100 bg-white'
                  }`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
                      highlighted ? 'bg-white/10' : 'bg-[#0a2340]/5'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className={`mb-2 text-xl font-bold ${highlighted ? 'text-white' : 'text-[#0a2340]'}`}>
                    {feature.title}
                  </h3>
                  <p className={highlighted ? 'text-[#c9d6e0]' : 'text-slate-600'}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section — horizontal snap row instead of a static grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={`${display} mb-8 text-3xl font-black text-[#0a2340] md:text-4xl`}>
            Historias de éxito
          </h2>
        </div>

        <div className="snap-row flex gap-6 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="relative w-[85%] flex-shrink-0 snap-start rounded-2xl border border-slate-200 bg-[#f8fafc] p-8 sm:w-[420px]"
            >
              <span className="absolute right-6 top-5 text-4xl font-black text-[#d09f12]/25">”</span>
              <div className="mb-4 flex items-center gap-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-full bg-[#123f68]" />
                <div>
                  <p className="font-semibold text-[#0a2340]">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="relative text-slate-700">{testimonial.comment}</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#d09f12]">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123f68] to-[#0a2340] py-16 text-center">
        <div className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#f2c230]/[0.07] blur-[90px]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className={`${display} mb-6 text-3xl font-black text-white md:text-4xl`}>
            ¿Listo para fortalecer tus resultados?
          </h2>
          <p className="mb-8 text-xl text-[#c9d6e0]">
            Acompañamos a estudiantes y familias en cada etapa del aprendizaje.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href="/registro">Inscribirme</Link>
            </Button>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#0a2340]"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className={`${display} mb-8 text-3xl font-black text-[#0a2340] md:text-4xl`}>
            Preguntas frecuentes
          </h2>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQ.map((item, index) => {
              const open = expandedFAQ === index;
              return (
                <div key={index} className={`border-l-2 pl-4 transition-colors ${open ? 'border-[#f2c230]' : 'border-transparent'}`}>
                  <button
                    onClick={() => setExpandedFAQ(open ? null : index)}
                    className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#123f68]"
                    aria-expanded={open}
                  >
                    <span className="pr-4 font-semibold text-[#0a2340]">{item.question}</span>
                    <span
                      className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#eef3f3] text-lg font-bold text-[#123f68] transition-transform duration-200"
                      style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <div className="pb-5">
                      <p className="text-slate-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}