/**
 * QuizBlockView.tsx
 * Reusable, responsive, accessible interactive assessment component for OloomSport (Phase 3).
 *
 * Core Features:
 * - Supports MCQ, True/False, and Sequence Ordering questions.
 * - Arabic RTL, Cairo typography, Sport Energy palette.
 * - Accessible controls with keyboard navigation (Space/Enter, Move Up/Down buttons).
 * - Client-side pure state evaluation via `quizScoring.ts`.
 * - Incomplete answer protection with visual indicators.
 * - Comprehensive question-by-question academic feedback with explanations.
 * - Full retry/reset mechanics clearing all previous inputs.
 */

import React, { useState, useId } from 'react';
import type {
  QuizBlock,
  McqQuestion,
  OrderingQuestion,
} from '../../../types/academic';
import {
  evaluateQuiz,
  getUnansweredQuestionIds,
  shuffleOrderingItems,
  type StudentAnswersMap,
  type QuizResult,
} from '../../../utils/quizScoring';
import {
  Award,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  BookOpen,
  ListOrdered,
} from 'lucide-react';

export interface QuizBlockViewProps {
  block: QuizBlock;
}

export const QuizBlockView: React.FC<QuizBlockViewProps> = ({ block }) => {
  const componentId = useId();

  // Initialize ordering state for any ordering questions
  const initializeOrderingState = (): Record<string, string[]> => {
    const state: Record<string, string[]> = {};
    for (const q of block.questions) {
      if (q.type === 'ordering') {
        const shuffled = shuffleOrderingItems(q.items, q.correctOrder);
        state[q.id] = shuffled.map((item) => item.id);
      }
    }
    return state;
  };

  // State: student answers, working ordering sequences, validation status, results
  const [answers, setAnswers] = useState<StudentAnswersMap>(() => {
    // Pre-populate ordering questions with initial working order
    const initial: StudentAnswersMap = {};
    for (const q of block.questions) {
      if (q.type === 'ordering') {
        const shuffled = shuffleOrderingItems(q.items, q.correctOrder);
        initial[q.id] = {
          type: 'ordering',
          itemOrder: shuffled.map((it) => it.id),
        };
      }
    }
    return initial;
  });

  const [orderingState, setOrderingState] = useState<Record<string, string[]>>(initializeOrderingState);
  const [validationAttempted, setValidationAttempted] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Unanswered question IDs
  const unansweredIds = getUnansweredQuestionIds(block, answers);

  // Handle MCQ selection
  const handleSelectMcq = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        type: 'multiple_choice',
        selectedOptionId: optionId,
      },
    }));
  };

  // Handle True/False selection
  const handleSelectTrueFalse = (questionId: string, value: boolean) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        type: 'true_false',
        selectedAnswer: value,
      },
    }));
  };

  // Handle Ordering Move Up
  const handleMoveOrderingItemUp = (questionId: string, index: number) => {
    if (isSubmitted || index === 0) return;
    const currentOrder = orderingState[questionId] ? [...orderingState[questionId]] : [];
    if (currentOrder.length < 2) return;

    const temp = currentOrder[index];
    currentOrder[index] = currentOrder[index - 1];
    currentOrder[index - 1] = temp;

    setOrderingState((prev) => ({ ...prev, [questionId]: currentOrder }));
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        type: 'ordering',
        itemOrder: currentOrder,
      },
    }));
  };

  // Handle Ordering Move Down
  const handleMoveOrderingItemDown = (questionId: string, index: number) => {
    if (isSubmitted) return;
    const currentOrder = orderingState[questionId] ? [...orderingState[questionId]] : [];
    if (index >= currentOrder.length - 1) return;

    const temp = currentOrder[index];
    currentOrder[index] = currentOrder[index + 1];
    currentOrder[index + 1] = temp;

    setOrderingState((prev) => ({ ...prev, [questionId]: currentOrder }));
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        type: 'ordering',
        itemOrder: currentOrder,
      },
    }));
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationAttempted(true);

    if (unansweredIds.length > 0) {
      // Prevent submission if incomplete
      return;
    }

    const result = evaluateQuiz(block, answers);
    setQuizResult(result);
    setIsSubmitted(true);
  };

  // Handle Reset / Retry
  const handleRetry = () => {
    const newOrdering = initializeOrderingState();
    setOrderingState(newOrdering);

    const initialAnswers: StudentAnswersMap = {};
    for (const q of block.questions) {
      if (q.type === 'ordering' && newOrdering[q.id]) {
        initialAnswers[q.id] = {
          type: 'ordering',
          itemOrder: newOrdering[q.id],
        };
      }
    }

    setAnswers(initialAnswers);
    setValidationAttempted(false);
    setIsSubmitted(false);
    setQuizResult(null);
  };

  // Arabic option letter prefixes
  const arabicLetters = ['أ', 'ب', 'ج', 'د', 'هـ', 'و'];

  return (
    <figure
      className="my-8 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-8 shadow-xs overflow-hidden transition-all text-right"
      dir="rtl"
      aria-labelledby={`quiz-title-${componentId}`}
    >
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#D4E9DC]/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC] shadow-xs">
            <Award className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#00A844] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full border border-[#D4E9DC]">
                تقويم تكويني ذاتي &bull; Formative Assessment
              </span>
              <span className="text-[11px] font-bold text-[#6C8577]">
                {block.questions.length} أسئلة تدريبية
              </span>
            </div>
            <h3
              id={`quiz-title-${componentId}`}
              className="text-lg sm:text-2xl font-black text-[#173D2B] mt-1"
            >
              {block.title}
            </h3>
          </div>
        </div>

        {block.sourceReference && (
          <div className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs text-[#486555] bg-[#F4FFF7] px-3 py-1.5 rounded-xl border border-[#D4E9DC]">
            <BookOpen className="w-3.5 h-3.5 text-[#00C853]" />
            <span className="font-semibold">{block.sourceReference}</span>
          </div>
        )}
      </div>

      {block.description && (
        <p className="text-xs sm:text-sm text-[#486555] leading-relaxed mb-6 bg-[#F4FFF7] p-3.5 rounded-2xl border border-[#D4E9DC]/60">
          {block.description}
        </p>
      )}

      {/* 2. Results Mode */}
      {isSubmitted && quizResult ? (
        <div className="space-y-6">
          {/* Summary Score Card */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border transition-all ${
              quizResult.isPassed
                ? 'bg-[#E8F8EE] border-[#00C853]/40 text-[#173D2B]'
                : 'bg-amber-50/80 border-amber-200 text-amber-950'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#486555]">
                  نتيجة التقييم الذاتي
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black">
                    {quizResult.score} من {quizResult.totalQuestions}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold opacity-80">
                    ({quizResult.percentage}%)
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-relaxed mt-2">
                  {quizResult.isPassed
                    ? 'أداء متميز: استيعاب سليم وموثق للمفاهيم الأكاديمية المطروحة في هذا الدرس.'
                    : 'فرصة للمراجعة: يوصى بإعادة قراءة الدرس ومراجعة المفاهيم غير المكتملة ثم المحاولة مرة أخرى.'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleRetry}
                className="self-start sm:self-center inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#173D2B] text-white font-black text-xs sm:text-sm hover:bg-[#23583E] active:scale-95 transition-all shadow-md cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#173D2B]/30"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة المحاولة (Restart)</span>
              </button>
            </div>
          </div>

          {/* Question-by-Question Review */}
          <div className="space-y-4 pt-2">
            <h4 className="text-base sm:text-lg font-black text-[#173D2B] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#00C853]" />
              <span>مراجعة الإجابات والتفسيرات الأكاديمية</span>
            </h4>

            {block.questions.map((question, qIdx) => {
              const qResult = quizResult.questionResults[question.id];
              const isCorrect = qResult?.isCorrect ?? false;

              return (
                <div
                  key={question.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCorrect
                      ? 'bg-white border-[#00C853]/40'
                      : 'bg-white border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-bold text-[#6C8577]">
                      السؤال {qIdx + 1} من {block.questions.length}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isCorrect
                          ? 'bg-[#E8F8EE] text-[#00A844]'
                          : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>إجابة صحيحة</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" />
                          <span>إجابة خاطئة</span>
                        </>
                      )}
                    </span>
                  </div>

                  <p className="font-black text-[#173D2B] text-sm sm:text-base mb-3 leading-snug">
                    {question.prompt}
                  </p>

                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-[#486555] shrink-0">إجابتك:</span>
                      <span
                        className={`font-semibold ${
                          isCorrect ? 'text-[#00A844]' : 'text-rose-600 line-through'
                        }`}
                      >
                        {qResult?.studentAnswerText || 'لم تتم الإجابة'}
                      </span>
                    </div>

                    {!isCorrect && (
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-[#173D2B] shrink-0">الإجابة الصحيحة:</span>
                        <span className="font-bold text-[#00A844]">
                          {qResult?.expectedAnswerText}
                        </span>
                      </div>
                    )}

                    {question.explanation && (
                      <div className="mt-3 p-3 rounded-xl bg-[#F4FFF7] border border-[#D4E9DC] text-xs text-[#173D2B] space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-[#00A844]">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>التفسير العلمي المعتمد:</span>
                        </div>
                        <p className="leading-relaxed text-[#486555]">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* 3. Answering Mode */
        <form onSubmit={handleSubmit} className="space-y-6">
          {block.questions.map((question, qIdx) => {
            const isUnanswered = validationAttempted && unansweredIds.includes(question.id);

            return (
              <div
                key={question.id}
                id={`q-card-${question.id}`}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  isUnanswered
                    ? 'bg-amber-50/40 border-amber-300 ring-2 ring-amber-200/50'
                    : 'bg-[#F4FFF7]/50 border-[#D4E9DC] hover:border-[#00C853]/50'
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#173D2B] bg-white px-2.5 py-0.5 rounded-lg border border-[#D4E9DC]">
                      السؤال {qIdx + 1} من {block.questions.length}
                    </span>
                    <span className="text-[11px] font-semibold text-[#6C8577]">
                      {question.type === 'multiple_choice' && 'اختيار من متعدد'}
                      {question.type === 'true_false' && 'صواب أم خطأ'}
                      {question.type === 'ordering' && 'ترتيب الخطوات بالتسلسل'}
                    </span>
                  </div>

                  {isUnanswered && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-200">
                      <AlertTriangle className="w-3 h-3" />
                      <span>يرجى تحديد إجابة</span>
                    </span>
                  )}
                </div>

                {/* Question Prompt */}
                <h4 className="text-sm sm:text-base font-black text-[#173D2B] mb-4 leading-snug">
                  {question.prompt}
                </h4>

                {/* Question Type Controls */}
                {question.type === 'multiple_choice' && (
                  <div
                    role="radiogroup"
                    aria-label={question.prompt}
                    className="grid grid-cols-1 gap-2.5"
                  >
                    {(question as McqQuestion).options.map((option, optIdx) => {
                      const currentSelected =
                        answers[question.id]?.type === 'multiple_choice'
                          ? (answers[question.id] as { selectedOptionId: string }).selectedOptionId
                          : null;
                      const isSelected = currentSelected === option.id;

                      return (
                        <button
                          key={option.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => handleSelectMcq(question.id, option.id)}
                          className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border text-right transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#00C853] ${
                            isSelected
                              ? 'bg-white border-[#00C853] shadow-xs text-[#173D2B] font-bold'
                              : 'bg-white/80 border-[#D4E9DC] hover:bg-white hover:border-[#6C8577]/40 text-[#486555]'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#00C853] text-[#071C12]'
                                : 'bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]'
                            }`}
                          >
                            {arabicLetters[optIdx] || optIdx + 1}
                          </span>
                          <span className="text-xs sm:text-sm leading-relaxed">{option.text}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {question.type === 'true_false' && (
                  <div className="grid grid-cols-2 gap-3 max-w-md">
                    {/* True Option */}
                    <button
                      type="button"
                      onClick={() => handleSelectTrueFalse(question.id, true)}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#00C853] ${
                        answers[question.id]?.type === 'true_false' &&
                        (answers[question.id] as { selectedAnswer: boolean }).selectedAnswer === true
                          ? 'bg-white border-[#00C853] text-[#00A844] shadow-xs font-black'
                          : 'bg-white/80 border-[#D4E9DC] hover:bg-white text-[#486555]'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>صواب (True)</span>
                    </button>

                    {/* False Option */}
                    <button
                      type="button"
                      onClick={() => handleSelectTrueFalse(question.id, false)}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-rose-500 ${
                        answers[question.id]?.type === 'true_false' &&
                        (answers[question.id] as { selectedAnswer: boolean }).selectedAnswer === false
                          ? 'bg-white border-rose-500 text-rose-600 shadow-xs font-black'
                          : 'bg-white/80 border-[#D4E9DC] hover:bg-white text-[#486555]'
                      }`}
                    >
                      <X className="w-4 h-4" />
                      <span>خطأ (False)</span>
                    </button>
                  </div>
                )}

                {question.type === 'ordering' && (
                  <div className="space-y-2">
                    <p className="text-xs text-[#6C8577] mb-2 flex items-center gap-1">
                      <ListOrdered className="w-3.5 h-3.5 text-[#00C853]" />
                      <span>استخدم أزرار الأسهم لترتيب المراحل من الأولى للأخيرة:</span>
                    </p>

                    {(orderingState[question.id] || []).map((itemId, idx, arr) => {
                      const item = (question as OrderingQuestion).items.find((it) => it.id === itemId);
                      if (!item) return null;

                      return (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-3 p-3 bg-white rounded-xl border border-[#D4E9DC] shadow-2xs"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-lg bg-[#E8F8EE] text-[#173D2B] flex items-center justify-center text-xs font-black shrink-0 border border-[#D4E9DC]">
                              {idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#173D2B]">
                              {item.text}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleMoveOrderingItemUp(question.id, idx)}
                              disabled={idx === 0}
                              aria-label={`تحريك الخطوة ${item.text} لأعلى`}
                              className="p-1.5 rounded-lg border border-[#D4E9DC] bg-white text-[#173D2B] hover:bg-[#E8F8EE] hover:text-[#00C853] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#00C853]"
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMoveOrderingItemDown(question.id, idx)}
                              disabled={idx === arr.length - 1}
                              aria-label={`تحريك الخطوة ${item.text} لأسفل`}
                              className="p-1.5 rounded-lg border border-[#D4E9DC] bg-white text-[#173D2B] hover:bg-[#E8F8EE] hover:text-[#00C853] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#00C853]"
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Validation Banner if attempted to submit with missing answers */}
          {validationAttempted && unansweredIds.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 flex items-start gap-3 text-xs sm:text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-black text-amber-900">
                  يرجى الإجابة عن جميع الأسئلة للمتابعة
                </span>
                <p className="text-amber-800 leading-relaxed">
                  يتبقى {unansweredIds.length} من أصل {block.questions.length} أسئلة غير مكتملة. تم
                  تحديدها بالأعلى لتتمكن من مراجعتها قبل اعتماد النتيجة.
                </p>
              </div>
            </div>
          )}

          {/* Submit Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-[#6C8577]">
              التقييم مخصص للتدريب الذاتي والتغذية الراجعة الفورية ولا يُحسب في السجل الأكاديمي الرسمي.
            </span>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#00C853] text-[#071C12] font-black text-sm hover:bg-[#39E66D] active:scale-95 transition-all shadow-md cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#00C853]/40"
            >
              <span>اعتماد الإجابات واستعراض النتيجة</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </figure>
  );
};
