import React, { useState } from 'react';
import { Activity, Compass, HeartPulse } from 'lucide-react';

interface BiomechNode {
  id: string;
  name: string;
  category: string;
  metric: string;
  description: string;
  x: number;
  y: number;
}

export const SportsBiomechanicalGraphic: React.FC = () => {
  const [activeNode, setActiveNode] = useState<BiomechNode | null>(null);

  const nodes: BiomechNode[] = [
    {
      id: 'knee',
      name: 'مفصل الركبة وزاوية الدفع',
      category: 'الميكانيكا الحيوية (Biomechanics)',
      metric: 'زاوية الانثناء: 142°',
      description: 'تحليل عزم القوة حول مفصل الركبة ومسار إنتاج القدرة الحركية أثناء مرحلة الانطلاق.',
      x: 270,
      y: 260,
    },
    {
      id: 'cog',
      name: 'مركز ثقل الجسم (COG)',
      category: 'التوازن الحركي (Stability)',
      metric: 'إزاحة أفقية مثالية',
      description: 'نقطة توازن الكتلة الحركية لضمان كفاءة نقل الطاقة وتقليل مقاومة القصور الذاتي.',
      x: 220,
      y: 175,
    },
    {
      id: 'cardio',
      name: 'معدل النبض والجهد القلبي',
      category: 'فسيولوجيا الجهد البدني (Physiology)',
      metric: '164 نبضة/د (منطقة الجهد الهوائي)',
      description: 'قياس استهلاك الأكسجين (VO2) ومعدل التدفق الدموي للعضلات العاملة.',
      x: 185,
      y: 135,
    },
    {
      id: 'foot',
      name: 'قوة رد فعل الأرض (GRF)',
      category: 'ديناميكا الحركة (Kinetics)',
      metric: 'متجه القوة: 2.8 × وزن الجسم',
      description: 'زاوية الارتكاز وتشتيت الصدمات لتحويل طاقة الارتطام إلى سرعة تقدمية للأمام.',
      x: 320,
      y: 345,
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white rounded-3xl p-5 sm:p-7 border border-[#D9EAF7] shadow-xl shadow-blue-900/5 overflow-hidden group">
      
      {/* Background Subtle Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Graphic Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#D9EAF7] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
          <span className="text-xs font-mono font-bold text-[#2563EB] tracking-wider uppercase">
            تحليل النموذج الحركي التفاعلي
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#64748B] bg-[#F4FAFF] px-2.5 py-1 rounded-full border border-[#D9EAF7]">
          <Activity className="w-3.5 h-3.5 text-[#06B6D4]" />
          <span>انقر أو مرر فوق النقاط</span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative flex justify-center items-center py-2 bg-gradient-to-b from-[#F8FCFF] to-white rounded-2xl border border-[#D9EAF7]/50">
        <svg
          viewBox="0 0 400 380"
          className="w-full h-auto max-h-[330px] drop-shadow-xs select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Reference Grid & Crosshairs */}
          <line x1="40" y1="360" x2="360" y2="360" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="40" y1="40" x2="40" y2="360" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* ECG Telemetry Wave (Ocean Energy Cyan & Teal) */}
          <path
            d="M 40 330 L 100 330 L 115 315 L 125 345 L 140 300 L 155 350 L 170 330 L 250 330 L 265 315 L 275 345 L 290 295 L 305 350 L 320 330 L 360 330"
            stroke="#06B6D4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-ecg opacity-85"
          />

          {/* Runner Biomechanical Wireframe Silhouette */}
          {/* Torso & Head */}
          <circle cx="170" cy="80" r="18" stroke="#2563EB" strokeWidth="3" fill="#F4FAFF" />
          <path d="M 170 98 L 205 155 L 220 180" stroke="#172B4D" strokeWidth="4" strokeLinecap="round" />

          {/* Arms: Forward arm & Backward arm */}
          <path d="M 190 125 L 235 110 L 260 145" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 190 125 L 150 145 L 125 130" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

          {/* Forward Leg (Propulsion Phase) */}
          <path d="M 220 180 L 270 260 L 320 345" stroke="#2563EB" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Ground Foot Contact */}
          <path d="M 310 345 L 340 348" stroke="#14B8A6" strokeWidth="4" strokeLinecap="round" />

          {/* Rear Leg (Recovery / Swing Phase) */}
          <path d="M 220 180 L 165 240 L 120 220" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Biomechanical Motion Vectors & Force Arrows */}
          {/* Knee Angle Sector Arc */}
          <path
            d="M 255 235 A 35 35 0 0 1 285 285"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="3 3"
            fill="none"
          />
          <text x="290" y="255" fill="#D97706" fontSize="12" fontFamily="Cairo" fontWeight="bold">
            142°
          </text>

          {/* Ground Force Vector Arrow */}
          <line x1="320" y1="345" x2="270" y2="280" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="4 2" />
          <polygon points="266,275 278,279 271,288" fill="#06B6D4" />

          {/* Interactive Biomechanical Nodes */}
          {nodes.map((node) => {
            const isSelected = activeNode?.id === node.id;
            return (
              <g
                key={node.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => setActiveNode(node)}
                onMouseEnter={() => setActiveNode(node)}
              >
                {/* Pulsing ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 16 : 10}
                  className={isSelected ? 'fill-blue-500/20 stroke-[#2563EB] animate-ping' : 'fill-cyan-500/15 stroke-[#06B6D4]'}
                  strokeWidth="2"
                />
                {/* Center node button */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? 7 : 5}
                  className={isSelected ? 'fill-[#2563EB] stroke-white' : 'fill-[#06B6D4] stroke-white'}
                  strokeWidth="2"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Dynamic Detail Card for Active Node */}
      <div className="relative z-10 mt-3 min-h-[92px] bg-[#F8FCFF] rounded-2xl p-4 border border-[#D9EAF7] transition-all duration-300">
        {activeNode ? (
          <div className="space-y-1 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#172B4D] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#2563EB]" />
                {activeNode.name}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#0891B2] bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                {activeNode.metric}
              </span>
            </div>
            <p className="text-xs text-[#334155] leading-relaxed">
              {activeNode.description}
            </p>
            <div className="text-[10px] text-[#64748B] font-medium pt-0.5">
              التصنيف: {activeNode.category}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-center text-[#64748B] text-xs py-2 gap-2">
            <HeartPulse className="w-4 h-4 text-[#2563EB] animate-pulse" />
            <span>حرّك المؤشر أو انقر على النقاط الرياضية لاستكشاف قياسات الحركة والجهد البدني</span>
          </div>
        )}
      </div>

      {/* Sports Science Metric Highlights Footer */}
      <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#D9EAF7] text-center text-xs">
        <div className="p-2 rounded-xl bg-[#F8FCFF] border border-[#D9EAF7]/60">
          <div className="text-[#2563EB] font-mono font-black text-sm">Kinematics</div>
          <div className="text-[10px] text-[#64748B] font-semibold">تحليل كينماتيكي</div>
        </div>
        <div className="p-2 rounded-xl bg-[#F8FCFF] border border-[#D9EAF7]/60">
          <div className="text-[#0891B2] font-mono font-black text-sm">Physiology</div>
          <div className="text-[10px] text-[#64748B] font-semibold">فسيولوجيا الجهد</div>
        </div>
        <div className="p-2 rounded-xl bg-[#F8FCFF] border border-[#D9EAF7]/60">
          <div className="text-[#0D9488] font-mono font-black text-sm">Biomechanics</div>
          <div className="text-[10px] text-[#64748B] font-semibold">ميكانيكا حيوية</div>
        </div>
      </div>

    </div>
  );
};
