import React from 'react';
import type { Topic, ChapterSelfCheckQuestion } from '../../types/academic';
import { Award } from 'lucide-react';

export interface TopicQuizSectionProps {
  courseId: string;
  chapterId: string;
  topic: Topic;
  fallbackQuestions?: ChapterSelfCheckQuestion[];
  onComplete?: (score: number) => void;
}

/**
 * TopicQuizSection (Deprecated / Disabled)
 *
 * تم إيقاف وتعطيل تقويمات الموضوعات الفردية لتوحيد تجربة التقويم الأكاديمي
 * لتصبح حصرياً عبر «الاختبار الشامل للفصل» في نهاية كل فصل دراسي.
 * هذا المكون معطل لمنع أي ظهور لأسئلة فرعية أو أسئلة تقويم ذاتي احتياطية.
 */
export const TopicQuizSection: React.FC<TopicQuizSectionProps> = ({
  topic,
}) => {
  return (
    <div className="space-y-4 text-right" dir="rtl">
      <div className="bg-white rounded-3xl border border-[#D4E9DC] p-8 sm:p-12 text-center space-y-4 shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-[#E8F8EE] text-[#00C853] flex items-center justify-center mx-auto border border-[#D4E9DC]">
          <Award className="w-7 h-7" />
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h3 className="text-base sm:text-lg font-black text-[#173D2B]">
            التقويم موحد على مستوى الفصل الدراسي
          </h3>
          <p className="text-xs sm:text-sm text-[#486555] leading-relaxed">
            تم توحيد التقويم الأكاديمي لموضوع «{topic.title}» ليكون ضمن «الاختبار الشامل للفصل» في نهاية الفصل الدراسي، لقياس استيعاب المفاهيم والمخرجات بصورة تكاملية.
          </p>
        </div>
      </div>
    </div>
  );
};
