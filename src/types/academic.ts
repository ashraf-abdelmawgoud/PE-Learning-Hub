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

// ==========================================
// Phase 4: Interactive Visual Learning Engine
// ==========================================

// 1. Interactive Diagram Engine Models
export interface DiagramNodeDetails {
  academicTerm?: string;
  functionRole?: string;
  keyPoints?: string[];
}

export interface DiagramNode {
  id: string;
  label: string;
  sublabel?: string;
  description: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  shape?: 'rect' | 'circle' | 'pill' | 'hexagon';
  color?: string;
  category?: string;
  icon?: string;
  details?: DiagramNodeDetails;
}

export interface DiagramConnection {
  id: string;
  from: string;
  to: string;
  label?: string;
  style?: 'solid' | 'dashed' | 'dotted';
  arrow?: boolean;
  color?: string;
  bidirectional?: boolean;
}

export interface DiagramAnnotation {
  id: string;
  text: string;
  x: number;
  y: number;
  badge?: string;
}

export interface InteractiveDiagramBlock extends BaseBlock {
  type: 'interactive_diagram';
  title: string;
  caption?: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  nodes: DiagramNode[];
  connections: DiagramConnection[];
  annotations?: DiagramAnnotation[];
  initialSelectedNodeId?: string;
}

// 2. Animated Explanation Engine Models
export interface AnimationVisualElement {
  id: string;
  label: string;
  initialX: number;
  initialY: number;
  shape?: 'circle' | 'rect' | 'token' | 'vector_arrow';
  color?: string;
  width?: number;
  height?: number;
}

export interface StepTransformation {
  elementId: string;
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
  highlight?: boolean;
  color?: string;
  customLabel?: string;
}

export interface AnimationStep {
  stepNumber: number;
  title: string;
  explanation: string;
  pedagogicalTip?: string;
  durationMs?: number;
  activeElementIds?: string[];
  transformations: StepTransformation[];
  spotlightZone?: {
    x: number;
    y: number;
    width: number;
    height: number;
    label?: string;
  };
}

export interface AnimatedExplanationBlock extends BaseBlock {
  type: 'animated_explanation';
  title: string;
  description?: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  baseElements: AnimationVisualElement[];
  steps: AnimationStep[];
  defaultDurationPerStepMs?: number;
}

// 3. Visual Comparison Models
export interface ComparisonCriteria {
  key: string;
  label: string;
  category?: string;
  description?: string;
}

export interface ComparisonConceptItem {
  id: string;
  name: string;
  badge?: string;
  summary: string;
  characteristics: Record<string, string>;
  colorTheme?: 'blue' | 'cyan' | 'teal' | 'emerald' | 'amber';
  visualIcon?: string;
}

export interface VisualComparisonBlock extends BaseBlock {
  type: 'visual_comparison';
  title: string;
  description?: string;
  criteria: ComparisonCriteria[];
  items: ComparisonConceptItem[];
  defaultItemAId?: string;
  defaultItemBId?: string;
  sharedSimilarities?: string[];
  contrastingDifferencesSummary?: string;
}

// 4. Visual Sequence Activity Models
export interface SequenceItem {
  id: string;
  text: string;
  explanation?: string;
  icon?: string;
  categoryBadge?: string;
}

export interface VisualSequenceBlock extends BaseBlock {
  type: 'visual_sequence';
  title: string;
  instructions: string;
  items: SequenceItem[];
  correctOrder: string[];
  explanation: string;
  conceptContext?: string;
}

// ==========================================
// Phase 4.2: Smart Educational Visual Models
// ==========================================

// Type 2: Animated Steps / Sequential Educational Stages
export interface EducationalStepItem {
  id: string;
  stepNumber: number;
  title: string;
  shortSummary: string;
  detailedExplanation: string;
  keyPedagogicalPoint?: string;
  practicalExample?: string;
  pageCitation?: string;
  icon?: string;
}

export interface AnimatedStepsBlock extends BaseBlock {
  type: 'animated_steps';
  title: string;
  description?: string;
  academicCitation?: string;
  steps: EducationalStepItem[];
  defaultStepIndex?: number;
}

// Type 4: Decision-Based Learning Scenario
export interface DecisionScenarioOption {
  id: string;
  text: string;
  isOptimal: boolean;
  feedbackTitle: string;
  feedbackText: string;
  pedagogicalJustification: string;
  consequenceBadge?: string;
  fieldExample?: string;
}

export interface DecisionScenarioBlock extends BaseBlock {
  type: 'decision_scenario';
  title: string;
  contextSituation: string;
  targetRole?: string;
  academicFoundation: string;
  options: DecisionScenarioOption[];
  academicCitation?: string;
  isVirtualSimulation?: boolean;
}

// Phase 2: NotebookLM Educational Video Integration
export type VideoProvider = 'youtube';

export interface VideoBlock extends BaseBlock {
  type: 'video';
  title: string;
  description?: string;
  provider: VideoProvider;
  videoId: string;
  sourceReference?: string;
  captionLanguage?: string;
}

// ==========================================
// Phase 3: Reusable Interactive Quiz & Assessment Engine
// ==========================================

export type QuizQuestionType = 'multiple_choice' | 'true_false' | 'ordering';

export interface BaseQuizQuestion {
  id: string;
  order: number;
  prompt: string;
  explanation?: string;
  sourceReference?: string;
}

export interface McqOption {
  id: string;
  text: string;
}

export interface McqQuestion extends BaseQuizQuestion {
  type: 'multiple_choice';
  options: McqOption[];
  correctOptionId: string;
}

export interface TrueFalseQuestion extends BaseQuizQuestion {
  type: 'true_false';
  correctAnswer: boolean;
}

export interface OrderingItem {
  id: string;
  text: string;
}

export interface OrderingQuestion extends BaseQuizQuestion {
  type: 'ordering';
  items: OrderingItem[];
  correctOrder: string[]; // List of item IDs representing the 100% correct sequence
}

export type QuizQuestion = McqQuestion | TrueFalseQuestion | OrderingQuestion;

export interface QuizBlock extends BaseBlock {
  type: 'quiz';
  title: string;
  description?: string;
  instructions?: string;
  questions: QuizQuestion[];
  passingScorePercentage?: number; // Default 60%
  sourceReference?: string;
}

/**
 * Fallback for unknown or future block types (Simulation, 3D Model, etc.)
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
  | InteractiveDiagramBlock
  | AnimatedExplanationBlock
  | VisualComparisonBlock
  | VisualSequenceBlock
  | AnimatedStepsBlock
  | DecisionScenarioBlock
  | VideoBlock
  | QuizBlock
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
  estimatedDuration?: number; // Optional legacy field; study time displays are strictly prohibited (Phase 4.2)
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

export interface ChapterGlossaryItem {
  term: string;
  definition: string;
  citation?: string;
}

export interface ChapterSelfCheckQuestion {
  id: string;
  question: string;
  answer: string;
  citation?: string;
}

export interface ChapterVisualHub {
  comparisonBlock?: VisualComparisonBlock;
  stepsBlock?: AnimatedStepsBlock;
  diagramBlock?: InteractiveDiagramBlock;
  decisionBlock?: DecisionScenarioBlock;
  sequenceBlock?: VisualSequenceBlock;
}

export interface Chapter {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  learningObjectives?: string[];
  topics: Topic[];
  status: ContentStatus;
  academicReference?: AcademicReference;
  glossary?: ChapterGlossaryItem[];
  keyPoints?: string[];
  selfCheckQuestions?: ChapterSelfCheckQuestion[];
  visualHub?: ChapterVisualHub;
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

