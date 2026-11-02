import React from 'react';
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
import { UnknownBlockView } from './blocks/UnknownBlockView';

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
