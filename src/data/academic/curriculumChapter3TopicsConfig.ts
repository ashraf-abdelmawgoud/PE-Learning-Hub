import type { TopicHeadingClassification } from '../../types/academic';

/**
 * =========================================================================
 * الهيكل الفني التنظيمي المعتمد للفصل الثالث (7 موضوعات)
 * المقرر: مناهج التربية الرياضية — الفرقة الرابعة
 * المؤلف: أ.د. هاني الدسوقي إبراهيم (العام الجامعي 2025/2026م)
 *
 * تصنيف العناوين والبيانات الوصفية التربوية:
 * - جميع موضوعات الفصل الثالث (1 إلى 7) مصنفة كعناوين تنظيمية تعليمية
 *   (educational_organizational) مستخلصة بدقة وتنظيم من متن الفصل الثالث،
 *   تغطي عناصر المنهج الأربعة وعناصر التنفيذ الميداني الـ 13.
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

export const CHAPTER_3_SEVEN_TOPICS_METADATA: readonly TopicMetadataDefinition[] = [
  {
    id: 'top-ch3-curriculum-core-elements',
    chapterId: 'chap-curriculum-elements',
    order: 1,
    title: 'البناء الهيكلي لعناصر المنهج الأربعة ومدخل عناصر التنفيذ الميداني',
    headingClassification: 'educational_organizational',
    description:
      'العناصر الأربعة الرئيسية المترابطة عضوياً (الأهداف، المحتوى، طرق التدريس، والتقويم)، وتنبيه الخلل الترقيمي في المصدر، ومدخل عناصر تنفيذ المنهاج الـ 13 في الميدان.',
  },
  {
    id: 'top-ch3-teacher-guide',
    chapterId: 'chap-curriculum-elements',
    order: 2,
    title: 'دليل معلم التربية الرياضية: المفهوم، الأهمية، والمحتويات الثمانية للدليل',
    headingClassification: 'educational_organizational',
    description:
      'مفهوم دليل معلم التربية الرياضية وأهميته في مرحلة التنفيذ واستنارة المعلم، والمحتويات التفصيلية الثمانية للدليل (المقدمة، الأهداف، الوحدات، الطرق والوسائل، النشاط، التقويم، المصادر، والاتجاهات الجديدة).',
  },
  {
    id: 'top-ch3-textbook-physical-education',
    chapterId: 'chap-curriculum-elements',
    order: 3,
    title: 'الكتاب المدرسي في التربية الرياضية: الأهمية والفوائد الـ 12 والضوابط الـ 18 لتأليفه',
    headingClassification: 'educational_organizational',
    description:
      'أهمية الكتاب المدرسي في سد نقص المكتبة الرياضية والتحول للتعلم المعرفي، والفوائد الـ 12 للكتاب المدرسي، والضوابط الأكاديمية والشكلية الـ 18 الواجب مراعاتها عند تأليفه وإخراجه.',
  },
  {
    id: 'top-ch3-pe-teacher-learner',
    chapterId: 'chap-curriculum-elements',
    order: 4,
    title: 'الركنان الأساسيان للتنفيذ: معلم التربية الرياضية ومتطلبات إعداده والمتعلم كغاية ومحور',
    headingClassification: 'educational_organizational',
    description:
      'معلم التربية الرياضية كقدوة وأساس للعملية التربوية، الإعداد الأكاديمي والمهني قبل وأثناء الخدمة ورفض المنهج المفروض، والمتعلم كجوهر للعملية ودوره الاستشاري غير الملزم.',
  },
  {
    id: 'top-ch3-teaching-methods-media',
    chapterId: 'chap-curriculum-elements',
    order: 5,
    title: 'المنظومة الإجرائية للتنفيذ: طرق التدريس المناسبة والوسائل التعليمية',
    headingClassification: 'educational_organizational',
    description:
      'مفهوم طريقة التدريس والعوامل الثمانية المؤثرة في اختيارها بالتعاون مع الموجه والدليل، والوسائل التعليمية في مخاطبة الحواس وتنوع المعززات وأثر غيابها.',
  },
  {
    id: 'top-ch3-educational-admin-leadership',
    chapterId: 'chap-curriculum-elements',
    order: 6,
    title: 'القيادات التربوية والإدارية المباشرة: المدير العام، مدير بحوث المناهج، موجه التربية الرياضية، والإدارة المدرسية',
    headingClassification: 'educational_organizational',
    description:
      'الأدوار التخطيطية والإشرافية للمدير العام ومدير بحوث المناهج وموجه المادة وتقاريره التفصيلية، ودور الإدارة المدرسية في تهيئة الإمكانات والربط والتنسيق البيئي.',
  },
  {
    id: 'top-ch3-school-environment-community',
    chapterId: 'chap-curriculum-elements',
    order: 7,
    title: 'المحيط البيئي والمجتمعي الداعم: البيئة المدرسية، أولياء الأمور، والعاملون بالمدرسة',
    headingClassification: 'educational_organizational',
    description:
      'صلاحية البيئة المدرسية والعوامل السبعة المؤثرة فيها، والدور الإيجابي لأولياء الأمور في الدعم والتشجيع، ودور الكادر الإداري والعمالي في توفير الإحصاءات وإعداد الملاعب.',
  },
];

/**
 * دالة مساعدة للتحقق من سلامة وصحة هيكل الموضوعات السبعة للفصل الثالث
 */
export function verifyChapter3SevenTopicsStructure(): {
  isValid: boolean;
  totalTopics: number;
  educationalOrganizationalCount: number;
  originalAuthorCount: number;
  topics: readonly TopicMetadataDefinition[];
} {
  const total = CHAPTER_3_SEVEN_TOPICS_METADATA.length;
  const educationalCount = CHAPTER_3_SEVEN_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'educational_organizational'
  ).length;
  const authorCount = CHAPTER_3_SEVEN_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'original_author'
  ).length;

  const isValid =
    total === 7 &&
    educationalCount === 7 &&
    authorCount === 0 &&
    CHAPTER_3_SEVEN_TOPICS_METADATA.every((t, idx) => t.order === idx + 1);

  return {
    isValid,
    totalTopics: total,
    educationalOrganizationalCount: educationalCount,
    originalAuthorCount: authorCount,
    topics: CHAPTER_3_SEVEN_TOPICS_METADATA,
  };
}
