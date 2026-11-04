/**
 * Footer.tsx
 * Clean, Academic Footer for PE Interactive Learning Hub
 *
 * Contains:
 * - Platform identity & Sport Energy branding
 * - Concise, honest description
 * - Working platform & course navigation links
 * - Zero invented contact details or fake social media
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, Heart, BookOpen } from 'lucide-react';
import { PlatformLogo } from './PlatformLogo';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071C12] text-[#D4E9DC] border-t border-[#103D27] transition-colors" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Purpose (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <PlatformLogo showSubtitle={true} symbolSize={40} />

            <p className="text-sm text-[#D4E9DC]/80 leading-relaxed max-w-md">
              منصة تعليمية أكاديمية مجانية صُممت خصيصاً لدعم طلاب كليات علوم الرياضة والتربية البدنية؛
              تجمع بين الشرح المبسط، والفيديوهات التوضيحية، والأنشطة التفاعلية لفهم المقررات الأكاديمية
              وتطبيقها ميدانياً.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#142B20] text-[#39E66D] border border-[#103D27] font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00C853]" />
                مفتوح ومجاني 100%
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#142B20] text-[#D4E9DC] border border-[#103D27] font-bold">
                <GraduationCap className="w-3.5 h-3.5 text-[#39E66D]" />
                لطلاب التربية الرياضية
              </span>
            </div>
          </div>

          {/* Quick Platform Links (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#F4FFF7] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00C853]" />
              <span>روابط المنصة</span>
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors">
                  المواد الدراسية (6 مواد)
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors">
                  عن المنصة والأهداف
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors">
                  كيف تتعلم معنا؟
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Academic Course Links (col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#F4FFF7] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#00C853]" />
              <span>المحتوى الأكاديمي المتاح</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/courses/course-1"
                  className="text-[#D4E9DC] hover:text-[#39E66D] transition-colors flex items-center gap-1.5 font-bold"
                >
                  <span className="text-[#00C853]">←</span>
                  <span>مناهج التربية الرياضية (معاينة معتمدة)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/course-1/chapters/chap-curriculum-intro"
                  className="text-[#D4E9DC]/80 hover:text-[#39E66D] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#00C853]">←</span>
                  <span>الفصل الأول: مقدمة وماهية المنهج</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/course-1/chapters/chap-curriculum-intro/topics/top-curriculum-concept-evolution/lessons/les-curriculum-evolution"
                  className="text-[#D4E9DC]/80 hover:text-[#39E66D] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#00C853]">←</span>
                  <span>درس تطور مفهوم المنهج (ص 2 - 6)</span>
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-[#6C8577]">
                * المقررات من 2 إلى 7 قيد إدراج الكتب الأكاديمية الرسمية.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#103D27] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6C8577]">
          <p>
            جميع الحقوق محفوظة &copy; {currentYear} — منصة PE Interactive Learning Hub
          </p>
          <div className="flex items-center gap-2 font-medium text-[#D4E9DC]/80">
            <span>صُممت لخدمة طلاب كليات علوم الرياضة والتربية البدنية</span>
            <Heart className="w-3.5 h-3.5 text-[#00C853] fill-[#00C853]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
