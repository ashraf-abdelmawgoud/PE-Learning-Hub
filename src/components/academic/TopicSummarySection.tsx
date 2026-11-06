import React from 'react';
import type { Topic, ContentBlock } from '../../types/academic';
import { LessonRenderer } from './LessonRenderer';
import { FileText, BookOpen, Info } from 'lucide-react';

interface TopicSummarySectionProps {
  topic: Topic;
}

function renderFormattedInline(text: string): React.ReactNode[] {
  // Parse markdown bold markers: **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-black text-[#173D2B]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

interface ParsedSummaryBlock {
  type: 'heading' | 'table' | 'ul' | 'ol' | 'callout' | 'paragraph';
  content: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

function parseSummaryMarkdown(markdown: string): ParsedSummaryBlock[] {
  const lines = markdown.split('\n');
  const blocks: ParsedSummaryBlock[] = [];
  let currentList: { type: 'ul' | 'ol'; items: string[] } | null = null;
  let currentTable: string[] | null = null;
  let currentPara: string[] = [];

  function flushParagraph() {
    if (currentPara.length > 0) {
      const text = currentPara.join(' ').trim();
      if (text) {
        if (text.startsWith('**تنبيه:**')) {
          blocks.push({ type: 'callout', content: text });
        } else {
          blocks.push({ type: 'paragraph', content: text });
        }
      }
      currentPara = [];
    }
  }

  function flushList() {
    if (currentList) {
      blocks.push({ type: currentList.type, content: '', items: currentList.items });
      currentList = null;
    }
  }

  function flushTable() {
    if (currentTable && currentTable.length >= 2) {
      const headerLine = currentTable[0];
      const dataLines = currentTable.slice(1).filter((l) => !l.includes('---'));
      const parseCells = (line: string) =>
        line
          .split('|')
          .map((c) => c.trim())
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);

      const headers = parseCells(headerLine);
      const rows = dataLines.map((l) => parseCells(l));
      blocks.push({ type: 'table', content: '', headers, rows });
      currentTable = null;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }

    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      flushTable();
      blocks.push({ type: 'heading', content: line.slice(4).trim() });
      continue;
    }

    if (line.startsWith('|') && line.endsWith('|')) {
      flushParagraph();
      flushList();
      if (!currentTable) currentTable = [];
      currentTable.push(line);
      continue;
    } else if (currentTable) {
      flushTable();
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      flushParagraph();
      flushTable();
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(line.replace(/^[-*]\s+/, '').trim());
      continue;
    }

    const matchNumbered = line.match(/^(\d+)\.\s+(.*)/);
    if (matchNumbered) {
      flushParagraph();
      flushTable();
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(matchNumbered[2].trim());
      continue;
    }

    // Normal paragraph text
    flushList();
    flushTable();
    currentPara.push(line);
  }

  flushParagraph();
  flushList();
  flushTable();

  return blocks;
}

