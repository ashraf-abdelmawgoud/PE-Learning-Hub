/**
 * Phase 4.1A: Premium Hybrid Animation Redesign + Strict Performance Budget
 * Experience: «رحلة تطور مفهوم المنهج — من المفهوم التقليدي إلى المفهوم الحديث»
 * Course: مناهج التربية الرياضية — الفرقة الرابعة (أ.د. هاني الدسوقي إبراهيم)
 *
 * Core Enhancements (Phase 4.1A):
 * 1. Scene 1 Redesign: Premium Educational Cartoon + Interactive Learning Simulation.
 * 2. Articulated cartoon characters (Coach + 3 cohesive students: Tariq the thinker, Ziad the athlete, Salma the peer).
 * 3. Deep 2D athletic environment: morning sky, campus silhouette, terracotta track, painted turf pitch, sports props.
 * 4. Thoughtful student reaction: Tariq contemplates with hand-to-chin pose & animated educational curiosity spark.
 * 5. Smooth camera choreography: gentle wide-to-focus entry push-in.
 * 6. Play / Pause / Replay full synchronization via CSS animation-play-state.
 * 7. Verified RTL navigation (Prev = Right ➡, Next = Left ⬅) with Chevrons.
 * 8. Responsive HTML deck with clear Cairo typography (360px - 768px clarity).
 * 9. Strict Chapter 1 academic boundary adhered to (ص 2 - 5، وقمة ص 6).
 * 10. Strict Performance Budget: Pure lightweight vector SVG (expected increase << 150 KiB).
 */

import React, { useState, useEffect, useCallback, useId, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Activity,
  Compass,
  Users,
  Eye,
  Award,
} from 'lucide-react';
import { CoachCharacter } from './cartoon/CoachCharacter';
import { StudentCharacter } from './cartoon/StudentCharacter';
import { AthleticCourtEnvironment } from './cartoon/AthleticCourtEnvironment';

export interface CurriculumJourneyAnimationBlock {
  id: string;
  type: 'curriculum_journey_animation';
  order: number;
  title: string;
  subtitle?: string;
  academicSource?: string;
}

interface SceneInfo {
  id: number;
  numberArabic: string;
  title: string;
  headline: string;
  pedagogicalConcept: string;
  summary: string;
  academicCitation: string;
}

const SCENES: SceneInfo[] = [
  {
    id: 1,
    numberArabic: '١',
    title: 'بداية الرحلة والاستكشاف',
    headline: 'ما المقصود بالمنهج في التربية الرياضية؟',
    pedagogicalConcept: 'استثارة الفضول وتأصيل مفهوم المنهج لغةً واصطلاحاً',
    summary:
      'نبدأ جولتنا الميدانية داخل ملعب المدرسة الرياضي: يرحب المعلم بطلابه ويوجه انتباههم للتساؤل الجوهري: هل المنهج مجرد كتب ومقررات دراسية تحفظ، أم مسار أوسع من ذلك لتحقيق أهداف المجتمع؟',
    academicCitation: 'كتاب مناهج التربية الرياضية — أ.د. هاني الدسوقي إبراهيم (ص 2، 5، 6)',
  },
  {
    id: 2,
    numberArabic: '٢',
    title: 'المفهوم التقليدي للمنهج',
    headline: 'مركزية المقررات والمعارف المنقولة',
    pedagogicalConcept: 'المنهج كمجموعة مواد دراسية تضع المعرفة في بؤرة الاهتمام',
    summary:
      'تتحول زاوية الشرح نحو سبورة المقررات: يُظهر المعلم كيف وضع المفهوم التقليدي المعرفة في المركز بوصفها حصيلة التراث الثقافي، مع تركيز التدريس على تزويد ذهن المتعلم بالمفاهيم والحقائق المقررة لفرقته.',
    academicCitation: 'كتاب مناهج التربية الرياضية — ص 3، 5، 6',
  },
  {
    id: 3,
    numberArabic: '٣',
    title: 'المفهوم الحديث للمنهج',
    headline: 'منظومة الخبرات الميدانية تحت إشراف وتوجيه المدرسة',
    pedagogicalConcept: 'المنهج كمنظومة خبرات متكاملة لرعاية نمو شخصية المتعلم الشاملة',
    summary:
      'ينبض الملعب بالحياة التفاعلية: لم تُلغَ المقررات بل بقيت كمرجع علمي على طاولة التخطيط، بينما اتسعت العملية لتشمل النشاط الحركي، والتعلم التعاوني، والملاحظة الذاتية، وتوجيه المعلم لبناء الشخصية المتكاملة.',
    academicCitation: 'كتاب مناهج التربية الرياضية — ص 2، 3، 4، 5',
  },
];

interface TraditionalSubjectItem {
  id: string;
  name: string;
  targetY: number;
  pointerAngle: number;
  role: string;
  explanation: string;
  quotePage: string;
}

