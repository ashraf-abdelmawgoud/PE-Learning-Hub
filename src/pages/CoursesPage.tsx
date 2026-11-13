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
    <div className="py-12 sm:py-16 bg-[#F4FFF7] min-h-[80vh] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Breadcrumb */}
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
            <BookOpen className="w-3.5 h-3.5 text-[#00C853]" />
            <span>المواد الدراسية المقررة ({COURSES_PLACEHOLDER_DATA.length})</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#173D2B] tracking-tight">
            دليل المواد الدراسية الأكاديمية
          </h1>
        </div>

        {/* Academic Standard Notice - Sport Energy Style */}
        <div className="bg-white text-[#173D2B] rounded-3xl p-6 mb-10 shadow-xs border border-[#D4E9DC] flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC] shadow-2xs">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-sm">
            <div className="font-bold text-[#173D2B] flex items-center gap-2">
              <span>تنبيه ضبط البيانات الأكاديمية:</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E8F8EE] text-[#173D2B] font-bold border border-[#D4E9DC]">
                حالة المحتوى الدراسي
              </span>
            </div>
            <p className="text-[#486555] text-xs sm:text-sm leading-relaxed">
              تُعرض المواد بأسماء مراجعها الأكاديمية المحددة لطلاب الفرقة الرابعة. يتوفر حالياً محتوى دراسي ومراجعات تفاعلية لمادتي «مناهج التربية الرياضية» (استناداً لكتاب أ.د. هاني الدسوقي إبراهيم) و«التحليل الحركي» (استناداً لكتاب د. رحاب عبدالمنعم الرشيدي)، بينما تخضع بقية المواد لإعداد المحتوى تباعاً.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-4 mb-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#6C8577] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="البحث برقم المقرر أو الرمز أو الوصف..."
              className="w-full pr-10 pl-10 py-2.5 rounded-xl border border-[#D4E9DC] bg-[#F4FFF7] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00C853]/20 focus:border-[#00C853] transition-all text-[#173D2B] placeholder:text-[#6C8577]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-[#6C8577] hover:text-[#173D2B] rounded-full hover:bg-[#E8F8EE] transition-colors cursor-pointer"
                title="مسح البحث"
                aria-label="مسح البحث"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs font-semibold text-[#486555]">
            <div className="flex items-center gap-1.5 bg-[#F4FFF7] px-3.5 py-2 rounded-xl border border-[#D4E9DC]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#00C853]" />
              <span className="font-bold text-[#173D2B]">إجمالي المقررات: {filteredCourses.length} من {COURSES_PLACEHOLDER_DATA.length}</span>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <h2 className="sr-only">قائمة المواد الدراسية المقررة</h2>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-[#D4E9DC] p-8 space-y-4">
            <div className="space-y-1">
              <p className="text-base font-bold text-[#173D2B]">
                لا توجد مقررات مطابقة لعبارة البحث
              </p>
              <p className="text-xs text-[#6C8577]">
                يرجى التحقق من الكلمة المدخلة أو مسح البحث لعرض جميع المقررات.
              </p>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              type="button"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#E8F8EE] hover:bg-[#D4E9DC] text-[#173D2B] font-bold text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#00C853]" />
              <span>إعادة عرض جميع المقررات</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
