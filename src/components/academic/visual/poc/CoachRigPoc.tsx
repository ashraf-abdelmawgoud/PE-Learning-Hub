import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Sliders, ShieldCheck, Cpu, Layers } from 'lucide-react';

interface CoachRigPocProps {
  className?: string;
}

export const CoachRigPoc: React.FC<CoachRigPocProps> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [armAngle, setArmAngle] = useState<number>(0);
  const [headAngle, setHeadAngle] = useState<number>(0);
  const [manualMode, setManualMode] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);
  const [activePreset, setActivePreset] = useState<'welcoming' | 'neutral' | 'custom'>('welcoming');

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const fpsTimerRef = useRef<number>(0);

  // Animation loop when playing and not in manual override
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
        
        // Welcoming arm gesture: smooth sinusoidal oscillation between 0° and 16°
        // Frequency: 0.5 Hz (2-second cycle)
        const armCycle = Math.sin(elapsed * Math.PI * 0.9);
        const currentArm = 8 + armCycle * 8; // 0 to 16 degrees
        setArmAngle(currentArm);

        // Head tilt: subtle nod -2° to +2.5°
        const headCycle = Math.sin(elapsed * Math.PI * 0.9 + 0.4);
        const currentHead = -0.5 - headCycle * 2.2;
        setHeadAngle(currentHead);
      }

      lastTimeRef.current = currentTime;
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, manualMode]);

  const setPreset = (preset: 'welcoming' | 'neutral') => {
    setActivePreset(preset);
    setManualMode(false);
    if (preset === 'neutral') {
      setIsPlaying(false);
      setArmAngle(0);
      setHeadAngle(0);
    } else {
      setIsPlaying(true);
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
            <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
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
                  transition: manualMode ? 'none' : 'transform 0.05s linear',
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
                  transition: manualMode ? 'none' : 'transform 0.05s linear',
                }}
              />
            </div>

            {/* Live Angle Indicator Overlay */}
            <div className="absolute bottom-3 left-3 bg-[#071C12]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#00C853]/30 text-xs font-mono text-[#86efac]">
              <div>Arm: {armAngle.toFixed(1)}°</div>
              <div>Head: {headAngle.toFixed(1)}°</div>
            </div>
          </div>

          {/* Quick Playback Bar */}
          <div className="flex items-center justify-center gap-3 mt-4 w-full">
            <button
              onClick={() => {
                setIsPlaying(!isPlaying);
                setManualMode(false);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-[#00C853] text-[#071C12] hover:bg-[#00E676] active:scale-95 transition-all shadow-lg"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'إيقاف مؤقت' : 'تشغيل الحركة'}</span>
            </button>

            <button
              onClick={() => setPreset('welcoming')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                activePreset === 'welcoming' && !manualMode
                  ? 'bg-[#15803d] text-white border-[#86efac]'
                  : 'bg-[#0E2F20] text-[#a7f3d0] border-[#00C853]/30 hover:bg-[#15803d]/40'
              }`}
            >
              حركة الترحيب
            </button>

            <button
              onClick={() => setPreset('neutral')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                activePreset === 'neutral' && !manualMode
                  ? 'bg-[#15803d] text-white border-[#86efac]'
                  : 'bg-[#0E2F20] text-[#a7f3d0] border-[#00C853]/30 hover:bg-[#15803d]/40'
              }`}
            >
              الوضع المحايد (0°)
            </button>
          </div>
        </div>

        {/* Diagnostic & Inspection Controls (5 Cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Manual Joint Inspector */}
          <div className="p-4 rounded-xl bg-[#071C12]/80 border border-[#00C853]/20">
            <div className="flex items-center gap-2 text-sm font-bold text-[#00C853] mb-3">
              <Sliders className="w-4 h-4" />
              <span>مختبر دوران المفاصل (اختبار الفجوات يدويًا)</span>
            </div>

            <p className="text-xs text-[#a7f3d0]/80 mb-4 leading-relaxed">
              حرّك أشرطة التمرير لاختبار زاوية الذراع والرأس عند أي درجة للتأكد من عدم ظهور أي فراغات أو حواف مقطوعة خلف الكتف أو الرقبة.
            </p>

            {/* Arm Rotation Slider */}
            <div className="space-y-1.5 mb-4">
              <div className="flex justify-between text-xs font-mono text-[#86efac]">
                <span>زاوية دوران الذراع المشيرة:</span>
                <span className="font-bold text-[#00C853]">{armAngle.toFixed(1)}°</span>
              </div>
              <input
                type="range"
                min="-15"
                max="25"
                step="0.5"
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
                <span>-15° (خفض الذراع)</span>
                <span>0° (محايد)</span>
                <span>+25° (رفع الذراع للترحيب)</span>
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
                min="-6"
                max="6"
                step="0.5"
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
                <span>-6° (التفاتة يسار)</span>
                <span>0° (مستقيم)</span>
                <span>+6° (التفاتة يمين)</span>
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
