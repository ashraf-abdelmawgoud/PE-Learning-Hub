import React, { useState } from 'react';
import type { VisualComparisonBlock } from '../../../types';
import { Columns3, Check, Minus, Sparkles, Layers } from 'lucide-react';

interface VisualComparisonViewProps {
  block: VisualComparisonBlock;
}

export const VisualComparisonView: React.FC<VisualComparisonViewProps> = ({ block }) => {
  const [itemAId, setItemAId] = useState<string>(
    block.defaultItemAId || block.items[0]?.id || ''
  );
  const [itemBId, setItemBId] = useState<string>(
    block.defaultItemBId || block.items[1]?.id || block.items[0]?.id || ''
  );

  const itemA = block.items.find((item) => item.id === itemAId) || block.items[0];
  const itemB = block.items.find((item) => item.id === itemBId) || block.items[1] || block.items[0];

  return (
    <figure
      className="my-8 rounded-3xl bg-white border border-[#D9EAF7] p-5 sm:p-7 shadow-xs overflow-hidden"
      aria-labelledby={`comp-title-${block.id}`}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#D9EAF7]/80">
        <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0 border border-indigo-200/60">
          <Columns3 className="w-5 h-5" />
        </div>
        <div>
          <h3
            id={`comp-title-${block.id}`}
            className="text-base sm:text-lg font-black text-[#172B4D]"
          >
            {block.title}
          </h3>
          {block.description && (
            <p className="text-xs text-[#64748B] mt-0.5">{block.description}</p>
          )}
        </div>
      </div>

      {/* Selectors Bar: Choose Item A and Item B */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Selector A */}
        <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200/70 space-y-2">
          <label
            htmlFor={`select-item-a-${block.id}`}
            className="text-xs font-bold text-[#1E40AF] flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>العنصر الأول المقارن:</span>
          </label>
          <select
            id={`select-item-a-${block.id}`}
            value={itemAId}
            onChange={(e) => setItemAId(e.target.value)}
            className="w-full text-xs sm:text-sm font-bold bg-white text-[#172B4D] border border-blue-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
          >
            {block.items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} {item.badge ? `(${item.badge})` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Selector B */}
        <div className="p-3.5 rounded-2xl bg-cyan-50/50 border border-cyan-200/70 space-y-2">
          <label
            htmlFor={`select-item-b-${block.id}`}
            className="text-xs font-bold text-[#0E7490] flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
            <span>العنصر الثاني المقارن:</span>
          </label>
          <select
            id={`select-item-b-${block.id}`}
            value={itemBId}
            onChange={(e) => setItemBId(e.target.value)}
            className="w-full text-xs sm:text-sm font-bold bg-white text-[#172B4D] border border-cyan-300 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-[#06B6D4] cursor-pointer"
          >
            {block.items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} {item.badge ? `(${item.badge})` : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Concept Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl p-4 bg-[#F8FCFF] border border-blue-200/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-[#172B4D]">{itemA.name}</h4>
            {itemA.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-[#2563EB]">
                {itemA.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-[#334155] leading-relaxed">{itemA.summary}</p>
        </div>

        <div className="rounded-2xl p-4 bg-[#F8FCFF] border border-cyan-200/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-[#172B4D]">{itemB.name}</h4>
            {itemB.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-100 text-[#0891B2]">
                {itemB.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-[#334155] leading-relaxed">{itemB.summary}</p>
        </div>
      </div>

      {/* Comparison Criteria Matrix */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#64748B]">
          <Layers className="w-3.5 h-3.5" />
          <span>مصفوفة الفروق الجوهرية حسب المعايير:</span>
        </div>

        <div className="space-y-2.5">
          {block.criteria.map((crit) => {
            const valA = itemA.characteristics[crit.key] || '—';
            const valB = itemB.characteristics[crit.key] || '—';
            const isDifferent = valA !== valB;

            return (
              <div
                key={crit.key}
                className="rounded-2xl bg-[#F8FCFF] border border-[#D9EAF7] p-3.5 transition-all hover:border-[#2563EB]/40"
              >
                {/* Criterion Title */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-[#172B4D]">
                    {crit.label}
                  </span>
                  {isDifferent ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      وجه اختلاف
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      وجه تشابه
                    </span>
                  )}
                </div>

                {/* Values comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-blue-100 space-y-0.5">
                    <span className="text-[10px] font-bold text-[#2563EB] block">
                      {itemA.name}:
                    </span>
                    <p className="text-[#334155] leading-relaxed font-medium">
                      {valA}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-cyan-100 space-y-0.5">
                    <span className="text-[10px] font-bold text-[#0891B2] block">
                      {itemB.name}:
                    </span>
                    <p className="text-[#334155] leading-relaxed font-medium">
                      {valB}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shared Similarities Section if provided */}
      {block.sharedSimilarities && block.sharedSimilarities.length > 0 && (
        <div className="mt-4 rounded-2xl p-4 bg-emerald-50/60 border border-emerald-200/70 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>أوجه التشابه والقواسم المشتركة:</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950">
            {block.sharedSimilarities.map((sim, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <Minus className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{sim}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contrasting differences summary if provided */}
      {block.contrastingDifferencesSummary && (
        <div className="mt-3 rounded-2xl p-3.5 bg-blue-50/50 border border-blue-200/60 flex items-start gap-2.5 text-xs text-[#1E40AF]">
          <Sparkles className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
          <span>
            <strong>الخلاصة التحليلية:</strong> {block.contrastingDifferencesSummary}
          </span>
        </div>
      )}
    </figure>
  );
};

