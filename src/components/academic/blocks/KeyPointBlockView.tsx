import React from 'react';
import type { KeyPointBlock } from '../../../types';
import { Sparkles, Check } from 'lucide-react';

export const KeyPointBlockView: React.FC<{ block: KeyPointBlock }> = ({ block }) => {
  const { title = 'نقاط جوهرية ومحاور رئيسية', points, importance = 'high' } = block;

  const isEssential = importance === 'essential';

  return (
    <div
      className={`my-6 rounded-2xl p-5 sm:p-6 border shadow-2xs ${
        isEssential
          ? 'bg-gradient-to-br from-blue-50/70 to-cyan-50/50 border-blue-200'
          : 'bg-[#F8FCFF] border-[#D9EAF7]'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <h4 className="text-base font-black text-[#172B4D]">
            {title}
          </h4>
        </div>
        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#2563EB]">
          {isEssential ? 'محور أساسي للاختبار' : 'نقطة هامة'}
        </span>
      </div>

      <ul className="space-y-2.5">
        {points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#334155] leading-relaxed">
            <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

