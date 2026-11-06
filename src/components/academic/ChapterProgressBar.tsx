import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ChapterProgressBarProps {
  completedTopicsCount: number;
  totalTopics: number;
  progressPercentage: number;
  isChapterQuizCompleted?: boolean;
}

export const ChapterProgressBar: React.FC<ChapterProgressBarProps> = ({
  completedTopicsCount,
  totalTopics,
  progressPercentage,
  isChapterQuizCompleted,
}) => {
  return (
    <div className="bg-[#F8FAF9] rounded-2xl border border-[#D4E9DC] p-4 sm:p-5 space-y-3 text-right" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {progressPercentage === 100 ? (
            <CheckCircle2 className="w-4 h-4 text-[#00A844]" />
          ) : (
            <Circle className="w-4 h-4 text-[#6C8577]" />
          )}
          <span className="text-xs sm:text-sm font-black text-[#173D2B]">
            مستوى الإنجاز الدراسي الفعلي
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-[#173D2B]">
          <span>
            {totalTopics > 0
              ? `أنجزت ${completedTopicsCount} من ${totalTopics} موضوعات`
              : 'لا توجد موضوعات منشورة بعد'}
          </span>
          <span className="font-mono text-[#00A844]">({progressPercentage}%)</span>
        </div>
      </div>

      {/* Real Progress Bar */}
      <div className="w-full h-2 rounded-full bg-[#D4E9DC] overflow-hidden">
        <div
          className="h-full bg-[#00C853] transition-all duration-500 rounded-full"
          style={{ width: `${Math.max(0, Math.min(100, progressPercentage))}%` }}
        />
      </div>

      {isChapterQuizCompleted && (
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#059669] pt-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>تم اجتياز الاختبار النهائي لهذا الفصل</span>
        </div>
      )}
    </div>
  );
};
