/**
 * FinalCtaSection.tsx
 * Clean, Persuasive Closing Call-to-Action Section for Homepage
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, ShieldCheck, GraduationCap } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-[#071C12] via-[#0B2519] to-[#071C12] text-[#F4FFF7] border-t border-[#143D27] transition-colors" dir="rtl">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#142B20] border border-[#00C853]/40 text-[#39E66D] text-xs font-bold shadow-xs">
          <GraduationCap className="w-4 h-4 text-[#00C853]" />
          <span>كلية علوم الرياضة والتربية البدنية</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-[#F4FFF7] tracking-tight leading-tight max-w-3xl mx-auto">
          ابدأ رحلتك في فهم مقررات التربية الرياضية
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#D4E9DC]/90 leading-relaxed max-w-2xl mx-auto font-normal">
          استكشف المقررات وتعلّم خطوة بخطوة من خلال الشرح والفيديوهات والأنشطة التفاعلية.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-base shadow-xl shadow-[#00C853]/25 hover:shadow-[#39E66D]/35 transition-all duration-200 active:scale-98"
          >
            <BookOpen className="w-5 h-5 text-[#071C12]" />
            <span>تصفح المقررات</span>
            <ArrowLeft className="w-4 h-4 text-[#071C12]" />
          </Link>

          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#142B20] hover:bg-[#103D27] text-[#F4FFF7] font-bold text-sm sm:text-base border border-[#00C853]/30 transition-colors"
          >
            <span>عن المنصة والأهداف</span>
          </Link>
        </div>

        {/* Free Access Guarantee */}
        <div className="pt-6 border-t border-[#143D27] flex items-center justify-center gap-2 text-xs text-[#86efac]/80 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#00C853] shrink-0" />
          <span>منصة تعليمية مجانية ومتاحة لجميع الطلاب بدون أي رسوم أو قيود وصول</span>
        </div>

      </div>
    </section>
  );
};
