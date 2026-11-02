/**
 * Lesson & Content Types - Ready for future rich interactive content
 * (No PDF files - pure structured interactive Web/DOM/Canvas format)
 */

export type ContentBlockType =
  | 'heading'
  | 'paragraph'
  | 'callout'
  | 'key-concept'
  | 'diagram-svg'
  | 'interactive-widget'
  | 'anatomical-view'
  | 'movement-breakdown'
  | 'summary-card';

export interface ContentBlock {
  id: string;
  type: ContentBlockType;
  order: number;
  data: Record<string, unknown>;
}

export type LessonType = 'theory' | 'practical_analysis' | 'interactive_lab';

export interface LessonStructure {
  id: string;
  courseId: string;
  unitId: string;
  title: string;
  order: number;
  type: LessonType;
  estimatedMinutes: number;
  blocks: ContentBlock[];
  hasSimulation: boolean;
  simulationId?: string;
  hasQuiz: boolean;
  quizId?: string;
}

export interface UnitStructure {
  id: string;
  courseId: string;
  order: number;
  title: string;
  description: string;
  lessons: LessonStructure[];
}

