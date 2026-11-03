/**
 * CurriculumJourneyAnimationView.tsx
 * Phase 4.1 / 4.2 Revision: Clean Educational Animation with Minimal Motion
 * Experience: «رحلة تطور مفهوم المنهج — من المفهوم التقليدي إلى المفهوم الحديث»
 * Course: مناهج التربية الرياضية — الفرقة الرابعة (أ.د. هاني الدسوقي إبراهيم)
 *
 * Core Fixes & Enhancements:
 * 1. Coach Character: 100% unified anatomy via HybridCoachCharacter (coach_unified.webp).
 *    Head, neck, body, tracksuit, pointing arm, and tactical clipboard are a single piece.
 *    ZERO separation, gaps, or offset joints.
 * 2. Minimal Motion Principle: Subtle vertical breathing micro-float (-1.5px) or rock-solid static.
 *    No jarring limb motions or distracting spins.
 * 3. Simplified Academic Content: Clear title, short core idea (1 line), concise explanation (1-2 lines),
 *    and a direct practical PE field example for each scene.
 * 4. Flawless Arabic RTL Typography: Generous spacing, responsive cards, zero overflow or text clipping.
 * 5. Direct In-Lesson Execution: Operates directly inside the real lesson page.
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
  Lightbulb,
  Dumbbell,
} from 'lucide-react';
import { CoachCharacter } from './cartoon/CoachCharacter';
import { HybridCoachCharacter } from './cartoon/HybridCoachCharacter';
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
  coreIdea: string;
  simpleExplanation: string;
  fieldExample: string;
  academicCitation: string;
}

const SCENES: SceneInfo[] = [
  {
    id: 1,
    numberArabic: '١',
    title: 'تساؤل البداية: ماهية المنهج',
    headline: 'ما المقصود بالمنهج في التربية الرياضية؟',
    coreIdea: 'المنهج ليس مجرد كتب ومقررات تحفظ، بل مسار تعليمي شامل لبناء شخصية الطالب الرياضي.',
    simpleExplanation:
      'كلمة «منهج» لغةً تعني الطريق الواضح، واصطلاحاً (Curriculum) تعني مضمار الجري أو مسار النمو المتكامل الذي تهيئه وتوجهه المدرسة.',
    fieldExample:
      'في درس التربية الرياضية، لا نكتفي بحفظ قوانين الألعاب نظرياً، بل ننمي اللياقة والمهارة الحركية والروح الرياضية في الملعب.',
    academicCitation: 'كتاب مناهج التربية الرياضية — أ.د. هاني الدسوقي إبراهيم (ص 2، 5، 6)',
  },
  {
    id: 2,
    numberArabic: '٢',
    title: 'المفهوم التقليدي للمنهج',
    headline: 'المفهوم التقليدي: حصر المنهج في المقررات والمعلومات',
    coreIdea: 'وضع المعرفة والمادة العلمية في المركز بوصفها تراثاً ثابتاً، واقتصار دور المعلم على التلقين ونقل المعلومات.',
    simpleExplanation:
      'يركز المفهوم التقليدي على تزويد ذهن المتعلم بالحقائق النظرية الجاهزة، مهملاً ميول الطالب ونموه البدني والاجتماعي والنفسي.',
    fieldExample:
      'الاكتفاء بشرح قوانين وخطط الألعاب على السبورة داخل قاعة الدرس، دون إتاحة الفرصة للممارسة الحركية الفعلية في الملعب.',
    academicCitation: 'كتاب مناهج التربية الرياضية — ص 3، 5، 6',
  },
  {
    id: 3,
    numberArabic: '٣',
    title: 'المفهوم الحديث للمنهج',
    headline: 'المفهوم الحديث: منظومة الخبرات الميدانية المتكاملة',
    coreIdea: 'المنهج هو مجموع الخبرات والأنشطة التربوية التي يمارسها الطالب تحت إشراف وتوجيه المدرسة لرعاية نموه الشامل.',
    simpleExplanation:
      'لم تعد المقررات غاية، بل وسيلة؛ وانتقل التركيز إلى النشاط الحركي الفعلي، والتعلم التعاوني، والتفكير الذاتي بإرشاد المعلم.',
    fieldExample:
      'تنظيم مباراة جماعية بالكرة يكتسب فيها الطالب التوافق الحركي، ويتدرب على القيادة والتعاون مع زملائه بتوجيه المعلم.',
    academicCitation: 'كتاب مناهج التربية الرياضية — ص 2، 3، 4، 5',
  },
];

interface TraditionalSubjectItem {
  id: string;
  name: string;
  shortTitle: string;
  code: string;
  icon: string;
  targetY: number;
  pointerAngle: number;
  traditionalRole: string;
  practicalExample: string;
  quotePage: string;
}

const TRADITIONAL_SUBJECTS: TraditionalSubjectItem[] = [
  {
    id: 'sub-rules',
    name: 'مقرر قواعد الألعاب والمسابقات',
    shortTitle: 'قواعد الألعاب والمسابقات',
    code: 'مقرر ١',
    icon: '📋',
    targetY: 56,
    pointerAngle: -18,
    traditionalRole: 'معارف ولوائح محددة لفرقة دراسية معينة يجب حفظها واسترجاعها.',
    practicalExample: 'حفظ قياسات ملعب كرة السلة وعقوبات الأخطاء على الورق دون تطبيق ميداني.',
    quotePage: 'ص 5، 6',
  },
  {
    id: 'sub-anatomy',
    name: 'مقرر المعارف الصحية والتشريح',
    shortTitle: 'المعارف الصحية والتشريح',
    code: 'مقرر ٢',
    icon: '🫀',
    targetY: 108,
    pointerAngle: 0,
    traditionalRole: 'معلومات علمية تُلقن للطالب بوصفها تراثاً نظرياً مستقراً.',
    practicalExample: 'سرد أسماء العضلات الرئيسية دون ربطها بحركات الإحماء أو التكنيك الحركي.',
    quotePage: 'ص 5',
  },
  {
    id: 'sub-training',
    name: 'مقرر نظريات وأصول التدريب الرياضي',
    shortTitle: 'نظريات وأصول التدريب',
    code: 'مقرر ٣',
    icon: '⏱️',
    targetY: 160,
    pointerAngle: 18,
    traditionalRole: 'مقررات خططية تجعل الكتاب الورقي هو محور الموقف التعليمي.',
    practicalExample: 'قراءة مراحل تنمية التحمل الدوري التنفسي دون قياس نبض أو تدريب عملي.',
    quotePage: 'ص 2، 5',
  },
];

interface ModernExperienceItem {
  id: string;
  title: string;
  category: string;
  iconType: 'motor' | 'collab' | 'analysis' | 'guidance';
  coreConcept: string;
  fieldExample: string;
  studentRole: string;
  quotePage: string;
}

const MODERN_EXPERIENCES: ModernExperienceItem[] = [
  {
    id: 'exp-collab',
    title: 'التعلم التعاوني والتفاعل الجماعي',
    category: 'توافق اجتماعي ونفسي وروح رياضية',
    iconType: 'collab',
    coreConcept: 'تنمية الروح الرياضية، والتعاون الإيجابي، والعمل بروح الفريق الواحد.',
    fieldExample: 'تبادل التمرير السريع وبناء هجمة مشتركة بين الطلاب داخل الملعب.',
    studentRole: 'مشارك متعاون في منظومة النشاط الاجتماعي',
    quotePage: 'ص 2، 4',
  },
  {
    id: 'exp-motor',
    title: 'النشاط الحركي والممارسة الميدانية',
    category: 'ممارسة مهارية وكفاءة بدنية',
    iconType: 'motor',
    coreConcept: 'تحويل المفاهيم النظرية إلى كفاءة بدنية ومهارية في مواقف اللعب الحية.',
    fieldExample: 'تدريبات الجري المتعرج والرشاقة بالكرة بين الأقماع التدريبية.',
    studentRole: 'مشارك نشط وإيجابي في المواقف الحركية',
    quotePage: 'ص 2، 5',
  },
  {
    id: 'exp-analysis',
    title: 'الملاحظة والتحليل والتعلم الذاتي',
    category: 'تفكير ناقد وتقويم مستمر',
    iconType: 'analysis',
    coreConcept: 'جعل المعرفة نتاجاً للبحث والتدريب الذاتي وتدوين الملاحظات الفنية.',
    fieldExample: 'طالب يلاحظ تكنيك زميله في التصويب ويدون نقاط القوة وفرص التحسين.',
    studentRole: 'متعلم مفكر، يلاحظ ويحلل ويقوم الأداء',
    quotePage: 'ص 3، 4',
  },
  {
    id: 'exp-guidance',
    title: 'توجيه المعلم وإشرافه المهني',
    category: 'قيادة الموقف وتيسير بيئة التعلم',
    iconType: 'guidance',
    coreConcept: 'تحول المعلم من ملقن إلى قائد وموجه وميسر لبيئة التعلم الآمنة.',
    fieldExample: 'تشجيع المبادرات الفردية وتصحيح الأخطاء الحركية ميدانياً بأسلوب تربوي.',
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

  // Auto-play timer with smooth progress updates (10 seconds per scene)
  const SCENE_DURATION_MS = 10000;
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
        setProgressPercent(0);
        setCurrentScene((prev) => (prev < 3 ? prev + 1 : 1));
      }
    }, 50);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, progressPercent, currentScene]);

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

  const handleTogglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleResetScene = useCallback(() => {
    setIsPlaying(false);
    setProgressPercent(0);
    setCurrentScene(1);
  }, []);

  const idPrefix = useId();

  // CSS class determining whether continuous animations are actively running or paused
  const motionClass = !reducedMotion && isPlaying ? 'pe-anim-running' : 'pe-anim-paused';

  return (
    <figure
      className="my-8 rounded-3xl bg-[#071C12] text-[#F4FFF7] border-2 border-[#103D27] shadow-2xl overflow-hidden transition-all duration-300"
      aria-labelledby={`${idPrefix}-title`}
    >
      {/* Scoped CSS Keyframes: Minimal Motion Principle */}
      <style>{`
        /* Master Control: Pause all animations when paused or reducedMotion */
        .pe-anim-paused * {
          animation-play-state: paused !important;
        }
        .pe-anim-running * {
          animation-play-state: running;
        }

        /* 1. SCENE 1: Minimal Gentle Breathing Motion for the Coach (-1.5px float) */
        @keyframes pe-coach-breathe {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-1.5px); }
        }

        /* Subtle Head inquiry for student */
        @keyframes pe-tariq-think {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(-0.5deg); }
        }

        /* 2. SCENE 2: Gentle spotlight indicator */
        @keyframes pe-spotlight-beam {
          0%, 100% { opacity: 0.18; }
          50%      { opacity: 0.32; }
        }

        /* 3. SCENE 3: Cooperative Passing (Gentle Ball Arc) */
        @keyframes pe-ball-pass-arc {
          0%   { transform: translate(0px, 0px); }
          50%  { transform: translate(140px, -28px); }
          100% { transform: translate(0px, 0px); }
        }

        /* 4. SCENE 3: Slalom Dribbling */
        @keyframes pe-slalom-run {
          0%   { transform: translate(0px, 0px); }
          50%  { transform: translate(60px, -10px); }
          100% { transform: translate(0px, 0px); }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>

      {/* 1. Header Bar: Identity, Scene Stepper & Drawer Controls */}
      <div className="bg-[#0B2519] border-b border-[#143D27] px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#103D27] to-[#00C853] text-[#071C12] flex items-center justify-center font-black shadow-md shadow-[#00C853]/20 shrink-0">
            <Sparkles className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#39E66D] bg-[#142B20] px-2.5 py-0.5 rounded-full border border-[#00C853]/30">
                أنيميشن تعليمي 2D مبسط
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

          {/* =========================================================================
              SCENE 1: Clean, Responsive Dialogue Box (Cairo Typography)
              Zero clipping, high contrast, positioned naturally in upper pitch sky
             ========================================================================= */}
          {currentScene === 1 && (
            <>
              {/* Mobile Card (situated cleanly above SVG canvas on < 640px) */}
              <div className="sm:hidden p-3.5 bg-gradient-to-r from-[#0E2F20] to-[#071C12] border-b border-[#00C853]/30">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#00C853]" />
                  <span className="text-[11px] font-black text-[#39E66D] font-mono">سؤال المنهج التأسيسي (ص 2، 5):</span>
                </div>
                <p className="text-sm font-black text-white leading-snug">
                  «هل المنهج مجرد مجموعة من المواد الدراسية؟»
                </p>
              </div>

              {/* Desktop/Tablet Floating Dialogue Box (Upper left sky area) */}
              <div className="hidden sm:block absolute top-4 left-6 md:left-8 z-10 max-w-[420px] pointer-events-auto">
                <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#00C853] shadow-xl relative text-right" dir="rtl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#E8F8EE] text-[#00C853] flex items-center justify-center text-xs font-black shrink-0">
                      ؟
                    </div>
                    <span className="text-xs font-black text-[#173D2B]">
                      سؤال المنهج التأسيسي (ص 2، 5):
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-[#071C12] leading-snug mb-1">
                    «هل المنهج مجرد مجموعة من المواد الدراسية؟»
                  </h4>
                  <p className="text-xs text-[#486555] leading-relaxed">
                    يبدأ معلم التربية الرياضية بتوجيه طلابه لإدراك أن المنهج منظومة خبرات أوسع من مجرد كتب تحفظ.
                  </p>
                  {/* Speech pointer towards the coach */}
                  <div className="absolute -bottom-3 right-12 w-0 h-0 border-x-8 border-x-transparent border-t-[12px] border-t-[#00C853]" />
                  <div className="absolute -bottom-2 right-12 w-0 h-0 border-x-7 border-x-transparent border-t-[10px] border-t-white" />
                </div>
              </div>
            </>
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
                SCENE 1: «بداية الرحلة: ما المقصود بالمنهج؟»
                Unified Pristine Coach Character + Cohesive Attentive Students
               ========================================================================= */}
            {currentScene === 1 && (
              <g key="scene-stage-1">
                {/* 1. PE Teacher / Coach: 100% Unified Pristine WebP Character */}
                {/* Head, neck, body, tracksuit, arm, and tactical clipboard are ONE piece */}
                <HybridCoachCharacter
                  x={635}
                  y={135}
                  scale={0.325}
                  isPaused={!isPlaying}
                />

                {/* 2. Cohesive Students Group on Court */}
                {/* Student 1: Tariq (The Thinker) */}
                <StudentCharacter
                  x={375}
                  y={280}
                  scale={1.08}
                  variant="thinker"
                  isPaused={!isPlaying}
                />

                {/* Student 2: Ziad (The Athlete with soccer ball) */}
                <StudentCharacter
                  x={240}
                  y={290}
                  scale={1.03}
                  variant="athlete"
                  isPaused={!isPlaying}
                />

                {/* Student 3: Salma (The Engaged Peer) */}
                <StudentCharacter
                  x={130}
                  y={295}
                  scale={0.98}
                  variant="peer"
                  isPaused={!isPlaying}
                />

                {/* 3. Interactive Call-To-Action Button on Court Ground */}
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
                    r="55"
                    fill="#00C853"
                    style={{ animation: 'pe-spotlight-beam 2.5s ease-in-out infinite' }}
                    filter={`url(#${idPrefix}-glow)`}
                  />

                  {/* 3 Clickable Textbooks with Concise Short Titles (Zero Collision) */}
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
                          strokeWidth={isSelected ? 2.5 : 1.5}
                          filter={isSelected ? 'drop-shadow(0 4px 10px rgba(0,200,83,0.35))' : undefined}
                        />
                        <rect x="8" y="7" width="28" height="28" rx="6" fill={isSelected ? '#00C853' : '#64748B'} />
                        <text x="22" y="25" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                          {sub.icon}
                        </text>
                        <text x="44" y="25" fill="#173D2B" fontSize="12" fontWeight="900" fontFamily="Cairo">
                          {sub.shortTitle}
                        </text>
                        <rect x="250" y="10" width="80" height="22" rx="11" fill={isSelected ? '#103D27' : '#F1F5F9'} />
                        <text x="290" y="25" fill={isSelected ? '#39E66D' : '#64748B'} fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                          {isSelected ? '✓ بالشرح' : 'فحص'}
                        </text>
                      </g>
                    );
                  })}
                </g>

                {/* Pointing Coach in Scene 2 */}
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

                  <g style={{ animation: 'pe-ball-pass-arc 3s ease-in-out infinite' }}>
                    <circle cx="35" cy="125" r="9.5" fill="#FFFFFF" stroke="#071C12" strokeWidth="1.5" />
                    <circle cx="35" cy="125" r="3" fill="#071C12" />
                  </g>

                  <g transform="translate(10, 55)">
                    <ellipse cx="20" cy="85" rx="16" ry="5" fill="#071C12" opacity="0.4" />
                    <rect x="14" y="50" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="24" y="50" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="10" y="15" width="22" height="40" fill="#00C853" rx="3" />
                    <circle cx="21" cy="6" r="9" fill="#FED7AA" />
                  </g>

                  <g transform="translate(165, 55)">
                    <ellipse cx="20" cy="85" rx="16" ry="5" fill="#071C12" opacity="0.4" />
                    <rect x="14" y="50" width="6" height="35" fill="#1E293B" rx="2" />
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

                  <g style={{ animation: 'pe-slalom-run 3.6s ease-in-out infinite' }}>
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
                    <circle cx="22" cy="9" r="10" fill="#FED7AA" />
                    <rect x="26" y="28" width="18" height="24" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                    <line x1="30" y1="36" x2="38" y2="36" stroke="#00C853" strokeWidth="1.5" />
                    <line x1="30" y1="41" x2="36" y2="41" stroke="#0F172A" strokeWidth="1" />
                  </g>
                </g>

                {/* 5. ACTIVITY ZONE D: Coach Guidance */}
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

        {/* =========================================================================
            3. Responsive Academic Deck: Crystal Clear, Simplified Explanations
            Conforms strictly to 4th year PE students' needs (Cairo font, generous margins)
           ========================================================================= */}
        <div className="mt-4 space-y-3.5" dir="rtl">
          
          {/* Main Active Scene Card */}
          <div className="bg-[#0B2519] border border-[#143D27] rounded-2xl p-4 sm:p-5 shadow-md">
            
            {/* Header: Scene Badge & Clear Title */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-[#143D27] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C853]" />
                <h4 className="text-base sm:text-lg font-black text-[#F4FFF7]">
                  {activeSceneInfo.headline}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#39E66D] bg-[#142B20] px-3 py-1 rounded-full border border-[#00C853]/30">
                  المشهد {activeSceneInfo.numberArabic} من ٣
                </span>
                <span className="text-xs font-bold text-[#D4E9DC]/70 hidden md:inline">
                  {activeSceneInfo.academicCitation}
                </span>
              </div>
            </div>

            {/* Core Idea (Short, Punchy, Highlighted) */}
            <div className="bg-[#103D27]/80 rounded-xl p-3 border border-[#00C853]/30 mb-3 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-[#39E66D] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-black text-[#39E66D] block mb-0.5">الفكرة الجوهرية للمشهد:</span>
                <p className="text-xs sm:text-sm font-bold text-[#F4FFF7] leading-relaxed">
                  {activeSceneInfo.coreIdea}
                </p>
              </div>
            </div>

            {/* Simplified 1-2 Line Academic Explanation */}
            <div className="text-xs sm:text-sm text-[#D4E9DC] leading-relaxed mb-3">
              <p>{activeSceneInfo.simpleExplanation}</p>
            </div>

            {/* Practical Field Example (Real PE Class Context) */}
            <div className="bg-[#071C12] rounded-xl p-3 border border-[#143D27] flex items-start gap-2.5">
              <Dumbbell className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-black text-[#00C853] block mb-0.5">مثال تطبيقي من درس التربية الرياضية:</span>
                <p className="text-xs sm:text-sm text-[#D4E9DC]/90 leading-relaxed">
                  {activeSceneInfo.fieldExample}
                </p>
              </div>
            </div>
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

          {/* Interactive Scene 2: Clickable Subject Cards with High Contrast & Responsive RTL Layout */}
          {currentScene === 2 && (
            <div className="space-y-2.5" dir="rtl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-black text-[#39E66D]">
                  انقر على أي مقرر على السبورة أو البطاقات أدناه لفحص المفهوم التقليدي:
                </span>
                <span className="text-xs font-bold text-[#D4E9DC]/75 bg-[#142B20] px-2.5 py-1 rounded-lg border border-[#143D27]">
                  المرجع: {activeSubject.quotePage}
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
                      className={`p-4 rounded-2xl text-right transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#103D27] border-2 border-[#00C853] shadow-lg shadow-[#00C853]/20 ring-2 ring-[#00C853]/40'
                          : 'bg-[#0B2519] border border-[#143D27] hover:bg-[#142B20] hover:border-[#00C853]/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-base shrink-0">{sub.icon}</span>
                            <span className="font-bold text-xs text-[#86efac] font-mono shrink-0">
                              {sub.code}
                            </span>
                          </div>
                          {isSelected ? (
                            <span className="text-[11px] font-black bg-[#00C853] text-[#071C12] px-2.5 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              مُختار
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold text-[#D4E9DC]/60 hover:text-white shrink-0">
                              فحص 👈
                            </span>
                          )}
                        </div>

                        <h5 className="font-black text-sm text-[#F4FFF7] mb-1.5 leading-snug">
                          {sub.name}
                        </h5>

                        <p className="text-xs text-[#D4E9DC]/85 leading-relaxed mb-2.5">
                          {sub.traditionalRole}
                        </p>
                      </div>

                      <div className="text-[11px] text-[#39E66D] font-bold border-t border-[#143D27] pt-2">
                        <span>مثال: {sub.practicalExample}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive Scene 3: Clickable Modern Experience Cards with High Contrast & Responsive RTL Layout */}
          {currentScene === 3 && (
            <div className="space-y-2.5" dir="rtl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-black text-[#39E66D]">
                  انقر على أي منطقة خبرة في الملعب لتفعيل النشاط والمفاهيم التربوية:
                </span>
                <span className="text-xs font-bold text-[#D4E9DC]/75 bg-[#142B20] px-2.5 py-1 rounded-lg border border-[#143D27]">
                  المرجع: {activeExperience.quotePage}
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
                      className={`p-4 rounded-2xl text-right transition-all cursor-pointer border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#103D27] border-2 border-[#00C853] shadow-lg shadow-[#00C853]/20 ring-2 ring-[#00C853]/40'
                          : 'bg-[#0B2519] border border-[#143D27] hover:bg-[#142B20] hover:border-[#00C853]/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            {exp.iconType === 'collab' && <Users className="w-4 h-4 text-[#39E66D] shrink-0" />}
                            {exp.iconType === 'motor' && <Activity className="w-4 h-4 text-[#00C853] shrink-0" />}
                            {exp.iconType === 'analysis' && <Eye className="w-4 h-4 text-[#39E66D] shrink-0" />}
                            {exp.iconType === 'guidance' && <Award className="w-4 h-4 text-[#00C853] shrink-0" />}
                            <span className="font-bold text-xs text-[#F4FFF7] truncate">
                              {exp.title}
                            </span>
                          </div>
                          {isSelected && (
                            <span className="text-[10px] font-black bg-[#00C853] text-[#071C12] px-2 py-0.5 rounded-full shrink-0">
                              نشط ✓
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] font-bold text-[#39E66D] mb-1.5">
                          {exp.category}
                        </div>

                        <p className="text-xs text-[#D4E9DC]/85 leading-relaxed mb-2.5">
                          {exp.coreConcept}
                        </p>
                      </div>

                      <div className="text-[11px] text-[#00C853] font-bold border-t border-[#143D27] pt-2 space-y-1">
                        <div className="text-[#D4E9DC]/80 text-[10.5px]">مثال: {exp.fieldExample}</div>
                        <div className="flex items-center gap-1 text-[#39E66D]">
                          <CheckCircle2 className="w-3 h-3 shrink-0" />
                          <span className="truncate">{exp.studentRole}</span>
                        </div>
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

      {/* 5. Comprehensive Academic Drawer */}
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
