/**
 * ChapterDetailPage.tsx
 * Dynamic, Data-Driven Chapter Interface (قالب الفصل التعليمي الديناميكي الموحد)
 *
 * Refactored Architecture:
 * - 100% data-driven: derives all content strictly from the active route's resolved chapter.
 * - Zero hardcoded dependencies on any specific subject or first-chapter pilot data.
 * - Fully reusable across all 6 official PE subjects and future chapters.
 * - Conditionally renders optional academic sections (Visual Hub, Applied Activities,
 *   Glossary, Key Points, Self-Check Questions) only when corresponding chapter data exists.
 * - Renders graceful empty states when a chapter has no topics yet.
 * - Renders a distinct not-found state when a chapter or course route is invalid.
 * - Strictly zero study-time duration displays.
 * - Cairo typography, full RTL support, Sport Energy palette.
 */

import React, { useState, Suspense, lazy } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  getCourseById,
  getChapterById,
  getTopicsByChapter,
  getAcademicBreadcrumbs,
} from '../data/academic/selectors';
import { BreadcrumbNav } from '../components/academic/BreadcrumbNav';
import { isDevSandboxAllowed } from '../utils/devRouteGuard';
import {
  Folder,
  ArrowLeft,
  ChevronRight,
  FileText,
  Sparkles,
  BookOpen,
  Target,
  Layers,
  CheckCircle2,
  Columns3,
  ListOrdered,
  Network,
  UserCheck,
  HelpCircle,
  Award,
  AlertTriangle,
} from 'lucide-react';

// Lazy load visual engines for Cloudflare Pages Free budget performance
const VisualComparisonView = lazy(() =>
  import('../components/academic/visual/VisualComparisonView').then((m) => ({
    default: m.VisualComparisonView,
  }))
);
const EducationalStepsView = lazy(() =>
  import('../components/academic/visual/EducationalStepsView').then((m) => ({
    default: m.EducationalStepsView,
  }))
);
const InteractiveDiagramView = lazy(() =>
  import('../components/academic/visual/InteractiveDiagramView').then((m) => ({
    default: m.InteractiveDiagramView,
  }))
);
const DecisionScenarioView = lazy(() =>
  import('../components/academic/visual/DecisionScenarioView').then((m) => ({
    default: m.DecisionScenarioView,
  }))
);
const VisualSequenceView = lazy(() =>
  import('../components/academic/visual/VisualSequenceView').then((m) => ({
    default: m.VisualSequenceView,
  }))
);

const VisualLoadingFallback: React.FC = () => (
  <div className="my-6 p-8 rounded-3xl bg-[#F4FFF7] border border-[#D4E9DC] text-center text-xs text-[#486555] flex items-center justify-center gap-2">
    <div className="w-4 h-4 rounded-full border-2 border-[#00C853] border-t-transparent animate-spin" />
    <span>جاري تحميل الأداة البصرية التفاعلية...</span>
  </div>
);

type VisualTabType = 'comparison' | 'steps' | 'map' | 'decision';

interface VisualTabConfig {
  id: VisualTabType;
  label: string;
  icon: React.ReactNode;
}

