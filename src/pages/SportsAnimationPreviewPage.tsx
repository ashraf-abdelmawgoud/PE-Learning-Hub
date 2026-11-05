/**
 * SportsAnimationPreviewPage.tsx
 * Isolated Development-Only Animation Preview: 10 Animated Sports Balls
 *
 * Route: /sports-animation-preview
 *
 * Composition: Exactly 10 Sports Balls
 * - 3 Soccer balls (كرة قدم)
 * - 2 Basketballs (كرة سلة)
 * - 2 Volleyballs (كرة طائرة)
 * - 2 Tennis balls (كرة مضرب / تنس)
 * - 1 Handball (كرة يد)
 *
 * Speed Groups:
 * - Slow Group (5 balls): 14s – 22s cycles
 * - Moderately Fast Group (5 balls): 7s – 12s cycles
 *
 * Controls:
 * - Play / Pause (تشغيل / إيقاف مؤقت)
 * - Motion Speed (بطيء / متوازن / أسرع)
 * - Glow (توهج ناعم: مفعل / معطل)
 * - Reset (إعادة الضبط للإعدادات الافتراضية)
 * - Stage Viewport Mode (معاينة سطح المكتب / محاكاة الجوال 375px)
 *
 * Production Isolation: Excluded from production bundle via import.meta.env.DEV DCE.
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Gauge,
  Smartphone,
  Monitor,
  ArrowRight,
  Activity,
  CheckCircle2,
  Info,
  ShieldCheck,
} from 'lucide-react';

/* =========================================================================
   1. HIGH-PRECISION ATHLETIC VECTOR BALL ILLUSTRATIONS (SVGs)
   ========================================================================= */

// 1. Soccer Ball SVG (كرة قدم - تصميم كلاسيكي مع تدرج كروي ثلاثي الأبعاد)
const SoccerBallSvg: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="select-none pointer-events-none drop-shadow-md"
  >
    <defs>
      <radialGradient id="soccerSphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="55%" stopColor="#E2E8F0" />
        <stop offset="85%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#475569" />
      </radialGradient>
      <radialGradient id="soccerShine" cx="30%" cy="25%" r="45%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Base Sphere */}
    <circle cx="50" cy="50" r="48" fill="url(#soccerSphere)" stroke="#1E293B" strokeWidth="2.5" />
    
    {/* Center Black Pentagon */}
    <polygon points="50,32 66,44 60,63 40,63 34,44" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
    
    {/* Connecting Seam Lines from Center Pentagon */}
    <line x1="50" y1="32" x2="50" y2="12" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <line x1="66" y1="44" x2="84" y2="38" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <line x1="60" y1="63" x2="74" y2="80" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <line x1="40" y1="63" x2="26" y2="80" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="44" x2="16" y2="38" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

    {/* Outer Edge Patches */}
    {/* Top Patch */}
    <polygon points="40,2 60,2 50,12" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
    {/* Top Right Patch */}
    <polygon points="84,38 98,34 94,54" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
    {/* Bottom Right Patch */}
    <polygon points="74,80 88,88 68,98" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
    {/* Bottom Left Patch */}
    <polygon points="26,80 12,88 32,98" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
    {/* Top Left Patch */}
    <polygon points="16,38 2,34 6,54" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />

    {/* Specular 3D Highlight */}
    <ellipse cx="38" cy="30" rx="20" ry="14" fill="url(#soccerShine)" />
  </svg>
);

