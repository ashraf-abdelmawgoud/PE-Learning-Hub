import type { TopicHeadingClassification } from '../../types/academic';

/**
 * =========================================================================
 * الهيكل الفني التنظيمي المعتمد للفصل الخامس (7 موضوعات)
 * المقرر: مناهج التربية الرياضية — الفرقة الرابعة
 * المؤلف: أ.د. هاني الدسوقي إبراهيم (العام الجامعي 2025/2026م)
 *
 * تصنيف العناوين والبيانات الوصفية التربوية:
 * - جميع موضوعات الفصل الخامس (1 إلى 7) مصنفة كعناوين تنظيمية تعليمية
 *   (educational_organizational) مستخلصة بدقة وتنظيم من متن الفصل الخامس،
 *   تغطي المدخل التأسيسي، المبادئ التربوية والإدارية، تنظيمات المناهج الأربعة،
 *   جدول المقارنة الشامل، والخصائص الثمانية لمنهاج التربية الرياضية الجيد.
 * =========================================================================
 */

export interface TopicMetadataDefinition {
  id: string;
  chapterId: string;
  order: number;
  title: string;
  headingClassification: TopicHeadingClassification;
  description: string;
}

export const CHAPTER_5_SEVEN_TOPICS_METADATA: readonly TopicMetadataDefinition[] = [
  {
    id: 'top-ch5-curriculum-design-foundations',
    chapterId: 'chap-curriculum-designs',
    order: 1,
    title: 'المدخل التأسيسي لتصميم المنهاج: المفاهيم، المصطلحات، والمبادئ الثمانية للتصميم العلمي',
    headingClassification: 'educational_organizational',
    description:
      'المفهوم الأكاديمي واللغوي للتصميم وتداخله مع مصطلحات بناء وهندسة وتحديث المناهج، تعريفه الاصطلاحي، والمبادئ الثمانية الأساسية للتصميم العلمي للمنهج المدرسي.',
  },
  {
    id: 'top-ch5-design-principles-levels',
    chapterId: 'chap-curriculum-designs',
    order: 2,
    title: 'المبادئ التربوية والمستويات الإدارية لتصميم المنهج المدرسي',
    headingClassification: 'educational_organizational',
    description:
      'المبادئ التربوية الستة لتصميم المنهج حسب مرعي وآخرون (1993)، ومستويات تصميم المنهج الدراسي إدارياً: المستوى المركزي القومي والمستويات الأدنى اللامركزية.',
  },
  {
    id: 'top-ch5-subject-matter-curricula',
    chapterId: 'chap-curriculum-designs',
    order: 3,
    title: 'مناهج المواد الدراسية: الفلسفة، الحجج، الخصائص، الأنواع، والإيجابيات والسلبيات',
    headingClassification: 'educational_organizational',
    description:
      'فلسفة مناهج المواد الدراسية، الحجج الخمس لأنصارها، الخصائص الست، أنواعها (المنفصلة والمرتبطة)، والموازنة التحليلية بين ميزتيها وسلبياتها الست.',
  },
  {
    id: 'top-ch5-activity-curriculum',
    chapterId: 'chap-curriculum-designs',
    order: 4,
    title: 'منهج النشاط: المفهوم، الخصائص، الأنواع، والمتطلبات والإيجابيات والسلبيات',
    headingClassification: 'educational_organizational',
    description:
      'فلسفة منهج النشاط المتمركز حول المتعلم، خصائصه الست، نوعاه (المشروعات ومواقف الحياة)، المتطلبات الخمسة لتطبيقه، ومزاياه الثلاث وسلبياته الخمس.',
  },
  {
    id: 'top-ch5-core-and-unit-curriculum',
    chapterId: 'chap-curriculum-designs',
    order: 5,
    title: 'المنهج المحوري ومنهج الوحدة الدراسية: الفلسفة والأسس والمقارنة',
    headingClassification: 'educational_organizational',
    description:
      'المنهج المحوري المتمركز حول حاجات ومشكلات المتعلمين (أسسه الأربعة وإيجابياته وسلبياته)، ومنهج الوحدة الدراسية (أسسه الستة وإيجابياته وسلبياته).',
  },
  {
    id: 'top-ch5-technological-curriculum-comparison',
    chapterId: 'chap-curriculum-designs',
    order: 6,
    title: 'المنهج التكنولوجي والمقارنة بين تنظيمات المناهج',
    headingClassification: 'educational_organizational',
    description:
      'مفهوم المنهج التكنولوجي وأسسه الخمسة ونوعاه (الخطي والمتفرع) وإيجابياته وسلبياته، مع جدول المقارنة الشامل ذي الأبعاد العشرة بين تنظيمات المناهج.',
  },
  {
    id: 'top-ch5-pe-curriculum-characteristics',
    chapterId: 'chap-curriculum-designs',
    order: 7,
    title: 'الخصائص الجوهرية الثمانية لمنهاج التربية الرياضية الجيد',
    headingClassification: 'educational_organizational',
    description:
      'الخصائص الجوهرية الثمانية لمنهاج التربية الرياضية الجيد، تنويع الأنشطة الرياضية، وأسباب فاعلية معلم التربية الرياضية في التوجيه والإرشاد السلوكي.',
  },
];

/**
 * دالة مساعدة للتحقق من سلامة وصحة هيكل الموضوعات السبعة للفصل الخامس
 */
export function verifyChapter5SevenTopicsStructure(): {
  isValid: boolean;
  totalTopics: number;
  educationalOrganizationalCount: number;
  originalAuthorCount: number;
  topics: readonly TopicMetadataDefinition[];
} {
  const total = CHAPTER_5_SEVEN_TOPICS_METADATA.length;
  const educationalCount = CHAPTER_5_SEVEN_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'educational_organizational'
  ).length;
  const authorCount = CHAPTER_5_SEVEN_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'original_author'
  ).length;

  const isValid =
    total === 7 &&
    educationalCount === 7 &&
    authorCount === 0 &&
    CHAPTER_5_SEVEN_TOPICS_METADATA.every((t, idx) => t.order === idx + 1);

  return {
    isValid,
    totalTopics: total,
    educationalOrganizationalCount: educationalCount,
    originalAuthorCount: authorCount,
    topics: CHAPTER_5_SEVEN_TOPICS_METADATA,
  };
}
