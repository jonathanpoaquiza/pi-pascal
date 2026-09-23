import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { PageHero } from '@/components/layout';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Sobre π Pascal"
        description="Acompañamos tu aprendizaje para comprender, avanzar y crecer."
      />

      {/* Mission Vision Values */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {/* Mission */}
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Misión</h2>
              <p className="text-gray-700">
                Democratizar la educación en tecnología, proporcionando cursos de alta calidad accesibles para todos, con el objetivo de preparar profesionales capacitados para los desafíos del mundo digital.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Visión</h2>
              <p className="text-gray-700">
                Ser la plataforma educativa líder en América Latina, reconocida por la excelencia en enseñanza, innovación constante y el impacto positivo en la carrera de nuestros estudiantes.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Valores</h2>
              <p className="text-gray-700">
                Calidad, excelencia, transparencia, innovación y compromiso con el éxito de cada estudiante. Creemos en el aprendizaje práctico y la formación integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestra Historia</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              π Pascal nació en 2024 con una misión clara: democratizar la educación en programación y tecnología. Fundada por un equipo de profesionales apasionados por enseñar, reconocimos una oportunidad importante en el mercado latinoamericano.
            </p>
            <p className="text-gray-700 mb-6">
              Observamos que muchas personas querían aprender a programar pero enfrentaban obstáculos: cursos costosos, contenido desactualizado o instructores sin experiencia real en la industria. Decidimos cambiar eso.
            </p>
            <p className="text-gray-700 mb-6">
              Hoy, π Pascal es una plataforma educativa que ofrece cursos de alta calidad, impartidos por profesionales con años de experiencia en la industria. Nuestro enfoque es práctico, actual y diseñado específicamente para las necesidades del mercado de tecnología.
            </p>
            <p className="text-gray-700">
              Cada curso ha sido cuidadosamente diseñado para no solo enseñar teoría, sino para preparar a nuestros estudiantes con habilidades prácticas listadas en las ofertas laborales reales.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-[#123f68] text-4xl">
                👨
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jonathan Founder</h3>
              <p className="text-sm text-gray-600 mb-3">CEO & Founder</p>
              <p className="text-gray-700 text-sm">
                Desarrollador full-stack con 10+ años de experiencia en .NET y tecnologías web.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-[#f2c230] text-4xl">
                👩
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">María García</h3>
              <p className="text-sm text-gray-600 mb-3">Head of Curriculum</p>
              <p className="text-gray-700 text-sm">
                Especialista en diseño de programas educativos con experiencia en múltiples lenguajes.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-[#dce8ed] text-4xl">
                👨
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos López</h3>
              <p className="text-sm text-gray-600 mb-3">Lead Instructor</p>
              <p className="text-gray-700 text-sm">
                Mentor de desarrolladores y apasionado por compartir conocimiento de forma práctica.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-[#b08a15] text-4xl">
                👩
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Johnson</h3>
              <p className="text-sm text-gray-600 mb-3">Head of Community</p>
              <p className="text-gray-700 text-sm">
                Construyendo comunidades de aprendizaje y fomentando la colaboración entre estudiantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            ¿Por qué elegir π Pascal?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🏆</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instructores Expertos</h3>
                <p className="text-gray-700">
                  Todos nuestros instructores son profesionales activos en la industria con años de experiencia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📚</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contenido Actualizado</h3>
                <p className="text-gray-700">
                  Nuestros cursos se actualizan constantemente para reflejar las últimas tendencias y mejores prácticas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">💰</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Precios Accesibles</h3>
                <p className="text-gray-700">
                  Creemos que la educación debe ser accesible. Ofrecemos precios competitivos sin sacrificar calidad.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🤝</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad Activa</h3>
                <p className="text-gray-700">
                  Forma parte de una comunidad de miles de estudiantes con los que puedes colaborar y aprender.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🚀</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enfoque Práctico</h3>
                <p className="text-gray-700">
                  Aprendizaje basado en proyectos reales. Desarrolla un portafolio mientras aprendes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfacción Garantizada</h3>
                <p className="text-gray-700">
                  Garantía de 30 días. Si no te satisface, devolvemos tu dinero sin preguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu jornada de aprendizaje?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a miles de estudiantes que ya están transformando sus carreras con π Pascal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/cursos">Ver nuestros cursos</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contacto">Contactar con nosotros</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
