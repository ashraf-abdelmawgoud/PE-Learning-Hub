/**
 * Academic Content Engine - Types & Domain Models
 * Hierarchy: Course -> Chapter -> Topic -> Lesson -> Content Blocks
 */

import type { CoursePlaceholder } from './course';

export type ContentStatus = 'published' | 'draft' | 'pending_content';

// ==========================================
// 1. Academic Reference Model
// ==========================================
export interface AcademicReference {
  id: string;
  bookTitle: string;
  author: string;
  edition?: string;
  chapter?: string | number;
  pageRange?: string;
  notes?: string;
}

// ==========================================
// 2. Content Block System (Discriminated Unions)
// ==========================================

export interface BaseBlock {
  id: string;
  order: number;
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  level: 1 | 2 | 3 | 4;
  text: string;
  subtitle?: string;
}

export interface ParagraphBlock extends BaseBlock {
  type: 'paragraph';
  text: string;
  lead?: boolean;
}

export interface ListBlock extends BaseBlock {
  type: 'list';
  style: 'bullet' | 'ordered';
  title?: string;
  items: string[];
}

export interface DefinitionBlock extends BaseBlock {
  type: 'definition';
  term: string;
  definition: string;
  academicContext?: string;
  scientificTermEn?: string;
}

export interface ExampleBlock extends BaseBlock {
  type: 'example';
  title: string;
  scenario: string;
  explanation: string;
  takeaway?: string;
}

export interface KeyPointBlock extends BaseBlock {
  type: 'key_point';
  title?: string;
  points: string[];
  importance?: 'high' | 'essential';
}

export interface ComparisonRow {
  feature: string;
  itemA: string;
  itemB: string;
}

export interface ComparisonBlock extends BaseBlock {
  type: 'comparison';
  title?: string;
  headers: [string, string];
  rows: ComparisonRow[];
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export interface AcademicReferenceBlock extends BaseBlock {
  type: 'academic_reference';
  referenceId?: string;
  reference: AcademicReference;
  citationText?: string;
}

export interface InteractivePlaceholderBlock extends BaseBlock {
  type: 'interactive_placeholder';
  placeholderType: 'simulation' | 'quiz' | 'diagram' | '3d_model' | 'calculator';
  title: string;
  description: string;
  expectedFeature: string;
}

/**
 * Fallback for unknown or future block types (Animated SVG, Simulation, 3D Model, etc.)
 * Ensures the renderer never crashes on unknown blocks.
 */
export interface GenericBlock extends BaseBlock {
  type: 'generic_future_block';
  unsupportedType: string;
  rawPayload?: Record<string, unknown>;
}

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | DefinitionBlock
  | ExampleBlock
  | KeyPointBlock
  | ComparisonBlock
  | ImageBlock
  | AcademicReferenceBlock
  | InteractivePlaceholderBlock
  | GenericBlock;

// ==========================================
// 3. Lesson, Topic, Chapter, Course Models
// ==========================================

export interface Lesson {
  id: string;
  topicId: string;
  title: string;
  description: string;
  order: number;
  learningObjectives: string[];
  estimatedDuration: number; // in minutes
  blocks: ContentBlock[];
  references: AcademicReference[];
  relatedLessons?: string[]; // IDs of related lessons
  status: ContentStatus;
}

export interface Topic {
  id: string;
  chapterId: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  relatedTopics?: string[]; // IDs of related topics
  status: ContentStatus;
}

export interface Chapter {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  topics: Topic[];
  status: ContentStatus;
}

export interface AcademicCourse extends CoursePlaceholder {
  chapters: Chapter[];
  academicReferences: AcademicReference[];
  isDevSandbox?: boolean;
}

// ==========================================
// 4. Breadcrumb Navigation Model
// ==========================================
export interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
}

