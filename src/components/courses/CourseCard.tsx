import React from 'react';
import { Link } from 'react-router-dom';
import type { CoursePlaceholder } from '../../types';
import { BookOpen, ArrowLeft, Clock, Sparkles } from 'lucide-react';

interface CourseCardProps {
  course: CoursePlaceholder;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-[#D4E9DC] hover:border-[#00C853] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-[#00C853]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Sport Energy Gradient Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#103D27] via-[#00C853] to-[#39E66D] opacity-90 group-hover:h-2 transition-all duration-200" />

      {/* Card Header & Body */}
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-[#E8F8EE] text-[#173D2B] font-mono font-black text-sm flex items-center justify-center border border-[#D4E9DC] shadow-2xs group-hover:bg-[#103D27] group-hover:text-[#39E66D] transition-colors duration-200">
              0{course.orderNumber}
            </span>
            <span className="font-mono text-xs font-bold text-[#486555] bg-[#F4FFF7] px-2.5 py-1 rounded-lg border border-[#D4E9DC]">
              {course.code}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{course.statusLabel}</span>
          </span>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-black text-[#173D2B] mb-2 group-hover:text-[#00A844] transition-colors">
          {course.title}
        </h3>

        {/* Academic Reference Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173D2B] bg-[#E8F8EE] border border-[#D4E9DC] rounded-lg px-3 py-1.5 mb-3.5">
          <BookOpen className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
          <span>{course.targetBookReference}</span>
        </div>

        {/* Concise Description */}
        <p className="text-xs sm:text-sm text-[#486555] leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Planned Interactive Components Preview */}
        <div className="space-y-2 pt-3 border-t border-[#D4E9DC]/70 mb-6">
          <div className="text-[11px] font-bold text-[#6C8577] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#00C853]" />
            <span>التجهيزات المخططة:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#173D2B]">
            <span className="px-2.5 py-1 rounded-lg bg-[#F4FFF7] border border-[#D4E9DC]">
              📚 شروحات تفاعلية
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#F4FFF7] border border-[#D4E9DC]">
              ⚙️ محاكاة حركية
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#F4FFF7] border border-[#D4E9DC]">
              📝 بنك اختبارات
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-[#D4E9DC]/70 flex items-center justify-between">
        <span className="text-[11px] text-[#6C8577] font-medium">
          بانتظار اعتماد الكتاب
        </span>

        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-black text-[#173D2B] hover:text-[#39E66D] bg-[#E8F8EE] hover:bg-[#103D27] px-4 py-2 rounded-xl transition-all duration-200 group-hover:translate-x-[-3px] active:scale-98 shadow-2xs"
        >
          <span>استعراض الهيكل</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
