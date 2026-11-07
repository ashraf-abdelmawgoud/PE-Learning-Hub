import React from 'react';
import { Link } from 'react-router-dom';
import type { CoursePlaceholder } from '../../types';
import { ArrowLeft } from 'lucide-react';
import { SubjectIcon } from './SubjectIcon';

interface CourseCardProps {
  course: CoursePlaceholder;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const isReady = course.id === 'course-1';

  return (
    <div className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#D4E9DC] hover:border-[#00C853] hover:shadow-lg hover:shadow-[#00C853]/10 transition-all duration-200 flex flex-col justify-between">
      
      {/* Card Top: Subject Icon + Single Availability Indicator */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center border border-[#D4E9DC]/60 group-hover:bg-[#103D27] group-hover:text-[#39E66D] transition-colors duration-200">
            <SubjectIcon title={course.title} className="w-6 h-6 stroke-[2.2]" />
          </div>

          {isReady ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-[#E8F8EE] text-[#059669] border border-[#00C853]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
              <span>متاح للمراجعة</span>
            </span>
          ) : (
            <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]">
              <span>{course.statusLabel || 'قيد التجهيز'}</span>
            </span>
          )}
        </div>

        {/* Subject Name (Official Name Only) */}
        <h3 className="text-lg sm:text-xl font-bold text-[#173D2B] group-hover:text-[#00A844] transition-colors mb-4">
          {course.title}
        </h3>
      </div>

      {/* Card Bottom: Single Clear Action */}
      <div className="pt-3 border-t border-[#F1F5F9]">
        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center justify-between w-full text-sm font-bold text-[#173D2B] group-hover:text-[#00C853] transition-colors"
        >
          <span>استعرض المادة</span>
          <ArrowLeft className="w-4 h-4 text-[#00C853] group-hover:translate-x-[-3px] transition-transform" />
        </Link>
      </div>

    </div>
  );
};
