/**
 * TopicDetailPage.tsx
 * Dedicated Video-Centric Topic Learning Interface for OloomSport.
 *
 * Educational Structure:
 * Course → Chapter → Topics → Video + Written Summary + Topic Quiz → Final Chapter Quiz.
 *
 * Core Features:
 * - 3 Clear Tabs:
 *   1. Video: responsive 16:9 player (supports multiple videos only if provided, else unavailable state).
 *   2. Summary: clean RTL written content (renders approved textbook blocks, else unavailable state).
 *   3. Questions: simple interactive quiz with immediate answer feedback (else unavailable state).
 * - Real completion and quiz score persistence (localStorage, never fabricated).
 * - Preserves author's exact titles and ordering.
 * - Arabic RTL, Cairo typography, Sport Energy palette.
 */

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link, Navigate } from 'react-router-dom';
import {
  getCourseById,
  getChapterById,
  getTopicById,
  getTopicsByChapter,
  getAcademicBreadcrumbs,
} from '../data/academic/selectors';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import { TopicVideoSection } from '../components/academic/TopicVideoSection';
import { TopicSummarySection } from '../components/academic/TopicSummarySection';
import { TopicQuizSection } from '../components/academic/TopicQuizSection';
import { getTopicProgress, setTopicProgress } from '../utils/progressPersistence';
import { isDevSandboxAllowed } from '../utils/devRouteGuard';
import {
  Video,
  FileText,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';

type TopicTab = 'video' | 'summary' | 'quiz';

export const TopicDetailPage: React.FC = () => {
  const { courseId, chapterId, topicId } = useParams<{
    courseId: string;
    chapterId: string;
    topicId: string;
  }>();

  const [searchParams, setSearchParams] = useSearchParams();
  const rawTab = searchParams.get('tab') as TopicTab | null;
  const activeTab: TopicTab = rawTab && ['video', 'summary', 'quiz'].includes(rawTab) ? rawTab : 'video';
  const [_progressRefresh, setProgressRefresh] = useState<number>(0);

  const setActiveTab = (tab: TopicTab) => {
    setSearchParams({ tab }, { replace: true });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  if (!courseId || !chapterId || !topicId) {
    return <Navigate to="/courses" replace />;
  }

  // Transparent redirect for Chapter 3 legacy broad topic to the chapter topics listing
  if (chapterId === 'chap-curriculum-elements' && topicId === 'top-ch3-implementation-elements') {
    return <Navigate to={`/courses/${courseId}/chapters/${chapterId}`} replace />;
  }

  // Transparent redirect for Chapter 4 legacy broad topic to the chapter topics listing
  if (chapterId === 'chap-curriculum-factors' && topicId === 'top-ch4-future-curriculum-formula') {
    return <Navigate to={`/courses/${courseId}/chapters/${chapterId}`} replace />;
  }

  // Transparent redirects for Chapter 5 legacy broad topics to the chapter topics listing
  if (
    chapterId === 'chap-curriculum-designs' &&
    (topicId === 'top-ch5-design-principles' || topicId === 'top-ch5-curriculum-organizations')
  ) {
    return <Navigate to={`/courses/${courseId}/chapters/${chapterId}`} replace />;
  }

  // Transparent redirects for Unit 6 legacy broad topics to the chapter topics listing
  if (
    chapterId === 'chap-curriculum-unit-design' &&
    (topicId === 'top-ch6-unit-plan-framework' || topicId === 'top-ch6-practical-units-skills')
  ) {
    return <Navigate to={`/courses/${courseId}/chapters/${chapterId}`} replace />;
  }

  // Transparent redirects for Unit 7 legacy broad topics to the chapter topics listing
  if (
    chapterId === 'chap-curriculum-planning' &&
    (topicId === 'top-ch7-planning-concepts-models' ||
      topicId === 'top-ch7-planning-strategy-steps' ||
      topicId === 'top-ch7-planning-criteria-and-roles')
  ) {
    return <Navigate to={`/courses/${courseId}/chapters/${chapterId}`} replace />;
  }

  const course = getCourseById(courseId);
  const chapter = getChapterById(courseId, chapterId);
  const topic = getTopicById(chapterId, topicId);

  // If not found or unauthorized sandbox
  if (!course || !chapter || !topic || (course.isDevSandbox && !isDevSandboxAllowed())) {
    return (
      <div className="py-16 bg-[#F4FFF7] min-h-[75vh] flex items-center justify-center text-right" dir="rtl">
        <div className="max-w-md mx-auto px-4 text-center space-y-5 bg-white p-8 rounded-3xl border border-[#D4E9DC] shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-xl font-black text-[#173D2B]">الموضوع الدراسي غير موجود</h1>
            <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
              عذراً، لم يتم العثور على الموضوع المطلوب ضمن هذا الفصل.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00C853] text-[#071C12] font-black text-xs hover:bg-[#39E66D] transition-colors"
          >
            <span>استعراض دليل المواد الدراسية</span>
          </Link>
        </div>
      </div>
    );
  }

  // Derive all topics in this chapter for sequential navigation
  const allTopics = getTopicsByChapter(chapter.id).sort((a, b) => a.order - b.order);
  const currentIndex = allTopics.findIndex((t) => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Real progress state
  const topicProgress = getTopicProgress(course.id, chapter.id, topic.id);
  const isCompleted = topicProgress.isCompleted;

  const handleToggleCompletion = () => {
    setTopicProgress(course.id, chapter.id, topic.id, {
      isCompleted: !isCompleted,
      quizScore: topicProgress.quizScore,
    });
    setProgressRefresh((k) => k + 1);
  };

  const breadcrumbs = getAcademicBreadcrumbs({
    courseId: course.id,
    chapterId: chapter.id,
    topicId: topic.id,
  });

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[85vh] transition-colors text-right" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Sandbox Banner if sandbox */}
        {course.isDevSandbox && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2">
                <span className="font-black text-amber-900 text-base">بيئة الاختبار التقني (موضوع تجريبي)</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  Dev Sandbox
                </span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                هذا الموضوع مخصص للمعاينة التقنية واختبار تجربة التعلم القائمة على الفيديو والملخص والأسئلة.
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            TOPIC HEADER & COMPLETION STATUS
           ========================================================================= */}
        <header className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-9 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-xl border border-[#D4E9DC]">
                موضوع {topic.order} &bull; {chapter.title}
              </span>
            </div>

            {/* Completion Toggle Button */}
            <button
              type="button"
              onClick={handleToggleCompletion}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-[#E8F8EE] text-[#059669] border border-[#00C853]'
                  : 'bg-[#F4FFF7] text-[#486555] border border-[#D4E9DC] hover:text-[#173D2B]'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-[#00A844]' : 'text-gray-400'}`} />
              <span>{isCompleted ? 'تم إكمال هذا الموضوع' : 'تحديد الموضوع كمكتمل'}</span>
            </button>
          </div>

          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#173D2B] mb-3 leading-tight">
              {topic.title}
            </h1>
            {topic.description && (
              <p className="text-[#486555] text-sm sm:text-base leading-relaxed max-w-3xl">
                {topic.description}
              </p>
            )}
          </div>
        </header>

        {/* =========================================================================
            THE 3 CLEAR TABS: VIDEO | SUMMARY | QUESTIONS
           ========================================================================= */}
        <div className="space-y-6">
          <div
            role="tablist"
            aria-label="أقسام التعلم للموضوع"
            className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-[#D4E9DC] shadow-xs"
          >
            <button
              role="tab"
              aria-selected={activeTab === 'video'}
              onClick={() => setActiveTab('video')}
              className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'text-[#486555] hover:text-[#173D2B] hover:bg-[#F4FFF7]'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>الفيديو التعليمي</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'summary'}
              onClick={() => setActiveTab('summary')}
              className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'summary'
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'text-[#486555] hover:text-[#173D2B] hover:bg-[#F4FFF7]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>الملخص المكتوب</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'quiz'}
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'text-[#486555] hover:text-[#173D2B] hover:bg-[#F4FFF7]'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>الأسئلة والتقويم</span>
            </button>
          </div>

          {/* Tab 1: Video */}
          {activeTab === 'video' && (
            <div role="tabpanel" aria-label="الفيديو التعليمي">
              <TopicVideoSection
                topicTitle={topic.title}
                videos={topic.videos}
                video={topic.video}
              />
            </div>
          )}

          {/* Tab 2: Summary */}
          {activeTab === 'summary' && (
            <div role="tabpanel" aria-label="الملخص المكتوب">
              <TopicSummarySection topic={topic} />
            </div>
          )}

          {/* Tab 3: Questions */}
          {activeTab === 'quiz' && (
            <div role="tabpanel" aria-label="الأسئلة والتقويم">
              <TopicQuizSection
                courseId={course.id}
                chapterId={chapter.id}
                topic={topic}
                fallbackQuestions={chapter.selfCheckQuestions}
                onComplete={() => setProgressRefresh((k) => k + 1)}
              />
            </div>
          )}
        </div>

        {/* =========================================================================
            SEQUENTIAL TOPIC NAVIGATION & BACK LINK
           ========================================================================= */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D4E9DC]/80">
          <div>
            <Link
              to={`/courses/${course.id}/chapters/${chapter.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#173D2B] hover:text-[#00A844] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              <span>العودة إلى موضوعات الفصل ({chapter.title})</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {prevTopic && (
              <Link
                to={`/courses/${course.id}/chapters/${chapter.id}/topics/${prevTopic.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#D4E9DC] text-xs font-bold text-[#173D2B] hover:bg-[#F4FFF7] transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
                <span>الموضوع السابق</span>
              </Link>
            )}

            {nextTopic && (
              <Link
                to={`/courses/${course.id}/chapters/${chapter.id}/topics/${nextTopic.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00C853] text-[#071C12] text-xs font-black hover:bg-[#39E66D] transition-colors shadow-xs"
              >
                <span>الموضوع التالي</span>
                <ChevronLeft className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
