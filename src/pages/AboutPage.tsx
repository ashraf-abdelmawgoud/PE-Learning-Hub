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

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>عن المنصة ورؤيتها</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            منصة علوم الرياضة التفاعلية
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            مشروع أكاديمي تعليمي مفتوح المصدر صُمم لطلاب كلية علوم الرياضة والتربية البدنية،
            لتوفير تجربة تعليمية تفاعلية تتجاوز القوالب التقليدية وتضع الطالب في قلب التجربة.
          </p>
        </div>

        {/* Core Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
              <Activity className="w-6 h-6 stroke-[2.3]" />
            </div>
            <h2 className="text-xl font-black text-slate-900">
              رؤية المنصة
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              تحويل المناهج الأكاديمية النظرية والعملية في علوم الرياضة من مجرد نصوص جامدة إلى
              بيئة تفاعلية حية، تمكّن الطالب من رؤية ميكانيكا الحركة، وتتبع التغيرات الفيزيولوجية،
              واختبار فهمه للمفاهيم الرياضية بصورة فورية وممتعة.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
              <BookOpen className="w-6 h-6 stroke-[2.3]" />
            </div>
            <h2 className="text-xl font-black text-slate-900">
              فلسفة المقررات السبعة
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              تعتمد المنصة على <strong className="text-slate-800">7 كتب أكاديمية معتمدة</strong>،
              بحيث يخصص لكل كتاب مقرر تفاعلي مستقل. في هذه المرحلة التأسيسية، تم بناء الهياكل والبطاقات السبعة،
              وسيتوالى إدخال محتوى كل كتاب بدقة وأمانة علمية فور تزويد المنصة به.
            </p>
          </div>

        </div>

        {/* Technical Highlights */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl sm:text-2xl font-black text-white">
              المعايير التقنية والتنفيذية للمشروع
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-start gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-1">تقنيات حديثة ومفتوحة المصدر</strong>
                <span>بنيت المنصة بأحدث إصدارات React 19، TypeScript، Vite، و Tailwind CSS.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-1">لغة عربية كاملة وتصميم RTL أصيل</strong>
                <span>ضبط لغوي وطوبوغرافي شامل باستخدام خط Cairo المخصص للواجهات العربية.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-1">بدون أي خوادم أو تعقيدات حسابات</strong>
                <span>منصة فورية الوصول للطلاب بدون تسجيل دخول أو تخزين بيانات في Supabase/Backend.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-1">جاهزية كاملة لـ Cloudflare Pages</strong>
                <span>تهيئة المسارات وإعدادات الـ Redirects لبناء ونشر سريع ومستقر عالمياً.</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md transition-colors"
          >
            <span>استعراض المقررات السبعة</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