export const ChapterDetailPage: React.FC = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();

  const course = courseId ? getCourseById(courseId) : undefined;
  const chapter = courseId && chapterId ? getChapterById(courseId, chapterId) : undefined;

  // Dynamically configure available Visual Hub tabs based on actual chapter data
  const visualHub = chapter?.visualHub;
  const availableVisualTabs: VisualTabConfig[] = [];
  if (visualHub?.comparisonBlock) {
    availableVisualTabs.push({
      id: 'comparison',
      label: '1. المقارنة التفاعلية',
      icon: <Columns3 className="w-4 h-4" />,
    });
  }
  if (visualHub?.stepsBlock) {
    availableVisualTabs.push({
      id: 'steps',
      label: '2. تسلسل المراحل',
      icon: <ListOrdered className="w-4 h-4" />,
    });
  }
  if (visualHub?.diagramBlock) {
    availableVisualTabs.push({
      id: 'map',
      label: '3. خريطة المفاهيم',
      icon: <Network className="w-4 h-4" />,
    });
  }
  if (visualHub?.decisionBlock) {
    availableVisualTabs.push({
      id: 'decision',
      label: '4. موقف اتخاذ القرار',
      icon: <UserCheck className="w-4 h-4" />,
    });
  }

  // Visual tab state: user-selected tab or derived first available tab
  const [selectedVisualTab, setSelectedVisualTab] = useState<VisualTabType | null>(null);
  const activeVisualTab =
    selectedVisualTab && availableVisualTabs.some((t) => t.id === selectedVisualTab)
      ? selectedVisualTab
      : availableVisualTabs[0]?.id || 'comparison';

  // Self-assessment question accordion state
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const toggleQuestion = (qId: string) => {
    setExpandedQuestionId((prev) => (prev === qId ? null : qId));
  };

  if (!courseId || !chapterId) {
    return <Navigate to="/courses" replace />;
  }

  // Guard development sandbox in production
  if (course && course.isDevSandbox && !isDevSandboxAllowed()) {
    return <Navigate to="/courses" replace />;
  }

  // If the course itself does not exist, navigate safely to courses catalog
  if (!course) {
    return (
      <div className="py-16 bg-[#F4FFF7] min-h-[75vh] flex items-center justify-center text-right" dir="rtl">
        <div className="max-w-md mx-auto px-4 text-center space-y-5 bg-white p-8 rounded-3xl border border-[#D4E9DC] shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-xl font-black text-[#173D2B]">
              المقرر الدراسي غير موجود
            </h1>
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

  // If the course exists but the chapter does not, render a distinct chapter-not-found state
  if (!chapter) {
    return (
      <div className="py-16 bg-[#F4FFF7] min-h-[75vh] flex items-center justify-center text-right" dir="rtl">
        <div className="max-w-md mx-auto px-4 text-center space-y-5 bg-white p-8 rounded-3xl border border-[#D4E9DC] shadow-xs">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h1 className="text-xl font-black text-[#173D2B]">
              الفصل الدراسي غير موجود
            </h1>
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

  // Resolve topics and metrics strictly from the active chapter
  const topics = getTopicsByChapter(chapter.id);
  const totalLessons = topics.reduce((acc, t) => acc + (t.lessons?.length || 0), 0);
  const totalBlocks = topics.reduce(
    (acc, t) => acc + (t.lessons || []).reduce((bAcc, l) => bAcc + (l.blocks?.length || 0), 0),
    0
  );

  const breadcrumbs = getAcademicBreadcrumbs({
    courseId: course.id,
    chapterId: chapter.id,
  });

  // Determine which optional sections have data for this chapter
  const hasVisualHub = availableVisualTabs.length > 0;
  const hasSequenceActivity = Boolean(visualHub?.sequenceBlock);
  const hasGlossary = Boolean(chapter.glossary && chapter.glossary.length > 0);
  const hasKeyPoints = Boolean(chapter.keyPoints && chapter.keyPoints.length > 0);
  const hasSelfCheck = Boolean(chapter.selfCheckQuestions && chapter.selfCheckQuestions.length > 0);
  const hasReviewSection = hasGlossary || hasKeyPoints || hasSelfCheck;

  // Resolve academic reference display
  const academicCitation =
    chapter.academicReference?.bookTitle
      ? `${chapter.academicReference.bookTitle} ${chapter.academicReference.pageRange ? `(${chapter.academicReference.pageRange})` : ''}`
      : course.targetBookReference || null;

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[85vh] transition-colors text-right" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Sandbox Showcase Notice (renders only if isDevSandbox flag is explicitly set) */}
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
                هذا الفصل مخصص للمعاينة التقنية واختبار بنية الفصول والموضوعات في محرك المنصة، وهو معزول تماماً عن المقررات الرسمية الست.
              </p>
            </div>
          </div>
        )}

        {/* =========================================================================
            SECTION A: مقدمة الفصل والأهداف التعليمية (Chapter Header & Goals)
           ========================================================================= */}
        <header className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-9 shadow-xs relative overflow-hidden space-y-5">
          {/* Top Identifier Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-xl border border-[#D4E9DC]">
                {course.code} &bull; الفصل {chapter.order}
              </span>
              <span className="text-xs font-semibold text-[#6C8577]">
                من مقرر: {course.title}
              </span>
            </div>

            {/* Academic Reference Tag (Derived dynamically) */}
            {academicCitation && (
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-xl border border-[#D4E9DC]">
                <BookOpen className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
                <span>{academicCitation}</span>
              </div>
            )}
          </div>

          {/* Chapter Title & Description */}
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

          {/* Pedagogical Metrics Bar (Strictly ZERO time duration) */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-[#D4E9DC]/80 text-xs">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
              <Folder className="w-3.5 h-3.5 text-[#00C853]" />
              <span>{topics.length} موضوعات دراسية</span>
            </span>
            {totalLessons > 0 && (
              <span className="inline-flex items-center gap-1.5 font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
                <FileText className="w-3.5 h-3.5 text-[#00C853]" />
                <span>{totalLessons} دروس تفاعلية</span>
              </span>
            )}
            {totalBlocks > 0 && (
              <span className="inline-flex items-center gap-1.5 font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
                <Layers className="w-3.5 h-3.5 text-[#00C853]" />
                <span>{totalBlocks} كتل محتوى أكاديمي</span>
              </span>
            )}
            {hasVisualHub && (
              <span className="inline-flex items-center gap-1.5 font-bold text-[#059669] bg-[#E8F8EE] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
                <span>{availableVisualTabs.length} أدوات بصرية تفاعلية</span>
              </span>
            )}
          </div>

          {/* Learning Objectives Box (Rendered only if defined) */}
          {chapter.learningObjectives && chapter.learningObjectives.length > 0 && (
            <div className="bg-gradient-to-br from-[#F4FFF7] to-[#E8F8EE]/60 rounded-2xl p-5 border border-[#D4E9DC] space-y-3">
              <div className="flex items-center gap-2 text-[#173D2B] font-black text-sm">
                <Target className="w-4 h-4 text-[#00C853]" />
                <span>الأهداف التعليمية المستهدفة للفصل ({chapter.learningObjectives.length} أهداف):</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#173D2B]">
                {chapter.learningObjectives.map((obj: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-[#D4E9DC]/60">
                    <CheckCircle2 className="w-4 h-4 text-[#00A844] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* =========================================================================
            SECTION B: الشرح الأكاديمي وموضوعات الفصل (Structured Topics & Lessons)
           ========================================================================= */}
        <section aria-labelledby="section-b-title" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center font-bold border border-[#D4E9DC]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 id="section-b-title" className="text-xl sm:text-2xl font-black text-[#173D2B]">
                  بنية موضوعات ودروس الفصل ({topics.length})
                </h2>
                <p className="text-xs text-[#6C8577]">
                  المحتوى الأكاديمي منظم في موضوعات ودروس واضحة
                </p>
              </div>
            </div>
          </div>

          {topics.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white rounded-3xl border border-[#D4E9DC] p-6 shadow-xs hover:border-[#00C853] transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-[#E8F8EE] text-[#173D2B] font-mono text-xs font-bold flex items-center justify-center border border-[#D4E9DC]">
                          {topic.order}
                        </span>
                        <h3 className="text-lg font-black text-[#173D2B]">
                          {topic.title}
                        </h3>
                      </div>
                      {topic.description && (
                        <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                          {topic.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Lessons in this Topic */}
                  {topic.lessons && topic.lessons.length > 0 ? (
                    <div className="space-y-2 pt-2 border-t border-[#D4E9DC]/70">
                      {topic.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="bg-[#F4FFF7] rounded-2xl p-4 border border-[#D4E9DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#E8F8EE]/60 transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-[#00A844] bg-white px-2.5 py-0.5 rounded-lg border border-[#D4E9DC]">
                                درس {lesson.order}
                              </span>
                              <h4 className="text-sm font-black text-[#173D2B]">
                                {lesson.title}
                              </h4>
                            </div>
                            {lesson.description && (
                              <p className="text-xs text-[#486555] leading-relaxed max-w-2xl">
                                {lesson.description}
                              </p>
                            )}
                            <div className="flex items-center gap-2 text-[11px] font-bold text-[#6C8577]">
                              <span>{lesson.blocks?.length || 0} كتل تعليمية</span>
                              <span>&bull;</span>
                              <span>{lesson.learningObjectives?.length || 0} أهداف مستهدفة</span>
                            </div>
                          </div>

                          <Link
                            to={`/courses/${course.id}/chapters/${chapter.id}/topics/${topic.id}/lessons/${lesson.id}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm shrink-0 transition-colors shadow-sm shadow-[#00C853]/20"
                          >
                            <span>بدء دراسة الدرس</span>
                            <ArrowLeft className="w-4 h-4 text-[#071C12]" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs text-[#6C8577] pt-2 border-t border-[#D4E9DC]/70">
                      دروس هذا الموضوع قيد الإعداد الأكاديمي.
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Respectful empty state when chapter has no topics yet */
            <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 text-center space-y-3 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center mx-auto border border-[#D4E9DC]">
                <Folder className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#173D2B]">
                محتوى هذا الفصل قيد التجهيز
              </h3>
              <p className="text-xs sm:text-sm text-[#486555] max-w-md mx-auto leading-relaxed">
                لم يتم إدراج موضوعات أو دروس لهذا الفصل حتى الآن، وسيتم تحديثها فور اعتماد المادة العلمية.
              </p>
            </div>
          )}
        </section>

        {/* =========================================================================
            SECTION C: افهم بصرياً — المحركات البصرية الذكية (Optional / Data-Driven)
           ========================================================================= */}
        {hasVisualHub && (
          <section aria-labelledby="section-c-title" className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D4E9DC]/80 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#103D27] text-[#39E66D] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-[#00C853]" />
                </div>
                <div>
                  <h2 id="section-c-title" className="text-xl sm:text-2xl font-black text-[#173D2B]">
                    افهم بصرياً (Smart Educational Visuals)
                  </h2>
                  <p className="text-xs text-[#6C8577]">
                    أدوات بصرية تفاعلية هادئة تخدم مفاهيم الفصل بدقة وأمانة علمية
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Tabs Navigation */}
            <div className="flex flex-wrap items-center gap-2 bg-[#F4FFF7] p-1.5 rounded-2xl border border-[#D4E9DC]">
              {availableVisualTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedVisualTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeVisualTab === tab.id
                      ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                      : 'text-[#173D2B] hover:bg-[#E8F8EE]'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Visual Active Tool Showcase */}
            <div className="pt-2">
              <Suspense fallback={<VisualLoadingFallback />}>
                {activeVisualTab === 'comparison' && visualHub?.comparisonBlock && (
                  <VisualComparisonView block={visualHub.comparisonBlock} />
                )}
                {activeVisualTab === 'steps' && visualHub?.stepsBlock && (
                  <EducationalStepsView block={visualHub.stepsBlock} />
                )}
                {activeVisualTab === 'map' && visualHub?.diagramBlock && (
                  <InteractiveDiagramView block={visualHub.diagramBlock} />
                )}
                {activeVisualTab === 'decision' && visualHub?.decisionBlock && (
                  <DecisionScenarioView block={visualHub.decisionBlock} />
                )}
              </Suspense>
            </div>
          </section>
        )}

        {/* =========================================================================
            SECTION D: نشاط تطبيقي (Applied Learning Activities — Optional)
           ========================================================================= */}
        {hasSequenceActivity && visualHub?.sequenceBlock && (
          <section aria-labelledby="section-d-title" className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#D4E9DC]/80">
              <div className="w-8 h-8 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h2 id="section-d-title" className="text-xl sm:text-2xl font-black text-[#173D2B]">
                  النشاط التطبيقي للفصل
                </h2>
                <p className="text-xs text-[#6C8577]">
                  تطبيق المفاهيم في مواقف ترتيب وتقويم عملية
                </p>
              </div>
            </div>

            <Suspense fallback={<VisualLoadingFallback />}>
              <VisualSequenceView block={visualHub.sequenceBlock} />
            </Suspense>
          </section>
        )}

        {/* =========================================================================
            SECTION E: المراجعة والتقويم الذاتي (Review & Self-Assessment — Optional)
           ========================================================================= */}
        {hasReviewSection && (
          <section aria-labelledby="section-e-title" className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#D4E9DC]/80">
              <div className="w-8 h-8 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#00A844]" />
              </div>
              <div>
                <h2 id="section-e-title" className="text-xl sm:text-2xl font-black text-[#173D2B]">
                  المراجعة الأكاديمية والتقويم الذاتي
                </h2>
                <p className="text-xs text-[#6C8577]">
                  تأكيد الفهم واسترجاع المصطلحات والمبادئ الأساسية المعتمدة
                </p>
              </div>
            </div>

            {/* 1. Core Terms Glossary */}
            {hasGlossary && chapter.glossary && (
              <div className="space-y-3">
                <h3 className="text-sm font-black text-[#173D2B] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#00C853]" />
                  <span>قاموس المصطلحات الأساسية المعتمدة للفصل ({chapter.glossary.length} مصطلحات):</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {chapter.glossary.map((term, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F4FFF7] p-4 rounded-2xl border border-[#D4E9DC] space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-black text-xs text-[#00A844] block">
                          {term.term}
                        </span>
                        {term.citation && (
                          <span className="text-[10px] font-semibold text-[#6C8577]">
                            {term.citation}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#173D2B] leading-relaxed">
                        {term.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Key Academic Takeaways */}
            {hasKeyPoints && chapter.keyPoints && (
              <div className="bg-[#E8F8EE]/70 rounded-2xl p-5 border border-[#D4E9DC] space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-[#103D27]">
                  <Sparkles className="w-4 h-4 text-[#00C853]" />
                  <span>خلاصة الأسس المستفادة من الفصل:</span>
                </div>
                <ul className="space-y-2 text-xs text-[#173D2B]">
                  {chapter.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. Self-Check Comprehension Questions */}
            {hasSelfCheck && chapter.selfCheckQuestions && (
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-black text-[#173D2B] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#00C853]" />
                  <span>أسئلة الفهم والتطبيق ({chapter.selfCheckQuestions.length} أسئلة):</span>
                </h3>

                <div className="space-y-2.5">
                  {chapter.selfCheckQuestions.map((q) => {
                    const isExpanded = expandedQuestionId === q.id;
                    return (
                      <div
                        key={q.id}
                        className="border border-[#D4E9DC] rounded-2xl overflow-hidden transition-all bg-[#F8FAF9]"
                      >
                        <button
                          type="button"
                          onClick={() => toggleQuestion(q.id)}
                          className="w-full p-4 text-right flex items-center justify-between gap-3 hover:bg-[#F4FFF7] cursor-pointer"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-6 h-6 rounded-lg bg-[#E8F8EE] text-[#173D2B] font-mono text-xs font-black flex items-center justify-center shrink-0">
                              ؟
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#173D2B] leading-snug">
                              {q.question}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-[#00A844] shrink-0">
                            {isExpanded ? 'إخفاء الإجابة ▲' : 'عرض الإجابة ▼'}
                          </span>
                        </button>

                        {isExpanded && (
                          <div className="p-4 bg-white border-t border-[#D4E9DC] text-xs text-[#486555] leading-relaxed space-y-1">
                            <p>{q.answer}</p>
                            {q.citation && (
                              <span className="text-[10px] font-bold text-[#6C8577] block text-left">
                                المرجع في الكتاب: {q.citation}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        )}

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
