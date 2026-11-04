/**
 * Footer.tsx
 * Minimal, Elegant Academic Footer for علوم الرياضة (OloomSport)
 *
 * Structure:
 * - Column 1: Brand & Identity (Logo, Name, Short Academic Description)
 * - Column 2: Platform Navigation (الرئيسية، المواد الدراسية، عن المنصة)
 * - Column 3: The 6 Official Subjects (Clean, compact links)
 * - Bottom Bar: Simple copyright line
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { PlatformLogo } from './PlatformLogo';

const currentYear = new Date().getFullYear();

const OFFICIAL_SUBJECTS = [
  { id: 'course-2', title: 'التعليم الحركي' },
  { id: 'course-3', title: 'البحث العلمي' },
  { id: 'course-4', title: 'التربية المقارنة ونظم التعليم' },
  { id: 'course-1', title: 'مناهج التربية الرياضية' },
  { id: 'course-5', title: 'مادة المضرب' },
  { id: 'course-6', title: 'مادة المضمار' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071C12] text-[#D4E9DC] border-t border-[#103D27] transition-colors" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Mission (md:col-span-5) */}
          <div className="md:col-span-5 space-y-3.5">
            <PlatformLogo showSubtitle={false} symbolSize={38} />
            <p className="text-sm text-[#A3C2B0] leading-relaxed max-w-md">
              منصة تعليمية تفاعلية مجانية لتبسيط مقررات علوم الرياضة ومساعدة الطلاب على الفهم والمراجعة.
            </p>
          </div>

          {/* Column 2: Platform Navigation (md:col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#F4FFF7]">
              روابط المنصة
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-[#A3C2B0] hover:text-[#39E66D] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-[#A3C2B0] hover:text-[#39E66D] transition-colors">
                  المواد الدراسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A3C2B0] hover:text-[#39E66D] transition-colors">
                  عن المنصة
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The 6 Official Subjects (md:col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-[#F4FFF7]">
              المواد الدراسية
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 text-xs sm:text-sm">
              {OFFICIAL_SUBJECTS.map((subject) => (
                <li key={subject.id}>
                  <Link
                    to={`/courses/${subject.id}`}
                    className="text-[#A3C2B0] hover:text-[#39E66D] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B5E3A] shrink-0" />
                    <span>{subject.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/courses"
                  className="text-xs text-[#39E66D] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>استكشف جميع المواد</span>
                  <span>←</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Simple Copyright */}
        <div className="border-t border-[#103D27] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#709280]">
          <p>
            © {currentYear} علوم الرياضة — جميع الحقوق محفوظة
          </p>
          <p className="text-[#A3C2B0]/80">
            منصة أكاديمية لطلاب كليات علوم الرياضة والتربية البدنية
          </p>
        </div>
      </div>
    </footer>
  );
};
