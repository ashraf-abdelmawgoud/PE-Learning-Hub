import React from 'react';
import { Link } from 'react-router-dom';
import type { CoursePlaceholder } from '../../types';
import { BookOpen, ArrowLeft, Clock, Sparkles } from 'lucide-react';

interface CourseCardProps {
  course: CoursePlaceholder;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-[#D9EAF7] hover:border-[#2563EB]/40 p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Ocean Energy Gradient Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#14B8A6] opacity-90 group-hover:h-2 transition-all duration-200" />

      {/* Card Header & Body */}
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] font-mono font-black text-sm flex items-center justify-center border border-blue-200/60 shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
              0{course.orderNumber}
            </span>
            <span className="font-mono text-xs font-bold text-[#64748B] bg-[#F4FAFF] px-2.5 py-1 rounded-lg border border-[#D9EAF7]">
              {course.code}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{course.statusLabel}</span>
          </span>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-black text-[#172B4D] mb-2 group-hover:text-[#2563EB] transition-colors">
          {course.title}
        </h3>

        {/* Academic Reference Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0891B2] bg-cyan-50/70 border border-cyan-200/70 rounded-lg px-3 py-1.5 mb-3.5">
          <BookOpen className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
          <span>{course.targetBookReference}</span>
        </div>

        {/* Concise Description */}
        <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Planned Interactive Components Preview */}
        <div className="space-y-2 pt-3 border-t border-[#D9EAF7]/70 mb-6">
          <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#2563EB]" />
            <span>التجهيزات المخططة:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#334155]">
            <span className="px-2.5 py-1 rounded-lg bg-[#F8FCFF] border border-[#D9EAF7]">
              📚 شروحات تفاعلية
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#F8FCFF] border border-[#D9EAF7]">
              ⚙️ محاكاة حركية
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-[#F8FCFF] border border-[#D9EAF7]">
              📝 بنك اختبارات
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-[#D9EAF7]/70 flex items-center justify-between">
        <span className="text-[11px] text-[#64748B] font-medium">
          بانتظار اعتماد الكتاب
        </span>

        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-black text-[#2563EB] hover:text-white bg-blue-50 hover:bg-[#2563EB] px-4 py-2 rounded-xl transition-all duration-200 group-hover:translate-x-[-3px] active:scale-98 shadow-2xs"
        >
          <span>استعراض الهيكل</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
