'use client';

import { Button } from '@/components/ui';
import { MOCK_COURSES, TESTIMONIALS, FEATURES, FAQ, SITE_NAME } from '@/constants';
import { CourseCard } from '@/components/ui/CourseCard';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#f2c230_0%,_#f2c230_16%,_#123f68_16%,_#082b4f_100%)] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(220,232,237,0.14),_transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold mb-6 backdrop-blur-sm">
                Refuerzo académico para todas las áreas
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                Clases de nivelación académica
              </h1>
              <p className="text-xl text-[#e7eef0] mb-8 max-w-xl">
                Fortalecemos a estudiantes en ciencias exactas, sociales, naturales, lengua y literatura y mucho más.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/cursos">Ver áreas</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/sobre-nosotros">Conocer más</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 mt-12 text-sm">
                <div>
                  <p className="text-2xl font-black text-[#f2c230]">6+</p>
                  <p className="text-[#e7eef0]">Áreas de apoyo</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#f2c230]">1:1</p>
                  <p className="text-[#e7eef0]">Acompañamiento</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#f2c230]">4.8★</p>
                  <p className="text-[#e7eef0]">Satisfacción</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
                <div className="rounded-[1.5rem] bg-white p-5 text-[#0a2340] shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-wide text-[#123f68]">
                      {SITE_NAME}
                    </span>
                    <span className="rounded-full bg-[#f2c230] px-3 py-1 text-xs font-bold text-[#082b4f]">
                      2026
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
                    <div className="rounded-xl bg-[#eef3f3] p-3">📐 Matemáticas</div>
                    <div className="rounded-xl bg-[#eef3f3] p-3">🧪 Química</div>
                    <div className="rounded-xl bg-[#eef3f3] p-3">🧬 Biología</div>
                    <div className="rounded-xl bg-[#eef3f3] p-3">🌍 Sociales</div>
                    <div className="rounded-xl bg-[#eef3f3] p-3">📖 Literatura</div>
                    <div className="rounded-xl bg-[#eef3f3] p-3">⚛️ Física</div>
                  </div>
                  <div className="mt-5 rounded-xl bg-[#123f68] p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#dce8ed]">Plan de apoyo</p>
                    <p className="mt-2 text-xl font-black">Tu progreso académico, en movimiento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8dfdf] bg-[#f2c230] text-[#082b4f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em]">Cohorte 7 · Acompañamiento para tu próximo logro</p>
              <p className="mt-1 text-lg font-bold">Prepárate para aprobar tus cursos y avanzar con confianza.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm font-bold sm:flex sm:gap-6">
              <span><strong className="block text-xl">40-200</strong>horas</span>
              <span><strong className="block text-xl">250</strong>horas</span>
              <span><strong className="block text-xl">330</strong>horas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a2340] mb-4">
              Áreas de apoyo académico
            </h2>
            <p className="text-lg text-slate-600">
              Refuerzo para cada disciplina con contenido claro, práctico y guiado por docentes especializados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {MOCK_COURSES.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/cursos">Ver todas las áreas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#eef3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a2340] mb-4">
              ¿Por qué elegir {SITE_NAME}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#0a2340] mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a2340] mb-4">
              Historias de éxito
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] p-8 rounded-2xl border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#123f68] rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#0a2340]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.comment}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#d09f12]">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#123f68]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            ¿Listo para fortalecer tus resultados?
          </h2>
          <p className="text-xl text-[#e7eef0] mb-8">
            Acompañamos a estudiantes y familias en cada etapa del aprendizaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/registro">Inscribirme</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contacto">Hablar con un asesor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a2340] mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === index ? null : index)
                  }
                  className="w-full px-6 py-4 hover:bg-slate-100 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-[#0a2340] text-left">
                    {item.question}
                  </span>
                  <span className="text-[#123f68] ml-4 text-xl font-bold">
                    {expandedFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-white border-t border-slate-200">
                    <p className="text-slate-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
