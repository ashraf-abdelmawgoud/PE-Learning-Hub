/**
 * kinematicTopicsConfig.ts
 * خطة الإنتاج المبدئية وهيكل موضوعات مقرر التحليل الحركي (الفرقة الرابعة)
 * 
 * المرجع الأكاديمي المعتمد للمقرر:
 * - الكتاب: مبادئ التحليل الحركي (نظري – تطبيقي)
 * - المؤلفة: د. رحاب عبدالمنعم الرشيدي
 * - سنة النشر: 2020م
 * 
 * تنبيه حوكمي وأكاديمي صارم:
 * - أعداد الموضوعات الواردة هنا (64 موضوعاً إجمالياً) هي أعداد تخطيطية مبدئية لجدولة الإنتاج
 *   (Provisional Production Plan) وليست أعداداً أكاديمية معتمدة ونهائية من الفهرس.
 * - يمنع منعاً باتاً اختراع عناوين موضوعات أو صياغة نصوص أو ملخصات أو أسئلة وهمية.
 * - يتم تفعيل الموضوعات الفردية تباعاً فور استلام وتدقيق فهرس كتاب المؤلفة الأصلي.
 */

import type { Topic, VideoBlock, ContentBlock, QuizBlock, AcademicReference } from '../../types';

export interface KinematicChapterProvisionalPlan {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  provisionalTopicsCount: number;
  isAcademicallyVerified: boolean;
  hasParentSectionsSupport: boolean;
  notes: string;
}

/**
 * خطة الإنتاج المبدئية للفصول الستة لمقرر التحليل الحركي (64 موضوعاً تخطيطياً)
 */
export const KINEMATIC_PROVISIONAL_PRODUCTION_PLAN: KinematicChapterProvisionalPlan[] = [
  {
    chapterId: 'chap-kin-concept',
    chapterNumber: 1,
    chapterTitle: 'الفصل الأول: مفهوم التحليل الحركي',
    provisionalTopicsCount: 12,
    isAcademicallyVerified: false,
    hasParentSectionsSupport: false,
    notes: 'خطة إنتاج مبدئية: 12 موضوعاً، بانتظار التحكيم والتدقيق من كتاب د. رحاب عبدالمنعم الرشيدي (2020م).',
  },
  {
    chapterId: 'chap-kin-types-levels',
    chapterNumber: 2,
    chapterTitle: 'الفصل الثاني: انواع ومستويات التحليل الحركي',
    provisionalTopicsCount: 5,
    isAcademicallyVerified: false,
    hasParentSectionsSupport: false,
    notes: 'خطة إنتاج مبدئية: 5 موضوعات، بانتظار التحكيم والتدقيق من كتاب د. رحاب عبدالمنعم الرشيدي (2020م).',
  },
  {
    chapterId: 'chap-kin-qual-quant-tasks',
    chapterNumber: 3,
    chapterTitle: 'الفصل الثالث: مهام التحليل الكيفي والكمي',
    provisionalTopicsCount: 31,
    isAcademicallyVerified: false,
    hasParentSectionsSupport: true,
    notes: 'خطة إنتاج مبدئية: 31 موضوعاً تتضمن هيكلية الأقسام الرئيسية والموضوعات الفرعية المتشعبة (Parent Sections & Nested Subtopics).',
  },
  {
    chapterId: 'chap-kin-match-analysis-models',
    chapterNumber: 4,
    chapterTitle: 'الفصل الرابع: نماذج تعليميه لتحليل المباريات الرياضية',
    provisionalTopicsCount: 6,
    isAcademicallyVerified: false,
    hasParentSectionsSupport: false,
    notes: 'خطة إنتاج مبدئية: 6 موضوعات، بانتظار التحكيم والتدقيق من كتاب د. رحاب عبدالمنعم الرشيدي (2020م).',
  },
  {
    chapterId: 'chap-kin-skill-analysis-models',
    chapterNumber: 5,
    chapterTitle: 'الفصل الخامس: بعض نماذج التحليل للمهارات الحركية',
    provisionalTopicsCount: 5,
    isAcademicallyVerified: false,
    hasParentSectionsSupport: false,
    notes: 'خطة إنتاج مبدئية: 5 موضوعات، بانتظار التحكيم والتدقيق من كتاب د. رحاب عبدالمنعم الرشيدي (2020م).',
  },
  {
    chapterId: 'chap-kin-lab-studies',
    chapterNumber: 6,
    chapterTitle: 'الفصل السادس: دراسات معملية للتدريب على نماذج تحليل المهارات لأجزائها التعليمية',
    provisionalTopicsCount: 5,
    isAcademicallyVerified: false,
    hasParentSectionsSupport: false,
    notes: 'خطة إنتاج مبدئية: 5 موضوعات، بانتظار التحكيم والتدقيق من كتاب د. رحاب عبدالمنعم الرشيدي (2020م).',
  },
];

