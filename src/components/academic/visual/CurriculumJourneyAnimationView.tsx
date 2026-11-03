/**
 * Phase 4.1: Professional 2D Educational Animation Engine
 * Experience: «رحلة تطور مفهوم المنهج — من المفهوم التقليدي إلى المفهوم الحديث»
 * Course: مناهج التربية الرياضية — الفرقة الرابعة (أ.د. هاني الدسوقي إبراهيم)
 *
 * Visual Art Direction:
 * - 2D School Sports Court Environment (الملعب المدرسي)
 * - Illustrated PE Teacher Character with whistle, tracksuit, expressive poses
 * - Cohesive athletic students with diverse roles (runner, passer, analyst)
 * - Authentic props: training cones, soccer balls, curriculum display board
 * - Visual depth layers: Sky -> School Facade -> Running Track -> Field -> Interactive Characters
 * - Palette: Sport Energy (Deep greens #071C12, #103D27, #142B20, Emerald #00C853, Accent #39E66D, Soft #E8F8EE)
 */

import React, { useState, useEffect, useCallback, useId } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  SkipBack,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Activity,
  Compass,
} from 'lucide-react';

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
  cameraFocus: 'wide' | 'board' | 'activity';
  summary: string;
}

const SCENES: SceneInfo[] = [
  {
    id: 1,
    numberArabic: '١',
    title: 'بداية الرحلة الاستكشافية',
    headline: 'ما المقصود بالمنهج في التربية الرياضية؟',
    pedagogicalConcept: 'استثارة الفضول وتفكيك النظرة المسبقة عن المنهج',
    cameraFocus: 'wide',
    summary:
      'نبدأ جولتنا الميدانية داخل ملعب المدرسة الرياضي: يرحب المعلم بطلابه ويوجه انتباههم للتساؤل الجوهري: هل المنهج مجرد كتب ومواد دراسية تحفظ، أم مسار أوسع من ذلك؟',
  },
  {
    id: 2,
    numberArabic: '٢',
    title: 'المفهوم التقليدي للمنهج',
    headline: 'مركزية المقررات والمعارف المنقولة',
    pedagogicalConcept: 'المنهج كمجموعة مواد دراسية وحصيلة التراث المعرفي',
    cameraFocus: 'board',
    summary:
      'تتحول زاوية العرض إلى مساحة التدريس النظري: يبرز المعلم موقع المقررات الدراسية في بؤرة الاهتمام بوصفها تراثاً ثقافياً، ويكون دور الطالب فيها حفظ واسترجاع المعلومات في الاختبارات.',
  },
  {
    id: 3,
    numberArabic: '٣',
    title: 'المفهوم الحديث للمنهج',
    headline: 'منظومة الخبرات والأنشطة تحت إشراف المدرسة',
    pedagogicalConcept: 'المنهج كخبرات متكاملة لبناء شخصية المتعلم الشاملة',
    cameraFocus: 'activity',
    summary:
      'يتسع المشهد في أرجاء الملعب المدرسي: لم تختفِ المقررات بل أصبحت ركناً داخل منظومة خبرات أوسع تشمل النشاط الحركي، والتعلم التعاوني، والملاحظة، وتوجيه المعلم لتحقيق النمو الشامل.',
  },
];

interface TraditionalSubjectItem {
  id: string;
  name: string;
  code: string;
  role: string;
  explanation: string;
  quotePage: string;
}

const TRADITIONAL_SUBJECTS: TraditionalSubjectItem[] = [
  {
    id: 'sub-rules',
    name: 'مقرر قواعد الألعاب ونظرياتها',
    code: 'قواعد وقوانين',
    role: 'المقرر كمحتوى دراسي محدد لفرقة معينة',
    explanation:
      'في المفهوم التقليدي، يُعرف المنهج بأنه "مجموعة من المفاهيم والمعارف والحقائق والنظريات ليكون مقرر دراسي لفرقة معينة". التركيز ينصب على حفظ القواعد واللوائح الرياضية.',
    quotePage: 'كتاب مناهج التربية الرياضية — ص 5، 6',
  },
  {
    id: 'sub-anatomy',
    name: 'كتاب التربية الصحية والتشريح',
    code: 'معارف وتراث',
    role: 'المعرفة بوصفها حقائق ثابتة للتلقين',
    explanation:
      'تضع النظرة التقليدية المعرفة في بؤرة الاهتمام باعتبارها حصيلة التراث الثقافي والاجتماعي، ويُنظر إليها كمعلومات دائمة يطلب من الطالب استيعابها واسترجاعها في الامتحانات.',
    quotePage: 'كتاب مناهج التربية الرياضية — ص 5',
  },
  {
    id: 'sub-training',
    name: 'مقرر التدريب البدني النظري',
    code: 'حفظ واسترجاع',
    role: 'التقويم المقتصر على قياس الحفظ',
    explanation:
      'يقتصر دور المتعلم على الاستقبال السلبي للمعلومة، ويكون التقويم أداة لحساب ما حفظه الطالب دون قياس الأثر السلوكي أو تنمية المهارات الحركية والتفاعل الميداني.',
    quotePage: 'كتاب مناهج التربية الرياضية — ص 3، 5',
  },
];

interface ModernExperienceItem {
  id: string;
  title: string;
  category: string;
  color: string;
  description: string;
  studentRole: string;
  quotePage: string;
}

