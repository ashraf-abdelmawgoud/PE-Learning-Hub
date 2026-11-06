import type { TopicHeadingClassification } from '../../types/academic';

/**
 * =========================================================================
 * الهيكل الفني التنظيمي المعتمد للفصل الثاني (9 موضوعات)
 * المقرر: مناهج التربية الرياضية — الفرقة الرابعة
 * المؤلف: أ.د. هاني الدسوقي إبراهيم (العام الجامعي 2025/2026م)
 *
 * تصنيف العناوين والبيانات الوصفية التربوية:
 * - الموضوعات 1-6 و 8: عناوين تنظيمية تربوية (educational_organizational)
 *   تجمع العناوين الفرعية والمحاور لضمان تسلسل بيداغوجي متماسك.
 * - الموضوعان 7 و 9: عناوين المؤلف الأصلي (original_author)
 *   محفوظة نصياً ودقيقاً كما خطها مؤلف الكتاب.
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

export const CHAPTER_2_NINE_TOPICS_METADATA: readonly TopicMetadataDefinition[] = [
  {
    id: 'top-ch2-curriculum-foundations-intro',
    chapterId: 'chap-curriculum-foundations',
    order: 1,
    title: 'مدخل إلى أسس بناء المنهج والتنظيمات الرئيسية للمناهج',
    headingClassification: 'educational_organizational',
    description: 'تخطيط المنهج وتنظيمه وعلاقته بأهدافه، والتنظيمات الرئيسية الثلاثة للمناهج (المادة الدراسية، النشاط، المحورية)، والأسس الأربعة للمنهج الحديث (النفسي، الفلسفي، الاجتماعي، المعرفي).',
  },
  {
    id: 'top-ch2-psychological-foundation',
    chapterId: 'chap-curriculum-foundations',
    order: 2,
    title: 'الأساس النفسي للمنهج وطبيعة المتعلم',
    headingClassification: 'educational_organizational',
    description: 'مفهوم الأسس النفسية في مجالات المتعلم والتعلم والتعليم، والمتعلم وطبيعته وعلاقته بالمنهج كغاية للتربية، وتفسير الطبيعة الإنسانية: غرائز مكدوجل السبع والحاجات النفسية.',
  },
  {
    id: 'top-ch2-human-growth-issues',
    chapterId: 'chap-curriculum-foundations',
    order: 3,
    title: 'نمو الإنسان ومشكلاته وعلاقته بالمنهج',
    headingClassification: 'educational_organizational',
    description: 'عوامل النمو وتأثيراتها، وأهم خصائص النمو السبع وعلاقتها بالمنهج، ومشكلات النمو السلوكية والصحية ومسؤوليات المدرسة والقائمين على المنهج في مواجهتها.',
  },
  {
    id: 'top-ch2-learner-needs-learning-teaching',
    chapterId: 'chap-curriculum-foundations',
    order: 4,
    title: 'حاجات المتعلمين والتعلم والتعليم وعلاقتها بالمنهج',
    headingClassification: 'educational_organizational',
    description: 'العلاقة بين المنهج وحاجات المتعلمين، وتوجيه عادات التلاميذ واتجاهاتهم وميولهم، ومفهوم التعلم ونوعاه وكيفيات حدوثه وشروطه الثلاثة (النضج، الدافعية، الممارسة)، وطبيعة التعليم وأطرافه.',
  },
  {
    id: 'top-ch2-philosophical-foundation',
    chapterId: 'chap-curriculum-foundations',
    order: 5,
    title: 'الأساس الفلسفي للمنهج والفلسفة والتربية',
    headingClassification: 'educational_organizational',
    description: 'الأساس الفلسفي واشتقاق الفلسفة التربوية من فلسفة المجتمع، ومفهوم الفلسفة وأصلها اليوناني، والأسس الفلسفية للمنهج، وعلاقة الفلسفة بالتربية (المثالية، الطبيعية، البرجماتية)، واتجاهات الفلسفات التربوية التقليدية والتقدمية والنظرة الإسلامية.',
  },
  {
    id: 'top-ch2-traditional-philosophies-idealism',
    chapterId: 'chap-curriculum-foundations',
    order: 6,
    title: 'الفلسفات ذات الصبغة التقليدية: الفلسفة المثالية',
    headingClassification: 'educational_organizational',
    description: 'رؤية الفلسفة المثالية للوجود والمعرفة، وطرق استرجاع المعرفة عند أفلاطون، والعلوم في المنهج المثالي، والقيم والتربية البدنية، وطرائق التدريس التقليدية.',
  },
  {
    id: 'top-ch2-curriculum-arab-society-problems',
    chapterId: 'chap-curriculum-foundations',
    order: 7,
    title: 'المنهج ومشكلات المجتمع العربي',
    headingClassification: 'original_author',
    description: 'مشكلات المناهج العربية التربوية المعاصرة، وأدوار المنهج الأربعة في تعزيز قوة المجتمع العربي ومواجهة مشكلاته (الانتماء والتماسك، المعالجة العلمية للمشكلات، ربط التعليم بالحياة والعمل، وتنمية التفكير).',
  },
  {
    id: 'top-ch2-knowledge-foundation',
    chapterId: 'chap-curriculum-foundations',
    order: 8,
    title: 'الأسس المعرفية للمنهج ومصادر المعرفة',
    headingClassification: 'educational_organizational',
    description: 'الأسس المعرفية والتفجر المعرفي، ومفهوم المعرفة ونظرية المعرفة، وطبيعة المعرفة والمنهج (الحقيقة والجوهر، الاكتساب، الموضوعية والذاتية)، والمصادر الستة للمعرفة (الوحي، الحواس، العقل، الحدس، التراث الوطني، التراث العالمي).',
  },
  {
    id: 'top-ch2-knowledge-structure-organization',
    chapterId: 'chap-curriculum-foundations',
    order: 9,
    title: 'تنظيم بنية المعرفة والمنهج',
    headingClassification: 'original_author',
    description: 'تنظيم بنية المعرفة وفق مجالاتها الأربعة (الإنسانية، الاجتماعية، الطبيعية، الرياضية)، ووفق درجة التجريد (الحقائق، المفاهيم، التعميمات)، والتوجهات العالمية المعاصرة الخمسة في بناء المنهج.',
  },
];

/**
 * دالة مساعدة للتحقق من سلامة وصحة هيكل الموضوعات التسعة للفصل الثاني
 */
export function verifyChapter2NineTopicsStructure(): {
  isValid: boolean;
  totalTopics: number;
  educationalOrganizationalCount: number;
  originalAuthorCount: number;
  topics: readonly TopicMetadataDefinition[];
} {
  const total = CHAPTER_2_NINE_TOPICS_METADATA.length;
  const educationalCount = CHAPTER_2_NINE_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'educational_organizational'
  ).length;
  const authorCount = CHAPTER_2_NINE_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'original_author'
  ).length;

  const isValid =
    total === 9 &&
    educationalCount === 7 &&
    authorCount === 2 &&
    CHAPTER_2_NINE_TOPICS_METADATA.every((t, idx) => t.order === idx + 1);

  return {
    isValid,
    totalTopics: total,
    educationalOrganizationalCount: educationalCount,
    originalAuthorCount: authorCount,
    topics: CHAPTER_2_NINE_TOPICS_METADATA,
  };
}
