/**
 * quizScoring.ts
 * Pure, testable assessment evaluation and scoring engine for OloomSport (Phase 3).
 *
 * Scoring Rules:
 * - Equal weighting: 1 point per correct answer, 0 for incorrect or unanswered.
 * - No negative marking.
 * - Ordering is correct only if the entire sequence matches correctOrder.
 * - Percentage = Math.round((correctCount / totalQuestions) * 100).
 * - All calculations are pure functions with zero side effects.
 */

import type {
  QuizBlock,
  QuizQuestion,
  OrderingItem,
} from '../types/academic';

export type StudentAnswerValue =
  | { type: 'multiple_choice'; selectedOptionId: string }
  | { type: 'true_false'; selectedAnswer: boolean }
  | { type: 'ordering'; itemOrder: string[] };

export type StudentAnswersMap = Record<string, StudentAnswerValue>;

export interface QuestionResult {
  questionId: string;
  isAnswered: boolean;
  isCorrect: boolean;
  score: number; // 1 or 0
  studentAnswerText: string;
  expectedAnswerText: string;
  explanation?: string;
  sourceReference?: string;
}

export interface QuizResult {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  score: number;
  percentage: number;
  isPassed: boolean;
  passingScorePercentage: number;
  questionResults: Record<string, QuestionResult>;
}

/**
 * Evaluates a single question against the student's answer.
 */
export function evaluateQuestion(
  question: QuizQuestion,
  answer?: StudentAnswerValue
): QuestionResult {
  if (!answer) {
    return {
      questionId: question.id,
      isAnswered: false,
      isCorrect: false,
      score: 0,
      studentAnswerText: 'لم تتم الإجابة على هذا السؤال',
      expectedAnswerText: getExpectedAnswerText(question),
      explanation: question.explanation,
      sourceReference: question.sourceReference,
    };
  }

  switch (question.type) {
    case 'multiple_choice': {
      if (answer.type !== 'multiple_choice' || !answer.selectedOptionId) {
        return {
          questionId: question.id,
          isAnswered: false,
          isCorrect: false,
          score: 0,
          studentAnswerText: 'لم يتم تحديد خيار',
          expectedAnswerText: getExpectedAnswerText(question),
          explanation: question.explanation,
          sourceReference: question.sourceReference,
        };
      }
      const isCorrect = answer.selectedOptionId === question.correctOptionId;
      const selectedOption = question.options.find((o) => o.id === answer.selectedOptionId);
      return {
        questionId: question.id,
        isAnswered: true,
        isCorrect,
        score: isCorrect ? 1 : 0,
        studentAnswerText: selectedOption ? selectedOption.text : 'خيار غير معروف',
        expectedAnswerText: getExpectedAnswerText(question),
        explanation: question.explanation,
        sourceReference: question.sourceReference,
      };
    }

    case 'true_false': {
      if (answer.type !== 'true_false' || typeof answer.selectedAnswer !== 'boolean') {
        return {
          questionId: question.id,
          isAnswered: false,
          isCorrect: false,
          score: 0,
          studentAnswerText: 'لم يتم تحديد صواب أو خطأ',
          expectedAnswerText: getExpectedAnswerText(question),
          explanation: question.explanation,
          sourceReference: question.sourceReference,
        };
      }
      const isCorrect = answer.selectedAnswer === question.correctAnswer;
      return {
        questionId: question.id,
        isAnswered: true,
        isCorrect,
        score: isCorrect ? 1 : 0,
        studentAnswerText: answer.selectedAnswer ? 'صواب' : 'خطأ',
        expectedAnswerText: question.correctAnswer ? 'صواب' : 'خطأ',
        explanation: question.explanation,
        sourceReference: question.sourceReference,
      };
    }

    case 'ordering': {
      if (answer.type !== 'ordering' || !Array.isArray(answer.itemOrder) || answer.itemOrder.length === 0) {
        return {
          questionId: question.id,
          isAnswered: false,
          isCorrect: false,
          score: 0,
          studentAnswerText: 'لم يتم ترتيب الخطوات',
          expectedAnswerText: getExpectedAnswerText(question),
          explanation: question.explanation,
          sourceReference: question.sourceReference,
        };
      }

      const isCorrect =
        answer.itemOrder.length === question.correctOrder.length &&
        answer.itemOrder.every((id, idx) => id === question.correctOrder[idx]);

      const formatOrdering = (ids: string[]) =>
        ids
          .map((id, idx) => {
            const item = question.items.find((it) => it.id === id);
            return `${idx + 1}. ${item ? item.text : id}`;
          })
          .join(' ← ');

      return {
        questionId: question.id,
        isAnswered: true,
        isCorrect,
        score: isCorrect ? 1 : 0,
        studentAnswerText: formatOrdering(answer.itemOrder),
        expectedAnswerText: formatOrdering(question.correctOrder),
        explanation: question.explanation,
        sourceReference: question.sourceReference,
      };
    }
  }
}