// 2. Basketball SVG (كرة سلة - برتقالي محروق مع حواف مضلعة وحبيبات رياضية)
const BasketballSvg: React.FC<{ size?: number }> = ({ size = 52 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="select-none pointer-events-none drop-shadow-md"
  >
    <defs>
      <radialGradient id="bballSphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FB923C" />
        <stop offset="50%" stopColor="#EA580C" />
        <stop offset="85%" stopColor="#C2410C" />
        <stop offset="100%" stopColor="#7C2D12" />
      </radialGradient>
      <radialGradient id="bballShine" cx="32%" cy="28%" r="40%">
        <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#FED7AA" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Base Sphere */}
    <circle cx="50" cy="50" r="48" fill="url(#bballSphere)" stroke="#431407" strokeWidth="2.5" />

    {/* Seam Lines */}
    <line x1="2" y1="50" x2="98" y2="50" stroke="#1C0A04" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="50" y1="2" x2="50" y2="98" stroke="#1C0A04" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M 20 6 C 42 32, 42 68, 20 94" fill="none" stroke="#1C0A04" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M 80 6 C 58 32, 58 68, 80 94" fill="none" stroke="#1C0A04" strokeWidth="3.2" strokeLinecap="round" />

    {/* 3D Curved Shadow Contour */}
    <path d="M 2 50 A 48 48 0 0 0 98 50" fill="none" stroke="#7C2D12" strokeWidth="2" opacity="0.4" />
    
    {/* Specular Highlight */}
    <ellipse cx="36" cy="30" rx="18" ry="12" fill="url(#bballShine)" />
  </svg>
);

// 3. Volleyball SVG (كرة طائرة - أزرق وأصفر وأبيض بنظام الشرائح الدائرية FIVB)
const VolleyballSvg: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="select-none pointer-events-none drop-shadow-md"
  >
    <defs>
      <radialGradient id="vballShine" cx="35%" cy="30%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
      <clipPath id="vballClip">
        <circle cx="50" cy="50" r="48" />
      </clipPath>
    </defs>
    
    {/* Base Sphere Clipped */}
    <g clipPath="url(#vballClip)">
      <circle cx="50" cy="50" r="48" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" />

      {/* Top Sector - Blue & Yellow Panels */}
      <path d="M 50 50 L 50 2 A 48 48 0 0 1 92 26 Z" fill="#1E40AF" stroke="#0F172A" strokeWidth="2" />
      <path d="M 50 50 L 92 26 A 48 48 0 0 1 98 50 Z" fill="#EAB308" stroke="#0F172A" strokeWidth="2" />

      {/* Bottom Sector - Yellow & Blue Panels */}
      <path d="M 50 50 L 98 50 A 48 48 0 0 1 74 92 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
      <path d="M 50 50 L 74 92 A 48 48 0 0 1 26 92 Z" fill="#1E40AF" stroke="#0F172A" strokeWidth="2" />
      <path d="M 50 50 L 26 92 A 48 48 0 0 1 2 50 Z" fill="#EAB308" stroke="#0F172A" strokeWidth="2" />

      {/* Left Sector - White & Blue Panels */}
      <path d="M 50 50 L 2 50 A 48 48 0 0 1 8 26 Z" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
      <path d="M 50 50 L 8 26 A 48 48 0 0 1 50 2 Z" fill="#1E40AF" stroke="#0F172A" strokeWidth="2" />

      {/* Subtle Curving Swirl Overlays */}
      <path d="M 25 15 C 45 35, 55 65, 75 85" fill="none" stroke="#0F172A" strokeWidth="2.5" />
      <path d="M 75 15 C 55 35, 45 65, 25 85" fill="none" stroke="#0F172A" strokeWidth="2.5" />

      {/* Depth shading */}
      <circle cx="50" cy="50" r="48" fill="url(#vballShine)" />
    </g>
    
    <circle cx="50" cy="50" r="48" fill="none" stroke="#0F172A" strokeWidth="2.5" />
  </svg>
);

// 4. Tennis Ball SVG (كرة مضرب - أصفر مخضر فسفوري مع انحناءات التنس البيضاء)
const TennisBallSvg: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="select-none pointer-events-none drop-shadow-md"
  >
    <defs>
      <radialGradient id="tennisSphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#D9F99D" />
        <stop offset="45%" stopColor="#BEF264" />
        <stop offset="80%" stopColor="#84CC16" />
        <stop offset="100%" stopColor="#4D7C0F" />
      </radialGradient>
      <radialGradient id="tennisShine" cx="30%" cy="25%" r="45%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Base Sphere */}
    <circle cx="50" cy="50" r="48" fill="url(#tennisSphere)" stroke="#365314" strokeWidth="2" />

    {/* Hyperbolic White Seams */}
    <path
      d="M 18 10 C 44 32, 44 68, 18 90"
      fill="none"
      stroke="#F8FAFC"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.95"
    />
    <path
      d="M 82 10 C 56 32, 56 68, 82 90"
      fill="none"
      stroke="#F8FAFC"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.95"
    />

    {/* Inner Seam Shadow */}
    <path d="M 17 11 C 42 32, 42 68, 17 89" fill="none" stroke="#365314" strokeWidth="1.2" opacity="0.4" />
    <path d="M 83 11 C 58 32, 58 68, 83 89" fill="none" stroke="#365314" strokeWidth="1.2" opacity="0.4" />

    {/* Specular Highlight */}
    <ellipse cx="36" cy="28" rx="16" ry="10" fill="url(#tennisShine)" />
  </svg>
);

