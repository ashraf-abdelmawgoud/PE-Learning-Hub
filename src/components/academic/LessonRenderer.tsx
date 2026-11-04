import React, { Suspense, lazy } from 'react';
import type { ContentBlock } from '../../types';
import { HeadingBlockView } from './blocks/HeadingBlockView';
import { ParagraphBlockView } from './blocks/ParagraphBlockView';
import { ListBlockView } from './blocks/ListBlockView';
import { DefinitionBlockView } from './blocks/DefinitionBlockView';
import { ExampleBlockView } from './blocks/ExampleBlockView';
import { KeyPointBlockView } from './blocks/KeyPointBlockView';
import { ComparisonBlockView } from './blocks/ComparisonBlockView';
import { ImageBlockView } from './blocks/ImageBlockView';
import { AcademicReferenceBlockView } from './blocks/AcademicReferenceBlockView';
import { InteractivePlaceholderBlockView } from './blocks/InteractivePlaceholderBlockView';
import { VideoPlayerBlockView } from './VideoPlayerBlockView';
import { UnknownBlockView } from './blocks/UnknownBlockView';

// Lazy loading for the Phase 4 Visual Learning Engine & Assessment components
const QuizBlockView = lazy(() =>
  import('./quiz/QuizBlockView').then((m) => ({ default: m.QuizBlockView }))
);
const InteractiveDiagramView = lazy(() =>
  import('./visual/InteractiveDiagramView').then((m) => ({ default: m.InteractiveDiagramView }))
);
const AnimatedExplanationView = lazy(() =>
  import('./visual/AnimatedExplanationView').then((m) => ({ default: m.AnimatedExplanationView }))
);
const VisualComparisonView = lazy(() =>
  import('./visual/VisualComparisonView').then((m) => ({ default: m.VisualComparisonView }))
);
const VisualSequenceView = lazy(() =>
  import('./visual/VisualSequenceView').then((m) => ({ default: m.VisualSequenceView }))
);
const EducationalStepsView = lazy(() =>
  import('./visual/EducationalStepsView').then((m) => ({ default: m.EducationalStepsView }))
);
const DecisionScenarioView = lazy(() =>
  import('./visual/DecisionScenarioView').then((m) => ({ default: m.DecisionScenarioView }))
);

const VisualLoadingFallback: React.FC = () => (
  <div className="my-6 p-8 rounded-3xl bg-[#F4FFF7] border border-[#D4E9DC] text-center text-xs text-[#486555] flex items-center justify-center gap-2">
    <div className="w-4 h-4 rounded-full border-2 border-[#00C853] border-t-transparent animate-spin" />
    <span>جاري تحميل المكون البصري التفاعلي...</span>
  </div>
);

interface LessonRendererProps {
  blocks: ContentBlock[];
}

export const LessonRenderer: React.FC<LessonRendererProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="text-center py-12 text-sm text-[#64748B] bg-[#F8FCFF] rounded-2xl border border-[#D9EAF7]">
        لا توجد كتل محتوى متاحة لهذا الدرس حالياً.
      </div>
    );
  }

  // Sort blocks by order safely
  const sortedBlocks = [...blocks].sort((a, b) => a.order - b.order);

  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        return <HeadingBlockView key={block.id || `heading-${index}`} block={block} />;
      case 'paragraph':
        return <ParagraphBlockView key={block.id || `para-${index}`} block={block} />;
      case 'list':
        return <ListBlockView key={block.id || `list-${index}`} block={block} />;
      case 'definition':
        return <DefinitionBlockView key={block.id || `def-${index}`} block={block} />;
      case 'example':
        return <ExampleBlockView key={block.id || `ex-${index}`} block={block} />;
      case 'key_point':
        return <KeyPointBlockView key={block.id || `kp-${index}`} block={block} />;
      case 'comparison':
        return <ComparisonBlockView key={block.id || `comp-${index}`} block={block} />;
      case 'image':
        return <ImageBlockView key={block.id || `img-${index}`} block={block} />;
      case 'academic_reference':
        return <AcademicReferenceBlockView key={block.id || `ref-${index}`} block={block} />;
      case 'interactive_placeholder':
        return <InteractivePlaceholderBlockView key={block.id || `int-${index}`} block={block} />;
      case 'interactive_diagram':
        return (
          <Suspense key={block.id || `diag-${index}`} fallback={<VisualLoadingFallback />}>
            <InteractiveDiagramView block={block} />
          </Suspense>
        );
      case 'animated_explanation':
        return (
          <Suspense key={block.id || `anim-${index}`} fallback={<VisualLoadingFallback />}>
            <AnimatedExplanationView block={block} />
          </Suspense>
        );
      case 'visual_comparison':
        return (
          <Suspense key={block.id || `vcomp-${index}`} fallback={<VisualLoadingFallback />}>
            <VisualComparisonView block={block} />
          </Suspense>
        );
      case 'visual_sequence':
        return (
          <Suspense key={block.id || `vseq-${index}`} fallback={<VisualLoadingFallback />}>
            <VisualSequenceView block={block} />
          </Suspense>
        );
      case 'animated_steps':
        return (
          <Suspense key={block.id || `steps-${index}`} fallback={<VisualLoadingFallback />}>
            <EducationalStepsView block={block} />
          </Suspense>
        );
      case 'decision_scenario':
        return (
          <Suspense key={block.id || `decision-${index}`} fallback={<VisualLoadingFallback />}>
            <DecisionScenarioView block={block} />
          </Suspense>
        );
      case 'video':
        return <VideoPlayerBlockView key={block.id || `vid-${index}`} block={block} />;
      case 'quiz':
        return (
          <Suspense key={block.id || `quiz-${index}`} fallback={<VisualLoadingFallback />}>
            <QuizBlockView block={block} />
          </Suspense>
        );
      default:
        return <UnknownBlockView key={block.id || `unk-${index}`} block={block} />;
    }
  };

  return (
    <div className="space-y-2">
      {sortedBlocks.map((block, idx) => renderBlock(block, idx))}
    </div>
  );
};
