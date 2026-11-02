import React, { useState, useMemo } from 'react';
import { COURSES_PLACEHOLDER_DATA } from '../data/coursesData';
import { CourseCard } from '../components/courses/CourseCard';
import { BookOpen, Search, Info, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { normalizeArabicText } from '../utils/textUtils';

export const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return COURSES_PLACEHOLDER_DATA;
    const normalizedQuery = normalizeArabicText(searchQuery);

    return COURSES_PLACEHOLDER_DATA.filter((course) => {
      const normalizedTitle = normalizeArabicText(course.title);
      const normalizedCode = normalizeArabicText(course.code);
      const normalizedBook = normalizeArabicText(course.targetBookReference);
      const normalizedDesc = normalizeArabicText(course.description);
      const normalizedOrder = course.orderNumber.toString();

      return (
        normalizedTitle.includes(normalizedQuery) ||
        normalizedCode.includes(normalizedQuery) ||
        normalizedBook.includes(normalizedQuery) ||
        normalizedDesc.includes(normalizedQuery) ||
        normalizedOrder.includes(normalizedQuery)
      );
    });
  }, [searchQuery]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Breadcrumb */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>المقررات المعتمدة (7)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            دليل المقررات الدراسية الأكاديمية
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            يحتوي هذا الدليل على البطاقات البرمجية المخصصة للمقررات السبعة لكلية علوم الرياضة.
            صُممت كل بطاقة لتمثل قالباً تفاعلياً متكاملاً (وحدات تعليمية، اختبارات، ومحاكاة) بانتظار إدراج محتوى الكتب الأكاديمية.
          </p>
        </div>

        {/* Academic Standard Notice */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 mb-10 shadow-lg border border-slate-800 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-sm">
            <div className="font-bold text-white flex items-center gap-2">
              <span>تنبيه ضبط البيانات الأكاديمية:</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-normal">
                المرحلة التأسيسية
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              جميع المقررات معروضة حالياً بمسمياتها الهيكلية المنهجية (المقرر 1 إلى المقرر 7) وفقاً لمتطلبات المرحلة الأولى.
              لن تتم تسمية المقررات أو وضع فصول دراسية إلا بعد تزويد المنصة بالكتب الأكاديمية السبعة المعتمدة من الكلية.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="البحث برقم المقرر أو الرمز أو الوصف..."
              className="w-full pr-10 pl-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/60 transition-colors"
                title="مسح البحث"
                aria-label="مسح البحث"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-2 rounded-lg">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600" />
              <span>إجمالي المقررات: {filteredCourses.length} من {COURSES_PLACEHOLDER_DATA.length}</span>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8 space-y-4">
            <div className="space-y-1">
              <p className="text-base font-bold text-slate-700">
                لا توجد مقررات مطابقة لعبارة البحث
              </p>
              <p className="text-xs text-slate-500">
                يرجى التحقق من الكلمة المدخلة أو مسح البحث لعرض المقررات السبعة.
              </p>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة عرض جميع المقررات</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
