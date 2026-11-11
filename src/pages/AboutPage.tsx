import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  GraduationCap,
  BookOpen,
  ArrowLeft,
  Users,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-[#F4FFF7] min-h-[85vh] transition-colors" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
            <GraduationCap className="w-3.5 h-3.5 text-[#00C853]" />
            <span>عن المنصة والأهداف</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#173D2B] tracking-tight">
            علوم الرياضة — OloomSport
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
              تيسير دراسة علوم الرياضة والتربية البدنية لطلاب الكلية، عبر تقديم شروحات أكاديمية منظمة،
              وفيديوهات توضيحية مبسطة، واختبارات تقويمية تفاعلية تساعد الطالب على فهم المقررات
              ومراجعتها بأسلوب علمي واضح وتطبيقي.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#173D2B] flex items-center justify-center border border-[#D4E9DC] shadow-2xs">
              <BookOpen className="w-6 h-6 stroke-[2.3] text-[#00C853]" />
            </div>
            <h2 className="text-xl font-black text-[#173D2B]">
              فلسفة المواد الدراسية
            </h2>
            <p className="text-sm text-[#486555] leading-relaxed">
              تضم المنصة <strong className="text-[#173D2B]">7 مواد دراسية مقررة</strong> لطلاب الفرقة الرابعة بكلية علوم الرياضة، بحيث يخصص لكل مادة مسار دراسي مستقل. تتيح المنصة حالياً محتوى أكاديمياً لمادتي «مناهج التربية الرياضية» و«التحليل الحركي»، مع مواصلة إعداد وتجهيز بقية المواد تباعاً وفق خطة دقيقة وأمانة علمية.
            </p>
          </div>

        </div>

        {/* Team Section (فريق العمل) */}
        <section aria-label="فريق العمل" className="space-y-6 pt-2">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
              <Users className="w-3.5 h-3.5 text-[#00C853]" />
              <span>فريق العمل</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#173D2B] tracking-tight">
              فريق العمل
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-8 shadow-xs flex flex-col items-center text-center space-y-4 hover:border-[#00C853]/40 transition-colors">
              <div className="relative">
                <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#00C853]/30 shadow-md ring-4 ring-[#E8F8EE]">
                  <img
                    src="/assets/team/ashraf-ahmed.webp"
                    alt="صورة أشرف عبدالموجود أحمد"
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-[#173D2B] tracking-tight">
                  أشرف عبدالموجود أحمد
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-2 sm:pt-4">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-sm sm:text-base shadow-md shadow-[#00C853]/20 transition-all active:scale-98"
          >
            <span>استعراض المواد الدراسية</span>
            <ArrowLeft className="w-4 h-4 text-[#071C12]" />
          </Link>
        </div>

      </div>
    </div>
  );
};