const TRADITIONAL_SUBJECTS: TraditionalSubjectItem[] = [
  {
    id: 'sub-rules',
    name: 'مقرر قواعد الألعاب والمسابقات',
    targetY: 60,
    pointerAngle: -20,
    role: 'المقرر كمحتوى دراسي محدد لفرقة معينة',
    explanation:
      'يُعرّف المنهج تقليدياً بأنه "مجموعة من المفاهيم والمعارف والحقائق والنظريات ليكون مقرر دراسي لفرقة معينة". التركيز ينصب على الإلمام باللوائح وقوانين المسابقات بصورة معرفية محددة.',
    quotePage: 'ص 5، 6',
  },
  {
    id: 'sub-anatomy',
    name: 'مقرر المعارف الصحية والتشريح',
    targetY: 108,
    pointerAngle: 0,
    role: 'المعرفة بوصفها حصيلة التراث الثقافي والاجتماعي',
    explanation:
      'تضع هذه النظرة المعرفة العلمية في بؤرة الاهتمام بوصفها تراثاً مستقراً؛ ويكون دور المعلم نقل هذه المعلومات وتوضيحها للطلاب بصورة مباشرة.',
    quotePage: 'ص 5',
  },
  {
    id: 'sub-training',
    name: 'مقرر نظريات وأصول التدريب الرياضي',
    targetY: 156,
    pointerAngle: 20,
    role: 'التركيز على المفاهيم المخططة والموحدة',
    explanation:
      'المنهج التقليدي يركز على تزويد ذهن المتعلم بالمعارف النظرية المحددة في الخطة الدراسية، ويجعل المادة التعليمية هي محور العملية التعليمية وغاية الموقف التعليمي.',
    quotePage: 'ص 2، 5',
  },
];

interface ModernExperienceItem {
  id: string;
  title: string;
  category: string;
  iconType: 'motor' | 'collab' | 'analysis' | 'guidance';
  description: string;
  studentRole: string;
  quotePage: string;
}

const MODERN_EXPERIENCES: ModernExperienceItem[] = [
  {
    id: 'exp-collab',
    title: 'التعلم التعاوني والتفاعل الجماعي',
    category: 'توافق اجتماعي ونفسي وروح رياضية',
    iconType: 'collab',
    description:
      'تبادل التمرير والتعاون الحركي المشترك بين الطلاب، لتجسيد دور المنهج في بناء الروح الرياضية، والتعاون الإيجابي، والتوافق الاجتماعي والنفسي مع الزملاء.',
    studentRole: 'مشارك متعاون في منظومة النشاط الاجتماعي',
    quotePage: 'ص 2، 4',
  },
  {
    id: 'exp-motor',
    title: 'النشاط الحركي والبدني الميداني',
    category: 'ممارسة مهارية وكفاءة حركية',
    iconType: 'motor',
    description:
      'ممارسة الجري المتعرج والرشاقة بالكرة بين الأقماع التدريبية. تتحول المفاهيم النظرية إلى كفاءة حركية فعلية تنمي طاقات الفرد البدنية والمهارية.',
    studentRole: 'مشارك نشط وإيجابي في المواقف الحركية',
    quotePage: 'ص 2، 5',
  },
  {
    id: 'exp-analysis',
    title: 'الملاحظة والتحليل والتعلم الذاتي',
    category: 'تفكير ناقد وتقويم مستمر للأداء',
    iconType: 'analysis',
    description:
      'تدوين ملاحظات الأداء الحركي للزميل وتحليل مسارات الحركة على لوحة الملاحظة. المعرفة هنا تصبح نتاجاً للبحث المنظم والتعلم الذاتي الواعي.',
    studentRole: 'متعلم مفكر، يلاحظ ويحلل ويقوم الأداء',
    quotePage: 'ص 3، 4',
  },
  {
    id: 'exp-guidance',
    title: 'توجيه المعلم وإشرافه المهني',
    category: 'قيادة الموقف التعليمي وتيسير الخبرات',
    iconType: 'guidance',
    description:
      'يقوم معلم التربية الرياضية بدور المرشد والموجه ومراقب بيئة التعلم؛ يصمم الخبرات الهادفة ويشجع المبادرات الذاتية دون اقتصار دوره على التلقين.',
    studentRole: 'متعلم يكتسب الخبرة تحت إشراف وتوجيه المدرسة',
    quotePage: 'ص 3، 5',
  },
];

