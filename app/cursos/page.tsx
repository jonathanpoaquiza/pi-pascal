'use client';

import { useState, useMemo } from 'react';
import { MOCK_COURSES, CourseCategories, CourseLevels } from '@/constants';
import { CourseCard } from '@/components/ui/CourseCard';
import { Button } from '@/components/ui/Button';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    return MOCK_COURSES.filter((course) => {
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      const matchesLevel = !selectedLevel || course.level === selectedLevel;
      const matchesSearch =
        !searchTerm ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchTerm]);

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#123f68] to-[#082b4f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Nuestros Cursos</h1>
          <p className="text-xl text-blue-100">
            Elige entre {MOCK_COURSES.length}+ cursos especializados en diversas áreas y niveles. Aprende a tu propio ritmo y mejora tus habilidades con nuestros cursos diseñados para estudiantes de todas las edades.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Buscar
                </label>
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Categoría</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Todas
                  </button>
                  {CourseCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Nivel</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedLevel(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedLevel === null
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Todos
                  </button>
                  {CourseLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedLevel === level
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || selectedLevel || searchTerm) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedLevel(null);
                    setSearchTerm('');
                  }}
                  className="w-full"
                >
                  Limpiar filtros
                </Button>
              )}
            </div>
          </aside>

          {/* Main Area - Courses Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Mostrando{' '}
                <span className="font-semibold">{filteredCourses.length}</span> de{' '}
                <span className="font-semibold">{MOCK_COURSES.length}</span> cursos
              </p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <p className="text-gray-600 text-lg mb-4">
                  No se encontraron cursos que coincidan con tu búsqueda.
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedLevel(null);
                    setSearchTerm('');
                  }}
                >
                  Ver todos los cursos
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
