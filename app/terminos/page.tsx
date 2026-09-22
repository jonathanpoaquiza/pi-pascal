export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos de Servicio</h1>
      
      <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de Términos</h2>
          <p>
            Al acceder y usar nuestra plataforma, aceptas estar vinculado por estos términos y condiciones.
            Si no aceptas cualquiera de estas disposiciones, no debes usar nuestro servicio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso Permitido</h2>
          <p>
            Los usuarios de π Pascal aceptan utilizar la plataforma únicamente para fines legales y educativos.
            No está permitido usar nuestro servicio de manera que viole leyes, regulaciones o derechos de terceros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de los cursos (videos, documentos, ejercicios) es propiedad intelectual de π Pascal
            o de nuestros instructores. El contenido no puede ser reproducido, distribuido o modificado sin permiso explícito.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitación de Responsabilidad</h2>
          <p>
            π Pascal proporciona los cursos "tal como están" sin garantías adicionales. No somos responsables por
            daños directos, indirectos, incidentales o consecuentes derivados del uso de nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Modificaciones de Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios se notificarán
            a través de nuestra plataforma o correo electrónico.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contacto</h2>
          <p>
            Para preguntas sobre estos términos, contáctanos en <a href="mailto:info@pipascal.com" className="text-blue-600">info@pipascal.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
