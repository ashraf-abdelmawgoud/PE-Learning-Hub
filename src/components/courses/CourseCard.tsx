import React from 'react';
import { Link } from 'react-router-dom';
import type { CoursePlaceholder } from '../../types';
import { BookOpen, ArrowLeft, Clock, Sparkles } from 'lucide-react';

interface CourseCardProps {
  course: CoursePlaceholder;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-500/50 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Emerald Gradient Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-90 group-hover:h-2 transition-all duration-200" />

      {/* Card Header & Body */}
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 font-mono font-black text-sm flex items-center justify-center shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              0{course.orderNumber}
            </span>
            <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              {course.code}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>{course.statusLabel}</span>
          </span>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          {course.title}
        </h3>

        {/* Academic Reference Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-50/80 border border-emerald-200/70 rounded-lg px-3 py-1.5 mb-3.5">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{course.targetBookReference}</span>
        </div>

        {/* Concise Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Planned Interactive Components Preview */}
        <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>التجهيزات المخططة للمقرر:</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-slate-600">
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/60">
              📚 شروحات تفاعلية
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/60">
              ⚙️ محاكاة حركية
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/60">
              📝 بنك اختبارات
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-medium">
          بانتظار اعتماد الكتاب
        </span>

        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 px-4 py-2 rounded-xl transition-all duration-200 group-hover:translate-x-[-3px]"
        >
          <span>استعراض الهيكل</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
