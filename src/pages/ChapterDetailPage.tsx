/**
 * ChapterDetailPage.tsx
 * Unified Chapter Template (قالب الفصل التعليمي الموحد)
 * Phase 4.2 — Smart Educational Visual System
 *
 * Implements the 5 Unified Chapter Template Sections:
 * A. مقدمة الفصل والأهداف التعليمية (Chapter Header & Goals)
 * B. الشرح الأكاديمي المنظم وموضوعات الفصل (Structured Academic Content & Topics)
 * C. افهم بصرياً (Smart Educational Visuals Hub — Comparison, Steps, Concept Map, Decision Scenario)
 * D. نشاط تطبيقي (Applied Learning Activities — Sequence Ordering)
 * E. المراجعة والتقويم الأكاديمي (Review & Self-Assessment — Glossary, Questions, Key Points)
 *
 * Strict Compliance:
 * - ZERO study time estimates (no minutes, hours, or reading durations).
 * - High-contrast Cairo typography, light reading background (#F4FFF7 / #FFFFFF).
 * - Full RTL support.
 * - Cloudflare Pages Free budget compliant with lazy loaded visual engines.
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
import {
  BLOCK_VISUAL_COMPARISON,
  BLOCK_ANIMATED_STEPS,
  BLOCK_INTERACTIVE_DIAGRAM,
  BLOCK_DECISION_SCENARIO,
  BLOCK_VISUAL_SEQUENCE,
  BLOCK_KEY_POINTS,
  CURRICULUM_ACADEMIC_REFERENCE,
} from '../data/academic/curriculumPilotData';
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
} from 'lucide-react';

// Lazy load visual engines for Cloudflare Pages Free performance
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

// Self-assessment comprehension questions
const CHAPTER_SELF_CHECK_QUESTIONS = [
  {
    id: 'q1',
    question: 'ما الفارق الجوهري بين تركيز المفهوم التقليدي وتركيز المفهوم الحديث للمنهج؟',
    answer:
      'المفهوم التقليدي يضع المادة الدراسية والمعرفة المجردة في المركز والغاية النهائية، بينما المفهوم الحديث ينقل بؤرة الاهتمام إلى المتعلم ونموه الشامل في كافة الأبعاد (البدنية، المهارية، النفسية، والاجتماعية) من خلال سلسلة من الخبرات والأنشطة الموجهة تحت إشراف وتوجيه المدرسة (ص 2، 5).',
    citation: 'ص 2، 5',
  },
  {
    id: 'q2',
    question: 'كيف يطبق معلم التربية الرياضية مبدأ "لا مركزية المحتوى" في مدرسة تفتقر لملاعب قانونية؟',
    answer:
      'تلتزم المدرسة بالأهداف التربوية المركزية العامة (تنمية الرشاقة، التوافق، والتعاون)، لكن يمتلك المعلم مرونة تكييف المحتوى الحركي والألعاب واستخدام أدوات بديلة وملاعب مصغرة أو أسلوب المحطات الدائرية بما يتلاءم تماماً مع إمكانات المدرسة المتاحة دون إخلال بالأهداف المركزية (ص 4).',
    citation: 'ص 4',
  },
  {
    id: 'q3',
    question: 'لماذا يعتبر تطوير منهج التربية الرياضية عملية مستمرة ليس لها نهاية؟',
    answer:
      'لأن احتياجات المجتمع وفلسفته تتغير باستمرار، وتتجدد منجزات التكنولوجيا والعلوم الرياضية، مما يستوجب التقويم الدائم للمناهج وتجريب المقررات في الميدان لتعديلها وإتاحة فرص التحسين المستمر ومواكبة متطلبات العصر (ص 2، 3).',
    citation: 'ص 2، 3',
  },
];

// Glossary of Core Terms
const CHAPTER_GLOSSARY = [
  {
    term: 'المنهج لغةً',
    definition: 'النهج أو الطريق والمسار الواضح للتعليم والتعلم (ص 6).',
  },
  {
    term: 'المنهج اصطلاحاً',
    definition:
      'مشتق من اللاتينية Curriculum بمعنى سلسلة أفعال أو مضمار الجري الهادف؛ وهو مجموعة الأنشطة والخبرات الموجهة لتنمية قدرات الفرد (ص 5).',
  },
  {
    term: 'المفهوم التقليدي للمنهج',
    definition:
      'مجموعة من المواد والمقررات الدراسية والمعارف والحقائق التي يضعها المختصون لتزويد ذهن المتعلم بها بوصفها حصيلة التراث الثقافي (ص 5).',
  },
  {
    term: 'المفهوم الحديث للمنهج',
    definition:
      'منظومة متكاملة من الخبرات والأنشطة الموجهة التي تخططها المدرسة وتشرف عليها داخلها وخارجها لتحقيق أقصى تنمية شاملة لشخصية المتعلم (ص 2).',
  },
  {
    term: 'مركزية الأهداف ولا مركزية المحتوى',
    definition:
      'توحيد الأهداف العامة المنشودة على مستوى الدولة مع منح المعلم والمدرسة المرونة في اختيار وتكييف الأنشطة والألعاب وفق إمكانات البيئة الميدانية (ص 4).',
  },
];

export const ChapterDetailPage: React.FC = () => {
  const { courseId, chapterId } = useParams<{ courseId: string; chapterId: string }>();
  const [activeVisualTab, setActiveVisualTab] = useState<'comparison' | 'steps' | 'map' | 'decision'>('comparison');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  if (!courseId || !chapterId) {
    return <Navigate to="/courses" replace />;
  }

  const course = getCourseById(courseId);
  const chapter = getChapterById(courseId, chapterId);

  if (!course || !chapter) {
    return <Navigate to={`/courses/${courseId}`} replace />;
  }

  const topics = getTopicsByChapter(chapter.id);
  const totalLessons = topics.reduce((acc, t) => acc + t.lessons.length, 0);
  const totalBlocks = topics.reduce(
    (acc, t) => acc + t.lessons.reduce((bAcc, l) => bAcc + l.blocks.length, 0),
    0
  );

  const breadcrumbs = getAcademicBreadcrumbs({
    courseId: course.id,
    chapterId: chapter.id,
  });

  const toggleQuestion = (qId: string) => {
    setExpandedQuestionId((prev) => (prev === qId ? null : qId));
  };

  return (
    <div className="py-10 sm:py-14 bg-[#F4FFF7] min-h-[85vh] transition-colors text-right" dir="rtl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <BreadcrumbNav items={breadcrumbs} />

        {/* Development Sandbox Banner if Dev Sandbox */}
        {course.isDevSandbox && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-amber-950">
              <div className="flex items-center gap-2">
                <span className="font-black text-amber-900 text-base">بيئة الاختبار التقني (فصل تجريبي)</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                  Dev Sandbox
                </span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                هذا الفصل مخصص للمعاينة التقنية واختبار بنية الفصول والموضوعات في محرك المنصة، وليس مادة أكاديمية معتمدة لكلية علوم الرياضة.
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

            {/* Academic Reference Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-xl border border-[#D4E9DC]">
              <BookOpen className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
              <span>{CURRICULUM_ACADEMIC_REFERENCE.bookTitle} (ص 2 - 6)</span>
            </div>
          </div>

          {/* Chapter Title & Description */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#173D2B] mb-3 leading-tight">
              {chapter.title}
            </h1>
            <p className="text-[#486555] text-sm sm:text-base leading-relaxed max-w-3xl">
              {chapter.description}
            </p>
          </div>

          {/* Pedagogical Metrics Bar (Strictly ZERO time duration) */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-[#D4E9DC]/80 text-xs">
            <span className="inline-flex items-center gap-1.5 font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
              <Folder className="w-3.5 h-3.5 text-[#00C853]" />
              <span>{topics.length} موضوعات دراسية</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
              <FileText className="w-3.5 h-3.5 text-[#00C853]" />
              <span>{totalLessons} دروس تفاعلية</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
              <Layers className="w-3.5 h-3.5 text-[#00C853]" />
              <span>{totalBlocks} كتل محتوى أكاديمي</span>
            </span>
            <span className="inline-flex items-center gap-1.5 font-bold text-[#059669] bg-[#E8F8EE] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#00C853]" />
              <span>4 أدوات بصرية تفاعلية ذكية</span>
            </span>
          </div>

          {/* Learning Objectives Box */}
          {chapter.learningObjectives && chapter.learningObjectives.length > 0 && (
            <div className="bg-gradient-to-br from-[#F4FFF7] to-[#E8F8EE]/60 rounded-2xl p-5 border border-[#D4E9DC] space-y-3">
              <div className="flex items-center gap-2 text-[#173D2B] font-black text-sm">
                <Target className="w-4 h-4 text-[#00C853]" />
                <span>الأهداف التعليمية المستهدفة للفصل (5 أهداف معتمدة):</span>
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
                  المحتوى الأكاديمي منظم في فقرات ومفاهيم واضحة مستخلصة من صفحات الكتاب
                </p>
              </div>
            </div>
          </div>

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
                    <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>

                {/* Lessons in this Topic */}
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
                        <p className="text-xs text-[#486555] leading-relaxed max-w-2xl">
                          {lesson.description}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] font-bold text-[#6C8577]">
                          <span>{lesson.blocks.length} كتل تعليمية</span>
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
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION C: افهم بصرياً — المحركات البصرية الذكية الأربعة
           ========================================================================= */}
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
                  أربعة محركات بصرية هادئة تخدم المفاهيم الأكاديمية دون تعقيد كرتوني
                </p>
              </div>
            </div>
          </div>

          {/* Visual Tabs Navigation */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F4FFF7] p-1.5 rounded-2xl border border-[#D4E9DC]">
            <button
              type="button"
              onClick={() => setActiveVisualTab('comparison')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeVisualTab === 'comparison'
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'text-[#173D2B] hover:bg-[#E8F8EE]'
              }`}
            >
              <Columns3 className="w-4 h-4" />
              <span>1. المقارنة التفاعلية</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveVisualTab('steps')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeVisualTab === 'steps'
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'text-[#173D2B] hover:bg-[#E8F8EE]'
              }`}
            >
              <ListOrdered className="w-4 h-4" />
              <span>2. تسلسل المراحل</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveVisualTab('map')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeVisualTab === 'map'
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'text-[#173D2B] hover:bg-[#E8F8EE]'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>3. خريطة المفاهيم</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveVisualTab('decision')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeVisualTab === 'decision'
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'text-[#173D2B] hover:bg-[#E8F8EE]'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>4. موقف اتخاذ القرار</span>
            </button>
          </div>

          {/* Visual Active Tool Showcase */}
          <div className="pt-2">
            <Suspense fallback={<VisualLoadingFallback />}>
              {activeVisualTab === 'comparison' && (
                <VisualComparisonView block={BLOCK_VISUAL_COMPARISON} />
              )}
              {activeVisualTab === 'steps' && (
                <EducationalStepsView block={BLOCK_ANIMATED_STEPS} />
              )}
              {activeVisualTab === 'map' && (
                <InteractiveDiagramView block={BLOCK_INTERACTIVE_DIAGRAM} />
              )}
              {activeVisualTab === 'decision' && (
                <DecisionScenarioView block={BLOCK_DECISION_SCENARIO} />
              )}
            </Suspense>
          </div>
        </section>

        {/* =========================================================================
            SECTION D: نشاط تطبيقي (Applied Learning Activities)
           ========================================================================= */}
        <section aria-labelledby="section-d-title" className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-[#D4E9DC]/80">
            <div className="w-8 h-8 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h2 id="section-d-title" className="text-xl sm:text-2xl font-black text-[#173D2B]">
                النشاط التطبيقي للمنهج
              </h2>
              <p className="text-xs text-[#6C8577]">
                تطبيق المفاهيم النظرية في مواقف ترتيب وتقويم عملية
              </p>
            </div>
          </div>

          <Suspense fallback={<VisualLoadingFallback />}>
            <VisualSequenceView block={BLOCK_VISUAL_SEQUENCE} />
          </Suspense>
        </section>

        {/* =========================================================================
            SECTION E: المراجعة والتقويم الذاتي (Review & Self-Assessment)
           ========================================================================= */}
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
          <div className="space-y-3">
            <h3 className="text-sm font-black text-[#173D2B] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#00C853]" />
              <span>قاموس المصطلحات الأساسية المعتمدة للفصل (ص 2 - 6):</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CHAPTER_GLOSSARY.map((term, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4FFF7] p-4 rounded-2xl border border-[#D4E9DC] space-y-1"
                >
                  <span className="font-black text-xs text-[#00A844] block">
                    {term.term}
                  </span>
                  <p className="text-xs text-[#173D2B] leading-relaxed">
                    {term.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Key Academic Takeaways */}
          <div className="bg-[#E8F8EE]/70 rounded-2xl p-5 border border-[#D4E9DC] space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-[#103D27]">
              <Sparkles className="w-4 h-4 text-[#00C853]" />
              <span>خلاصة الأسس المستفادة من الفصل (ص 2 - 5):</span>
            </div>
            <ul className="space-y-2 text-xs text-[#173D2B]">
              {BLOCK_KEY_POINTS.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Self-Check Comprehension Questions */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-black text-[#173D2B] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#00C853]" />
              <span>أسئلة الفهم والتطبيق (انقر لإظهار الإجابة النموذجية):</span>
            </h3>

            <div className="space-y-2.5">
              {CHAPTER_SELF_CHECK_QUESTIONS.map((q) => {
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
                        <span className="text-[10px] font-bold text-[#6C8577] block text-left">
                          المرجع في الكتاب: {q.citation}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Back Link to Course */}
        <div className="pt-2">
          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#173D2B] hover:text-[#00A844] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
            <span>العودة إلى تفاصيل المقرر</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
