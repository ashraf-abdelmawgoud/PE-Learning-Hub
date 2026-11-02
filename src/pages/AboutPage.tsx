import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  GraduationCap,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { RoadmapSection } from '../components/home/RoadmapSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-[#F4FAFF] min-h-[85vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/70">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>عن المنصة والأهداف</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#172B4D] tracking-tight">
            منصة علوم الرياضة التفاعلية
          </h1>

          <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
            مشروع أكاديمي تعليمي مفتوح المصدر صُمم لطلاب كلية علوم الرياضة والتربية البدنية،
            لتوفير تجربة تعليمية تفاعلية تتجاوز القوالب التقليدية وتضع الطالب في قلب التجربة.
          </p>
        </div>

        {/* Core Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl border border-[#D9EAF7] p-8 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-200/60 shadow-2xs">
              <Activity className="w-6 h-6 stroke-[2.3]" />
            </div>
            <h2 className="text-xl font-black text-[#172B4D]">
              رؤية المنصة
            </h2>
            <p className="text-sm text-[#334155] leading-relaxed">
              تحويل المناهج الأكاديمية النظرية والعملية في علوم الرياضة من مجرد نصوص جامدة إلى
              بيئة تفاعلية حية، تمكّن الطالب من رؤية ميكانيكا الحركة، وتتبع التغيرات الفيزيولوجية،
              واختبار فهمه للمفاهيم الرياضية بصورة فورية وممتعة.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#D9EAF7] p-8 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#0891B2] flex items-center justify-center border border-cyan-200/60 shadow-2xs">
              <BookOpen className="w-6 h-6 stroke-[2.3]" />
            </div>
            <h2 className="text-xl font-black text-[#172B4D]">
              فلسفة المقررات السبعة
            </h2>
            <p className="text-sm text-[#334155] leading-relaxed">
              تعتمد المنصة على <strong className="text-[#172B4D]">7 كتب أكاديمية معتمدة</strong>،
              بحيث يخصص لكل كتاب مقرر تفاعلي مستقل. في هذه المرحلة، تم بناء الهياكل والبطاقات السبعة،
              وسيتوالى إدخال محتوى كل كتاب بدقة وأمانة علمية فور تزويد المنصة به.
            </p>
          </div>

        </div>

        {/* Technical Highlights & Architecture Specifications - Ocean Energy Light Surface */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#D9EAF7] space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#2563EB]" />
            <h2 className="text-xl sm:text-2xl font-black text-[#172B4D]">
              المعايير التقنية والتنفيذية للمشروع
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#334155]">
            <div className="flex items-start gap-3 bg-[#F8FCFF] p-4.5 rounded-2xl border border-[#D9EAF7]">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#172B4D] mb-1 font-black">تقنيات حديثة ومفتوحة المصدر</strong>
                <span>بنيت المنصة بأحدث إصدارات React 19، TypeScript، Vite، و Tailwind CSS v4.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#F8FCFF] p-4.5 rounded-2xl border border-[#D9EAF7]">
              <CheckCircle2 className="w-5 h-5 text-[#0891B2] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#172B4D] mb-1 font-black">لغة عربية كاملة وهوية Ocean Energy</strong>
                <span>ضبط لغوي شامل بخط Cairo، ودعم تفضيلات الحركة (prefers-reduced-motion) وألوان مريحة للعين.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#F8FCFF] p-4.5 rounded-2xl border border-[#D9EAF7]">
              <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#172B4D] mb-1 font-black">بدون خوادم أو متطلبات تسجيل دخول</strong>
                <span>منصة فورية الوصول للطلاب بدون تسجيل دخول أو تخزين بيانات في Supabase/Backend.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#F8FCFF] p-4.5 rounded-2xl border border-[#D9EAF7]">
              <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#172B4D] mb-1 font-black">جاهزية كاملة لـ Cloudflare Pages</strong>
                <span>تهيئة المسارات وإعدادات الـ Redirects لبناء ونشر سريع ومستقر عالمياً بدون أي تكاليف.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Roadmap Section */}
        <RoadmapSection />

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-600/20 transition-all active:scale-98"
          >
            <span>استعراض المقررات السبعة</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
