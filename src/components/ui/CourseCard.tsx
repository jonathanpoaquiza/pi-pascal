'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/types';
import { formatPrice, slugify } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/cursos/${slugify(course.title)}`}>
      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(8,43,79,0.08)] hover:shadow-[0_14px_35px_rgba(8,43,79,0.14)] transition-shadow h-full overflow-hidden group border border-[#e4e8e7]">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-[#dce8ed]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {course.level && (
            <div className="absolute top-2 right-2 bg-[#123f68] text-white px-3 py-1 rounded-full text-xs font-semibold">
              {course.level}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="mb-2 text-sm uppercase tracking-wide text-[#b08a15]">
            {course.category}
          </p>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#102c4c] mb-2 line-clamp-2 group-hover:text-[#b08a15] transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-2 text-sm text-slate-600">
            {course.shortDescription || course.description}
          </p>

          {/* Instructor */}
          <p className="mb-3 text-sm text-slate-600">
            <span className="font-semibold">Por:</span> {course.instructor}
          </p>

          {/* Stats */}
          <div className="mb-4 flex items-center justify-between border-b border-[#d8dfdf] pb-4 text-sm text-slate-600">
            <span>{course.duration}</span>
            {course.rating && (
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="ml-1 font-semibold">{course.rating}</span>
              </div>
            )}
            {course.students && (
              <span>{course.students.toLocaleString()} estudiantes</span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#123f68]">
              {formatPrice(course.price)}
            </span>
            <button className="bg-[#123f68] hover:bg-[#0d3456] text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
              Ver curso
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
