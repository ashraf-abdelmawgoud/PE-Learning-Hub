import React, { useState } from 'react';
import type { InteractiveDiagramBlock } from '../../../types';
import { Network, RotateCcw, Info, CheckCircle2 } from 'lucide-react';

interface InteractiveDiagramViewProps {
  block: InteractiveDiagramBlock;
}

export const InteractiveDiagramView: React.FC<InteractiveDiagramViewProps> = ({ block }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(
    block.initialSelectedNodeId || null
  );

  const selectedNode = block.nodes.find((n) => n.id === selectedNodeId) || null;

  const handleNodeClick = (nodeId: string) => {
    setSelectedNodeId((prev) => (prev === nodeId ? null : nodeId));
  };

  const handleKeyDown = (e: React.KeyboardEvent, nodeId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNodeClick(nodeId);
    }
  };

  const handleReset = () => {
    setSelectedNodeId(null);
  };

  // Helper to get coordinates for connection line
  const getNodeCenter = (nodeId: string): { x: number; y: number } | null => {
    const node = block.nodes.find((n) => n.id === nodeId);
    if (!node) return null;
    const w = node.width || 120;
    const h = node.height || 60;
    return { x: node.x + w / 2, y: node.y + h / 2 };
  };

  return (
    <figure
      className="my-8 rounded-3xl bg-white border border-[#D4E9DC] p-5 sm:p-7 shadow-xs overflow-hidden transition-all"
      aria-labelledby={`diag-title-${block.id}`}
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#D4E9DC]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center shrink-0 border border-[#D4E9DC]">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h3
              id={`diag-title-${block.id}`}
              className="text-base sm:text-lg font-black text-[#173D2B]"
            >
              {block.title}
            </h3>
            {block.caption && (
              <p className="text-xs text-[#6C8577] mt-0.5">{block.caption}</p>
            )}
          </div>
        </div>

        {/* Reset button */}
        {selectedNodeId && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#F4FFF7] hover:bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC] transition-colors self-start sm:self-auto cursor-pointer"
            aria-label="إعادة ضبط تحديد المخطط"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#00C853]" />
            <span>إعادة ضبط التحديد</span>
          </button>
        )}
      </div>

      {/* SVG Canvas Container */}
      <div className="relative w-full rounded-2xl bg-[#F8FCFF] border border-[#D9EAF7]/70 p-2 sm:p-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${block.viewBoxWidth} ${block.viewBoxHeight}`}
          className="w-full h-auto max-h-[460px] mx-auto select-none"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={block.title}
        >
          <defs>
            {/* Arrow Marker */}
            <marker
              id={`arrow-${block.id}`}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563EB" />
            </marker>

            {/* Inactive Arrow Marker */}
            <marker
              id={`arrow-muted-${block.id}`}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#94A3B8" />
            </marker>
          </defs>

          {/* Connections / Lines */}
          <g className="connections-layer">
            {block.connections.map((conn) => {
              const fromCenter = getNodeCenter(conn.from);
              const toCenter = getNodeCenter(conn.to);
              if (!fromCenter || !toCenter) return null;

              const isConnectedToSelected =
                selectedNodeId === conn.from || selectedNodeId === conn.to;
              const hasSelection = selectedNodeId !== null;

              const strokeColor = isConnectedToSelected
                ? '#2563EB'
                : hasSelection
                ? '#CBD5E1'
                : '#94A3B8';

              const strokeWidth = isConnectedToSelected ? 3 : 1.75;
              const strokeDasharray =
                conn.style === 'dashed'
                  ? '6 4'
                  : conn.style === 'dotted'
                  ? '2 3'
                  : undefined;

              const midX = (fromCenter.x + toCenter.x) / 2;
              const midY = (fromCenter.y + toCenter.y) / 2;

              return (
                <g key={conn.id} className="transition-all duration-200">
                  <line
                    x1={fromCenter.x}
                    y1={fromCenter.y}
                    x2={toCenter.x}
                    y2={toCenter.y}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    markerEnd={
                      conn.arrow
                        ? isConnectedToSelected
                          ? `url(#arrow-${block.id})`
                          : `url(#arrow-muted-${block.id})`
                        : undefined
                    }
                  />
                  {conn.label && (
                    <g transform={`translate(${midX}, ${midY})`}>
                      <rect
                        x="-40"
                        y="-10"
                        width="80"
                        height="20"
                        rx="6"
                        fill="#FFFFFF"
                        stroke={strokeColor}
                        strokeWidth="1"
                      />
                      <text
                        textAnchor="middle"
                        y="4"
                        fontSize="10"
                        fontWeight="bold"
                        fill="#334155"
                        fontFamily="Cairo, sans-serif"
                      >
                        {conn.label}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </g>

          {/* Annotations */}
          {block.annotations && (
            <g className="annotations-layer">
              {block.annotations.map((ann) => (
                <g key={ann.id} transform={`translate(${ann.x}, ${ann.y})`}>
                  <rect
                    x="0"
                    y="0"
                    width="120"
                    height="24"
                    rx="6"
                    fill="#EFF6FF"
                    stroke="#BFDBFE"
                    strokeWidth="1"
                  />
                  <text
                    x="60"
                    y="16"
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="600"
                    fill="#1D4ED8"
                    fontFamily="Cairo, sans-serif"
                  >
                    {ann.text}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* Nodes */}
          <g className="nodes-layer">
            {block.nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              const hasSelection = selectedNodeId !== null;
              const isDimmed = hasSelection && !isSelected;

              const width = node.width || 130;
              const height = node.height || 64;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => handleNodeClick(node.id)}
                  onKeyDown={(e) => handleKeyDown(e, node.id)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`عنصر: ${node.label}. ${node.description}`}
                  className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-transform duration-150"
                  style={{
                    transformOrigin: `${width / 2}px ${height / 2}px`,
                  }}
                >
                  {/* Invisible enlarged hit target for mobile */}
                  <rect
                    x="-8"
                    y="-8"
                    width={width + 16}
                    height={height + 16}
                    fill="transparent"
                  />

                  {/* Main Node Body */}
                  <rect
                    x="0"
                    y="0"
                    width={width}
                    height={height}
                    rx="16"
                    fill={
                      isSelected
                        ? '#2563EB'
                        : isDimmed
                        ? '#F8FAFC'
                        : '#FFFFFF'
                    }
                    stroke={
                      isSelected
                        ? '#1D4ED8'
                        : isDimmed
                        ? '#E2E8F0'
                        : '#93C5FD'
                    }
                    strokeWidth={isSelected ? 3 : 1.75}
                    filter={
                      isSelected
                        ? 'drop-shadow(0 4px 10px rgba(37,99,235,0.3))'
                        : 'drop-shadow(0 1px 3px rgba(0,0,0,0.04))'
                    }
                    className="transition-all duration-200"
                  />

                  {/* Node Category Badge */}
                  {node.category && (
                    <rect
                      x="10"
                      y="-8"
                      width="60"
                      height="16"
                      rx="6"
                      fill={isSelected ? '#1E40AF' : '#E0F2FE'}
                      stroke={isSelected ? '#93C5FD' : '#BAE6FD'}
                      strokeWidth="1"
                    />
                  )}
                  {node.category && (
                    <text
                      x="40"
                      y="4"
                      textAnchor="middle"
                      fontSize="9"
                      fontWeight="bold"
                      fill={isSelected ? '#FFFFFF' : '#0369A1'}
                      fontFamily="Cairo, sans-serif"
                    >
                      {node.category}
                    </text>
                  )}

                  {/* Node Main Label */}
                  <text
                    x={width / 2}
                    y={node.sublabel ? height / 2 - 4 : height / 2 + 5}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="800"
                    fill={
                      isSelected
                        ? '#FFFFFF'
                        : isDimmed
                        ? '#64748B'
                        : '#172B4D'
                    }
                    fontFamily="Cairo, sans-serif"
                  >
                    {node.label}
                  </text>

                  {/* Node Sublabel */}
                  {node.sublabel && (
                    <text
                      x={width / 2}
                      y={height / 2 + 14}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="600"
                      fill={
                        isSelected
                          ? '#E0F2FE'
                          : isDimmed
                          ? '#94A3B8'
                          : '#64748B'
                      }
                      fontFamily="Cairo, sans-serif"
                    >
                      {node.sublabel}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Selected Node Details Panel / Interaction Callout */}
      <div className="mt-5 transition-all">
        {selectedNode ? (
          <div
            className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-[#E8F8EE] to-[#F4FFF7] border border-[#00C853]/40 space-y-3"
            role="region"
            aria-live="polite"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C853] animate-pulse" />
                <h4 className="text-base font-black text-[#173D2B]">
                  {selectedNode.label}
                </h4>
                {selectedNode.category && (
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E8F8EE] text-[#173D2B] border border-[#D4E9DC]">
                    {selectedNode.category}
                  </span>
                )}
              </div>

              {selectedNode.details?.academicTerm && (
                <span className="text-xs font-mono font-bold text-[#173D2B] bg-[#E8F8EE] px-2.5 py-1 rounded-lg border border-[#D4E9DC]">
                  {selectedNode.details.academicTerm}
                </span>
              )}
            </div>

            <p className="text-sm text-[#486555] leading-relaxed">
              {selectedNode.description}
            </p>

            {/* Key details if available */}
            {selectedNode.details?.keyPoints && selectedNode.details.keyPoints.length > 0 && (
              <div className="pt-2 border-t border-[#D4E9DC] space-y-1.5">
                <span className="text-xs font-bold text-[#173D2B] block">
                  النقاط والخصائص الأساسية:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#486555]">
                  {selectedNode.details.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C853] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-2xl p-4 bg-[#F4FFF7] border border-dashed border-[#D4E9DC] flex items-center justify-center gap-2 text-xs text-[#6C8577]">
            <Info className="w-4 h-4 text-[#00C853] shrink-0" />
            <span>
              انقر على أي عنصر في المخطط أعلاه أو استخدم مفتاح Tab لعرض تفاصيله وعلاقاته المباشرة.
            </span>
          </div>
        )}
      </div>
    </figure>
  );
};
