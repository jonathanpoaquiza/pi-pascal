export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
      
      <div className="site-panel max-w-none space-y-8 p-6 text-gray-700 sm:p-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
          <p>
            En π Pascal recopilamos información que proporcionas directamente, incluyendo nombre, email,
            contraseña y datos de pago cuando te registras o compras un curso.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Usamos Tu Información</h2>
          <p>
            La información se utiliza para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Crear y mantener tu cuenta</li>
            <li>Procesar pagos</li>
            <li>Proporcionar nuestros servicios educativos</li>
            <li>Enviar comunicaciones relevantes</li>
            <li>Mejorar nuestro servicio</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Seguridad de Datos</h2>
          <p>
            Implementamos medidas de seguridad de la industria para proteger tu información personal
            contra acceso no autorizado, modificación o divulgación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestra plataforma. Puedes controlar cookies
            a través de la configuración de tu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartir Información</h2>
          <p>
            No vendemos tu información personal a terceros. Solo compartimos información cuando es necesario
            para proporcionar nuestros servicios (ej: procesadores de pago).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Derechos del Usuario</h2>
          <p>
            Tienes el derecho de acceder, corregir o eliminar tu información personal. Contáctanos para
            ejercer estos derechos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cambios a Esta Política</h2>
          <p>
            Podemos actualizar esta política de privacidad. Te notificaremos de cambios significativos
            a través de correo electrónico o nuestra plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contacto</h2>
          <p>
            Para preguntas sobre privacidad, contacta a <a href="mailto:privacy@pipascal.com" className="text-blue-600">privacy@pipascal.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