/**
 * إجمالي عدد الموضوعات المبدئية المخططة (64 موضوعاً)
 */
export const TOTAL_KINEMATIC_PROVISIONAL_TOPICS = KINEMATIC_PROVISIONAL_PRODUCTION_PLAN.reduce(
  (sum, item) => sum + item.provisionalTopicsCount,
  0
);

/**
 * =========================================================================
 * بنية دعم الأقسام الرئيسية والموضوعات الفرعية (خاصة للفصل الثالث)
 * Parent Sections & Nested Subtopics Architecture
 * =========================================================================
 */
export interface KinematicParentSection {
  id: string;
  chapterId: string;
  title: string;
  order: number;
  description?: string;
  provisionalSubtopicsCount?: number;
}

/**
 * الأقسام الرئيسية التخطيطية للفصل الثالث (مهام التحليل الكيفي والكمي)
 * تدعم استيعاب الـ 31 موضوعاً فرعياً عند التحكيم
 */
export const CHAPTER_3_PROVISIONAL_PARENT_SECTIONS: KinematicParentSection[] = [
  {
    id: 'sec-kin-ch3-qualitative-tasks',
    chapterId: 'chap-kin-qual-quant-tasks',
    title: 'مهام وأسس التحليل الحركي الكيفي (Qualitative Analysis)',
    order: 1,
    description: 'يتضمن الأطر والمراحل التنظيمية للملاحظة البصرية والتقويم الفني والتشخيص الكيفي للأداء الحركي.',
    provisionalSubtopicsCount: 15,
  },
  {
    id: 'sec-kin-ch3-quantitative-tasks',
    chapterId: 'chap-kin-qual-quant-tasks',
    title: 'مهام وأدوات التحليل الحركي الكمي (Quantitative Analysis)',
    order: 2,
    description: 'يتضمن القياسات الكينماتيكية والكيناتيكية وأدوات التصوير المتطور واستخراج المتغيرات الرقمية للمهارة.',
    provisionalSubtopicsCount: 16,
  },
];

/**
 * واجهة إنشاء مسودة موضوع أكاديمي معتمد لمقرر التحليل الحركي
 * تدعم التكامل الكامل مع الملخص، الفيديو التعليمي، وبنك التقييم
 */
export interface KinematicTopicDraftInput {
  id: string;
  chapterId: string;
  title: string;
  order: number;
  description?: string;
  parentSectionId?: string;
  parentSectionTitle?: string;
  subtopicIndex?: number;
  academicReference?: AcademicReference;
  summary?: string;
  summaryBlocks?: ContentBlock[];
  videos?: VideoBlock[];
  video?: VideoBlock;
  quiz?: QuizBlock;
}

/**
 * دالة مساعدة معيارية لبناء كيان Topic مكتمل الإمكانيات والخصائص
 * دون فرض أي محتوى وهمي أو افتراضي
 */
export function buildKinematicTopic(input: KinematicTopicDraftInput): Topic {
  return {
    id: input.id,
    chapterId: input.chapterId,
    title: input.title,
    description: input.description || '',
    order: input.order,
    status: 'pending_content',
    lessons: [],
    parentSectionId: input.parentSectionId,
    parentSectionTitle: input.parentSectionTitle,
    subtopicIndex: input.subtopicIndex,
    academicReference: input.academicReference,
    summary: input.summary,
    summaryBlocks: input.summaryBlocks,
    videos: input.videos,
    video: input.video,
    quiz: input.quiz,
  };
}
