import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { AnimatedExplanationBlock } from '../../../types';
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  SkipBack,
  Gauge,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

interface AnimatedExplanationViewProps {
  block: AnimatedExplanationBlock;
}

export const AnimatedExplanationView: React.FC<AnimatedExplanationViewProps> = ({ block }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<number>(1);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const timerRef = useRef<number | null>(null);

  // Listen for prefers-reduced-motion updates
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const totalSteps = block.steps.length;
  const currentStep = block.steps[currentStepIndex] || block.steps[0];
  const stepDuration = (currentStep.durationMs || block.defaultDurationPerStepMs || 3000) / speed;

  const handleNext = useCallback(() => {
    setCurrentStepIndex((prev) => {
      if (prev < totalSteps - 1) {
        return prev + 1;
      }
      setIsPlaying(false);
      return prev;
    });
  }, [totalSteps]);

  const handlePrev = useCallback(() => {
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleReplay = useCallback(() => {
    setCurrentStepIndex(0);
    setIsPlaying(true);
  }, []);

  const handleTogglePlay = useCallback(() => {
    if (currentStepIndex === totalSteps - 1 && !isPlaying) {
      // If at the end, restart from beginning
      setCurrentStepIndex(0);
    }
    setIsPlaying((prev) => !prev);
  }, [currentStepIndex, isPlaying, totalSteps]);

  // Autoplay timer effect
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setTimeout(() => {
      if (currentStepIndex < totalSteps - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, stepDuration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, currentStepIndex, totalSteps, stepDuration]);

  // Pause on page visibility change (when user switches tabs)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Compute active transformation for a given base element
  const getElementState = (elementId: string) => {
    const base = block.baseElements.find((e) => e.id === elementId);
    if (!base) return null;

    const transform = currentStep.transformations.find((t) => t.elementId === elementId);
    const x = transform?.x !== undefined ? transform.x : base.initialX;
    const y = transform?.y !== undefined ? transform.y : base.initialY;
    const scale = transform?.scale !== undefined ? transform.scale : 1;
    const opacity = transform?.opacity !== undefined ? transform.opacity : 1;
    const isHighlighted = transform?.highlight ?? currentStep.activeElementIds?.includes(elementId);
    const color = transform?.color || base.color || '#2563EB';
    const label = transform?.customLabel || base.label;

    return {
      x,
      y,
      scale,
      opacity,
      isHighlighted,
      color,
      label,
      width: base.width || 70,
      height: base.height || 40,
      shape: base.shape || 'rect',
    };
  };

  const transitionDuration = reducedMotion ? '0ms' : `${350 / speed}ms`;

  return (
    <figure
      className="my-8 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-7 shadow-xs overflow-hidden transition-all"
      aria-labelledby={`anim-title-${block.id}`}
    >
      {/* Title & Speed Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#D4E9DC]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3
              id={`anim-title-${block.id}`}
              className="text-base sm:text-lg font-black text-[#173D2B]"
            >
              {block.title}
            </h3>
            {block.description && (
              <p className="text-xs text-[#6C8577] mt-0.5">{block.description}</p>
            )}
          </div>
        </div>

        {/* Speed Selector */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-[#F4FFF7] border border-[#D4E9DC] px-3 py-1.5 rounded-xl">
          <Gauge className="w-3.5 h-3.5 text-[#6C8577]" />
          <span className="text-[11px] font-bold text-[#6C8577]">السرعة:</span>
          <div className="flex items-center gap-1">
            {[0.5, 1, 1.5, 2].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSpeed(s)}
                className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                  speed === s
                    ? 'bg-[#103D27] text-[#39E66D] shadow-2xs'
                    : 'text-[#6C8577] hover:text-[#173D2B]'
                }`}
                aria-label={`تحديد السرعة ${s}x`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Animation Stage */}
      <div className="relative w-full rounded-2xl bg-[#F4FFF7] border border-[#D4E9DC]/70 p-3 sm:p-5 overflow-hidden">
        <svg
          viewBox={`0 0 ${block.viewBoxWidth} ${block.viewBoxHeight}`}
          className="w-full h-auto max-h-[380px] mx-auto select-none"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`${block.title} - الخطوة ${currentStepIndex + 1}`}
        >
          {/* Spotlight Zone if present */}
          {currentStep.spotlightZone && (
            <g
              className="transition-all"
              style={{ transitionDuration }}
            >
              <rect
                x={currentStep.spotlightZone.x}
                y={currentStep.spotlightZone.y}
                width={currentStep.spotlightZone.width}
                height={currentStep.spotlightZone.height}
                rx="16"
                fill="#EFF6FF"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="6 4"
                className="animate-pulse"
              />
              {currentStep.spotlightZone.label && (
                <text
                  x={currentStep.spotlightZone.x + 12}
                  y={currentStep.spotlightZone.y + 20}
                  fontSize="11"
                  fontWeight="bold"
                  fill="#2563EB"
                  fontFamily="Cairo, sans-serif"
                >
                  {currentStep.spotlightZone.label}
                </text>
              )}
            </g>
          )}

          {/* Base Elements with Step-based transformations */}
          {block.baseElements.map((el) => {
            const state = getElementState(el.id);
            if (!state) return null;

            return (
              <g
                key={el.id}
                transform={`translate(${state.x}, ${state.y}) scale(${state.scale})`}
                opacity={state.opacity}
                style={{
                  transition: `transform ${transitionDuration} ease-in-out, opacity ${transitionDuration} ease-in-out`,
                }}
              >
                {state.shape === 'circle' ? (
                  <circle
                    cx={state.width / 2}
                    cy={state.width / 2}
                    r={state.width / 2}
                    fill={state.color}
                    stroke={state.isHighlighted ? '#1D4ED8' : '#BFDBFE'}
                    strokeWidth={state.isHighlighted ? 3.5 : 1.5}
                    filter={
                      state.isHighlighted
                        ? 'drop-shadow(0 4px 8px rgba(37,99,235,0.4))'
                        : undefined
                    }
                  />
                ) : (
                  <rect
                    x="0"
                    y="0"
                    width={state.width}
                    height={state.height}
                    rx="12"
                    fill={state.isHighlighted ? state.color : '#FFFFFF'}
                    stroke={state.isHighlighted ? '#1D4ED8' : state.color}
                    strokeWidth={state.isHighlighted ? 3 : 2}
                    filter={
                      state.isHighlighted
                        ? 'drop-shadow(0 4px 10px rgba(37,99,235,0.3))'
                        : 'drop-shadow(0 1px 3px rgba(0,0,0,0.05))'
                    }
                  />
                )}

                <text
                  x={state.width / 2}
                  y={state.shape === 'circle' ? state.width / 2 + 5 : state.height / 2 + 5}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="800"
                  fill={
                    state.shape === 'circle' || state.isHighlighted
                      ? '#FFFFFF'
                      : '#172B4D'
                  }
                  fontFamily="Cairo, sans-serif"
                >
                  {state.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Step Progression Bar overlay */}
        <div className="mt-3 flex items-center justify-between text-xs text-[#64748B]">
          <span className="font-bold">
            الخطوة {currentStep.stepNumber} من {totalSteps}
          </span>
          <div className="flex items-center gap-1.5">
            {block.steps.map((s, idx) => (
              <button
                key={s.stepNumber}
                type="button"
                onClick={() => {
                  setCurrentStepIndex(idx);
                  setIsPlaying(false);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentStepIndex
                    ? 'w-7 bg-[#00C853]'
                    : idx < currentStepIndex
                    ? 'w-2 bg-[#39E66D]'
                    : 'w-2 bg-[#D4E9DC]'
                }`}
                aria-label={`الانتقال إلى الخطوة ${s.stepNumber}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Playback Controls Toolbar */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
        <button
          type="button"
          onClick={handleReplay}
          className="p-2.5 rounded-xl border border-[#D4E9DC] bg-white hover:bg-[#E8F8EE] text-[#173D2B] transition-colors cursor-pointer"
          title="إعادة التشغيل من البداية"
          aria-label="إعادة التشغيل"
        >
          <RotateCcw className="w-4 h-4 text-[#00C853]" />
        </button>

        <button
          type="button"
          onClick={handlePrev}
          disabled={currentStepIndex === 0}
          className="p-2.5 rounded-xl border border-[#D4E9DC] bg-white hover:bg-[#E8F8EE] text-[#173D2B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          title="الخطوة السابقة"
          aria-label="الخطوة السابقة"
        >
          <SkipForward className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleTogglePlay}
          className="px-6 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm shadow-[#00C853]/20 active:scale-98 cursor-pointer"
          aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل الأنيميشن'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 text-[#071C12]" />
              <span>إيقاف مؤقت</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 text-[#071C12]" />
              <span>{currentStepIndex === totalSteps - 1 ? 'إعادة العرض' : 'تشغيل'}</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentStepIndex === totalSteps - 1}
          className="p-2.5 rounded-xl border border-[#D4E9DC] bg-white hover:bg-[#E8F8EE] text-[#173D2B] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          title="الخطوة التالية"
          aria-label="الخطوة التالية"
        >
          <SkipBack className="w-4 h-4" />
        </button>
      </div>

      {/* Pedagogical Explanation Box for Active Step */}
      <div
        className="mt-4 rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#E8F8EE] to-[#F4FFF7] border border-[#00C853]/40 space-y-2.5"
        role="region"
        aria-live="polite"
      >
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-[#103D27] text-[#39E66D] font-mono text-xs font-bold flex items-center justify-center">
            {currentStep.stepNumber}
          </span>
          <h4 className="text-sm sm:text-base font-black text-[#173D2B]">
            {currentStep.title}
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
          {currentStep.explanation}
        </p>

        {currentStep.pedagogicalTip && (
          <div className="pt-2 border-t border-[#D4E9DC] flex items-start gap-2 text-xs text-[#173D2B]">
            <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>
              <strong>ملاحظة تحليلية:</strong> {currentStep.pedagogicalTip}
            </span>
          </div>
        )}
      </div>
    </figure>
  );
};
