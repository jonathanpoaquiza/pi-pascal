/**
 * Funciones de utilidad para π Pascal
 */

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const CourseCategories = [
  'Programación',
  'Frontend',
  'Backend',
  'DevOps',
  'Mobile',
  'Diseño',
  'Data Science',
] as const;

export const CourseLevels = ['Básico', 'Intermedio', 'Avanzado'] as const;
