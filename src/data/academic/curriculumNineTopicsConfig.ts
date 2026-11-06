import type { TopicHeadingClassification } from '../../types/academic';

/**
 * =========================================================================
 * الهيكل الفني التنظيمي المعتمد للفصل الأول (9 موضوعات)
 * المقرر: مناهج التربية الرياضية — الفرقة الرابعة
 * المؤلف: أ.د. هاني الدسوقي إبراهيم (العام الجامعي 2025/2026م)
 *
 * تصنيف العناوين والبيانات الوصفية التربوية:
 * - الموضوعات من 1 إلى 5: عناوين تنظيمية تربوية (educational_organizational)
 *   مستخلصة تنظيمياً من مقدمة الكتاب لتحسين مسار التعلم وتجربة الطالب.
 * - الموضوعات من 6 إلى 9: عناوين المؤلف الأصلي (original_author)
 *   محفوظة نصياً ودقيقاً كما خطها مؤلف الكتاب في الفهرس والمتن.
 *
 * قاعدة الأمان والموثوقية الأكاديمية:
 * هذا الهيكل يمثل البنية الفنية الجاهزة للحقن فور تزويد المنصة بملف الملخصات
 * الأكاديمية المعتمدة للموضوعات التسعة مفصولة وخالية من أرقام الصفحات المطبوعة.
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

export const CHAPTER_1_NINE_TOPICS_METADATA: readonly TopicMetadataDefinition[] = [
  {
    id: 'top-ch1-curriculum-comprehensive-dev',
    chapterId: 'chap-curriculum-intro',
    order: 1,
    title: 'المنهج الدراسي ودور التربية الرياضية في التنمية الشاملة',
    headingClassification: 'educational_organizational',
    description: 'المنهج كأداة لتحقيق الأهداف التربوية، ومدخلات تقويم المنهج الأربعة، والغاية من التربية الرياضية في تحقيق التنمية المتكاملة (بدنياً وصحياً ومهارياً واجتماعياً).',
  },
  {
    id: 'top-ch1-tech-change-self-learning',
    chapterId: 'chap-curriculum-intro',
    order: 2,
    title: 'التغيرات العلمية والتكنولوجية والتحول نحو التعلم الذاتي',
    headingClassification: 'educational_organizational',
    description: 'أثر التطورات العلمية والتكنولوجية ومفهوم «الموجة الثالثة» على تطوير مناهج التربية الرياضية والتحول إلى التعلم الذاتي.',
  },
  {
    id: 'top-ch1-modern-role-teacher-learner',
    chapterId: 'chap-curriculum-intro',
    order: 3,
    title: 'الدور الحديث لمعلم التربية الرياضية والمتعلم',
    headingClassification: 'educational_organizational',
    description: 'تحول دور المعلم من مجرد ناقل للمعلومات إلى موجه ومرشد ومتابع، وانتقال المتعلم من التلقي السلبي إلى المشاركة الفاعلة.',
  },
  {
    id: 'top-ch1-curriculum-planning-adaptive',
    chapterId: 'chap-curriculum-intro',
    order: 4,
    title: 'تخطيط مناهج التربية الرياضية والمناهج التكيفية',
    headingClassification: 'educational_organizational',
    description: 'التخطيط التعاوني وقاعدة «مركزية الأهداف ولا مركزية المحتوى»، ومرونة المناهج التكيفية لرعاية الفئات الخاصة والموهوبين.',
  },
  {
    id: 'top-ch1-tech-computers-in-curriculum',
    chapterId: 'chap-curriculum-intro',
    order: 5,
    title: 'استخدام التكنولوجيا والحاسب الآلي في مناهج التربية الرياضية',
    headingClassification: 'educational_organizational',
    description: 'الأدوار الأربعة للحاسب الآلي في المنهج، وتطبيقات الوسائط المتعددة والفيديو التفاعلي وشبكات الاتصال في تعليم المهارات الرياضية.',
  },
  {
    id: 'top-ch1-nature',
    chapterId: 'chap-curriculum-intro',
    order: 6,
    title: 'أولًا: ماهية المنهج',
    headingClassification: 'original_author',
    description: 'المنهج أداة التربية الأساسية، أصله اللاتيني Curriculum، ومعناه التربوي وصلته بالهدف والتقويم والحياة الحاضرة للمتعلم.',
  },
  {
    id: 'top-ch1-trad-vs-mod',
    chapterId: 'chap-curriculum-intro',
    order: 7,
    title: 'تعريفات المناهج قديمًا وحديثًا',
    headingClassification: 'original_author',
    description: 'المفهوم التقليدي للمنهج (المواد الدراسية والمعرفة الثابتة) مقابل المفهوم الحديث (البحث المنظم والخبرات الموجهة تحت إشراف المدرسة).',
  },
  {
    id: 'top-ch1-definitions',
    chapterId: 'chap-curriculum-intro',
    order: 8,
    title: 'تعريفات المنهج',
    headingClassification: 'original_author',
    description: 'الصيغ الأربع المعتمدة لتعريف المنهج في الكتاب (المقررات المرتبة، التعلم المخطط، برنامج النشاطات، والمحتوى التعليمي).',
  },
  {
    id: 'top-ch1-language',
    chapterId: 'chap-curriculum-intro',
    order: 9,
    title: 'المنهج في اللغة',
    headingClassification: 'original_author',
    description: 'الدلالة اللغوية للمنهج (الطريق والمسار الواضح)، واستعماله للدلالة على مقرر دراسي واحد أو مجموعة مقررات لمرحلة كاملة.',
  },
];

/**
 * دالة مساعدة للتحقق من سلامة وصحة هيكل الموضوعات التسعة المعتمد
 */
export function verifyChapter1NineTopicsStructure(): {
  isValid: boolean;
  totalTopics: number;
  educationalOrganizationalCount: number;
  originalAuthorCount: number;
  topics: readonly TopicMetadataDefinition[];
} {
  const total = CHAPTER_1_NINE_TOPICS_METADATA.length;
  const educationalCount = CHAPTER_1_NINE_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'educational_organizational'
  ).length;
  const authorCount = CHAPTER_1_NINE_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'original_author'
  ).length;

  const isValid =
    total === 9 &&
    educationalCount === 5 &&
    authorCount === 4 &&
    CHAPTER_1_NINE_TOPICS_METADATA.every((t, idx) => t.order === idx + 1);

  return {
    isValid,
    totalTopics: total,
    educationalOrganizationalCount: educationalCount,
    originalAuthorCount: authorCount,
    topics: CHAPTER_1_NINE_TOPICS_METADATA,
  };
}