const MODERN_EXPERIENCES: ModernExperienceItem[] = [
  {
    id: 'exp-motor',
    title: 'النشاط الحركي التطبيقي',
    category: 'ممارسة حركية بدنية',
    color: '#00C853',
    description:
      'ممارسة مهارات الجري، والرشاقة بين المخاريط، والتحكم بالكرة. تتحول المعارف النظرية إلى كفاءة حركية تنمي طاقات الفرد البدنية والمهارية.',
    studentRole: 'مشارك نشط وإيجابي في الميدان',
    quotePage: 'كتاب مناهج التربية الرياضية — ص 2، 5',
  },
  {
    id: 'exp-collab',
    title: 'التعلم التعاوني وروح الفريق',
    category: 'توافق اجتماعي ونفسي',
    color: '#39E66D',
    description:
      'تبادل التمرير والتعاون الرياضي الجماعي لبناء الشخصية المتوازنة، واكتساب قيم الروح الرياضية، والتعاون، والتوافق الإيجابي مع الزملاء.',
    studentRole: 'عضو متعاون في المنظومة الاجتماعية',
    quotePage: 'كتاب مناهج التربية الرياضية — ص 2، 4',
  },
  {
    id: 'exp-analysis',
    title: 'الملاحظة والتحليل والتعلم الذاتي',
    category: 'بحث منظم وتفكير ناقد',
    color: '#059669',
    description:
      'استخدام لوحة التخطيط وملاحظة الأداء الحركي. المعرفة هنا ليست حقائق جامدة، بل نتاج لعملية البحث المنظم واستخدام التقنيات الحديثة.',
    studentRole: 'باحث ومفكر ومحلل للأداء',
    quotePage: 'كتاب مناهج التربية الرياضية — ص 3، 4',
  },
  {
    id: 'exp-guidance',
    title: 'إشراف المعلم وتوجيهه المهني',
    category: 'قيادة وتيسير الموقف التعليمي',
    color: '#103D27',
    description:
      'يقوم المعلم بدور المرشد والموجه ومراقب بيئة التعلم؛ يصمم المواقف التعليمية ويوجه الطلاب دون إلغاء دورهم الفاعل أو حصرهم في التلقين.',
    studentRole: 'متعلم موجه يكتسب الخبرة تحت إشراف المدرسة',
    quotePage: 'كتاب مناهج التربية الرياضية — ص 3، 5',
  },
];