export const CurriculumJourneyAnimationView: React.FC<{
  block?: CurriculumJourneyAnimationBlock;
}> = ({ block }) => {
  const [currentScene, setCurrentScene] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeSubjectId, setActiveSubjectId] = useState<string>('sub-rules');
  const [activeExperienceId, setActiveExperienceId] = useState<string>('exp-collab');
  const [showAcademicDrawer, setShowAcademicDrawer] = useState<boolean>(false);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  // prefers-reduced-motion check
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mq.addEventListener('change', listener);
      return () => mq.removeEventListener('change', listener);
    }
  }, []);

  const activeSceneInfo = SCENES.find((s) => s.id === currentScene) || SCENES[0];
  const activeSubject =
    TRADITIONAL_SUBJECTS.find((s) => s.id === activeSubjectId) || TRADITIONAL_SUBJECTS[0];
  const activeExperience =
    MODERN_EXPERIENCES.find((e) => e.id === activeExperienceId) || MODERN_EXPERIENCES[0];

  // Auto-play timer with smooth progress updates (9 seconds per scene)
  const SCENE_DURATION_MS = 9000;
  const progressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const startTime = Date.now() - (progressPercent / 100) * SCENE_DURATION_MS;

    progressIntervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / SCENE_DURATION_MS) * 100);
      setProgressPercent(pct);

      if (elapsed >= SCENE_DURATION_MS) {
        if (currentScene < 3) {
          setCurrentScene((prev) => prev + 1);
          setProgressPercent(0);
        } else {
          setIsPlaying(false);
          setProgressPercent(100);
        }
      }
    }, 50);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentScene, progressPercent]);

  // Handle scene transitions cleanly
  const goToScene = useCallback((sceneId: number) => {
    setCurrentScene(sceneId);
    setProgressPercent(0);
  }, []);

  const handleNextScene = useCallback(() => {
    if (currentScene < 3) {
      goToScene(currentScene + 1);
    }
  }, [currentScene, goToScene]);

  const handlePrevScene = useCallback(() => {
    if (currentScene > 1) {
      goToScene(currentScene - 1);
    }
  }, [currentScene, goToScene]);

  const handleResetScene = useCallback(() => {
    setCurrentScene(1);
    setProgressPercent(0);
    setActiveSubjectId('sub-rules');
    setActiveExperienceId('exp-collab');
    setIsPlaying(false);
  }, []);

  const handleTogglePlay = () => {
    if (progressPercent >= 100 && currentScene === 3) {
      setCurrentScene(1);
      setProgressPercent(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const idPrefix = useId();

  // CSS class determining whether continuous animations are actively running or paused
  const motionClass = !reducedMotion && isPlaying ? 'pe-anim-running' : 'pe-anim-paused';

  return (
    <figure
      className="my-8 rounded-3xl bg-[#071C12] text-[#F4FFF7] border-2 border-[#103D27] shadow-2xl overflow-hidden transition-all duration-300"
      aria-labelledby={`${idPrefix}-title`}
    >
      {/* Scoped CSS Keyframes for Meaningful Educational Animation */}
      <style>{`
        /* Master Control: Pause all animations when paused or reducedMotion */
        .pe-anim-paused * {
          animation-play-state: paused !important;
        }
        .pe-anim-running * {
          animation-play-state: running;
        }

        /* 1. SCENE 1: Educational Cartoon Motions */
        @keyframes pe-teacher-wave {
          0%, 100% { transform: rotate(0deg); }
          25%      { transform: rotate(-12deg); }
          50%      { transform: rotate(4deg); }
          75%      { transform: rotate(-8deg); }
        }
        @keyframes pe-whistle-sway {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(7deg); }
        }
        @keyframes pe-curiosity-glow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%      { opacity: 0.95; transform: scale(1.12); }
        }
        @keyframes pe-tariq-think {
          0%, 100% { transform: rotate(0deg); }
          40%      { transform: rotate(-4deg); }
          80%      { transform: rotate(2deg); }
        }
        @keyframes pe-head-inquiry {
          0%, 100% { transform: rotate(0deg); }
          45%      { transform: rotate(-7deg); }
          85%      { transform: rotate(-3deg); }
        }
        @keyframes pe-peer-nod {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(5deg); }
        }
        @keyframes pe-pulse-glow {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(1.03); }
        }

        /* 2. SCENE 2: Spotlight glow pulse */
        @keyframes pe-spotlight-beam {
          0%, 100% { opacity: 0.22; }
          50%      { opacity: 0.42; }
        }

        /* 3. SCENE 3: Cooperative Passing (Ball Arc & Player Response) */
        @keyframes pe-ball-pass-arc {
          0%   { transform: translate(0px, 0px) scale(1); }
          22%  { transform: translate(65px, -48px) scale(1.15); }
          48%  { transform: translate(140px, 0px) scale(1); }
          52%  { transform: translate(140px, 0px) scale(1); }
          74%  { transform: translate(65px, -48px) scale(1.15); }
          98%  { transform: translate(0px, 0px) scale(1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes pe-kicker-leg {
          0%, 100% { transform: rotate(0deg); }
          4%, 14%  { transform: rotate(-18deg); }
          22%      { transform: rotate(0deg); }
        }
        @keyframes pe-receiver-leg {
          0%, 46%, 100% { transform: rotate(0deg); }
          52%, 62%      { transform: rotate(18deg); }
          70%           { transform: rotate(0deg); }
        }

        /* 4. SCENE 3: Slalom Dribbling between Cones */
        @keyframes pe-slalom-run {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(32px, -16px); }
          50%  { transform: translate(70px, 14px); }
          75%  { transform: translate(105px, -16px); }
          100% { transform: translate(0px, 0px); }
        }

        /* 5. SCENE 3: Observer Head & Pen Tracking */
        @keyframes pe-observer-glance {
          0%, 45%  { transform: rotate(-14deg); }
          55%, 95% { transform: rotate(12deg); }
          100%     { transform: rotate(-14deg); }
        }
        @keyframes pe-observer-scribble {
          0%, 50%, 100% { transform: translate(0px, 0px); }
          60%           { transform: translate(2px, -1.5px); }
          70%           { transform: translate(-2px, 1.5px); }
          80%           { transform: translate(1.5px, 0px); }
        }

        /* 6. SCENE 3: Coach Encouragement & Whistle Gesture */
        @keyframes pe-coach-prompt {
          0%, 100% { transform: rotate(0deg); }
          30%      { transform: rotate(-16deg); }
          65%      { transform: rotate(6deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>

      {/* 1. Header Bar: Identity, Scene Progress & Sound / Drawer Controls */}
      <div className="bg-[#0B2519] border-b border-[#143D27] px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#103D27] to-[#00C853] text-[#071C12] flex items-center justify-center font-black shadow-md shadow-[#00C853]/20">
            <Sparkles className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#39E66D] bg-[#142B20] px-2.5 py-0.5 rounded-full border border-[#00C853]/30">
                أنيميشن تعليمي 2D تفاعلي
              </span>
              <span className="text-[11px] font-bold text-[#D4E9DC]/70 hidden sm:inline">
                الفرقة الرابعة &bull; مناهج التربية الرياضية
              </span>
            </div>
            <h3 id={`${idPrefix}-title`} className="text-base sm:text-lg font-black text-[#F4FFF7] mt-0.5">
              {block?.title || 'رحلة تطور مفهوم المنهج: من المفهوم التقليدي إلى المفهوم الحديث'}
            </h3>
          </div>
        </div>

        {/* Scene Navigation Stepper Pills */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1 bg-[#071C12] p-1 rounded-2xl border border-[#143D27]">
            {SCENES.map((scene) => {
              const isActive = scene.id === currentScene;
              return (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => goToScene(scene.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#00C853] text-[#071C12] shadow-sm font-black'
                      : 'text-[#D4E9DC]/80 hover:text-white hover:bg-[#142B20]'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  <span className="font-mono">{scene.numberArabic}</span>
                  <span className="hidden md:inline">{scene.title}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setShowAcademicDrawer((prev) => !prev)}
            className="p-2.5 rounded-xl bg-[#142B20] text-[#39E66D] hover:bg-[#103D27] border border-[#143D27] transition-colors cursor-pointer"
            title="عرض التوثيق الأكاديمي والصفحات المرجعية"
            aria-label="عرض التوثيق الأكاديمي"
          >
            <BookOpen className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Main 2D Animation Stage */}
      <div className={`relative w-full bg-gradient-to-b from-[#0B2519] via-[#071C12] to-[#04120B] p-2 sm:p-5 overflow-hidden select-none ${motionClass}`}>
        
        {/* Stage Container */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#143D27] shadow-inner bg-[#071C12]">
          
          {/* Timeline progress line during auto-play */}
          {isPlaying && (
            <div className="absolute top-0 inset-x-0 h-1 bg-[#103D27] z-20">
              <div
                className="h-full bg-gradient-to-r from-[#00C853] to-[#39E66D] transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}

          {/* Native High-Detail Educational SVG Stage */}
          <svg
            viewBox="0 0 1000 540"
            className="w-full h-auto max-h-[520px] mx-auto block"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={`المشهد ${currentScene}: ${activeSceneInfo.title}`}
          >
            {/* Common Atmospheric Court Environment Background */}
            <AthleticCourtEnvironment idPrefix={idPrefix} />

            {/* =========================================================================
                SCENE 1: «بداية الرحلة: ما المقصود بالمنهج؟» (Premium Educational Cartoon)
               ========================================================================= */}
            {currentScene === 1 && (
              <g
                key="scene-stage-1"
                style={{
                  transform: !reducedMotion && isPlaying ? 'scale(1.025) translate(-8px, -4px)' : 'none',
                  transition: 'transform 1400ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                {/* 1. PE Teacher / Coach Character (Welcoming & Addressing Students) */}
                <CoachCharacter
                  x={640}
                  y={260}
                  scale={1.12}
                  pose="welcome"
                  isPaused={!isPlaying}
                />

                {/* 2. Student Group on Court (Center & Left) */}
                {/* Student 1: Tariq (The Thinker — Reacts to the Question) */}
                <StudentCharacter
                  x={375}
                  y={280}
                  scale={1.08}
                  variant="thinker"
                  isPaused={!isPlaying}
                />

                {/* Student 2: Ziad (The Athlete — Resting foot on Soccer Ball) */}
                <StudentCharacter
                  x={240}
                  y={290}
                  scale={1.03}
                  variant="athlete"
                  isPaused={!isPlaying}
                />

                {/* Student 3: Salma (The Engaged Peer — Listening & Nodding) */}
                <StudentCharacter
                  x={130}
                  y={295}
                  scale={0.98}
                  variant="peer"
                  isPaused={!isPlaying}
                />

                {/* 3. Central Inquiry Question Card (Unobstructed in Upper-Center Field) */}
                <g
                  transform="translate(240, 68)"
                  style={{
                    animation: !isPlaying ? 'none' : 'pe-pulse-glow 3.5s ease-in-out infinite',
                  }}
                >
                  {/* Card Background with Emerald Border & Drop Shadow */}
                  <rect
                    x="0"
                    y="0"
                    width="520"
                    height="92"
                    rx="22"
                    fill="#FFFFFF"
                    stroke="#00C853"
                    strokeWidth="3"
                    filter="drop-shadow(0 10px 24px rgba(0,0,0,0.3))"
                  />
                  
                  {/* Speech Pointer / Dialogue Tail towards Teacher */}
                  <polygon points="390,92 415,116 370,92" fill="#FFFFFF" />
                  <polygon points="390,92 415,116 370,92" stroke="#00C853" strokeWidth="3" fill="none" />
                  <rect x="368" y="90" width="24" height="4" fill="#FFFFFF" />

                  {/* Header Sub-bar */}
                  <g transform="translate(24, 18)">
                    <circle cx="12" cy="12" r="11" fill="#E8F8EE" />
                    <text x="12" y="16.5" fill="#00C853" fontSize="13" fontWeight="900" textAnchor="middle">؟</text>
                    <text x="32" y="16.5" fill="#173D2B" fontSize="13" fontWeight="900" fontFamily="Cairo">
                      سؤال المنهج التأسيسي:
                    </text>
                  </g>

                  {/* The Core Pedagogical Question */}
                  <text
                    x="260"
                    y="63"
                    fill="#071C12"
                    fontSize="18"
                    fontWeight="900"
                    textAnchor="middle"
                    fontFamily="Cairo"
                  >
                    «هل المنهج مجرد مجموعة من المواد الدراسية؟»
                  </text>
                </g>

                {/* 4. Interactive Call-To-Action Button on Court */}
                <g
                  transform="translate(390, 465)"
                  className="cursor-pointer group"
                  onClick={() => goToScene(2)}
                >
                  <rect
                    x="0"
                    y="0"
                    width="220"
                    height="50"
                    rx="25"
                    fill="#00C853"
                    stroke="#39E66D"
                    strokeWidth="2"
                    filter="drop-shadow(0 4px 14px rgba(0,200,83,0.45))"
                  />
                  <text
                    x="110"
                    y="31"
                    fill="#071C12"
                    fontSize="15"
                    fontWeight="900"
                    textAnchor="middle"
                    fontFamily="Cairo"
                  >
                    ابدأ الاستكشاف الآن ⬅
                  </text>
                </g>
              </g>
            )}

            {/* =========================================================================
                SCENE 2: «المفهوم التقليدي: مركزية المقررات والمعارف المنقولة»
               ========================================================================= */}
            {currentScene === 2 && (
              <g key="scene-stage-2">
                {/* Instructional Whiteboard on the Court */}
                <g transform="translate(240, 245)">
                  <line x1="80" y1="210" x2="120" y2="250" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                  <line x1="420" y1="210" x2="380" y2="250" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                  <line x1="120" y1="250" x2="380" y2="250" stroke="#475569" strokeWidth="4" />
                  
                  <rect x="60" y="10" width="380" height="210" rx="14" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="6" filter="drop-shadow(0 12px 25px rgba(0,0,0,0.3))" />
                  
                  <rect x="63" y="13" width="374" height="34" fill="#103D27" rx="10" />
                  <text x="250" y="35" fill="#39E66D" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    لوحة المنهج التقليدي: بؤرة الاهتمام بالمقررات
                  </text>

                  {/* Spotlight on selected textbook */}
                  <circle
                    cx="250"
                    cy={activeSubject.targetY + 20}
                    r="60"
                    fill="#00C853"
                    style={{ animation: 'pe-spotlight-beam 2s ease-in-out infinite' }}
                    filter={`url(#${idPrefix}-glow)`}
                  />

                  {/* 3 Clickable Textbooks */}
                  {TRADITIONAL_SUBJECTS.map((sub) => {
                    const isSelected = sub.id === activeSubjectId;
                    const yPos = sub.targetY;
                    return (
                      <g
                        key={sub.id}
                        transform={`translate(${isSelected ? 75 : 80}, ${yPos})`}
                        className="cursor-pointer transition-transform duration-200"
                        onClick={() => setActiveSubjectId(sub.id)}
                      >
                        <rect
                          x="0"
                          y="0"
                          width="340"
                          height="42"
                          rx="10"
                          fill={isSelected ? '#E8F8EE' : '#F8FAFC'}
                          stroke={isSelected ? '#00C853' : '#CBD5E1'}
                          strokeWidth={isSelected ? 3 : 1.5}
                          filter={isSelected ? 'drop-shadow(0 4px 10px rgba(0,200,83,0.35))' : undefined}
                        />
                        <rect x="8" y="7" width="28" height="28" rx="6" fill={isSelected ? '#00C853' : '#64748B'} />
                        <text x="22" y="25" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                          📚
                        </text>
                        <text x="46" y="24" fill="#173D2B" fontSize="12" fontWeight="900" fontFamily="Cairo">
                          {sub.name}
                        </text>
                        <rect x="250" y="10" width="80" height="22" rx="11" fill={isSelected ? '#103D27' : '#F1F5F9'} />
                        <text x="290" y="25" fill={isSelected ? '#39E66D' : '#64748B'} fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                          {isSelected ? '✓ محدد للشرح' : 'انقر للفحص'}
                        </text>
                      </g>
                    );
                  })}
                </g>

                {/* Reusable Coach Character (Pointing Pose in Scene 2) */}
                <CoachCharacter
                  x={120}
                  y={285}
                  scale={1.05}
                  pose="pointing"
                  pointerAngle={activeSubject.pointerAngle}
                  isPaused={!isPlaying}
                />

                {/* Attentive Students on Right */}
                <StudentCharacter
                  x={710}
                  y={305}
                  scale={0.95}
                  variant="athlete"
                  isPaused={!isPlaying}
                />
                <StudentCharacter
                  x={790}
                  y={315}
                  scale={0.92}
                  variant="peer"
                  isPaused={!isPlaying}
                />
              </g>
            )}

            {/* =========================================================================
                SCENE 3: «المفهوم الحديث: منظومة الخبرات الميدانية المتكاملة»
               ========================================================================= */}
            {currentScene === 3 && (
              <g key="scene-stage-3">
                {/* 1. Reference Planning Table */}
                <g transform="translate(70, 280)">
                  <rect x="0" y="40" width="120" height="45" rx="6" fill="#475569" stroke="#334155" strokeWidth="2" />
                  <rect x="15" y="32" width="45" height="10" rx="2" fill="#00C853" stroke="#071C12" />
                  <rect x="18" y="22" width="42" height="10" rx="2" fill="#0284C7" stroke="#071C12" />
                  <rect x="22" y="12" width="36" height="10" rx="2" fill="#EA580C" stroke="#071C12" />
                </g>

                {/* 2. ACTIVITY ZONE A: Cooperative Teamwork (Passing Ball Arc) */}
                <g
                  transform="translate(230, 305)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-collab')}
                >
                  {activeExperienceId === 'exp-collab' && (
                    <circle cx="105" cy="105" r="95" fill="#00C853" opacity="0.22" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}

                  <path d="M 35 125 Q 105 75 175 125" fill="none" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" opacity="0.75" />

                  <g style={{ animation: 'pe-ball-pass-arc 2.6s ease-in-out infinite' }}>
                    <circle cx="35" cy="125" r="9.5" fill="#FFFFFF" stroke="#071C12" strokeWidth="1.5" />
                    <circle cx="35" cy="125" r="3" fill="#071C12" />
                  </g>

                  <g transform="translate(10, 55)">
                    <ellipse cx="20" cy="85" rx="16" ry="5" fill="#071C12" opacity="0.4" />
                    <g style={{ transformOrigin: '20px 50px', animation: 'pe-kicker-leg 2.6s ease-in-out infinite' }}>
                      <rect x="14" y="50" width="6" height="35" fill="#1E293B" rx="2" />
                    </g>
                    <rect x="24" y="50" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="10" y="15" width="22" height="40" fill="#00C853" rx="3" />
                    <circle cx="21" cy="6" r="9" fill="#FED7AA" />
                  </g>

                  <g transform="translate(165, 55)">
                    <ellipse cx="20" cy="85" rx="16" ry="5" fill="#071C12" opacity="0.4" />
                    <g style={{ transformOrigin: '20px 50px', animation: 'pe-receiver-leg 2.6s ease-in-out infinite' }}>
                      <rect x="14" y="50" width="6" height="35" fill="#1E293B" rx="2" />
                    </g>
                    <rect x="24" y="50" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="10" y="15" width="22" height="40" fill="#0284C7" rx="3" />
                    <circle cx="21" cy="6" r="9" fill="#FED7AA" />
                  </g>
                </g>

                {/* 3. ACTIVITY ZONE B: Motor Skill Practice (Slalom Dribble) */}
                <g
                  transform="translate(460, 310)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-motor')}
                >
                  {activeExperienceId === 'exp-motor' && (
                    <circle cx="80" cy="100" r="90" fill="#00C853" opacity="0.22" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}

                  <polygon points="15,150 25,125 35,150" fill="#EA580C" />
                  <polygon points="65,150 75,125 85,150" fill="#EA580C" />
                  <polygon points="115,150 125,125 135,150" fill="#EA580C" />

                  <g style={{ animation: 'pe-slalom-run 3.2s ease-in-out infinite' }}>
                    <ellipse cx="25" cy="140" rx="16" ry="5" fill="#071C12" opacity="0.4" />
                    <rect x="18" y="95" width="6" height="42" fill="#071C12" rx="2" />
                    <rect x="28" y="95" width="6" height="42" fill="#071C12" rx="2" />
                    <rect x="14" y="55" width="24" height="45" fill="#00C853" rx="3" />
                    <circle cx="26" cy="42" r="10" fill="#FED7AA" />
                    <circle cx="36" cy="138" r="9.5" fill="#FFFFFF" stroke="#071C12" strokeWidth="1.5" />
                  </g>
                </g>

                {/* 4. ACTIVITY ZONE C: Peer Observation & Analysis */}
                <g
                  transform="translate(680, 315)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-analysis')}
                >
                  {activeExperienceId === 'exp-analysis' && (
                    <circle cx="60" cy="95" r="80" fill="#00C853" opacity="0.22" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}

                  <g transform="translate(35, 35)">
                    <ellipse cx="20" cy="100" rx="18" ry="6" fill="#071C12" opacity="0.4" />
                    <rect x="14" y="60" width="7" height="40" fill="#334155" rx="2" />
                    <rect x="25" y="60" width="7" height="40" fill="#334155" rx="2" />
                    <rect x="10" y="20" width="24" height="42" fill="#059669" rx="3" />
                    
                    <g style={{ transformOrigin: '22px 9px', animation: 'pe-observer-glance 3.5s ease-in-out infinite' }}>
                      <circle cx="22" cy="9" r="10" fill="#FED7AA" />
                    </g>

                    <rect x="26" y="28" width="18" height="24" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                    <g style={{ animation: 'pe-observer-scribble 1.5s ease-in-out infinite' }}>
                      <line x1="30" y1="36" x2="38" y2="36" stroke="#00C853" strokeWidth="1.5" />
                      <line x1="30" y1="41" x2="36" y2="41" stroke="#0F172A" strokeWidth="1" />
                    </g>
                  </g>
                </g>

                {/* 5. ACTIVITY ZONE D: Reusable Coach in Coaching Pose */}
                <g
                  transform="translate(830, 290)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-guidance')}
                >
                  {activeExperienceId === 'exp-guidance' && (
                    <circle cx="50" cy="105" r="80" fill="#00C853" opacity="0.22" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}
                  <CoachCharacter
                    x={0}
                    y={0}
                    scale={0.92}
                    pose="coaching"
                    isPaused={!isPlaying}
                  />
                </g>
              </g>
            )}
          </svg>
        </div>

        {/* 3. Responsive HTML HUD & Educational Text Deck (Clean Typography for All Screen Sizes) */}
        <div className="mt-4 space-y-4">
          
          {/* Active Scene Summary Banner (Responsive, Readable on 360px-768px) */}
          <div className="bg-[#0B2519] border border-[#143D27] rounded-2xl p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C853] animate-pulse" />
                <h4 className="text-base sm:text-lg font-black text-[#F4FFF7]">
                  {activeSceneInfo.headline}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-[#39E66D] bg-[#142B20] px-3 py-1 rounded-full border border-[#00C853]/30">
                المشهد {activeSceneInfo.numberArabic} من ٣
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#D4E9DC]/90 leading-relaxed">
              {activeSceneInfo.summary}
            </p>
          </div>

          {/* Interactive Scene 1 Callout */}
          {currentScene === 1 && (
            <div className="bg-[#142B20] rounded-2xl p-4 border border-[#103D27] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-black text-[#39E66D]">
                  <Compass className="w-4 h-4" />
                  <span>التأصيل اللغوي والاصطلاحي (ص 5، 6):</span>
                </div>
                <p className="text-xs text-[#D4E9DC] leading-relaxed">
                  المنهج لغةً يعني <strong>«الطريق الواضح للتعليم والتعلم»</strong>، واصطلاحاً من الكلمة اللاتينية <strong>Curriculum</strong> بمعنى سلسلة أفعال أو مضمار الجري الهادف.
                </p>
              </div>
              <button
                type="button"
                onClick={() => goToScene(2)}
                className="px-4 py-2 rounded-xl bg-[#00C853] hover:bg-[#39E66D] text-[#071C12] font-black text-xs shrink-0 transition-colors cursor-pointer self-end sm:self-auto"
              >
                الانتقال للمفهوم التقليدي ⬅
              </button>
            </div>
          )}

          {/* Interactive Scene 2: Clickable Subject Cards with High Contrast */}
          {currentScene === 2 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#39E66D]">
                  انقر على أي مقرر على السبورة أو البطاقات أدناه لتوجيه المعلم إليه:
                </span>
                <span className="text-[11px] font-bold text-[#D4E9DC]/70">
                  {activeSubject.quotePage}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {TRADITIONAL_SUBJECTS.map((sub) => {
                  const isSelected = sub.id === activeSubjectId;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setActiveSubjectId(sub.id)}
                      className={`p-3.5 rounded-2xl text-right transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#103D27] border-[#00C853] shadow-md shadow-[#00C853]/15'
                          : 'bg-[#0B2519] border-[#143D27] hover:bg-[#142B20]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-xs text-[#F4FFF7]">
                          {sub.name}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-black bg-[#00C853] text-[#071C12] px-2 py-0.5 rounded-full">
                            مُشار إليه ✓
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#D4E9DC]/80 leading-relaxed">
                        {sub.explanation}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive Scene 3: Clickable Modern Experience Cards */}
          {currentScene === 3 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#39E66D]">
                  انقر على أي منطقة خبرة في الملعب لتفعيل النشاط والمفاهيم التربوية:
                </span>
                <span className="text-[11px] font-bold text-[#D4E9DC]/70">
                  {activeExperience.quotePage}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {MODERN_EXPERIENCES.map((exp) => {
                  const isSelected = exp.id === activeExperienceId;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setActiveExperienceId(exp.id)}
                      className={`p-3.5 rounded-2xl text-right transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#103D27] border-[#00C853] shadow-md shadow-[#00C853]/20 ring-1 ring-[#00C853]'
                          : 'bg-[#0B2519] border-[#143D27] hover:bg-[#142B20]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        {exp.iconType === 'collab' && <Users className="w-4 h-4 text-[#39E66D]" />}
                        {exp.iconType === 'motor' && <Activity className="w-4 h-4 text-[#00C853]" />}
                        {exp.iconType === 'analysis' && <Eye className="w-4 h-4 text-[#39E66D]" />}
                        {exp.iconType === 'guidance' && <Award className="w-4 h-4 text-[#00C853]" />}
                        <span className="font-bold text-xs text-[#F4FFF7]">
                          {exp.title}
                        </span>
                      </div>
                      <div className="text-[10px] font-bold text-[#39E66D] mb-1">
                        {exp.category}
                      </div>
                      <p className="text-[11px] text-[#D4E9DC]/80 leading-relaxed mb-2">
                        {exp.description}
                      </p>
                      <div className="text-[10px] text-[#00C853] font-bold flex items-center gap-1 border-t border-[#143D27] pt-1.5">
                        <CheckCircle2 className="w-3 h-3 shrink-0" />
                        <span className="truncate">دور الطالب: {exp.studentRole}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* 4. Directionally Verified Player Controls Toolbar (RTL Compliant) */}
      <div className="bg-[#0B2519] border-t border-[#143D27] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Navigation Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Prev Button: In RTL, previous is back to the RIGHT (➡) */}
          <button
            type="button"
            onClick={handlePrevScene}
            disabled={currentScene === 1}
            className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-[#143D27] bg-[#071C12] hover:bg-[#142B20] text-[#D4E9DC] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5 font-bold text-xs"
            title="الرجوع إلى المشهد السابق"
            aria-label="المشهد السابق"
          >
            <ChevronRight className="w-4 h-4 text-[#39E66D]" />
            <span className="hidden sm:inline">المشهد السابق</span>
          </button>

          {/* Synchronized Play / Pause Button */}
          <button
            type="button"
            onClick={handleTogglePlay}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-[#00C853]/20 cursor-pointer"
            aria-label={isPlaying ? 'إيقاف مؤقت للأنيميشن' : 'تشغيل العرض التلقائي'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>إيقاف مؤقت</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>تشغيل الأنيميشن</span>
              </>
            )}
          </button>

          {/* Next Button: In RTL, next is forward to the LEFT (⬅) */}
          <button
            type="button"
            onClick={handleNextScene}
            disabled={currentScene === 3}
            className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-[#143D27] bg-[#071C12] hover:bg-[#142B20] text-[#D4E9DC] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5 font-bold text-xs"
            title="الانتقال إلى المشهد التالي"
            aria-label="المشهد التالي"
          >
            <span className="hidden sm:inline">المشهد التالي</span>
            <ChevronLeft className="w-4 h-4 text-[#39E66D]" />
          </button>

          {/* Replay Button */}
          <button
            type="button"
            onClick={handleResetScene}
            className="p-2 sm:p-2.5 rounded-xl border border-[#143D27] bg-[#071C12] hover:bg-[#142B20] text-[#D4E9DC] transition-colors cursor-pointer"
            title="إعادة العرض من المشهد الأول"
            aria-label="إعادة العرض"
          >
            <RotateCcw className="w-4 h-4 text-[#00C853]" />
          </button>
        </div>

        {/* Scene Indicator & Reduced Motion Badge */}
        <div className="flex items-center gap-3 text-xs text-[#D4E9DC]/75">
          {reducedMotion && (
            <span className="px-2.5 py-1 rounded-full bg-[#142B20] text-[#39E66D] border border-[#143D27] text-[11px] font-bold">
              وضع تقليل الحركة نشط
            </span>
          )}
          <span className="font-mono font-bold text-[#F4FFF7]">
            المشهد {currentScene} / ٣: {activeSceneInfo.title}
          </span>
        </div>
      </div>

      {/* 5. Comprehensive Academic Drawer (Expandable on demand) */}
      {showAcademicDrawer && (
        <div className="bg-[#05170E] border-t-2 border-[#00C853] p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#39E66D] font-black text-sm sm:text-base">
              <BookOpen className="w-5 h-5 text-[#00C853]" />
              <span>التوثيق الأكاديمي المعتمد من كتاب مناهج التربية الرياضية (ص 2 - 6)</span>
            </div>
            <button
              type="button"
              onClick={() => setShowAcademicDrawer(false)}
              className="text-xs text-[#D4E9DC] hover:text-white bg-[#142B20] px-3 py-1 rounded-lg border border-[#143D27] cursor-pointer"
            >
              إغلاق اللوحة &times;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#D4E9DC]">
            <div className="bg-[#0B2519] p-4 rounded-2xl border border-[#143D27] space-y-2">
              <span className="font-black text-[#F4FFF7] block text-sm">
                بيانات المرجع الأكاديمي الأصلي:
              </span>
              <ul className="space-y-1.5 text-xs text-[#D4E9DC]/80">
                <li>&bull; <strong>الكتاب:</strong> مناهج التربية الرياضية.</li>
                <li>&bull; <strong>المؤلف:</strong> أ.د. هاني الدسوقي إبراهيم (أستاذ المناهج وطرق تدريس التربية الرياضية).</li>
                <li>&bull; <strong>المستوى:</strong> الفرقة الرابعة — قسم تدريس (العام الجامعي 2025/2026م).</li>
                <li>&bull; <strong>الفصل المعتمد:</strong> الفصل الأول: مقدمة وماهية المنهج (ص 2 - 5، وقمة ص 6).</li>
              </ul>
            </div>

            <div className="bg-[#0B2519] p-4 rounded-2xl border border-[#143D27] space-y-2">
              <span className="font-black text-[#F4FFF7] block text-sm">
                الضوابط الأكاديمية المصححة المعتمدة:
              </span>
              <ul className="space-y-1.5 text-xs text-[#D4E9DC]/80">
                <li>&bull; <strong>المنهج لغةً (ص 6):</strong> الطريق الواضح للتعليم والتعلم.</li>
                <li>&bull; <strong>المفهوم التقليدي (ص 5):</strong> المنهج كمقررات ومعارف دراسية تضع المعرفة في بؤرة الاهتمام بوصفها حصيلة التراث الثقافي.</li>
                <li>&bull; <strong>المفهوم الحديث (ص 2، 5):</strong> جميع الخبرات التي يكتسبها المتعلم تحت إشراف وتوجيه المدرسة لبناء الشخصية المتكاملة في مختلف الأبعاد (البدنية، والمهارية، والصحية، والنفسية، والاجتماعية).</li>
                <li>&bull; <strong>دور المعلم والمتعلم (ص 3):</strong> التحول من ناقل وملقن للمعلومة إلى مرشد وموجه لبيئة التعلم الذاتي، مع تفعيل دور المتعلم الإيجابي.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
};
