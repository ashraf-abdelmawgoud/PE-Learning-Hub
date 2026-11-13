/**
 * ChapterDetailPage.tsx
 * Modern, Minimal, Video-Centric Chapter Learning Interface for OloomSport.
 *
 * Educational Structure:
 * Course → Chapter → Topics → Video + Written Summary → Comprehensive Chapter Quiz.
 *
 * Design Principles:
 * - Displays the chapter's original textbook title.
 * - Shows a compact chapter overview and real learning progress.
 * - Lists the topics strictly in the author's original order.
 * - Each topic opens its dedicated learning page.
 * - Chapter-wide quiz section at the end with graceful unavailable state if pending.
 * - Excessive academic cards, visual hubs, repeated summaries, and decorative content removed.
 * - Arabic RTL throughout, Cairo typography, Sport Energy palette.
 */

import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  getCourseById,
  getChapterById,
  getTopicsByChapter,
  getAcademicBreadcrumbs,
} from '../data/academic/selectors';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import { ChapterProgressBar } from '../components/academic/ChapterProgressBar';
import { ChapterQuizSection } from '../components/academic/ChapterQuizSection';
import { getChapterProgressStats, getTopicProgress } from '../utils/progressPersistence';
import { isDevSandboxAllowed } from '../utils/devRouteGuard';
import {
  BookOpen,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Folder,
  Layers,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';

export const ChapterDetailPage: React.FC = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();

  // State to force re-reading real progress upon user action
  const [_progressKey, setProgressKey] = useState<number>(0);

  const course = courseId ? getCourseById(courseId) : undefined;
  const chapter = courseId && chapterId ? getChapterById(courseId, chapterId) : undefined;

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [chapterId]);

  if (!courseId || !chapterId) {
    return <Navigate to="/courses" replace />;
  }

  // Not found fallback for missing course or unauthorized sandbox
  if (!course || (course.isDevSandbox && !isDevSandboxAllowed())) {
    return (
      <div className="py-16 bg-[#F4FFF7] min-h-[75vh] flex items-center justify-center text-right" dir="rtl">
        <div className="max-w-md mx-auto px-4 text-center space-y-5 bg-white p-8 rounded-3xl border border-[#D4E9DC] shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-xl font-black text-[#173D2B]">المقرر الدراسي غير موجود</h1>
            <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
              عذراً، لم نتمكن من العثور على المقرر الدراسي المطلوب.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00C853] text-[#071C12] font-black text-xs hover:bg-[#39E66D] transition-colors"
          >
            <span>استعراض دليل المواد الدراسية</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Not found fallback for missing chapter
  if (!chapter) {
    return (
      <div className="py-16 bg-[#F4FFF7] min-h-[75vh] flex items-center justify-center text-right" dir="rtl">
        <div className="max-w-md mx-auto px-4 text-center space-y-5 bg-white p-8 rounded-3xl border border-[#D4E9DC] shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-xl font-black text-[#173D2B]">الفصل الدراسي غير موجود</h1>
            <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
              عذراً، لم يتم العثور على الفصل الدراسي المطلوب ضمن مقرر «{course.title}».
            </p>
          </div>
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00C853] text-[#071C12] font-black text-xs hover:bg-[#39E66D] transition-colors"
          >
            <span>العودة إلى تفاصيل المقرر</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Derive topics strictly in author's original order
  const rawTopics = getTopicsByChapter(chapter.id);
  const topics = [...rawTopics].sort((a, b) => a.order - b.order);

  // Calculate real progress
  const topicIds = topics.map((t) => t.id);
  const progressStats = getChapterProgressStats(course.id, chapter.id, topicIds);

  const breadcrumbs = getAcademicBreadcrumbs({
    courseId: course.id,
    chapterId: chapter.id,
  });

  const academicCitation =
    chapter.academicReference?.bookTitle
      ? `${chapter.academicReference.bookTitle} ${chapter.academicReference.pageRange ? `(${chapter.academicReference.pageRange})` : ''}`
      : course.targetBookReference || null;

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[85vh] transition-colors text-right" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Sandbox Notice if sandbox */}
        {course.isDevSandbox && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2">
                <span className="font-black text-amber-900 text-base">بيئة الاختبار التقني (معمل كتل الفصول)</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  Dev Showcase
                </span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                هذا الفصل مخصص للمعاينة التقنية واختبار بنية الفصول والموضوعات في محرك المنصة.
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            COMPACT CHAPTER HEADER & REAL PROGRESS
           ========================================================================= */}
        <header className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-9 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-xl border border-[#D4E9DC]">
                {course.code} &bull; {chapter.title.startsWith('الموضوع') ? `الموضوع ${chapter.order}` : `الفصل ${chapter.order}`}
              </span>
              <span className="text-xs font-semibold text-[#6C8577]">
                من مقرر: {course.title}
              </span>
            </div>

            {academicCitation && (
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-xl border border-[#D4E9DC]">
                <BookOpen className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                <span>{academicCitation}</span>
              </div>
            )}
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#173D2B] mb-3 leading-tight">
              {chapter.title}
            </h1>
            {chapter.description && (
              <p className="text-[#486555] text-sm sm:text-base leading-relaxed max-w-3xl">
                {chapter.description}
              </p>
            )}
          </div>

          {/* Real Learning Progress Display */}
          <ChapterProgressBar
            completedTopicsCount={progressStats.completedTopicsCount}
            totalTopics={progressStats.totalTopics}
            progressPercentage={progressStats.progressPercentage}
            isChapterQuizCompleted={progressStats.isChapterQuizCompleted}
          />
        </header>

        {/* =========================================================================
            TOPICS LIST (Author's Original Order)
           ========================================================================= */}
        <section aria-labelledby="topics-heading" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center font-bold border border-[#D4E9DC]">
                <Folder className="w-4 h-4" />
              </div>
              <div>
                <h2 id="topics-heading" className="text-xl sm:text-2xl font-black text-[#173D2B]">
                  موضوعات الفصل ({topics.length})
                </h2>
                <p className="text-xs text-[#6C8577]">
                  الموضوعات مرتبة وفق فهرس المؤلف الأصلي، يفتح كل موضوع مساحة التعلم المتكاملة الخاصة به
                </p>
              </div>
            </div>
          </div>

          {topics.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {topics.map((topic) => {
                const topicProgress = getTopicProgress(course.id, chapter.id, topic.id);
                const isCompleted = topicProgress.isCompleted;

                return (
                  <div
                    key={topic.id}
                    className={`bg-white rounded-3xl border transition-all p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5 ${
                      isCompleted ? 'border-[#00C853]/60 bg-[#F4FFF7]/30' : 'border-[#D4E9DC] hover:border-[#00C853]'
                    }`}
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-lg bg-[#E8F8EE] text-[#173D2B] font-mono text-xs font-bold flex items-center justify-center border border-[#D4E9DC]">
                          {topic.order}
                        </span>
                        <h3 className="text-lg font-black text-[#173D2B]">
                          {topic.title}
                        </h3>

                        {topic.headingClassification && (
                          <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full border bg-[#F4FFF7] border-[#D4E9DC] text-[#486555] shrink-0">
                            {topic.headingClassification === 'educational_organizational'
                              ? 'عنوان تنظيمي تربوي'
                              : 'عنوان المؤلف الأصلي'}
                          </span>
                        )}

                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#059669] bg-[#E8F8EE] px-2.5 py-0.5 rounded-lg border border-[#D4E9DC]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A844]" />
                            <span>مكتمل</span>
                          </span>
                        )}
                      </div>

                      {topic.description && (
                        <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                          {topic.description}
                        </p>
                      )}

                      <div className="flex items-center gap-2 text-xs font-semibold text-[#6C8577] pt-1">
                        <span className="inline-flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-[#00C853]" />
                          <span>مسار التعلم: فيديو &bull; ملخص مكتوب</span>
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm shrink-0 transition-colors shadow-sm shadow-[#00C853]/20"
                    >
                      <span>{isCompleted ? 'مراجعة الموضوع' : 'بدء دراسة الموضوع'}</span>
                      <ArrowLeft className="w-4 h-4 text-[#071C12]" />
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 text-center space-y-3 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center mx-auto border border-[#D4E9DC]">
                <Folder className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#173D2B]">محتوى هذا الفصل قيد التجهيز</h3>
              <p className="text-xs sm:text-sm text-[#486555] max-w-md mx-auto leading-relaxed">
                لم يتم إدراج موضوعات لهذا الفصل حتى الآن، وسيتم إتاحتها فور اكتمال تجهيز المادة العلمية.
              </p>
            </div>
          )}
        </section>

        {/* =========================================================================
            FINAL CHAPTER QUIZ SECTION
           ========================================================================= */}
        <ChapterQuizSection
          courseId={course.id}
          chapter={chapter}
          onComplete={() => setProgressKey((k) => k + 1)}
        />

        {/* Back Link to Course */}
        <div className="pt-2">
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173D2B] hover:text-[#00A844] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            <span>العودة إلى تفاصيل المقرر ({course.title})</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
