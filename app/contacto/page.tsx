'use client';

import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/layout';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envío del formulario
    setTimeout(() => {
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsLoading(false);

      // Auto-reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <PageHero
        title="Contacto"
        description="¿Tienes preguntas? Nos encantaría escucharte. Contáctanos hoy mismo."
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Formas de contactarnos</h2>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">📧</div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-700 ml-11">
                <a
                  href="mailto:info@pipascal.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  info@pipascal.com
                </a>
              </p>
              <p className="text-sm text-gray-600 ml-11">Responderemos dentro de 24 horas</p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">📱</div>
                <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
              </div>
              <p className="text-gray-700 ml-11">
                <a
                  href="tel:+593999043294"
                  className="text-blue-600 hover:text-blue-700"
                >
                  +593 999043294
                </a>
              </p>
              <p className="text-sm text-gray-600 ml-11">Lun - Vie: 9:00 - 18:00</p>
            </div>

            {/* Location */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">📍</div>
                <h3 className="text-lg font-semibold text-gray-900">Ubicación</h3>
              </div>
              <p className="text-gray-700 ml-11">Latacunga, Ecuador</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Latacunga%2C%20Ecuador"
                target="_blank"
                rel="noreferrer"
                className="ml-11 inline-block mt-2 font-semibold text-blue-600 hover:text-blue-700"
              >
                Ver en Google Maps
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos</h3>
              <div className="flex gap-4 ml-11">
                <a
                  href="https://www.instagram.com/p4sc4l_pi/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#123f68] flex items-center justify-center text-white hover:bg-[#0d3456] transition-colors"
                  title="Instagram"
                  aria-label="Instagram de π Pascal"
                >
                  <span aria-hidden="true">◎</span>
                </a>
                <a
                  href="https://www.tiktok.com/@pi_pascal.oficial"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#123f68] flex items-center justify-center text-white hover:bg-[#0d3456] transition-colors"
                  title="TikTok"
                  aria-label="TikTok de π Pascal"
                >
                  <span className="text-xs font-black" aria-hidden="true">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="site-panel p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ ¡Mensaje enviado correctamente!
                  </p>
                  <p className="text-green-700 text-sm">
                    Nos pondremos en contacto en breve. Gracias por participar.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="site-input"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="site-input"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="site-input"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="site-input resize-none"
                    placeholder="Cuéntanos más sobre tu consulta..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full"
                >
                  Enviar mensaje
                </Button>
              </form>

              <p className="text-sm text-gray-600 mt-6 text-center">
                Nos comprometemos a responder dentro de 24 horas.
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <section className="mb-16 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900">Encuéntranos en Latacunga</h2>
            <p className="mt-2 text-gray-600">Estamos ubicados en Latacunga, Ecuador. También atendemos de forma virtual.</p>
          </div>
          <iframe
            title="Mapa de Latacunga, Ecuador"
            src="https://www.google.com/maps?q=Latacunga%2C%20Ecuador&output=embed"
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Preguntas frecuentes sobre contacto
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Cuál es el horario de atención?</h3>
              <p className="text-gray-700">
                Nuestro equipo está disponible de lunes a viernes de 9:00 a 18:00. Los mensajes enviados fuera de este horario serán respondidos al día siguiente.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Ofrecen soporte técnico?</h3>
              <p className="text-gray-700">
                Sí, ofrecemos soporte técnico completo para problemas con plataforma, acceso a cursos o cualquier otro inconveniente técnico.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Cómo puedo solicitar un reembolso?</h3>
              <p className="text-gray-700">
                Contáctanos dentro de 30 días de tu compra con el motivo del reembolso. Procesamos reembolsos en 5-7 días hábiles.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">¿Puedo llamar en horario permitido?</h3>
              <p className="text-gray-700">
                Claro, disponemos de línea telefónica abierta en horarios laborales. Preferimos email para casos complejos que requieran seguimiento.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