// 5. Handball SVG (كرة يد - فيروزي وذهبي بتصميم قبضة الراتينج الرياضية الماسية)
const HandballSvg: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="select-none pointer-events-none drop-shadow-md"
  >
    <defs>
      <radialGradient id="hballSphere" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#0284C7" />
        <stop offset="85%" stopColor="#0369A1" />
        <stop offset="100%" stopColor="#075985" />
      </radialGradient>
      <radialGradient id="hballShine" cx="30%" cy="25%" r="45%">
        <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Base Sphere */}
    <circle cx="50" cy="50" r="48" fill="url(#hballSphere)" stroke="#0C4A6E" strokeWidth="2.5" />

    {/* Amber Gold Contrast Grip Panels */}
    <polygon points="50,28 64,40 58,58 42,58 36,40" fill="#F59E0B" stroke="#0C4A6E" strokeWidth="1.5" />
    <polygon points="50,8 64,16 58,28 42,28 36,16" fill="#FBBF24" stroke="#0C4A6E" strokeWidth="1.5" />
    <polygon points="76,34 90,42 84,60 70,54 64,40" fill="#FBBF24" stroke="#0C4A6E" strokeWidth="1.5" />
    <polygon points="24,34 36,40 30,54 16,60 10,42" fill="#FBBF24" stroke="#0C4A6E" strokeWidth="1.5" />
    <polygon points="58,58 70,54 74,72 58,78 50,72" fill="#F59E0B" stroke="#0C4A6E" strokeWidth="1.5" />
    <polygon points="42,58 50,72 42,78 26,72 30,54" fill="#F59E0B" stroke="#0C4A6E" strokeWidth="1.5" />

    {/* Stitch and Seam Lines */}
    <line x1="50" y1="2" x2="50" y2="8" stroke="#0C4A6E" strokeWidth="2" />
    <line x1="50" y1="78" x2="50" y2="98" stroke="#0C4A6E" strokeWidth="2" />

    {/* Specular Highlight */}
    <ellipse cx="36" cy="28" rx="18" ry="12" fill="url(#hballShine)" />
  </svg>
);

/* =========================================================================
   2. CONFIGURATION DATA: EXACTLY 10 BALLS & 2 SPEED GROUPS
   ========================================================================= */

interface BallItem {
  id: string;
  nameAr: string;
  nameEn: string;
  speedGroup: 'slow' | 'fast';
  baseDuration: number; // In seconds
  size: number;
  initialLeft: number; // In percentage
  initialTop: number;  // In percentage
  animClass: string;
  glowDelay: string;
  Component: React.FC<{ size?: number }>;
}

const BALLS_CONFIG: BallItem[] = [
  // --- المجموعة البطيئة (Slow Group: 14s – 22s) ---
  {
    id: 'ball-1-soccer-a',
    nameAr: 'كرة قدم (أ)',
    nameEn: 'Soccer Ball A',
    speedGroup: 'slow',
    baseDuration: 18,
    size: 52,
    initialLeft: 12,
    initialTop: 18,
    animClass: 'anim-ball-path-1',
    glowDelay: '0s',
    Component: SoccerBallSvg,
  },
  {
    id: 'ball-2-basketball-a',
    nameAr: 'كرة سلة (أ)',
    nameEn: 'Basketball A',
    speedGroup: 'slow',
    baseDuration: 20,
    size: 58,
    initialLeft: 74,
    initialTop: 20,
    animClass: 'anim-ball-path-2',
    glowDelay: '-2s',
    Component: BasketballSvg,
  },
  {
    id: 'ball-3-volleyball-a',
    nameAr: 'كرة طائرة (أ)',
    nameEn: 'Volleyball A',
    speedGroup: 'slow',
    baseDuration: 16,
    size: 48,
    initialLeft: 42,
    initialTop: 26,
    animClass: 'anim-ball-path-3',
    glowDelay: '-4s',
    Component: VolleyballSvg,
  },
  {
    id: 'ball-4-tennis-a',
    nameAr: 'كرة مضرب (أ)',
    nameEn: 'Tennis Ball A',
    speedGroup: 'slow',
    baseDuration: 15,
    size: 40,
    initialLeft: 82,
    initialTop: 62,
    animClass: 'anim-ball-path-4',
    glowDelay: '-1.5s',
    Component: TennisBallSvg,
  },
  {
    id: 'ball-5-handball',
    nameAr: 'كرة يد',
    nameEn: 'Handball',
    speedGroup: 'slow',
    baseDuration: 21,
    size: 50,
    initialLeft: 18,
    initialTop: 66,
    animClass: 'anim-ball-path-5',
    glowDelay: '-3.5s',
    Component: HandballSvg,
  },

  // --- المجموعة السريعة المعتدلة (Moderately Fast Group: 7s – 12s) ---
  {
    id: 'ball-6-soccer-b',
    nameAr: 'كرة قدم (ب)',
    nameEn: 'Soccer Ball B',
    speedGroup: 'fast',
    baseDuration: 9,
    size: 46,
    initialLeft: 56,
    initialTop: 48,
    animClass: 'anim-ball-path-6',
    glowDelay: '-1s',
    Component: SoccerBallSvg,
  },
  {
    id: 'ball-7-basketball-b',
    nameAr: 'كرة سلة (ب)',
    nameEn: 'Basketball B',
    speedGroup: 'fast',
    baseDuration: 10,
    size: 50,
    initialLeft: 30,
    initialTop: 46,
    animClass: 'anim-ball-path-7',
    glowDelay: '-2.5s',
    Component: BasketballSvg,
  },
  {
    id: 'ball-8-volleyball-b',
    nameAr: 'كرة طائرة (ب)',
    nameEn: 'Volleyball B',
    speedGroup: 'fast',
    baseDuration: 8.5,
    size: 44,
    initialLeft: 64,
    initialTop: 68,
    animClass: 'anim-ball-path-8',
    glowDelay: '-0.8s',
    Component: VolleyballSvg,
  },
  {
    id: 'ball-9-tennis-b',
    nameAr: 'كرة مضرب (ب)',
    nameEn: 'Tennis Ball B',
    speedGroup: 'fast',
    baseDuration: 7.5,
    size: 38,
    initialLeft: 16,
    initialTop: 40,
    animClass: 'anim-ball-path-9',
    glowDelay: '-3s',
    Component: TennisBallSvg,
  },
  {
    id: 'ball-10-soccer-c',
    nameAr: 'كرة قدم (ج)',
    nameEn: 'Soccer Ball C',
    speedGroup: 'fast',
    baseDuration: 11,
    size: 44,
    initialLeft: 84,
    initialTop: 36,
    animClass: 'anim-ball-path-10',
    glowDelay: '-1.8s',
    Component: SoccerBallSvg,
  },
];

