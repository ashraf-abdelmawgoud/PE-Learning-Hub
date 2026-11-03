/**
 * SportsAcademicHeroGraphic.tsx
 * Sophisticated Sports-Academic Visual Composition for PE Interactive Learning Hub
 *
 * Combines:
 * - Clean athletic court & tactical schematics
 * - Academic curriculum structure indicators
 * - Interactive learning cues (Video, Theory, Field Application, Assessment)
 * - 100% lightweight pure vector SVG + Tailwind CSS (Zero external image dependencies)
 */

import React from 'react';
import {
  BookOpen,
  Video,
  Activity,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
} from 'lucide-react';

export const SportsAcademicHeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none overflow-hidden sm:overflow-visible" dir="rtl">
      
      {/* Background Soft Glow */}
      <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#00C853]/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#39E66D]/10 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      {/* Main Sports-Academic Dashboard Card */}
      <div className="relative rounded-3xl bg-[#0B2519]/95 border-2 border-[#1B5E3A] shadow-2xl shadow-[#00C853]/10 overflow-hidden backdrop-blur-md">
        
        {/* Top Window Header */}
        <div className="px-3.5 sm:px-5 py-3 bg-[#071C12] border-b border-[#143D27] flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00C853]/80" />
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#86efac] mr-1.5 sm:mr-2">
              PE-CANVAS
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#39E66D] bg-[#142B20] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#00C853]/30 whitespace-nowrap shrink-0">
            <Sparkles className="w-3 h-3 text-[#00C853]" />
            <span>تجربة تفاعلية حية</span>
          </div>
        </div>

        {/* Active Lesson Meta Banner */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0E2F20] to-[#0B2519] border-b border-[#143D27] flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#39E66D] font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>مقرر معتمد: مناهج التربية الرياضية</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-[#F4FFF7]">
              تطور مفهوم المنهج: من التقليدي إلى الحديث
            </h4>
          </div>

          <span className="text-[11px] font-bold text-[#071C12] bg-[#00C853] px-2.5 py-1 rounded-lg shadow-xs">
            الفصل الأول • ص 2 - 6
          </span>
        </div>

        {/* Tactical Court & Learning Nodes SVG Canvas */}
        <div className="relative p-4 sm:p-6 bg-[#071C12]/80">
          <svg
            viewBox="0 0 500 320"
            className="w-full h-auto drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground Turf Pattern */}
            <rect width="500" height="320" rx="16" fill="#0A2417" />
            
            {/* Subtle Turf Striping */}
            <rect x="0" y="0" width="500" height="40" fill="#0C291A" opacity="0.6" />
            <rect x="0" y="80" width="500" height="40" fill="#0C291A" opacity="0.6" />
            <rect x="0" y="160" width="500" height="40" fill="#0C291A" opacity="0.6" />
            <rect x="0" y="240" width="500" height="40" fill="#0C291A" opacity="0.6" />

            {/* Athletic Court Lines */}
            <rect x="25" y="25" width="450" height="270" rx="8" stroke="#1B5E3A" strokeWidth="2.5" />
            <line x1="250" y1="25" x2="250" y2="295" stroke="#1B5E3A" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="250" cy="160" r="55" stroke="#1B5E3A" strokeWidth="2" />
            <circle cx="250" cy="160" r="4" fill="#00C853" />

            {/* Left Penalty / Key Area */}
            <rect x="25" y="90" width="75" height="140" stroke="#1B5E3A" strokeWidth="2" />
            {/* Right Penalty / Key Area */}
            <rect x="400" y="90" width="75" height="140" stroke="#1B5E3A" strokeWidth="2" />

            {/* Educational Progression Curve (Connecting Concepts Across Court) */}
            <path
              d="M 90 220 C 160 250, 210 100, 250 160 C 290 220, 340 70, 410 100"
              stroke="#39E66D"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="6 6"
              className="opacity-90"
            />

            {/* Vector Movement Arrows */}
            <path
              d="M 120 180 Q 180 140 230 160"
              stroke="#00C853"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              opacity="0.8"
            />
            <path
              d="M 270 160 Q 330 180 380 130"
              stroke="#00C853"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              opacity="0.8"
            />

            {/* Concept Node 1: Traditional Core (Start) */}
            <g transform="translate(90, 220)">
              <circle cx="0" cy="0" r="28" fill="#142B20" stroke="#E2E8F0" strokeWidth="2" />
              <circle cx="0" cy="0" r="22" fill="#071C12" />
              <text x="0" y="4" fill="#E2E8F0" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                المقررات
              </text>
            </g>

            {/* Concept Node 2: The Modern Transition (Center Pivot) */}
            <g transform="translate(250, 160)">
              <circle cx="0" cy="0" r="34" fill="#103D27" stroke="#00C853" strokeWidth="3" />
              <circle cx="0" cy="0" r="26" fill="#00C853" opacity="0.2" />
              <text x="0" y="-3" fill="#39E66D" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                الخبرات
              </text>
              <text x="0" y="11" fill="#F4FFF7" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                والأنشطة
              </text>
            </g>

            {/* Concept Node 3: Holistic Growth (Destination) */}
            <g transform="translate(410, 100)">
              <circle cx="0" cy="0" r="28" fill="#142B20" stroke="#39E66D" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="22" fill="#103D27" />
              <text x="0" y="-2" fill="#39E66D" fontSize="9.5" fontWeight="900" textAnchor="middle" fontFamily="Cairo">
                النمو
              </text>
              <text x="0" y="10" fill="#F4FFF7" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                المتكامل
              </text>
            </g>

            {/* Floating Academic Tag Badges inside Court */}
            <g transform="translate(70, 50)">
              <rect x="0" y="0" width="125" height="28" rx="14" fill="#071C12" stroke="#1B5E3A" strokeWidth="1.5" />
              <circle cx="16" cy="14" r="5" fill="#EF4444" />
              <text x="68" y="18" fill="#D4E9DC" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                المفهوم التقليدي (ص 3)
              </text>
            </g>

            <g transform="translate(305, 235)">
              <rect x="0" y="0" width="135" height="28" rx="14" fill="#071C12" stroke="#00C853" strokeWidth="1.5" />
              <circle cx="16" cy="14" r="5" fill="#00C853" />
              <text x="74" y="18" fill="#39E66D" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Cairo">
                المفهوم الحديث (ص 5)
              </text>
            </g>
          </svg>
        </div>

        {/* Bottom Feature Badges Bar */}
        <div className="p-4 bg-[#071C12] border-t border-[#143D27] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#142B20] border border-[#1B5E3A] text-xs font-bold text-[#D4E9DC]">
            <BookOpen className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
            <span className="truncate">شرح أكاديمي</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#142B20] border border-[#1B5E3A] text-xs font-bold text-[#D4E9DC]">
            <Video className="w-3.5 h-3.5 text-[#39E66D] shrink-0" />
            <span className="truncate">فيديوهات تعليمية</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#142B20] border border-[#1B5E3A] text-xs font-bold text-[#D4E9DC]">
            <Activity className="w-3.5 h-3.5 text-[#00C853] shrink-0" />
            <span className="truncate">أمثلة ميدانية</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#142B20] border border-[#1B5E3A] text-xs font-bold text-[#D4E9DC]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#39E66D] shrink-0" />
            <span className="truncate">تقويم ذاتي</span>
          </div>
        </div>

      </div>

      {/* Floating Badge (Top Left Desktop) */}
      <div className="hidden lg:flex absolute -top-4 -left-4 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#071C12] border border-[#00C853]/50 text-xs font-black text-[#F4FFF7] shadow-xl shadow-black/40">
        <Award className="w-4 h-4 text-[#00C853]" />
        <span>كلية علوم الرياضة</span>
      </div>

      {/* Floating Badge (Bottom Right Desktop) */}
      <div className="hidden lg:flex absolute -bottom-4 -right-4 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#071C12] border border-[#39E66D]/50 text-xs font-bold text-[#39E66D] shadow-xl shadow-black/40">
        <Layers className="w-4 h-4 text-[#39E66D]" />
        <span>7 مقررات متخصصة</span>
      </div>

    </div>
  );
};
