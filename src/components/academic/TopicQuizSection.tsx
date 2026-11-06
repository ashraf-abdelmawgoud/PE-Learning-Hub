import React, { useState, Suspense, lazy } from 'react';
import type { Topic, QuizBlock, ChapterSelfCheckQuestion } from '../../types/academic';
import { setTopicProgress } from '../../utils/progressPersistence';
import { HelpCircle, CheckCircle2, RotateCcw, Award, ChevronDown, ChevronUp } from 'lucide-react';

const QuizBlockView = lazy(() =>
  import('./quiz/QuizBlockView').then((m) => ({ default: m.QuizBlockView }))
);

interface TopicQuizSectionProps {
  courseId: string;
  chapterId: string;
  topic: Topic;
  fallbackQuestions?: ChapterSelfCheckQuestion[];
  onComplete?: (score: number) => void;
}

export const TopicQuizSection: React.FC<TopicQuizSectionProps> = ({
  courseId,
  chapterId,
  topic,
  fallbackQuestions,
  onComplete,
}) => {
  // Check if topic has a structured QuizBlock
  let quizBlock: QuizBlock | undefined = topic.quiz;
  if (!quizBlock && topic.lessons && topic.lessons.length > 0) {
    for (const l of topic.lessons) {
      const qb = l.blocks?.find((b): b is QuizBlock => b.type === 'quiz');
      if (qb) {
        quizBlock = qb;
        break;
      }
    }
  }

  // 1. If structured QuizBlock exists, render it
  if (quizBlock) {
    return (
      <div className="space-y-6 text-right" dir="rtl">
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-9 shadow-xs">
          <Suspense fallback={<div className="p-4 text-center text-xs text-[#6C8577]">جاري تحميل الأسئلة...</div>}>
            <QuizBlockView
              block={quizBlock}
              onComplete={(result) => {
                setTopicProgress(courseId, chapterId, topic.id, {
                  isCompleted: result.isPassed,
                  quizScore: result.percentage,
                });
                if (onComplete) onComplete(result.percentage);
              }}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  // 2. If verified self-check comprehension questions exist for this topic
  const questions: ChapterSelfCheckQuestion[] = fallbackQuestions || [];
  if (questions.length > 0) {
    return (
      <InteractiveComprehensionAssessment
        courseId={courseId}
        chapterId={chapterId}
        topicId={topic.id}
        questions={questions}
        onComplete={onComplete}
      />
    );
  }

  // 3. Unavailable state if no questions have been provided yet
  return (
    <div className="space-y-4 text-right" dir="rtl">
      <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 sm:p-12 text-center space-y-4 shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center mx-auto border border-[#D4E9DC]">
          <HelpCircle className="w-7 h-7" />
        </div>

        <div className="space-y-1.5 max-w-md mx-auto">
          <h3 className="text-base sm:text-lg font-black text-[#173D2B]">
            أسئلة هذا الموضوع قيد المراجعة والاعتماد
          </h3>
          <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
            لم تُنشر بعد أسئلة التقويم الخاصة بهذا الموضوع. سيتم إتاحتها فور الانتهاء من مراجعة واعتماد بنك الأسئلة الأكاديمي.
          </p>
        </div>
      </div>
    </div>
  );
};

interface AssessmentProps {
  courseId: string;
  chapterId: string;
  topicId: string;
  questions: ChapterSelfCheckQuestion[];
  onComplete?: (score: number) => void;
}

const InteractiveComprehensionAssessment: React.FC<AssessmentProps> = ({
  courseId,
  chapterId,
  topicId,
  questions,
  onComplete,
}) => {
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [ratedIds, setRatedIds] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const toggleReveal = (qId: string) => {
    setRevealedIds((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleMarkUnderstood = (qId: string) => {
    setRatedIds((prev) => {
      const updated = { ...prev, [qId]: true };
      const understoodCount = Object.keys(updated).length;
      if (understoodCount === questions.length) {
        setIsCompleted(true);
        const score = 100;
        setTopicProgress(courseId, chapterId, topicId, {
          isCompleted: true,
          quizScore: score,
        });
        if (onComplete) onComplete(score);
      }
      return updated;
    });
  };

  const handleReset = () => {
    setRevealedIds({});
    setRatedIds({});
    setIsCompleted(false);
  };

  const answeredCount = Object.keys(ratedIds).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <div className="space-y-6 text-right" dir="rtl">
      <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-9 shadow-xs space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4E9DC]/70 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#E8F8EE] text-[#00C853] flex items-center justify-center font-bold border border-[#D4E9DC]">
                <HelpCircle className="w-4 h-4" />
              </span>
              <h3 className="text-lg font-black text-[#173D2B]">
                أسئلة الفهم والتقويم الذاتي المعتمدة
              </h3>
            </div>
            <p className="text-xs text-[#486555]">
              اختبر فهمك لنقاط الموضوع بمطابقة إجابتك مع الإجابة النموذجية الموثقة من الكتاب
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#173D2B] bg-[#F4FFF7] px-3 py-1.5 rounded-xl border border-[#D4E9DC]">
            <span>تم التحقق من {answeredCount} من {questions.length}</span>
            <span>({progressPercent}%)</span>
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const isRevealed = Boolean(revealedIds[q.id]);
            const isUnderstood = Boolean(ratedIds[q.id]);

            return (
              <div
                key={q.id || idx}
                className={`rounded-2xl border transition-all p-5 space-y-3 ${
                  isUnderstood
                    ? 'bg-[#F4FFF7] border-[#00C853]/40'
                    : 'bg-white border-[#D4E9DC] hover:border-[#00C853]/60'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-[#E8F8EE] text-[#173D2B] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#D4E9DC]">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#173D2B] leading-snug">
                      {q.question}
                    </h4>
                  </div>

                  {isUnderstood && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#059669] bg-[#E8F8EE] px-2.5 py-1 rounded-lg shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>تم الاستيعاب</span>
                    </span>
                  )}
                </div>

                {/* Reveal Answer Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleReveal(q.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A844] hover:text-[#007E33] transition-colors cursor-pointer"
                  >
                    <span>{isRevealed ? 'إخفاء الإجابة النموذجية' : 'عرض الإجابة والتحقق الأكاديمي'}</span>
                    {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Model Answer & Citation */}
                {isRevealed && (
                  <div className="bg-[#E8F8EE]/60 rounded-xl p-4 border border-[#D4E9DC] space-y-3 text-xs sm:text-sm text-[#173D2B] leading-relaxed">
                    <div className="space-y-1">
                      <span className="font-black text-xs text-[#059669] block">الإجابة المعتمدة من كتاب المقرر:</span>
                      <p>{q.answer}</p>
                    </div>

                    {q.citation && (
                      <div className="text-[11px] font-bold text-[#6C8577] border-t border-[#D4E9DC]/60 pt-2">
                        المرجع: {q.citation}
                      </div>
                    )}

                    {!isUnderstood && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => handleMarkUnderstood(q.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00C853] text-[#071C12] font-black text-xs hover:bg-[#39E66D] transition-colors cursor-pointer"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>استوعبت هذه النقطة تماماً</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion Banner */}
        {isCompleted && (
          <div className="bg-[#E8F8EE] border border-[#00C853] rounded-2xl p-5 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#00C853] text-[#071C12] flex items-center justify-center mx-auto">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-black text-[#173D2B]">
                أحسنت! أتممت تقويم هذا الموضوع بنجاح 100%
              </h4>
              <p className="text-xs text-[#486555]">
                تم حفظ تقدمك الأكاديمي واحتساب الموضوع كمكتمل في سجل دراستك.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6C8577] hover:text-[#173D2B] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة الاختبار الذاتي</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
