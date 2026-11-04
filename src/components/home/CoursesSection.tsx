/**
 * CoursesSection.tsx
 * Minimal, Elegant Six-Subject Courses Section for PE Interactive Learning Hub Homepage
 *
 * Each card contains ONLY:
 * - Simple relevant subject icon
 * - Official subject name
 * - One small availability indicator
 * - One clear action (استعرض المادة)
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../data/academic/selectors';
import { SubjectIcon } from '../courses/SubjectIcon';
import { ArrowLeft, BookOpen } from 'lucide-react';

export const CoursesSection: React.FC = () => {
  const courses = getAllCourses(false);

  return (
    <section
      id="courses-section"
      className="py-16 sm:py-20 bg-[#F4FFF7] border-b border-[#D4E9DC] scroll-mt-14 transition-colors"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
              <BookOpen className="w-3.5 h-3.5 text-[#00C853]" />
              <span>المواد الدراسية (6 مواد تخصصية)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#173D2B] tracking-tight">
              مواد كلية علوم الرياضة
            </h2>

            <p className="text-[#486555] text-sm leading-relaxed">
              ست مواد أكاديمية مستقلة لطلاب كلية علوم الرياضة والتربية البدنية.
            </p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#173D2B] hover:text-[#00C853] transition-colors self-start sm:self-auto shrink-0"
          >
            <span>عرض كل المواد</span>
            <ArrowLeft className="w-4 h-4 text-[#00C853]" />
          </Link>
        </div>

        {/* Six Compact Cards Grid: 3 per row on Desktop (2 rows), 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {courses.map((course) => {
            const hasContent = course.chapters && course.chapters.length > 0;

            return (
              <div
                key={course.id}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#D4E9DC] hover:border-[#00C853] hover:shadow-lg hover:shadow-[#00C853]/10 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Card Top: Subject Icon + Single Availability Indicator */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center border border-[#D4E9DC]/60 group-hover:bg-[#103D27] group-hover:text-[#39E66D] transition-colors duration-200">
                      <SubjectIcon title={course.title} className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    {hasContent ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full bg-[#E8F8EE] text-[#059669] border border-[#00C853]/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
                        <span>متاح للمراجعة</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[#64748B] border border-[#CBD5E1]">
                        <span>قيد التجهيز</span>
                      </span>
                    )}
                  </div>

                  {/* Subject Name (Official Name Only, No generic numbers) */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#173D2B] group-hover:text-[#00A844] transition-colors mb-4">
                    {course.title}
                  </h3>
                </div>

                {/* Card Bottom: Single Clear Action */}
                <div className="pt-3 border-t border-[#F1F5F9]">
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-[#173D2B] group-hover:text-[#00C853] transition-colors"
                  >
                    <span>استعرض المادة</span>
                    <ArrowLeft className="w-4 h-4 text-[#00C853] group-hover:translate-x-[-3px] transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
