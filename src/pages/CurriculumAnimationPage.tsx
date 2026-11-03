import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import {
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Layers,
  CheckCircle2,
} from 'lucide-react';

const CurriculumJourneyAnimationView = lazy(() =>
  import('../components/academic/visual/CurriculumJourneyAnimationView').then((m) => ({
    default: m.CurriculumJourneyAnimationView,
  }))
);

export const CurriculumAnimationPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'المقررات الدراسية', path: '/courses' },
    { label: 'مناهج التربية الرياضية', path: '/courses/course-1' },
    { label: 'الفصل الأول: ماهية المنهج', path: '/courses/course-1/chapters/chap-curriculum-intro' },
    {
      label: 'درس تطور مفهوم المنهج',
      path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-curriculum-concept-evolution/lessons/les-curriculum-evolution',
    },
    { label: 'الأنيميشن التعليمي 2D (المشاهد الثلاثة الأولى)' },
  ];

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[90vh] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Academic Pilot Context Badge Header */}
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#103D27] via-[#00C853] to-[#39E66D]" />

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC] text-xs font-bold">
              <GraduationCap className="w-4 h-4 text-[#00C853]" />
              <span>الفرقة الرابعة &bull; قسم تدريس التربية الرياضية</span>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#071C12] bg-[#00C853] px-3 py-1 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#071C12]" />
              <span>Phase 4.1 — أول تجربة أنيميشن تعليمية احترافية</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-[#173D2B] mb-3 tracking-tight">
            رحلة تطور مفهوم المنهج: من المفهوم التقليدي إلى المفهوم الحديث
          </h1>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#173D2B] bg-[#E8F8EE] border border-[#D4E9DC] px-3.5 py-1.5 rounded-xl mb-4">
            <BookOpen className="w-4 h-4 text-[#00C853] shrink-0" />
            <span>كتاب مناهج التربية الرياضية — أ.د. هاني الدسوقي إبراهيم (الفصل الأول: ص 2 - 5)</span>
          </div>

          <p className="text-sm sm:text-base text-[#486555] leading-relaxed max-w-4xl font-normal">
            تجربة رسوم متحركة ثنائية الأبعاد (2D Educational Animation) تنقل الطالب إلى قلب الملعب المدرسي
            لتفكيك الفارق الجوهري بين حصر المنهج في مجرد مقررات ومعارف نظرية، والنظر إليه كمنظومة خبرات وأنشطة متكاملة تنمي شخصية المتعلم.
          </p>
        </div>

        {/* The 2D Educational Animation Component */}
        <section aria-label="عرض الأنيميشن التعليمي">
          <Suspense
            fallback={
              <div className="my-8 rounded-3xl bg-[#071C12] border-2 border-[#103D27] p-12 text-center text-[#D4E9DC] flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 border-3 border-[#00C853] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-bold">جاري تحميل مسرح الأنيميشن التعليمي 2D...</p>
              </div>
            }
          >
            <CurriculumJourneyAnimationView />
          </Suspense>
        </section>

        {/* Pedagogical Breakdown Cards for the 3 Scenes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#00C853]" />
            <h2 className="text-xl font-black text-[#173D2B]">
              الدليل التعليمي للمشاهد الثلاثة المنفذة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Scene 1 Card */}
            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#071C12] bg-[#00C853] px-2.5 py-1 rounded-lg">
                  المشهد ١
                </span>
                <span className="text-xs font-bold text-[#6C8577]">بداية الرحلة</span>
              </div>
              <h3 className="text-base font-black text-[#173D2B]">
                «ما المقصود بالمنهج؟»
              </h3>
              <p className="text-xs text-[#486555] leading-relaxed">
                مشهد واسع للملعب المدرسي يرحب فيه المعلم بالطلاب، ويثير السؤال الاستفهامي: «هل المنهج مجرد مجموعة من المواد الدراسية؟» مع زر «ابدأ الاستكشاف».
              </p>
              <div className="pt-2 border-t border-[#D4E9DC] text-[11px] text-[#059669] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" />
                <span>حركة كاميرا وتأسيس البيئة</span>
              </div>
            </div>

            {/* Scene 2 Card */}
            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#071C12] bg-[#00C853] px-2.5 py-1 rounded-lg">
                  المشهد ٢
                </span>
                <span className="text-xs font-bold text-[#6C8577]">المفهوم التقليدي</span>
              </div>
              <h3 className="text-base font-black text-[#173D2B]">
                «مركزية المقررات والمعارف»
              </h3>
              <p className="text-xs text-[#486555] leading-relaxed">
                الانتقال للوحة المقررات: توضيح تركيز المفهوم التقليدي على حفظ واسترجاع المعارف، مع 3 كتب تفاعلية يمكن النقر عليها لاكتشاف دور كل مقرر.
              </p>
              <div className="pt-2 border-t border-[#D4E9DC] text-[11px] text-[#059669] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" />
                <span>فحص المقررات دون سخرية أو تشويه</span>
              </div>
            </div>

            {/* Scene 3 Card */}
            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-[#071C12] bg-[#00C853] px-2.5 py-1 rounded-lg">
                  المشهد ٣
                </span>
                <span className="text-xs font-bold text-[#6C8577]">المفهوم الحديث</span>
              </div>
              <h3 className="text-base font-black text-[#173D2B]">
                «منظومة الخبرات الميدانية»
              </h3>
              <p className="text-xs text-[#486555] leading-relaxed">
                اتساع المشهد في الملعب: بقاء المعرفة كمرجع، مع 4 مناطق خبرة تفاعلية حية (النشاط الحركي، التعلم التعاوني، الملاحظة، وتوجيه المعلم).
              </p>
              <div className="pt-2 border-t border-[#D4E9DC] text-[11px] text-[#059669] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" />
                <span>تحقيق النمو الشامل للمتعلم</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back and Navigation Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/courses/course-1/chapters/chap-curriculum-intro/topics/top-curriculum-concept-evolution/lessons/les-curriculum-evolution"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173D2B] hover:text-[#00A844] transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#00C853]" />
            <span>العودة إلى الدرس الأكاديمي الكامل (الفصل الأول)</span>
          </Link>

          <Link
            to="/courses/course-1"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm shadow-sm transition-all"
          >
            <span>استعراض مقرر مناهج التربية الرياضية</span>
            <ArrowLeft className="w-4 h-4 text-[#071C12]" />
          </Link>
        </div>

      </div>
    </div>
  );
};
