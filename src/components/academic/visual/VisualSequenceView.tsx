import React, { useState } from 'react';
import type { VisualSequenceBlock, SequenceItem } from '../../../types';
import {
  ListOrdered,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface VisualSequenceViewProps {
  block: VisualSequenceBlock;
}

export const VisualSequenceView: React.FC<VisualSequenceViewProps> = ({ block }) => {
  // Initialize with the items array (or scrambled if same as correct order)
  const initializeItems = (): SequenceItem[] => {
    const itemsCopy = [...block.items];
    // Check if initial items happen to match correctOrder exactly; if so, swap first two to ensure it's an exercise
    const isAlreadyCorrect = itemsCopy.every(
      (item, idx) => item.id === block.correctOrder[idx]
    );
    if (isAlreadyCorrect && itemsCopy.length > 1) {
      // Reverse or swap to present a real challenge
      return [...itemsCopy].reverse();
    }
    return itemsCopy;
  };

  const [currentItems, setCurrentItems] = useState<SequenceItem[]>(initializeItems);
  const [isChecked, setIsChecked] = useState(false);

  // Move item up
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...currentItems];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    setCurrentItems(newItems);
    setIsChecked(false);
  };

  // Move item down
  const handleMoveDown = (index: number) => {
    if (index === currentItems.length - 1) return;
    const newItems = [...currentItems];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    setCurrentItems(newItems);
    setIsChecked(false);
  };

  // Check the submitted order
  const handleCheck = () => {
    setIsChecked(true);
  };

  // Reset and try again
  const handleReset = () => {
    setCurrentItems(initializeItems());
    setIsChecked(false);
  };

  // Compute correctness
  const itemStatuses = currentItems.map((item, idx) => {
    const expectedId = block.correctOrder[idx];
    return item.id === expectedId;
  });

  const correctCount = itemStatuses.filter(Boolean).length;
  const isAllCorrect = correctCount === block.items.length;

  return (
    <figure
      className="my-8 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-7 shadow-xs overflow-hidden transition-colors"
      aria-labelledby={`seq-title-${block.id}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#D4E9DC]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC]">
            <ListOrdered className="w-5 h-5" />
          </div>
          <div>
            <h3
              id={`seq-title-${block.id}`}
              className="text-base sm:text-lg font-black text-[#173D2B]"
            >
              {block.title}
            </h3>
            <p className="text-xs text-[#6C8577] mt-0.5">{block.instructions}</p>
          </div>
        </div>

        {/* Status Tag */}
        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC] self-start sm:self-auto">
          نشاط تفاعلي تطبيقي
        </span>
      </div>

      {/* Reorderable Items List */}
      <div className="space-y-2.5 my-4">
        {currentItems.map((item, index) => {
          const isCorrectPosition = isChecked && itemStatuses[index];
          const isWrongPosition = isChecked && !itemStatuses[index];

          return (
            <div
              key={item.id}
              className={`rounded-2xl p-3 sm:p-4 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isCorrectPosition
                  ? 'bg-[#E8F8EE] border-[#059669]'
                  : isWrongPosition
                  ? 'bg-rose-50/60 border-rose-300'
                  : 'bg-[#F4FFF7] border-[#D4E9DC] hover:border-[#00C853]'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Step Number Tag */}
                <span className="w-8 h-8 rounded-xl bg-white text-[#173D2B] font-mono text-sm font-black flex items-center justify-center border border-[#D4E9DC] shadow-2xs shrink-0">
                  {index + 1}
                </span>

                <div className="space-y-0.5">
                  <span className="text-xs sm:text-sm font-black text-[#173D2B] block">
                    {item.text}
                  </span>
                  {item.categoryBadge && (
                    <span className="inline-block text-[10px] font-bold text-[#6C8577] bg-[#E8F8EE] px-2 py-0.5 rounded border border-[#D4E9DC]">
                      {item.categoryBadge}
                    </span>
                  )}
                </div>
              </div>

              {/* Controls and Feedback */}
              <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#D4E9DC]/50">
                {/* Visual Feedback Badges (using both icon AND text, not color alone) */}
                {isChecked && (
                  <div className="flex items-center gap-1.5 ml-2">
                    {isCorrectPosition ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-1 rounded-lg">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>موضع صحيح</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-800 bg-rose-100/90 px-2.5 py-1 rounded-lg">
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>موضع خاطئ</span>
                      </span>
                    )}
                  </div>
                )}

                {/* Move buttons */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0}
                    className="p-1.5 rounded-lg border border-[#D4E9DC] bg-white text-[#173D2B] hover:bg-[#E8F8EE] hover:text-[#00C853] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    title="تحريك لأعلى"
                    aria-label={`تحريك العنصر ${index + 1} لأعلى`}
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === currentItems.length - 1}
                    className="p-1.5 rounded-lg border border-[#D4E9DC] bg-white text-[#173D2B] hover:bg-[#E8F8EE] hover:text-[#00C853] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    title="تحريك لأسفل"
                    aria-label={`تحريك العنصر ${index + 1} لأسفل`}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons Toolbar */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#D4E9DC]/80">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#6C8577] hover:text-[#173D2B] hover:bg-[#E8F8EE] border border-[#D4E9DC] transition-colors cursor-pointer"
          aria-label="إعادة ترتيب العناصر والمحاولة من جديد"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#00C853]" />
          <span>إعادة المحاولة</span>
        </button>

        <button
          type="button"
          onClick={handleCheck}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm transition-all shadow-sm shadow-[#00C853]/20 active:scale-98 cursor-pointer"
          aria-label="التحقق من صحة ترتيب الخطوات"
        >
          <Sparkles className="w-4 h-4 text-[#071C12]" />
          <span>التحقق من الترتيب</span>
        </button>
      </div>

      {/* Result & Explanation Feedback Box */}
      {isChecked && (
        <div
          className={`mt-4 rounded-2xl p-4 sm:p-5 border space-y-2.5 ${
            isAllCorrect
              ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
              : 'bg-blue-50/70 border-blue-200 text-[#172B4D]'
          }`}
          role="region"
          aria-live="polite"
        >
          <div className="flex items-center gap-2">
            {isAllCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <HelpCircle className="w-5 h-5 text-[#2563EB] shrink-0" />
            )}
            <h4 className="text-sm sm:text-base font-black">
              {isAllCorrect
                ? 'إجابة ممتازة! تم ترتيب جميع الخطوات بالتسلسل العلمي الصحيح.'
                : `تم التحقق: (${correctCount} من ${block.items.length}) خطوات في موضعها الصحيح. راجع التفسير أدناه.`}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
            {block.explanation}
          </p>
        </div>
      )}
    </figure>
  );
};