/**
 * Returns a human-readable text of the expected correct answer for any question type.
 */
export function getExpectedAnswerText(question: QuizQuestion): string {
  switch (question.type) {
    case 'multiple_choice': {
      const correctOpt = question.options.find((o) => o.id === question.correctOptionId);
      return correctOpt ? correctOpt.text : '';
    }
    case 'true_false': {
      return question.correctAnswer ? 'صواب' : 'خطأ';
    }
    case 'ordering': {
      return question.correctOrder
        .map((id, idx) => {
          const item = question.items.find((it) => it.id === id);
          return `${idx + 1}. ${item ? item.text : id}`;
        })
        .join(' ← ');
    }
  }
}

/**
 * Evaluates the full quiz block against student answers and returns detailed score metrics.
 */
export function evaluateQuiz(quiz: QuizBlock, answers: StudentAnswersMap): QuizResult {
  const totalQuestions = quiz.questions.length;
  let correctCount = 0;
  let answeredCount = 0;
  const questionResults: Record<string, QuestionResult> = {};

  for (const question of quiz.questions) {
    const studentAnswer = answers[question.id];
    const qResult = evaluateQuestion(question, studentAnswer);
    questionResults[question.id] = qResult;

    if (qResult.isAnswered) {
      answeredCount++;
    }
    if (qResult.isCorrect) {
      correctCount++;
    }
  }

  const unansweredCount = totalQuestions - answeredCount;
  const incorrectCount = answeredCount - correctCount;
  const score = correctCount;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const passingScorePercentage = quiz.passingScorePercentage ?? 60;
  const isPassed = percentage >= passingScorePercentage;

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    incorrectCount,
    unansweredCount,
    score,
    percentage,
    isPassed,
    passingScorePercentage,
    questionResults,
  };
}

/**
 * Returns IDs of questions that have not yet been answered by the student.
 */
export function getUnansweredQuestionIds(quiz: QuizBlock, answers: StudentAnswersMap): string[] {
  const unanswered: string[] = [];
  for (const question of quiz.questions) {
    const ans = answers[question.id];
    if (!ans) {
      unanswered.push(question.id);
      continue;
    }
    if (ans.type === 'multiple_choice' && !ans.selectedOptionId) {
      unanswered.push(question.id);
    }
    if (ans.type === 'true_false' && typeof ans.selectedAnswer !== 'boolean') {
      unanswered.push(question.id);
    }
    if (ans.type === 'ordering' && (!Array.isArray(ans.itemOrder) || ans.itemOrder.length === 0)) {
      unanswered.push(question.id);
    }
  }
  return unanswered;
}

/**
 * Checks whether all questions in the quiz have been answered.
 */
export function isQuizComplete(quiz: QuizBlock, answers: StudentAnswersMap): boolean {
  return getUnansweredQuestionIds(quiz, answers).length === 0;
}

/**
 * Prepares initial sequence for an ordering question, ensuring it does not reveal the correct order initially.
 */
export function shuffleOrderingItems(items: OrderingItem[], correctOrder: string[]): OrderingItem[] {
  const itemsCopy = [...items];
  const isAlreadyCorrect = itemsCopy.every((it, idx) => it.id === correctOrder[idx]);
  if (isAlreadyCorrect && itemsCopy.length > 1) {
    return [...itemsCopy].reverse();
  }
  return itemsCopy;
}
