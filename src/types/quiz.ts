/**
 * Quiz & Assessment Types - Ready for future interactive self-assessment
 */

export type QuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'movement_sequence' // Arranging movement phases (e.g. phases of running, jumping)
  | 'anatomical_matching' // Matching muscle to function
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