export const TopicSummarySection: React.FC<TopicSummarySectionProps> = ({ topic }) => {
  // 1. If approved text summary is provided, render it with generous RTL typography & structure
  if (topic.summary && topic.summary.trim().length > 0) {
    const blocks = parseSummaryMarkdown(topic.summary);
    return (
      <div className="space-y-6 text-right" dir="rtl">
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4E9DC]/70 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E8F8EE] text-[#00C853] flex items-center justify-center border border-[#D4E9DC]">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-sm font-black text-[#173D2B]">
                الملخص الأكاديمي المعتمد
              </span>
              {topic.headingClassification && (
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border bg-[#F4FFF7] border-[#D4E9DC] text-[#486555]">
                  {topic.headingClassification === 'educational_organizational'
                    ? 'عنوان تنظيمي تربوي'
                    : 'عنوان المؤلف الأصلي'}
                </span>
              )}
            </div>

            <span className="text-xs font-bold text-[#6C8577]">
              كتاب المقرر &bull; {topic.title}
            </span>
          </div>

          <div className="space-y-4">
            {blocks.map((block, bIdx) => {
              if (block.type === 'heading') {
                return (
                  <div key={bIdx} className="pt-4 pb-1 border-b border-[#D4E9DC]/60 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00C853] shrink-0" />
                    <h3 className="text-base sm:text-lg font-black text-[#173D2B]">
                      {renderFormattedInline(block.content)}
                    </h3>
                  </div>
                );
              }

              if (block.type === 'table' && block.headers && block.rows) {
                return (
                  <div key={bIdx} className="overflow-x-auto my-4 rounded-2xl border border-[#D4E9DC] bg-[#FAFDFB]">
                    <table className="w-full text-right text-xs sm:text-sm border-collapse">
                      <thead className="bg-[#E8F8EE] border-b border-[#D4E9DC] text-[#173D2B]">
                        <tr>
                          {block.headers.map((h, i) => (
                            <th key={i} className="py-3 px-4 font-black">
                              {renderFormattedInline(h)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#D4E9DC]/60 text-[#173D2B]">
                        {block.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#F4FFF7]/40'}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-2.5 px-4 leading-relaxed font-medium">
                                {renderFormattedInline(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }

              if (block.type === 'ul' && block.items) {
                return (
                  <ul key={bIdx} className="space-y-2 pr-1 my-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#173D2B] leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-[#00C853] shrink-0 mt-2" />
                        <span className="flex-1">{renderFormattedInline(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (block.type === 'ol' && block.items) {
                return (
                  <ol key={bIdx} className="space-y-2 pr-1 my-2">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-[#173D2B] leading-relaxed">
                        <span className="w-5 h-5 rounded-md bg-[#E8F8EE] text-[#00A844] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#D4E9DC]">
                          {i + 1}
                        </span>
                        <span className="flex-1">{renderFormattedInline(item)}</span>
                      </li>
                    ))}
                  </ol>
                );
              }

              if (block.type === 'callout') {
                return (
                  <div key={bIdx} className="my-4 p-4 rounded-2xl bg-[#E8F8EE] border border-[#00C853]/40 text-xs sm:text-sm text-[#173D2B] flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#00A844] shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                      {renderFormattedInline(block.content)}
                    </div>
                  </div>
                );
              }

              return (
                <p key={bIdx} className="text-sm sm:text-base text-[#173D2B] leading-loose">
                  {renderFormattedInline(block.content)}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 2. If structured summary blocks are provided
  let blocks: ContentBlock[] = [];
  if (topic.summaryBlocks && topic.summaryBlocks.length > 0) {
    blocks = topic.summaryBlocks;
  } else if (topic.lessons && topic.lessons.length > 0) {
    blocks = topic.lessons.flatMap((lesson) => lesson.blocks || []);
  }

  if (blocks.length > 0) {
    return (
      <div className="space-y-6 text-right" dir="rtl">
        <div className="bg-white rounded-3xl border border-[#D4E9DC] p-6 sm:p-10 shadow-xs space-y-6 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4E9DC]/70 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E8F8EE] text-[#00C853] flex items-center justify-center border border-[#D4E9DC]">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-sm font-black text-[#173D2B]">
                الشرح والملخص المكتوب المعتمد
              </span>
            </div>

            <span className="text-xs font-bold text-[#6C8577]">
              {blocks.length} كتل تعليمية منظمة
            </span>
          </div>

          <article className="prose prose-emerald max-w-none">
            <LessonRenderer blocks={blocks} />
          </article>
        </div>
      </div>
    );
  }

  // 3. Unavailable state if no written content has been prepared yet
  return (
    <div className="space-y-4 text-right" dir="rtl">
      <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 sm:p-12 text-center space-y-4 shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center mx-auto border border-[#D4E9DC]">
          <FileText className="w-7 h-7" />
        </div>

        <div className="space-y-1.5 max-w-md mx-auto">
          <h3 className="text-base sm:text-lg font-black text-[#173D2B]">
            الملخص المكتوب قيد الإعداد الأكاديمي
          </h3>
          <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
            يجري حالياً مراجعة وتجهيز المحتوى العلمي المكتوب لهذا الموضوع استناداً إلى كتاب المقرر المعتمد، وسيتاح قريباً.
          </p>
        </div>
      </div>
    </div>
  );
};
