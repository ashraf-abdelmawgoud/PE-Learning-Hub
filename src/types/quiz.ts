/**
 * Quiz & Assessment Types - Interactive Self-Assessment Engine (Phase 3)
 */

export type {
  QuizQuestionType,
  BaseQuizQuestion,
  McqOption,
  McqQuestion,
  TrueFalseQuestion,
  OrderingItem,
  OrderingQuestion,
  QuizQuestion,
  QuizBlock,
} from './academic';

export type QuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'ordering'
  | 'movement_sequence'
  | 'anatomical_matching'
  | 'concept_application';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface AssessmentQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  options: QuestionOption[];
  explanation: string;
  points: number;
}

export interface QuizStructure {
  id: string;
  courseId: string;
  lessonId?: string;
  title: string;
  description: string;
  timeLimitMinutes?: number;
  passingScorePercentage: number;
  questions: AssessmentQuestion[];
}

