/**
 * Datos constantes de π Pascal
 */

export const SITE_NAME = 'π Pascal';
export const SITE_DESCRIPTION = 'Refuerzo académico para ciencias exactas, sociales, naturales, lengua y literatura y más';
export const SITE_URL = 'https://pi-pascal.com';

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/cursos', label: 'Áreas' },
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export const MOCK_COURSES = [
  {
    id: '1',
    title: 'Matemáticas: álgebra y razonamiento lógico',
    description: 'Fortalece operaciones, ecuaciones, funciones y análisis matemático con acompañamiento paso a paso.',
    shortDescription: 'Refuerzo de matemáticas y lógica',
    instructor: 'Lic. Valeria Torres',
    price: 49.99,
    image: '/images/courses/matematicas.jpg',
    category: 'Ciencias exactas',
    level: 'Básico',
    duration: '8 horas',
    students: 1250,
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Física: movimiento, energía y experimental',
    description: 'Comprende conceptos clave de mecánica, energía y fenómenos físicos con ejercicios prácticos.',
    shortDescription: 'Aprende física con ejemplos reales',
    instructor: 'Ing. Andrés Naranjo',
    price: 59.99,
    image: '/images/courses/fisica.jpg',
    category: 'Ciencias exactas',
    level: 'Intermedio',
    duration: '10 horas',
    students: 980,
    rating: 4.9,
  },
  {
    id: '3',
    title: 'Química: estructura y reacciones',
    description: 'Dominio de enlaces, balanceo, soluciones y química general para mejorar rendimiento académico.',
    shortDescription: 'Química aplicada y conceptual',
    instructor: 'Dra. Sofía Rojas',
    price: 54.99,
    image: '/images/courses/quimica.jpg',
    category: 'Ciencias naturales',
    level: 'Intermedio',
    duration: '9 horas',
    students: 1180,
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Biología: sistemas vivos y funciones',
    description: 'Explora células, organismos, genética y ecosistemas con una mirada clara y didáctica.',
    shortDescription: 'Biología para comprender el mundo vivo',
    instructor: 'Msc. Daniel López',
    price: 52.99,
    image: '/images/courses/biologia.jpg',
    category: 'Ciencias naturales',
    level: 'Básico',
    duration: '8 horas',
    students: 1430,
    rating: 4.7,
  },
  {
    id: '5',
    title: 'Historia y ciudadanía: análisis crítico',
    description: 'Entiende procesos históricos, hechos relevantes y pensamiento crítico para interpretar la sociedad.',
    shortDescription: 'Sociales con enfoque crítico',
    instructor: 'Lic. Camila Vera',
    price: 47.99,
    image: '/images/courses/sociales.jpg',
    category: 'Ciencias sociales',
    level: 'Básico',
    duration: '7 horas',
    students: 890,
    rating: 4.8,
  },
  {
    id: '6',
    title: 'Lengua y literatura: lectura, análisis y redacción',
    description: 'Mejora la comprensión lectora, redacción y análisis de textos literarios y académicos.',
    shortDescription: 'Comunicación y literatura',
    instructor: 'Lic. Estefanía Paredes',
    price: 48.99,
    image: '/images/courses/literatura.jpg',
    category: 'Lengua y literatura',
    level: 'Intermedio',
    duration: '8 horas',
    students: 1360,
    rating: 4.9,
  },
];

export const TESTIMONIALS = [
  {
    name: 'María Fernanda',
    role: 'Estudiante de secundaria',
    comment: 'Gracias a π Pascal mejoré mucho en matemáticas y química. Los ejemplos son claros y muy útiles.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'José Ramírez',
    role: 'Padre de familia',
    comment: 'La atención y la metodología han ayudado a mi hijo a ganar confianza en historia y literatura.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    name: 'Ana Lucía',
    role: 'Estudiante de bachillerato',
    comment: 'El acompañamiento académico me ayudó a reforzar todas las áreas y a sentirme más preparada para el examen.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  },
];

export const FEATURES = [
  {
    icon: '📘',
    title: 'Clases por área',
    description: 'Refuerzo para matemáticas, ciencias, historia, literatura y más.',
  },
  {
    icon: '🧠',
    title: 'Acompañamiento personalizado',
    description: 'Atención enfocada según tus fortalezas y dificultades.',
  },
  {
    icon: '✅',
    title: 'Evaluaciones y seguimiento',
    description: 'Monitoreamos tu progreso para mejorar cada semana.',
  },
  {
    icon: '📚',
    title: 'Material didáctico',
    description: 'Guías, ejercicios y recursos claros para estudiar mejor.',
  },
  {
    icon: '👩‍🏫',
    title: 'Docentes especializados',
    description: 'Profesionales con experiencia en cada disciplina académica.',
  },
  {
    icon: '⏱️',
    title: 'Flexibilidad de horario',
    description: 'Aprende a tu ritmo y según tu disponibilidad.',
  },
];

export const FAQ = [
  {
    question: '¿Para qué niveles están dirigidas las clases?',
    answer: 'Nuestra plataforma ofrece apoyo para primaria, secundaria y bachillerato, con refuerzo personalizado según cada nivel.',
  },
  {
    question: '¿Se atienden todas las áreas académicas?',
    answer: 'Sí, trabajamos con matemáticas, ciencias naturales, ciencias sociales, lengua y literatura, y otras áreas complementarias.',
  },
  {
    question: '¿Puedo recibir apoyo según mis dificultades específicas?',
    answer: 'Claro. Diseñamos el acompañamiento según las necesidades del estudiante, ya sea para fortalecer conceptos o preparar exámenes.',
  },
  {
    question: '¿Se ofrecen clases individuales o grupales?',
    answer: 'Contamos con opciones individuales y grupales para adaptarnos a la meta y al estilo de aprendizaje de cada estudiante.',
  },
  {
    question: '¿Hay material de apoyo para estudiar fuera de clase?',
    answer: 'Sí. Brindamos recursos, ejercicios y orientación para reforzar lo aprendido entre sesiones.',
  },
];

// Helpers for course filters
export const CourseCategories = Array.from(new Set(MOCK_COURSES.map((c) => c.category)));
export const CourseLevels = Array.from(new Set(MOCK_COURSES.map((c) => c.level)));
