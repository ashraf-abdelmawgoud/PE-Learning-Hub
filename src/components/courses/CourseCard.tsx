import React from 'react';
import { Link } from 'react-router-dom';
import type { CoursePlaceholder } from '../../types';
import { BookOpen, Layers, CheckCircle2, ArrowLeft, Clock, Sparkles } from 'lucide-react';

interface CourseCardProps {
  course: CoursePlaceholder;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-500/50 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Header section */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-black text-sm flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 shadow-xs">
              0{course.orderNumber}
            </span>
            <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              {course.code}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/70">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.statusLabel}</span>
          </span>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
          {course.title}
        </h3>

        {/* Academic Book Reference Badge */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50/70 border border-emerald-200/60 rounded-lg px-3 py-1.5 mb-3.5">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>المرجع: {course.targetBookReference}</span>
        </div>

        {/* Description / Academic notice */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {course.description}
        </p>

        {/* Architecture Readiness Highlights */}
        <div className="space-y-2 pt-2 border-t border-slate-100 mb-6">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            الجاهزية البرمجية للمقرر:
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 p-2 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>الدروس التفاعلية</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 p-2 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>الاختبارات الذكية</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 p-2 rounded-lg">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>المحاكاة والأنيميشن</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 bg-slate-50 p-2 rounded-lg">
              <Layers className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
              <span>وحدات رقمية (DOM)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          بانتظار محتوى الكتاب
        </span>

        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-lg transition-colors group-hover:translate-x-[-2px] duration-150"
        >
          <span>استعراض هيكل المقرر</span>
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
