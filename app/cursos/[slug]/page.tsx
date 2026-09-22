'use client';

import { MOCK_COURSES } from '@/constants';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { formatPrice, slugify, truncateText } from '@/lib/utils';
import { useState } from 'react';
import Link from 'next/link';

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'modules' | 'reviews'>('overview');

  // Encontrar el curso que coincida con el slug
  const course = MOCK_COURSES.find((c) => slugify(c.title) === params.slug);

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Curso no encontrado</h1>
        <p className="text-gray-600 mb-8">
          El curso que buscas no existe o ha sido eliminado.
        </p>
        <Button asChild variant="primary">
          <Link href="/cursos">Volver a cursos</Link>
        </Button>
      </div>
    );
  }

  // Cursos relacionados
  const relatedCourses = MOCK_COURSES.filter(
    (c) => c.category === course.category && c.id !== course.id
  ).slice(0, 3);

  return (
    <>
      {/* Course Header */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full">
              {course.category}
            </span>
            <span className="text-sm font-semibold bg-yellow-600 px-3 py-1 rounded-full">
              {course.level}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{course.description}</p>

          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-gray-400">Instructor</p>
              <p className="font-semibold">{course.instructor}</p>
            </div>
            <div>
              <p className="text-gray-400">Duración</p>
              <p className="font-semibold">{course.duration}</p>
            </div>
            {course.rating && (
              <div>
                <p className="text-gray-400">Calificación</p>
                <p className="font-semibold">
                  {course.rating} <span className="text-yellow-400">★</span>
                </p>
              </div>
            )}
            {course.students && (
              <div>
                <p className="text-gray-400">Estudiantes</p>
                <p className="font-semibold">{course.students.toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="relative h-80 mb-8 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                <button
                  onClick={() => setSelectedTab('overview')}
                  className={`pb-4 font-semibold border-b-2 transition-colors ${
                    selectedTab === 'overview'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Descripción
                </button>
                <button
                  onClick={() => setSelectedTab('modules')}
                  className={`pb-4 font-semibold border-b-2 transition-colors ${
                    selectedTab === 'modules'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Módulos
                </button>
                <button
                  onClick={() => setSelectedTab('reviews')}
                  className={`pb-4 font-semibold border-b-2 transition-colors ${
                    selectedTab === 'reviews'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Reseñas
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acerca de este curso</h2>
                  <p className="text-gray-700 leading-relaxed">{course.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h3>
                  <ul className="space-y-2">
                    {[
                      'Conceptos fundamentales y avanzados',
                      'Mejores prácticas de la industria',
                      'Proyectos prácticos y del mundo real',
                      'Desarrollo de habilidades profesionales',
                      'Certificación de finalización',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Requisitos</h3>
                  <ul className="space-y-2">
                    {[
                      'Computadora con acceso a internet',
                      'Herramientas de desarrollo (se indican en el curso)',
                      'Disposición para aprender y practicar',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {selectedTab === 'modules' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contenido del curso
                </h2>
                <p className="text-gray-600 mb-6">
                  Este curso contiene {MOCK_COURSES.length} módulos completos con videos, documentos y ejercicios prácticos.
                </p>
                <div className="space-y-4">
                  {['Módulo 1: Introducción', 'Módulo 2: Conceptos intermedios', 'Módulo 3: Proyectos avanzados'].map(
                    (module, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition-colors"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">{module}</h3>
                        <p className="text-sm text-gray-600">3-5 lecciones • 2-3 horas</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Reseñas de estudiantes</h2>
                <div className="space-y-6">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div className="flex items-start gap-4 mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Estudiante {index + 1}</p>
                          <div className="flex gap-1 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Excelente curso. El instructor explica muy bien los conceptos. Recomendado 100%.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-50 rounded-lg p-6 border border-gray-200">
              {/* Price */}
              <div className="mb-6">
                <p className="text-4xl font-bold text-blue-600">
                  {formatPrice(course.price)}
                </p>
                <p className="text-sm text-gray-600 mt-2">Precio único, acceso vitalicio</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-6">
                <Button variant="primary" className="w-full" size="lg">
                  Comprar curso
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Agregar a carrito
                </Button>
              </div>

              {/* Benefits */}
              <div className="border-t border-gray-300 pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🎓</span>
                  <span className="text-sm text-gray-700">Certificado de finalización</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">♾️</span>
                  <span className="text-sm text-gray-700">Acceso vitalicio</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📱</span>
                  <span className="text-sm text-gray-700">Acceso en dispositivos</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">💬</span>
                  <span className="text-sm text-gray-700">Soporte de instructor</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📚</span>
                  <span className="text-sm text-gray-700">Material descargable</span>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-blue-50 p-4 rounded-lg mt-6 text-center">
                <p className="text-sm text-blue-900 font-semibold mb-2">
                  Garantía de 30 días
                </p>
                <p className="text-xs text-blue-800">
                  Si no te satisface, devolvemos tu dinero sin hacer preguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      {relatedCourses.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cursos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-200 rounded-t-lg">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2 uppercase">
                      {course.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">Por: {course.instructor}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">
                        {formatPrice(course.price)}
                      </span>
                      <Button asChild variant="primary" size="sm">
                        <Link href={`/cursos/${slugify(course.title)}`}>
                          Ver
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
