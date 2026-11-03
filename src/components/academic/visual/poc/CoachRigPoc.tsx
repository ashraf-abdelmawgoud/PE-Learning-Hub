import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Sliders, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface CoachRigPocProps {
  className?: string;
}

export const CoachRigPoc: React.FC<CoachRigPocProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [armAngle, setArmAngle] = useState<number>(0);
  const [headAngle, setHeadAngle] = useState<number>(0);
  const [breathY, setBreathY] = useState<number>(0);
  const [armMode, setArmMode] = useState<'locked' | 'micro'>('locked');
  const [manualMode, setManualMode] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);
  const [activePreset, setActivePreset] = useState<'gentle' | 'neutral' | 'custom'>('gentle');

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const fpsTimerRef = useRef<number>(0);

  // Animation loop: Minimal Gentle Motion (Stylized Static Scene)
  useEffect(() => {
    lastTimeRef.current = performance.now();
    fpsTimerRef.current = performance.now();
    const startTime = performance.now();

    const loop = (currentTime: number) => {
      // FPS measurement
      frameCountRef.current++;
      if (currentTime - fpsTimerRef.current >= 500) {
        const calculatedFps = Math.round(
          (frameCountRef.current * 1000) / (currentTime - fpsTimerRef.current)
        );
        setFps(calculatedFps);
        frameCountRef.current = 0;
        fpsTimerRef.current = currentTime;
      }

      if (isPlaying && !manualMode) {
        const elapsed = (currentTime - startTime) / 1000;
        
        // 1. Gentle body breathing (4.5s cycle: -1.8px to +1.8px)
        const breath = Math.sin(elapsed * 1.4) * -1.8;
        setBreathY(breath);

        // 2. Very subtle head tilt (5.2s cycle: -0.65° to +0.65°)
        const headCycle = Math.sin(elapsed * 1.1) * 0.65;
        setHeadAngle(headCycle);

        // 3. Arm motion: Locked (0°) or Micro-float (0° to 1.0° max)
        if (armMode === 'locked') {
          setArmAngle(0);
        } else {
          const armCycle = (Math.sin(elapsed * 0.9) * 0.5 + 0.5) * 1.0; // 0° to 1.0°
          setArmAngle(armCycle);
        }
      }

      lastTimeRef.current = currentTime;
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, manualMode, armMode]);

  const setPreset = (preset: 'gentle' | 'neutral') => {
    setActivePreset(preset);
    setManualMode(false);
    if (preset === 'neutral') {
      setIsPlaying(false);
      setArmAngle(0);
      setHeadAngle(0);
      setBreathY(0);
    } else {
      setIsPlaying(true);
      setArmMode('locked');
    }
  };

  return (
    <div className={`bg-gradient-to-b from-[#071C12] via-[#0E2F20] to-[#071C12] text-white rounded-2xl border border-[#00C853]/30 shadow-2xl p-6 ${className}`}>
      {/* Header & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#00C853]/20 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#00C853]/20 text-[#00C853] border border-[#00C853]/40">
              Proof of Concept (PoC)
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#15803d]/30 text-[#86efac] border border-[#15803d]/40">
              Layered WebP Hybrid Rig
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white mt-1">
            شخصية المعلم (Coach Character Rig) — عزل المفاصل والتحريك
          </h2>
          <p className="text-xs md:text-sm text-[#86efac]/80 mt-0.5">
            نموذج إثبات مفهوم لفصل الرأس والجذع والذراع المشيرة مع تدوير المفاصل وسد الفجوات
          </p>
        </div>

        {/* Live Metrics */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071C12] border border-[#00C853]/30 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-[#00C853]" />
            <span className="text-[#a7f3d0]">FPS:</span>
            <span className="font-bold text-[#00C853]">{fps}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#071C12] border border-[#00C853]/30 text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-[#00C853]" />
            <span className="text-[#a7f3d0]">Layers:</span>
            <span className="font-bold text-[#00C853]">73.74 KiB</span>
          </div>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Stage Container (7 Cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-[420px] aspect-[896/1200] relative rounded-2xl overflow-hidden border-2 border-[#00C853]/40 shadow-inner bg-gradient-to-b from-[#1b6338] via-[#14532d] to-[#0f3d21]">
            {/* Field lines in background to clearly demonstrate transparency */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white"></div>
            </div>

            {/* Coach Character Stack (896x1200 Coordinate Space) */}
            <div
              className="absolute inset-0 w-full h-full select-none pointer-events-none will-change-transform"
              style={{
                transform: `translateY(${breathY}px)`,
                transition: manualMode ? 'none' : 'transform 0.08s linear',
              }}
            >
              {/* Layer 1: Body & Legs (Z: 10) */}
              <img
                src="/assets/poc/coach/coach_body_full.webp"
                alt="Coach Body"
                className="absolute inset-0 w-full h-full object-contain"
                style={{ zIndex: 10 }}
              />

              {/* Layer 2: Head (Z: 15) */}
              {/* Pivot Point: Neck center (x: 540 / 896 = 60.27%, y: 280 / 1200 = 23.33%) */}
              <img
                src="/assets/poc/coach/coach_head_full.webp"
                alt="Coach Head"
                className="absolute inset-0 w-full h-full object-contain will-change-transform"
                style={{
                  zIndex: 15,
                  transformOrigin: '60.27% 23.33%',
                  transform: `rotate(${headAngle}deg)`,
                  transition: manualMode ? 'none' : 'transform 0.08s linear',
                }}
              />

              {/* Layer 3: Pointing Arm (Z: 20) */}
              {/* Pivot Point: Shoulder joint (x: 425 / 896 = 47.43%, y: 305 / 1200 = 25.42%) */}
              <img
                src="/assets/poc/coach/coach_arm_full.webp"
                alt="Coach Pointing Arm"
                className="absolute inset-0 w-full h-full object-contain will-change-transform"
                style={{
                  zIndex: 20,
                  transformOrigin: '47.43% 25.42%',
                  transform: `rotate(${armAngle}deg)`,
                  transition: manualMode ? 'none' : 'transform 0.08s linear',
                }}
              />
            </div>

            {/* Live Angle Indicator Overlay */}
            <div className="absolute bottom-3 left-3 bg-[#071C12]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#00C853]/30 text-xs font-mono text-[#86efac]">
              <div>Breath: {breathY.toFixed(1)}px</div>
              <div>Head: {headAngle.toFixed(1)}°</div>
              <div>Arm: {armAngle.toFixed(1)}° {armMode === 'locked' ? '(ثابت 0°)' : '(ميكرو)'}</div>
            </div>
          </div>

          {/* Quick Playback Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 w-full">
            <button
              onClick={() => {
                setIsPlaying(!isPlaying);
                setManualMode(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs bg-[#00C853] text-[#071C12] hover:bg-[#00E676] active:scale-95 transition-all shadow-md"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'إيقاف مؤقت' : 'تشغيل الحركة'}</span>
            </button>

            <button
              onClick={() => setPreset('gentle')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                activePreset === 'gentle' && !manualMode
                  ? 'bg-[#15803d] text-white border-[#86efac]'
                  : 'bg-[#0E2F20] text-[#a7f3d0] border-[#00C853]/30 hover:bg-[#15803d]/40'
              }`}
            >
              حركة هادئة معتمدة (Gentle)
            </button>

            <button
              onClick={() => {
                setArmMode(armMode === 'locked' ? 'micro' : 'locked');
                setManualMode(false);
              }}
              className="px-3 py-2 rounded-xl text-xs font-bold transition-all border bg-[#0E2F20] text-[#a7f3d0] border-[#00C853]/30 hover:bg-[#15803d]/40"
            >
              {armMode === 'locked' ? 'تثبيت الذراع: مفعّل (0°)' : 'حركة الذراع: ميكرو (0° - 1°)'}
            </button>

            <button
              onClick={() => setPreset('neutral')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                activePreset === 'neutral' && !manualMode
                  ? 'bg-[#15803d] text-white border-[#86efac]'
                  : 'bg-[#0E2F20] text-[#a7f3d0] border-[#00C853]/30 hover:bg-[#15803d]/40'
              }`}
            >
              ثبات تام (0°)
            </button>
          </div>
        </div>

        {/* Diagnostic & Inspection Controls (5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Manual Joint Inspector */}
          <div className="p-4 rounded-xl bg-[#071C12]/80 border border-[#00C853]/20">
            <div className="flex items-center gap-2 text-sm font-bold text-[#00C853] mb-3">
              <Sliders className="w-4 h-4" />
              <span>مختبر ضبط الحركة الدقيقة (Gentle Range Inspector)</span>
            </div>

            <p className="text-xs text-[#a7f3d0]/80 mb-4 leading-relaxed">
              تم حصر زوايا الحركة في المدى الآمن الخفيف لمنع أي تشوه لمفصل الكتف أو الرقبة وضمان ثبات جمال الرسم الأصلي.
            </p>

            {/* Arm Rotation Slider (Safe Minimal Range) */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs font-mono text-[#86efac]">
                <span>زاوية دوران الذراع المشيرة (المدى الدقيق):</span>
                <span className="font-bold text-[#00C853]">{armAngle.toFixed(1)}°</span>
              </div>
              <input
                type="range"
                min="-3"
                max="4"
                step="0.2"
                value={armAngle}
                onChange={(e) => {
                  setManualMode(true);
                  setIsPlaying(false);
                  setActivePreset('custom');
                  setArmAngle(parseFloat(e.target.value));
                }}
                className="w-full accent-[#00C853] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>-3° (خفض خفيف)</span>
                <span>0° (الوضع المثالي المعتمد)</span>
                <span>+4° (رفع ميكرو)</span>
              </div>
            </div>

            {/* Head Tilt Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-[#86efac]">
                <span>إمالة الرأس (العنق):</span>
                <span className="font-bold text-[#00C853]">{headAngle.toFixed(1)}°</span>
              </div>
              <input
                type="range"
                min="-2"
                max="2"
                step="0.1"
                value={headAngle}
                onChange={(e) => {
                  setManualMode(true);
                  setIsPlaying(false);
                  setActivePreset('custom');
                  setHeadAngle(parseFloat(e.target.value));
                }}
                className="w-full accent-[#00C853] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>-2° (إيماءة خفيفة يسار)</span>
                <span>0° (مستقيم)</span>
                <span>+2° (إيماءة خفيفة يمين)</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Card */}
          <div className="p-4 rounded-xl bg-[#071C12]/80 border border-[#00C853]/20 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#00C853]">
              <ShieldCheck className="w-4 h-4" />
              <span>بيانات الأصول وميزانية الحجم الفعلي</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#00C853]/10">
                <span className="text-gray-300">1. طبقة الجذع والساقين (`coach_body_full.webp`):</span>
                <span className="font-mono text-[#86efac] font-bold">50.19 KiB</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#00C853]/10">
                <span className="text-gray-300">2. طبقة الرأس والعنق (`coach_head_full.webp`):</span>
                <span className="font-mono text-[#86efac] font-bold">12.52 KiB</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#00C853]/10">
                <span className="text-gray-300">3. طبقة الذراع المشيرة (`coach_arm_full.webp`):</span>
                <span className="font-mono text-[#86efac] font-bold">11.03 KiB</span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-sm">
                <span className="text-white">إجمالي حجم الشخصية الكاملة:</span>
                <span className="font-mono text-[#00C853]">73.74 KiB</span>
              </div>
            </div>

            <div className="text-[11px] text-[#a7f3d0]/80 pt-2 border-t border-[#00C853]/10 space-y-1">
              <div>• <strong>نقطة دوران الذراع (Shoulder Pivot):</strong> (47.43%, 25.42%)</div>
              <div>• <strong>نقطة دوران الرأس (Neck Pivot):</strong> (60.27%, 23.33%)</div>
              <div>• <strong>تقنية معالجة الفجوات:</strong> امتداد كبسولي مستدير للمفصل يُغلق تجويف الكتف بالكامل.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
