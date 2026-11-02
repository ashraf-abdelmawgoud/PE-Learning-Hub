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
    <div className="py-12 sm:py-16 bg-[#F4FFF7] min-h-[85vh] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
            <GraduationCap className="w-3.5 h-3.5 text-[#00C853]" />
            <span>عن المنصة والأهداف</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#173D2B] tracking-tight">
            منصة علوم الرياضة التفاعلية
          </h1>

          <p className="text-[#486555] text-sm sm:text-base leading-relaxed">
            مشروع أكاديمي تعليمي مفتوح المصدر صُمم لطلاب كلية علوم الرياضة والتربية البدنية،
            لتوفير تجربة تعليمية تفاعلية تتجاوز القوالب التقليدية وتضع الطالب في قلب التجربة بهوية Sport Energy.
          </p>
        </div>

        {/* Core Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#173D2B] flex items-center justify-center border border-[#D4E9DC] shadow-2xs">
              <Activity className="w-6 h-6 stroke-[2.3] text-[#00C853]" />
            </div>
            <h2 className="text-xl font-black text-[#173D2B]">
              رؤية المنصة
            </h2>
            <p className="text-sm text-[#486555] leading-relaxed">
              تحويل المناهج الأكاديمية النظرية والعملية في علوم الرياضة من مجرد نصوص جامدة إلى
              بيئة تفاعلية حية، تمكّن الطالب من رؤية ميكانيكا الحركة، وتتبع التغيرات الفيزيولوجية،
              واختبار فهمه للمفاهيم الرياضية بصورة فورية وممتعة.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#173D2B] flex items-center justify-center border border-[#D4E9DC] shadow-2xs">
              <BookOpen className="w-6 h-6 stroke-[2.3] text-[#00C853]" />
            </div>
            <h2 className="text-xl font-black text-[#173D2B]">
              فلسفة المقررات السبعة
            </h2>
            <p className="text-sm text-[#486555] leading-relaxed">
              تعتمد المنصة على <strong className="text-[#173D2B]">7 كتب أكاديمية معتمدة</strong>،
              بحيث يخصص لكل كتاب مقرر تفاعلي مستقل. تم ربط المقرر الأول بنموذج دراسي تطبيقي حقيقي معتمد،
              وسيتوالى إدخال محتوى كل كتاب بدقة وأمانة علمية فور تزويد المنصة به.
            </p>
          </div>

        </div>

        {/* Technical Highlights & Architecture Specifications - Sport Energy Style */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xs border border-[#D4E9DC] space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00C853]" />
            <h2 className="text-xl sm:text-2xl font-black text-[#173D2B]">
              المعايير التقنية والتنفيذية للمشروع
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#486555]">
            <div className="flex items-start gap-3 bg-[#F4FFF7] p-4.5 rounded-2xl border border-[#D4E9DC]">
              <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#173D2B] mb-1 font-black">تقنيات حديثة ومفتوحة المصدر</strong>
                <span>بنيت المنصة بأحدث إصدارات React 19، TypeScript، Vite، و Tailwind CSS v4.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#F4FFF7] p-4.5 rounded-2xl border border-[#D4E9DC]">
              <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#173D2B] mb-1 font-black">لغة عربية كاملة وهوية SPORT ENERGY</strong>
                <span>ضبط لغوي شامل بخط Cairo، ودعم تفضيلات الحركة (prefers-reduced-motion) وألوان مريحة وعالية التباين (WCAG AA).</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#F4FFF7] p-4.5 rounded-2xl border border-[#D4E9DC]">
              <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#173D2B] mb-1 font-black">بدون خوادم أو متطلبات تسجيل دخول</strong>
                <span>منصة فورية الوصول للطلاب بدون تسجيل دخول أو تخزين بيانات في Supabase/Backend.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#F4FFF7] p-4.5 rounded-2xl border border-[#D4E9DC]">
              <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#173D2B] mb-1 font-black">جاهزية كاملة لـ Cloudflare Pages</strong>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm sm:text-base shadow-md shadow-[#00C853]/20 transition-all active:scale-98"
          >
            <span>استعراض المقررات السبعة</span>
            <ArrowLeft className="w-4 h-4 text-[#071C12]" />
          </Link>
        </div>

      </div>
    </div>
  );
};
