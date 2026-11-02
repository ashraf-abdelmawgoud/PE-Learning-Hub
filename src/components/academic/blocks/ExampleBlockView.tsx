import React from 'react';
import type { ExampleBlock } from '../../../types';
import { Lightbulb, ArrowLeft } from 'lucide-react';

export const ExampleBlockView: React.FC<{ block: ExampleBlock }> = ({ block }) => {
  const { title, scenario, explanation, takeaway } = block;

  return (
    <div className="my-6 rounded-2xl bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 border border-amber-200 p-5 sm:p-6 shadow-2xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
          <Lightbulb className="w-4 h-4" />
        </div>
        <h4 className="text-base font-black text-[#172B4D]">
          {title}
        </h4>
        <span className="text-[10px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full mr-auto">
          تطبيق ميداني
        </span>
      </div>

      <div className="space-y-3 text-sm text-[#334155] leading-relaxed">
        <div className="bg-white/80 p-3.5 rounded-xl border border-amber-100">
          <span className="font-bold text-[#172B4D] block mb-1">الموقف الحركي / التدريبي:</span>
          <p>{scenario}</p>
        </div>

        <div>
          <span className="font-bold text-[#172B4D] block mb-1">التحليل العلمي:</span>
          <p>{explanation}</p>
        </div>

        {takeaway && (
          <div className="pt-2 border-t border-amber-200/60 flex items-center gap-2 text-xs font-bold text-amber-900">
            <ArrowLeft className="w-3.5 h-3.5 text-amber-600" />
            <span>الخلاصة المستفادة: {takeaway}</span>
          </div>
        )}
      </div>
    </div>
  );
};

