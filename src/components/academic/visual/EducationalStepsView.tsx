/**
 * EducationalStepsView.tsx
 * Type 2: Animated Steps (تسلسل الخطوات والمراحل التعليمية)
 * Phase 4.2 — Smart Educational Visual System
 *
 * Core Features:
 * - Content-First & Minimal Motion: Sequential steps with subtle highlighting.
 * - Directionally verified RTL navigation (Prev = Right ➡, Next = Left ⬅).
 * - Full Cairo typography with high contrast (#173D2B on #FFFFFF).
 * - Key pedagogical takeaways & field examples.
 * - Respects prefers-reduced-motion.
 * - Zero external dependencies.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { AnimatedStepsBlock } from '../../../types';
import {
  ListOrdered,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Play,
  Pause,
  Sparkles,
  Activity,
  CheckCircle2,
} from 'lucide-react';

interface EducationalStepsViewProps {
  block: AnimatedStepsBlock;
}

export const EducationalStepsView: React.FC<EducationalStepsViewProps> = ({ block }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(
    block.defaultStepIndex ?? 0
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
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

  const totalSteps = block.steps.length;
  const currentStep = block.steps[activeStepIndex] || block.steps[0];
  const STEP_DURATION_MS = 5000;
  const timerRef = useRef<number | null>(null);

  // Auto-play stepper logic
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const startTime = Date.now() - (progressPercent / 100) * STEP_DURATION_MS;

    timerRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / STEP_DURATION_MS) * 100);
      setProgressPercent(pct);

      if (elapsed >= STEP_DURATION_MS) {
        if (activeStepIndex < totalSteps - 1) {
          setActiveStepIndex((prev) => prev + 1);
          setProgressPercent(0);
        } else {
          setIsPlaying(false);
          setProgressPercent(100);
        }
      }
    }, 50);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeStepIndex, totalSteps, progressPercent]);

  const handleNext = useCallback(() => {
    if (activeStepIndex < totalSteps - 1) {
      setActiveStepIndex((prev) => prev + 1);
      setProgressPercent(0);
    }
  }, [activeStepIndex, totalSteps]);

  const handlePrev = useCallback(() => {
    if (activeStepIndex > 0) {
      setActiveStepIndex((prev) => prev - 1);
      setProgressPercent(0);
    }
  }, [activeStepIndex]);

  const handleSelectStep = (index: number) => {
    setActiveStepIndex(index);
    setProgressPercent(0);
    setIsPlaying(false);
  };

  const handleReset = () => {
    setActiveStepIndex(0);
    setProgressPercent(0);
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    if (activeStepIndex === totalSteps - 1 && progressPercent >= 100) {
      setActiveStepIndex(0);
      setProgressPercent(0);
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <figure
      className="my-8 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-7 shadow-xs overflow-hidden transition-all text-right"
      dir="rtl"
      aria-labelledby={`steps-title-${block.id}`}
    >
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b border-[#D4E9DC]/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC] shadow-xs">
            <ListOrdered className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#00A844] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full border border-[#D4E9DC]">
                تسلسل تعليمي تفاعلي (Animated Steps)
              </span>
              {block.academicCitation && (
                <span className="text-[11px] font-semibold text-[#6C8577] hidden sm:inline">
                  {block.academicCitation}
                </span>
              )}
            </div>
            <h3
              id={`steps-title-${block.id}`}
              className="text-base sm:text-lg font-black text-[#173D2B] mt-0.5"
            >
              {block.title}
            </h3>
          </div>
        </div>

        {/* Status / Step Counter Pill */}
        <span className="self-start sm:self-auto text-xs font-mono font-bold text-[#173D2B] bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1 rounded-xl">
          المرحلة {activeStepIndex + 1} من {totalSteps}
        </span>
      </div>

      {block.description && (
        <p className="text-xs sm:text-sm text-[#486555] mb-5 leading-relaxed">
          {block.description}
        </p>
      )}

      {/* 2. Step Progress Stepper Bar */}
      <div className="relative mb-6">
        {/* Progress track */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {block.steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => handleSelectStep(idx)}
                className={`p-3 rounded-2xl border text-right transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#103D27] text-white border-[#00C853] shadow-md shadow-[#00C853]/15 ring-2 ring-[#00C853]/40'
                    : isCompleted
                    ? 'bg-[#E8F8EE] text-[#173D2B] border-[#D4E9DC] hover:border-[#00C853]'
                    : 'bg-[#F8FAF9] text-[#6C8577] border-[#E5EAE7] hover:bg-[#F4FFF7]'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                {/* Step indicator and number */}
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center font-mono ${
                      isActive
                        ? 'bg-[#00C853] text-[#071C12]'
                        : isCompleted
                        ? 'bg-[#173D2B] text-white'
                        : 'bg-[#E5EAE7] text-[#6C8577]'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  {isCompleted && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A844]" />
                  )}
                  {isActive && isPlaying && (
                    <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
                  )}
                </div>

                <div className={`text-xs font-black truncate ${isActive ? 'text-white' : 'text-[#173D2B]'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Auto-play progress line */}
        {isPlaying && (
          <div className="h-1 bg-[#E8F8EE] rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-[#00C853] transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}
      </div>

      {/* 3. Active Step Detailed Presentation Card */}
      <div
        className="bg-gradient-to-br from-[#F4FFF7] to-[#E8F8EE]/50 rounded-3xl p-5 sm:p-7 border border-[#D4E9DC] space-y-4"
        style={{
          transition: reducedMotion ? 'none' : 'opacity 250ms ease, transform 250ms ease',
        }}
      >
        {/* Step Badge & Citation */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl text-xs font-black bg-[#103D27] text-[#39E66D]">
              المرحلة {currentStep.stepNumber}: {currentStep.title}
            </span>
            {currentStep.icon && (
              <span className="text-base">{currentStep.icon}</span>
            )}
          </div>
          {currentStep.pageCitation && (
            <span className="text-xs font-bold text-[#6C8577] bg-white px-2.5 py-1 rounded-lg border border-[#D4E9DC]">
              {currentStep.pageCitation}
            </span>
          )}
        </div>

        {/* Short Summary */}
        <p className="text-sm sm:text-base font-bold text-[#173D2B] leading-relaxed">
          {currentStep.shortSummary}
        </p>

        {/* Detailed Academic Explanation */}
        <p className="text-xs sm:text-sm text-[#486555] leading-relaxed break-words">
          {currentStep.detailedExplanation}
        </p>

        {/* Key Pedagogical Takeaway */}
        {currentStep.keyPedagogicalPoint && (
          <div className="bg-white rounded-2xl p-4 border border-[#D4E9DC] flex items-start gap-3 shadow-2xs">
            <div className="w-8 h-8 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4 text-[#00A844]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-black text-[#173D2B] block">
                نقطة جوهرية للمتعلم (ملاحظة تربوية):
              </span>
              <p className="text-xs text-[#486555] leading-relaxed">
                {currentStep.keyPedagogicalPoint}
              </p>
            </div>
          </div>
        )}

        {/* Practical Field Example (if present) */}
        {currentStep.practicalExample && (
          <div className="bg-[#E8F8EE] rounded-2xl p-4 border border-[#D4E9DC] flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#103D27] text-[#39E66D] flex items-center justify-center shrink-0 mt-0.5">
              <Activity className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-black text-[#103D27] block">
                تطبيق ميداني في درس التربية الرياضية:
              </span>
              <p className="text-xs text-[#173D2B] leading-relaxed">
                {currentStep.practicalExample}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 4. Directionally Verified Player Controls (RTL) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-5 border-t border-[#D4E9DC]/80">
        
        {/* Navigation Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Previous Button: In RTL, previous moves back to the RIGHT (➡) */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeStepIndex === 0}
            className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[#D4E9DC] bg-white hover:bg-[#F4FFF7] text-[#173D2B] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5 font-bold text-xs"
            title="المرحلة السابقة"
            aria-label="المرحلة السابقة"
          >
            <ChevronRight className="w-4 h-4 text-[#00C853]" />
            <span>السابق</span>
          </button>

          {/* Play / Pause Toggle Button */}
          <button
            type="button"
            onClick={handleTogglePlay}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm shadow-[#00C853]/20 cursor-pointer"
            aria-label={isPlaying ? 'إيقاف مؤقت للخطوات' : 'تشغيل تسلسل الخطوات'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>إيقاف مؤقت</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>عرض تسلسلي</span>
              </>
            )}
          </button>

          {/* Next Button: In RTL, next moves forward to the LEFT (⬅) */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeStepIndex === totalSteps - 1}
            className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[#D4E9DC] bg-white hover:bg-[#F4FFF7] text-[#173D2B] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer flex items-center gap-1.5 font-bold text-xs"
            title="المرحلة التالية"
            aria-label="المرحلة التالية"
          >
            <span>التالي</span>
            <ChevronLeft className="w-4 h-4 text-[#00C853]" />
          </button>

          {/* Replay Button */}
          <button
            type="button"
            onClick={handleReset}
            className="p-2 sm:p-2.5 rounded-xl border border-[#D4E9DC] bg-white hover:bg-[#F4FFF7] text-[#6C8577] hover:text-[#173D2B] transition-colors cursor-pointer"
            title="إعادة البدء من الخطوة الأولى"
            aria-label="إعادة البدء"
          >
            <RotateCcw className="w-4 h-4 text-[#00C853]" />
          </button>
        </div>

        {/* Reduced motion indicator if active */}
        {reducedMotion && (
          <span className="text-[11px] font-bold text-[#6C8577] bg-[#F4FFF7] px-2.5 py-1 rounded-lg border border-[#D4E9DC]">
            وضع تقليل الحركة نشط
          </span>
        )}
      </div>
    </figure>
  );
};
