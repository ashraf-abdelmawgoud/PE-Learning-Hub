import React, { useState, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Chapter } from '../../types/academic';
import { setChapterQuizProgress, getChapterProgressStats } from '../../utils/progressPersistence';
import { Award, Clock, ArrowLeft } from 'lucide-react';

const QuizBlockView = lazy(() =>
  import('./quiz/QuizBlockView').then((m) => ({ default: m.QuizBlockView }))
);

interface ChapterQuizSectionProps {
  courseId: string;
  chapter: Chapter;
  onComplete?: (score: number) => void;
}

function formatQuestionCount(count: number): string {
  if (count === 1) return 'سؤال واحد';
  if (count === 2) return 'سؤالان';
  if (count >= 3 && count <= 10) return `${count} أسئلة`;
  return `${count} سؤالاً`;
}

export const ChapterQuizSection: React.FC<ChapterQuizSectionProps> = ({
  courseId,
  chapter,
  onComplete,
}) => {
  const [searchParams] = useSearchParams();
  const autoOpen = searchParams.get('quiz') === 'open';

  // Collapsed by default across all courses and chapters
  const [isExpanded, setIsExpanded] = useState<boolean>(autoOpen);

  const quizBlock = chapter.chapterQuiz;
  const hasApprovedQuestions = Boolean(quizBlock && quizBlock.questions && quizBlock.questions.length > 0);
  const questionCount = quizBlock?.questions?.length || 0;

  // Retrieve saved chapter progress stats for previous completion status
  const stats = getChapterProgressStats(courseId, chapter.id, []);

  // 1. Collapsed State (Default for all chapters)
  if (!isExpanded) {
    return (
      <section aria-labelledby="chapter-quiz-heading" className="text-right" dir="rtl">
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-5 sm:p-7 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5 transition-all">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC] shadow-xs">
              <Award className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 id="chapter-quiz-heading" className="text-lg sm:text-xl font-black text-[#173D2B]">
                  الاختبار الشامل للفصل
                </h2>
                {hasApprovedQuestions && (
                  <span className="font-mono text-xs font-bold text-[#00A844] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full border border-[#D4E9DC]">
                    {formatQuestionCount(questionCount)}
                  </span>
                )}
                {stats.isChapterQuizCompleted && typeof stats.chapterQuizScore === 'number' && (
                  <span className="text-[11px] font-bold text-[#059669] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full border border-[#D4E9DC]">
                    تم الإنجاز مسبقاً ({stats.chapterQuizScore}%)
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#6C8577]">
                {hasApprovedQuestions
                  ? `تقويم تراكمي شامل لقياس مدى استيعاب موضوعات الفصل كاملة (${formatQuestionCount(questionCount)})`
                  : 'تقويم شامل وتراكمي لقياس مدى استيعاب موضوعات الفصل'}
              </p>
            </div>
          </div>

          {/* Action Button: "ابدأ الاختبار" if questions available, or "الاختبار قيد الإعداد" if pending */}
          {hasApprovedQuestions ? (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#00C853] hover:bg-[#39E66D] active:bg-[#00A844] text-[#071C12] font-black text-xs sm:text-sm shrink-0 transition-all shadow-xs hover:shadow-md cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#00C853]/30"
            >
              <span>ابدأ الاختبار</span>
              <ArrowLeft className="w-4 h-4 text-[#071C12]" />
            </button>
          ) : (
            <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#F4FFF7] text-[#6C8577] border border-[#D4E9DC] font-bold text-xs sm:text-sm shrink-0 select-none">
              <Clock className="w-4 h-4 text-[#6C8577]" />
              <span>الاختبار قيد الإعداد</span>
            </span>
          )}
        </div>
      </section>
    );
  }

  // 2. Expanded State (Only when student clicks "ابدأ الاختبار")
  return (
    <section aria-labelledby="chapter-quiz-heading" className="space-y-4 text-right transition-all" dir="rtl">
      <Suspense
        fallback={
          <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 text-center text-xs text-[#6C8577]">
            جاري تحميل أسئلة الاختبار الشامل...
          </div>
        }
      >
        <QuizBlockView
          block={quizBlock!}
          title="الاختبار الشامل للفصل"
          badgeLabel="تقويم ختامي شامل"
          retryButtonLabel="إعادة الاختبار"
          successMessage="أداء متميز: اجتياز ناجح للاختبار الشامل واستيعاب سليم لمفاهيم ومخرجات الفصل."
          reviewMessage="فرصة للمراجعة: يوصى بمراجعة موضوعات الفصل وتفسيراتها الأكاديمية ثم إعادة الاختبار."
          containerClassName="my-0 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-8 shadow-xs overflow-hidden transition-all text-right"
          onClose={() => setIsExpanded(false)}
          closeButtonLabel="طي الاختبار"
          onComplete={(result) => {
            setChapterQuizProgress(courseId, chapter.id, result.isPassed, result.percentage);
            if (onComplete) onComplete(result.percentage);
          }}
        />
      </Suspense>
    </section>
  );
};
