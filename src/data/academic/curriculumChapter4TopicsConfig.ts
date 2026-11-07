import type { TopicHeadingClassification } from '../../types/academic';

/**
 * =========================================================================
 * الهيكل الفني التنظيمي المعتمد للفصل الرابع (5 موضوعات)
 * المقرر: مناهج التربية الرياضية — الفرقة الرابعة
 * المؤلف: أ.د. هاني الدسوقي إبراهيم (العام الجامعي 2025/2026م)
 *
 * تصنيف العناوين والبيانات الوصفية التربوية:
 * - جميع موضوعات الفصل الرابع (1 إلى 5) مصنفة كعناوين تنظيمية تعليمية
 *   (educational_organizational) مستخلصة بدقة وتنظيم من متن الفصل الرابع،
 *   تغطي تمهيد مفهوم المنهج ورسالة المدرسة، العوامل الخمسة الرئيسية، ومكونات
 *   الصيغة المطلوبة لمناهج المستقبل مع حفظ ترقيم المصدر.
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

export const CHAPTER_4_FIVE_TOPICS_METADATA: readonly TopicMetadataDefinition[] = [
  {
    id: 'top-ch4-intro-traditional-contemporary-mission',
    chapterId: 'chap-curriculum-factors',
    order: 1,
    title: 'التمهيد ومفهوم المنهج بين الرؤية التقليدية والرسالة المعاصرة للمدرسة',
    headingClassification: 'educational_organizational',
    description:
      'إشكالية تحديد مفهوم المنهج والفاصل التاريخي بين التعليم التقليدي والمتطور، والتطور الاصطلاحي: التعريف المكتوب، والتعريف المعاصر الشامل المتمركز حول رسالة المدرسة.',
  },
  {
    id: 'top-ch4-influencing-factors',
    chapterId: 'chap-curriculum-factors',
    order: 2,
    title: 'العوامل الخمسة الرئيسية المؤثرة في بناء المنهج وتحديات المستقبل',
    headingClassification: 'educational_organizational',
    description:
      'العوامل الخمسة المؤثرة في بناء المنهج: طبيعة المجتمع، طبيعة العصر، تأثير المعلومة وتيار العولمة، تأثير المتغير وآلياته، ومكانة التعليم الرسمي في حياة المستقبل.',
  },
  {
    id: 'top-ch4-future-curriculum-first-five-components',
    chapterId: 'chap-curriculum-factors',
    order: 3,
    title: 'المكونات الخمسة الأولى للصيغة المطلوبة لمناهج المستقبل',
    headingClassification: 'educational_organizational',
    description:
      'المكونات الخمسة الأولى: توسيع دائرة بناء المناهج ومطالبها الأربعة، التعامل مع المعلومة وطرق اكتسابها، الاهتمام بالتعليم الذاتي، التقليل من جهد المعلم وموقع الكتاب، والمهارات المرتبطة بمهن المستقبل.',
  },
  {
    id: 'top-ch4-skills-values-languages',
    chapterId: 'chap-curriculum-factors',
    order: 4,
    title: 'منظومة المهارات والقيم الأساسية في المنهج ورعاية اللغات',
    headingClassification: 'educational_organizational',
    description:
      'الأبعاد الأربعة للمهارات والقيم: مهارات حاجات المتعلم، مهارات متطلبات المجتمع والأسئلة الثلاثة، مهارات طبيعة العصر، والاهتمام باللغات (العربية والأجنبية).',
  },
  {
    id: 'top-ch4-organizational-faith-research-axes',
    chapterId: 'chap-curriculum-factors',
    order: 5,
    title: 'المحاور التنظيمية والإيمانية والبحثية المكملة لصيغة مناهج المستقبل',
    headingClassification: 'educational_organizational',
    description:
      'المحاور المكملة (5-10 بترقيم المصدر): توسيع النشاط، التعليم التعاوني وتنمية الإبداع، متطلبات المتعلمين المرحلية، المفاهيم والمصطلحات، نظرة الإنسان للكون والحياة، ومراكز تخطيط وتقويم البرامج ودراسات اقتصاديات التعليم.',
  },
];

/**
 * دالة مساعدة للتحقق من سلامة وصحة هيكل الموضوعات الخمسة للفصل الرابع
 */
export function verifyChapter4FiveTopicsStructure(): {
  isValid: boolean;
  totalTopics: number;
  educationalOrganizationalCount: number;
  originalAuthorCount: number;
  topics: readonly TopicMetadataDefinition[];
} {
  const total = CHAPTER_4_FIVE_TOPICS_METADATA.length;
  const educationalCount = CHAPTER_4_FIVE_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'educational_organizational'
  ).length;
  const authorCount = CHAPTER_4_FIVE_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'original_author'
  ).length;

  const isValid =
    total === 5 &&
    educationalCount === 5 &&
    authorCount === 0 &&
    CHAPTER_4_FIVE_TOPICS_METADATA.every((t, idx) => t.order === idx + 1);

  return {
    isValid,
    totalTopics: total,
    educationalOrganizationalCount: educationalCount,
    originalAuthorCount: authorCount,
    topics: CHAPTER_4_FIVE_TOPICS_METADATA,
  };
}