export const CurriculumJourneyAnimationView: React.FC<{
  block?: CurriculumJourneyAnimationBlock;
}> = ({ block }) => {
  const [currentScene, setCurrentScene] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeSubjectId, setActiveSubjectId] = useState<string>('sub-rules');
  const [activeExperienceId, setActiveExperienceId] = useState<string>('exp-motor');
  const [showAcademicDrawer, setShowAcademicDrawer] = useState<boolean>(false);

  // Derived camera zoom smoothly based on scene focus
  const cameraZoom = currentScene === 1 ? 1 : currentScene === 2 ? 1.08 : 1.02;

  // Check prefers-reduced-motion
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

  // Auto-play timer for presentation mode
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentScene < 3) {
        setCurrentScene((prev) => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, 9000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentScene]);

  const handleNextScene = useCallback(() => {
    setCurrentScene((prev) => Math.min(3, prev + 1));
    setIsPlaying(false);
  }, []);

  const handlePrevScene = useCallback(() => {
    setCurrentScene((prev) => Math.max(1, prev - 1));
    setIsPlaying(false);
  }, []);

  const handleResetScene = useCallback(() => {
    setCurrentScene(1);
    setActiveSubjectId('sub-rules');
    setActiveExperienceId('exp-motor');
    setIsPlaying(false);
  }, []);

  const handleStartExploration = () => {
    setCurrentScene(2);
  };

  const idPrefix = useId();

  return (
    <figure
      className="my-8 rounded-3xl bg-[#071C12] text-[#F4FFF7] border-2 border-[#103D27] shadow-2xl overflow-hidden transition-all duration-300"
      aria-labelledby={`${idPrefix}-title`}
    >
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

        {/* Scene Navigation Pills */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center gap-1 bg-[#071C12] p-1 rounded-2xl border border-[#143D27]">
            {SCENES.map((scene) => {
              const isActive = scene.id === currentScene;
              return (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => {
                    setCurrentScene(scene.id);
                    setIsPlaying(false);
                  }}
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
      <div className="relative w-full bg-gradient-to-b from-[#0B2519] via-[#071C12] to-[#04120B] p-2 sm:p-5 overflow-hidden select-none">
        
        {/* Stage Container with Camera Zoom/Pan */}
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-[#143D27] shadow-inner bg-[#071C12]"
          style={{
            transform: reducedMotion ? 'none' : `scale(${cameraZoom})`,
            transition: 'transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {/* Native High-Detail Educational SVG */}
          <svg
            viewBox="0 0 1000 560"
            className="w-full h-auto max-h-[540px] mx-auto block"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={`المشهد ${currentScene}: ${activeSceneInfo.title}`}
          >
            <defs>
              {/* Sky Gradient */}
              <linearGradient id={`${idPrefix}-sky`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#87CEEB" />
                <stop offset="60%" stopColor="#B0E0E6" />
                <stop offset="100%" stopColor="#E0F7FA" />
              </linearGradient>

              {/* Pitch Grass Gradient */}
              <linearGradient id={`${idPrefix}-pitch`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2E7D32" />
                <stop offset="40%" stopColor="#1B5E20" />
                <stop offset="100%" stopColor="#144A18" />
              </linearGradient>

              {/* Running Track Clay Gradient */}
              <linearGradient id={`${idPrefix}-track`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C2410C" />
                <stop offset="100%" stopColor="#9A3412" />
              </linearGradient>

              {/* Spotlight Glow Filter */}
              <filter id={`${idPrefix}-glow`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* LAYER 1: Deep Background — Sky, Sun & Clouds */}
            <rect x="0" y="0" width="1000" height="250" fill={`url(#${idPrefix}-sky)`} />
            <circle cx="880" cy="70" r="38" fill="#FFF59D" opacity="0.85" />
            <circle cx="880" cy="70" r="48" fill="#FFF9C4" opacity="0.35" />

            {/* Stylized Morning Clouds */}
            <g opacity="0.75" className={reducedMotion ? '' : 'animate-energy-float'}>
              <path d="M 120 70 Q 140 50 170 60 Q 200 45 230 65 Q 260 70 270 90 L 110 90 Z" fill="#FFFFFF" />
              <path d="M 520 85 Q 545 60 580 75 Q 615 60 645 80 Q 670 85 680 105 L 500 105 Z" fill="#FFFFFF" opacity="0.8" />
            </g>

            {/* LAYER 2: School Facade & Distant Architecture */}
            {/* Distant trees */}
            <g fill="#1E4620">
              <polygon points="50,220 80,160 110,220" />
              <polygon points="90,220 120,150 150,220" />
              <polygon points="135,220 160,170 185,220" />
              <polygon points="820,220 850,155 880,220" />
              <polygon points="860,220 890,165 920,220" />
              <polygon points="900,220 930,150 960,220" />
            </g>

            {/* School Building Center */}
            <rect x="240" y="120" width="520" height="100" fill="#E2E8F0" rx="4" />
            <rect x="220" y="110" width="560" height="15" fill="#334155" rx="3" />
            {/* Building Pediment Entrance */}
            <polygon points="500,70 420,110 580,110" fill="#1E293B" />
            <rect x="470" y="125" width="60" height="95" fill="#0F172A" rx="4" />
            {/* School Signboard in Arabic */}
            <rect x="430" y="88" width="140" height="18" fill="#00C853" rx="4" />
            <text x="500" y="101" fill="#071C12" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
              مدرسة التربية الرياضية الحديثة
            </text>
            {/* School Windows Array */}
            {[260, 310, 360, 610, 660, 710].map((wx, i) => (
              <g key={i}>
                <rect x={wx} y="135" width="32" height="35" fill="#93C5FD" rx="2" stroke="#475569" strokeWidth="1.5" />
                <line x1={wx + 16} y1="135" x2={wx + 16} y2="170" stroke="#475569" strokeWidth="1" />
                <line x1={wx} y1="152" x2={wx + 32} y2="152" stroke="#475569" strokeWidth="1" />
              </g>
            ))}

            {/* LAYER 3: Athletic Running Track & Ground */}
            <rect x="0" y="215" width="1000" height="60" fill={`url(#${idPrefix}-track)`} />
            {/* Track Lane Lines */}
            <line x1="0" y1="235" x2="1000" y2="235" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="16 8" opacity="0.8" />
            <line x1="0" y1="255" x2="1000" y2="255" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="16 8" opacity="0.8" />

            {/* LAYER 4: The School Sports Field (الملعب العشبي) */}
            <rect x="0" y="275" width="1000" height="285" fill={`url(#${idPrefix}-pitch)`} />
            {/* White Field Markings */}
            <rect x="30" y="295" width="940" height="245" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" rx="8" />
            {/* Midfield Center Line & Circle */}
            <line x1="500" y1="295" x2="500" y2="540" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
            <circle cx="500" cy="417" r="70" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
            <circle cx="500" cy="417" r="5" fill="#FFFFFF" opacity="0.7" />

            {/* =========================================================================
                SCENE 1: «بداية الرحلة: ما المقصود بالمنهج؟»
               ========================================================================= */}
            {currentScene === 1 && (
              <g className="transition-all duration-500">
                {/* Sports Equipment: Cones and Ball Rack */}
                <g transform="translate(140, 410)">
                  {/* Training Cones */}
                  <polygon points="0,30 15,0 30,30" fill="#EA580C" />
                  <rect x="-4" y="28" width="38" height="5" fill="#C2410C" rx="2" />
                  <polygon points="50,30 65,0 80,30" fill="#EA580C" />
                  <rect x="46" y="28" width="38" height="5" fill="#C2410C" rx="2" />
                  <polygon points="100,30 115,0 130,30" fill="#EA580C" />
                  <rect x="96" y="28" width="38" height="5" fill="#C2410C" rx="2" />
                </g>

                {/* Classic Soccer Ball in Center Field */}
                <g transform="translate(480, 450)">
                  <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
                  <polygon points="20,10 27,15 25,23 15,23 13,15" fill="#0F172A" />
                  <polygon points="20,30 26,26 24,20 16,20 14,26" fill="#0F172A" />
                </g>

                {/* PE Teacher Character (Standing center-right, welcoming and pointing) */}
                <g transform="translate(620, 310)">
                  {/* Shadow */}
                  <ellipse cx="40" cy="180" rx="36" ry="10" fill="#071C12" opacity="0.5" />
                  {/* Legs with Athletic Track Pants */}
                  <rect x="25" y="110" width="12" height="65" fill="#071C12" rx="4" />
                  <rect x="43" y="110" width="12" height="65" fill="#071C12" rx="4" />
                  {/* Shoes */}
                  <ellipse cx="28" cy="176" rx="14" ry="7" fill="#FFFFFF" stroke="#00C853" strokeWidth="2" />
                  <ellipse cx="49" cy="176" rx="14" ry="7" fill="#FFFFFF" stroke="#00C853" strokeWidth="2" />
                  {/* Torso / Sport Polo */}
                  <path d="M 18 45 L 62 45 L 58 112 L 22 112 Z" fill="#103D27" stroke="#00C853" strokeWidth="1.5" />
                  {/* Sport Stripe */}
                  <line x1="40" y1="45" x2="40" y2="112" stroke="#39E66D" strokeWidth="3" />
                  {/* Whistle & Yellow Lanyard */}
                  <path d="M 33 45 L 40 70 L 47 45" stroke="#F59E0B" strokeWidth="2" fill="none" />
                  <circle cx="40" cy="73" r="5" fill="#F59E0B" />
                  {/* Arms & Hands: Left hand on hip, right hand gestured forward */}
                  <path d="M 20 48 L 5 75 L 14 90" stroke="#103D27" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="90" r="5" fill="#FBCFE8" />
                  <path d="M 60 48 L 85 70 L 98 60" stroke="#103D27" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="98" cy="60" r="5" fill="#FBCFE8" />
                  {/* Head & Athletic Cap */}
                  <circle cx="40" cy="25" r="16" fill="#FBCFE8" />
                  {/* Cap */}
                  <path d="M 22 23 Q 40 5 58 23 Z" fill="#00C853" />
                  <rect x="42" y="18" width="24" height="5" fill="#00C853" rx="2" />
                  {/* Facial Features: Smile, eyes */}
                  <circle cx="46" cy="24" r="2" fill="#0F172A" />
                  <path d="M 44 30 Q 48 35 52 30" stroke="#9A3412" strokeWidth="1.5" fill="none" />
                  {/* Badge: "معلم التربية الرياضية" */}
                  <rect x="0" y="195" width="80" height="20" fill="#071C12" rx="10" stroke="#00C853" strokeWidth="1" />
                  <text x="40" y="209" fill="#39E66D" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                    كابتن المعلم
                  </text>
                </g>

                {/* Group of Students (Left & Mid field, listening attentively) */}
                {/* Student 1 (Boy in athletic white/emerald jersey) */}
                <g transform="translate(360, 340)">
                  <ellipse cx="25" cy="150" rx="22" ry="7" fill="#071C12" opacity="0.4" />
                  <rect x="16" y="95" width="8" height="50" fill="#1E293B" rx="3" />
                  <rect x="28" y="95" width="8" height="50" fill="#1E293B" rx="3" />
                  <rect x="12" y="45" width="28" height="52" fill="#FFFFFF" stroke="#00C853" strokeWidth="2" rx="4" />
                  <circle cx="26" cy="30" r="13" fill="#FED7AA" />
                  <path d="M 16 26 Q 26 12 36 26" fill="#78350F" />
                  <circle cx="31" cy="30" r="1.5" fill="#0F172A" />
                  <rect x="2" y="160" width="48" height="16" fill="#103D27" rx="8" />
                  <text x="26" y="172" fill="#F4FFF7" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                    طالب (١)
                  </text>
                </g>

                {/* Student 2 (Student in blue shorts and athletic stance) */}
                <g transform="translate(260, 350)">
                  <ellipse cx="25" cy="140" rx="20" ry="6" fill="#071C12" opacity="0.4" />
                  <rect x="15" y="90" width="8" height="48" fill="#1E3A8A" rx="3" />
                  <rect x="27" y="90" width="8" height="48" fill="#1E3A8A" rx="3" />
                  <rect x="12" y="45" width="28" height="48" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" rx="4" />
                  <circle cx="26" cy="30" r="12" fill="#FDE047" opacity="0.8" />
                  <circle cx="26" cy="30" r="12" fill="#FED7AA" />
                  <path d="M 16 26 Q 26 15 36 26" fill="#0F172A" />
                  <circle cx="31" cy="30" r="1.5" fill="#0F172A" />
                  <rect x="2" y="150" width="48" height="16" fill="#103D27" rx="8" />
                  <text x="26" y="162" fill="#F4FFF7" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                    طالب (٢)
                  </text>
                </g>

                {/* Teacher's Engaging Speech Balloon Question */}
                <g transform="translate(480, 160)" className={reducedMotion ? '' : 'animate-energy-float'}>
                  {/* Balloon Body */}
                  <rect x="0" y="0" width="370" height="92" rx="20" fill="#FFFFFF" stroke="#00C853" strokeWidth="3" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.25))" />
                  {/* Balloon Tail */}
                  <polygon points="260,92 280,118 240,92" fill="#FFFFFF" />
                  <polygon points="260,92 280,118 240,92" stroke="#00C853" strokeWidth="3" fill="none" />
                  <rect x="238" y="90" width="24" height="4" fill="#FFFFFF" />

                  {/* Header in speech balloon */}
                  <g transform="translate(20, 18)">
                    <circle cx="12" cy="12" r="10" fill="#E8F8EE" />
                    <text x="12" y="16" fill="#00C853" fontSize="12" fontWeight="900" textAnchor="middle">؟</text>
                    <text x="32" y="16" fill="#173D2B" fontSize="13" fontWeight="900" fontFamily="Cairo">
                      سؤال الدرس الاستفتاحي:
                    </text>
                  </g>

                  {/* Core Question Text */}
                  <text x="185" y="65" fill="#071C12" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    «هل المنهج مجرد مجموعة من المواد الدراسية؟»
                  </text>
                </g>

                {/* Call To Action Button Embedded in Scene 1 */}
                <g transform="translate(390, 485)" className="cursor-pointer" onClick={handleStartExploration}>
                  <rect x="0" y="0" width="220" height="52" rx="26" fill="#00C853" stroke="#39E66D" strokeWidth="2" filter="drop-shadow(0 4px 14px rgba(0,200,83,0.4))" />
                  <text x="110" y="32" fill="#071C12" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    ابدأ الاستكشاف الآن ⬅
                  </text>
                </g>
              </g>
            )}

            {/* =========================================================================
                SCENE 2: «المنهج في المفهوم التقليدي — مركزية المقررات والمعارف»
               ========================================================================= */}
            {currentScene === 2 && (
              <g className="transition-all duration-500">
                {/* Instructional Backdrop: Covered sports pavilion & instructional whiteboard */}
                {/* Mobile Whiteboard Stand */}
                <g transform="translate(240, 260)">
                  {/* Stand Legs */}
                  <line x1="80" y1="210" x2="120" y2="250" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                  <line x1="420" y1="210" x2="380" y2="250" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
                  <line x1="120" y1="250" x2="380" y2="250" stroke="#475569" strokeWidth="4" />
                  {/* Board Frame */}
                  <rect x="60" y="10" width="380" height="210" rx="14" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="6" filter="drop-shadow(0 12px 25px rgba(0,0,0,0.3))" />
                  {/* Board Top Header */}
                  <rect x="63" y="13" width="374" height="34" fill="#103D27" rx="10" />
                  <text x="250" y="35" fill="#39E66D" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    لوحة المنهج التقليدي: بؤرة الاهتمام بالمقررات
                  </text>

                  {/* Radial Spotlight Beam highlighting the textbooks */}
                  <circle cx="250" cy="120" r="75" fill="#00C853" opacity="0.12" filter={`url(#${idPrefix}-glow)`} />

                  {/* 3 Interactive Clickable Subject Books on the Board */}
                  {TRADITIONAL_SUBJECTS.map((sub, idx) => {
                    const isSelected = sub.id === activeSubjectId;
                    const yPos = 56 + idx * 48;
                    return (
                      <g
                        key={sub.id}
                        transform={`translate(80, ${yPos})`}
                        className="cursor-pointer transition-all duration-200"
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
                          filter={isSelected ? 'drop-shadow(0 4px 10px rgba(0,200,83,0.3))' : undefined}
                        />
                        {/* Book Spine Icon */}
                        <rect x="8" y="7" width="28" height="28" rx="6" fill={isSelected ? '#00C853' : '#64748B'} />
                        <text x="22" y="25" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                          📚
                        </text>
                        {/* Subject Title */}
                        <text x="46" y="24" fill="#173D2B" fontSize="12" fontWeight="900" fontFamily="Cairo">
                          {sub.name}
                        </text>
                        <rect x="250" y="10" width="80" height="22" rx="11" fill={isSelected ? '#103D27' : '#F1F5F9'} />
                        <text x="290" y="25" fill={isSelected ? '#39E66D' : '#64748B'} fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                          {isSelected ? '✓ محدد للمعاينة' : 'انقر للفحص'}
                        </text>
                      </g>
                    );
                  })}
                </g>

                {/* PE Teacher (Positioned left of the board, pointing directly at the subject list) */}
                <g transform="translate(130, 310)">
                  <ellipse cx="40" cy="180" rx="34" ry="9" fill="#071C12" opacity="0.45" />
                  <rect x="25" y="110" width="12" height="65" fill="#071C12" rx="4" />
                  <rect x="43" y="110" width="12" height="65" fill="#071C12" rx="4" />
                  <ellipse cx="28" cy="176" rx="14" ry="7" fill="#FFFFFF" stroke="#00C853" strokeWidth="2" />
                  <ellipse cx="49" cy="176" rx="14" ry="7" fill="#FFFFFF" stroke="#00C853" strokeWidth="2" />
                  <path d="M 18 45 L 62 45 L 58 112 L 22 112 Z" fill="#103D27" stroke="#00C853" strokeWidth="1.5" />
                  <line x1="40" y1="45" x2="40" y2="112" stroke="#39E66D" strokeWidth="3" />
                  {/* Pointing hand with pointer stick toward the board */}
                  <path d="M 60 50 L 95 65 L 140 45" stroke="#103D27" strokeWidth="8" strokeLinecap="round" />
                  <line x1="140" y1="45" x2="190" y2="25" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="190" cy="25" r="4" fill="#F59E0B" />
                  {/* Left hand holding syllabus notebook */}
                  <path d="M 20 48 L 8 75 L 18 85" stroke="#103D27" strokeWidth="8" strokeLinecap="round" />
                  <rect x="8" y="75" width="22" height="26" rx="3" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                  {/* Head & Cap */}
                  <circle cx="40" cy="25" r="16" fill="#FBCFE8" />
                  <path d="M 22 23 Q 40 5 58 23 Z" fill="#00C853" />
                  <rect x="42" y="18" width="24" height="5" fill="#00C853" rx="2" />
                  <circle cx="46" cy="24" r="2" fill="#0F172A" />
                  <path d="M 44 30 Q 48 35 52 30" stroke="#9A3412" strokeWidth="1.5" fill="none" />
                </g>

                {/* Students seated/standing attentively in traditional audience layout */}
                <g transform="translate(680, 340)">
                  {/* Student A */}
                  <g transform="translate(0, 0)">
                    <ellipse cx="25" cy="140" rx="20" ry="6" fill="#071C12" opacity="0.4" />
                    <rect x="15" y="85" width="8" height="50" fill="#1E293B" rx="3" />
                    <rect x="27" y="85" width="8" height="50" fill="#1E293B" rx="3" />
                    <rect x="12" y="40" width="28" height="48" fill="#FFFFFF" stroke="#00C853" strokeWidth="2" rx="4" />
                    <circle cx="26" cy="25" r="12" fill="#FED7AA" />
                    <path d="M 16 22 Q 26 10 36 22" fill="#78350F" />
                    <circle cx="21" cy="25" r="1.5" fill="#0F172A" />
                    {/* Notebook in hand */}
                    <rect x="8" y="65" width="16" height="22" rx="2" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
                  </g>

                  {/* Student B */}
                  <g transform="translate(65, 10)">
                    <ellipse cx="25" cy="140" rx="20" ry="6" fill="#071C12" opacity="0.4" />
                    <rect x="15" y="85" width="8" height="50" fill="#1E3A8A" rx="3" />
                    <rect x="27" y="85" width="8" height="50" fill="#1E3A8A" rx="3" />
                    <rect x="12" y="40" width="28" height="48" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" rx="4" />
                    <circle cx="26" cy="25" r="12" fill="#FED7AA" />
                    <path d="M 16 22 Q 26 10 36 22" fill="#0F172A" />
                    <circle cx="21" cy="25" r="1.5" fill="#0F172A" />
                  </g>

                  {/* Audience Label Badge */}
                  <rect x="10" y="160" width="115" height="20" fill="#103D27" rx="10" stroke="#00C853" strokeWidth="1" />
                  <text x="67" y="174" fill="#39E66D" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                    تلقين واسترجاع للمعلومة
                  </text>
                </g>

                {/* Banner summarizing traditional paradigm */}
                <g transform="translate(250, 195)">
                  <rect x="0" y="0" width="500" height="40" rx="20" fill="#103D27" stroke="#00C853" strokeWidth="2" />
                  <text x="250" y="25" fill="#F4FFF7" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="Cairo">
                    💡 بؤرة التركيز التقليدي: المنهج = المقررات والمعارف وحفظ التراث الثقافي
                  </text>
                </g>
              </g>
            )}

            {/* =========================================================================
                SCENE 3: «المنهج في المفهوم الحديث — منظومة الخبرات والأنشطة»
               ========================================================================= */}
            {currentScene === 3 && (
              <g className="transition-all duration-500">
                {/* Reference Planning Table at top-left: Books remain as scientific baseline */}
                <g transform="translate(80, 290)">
                  <rect x="0" y="40" width="120" height="45" rx="6" fill="#475569" stroke="#334155" strokeWidth="2" />
                  {/* Stacked Reference Books */}
                  <rect x="15" y="32" width="45" height="10" rx="2" fill="#00C853" stroke="#071C12" />
                  <rect x="18" y="22" width="42" height="10" rx="2" fill="#0284C7" stroke="#071C12" />
                  <rect x="22" y="12" width="36" height="10" rx="2" fill="#EA580C" stroke="#071C12" />
                  {/* Badge showing books didn't vanish */}
                  <rect x="-10" y="92" width="140" height="22" rx="11" fill="#103D27" stroke="#39E66D" strokeWidth="1" />
                  <text x="60" y="107" fill="#39E66D" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                    المعرفة ركن أساسي لا يلغى
                  </text>
                </g>

                {/* ACTIVITY ZONE 1: Motor Activity (Student dribbling between cones) */}
                <g
                  transform="translate(260, 310)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-motor')}
                >
                  {/* Highlight Circle on Selection */}
                  {activeExperienceId === 'exp-motor' && (
                    <circle cx="80" cy="110" r="85" fill="#00C853" opacity="0.2" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}
                  {/* Cones for Slalom Dribble */}
                  <polygon points="20,160 30,135 40,160" fill="#EA580C" />
                  <polygon points="80,160 90,135 100,160" fill="#EA580C" />
                  <polygon points="140,160 150,135 160,160" fill="#EA580C" />
                  {/* Dynamic Motion Dash Trail */}
                  <path d="M 10 145 Q 50 115 80 145 T 150 140" fill="none" stroke="#39E66D" strokeWidth="3" strokeDasharray="5 5" opacity="0.8" />
                  {/* Dribbling Student (Dynamic runner with ball) */}
                  <g transform="translate(60, 50)">
                    <ellipse cx="25" cy="95" rx="18" ry="6" fill="#071C12" opacity="0.4" />
                    {/* Athletic Striding Legs */}
                    <path d="M 18 55 L 8 85 L 2 95" stroke="#071C12" strokeWidth="7" strokeLinecap="round" />
                    <path d="M 28 55 L 42 75 L 52 82" stroke="#071C12" strokeWidth="7" strokeLinecap="round" />
                    {/* Torso */}
                    <path d="M 12 18 L 38 18 L 32 60 L 16 60 Z" fill="#00C853" rx="3" />
                    <circle cx="25" cy="8" r="10" fill="#FED7AA" />
                    {/* Ball at foot */}
                    <circle cx="56" cy="88" r="11" fill="#FFFFFF" stroke="#071C12" strokeWidth="1.5" />
                  </g>
                  {/* Label Pill */}
                  <rect x="25" y="180" width="110" height="24" rx="12" fill={activeExperienceId === 'exp-motor' ? '#00C853' : '#103D27'} stroke="#39E66D" strokeWidth="1.5" />
                  <text x="80" y="196" fill={activeExperienceId === 'exp-motor' ? '#071C12' : '#F4FFF7'} fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    ١. النشاط الحركي
                  </text>
                </g>

                {/* ACTIVITY ZONE 2: Cooperative Teamwork (Two students passing ball) */}
                <g
                  transform="translate(480, 310)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-collab')}
                >
                  {activeExperienceId === 'exp-collab' && (
                    <circle cx="90" cy="110" r="90" fill="#00C853" opacity="0.2" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}
                  {/* Two Passers with dashed pass arc */}
                  <path d="M 35 110 Q 90 70 145 110" fill="none" stroke="#00C853" strokeWidth="3" strokeDasharray="6 4" />
                  <circle cx="90" cy="85" r="9" fill="#FFFFFF" stroke="#071C12" strokeWidth="1.5" />
                  {/* Student Left */}
                  <g transform="translate(10, 50)">
                    <ellipse cx="20" cy="90" rx="16" ry="5" fill="#071C12" opacity="0.4" />
                    <rect x="14" y="55" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="24" y="55" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="10" y="18" width="22" height="40" fill="#00C853" rx="3" />
                    <circle cx="21" cy="8" r="9" fill="#FED7AA" />
                  </g>
                  {/* Student Right (Receiving stance) */}
                  <g transform="translate(140, 50)">
                    <ellipse cx="20" cy="90" rx="16" ry="5" fill="#071C12" opacity="0.4" />
                    <rect x="14" y="55" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="24" y="55" width="6" height="35" fill="#1E293B" rx="2" />
                    <rect x="10" y="18" width="22" height="40" fill="#0284C7" rx="3" />
                    <circle cx="21" cy="8" r="9" fill="#FED7AA" />
                  </g>
                  {/* Label Pill */}
                  <rect x="35" y="180" width="110" height="24" rx="12" fill={activeExperienceId === 'exp-collab' ? '#00C853' : '#103D27'} stroke="#39E66D" strokeWidth="1.5" />
                  <text x="90" y="196" fill={activeExperienceId === 'exp-collab' ? '#071C12' : '#F4FFF7'} fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    ٢. التعلم التعاوني
                  </text>
                </g>

                {/* ACTIVITY ZONE 3: Peer Observation & Analysis (Student recording tactical stats) */}
                <g
                  transform="translate(700, 320)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-analysis')}
                >
                  {activeExperienceId === 'exp-analysis' && (
                    <circle cx="65" cy="100" r="75" fill="#00C853" opacity="0.2" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}
                  {/* Student holding clipboard */}
                  <g transform="translate(45, 40)">
                    <ellipse cx="20" cy="100" rx="18" ry="6" fill="#071C12" opacity="0.4" />
                    <rect x="14" y="60" width="7" height="40" fill="#334155" rx="2" />
                    <rect x="25" y="60" width="7" height="40" fill="#334155" rx="2" />
                    <rect x="10" y="20" width="24" height="42" fill="#059669" rx="3" />
                    <circle cx="22" cy="9" r="10" fill="#FED7AA" />
                    {/* Clipboard in hand */}
                    <rect x="26" y="28" width="18" height="24" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
                    <line x1="30" y1="35" x2="40" y2="35" stroke="#00C853" strokeWidth="1.5" />
                    <line x1="30" y1="40" x2="38" y2="40" stroke="#0F172A" strokeWidth="1" />
                    <line x1="30" y1="45" x2="39" y2="45" stroke="#0F172A" strokeWidth="1" />
                  </g>
                  {/* Label Pill */}
                  <rect x="10" y="170" width="110" height="24" rx="12" fill={activeExperienceId === 'exp-analysis' ? '#00C853' : '#103D27'} stroke="#39E66D" strokeWidth="1.5" />
                  <text x="65" y="186" fill={activeExperienceId === 'exp-analysis' ? '#071C12' : '#F4FFF7'} fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    ٣. الملاحظة والتحليل
                  </text>
                </g>

                {/* ACTIVITY ZONE 4: Teacher Guiding and Facilitating (Active guiding stance) */}
                <g
                  transform="translate(850, 310)"
                  className="cursor-pointer group"
                  onClick={() => setActiveExperienceId('exp-guidance')}
                >
                  {activeExperienceId === 'exp-guidance' && (
                    <circle cx="50" cy="110" r="75" fill="#00C853" opacity="0.2" stroke="#39E66D" strokeWidth="3" strokeDasharray="6 4" filter={`url(#${idPrefix}-glow)`} />
                  )}
                  {/* Teacher with hands coaching gesture */}
                  <g transform="translate(15, 30)">
                    <ellipse cx="35" cy="120" rx="24" ry="7" fill="#071C12" opacity="0.4" />
                    <rect x="24" y="70" width="9" height="50" fill="#071C12" rx="3" />
                    <rect x="37" y="70" width="9" height="50" fill="#071C12" rx="3" />
                    <path d="M 18 25 L 52 25 L 48 72 L 22 72 Z" fill="#103D27" stroke="#00C853" strokeWidth="1.5" />
                    <circle cx="35" cy="12" r="12" fill="#FBCFE8" />
                    {/* Whistle in hand / encouragement gesture */}
                    <path d="M 18 30 L 2 50 L 12 58" stroke="#103D27" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="12" cy="58" r="4" fill="#F59E0B" />
                  </g>
                  {/* Label Pill */}
                  <rect x="-5" y="180" width="110" height="24" rx="12" fill={activeExperienceId === 'exp-guidance' ? '#00C853' : '#103D27'} stroke="#39E66D" strokeWidth="1.5" />
                  <text x="50" y="196" fill={activeExperienceId === 'exp-guidance' ? '#071C12' : '#F4FFF7'} fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    ٤. توجيه المعلم
                  </text>
                </g>

                {/* Banner Header: Modern Curriculum Definition */}
                <g transform="translate(200, 180)">
                  <rect x="0" y="0" width="600" height="44" rx="22" fill="#103D27" stroke="#00C853" strokeWidth="2.5" />
                  <text x="300" y="27" fill="#39E66D" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                    🌟 المنهج الحديث = جميع الخبرات التي يكتسبها المتعلم تحت إشراف وتوجيه المدرسة
                  </text>
                </g>
              </g>
            )}
          </svg>
        </div>

        {/* 3. Interactive Detail HUD & Scene Explanation */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Right/Main Card: Pedagogical Detail & Student Interaction */}
          <div className="lg:col-span-8 bg-[#0B2519] border border-[#143D27] rounded-2xl p-4 sm:p-5">
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

            <p className="text-sm text-[#D4E9DC]/90 leading-relaxed mb-4">
              {activeSceneInfo.summary}
            </p>

            {/* Interactive Callout according to active scene */}
            {currentScene === 1 && (
              <div className="bg-[#142B20] rounded-xl p-3.5 border border-[#103D27] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#D4E9DC]">
                  <Compass className="w-4 h-4 text-[#39E66D] shrink-0" />
                  <span>انقر على زر <strong>«ابدأ الاستكشاف»</strong> داخل الملعب أو زر المشهد التالي للانتقال للمفهوم التقليدي.</span>
                </div>
                <button
                  type="button"
                  onClick={handleStartExploration}
                  className="px-4 py-2 rounded-xl bg-[#00C853] hover:bg-[#39E66D] text-[#071C12] font-black text-xs shrink-0 transition-colors cursor-pointer"
                >
                  بدء الاستكشاف ⬅
                </button>
              </div>
            )}

            {currentScene === 2 && (
              <div className="bg-[#142B20] rounded-xl p-3.5 border border-[#00C853]/30 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#39E66D] flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    المقرر المفحوص: {activeSubject.name}
                  </span>
                  <span className="text-[10px] font-bold text-[#F4FFF7] bg-[#071C12] px-2 py-0.5 rounded border border-[#103D27]">
                    {activeSubject.code}
                  </span>
                </div>
                <p className="text-xs text-[#D4E9DC] leading-relaxed">
                  {activeSubject.explanation}
                </p>
                <div className="text-[11px] text-[#39E66D]/80 font-mono pt-1">
                  المرجع الأكاديمي: {activeSubject.quotePage}
                </div>
              </div>
            )}

            {currentScene === 3 && (
              <div className="bg-[#142B20] rounded-xl p-3.5 border border-[#00C853]/30 space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#39E66D] flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#00C853]" />
                    الخبرة المحددة: {activeExperience.title}
                  </span>
                  <span className="text-[10px] font-bold text-[#071C12] bg-[#00C853] px-2 py-0.5 rounded">
                    {activeExperience.category}
                  </span>
                </div>
                <p className="text-xs text-[#D4E9DC] leading-relaxed">
                  {activeExperience.description}
                </p>
                <div className="text-[11px] text-[#39E66D]/90 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853]" />
                  <span>دور المتعلم: {activeExperience.studentRole} ({activeExperience.quotePage})</span>
                </div>
              </div>
            )}
          </div>

          {/* Left Card: Pedagogical Synthesis & Fast Switcher */}
          <div className="lg:col-span-4 bg-[#0B2519] border border-[#143D27] rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-black text-[#39E66D] uppercase tracking-wider block">
                الخلاصة التعليمية المستهدفة
              </span>
              <div className="p-3 bg-[#071C12] rounded-xl border border-[#143D27] text-xs text-[#D4E9DC] leading-relaxed">
                {currentScene === 1 && (
                  <p>
                    «المنهج ليس مجرد عنوان كتاب أو مقرر جامد؛ بل هو الأداة التربوية الأساسية التي رسمت مساراتها لجان الخبراء لتحقيق أهداف المجتمع وغاياته.»
                  </p>
                )}
                {currentScene === 2 && (
                  <p>
                    «المفهوم التقليدي يعتز بالمعرفة ويضعها في المركز، والمعلم ناقل للمعلومة؛ ونحن لا نسخر منه بل نفهم كيف تطورت التربية انطلاقاً منه.»
                  </p>
                )}
                {currentScene === 3 && (
                  <p>
                    «المنهج الحديث لا يلغي المعرفة أو المقررات، بل يدمجها في منظومة خبرات ميدانية حية ترعى نمو الطالب البدني، والمهاري، والنفسي، والاجتماعي.»
                  </p>
                )}
              </div>
            </div>

            {/* Quick Scene Steps Footer */}
            <div className="pt-3 border-t border-[#143D27] flex items-center justify-between text-xs">
              <span className="text-[#D4E9DC]/70">تغيير المشهد:</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setCurrentScene(num);
                      setIsPlaying(false);
                    }}
                    className={`w-7 h-7 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      currentScene === num
                        ? 'bg-[#00C853] text-[#071C12]'
                        : 'bg-[#142B20] text-[#D4E9DC] hover:bg-[#103D27]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 4. Player Controls Toolbar */}
      <div className="bg-[#0B2519] border-t border-[#143D27] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
        {/* Play / Reset buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleResetScene}
            className="p-2.5 rounded-xl border border-[#143D27] bg-[#071C12] hover:bg-[#142B20] text-[#D4E9DC] transition-colors cursor-pointer"
            title="إعادة الرحلة من المشهد الأول"
            aria-label="إعادة البداية"
          >
            <RotateCcw className="w-4 h-4 text-[#00C853]" />
          </button>

          <button
            type="button"
            onClick={handlePrevScene}
            disabled={currentScene === 1}
            className="p-2.5 rounded-xl border border-[#143D27] bg-[#071C12] hover:bg-[#142B20] text-[#D4E9DC] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="المشهد السابق"
            aria-label="المشهد السابق"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            className="px-5 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-[#00C853]/20 cursor-pointer"
            aria-label={isPlaying ? 'إيقاف العرض التلقائي' : 'تشغيل العرض التلقائي'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>إيقاف مؤقت</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>عرض تلقائي</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleNextScene}
            disabled={currentScene === 3}
            className="p-2.5 rounded-xl border border-[#143D27] bg-[#071C12] hover:bg-[#142B20] text-[#D4E9DC] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            title="المشهد التالي"
            aria-label="المشهد التالي"
          >
            <SkipBack className="w-4 h-4" />
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
              <span>التوثيق الأكاديمي المعتمد من كتاب مناهج التربية الرياضية</span>
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
                <li>&bull; <strong>الفصل والصفحات:</strong> الفصل الأول: مقدمة وماهية المنهج (ص 2 - 5).</li>
              </ul>
            </div>

            <div className="bg-[#0B2519] p-4 rounded-2xl border border-[#143D27] space-y-2">
              <span className="font-black text-[#F4FFF7] block text-sm">
                المفاهيم والضوابط العلمية المنفذة:
              </span>
              <ul className="space-y-1.5 text-xs text-[#D4E9DC]/80">
                <li>&bull; <strong>المفهوم التقليدي (ص 5):</strong> المنهج كمقررات ومحتوى معرفي لحفظ التراث الثقافي والاجتماعي.</li>
                <li>&bull; <strong>المفهوم الحديث (ص 2، 5):</strong> جميع الخبرات والأنشطة الموجهة لبناء الشخصية المتكاملة في الأبعاد: البدنية، والمهارية، والصحية، والنفسية، والاجتماعية.</li>
                <li>&bull; <strong>دور المعلم (ص 3):</strong> التحول من ناقل وملقن إلى موجه ومرشد للتعلم الذاتي.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
};
