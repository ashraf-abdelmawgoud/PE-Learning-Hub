/**
 * Course Types - Types for the 7 Sports Science academic courses
 */

export type CourseStatus = 'pending_content' | 'in_development' | 'ready';

export interface CourseArchitecture {
  lessonsPlanned: boolean;
  quizzesPlanned: boolean;
  simulationsPlanned: boolean;
  interactiveDiagramsPlanned: boolean;
}

export interface CoursePlaceholder {
  id: string;
  orderNumber: number;
  code: string;
  title: string;
  targetBookReference: string;
  status: CourseStatus;
  statusLabel: string;
  categoryPlaceholder: string;
  description: string;
  architecture: CourseArchitecture;
  futureUnitsCount?: number;
  futureLessonsCount?: number;
}

