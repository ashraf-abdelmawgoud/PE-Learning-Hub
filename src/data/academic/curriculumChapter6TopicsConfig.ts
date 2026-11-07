import type { TopicHeadingClassification } from '../../types/academic';

/**
 * =========================================================================
 * الهيكل الفني التنظيمي المعتمد للموضوع السادس (6 موضوعات)
 * الوحدة التعليمية السادسة: تصميم وحدة دراسية
 * المقرر: مناهج التربية الرياضية — الفرقة الرابعة
 * المؤلف: أ.د. هاني الدسوقي إبراهيم (العام الجامعي 2025/2026م)
 *
 * تصنيف العناوين والبيانات الوصفية التربوية:
 * - جميع موضوعات الموضوع السادس (1 إلى 6) مصنفة كعناوين تنظيمية تعليمية
 *   (educational_organizational) مستخلصة بدقة وتنظيم من متن الموضوع السادس،
 *   تغطي مفهوم الوحدة والتخطيط العام، الخصائص النفسية والتربوية لطلاب الصف السادس،
 *   الوحدات التطبيقية الثلاث (الجمباز، كرة السلة، كرة اليد)، وإدارة الحصة والتحديات الميدانية.
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

export const CHAPTER_6_SIX_TOPICS_METADATA: readonly TopicMetadataDefinition[] = [
  {
    id: 'top-ch6-unit-concept-curriculum-planning',
    chapterId: 'chap-curriculum-unit-design',
    order: 1,
    title: 'مفهوم الوحدة الدراسية والتخطيط العام لمنهج الصف السادس',
    headingClassification: 'educational_organizational',
    description:
      'المفهوم الأكاديمي والتعريفان للوحدة الدراسية، جدول البيانات العامة بمدرسة الروضة بقنا، محاور هيكل الدرس التسعة (وتفصيل الـ 11 عنصراً)، وجدول التخطيط الزمني للوحدات والحصص (ملاحظة 32/33 حصة).',
  },
  {
    id: 'top-ch6-grade6-characteristics-teacher-role',
    chapterId: 'chap-curriculum-unit-design',
    order: 2,
    title: 'الخصائص النفسية والتربوية لطلاب الصف السادس والدور الإجرائي للمعلم',
    headingClassification: 'educational_organizational',
    description:
      'مميزات مرحلة النمو لطلاب الصف السادس، المتطلبات التربوية التسع، الحاجات النفسية الأربع، والتوجيهات الإجرائية الـ 11 للمعلم لمراعاة خصائص النمو والخلفية الاجتماعية.',
  },
  {
    id: 'top-ch6-gymnastics-skill-analysis-steps',
    chapterId: 'chap-curriculum-unit-design',
    order: 3,
    title: 'الإطار التطبيقي للوحدة الرابعة (الجمباز): التحليل المهاري والخطوات التدريسية',
    headingClassification: 'educational_organizational',
    description:
      'أجهزة الجمباز للذكور والإناث، تدريس مهارة الدحرجة الجانبية المكورة، مهارة الوقوف على اليدين، والتدريب على جملة الحركات محددة الزمن (50–70 ثانية) مع جداول الأخطاء الشائعة وتصحيحها.',
  },
  {
    id: 'top-ch6-basketball-basic-skills-drills',
    chapterId: 'chap-curriculum-unit-design',
    order: 4,
    title: 'الإطار التطبيقي للوحدة الخامسة (كرة السلة): المهارات الأساسية وتدريباتها',
    headingClassification: 'educational_organizational',
    description:
      'مهارات كرة السلة لطلاب الصف السادس: التمرير باليدين من فوق الرأس، حركات القدمين الهجومية والدفاعية (منع تقاطع القدمين)، والتصويب باليدين من فوق الرأس، بالنقاط الفنية والتدريبات والأخطاء الشائعة.',
  },
  {
    id: 'top-ch6-handball-whip-shot-feints',
    chapterId: 'chap-curriculum-unit-design',
    order: 5,
    title: 'الإطار التطبيقي للوحدة السادسة (كرة اليد): التصويب الكرباجي والخداع',
    headingClassification: 'educational_organizational',
    description:
      'مهارات كرة اليد: التصويب الكرباجي من مستوى الحوض والركبة (6 نقاط فنية)، ومهارة الخداع بالتمرير ثم التمرير بمرحلتيها (جدول النماذج الخمسة) والخطوات التعليمية وجداول تصحيح الأخطاء.',
  },
  {
    id: 'top-ch6-lesson-execution-field-challenges',
    chapterId: 'chap-curriculum-unit-design',
    order: 6,
    title: 'إدارة وتوقعات تنفيذ الحصة الدراسية والتحديات الميدانية',
    headingClassification: 'educational_organizational',
    description:
      'المشكلات الأربعة التوقعية أثناء تنفيذ درس التربية الرياضية الميداني (المعلم، الطلاب، التسهيلات، والإدارة والزمن)، والحلول والواجبات الإجرائية الملقاة على عاتق المعلم والإدارة المدرسية.',
  },
];

/**
 * دالة مساعدة للتحقق من سلامة وصحة هيكل الموضوعات الستة للموضوع السادس
 */
export function verifyChapter6SixTopicsStructure(): {
  isValid: boolean;
  totalTopics: number;
  educationalOrganizationalCount: number;
  originalAuthorCount: number;
  topics: readonly TopicMetadataDefinition[];
} {
  const total = CHAPTER_6_SIX_TOPICS_METADATA.length;
  const eduOrg = CHAPTER_6_SIX_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'educational_organizational'
  ).length;
  const origAuth = CHAPTER_6_SIX_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'original_author'
  ).length;

  return {
    isValid: total === 6 && eduOrg === 6 && origAuth === 0,
    totalTopics: total,
    educationalOrganizationalCount: eduOrg,
    originalAuthorCount: origAuth,
    topics: CHAPTER_6_SIX_TOPICS_METADATA,
  };
}
