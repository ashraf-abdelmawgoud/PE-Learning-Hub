import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES_PLACEHOLDER_DATA } from '../../data/coursesData';
import { CourseCard } from '../courses/CourseCard';
import { BookOpen, AlertCircle, ArrowLeft } from 'lucide-react';

export const CoursesPreviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/70">
              <BookOpen className="w-3.5 h-3.5" />
              <span>المقررات الأكاديمية السبعة</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#172B4D]">
              البطاقات المؤقتة للمقررات الدراسية
            </h2>
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
              تم تخصيص بطاقة مستقلة لكل مقرر من المقررات السبعة المعتمدة لكلية علوم الرياضة،
              مع الحفاظ على حيادية العناوين لحين تزويد المنصة بالمحتوى الرسمي للكتب الأكاديمية.
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-blue-50/60 text-[#172B4D] font-bold text-sm border border-[#D9EAF7] shadow-2xs transition-colors shrink-0"
          >
            <span>عرض صفحة المقررات الكاملة</span>
            <ArrowLeft className="w-4 h-4 text-[#2563EB]" />
          </Link>
        </div>

        {/* Notice Banner */}
        <div className="mb-10 bg-white border border-[#D9EAF7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
          <div className="text-sm text-[#172B4D] space-y-1">
            <p className="font-bold">
              تنبيه منهجي والتزام بضوابط المرحلة الحالية:
            </p>
            <p className="text-[#334155] text-xs sm:text-sm leading-relaxed">
              لم يتم اختراع أو توليد أي أسماء مقررات أو محتويات وهمية. كل بطاقة تمثل وعاءً برمجياً جاهزاً لاستقبال
              الكتاب الأكاديمي المقابل له، مع تحويل فصوله إلى دروس تفاعلية، ومحاكاة حركية، وبنوك أسئلة ذكية في المراحل القادمة.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COURSES_PLACEHOLDER_DATA.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
};
