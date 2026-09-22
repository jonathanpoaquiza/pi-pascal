/**
 * Tipos de datos para π Pascal
 */

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  instructor: string;
  price: number;
  image: string;
  category: string;
  level: string;
  duration: string; // ej: "8 horas"
  students?: number;
  rating?: number;
  modules?: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
  content?: string;
  order: number;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  enrolledCourses?: string[];
  createdAt?: Date;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: Date;
  progress: number; // 0-100
  completed: boolean;
}