/* =========================================================================
   3. MAIN COMPONENT: SPORTS ANIMATION PREVIEW PAGE
   ========================================================================= */

export const SportsAnimationPreviewPage: React.FC = () => {
  // 1. Play / Pause State (Default: true so the preview is immediately active)
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // 2. Motion Speed Multiplier (Default: 'balanced' = 1.0x)
  // 'slow' = 1.6x duration (slower), 'balanced' = 1.0x, 'fast' = 0.65x duration (faster)
  const [speedMode, setSpeedMode] = useState<'slow' | 'balanced' | 'fast'>('balanced');

  // 3. Glow Toggle (Default: true)
  const [isGlowEnabled, setIsGlowEnabled] = useState<boolean>(true);

  // 4. Viewport Mode (Desktop Stage vs Mobile 375px frame)
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');

  // 5. Tooltip / Inspect Info Tag Toggle
  const [showInfoBadges, setShowInfoBadges] = useState<boolean>(false);

  // 6. Reduced Motion Detection Notice (Informative only, does not freeze controls)
  const [hasReducedMotionPreference, setHasReducedMotionPreference] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Motion preference change listener
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handler = (e: MediaQueryListEvent) => {
      setHasReducedMotionPreference(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Compute speed factor
  const speedFactor = speedMode === 'slow' ? 1.6 : speedMode === 'fast' ? 0.65 : 1.0;

  // Reset to original settings
  const handleReset = () => {
    setIsPlaying(true);
    setSpeedMode('balanced');
    setIsGlowEnabled(true);
    setViewportMode('desktop');
    setShowInfoBadges(false);
  };

  return (
    <div className="min-h-screen bg-[#071C12] text-[#F4FFF7] font-sans selection:bg-[#00C853] selection:text-[#071C12] pb-16" dir="rtl">
      
      {/* Dynamic Keyframes & Motion Styles Isolated within Preview Component */}
      <style>{`
        /* 1. Trajectory 1: Slow Soccer Ball A - Gentle diagonal arc */
        @keyframes ballTrajectory1 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          30% { transform: translate3d(55px, 35px, 0) rotate(18deg); }
          60% { transform: translate3d(95px, 10px, 0) rotate(32deg); }
          85% { transform: translate3d(35px, -15px, 0) rotate(12deg); }
        }

        /* 2. Trajectory 2: Slow Basketball A - Smooth elliptical orbit */
        @keyframes ballTrajectory2 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          25% { transform: translate3d(-45px, 35px, 0) rotate(-16deg); }
          50% { transform: translate3d(-80px, 75px, 0) rotate(-32deg); }
          75% { transform: translate3d(-20px, 50px, 0) rotate(-14deg); }
        }

        /* 3. Trajectory 3: Slow Volleyball A - Horizontal sine wave */
        @keyframes ballTrajectory3 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          33% { transform: translate3d(60px, -25px, 0) rotate(18deg); }
          66% { transform: translate3d(-50px, 30px, 0) rotate(-14deg); }
        }

        /* 4. Trajectory 4: Slow Tennis Ball A - Soft ascending arc */
        @keyframes ballTrajectory4 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          40% { transform: translate3d(-60px, -50px, 0) rotate(22deg); }
          70% { transform: translate3d(-95px, -15px, 0) rotate(42deg); }
        }

        /* 5. Trajectory 5: Slow Handball - Wide athletic loop */
        @keyframes ballTrajectory5 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          30% { transform: translate3d(70px, -40px, 0) rotate(-18deg); }
          60% { transform: translate3d(105px, 15px, 0) rotate(-35deg); }
          85% { transform: translate3d(25px, 30px, 0) rotate(-12deg); }
        }

        /* 6. Trajectory 6: Fast Soccer Ball B - Dynamic diagonal cross-drift */
        @keyframes ballTrajectory6 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          30% { transform: translate3d(-65px, -35px, 0) rotate(-28deg); }
          65% { transform: translate3d(55px, 45px, 0) rotate(22deg); }
        }

        /* 7. Trajectory 7: Fast Basketball B - Energetic curved rise */
        @keyframes ballTrajectory7 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          35% { transform: translate3d(75px, -60px, 0) rotate(30deg); }
          70% { transform: translate3d(-35px, -35px, 0) rotate(-18deg); }
        }

        /* 8. Trajectory 8: Fast Volleyball B - Rhythmic lateral sweep */
        @keyframes ballTrajectory8 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          40% { transform: translate3d(-70px, 25px, 0) rotate(-22deg); }
          75% { transform: translate3d(35px, -30px, 0) rotate(18deg); }
        }

        /* 9. Trajectory 9: Fast Tennis Ball B - Quick lively figure-arc */
        @keyframes ballTrajectory9 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          30% { transform: translate3d(50px, -45px, 0) rotate(35deg); }
          65% { transform: translate3d(80px, 20px, 0) rotate(60deg); }
        }

        /* 10. Trajectory 10: Fast Soccer Ball C - Sweeping flank curve */
        @keyframes ballTrajectory10 {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          35% { transform: translate3d(-55px, 50px, 0) rotate(-30deg); }
          70% { transform: translate3d(-80px, -25px, 0) rotate(-55deg); }
        }

        /* Subtle Soft Halo & Shimmer Glow */
        @keyframes ballHaloPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(50, 217, 120, 0.40)) drop-shadow(0 0 16px rgba(0, 200, 83, 0.20));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(50, 217, 120, 0.65)) drop-shadow(0 0 28px rgba(0, 200, 83, 0.35));
          }
        }

        .anim-ball-path-1 { animation-name: ballTrajectory1; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-2 { animation-name: ballTrajectory2; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-3 { animation-name: ballTrajectory3; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-4 { animation-name: ballTrajectory4; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-5 { animation-name: ballTrajectory5; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-6 { animation-name: ballTrajectory6; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-7 { animation-name: ballTrajectory7; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-8 { animation-name: ballTrajectory8; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-9 { animation-name: ballTrajectory9; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }
        .anim-ball-path-10 { animation-name: ballTrajectory10; animation-timing-function: ease-in-out; animation-iteration-count: infinite; will-change: transform; }

        .ball-glow-active {
          animation: ballHaloPulse 4s ease-in-out infinite;
          display: inline-block;
          will-change: filter;
        }
      `}</style>

      {/* Header Bar */}
      <header className="border-b border-[#00C853]/20 bg-[#0B2519]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#32D978] hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-[#071C12]/60 border border-[#00C853]/30"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للمنصة</span>
            </Link>
            <div className="h-4 w-px bg-[#00C853]/20 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#00C853]/15 text-[#32D978] border border-[#00C853]/30">
              <ShieldCheck className="w-3.5 h-3.5 text-[#32D978]" />
              <span>معمل تجريبي معزول (Development Only)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#A7F3D0]">
            <span className="inline-flex items-center gap-1 font-mono px-2 py-0.5 rounded bg-[#071C12] border border-[#00C853]/20">
              10 كرات رياضية
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[#D4E9DC]/70">5 بطيئة + 5 سريعة معتدلة</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6">
        
        {/* Title & Introduction Card */}
        <section className="bg-gradient-to-r from-[#0B2519] via-[#0E3322] to-[#0B2519] border border-[#00C853]/25 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#00C853]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-[#39E66D] text-xs sm:text-sm font-black tracking-wider uppercase">
                <Activity className="w-4 h-4" />
                <span>مختبر الحركة البصرية — Sports Balls Motion Prototype</span>
              </div>
              <span className="text-xs font-mono text-[#32D978] bg-[#071C12]/80 px-2.5 py-1 rounded-md border border-[#32D978]/30">
                /sports-animation-preview
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              معاينة حركية تجريبية لـ 10 كرات رياضية
            </h1>
            
            <p className="text-sm sm:text-base text-[#D4E9DC]/90 max-w-3xl leading-relaxed">
              نموذج بصري تفاعلي معزول تماماً عن الصفحة الرئيسية لاختبار سلاسة الحركة، والسرعات المتفاوتة (مجموعة بطيئة 14–22 ثانية ومجموعة سريعة معتدلة 7–12 ثانية)، والهالة التوهجية الناعمة، قبل اتخاذ أي قرار بشأن دمجها في واجهة المنصة.
            </p>
          </div>
        </section>

        {/* =========================================================================
            4. INTERACTIVE CONTROLS BAR
            ========================================================================= */}
        <section
          aria-label="لوحة التحكم في الحركة"
          className="bg-[#0B2519] border border-[#00C853]/30 rounded-2xl p-4 sm:p-5 shadow-lg space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Control 1: Play / Pause */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer shadow-md ${
                  isPlaying
                    ? 'bg-[#00C853] hover:bg-[#39E66D] text-[#071C12] shadow-[#00C853]/25'
                    : 'bg-[#F59E0B] hover:bg-[#FBBF24] text-[#071C12] shadow-[#F59E0B]/25'
                }`}
                aria-pressed={isPlaying}
                aria-label={isPlaying ? 'إيقاف حركة الكرات مؤقتاً' : 'استئناف حركة الكرات'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'إيقاف مؤقت' : 'تشغيل الحركة'}</span>
              </button>

              {/* Status pill */}
              <span className="text-xs px-2.5 py-1 rounded-lg bg-[#071C12] border border-[#00C853]/20 text-[#D4E9DC] font-mono hidden sm:inline">
                {isPlaying ? 'الحركة: قيد التشغيل' : 'الحركة: متوقفة'}
              </span>
              {hasReducedMotionPreference && (
                <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono hidden md:inline">
                  (تفضيل تقليل الحركة بالنظام: تم تجاوزه للمعاينة)
                </span>
              )}
            </div>

            {/* Control 2: Motion Speed Segmented Selector */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-[#D4E9DC] flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-[#32D978]" />
                <span>السرعة:</span>
              </span>

              <div className="inline-flex p-1 bg-[#071C12] border border-[#00C853]/25 rounded-xl" role="group" aria-label="اختيار سرعة الحركة">
                <button
                  type="button"
                  onClick={() => setSpeedMode('slow')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    speedMode === 'slow'
                      ? 'bg-[#00C853] text-[#071C12] shadow-sm'
                      : 'text-[#D4E9DC]/75 hover:text-white'
                  }`}
                  aria-pressed={speedMode === 'slow'}
                >
                  بطيء
                </button>
                <button
                  type="button"
                  onClick={() => setSpeedMode('balanced')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    speedMode === 'balanced'
                      ? 'bg-[#00C853] text-[#071C12] shadow-sm'
                      : 'text-[#D4E9DC]/75 hover:text-white'
                  }`}
                  aria-pressed={speedMode === 'balanced'}
                >
                  متوازن (افتراضي)
                </button>
                <button
                  type="button"
                  onClick={() => setSpeedMode('fast')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    speedMode === 'fast'
                      ? 'bg-[#00C853] text-[#071C12] shadow-sm'
                      : 'text-[#D4E9DC]/75 hover:text-white'
                  }`}
                  aria-pressed={speedMode === 'fast'}
                >
                  أسرع
                </button>
              </div>
            </div>

            {/* Control 3: Soft Glow Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsGlowEnabled(!isGlowEnabled)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                  isGlowEnabled
                    ? 'bg-[#00C853]/20 border-[#00C853] text-[#32D978]'
                    : 'bg-[#071C12] border-white/10 text-white/60 hover:text-white'
                }`}
                aria-pressed={isGlowEnabled}
                aria-label={isGlowEnabled ? 'تعطيل توهج الكرات' : 'تفعيل توهج الكرات'}
              >
                <Sparkles className="w-4 h-4 text-[#39E66D]" />
                <span>التوهج: {isGlowEnabled ? 'مفعل' : 'معطل'}</span>
              </button>
            </div>

            {/* Control 4: Stage Mode Switcher (Desktop vs Mobile 375px) */}
            <div className="flex items-center gap-2">
              <div className="inline-flex p-1 bg-[#071C12] border border-[#00C853]/25 rounded-xl" role="group" aria-label="محاكاة حجم العرض">
                <button
                  type="button"
                  onClick={() => setViewportMode('desktop')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewportMode === 'desktop'
                      ? 'bg-[#00C853] text-[#071C12]'
                      : 'text-[#D4E9DC]/75 hover:text-white'
                  }`}
                  aria-pressed={viewportMode === 'desktop'}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>مكتبي</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewportMode('mobile')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewportMode === 'mobile'
                      ? 'bg-[#00C853] text-[#071C12]'
                      : 'text-[#D4E9DC]/75 hover:text-white'
                  }`}
                  aria-pressed={viewportMode === 'mobile'}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>جوال (375px)</span>
                </button>
              </div>

              {/* Control 5: Reset Button */}
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#D4E9DC]/80 hover:text-white bg-[#071C12] border border-[#00C853]/20 hover:border-[#00C853]/50 transition-colors cursor-pointer"
                title="إعادة ضبط كافة الإعدادات إلى الوضع الافتراضي"
                aria-label="إعادة ضبط عناصر التحكم"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">إعادة ضبط</span>
              </button>
            </div>

          </div>

          {/* Sub-bar: Information and Details */}
          <div className="pt-2 border-t border-[#00C853]/15 flex flex-wrap items-center justify-between text-xs text-[#D4E9DC]/70 gap-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#32D978]" />
                <span>5 كرات بطيئة (14–22 ث)</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span>5 كرات سريعة معتدلة (7–12 ث)</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowInfoBadges(!showInfoBadges)}
              className="text-xs text-[#39E66D] hover:underline cursor-pointer flex items-center gap-1"
            >
              <Info className="w-3.5 h-3.5" />
              <span>{showInfoBadges ? 'إخفاء مسميات الكرات' : 'إظهار مسميات الكرات والسرعات فوق المسرح'}</span>
            </button>
          </div>
        </section>

        {/* =========================================================================
            5. THE ANIMATION STAGE (مسرح الرسوم المتحركة)
            ========================================================================= */}
        <section aria-label="مسرح الرسوم المتحركة للكرات الرياضية" className="space-y-3">
          
          <div className="flex items-center justify-between text-xs text-[#D4E9DC]/80 px-1">
            <span className="font-bold flex items-center gap-1.5 text-white">
              <span>مسرح الحركة:</span>
              <span className="text-[#32D978]">
                {viewportMode === 'desktop' ? 'شاشة سطح المكتب الرحبة (Full Stage)' : 'محاكاة شاشة الجوال (375x580px)'}
              </span>
            </span>
            <span className="text-white/60">
              مؤشر التشغيل: {isPlaying ? 'نشط (60 FPS)' : 'متوقف'}
            </span>
          </div>

          {/* Stage Container */}
          <div className="w-full flex justify-center items-center overflow-x-auto py-2">
            <div
              className={`relative overflow-hidden transition-all duration-300 rounded-3xl border-2 border-[#00C853]/35 shadow-2xl bg-radial from-[#0C2E1F] via-[#082216] to-[#04120B] ${
                viewportMode === 'desktop'
                  ? 'w-full h-[520px] sm:h-[580px] lg:h-[640px]'
                  : 'w-[375px] h-[580px] border-[#00C853]/60 shadow-[#00C853]/15'
              }`}
              style={{
                // CSS Custom variable to drive animation speed globally
                ['--speed-factor' as any]: speedFactor,
              }}
            >
              {/* Stage Atmospheric Grid & Pitch Background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(50, 217, 120, 0.15) 0%, transparent 70%),
                                    linear-gradient(to right, rgba(0, 200, 83, 0.1) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(0, 200, 83, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '100% 100%, 40px 40px, 40px 40px',
                }}
              />

              {/* Center Stage Ring & Subtle Athletic Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-[#00C853]/15 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#00C853]/10 blur-2xl pointer-events-none" />

              {/* Stage Watermark / Identifier */}
              <div className="absolute bottom-4 left-5 text-[11px] font-mono text-white/30 pointer-events-none select-none">
                OLOOMSPORT BALLS LAB • 10 ATHLETIC SPHERES
              </div>

              {/* THE 10 ANIMATED BALLS */}
              {BALLS_CONFIG.map((ball, idx) => {
                const BallComponent = ball.Component;
                const dynamicDuration = ball.baseDuration * speedFactor;

                return (
                  <div
                    key={ball.id}
                    className="absolute z-10 select-none"
                    style={{
                      left: `${ball.initialLeft}%`,
                      top: `${ball.initialTop}%`,
                      // In mobile mode, slightly scale initial coordinates towards center
                      transform: 'translate(-50%, -50%)',
                    }}
                    aria-hidden="true"
                  >
                    {/* 1. Motion Trajectory Wrapper (Only handles movement and rotation) */}
                    <div
                      className={ball.animClass}
                      style={{
                        animationDuration: `${dynamicDuration}s`,
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    >
                      {/* 2. Isolated Glow / Halo Layer */}
                      <div
                        className={isGlowEnabled ? 'ball-glow-active' : ''}
                        style={{
                          animationPlayState: isPlaying ? 'running' : 'paused',
                        }}
                      >
                        {/* Ball SVG */}
                        <BallComponent size={viewportMode === 'mobile' ? Math.round(ball.size * 0.85) : ball.size} />
                      </div>

                      {/* Optional Info Badge for Inspection */}
                      {showInfoBadges && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded bg-[#071C12]/90 border border-[#00C853]/40 text-[9px] font-mono text-[#32D978] shadow-sm pointer-events-none">
                          #{idx + 1} {ball.nameAr} ({ball.speedGroup === 'slow' ? 'بطيئة' : 'سريعة'} {Math.round(dynamicDuration)}ث)
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. BALLS BREAKDOWN & TECHNICAL SPECIFICATION MATRIX
            ========================================================================= */}
        <section aria-label="جدول المواصفات التقنية للكرات العشر" className="space-y-4 pt-2">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#32D978]" />
            <span>بيان تفصيلي لتوزيع الكرات العشر (The 10 Balls Roster)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            
            {/* Ball Type 1: Soccer Balls (3) */}
            <div className="p-4 rounded-xl bg-[#0B2519]/70 border border-[#00C853]/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">كرة قدم (Soccer)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#00C853]/20 text-[#32D978] font-bold">
                  3 كرات
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <SoccerBallSvg size={32} />
                <SoccerBallSvg size={28} />
                <SoccerBallSvg size={24} />
              </div>
              <p className="text-xs text-[#D4E9DC]/75 leading-relaxed">
                1 بطيئة (18 ثانية) + 2 سريعة معتدلة (9 و 11 ثانية). مسارات قطرية وانحناءات رشيقة.
              </p>
            </div>

            {/* Ball Type 2: Basketballs (2) */}
            <div className="p-4 rounded-xl bg-[#0B2519]/70 border border-[#FB923C]/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">كرة سلة (Basketball)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FB923C]/20 text-[#FB923C] font-bold">
                  كرتان
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <BasketballSvg size={34} />
                <BasketballSvg size={28} />
              </div>
              <p className="text-xs text-[#D4E9DC]/75 leading-relaxed">
                1 بطيئة (20 ثانية، مدار بيضاوي متسع) + 1 سريعة معتدلة (10 ثوانٍ، صعود قوسي نشط).
              </p>
            </div>

            {/* Ball Type 3: Volleyballs (2) */}
            <div className="p-4 rounded-xl bg-[#0B2519]/70 border border-[#38BDF8]/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">كرة طائرة (Volleyball)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] font-bold">
                  كرتان
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <VolleyballSvg size={32} />
                <VolleyballSvg size={26} />
              </div>
              <p className="text-xs text-[#D4E9DC]/75 leading-relaxed">
                1 بطيئة (16 ثانية، موجة أفقية متزنة) + 1 سريعة معتدلة (8.5 ثوانٍ، مسح جانبي إيقاعي).
              </p>
            </div>

            {/* Ball Type 4: Tennis Balls (2) */}
            <div className="p-4 rounded-xl bg-[#0B2519]/70 border border-[#A3E635]/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">كرة مضرب (Tennis)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#A3E635]/20 text-[#A3E635] font-bold">
                  كرتان
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <TennisBallSvg size={28} />
                <TennisBallSvg size={24} />
              </div>
              <p className="text-xs text-[#D4E9DC]/75 leading-relaxed">
                1 بطيئة (15 ثانية، قوس صاعد مائل) + 1 سريعة معتدلة (7.5 ثوانٍ، دوران خفيف مفعم بالحيوية).
              </p>
            </div>

            {/* Ball Type 5: Handball (1) */}
            <div className="p-4 rounded-xl bg-[#0B2519]/70 border border-[#F59E0B]/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-white">كرة يد (Handball)</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] font-bold">
                  كرة واحدة
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <HandballSvg size={32} />
              </div>
              <p className="text-xs text-[#D4E9DC]/75 leading-relaxed">
                1 بطيئة (21 ثانية، حلقة طفو رياضية متسعة وقبضة فيروزية مع ألواح عنبرية دقيقة).
              </p>
            </div>

          </div>
        </section>

        {/* Technical Safety & Evaluation Guide */}
        <section className="p-4 sm:p-5 rounded-2xl bg-[#0B2519]/40 border border-[#00C853]/15 text-xs text-[#D4E9DC]/80 space-y-2">
          <div className="font-bold text-white flex items-center gap-2">
            <Info className="w-4 h-4 text-[#39E66D]" />
            <span>معايير التقييم البصري والجاهزية للدمج (Evaluation Guidelines)</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-[#D4E9DC]/75 pr-1">
            <li><strong>تنوع السرعات:</strong> راقب الفارق البصري بين الكرات الخمس الهادئة (14–22ث) والكرات الخمس النشطة (7–12ث).</li>
            <li><strong>تكامل الهالة (Soft Shimmer):</strong> جرب تفعيل وتعطيل زر التوهج لملاحظة تأثير النور الزمردي الخافت.</li>
            <li><strong>المسارات المنحنية:</strong> تتحرك الكرات في مسارات منحنية مركبة تعود لنقطة البداية بسلاسة دون ارتداد حاد.</li>
            <li><strong>عزل الإنتاج الكامل:</strong> هذا المسار والمكونات لن يتم تسجيلها أو تضمينها إطلاقاً في حزمة النشر الإنتاجية.</li>
          </ul>
        </section>

      </main>
    </div>
  );
};
