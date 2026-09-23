'use client';

import { useState, useMemo } from 'react';
import { MOCK_COURSES, CourseCategories, CourseLevels } from '@/constants';
import { CourseCard } from '@/components/ui/CourseCard';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/layout';

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
      <PageHero
        title="Nuestros cursos"
        description={`Elige entre ${MOCK_COURSES.length}+ cursos especializados en diversas áreas y niveles. Aprende a tu ritmo con contenido claro y práctico.`}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-4">
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
                  className="site-input"
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
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="site-panel p-12 text-center">
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
