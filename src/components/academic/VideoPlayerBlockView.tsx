/**
 * VideoPlayerBlockView.tsx
 * Reusable, responsive, accessible educational video player for OloomSport.
 *
 * Design & Behavior Principles:
 * - Sport Energy aesthetic, Cairo typography, full Arabic RTL.
 * - Responsive 16:9 aspect ratio (`aspect-video`), no layout shift.
 * - High-performance facade: renders a lightweight preview thumbnail before user interaction.
 * - Loads the YouTube iframe strictly upon user request (Play button).
 * - Privacy-first: uses `youtube-nocookie.com`, zero tracking before interaction.
 * - Resilient fallback: accessible link to open on YouTube if embedding is unavailable.
 * - Seamless integration with NotebookLM-produced educational summaries.
 */

import React, { useState } from 'react';
import type { VideoBlock } from '../../types';
import {
  isValidYouTubeVideoId,
  getYouTubeEmbedUrl,
  getYouTubeWatchUrl,
  getYouTubeThumbnailUrl,
} from '../../utils/videoUtils';
import { Play, Video, ExternalLink, BookOpen, AlertCircle, ShieldCheck } from 'lucide-react';

export interface VideoPlayerBlockViewProps {
  block: VideoBlock;
}

export const VideoPlayerBlockView: React.FC<VideoPlayerBlockViewProps> = ({ block }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [thumbnailError, setThumbnailError] = useState<boolean>(false);

  // Validate the video identifier
  const isValid = isValidYouTubeVideoId(block.videoId);
  const sanitizedVideoId = block.videoId?.trim() || '';

  const embedUrl = block.embedUrl
    ? `${block.embedUrl}${block.embedUrl.includes('?') ? '&' : '?'}autoplay=1&rel=0&modestbranding=1&hl=${block.captionLanguage || 'ar'}`
    : isValid
    ? getYouTubeEmbedUrl(sanitizedVideoId, { autoplay: true, lang: block.captionLanguage || 'ar' })
    : '';
  const watchUrl = isValid ? getYouTubeWatchUrl(sanitizedVideoId) : '';
  const thumbnailUrl = isValid ? getYouTubeThumbnailUrl(sanitizedVideoId, 'hq') : '';

  return (
    <div
      className="bg-white rounded-3xl border border-[#D4E9DC] p-5 sm:p-7 shadow-xs space-y-4 my-6 text-right transition-all"
      dir="rtl"
    >
      {/* Header Info */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173D2B] bg-[#E8F8EE] px-3 py-1 rounded-full border border-[#D4E9DC]">
              <Video className="w-3.5 h-3.5 text-[#00C853]" />
              <span>شرح مرئي تعليمي</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6C8577] bg-gray-50 px-2 py-0.5 rounded-md border border-gray-200">
              <ShieldCheck className="w-3 h-3 text-[#00C853]" />
              <span>خصوصية آمنة</span>
            </span>
          </div>

          <span className="text-[11px] font-bold text-[#6C8577]">
            مشغل الفيديو الأكاديمي
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-[#173D2B] leading-snug">
          {block.title}
        </h3>

        {block.description && (
          <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
            {block.description}
          </p>
        )}
      </div>

      {/* 16:9 Video Canvas */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#071C12] border border-[#D4E9DC] group">
        {!isValid ? (
          /* Error State for Invalid Video ID */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-red-950/80 space-y-2">
            <AlertCircle className="w-10 h-10 text-red-400" />
            <h4 className="text-sm font-bold text-red-200">معرف الفيديو غير صالح</h4>
            <p className="text-xs text-red-300 max-w-sm">
              تعذر تحميل الفيديو التعليمي بسبب عدم صحة معرف YouTube المسجل.
            </p>
          </div>
        ) : !isPlaying ? (
          /* Lightweight Facade Preview */
          <div className="relative w-full h-full">
            {!thumbnailError ? (
              <img
                src={thumbnailUrl}
                alt={block.title}
                onError={() => setThumbnailError(true)}
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            ) : (
              /* Fallback academic gradient poster */
              <div className="w-full h-full bg-gradient-to-br from-[#071C12] via-[#123E27] to-[#071C12] flex items-center justify-center">
                <Video className="w-16 h-16 text-[#00C853]/40" />
              </div>
            )}

            {/* Dark overlay with play action */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-200 flex flex-col items-center justify-center p-4">
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`تشغيل الفيديو التعليمي: ${block.title}`}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00C853] text-[#071C12] flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#39E66D] active:scale-95 transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#00C853]/50"
              >
                <Play className="w-8 h-8 fill-current translate-x-[-2px]" />
              </button>

              <span className="mt-3 text-xs sm:text-sm font-bold text-white drop-shadow-md">
                انقر لبدء المشاهدة
              </span>

              <div className="absolute bottom-3 right-3 text-[10px] sm:text-xs text-white/90 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00C853]" />
                <span>{block.embedUrl ? 'مشغل YouTube معتمد' : 'مشغل محمي (youtube-nocookie)'}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Active Embed Iframe */
          <iframe
            src={embedUrl}
            title={block.title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>

      {/* Footer Details: Academic Citation and Fallback External Link */}
      <div className="space-y-2 pt-1">
        {block.sourceReference && (
          <div className="flex items-start gap-2.5 text-xs text-[#486555] bg-[#F4FFF7] p-3 rounded-xl border border-[#D4E9DC]">
            <BookOpen className="w-4 h-4 text-[#00C853] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-[#173D2B]">المرجع الأكاديمي للشرح المرئي:</span>
              <p className="leading-relaxed">{block.sourceReference}</p>
            </div>
          </div>
        )}

        {isValid && (
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173D2B] hover:text-[#00C853] transition-colors focus:outline-hidden focus:underline"
            >
              <span>مشاهدة الفيديو على YouTube مباشرة (في حال تعذر التشغيل)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="text-[11px] text-[#6C8577]">
              لا يتم تخزين أي ملفات وسائط ثقيلة داخل خوادم المنصة
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
