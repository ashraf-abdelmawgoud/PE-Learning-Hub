import React, { useState } from 'react';
import type { VideoBlock } from '../../types/academic';
import { VideoPlayerBlockView } from './VideoPlayerBlockView';
import { Video, Film, CheckCircle2 } from 'lucide-react';

interface TopicVideoSectionProps {
  topicTitle: string;
  videos?: VideoBlock[];
  video?: VideoBlock;
}

export const TopicVideoSection: React.FC<TopicVideoSectionProps> = ({
  topicTitle,
  videos,
  video,
}) => {
  // Aggregate videos strictly if provided
  const videoList: VideoBlock[] = [];
  if (videos && videos.length > 0) {
    videoList.push(...videos);
  } else if (video) {
    videoList.push(video);
  }

  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);

  // If NO video is provided, render clean unavailable state
  if (videoList.length === 0) {
    return (
      <div className="space-y-4 text-right" dir="rtl">
        <div className="relative w-full aspect-video rounded-3xl bg-white border border-[#D4E9DC] p-6 sm:p-10 shadow-xs flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center border border-[#D4E9DC]">
            <Film className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <div className="space-y-1.5 max-w-md">
            <h3 className="text-base sm:text-lg font-black text-[#173D2B]">
              الفيديو التعليمي قيد التسجيل والإعداد
            </h3>
            <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
              لم يتم رفع فيديو تعليمي لموضوع «{topicTitle}» حتى الآن. يمكنك متابعة الشرح الأكاديمي المكتوب في تبويب «الملخص المكتوب».
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#6C8577] bg-[#F4FFF7] px-3 py-1 rounded-full border border-[#D4E9DC]">
            <Video className="w-3.5 h-3.5 text-[#00C853]" />
            <span>سيتم توفير الشرح المرئي بدقة 1080p فور اكتمال إنتاجه</span>
          </div>
        </div>
      </div>
    );
  }

  // If multiple videos exist, show tab selector
  const activeVideo = videoList[activeVideoIndex] || videoList[0];

  return (
    <div className="space-y-4 text-right" dir="rtl">
      {/* Multiple Videos Selector if > 1 */}
      {videoList.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {videoList.map((v, idx) => (
            <button
              key={v.id || idx}
              type="button"
              onClick={() => setActiveVideoIndex(idx)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeVideoIndex === idx
                  ? 'bg-[#00C853] text-[#071C12] font-black shadow-xs'
                  : 'bg-white text-[#173D2B] border border-[#D4E9DC] hover:bg-[#F4FFF7]'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>فيديو {idx + 1}: {v.title || `الجزء ${idx + 1}`}</span>
              {activeVideoIndex === idx && <CheckCircle2 className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      )}

      {/* Responsive 16:9 Player */}
      <VideoPlayerBlockView block={activeVideo} />
    </div>
  );
};
