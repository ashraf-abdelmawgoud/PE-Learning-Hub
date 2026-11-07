import type { TopicHeadingClassification } from '../../types/academic';

/**
 * =========================================================================
 * الهيكل الفني التنظيمي المعتمد للموضوع السابع (7 موضوعات)
 * الوحدة التعليمية السابعة: تخطيط المنهج المدرسي
 * المقرر: مناهج التربية الرياضية — الفرقة الرابعة
 * المؤلف: أ.د. هاني الدسوقي إبراهيم (العام الجامعي 2025/2026م)
 *
 * تصنيف العناوين والبيانات الوصفية التربوية:
 * - جميع موضوعات الموضوع السابع (1 إلى 7) مصنفة كعناوين تنظيمية تعليمية
 *   (educational_organizational) مستخلصة بدقة وتنظيم من متن الموضوع السابع،
 *   تغطي التأسيس الفلسفي والاصطلاحي ونموذج تايلر، الأطر الزمنية والمستويات الإدارية،
 *   استراتيجية البناء والقواعد الفنية والخطوات التسع، العوامل الخارجية وإدارة الصعوبات،
 *   معايير التخطيط الستة وبنية المعرفة، خطوات بناء المنهج ومستوياته الهيكلية،
 *   والأطراف المشاركة ومدخل العمليات العقلية.
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

export const CHAPTER_7_SEVEN_TOPICS_METADATA: readonly TopicMetadataDefinition[] = [
  {
    id: 'top-ch7-philosophical-foundations-tyler-model',
    chapterId: 'chap-curriculum-planning',
    order: 1,
    title: 'التأسيس الفلسفي والاصطلاحي لتخطيط المنهج ونموذج تايلر الأكاديمي',
    headingClassification: 'educational_organizational',
    description:
      'الاستشهاد القرآني بالآية 48 من سورة المائدة، المعنى اللغوي (تحرير وتهذيب طرق العمل) والتعريفان الاصطلاحيان، شمولية التخطيط، نموذج تايلر (الأبعاد الأربعة والأسئلة الأربعة المحورية)، وأهمية التخطيط للمنهج المدرسي.',
  },
  {
    id: 'top-ch7-timeframes-admin-levels-centralization',
    chapterId: 'chap-curriculum-planning',
    order: 2,
    title: 'أبعاد التخطيط: الأطر الزمنية والمستويات الإدارية بين المركزية واللامركزية',
    headingClassification: 'educational_organizational',
    description:
      'أقسام التخطيط الزمني الثلاثة (طويل، متوسط، وقصير المدى)، والتخطيط على المستوى الوزاري المركزي (السعودية والدول العربية)، والمستوى المحلي اللامركزي (أمريكا وبريطانيا)، ومآخذ كل منهما، والنظام التوفيقي المزدوج.',
  },
  {
    id: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    chapterId: 'chap-curriculum-planning',
    order: 3,
    title: 'استراتيجية بناء المناهج والقواعد الفنية والأبعاد الإجرائية التسع للتخطيط',
    headingClassification: 'educational_organizational',
    description:
      'العناصر الأربعة للمنهج والقواعد الفنية الأربع (الواقعية، الشمولية، الموازنة، المرونة)، والخطوات التسع التفصيلية لتخطيط وبناء المنهج المدرسي من التبرير المنطقي وحتى التجريب والتعميم، ومعايير اختيار المحتوى (الصدق والأهمية).',
  },
  {
    id: 'top-ch7-external-influencing-factors-difficulty-management',
    chapterId: 'chap-curriculum-planning',
    order: 4,
    title: 'العوامل الخارجية المؤثرة في التخطيط واستراتيجيات إدارة الصعوبات',
    headingClassification: 'educational_organizational',
    description:
      'العوامل الخارجية الأربعة المعطلة لتخطيط المنهج (طبيعة المجتمع، أنظمة وقوانين الوزارات، صفات المعلم ومبدأ فاقد الشيء لا يعطيه، وطبيعة الطلاب)، والمقترحات البناءة الخمسة لإدارة صعوبات التخطيط وبقاء المنهج القديم كخيار موازٍ أثناء التجريب.',
  },
  {
    id: 'top-ch7-six-planning-criteria-knowledge-structure',
    chapterId: 'chap-curriculum-planning',
    order: 5,
    title: 'معايير تخطيط المنهج الستة وبنية المعرفة وأنواع التخطيط المفهومي',
    headingClassification: 'educational_organizational',
    description:
      'التساؤلات الأربعة والتعريف الإجرائي للتخطيط، معايير التخطيط الستة (الواقعية ومحاورها الثلاثة، الشمول، الأولويات، التكامل، الاستمرارية، المرونة)، مستويات بنية المعرفة الستة، والأنماط الثلاثة للتخطيط المفهومي (المنهجي، المرحلي، والمناسب).',
  },
  {
    id: 'top-ch7-curriculum-construction-steps-three-structural-levels',
    chapterId: 'chap-curriculum-planning',
    order: 6,
    title: 'خطوات بناء المنهج الإجرائية ومستوياته الهيكلية الثلاثة',
    headingClassification: 'educational_organizational',
    description:
      'المبادئ التسعة الواجب مراعاتها قبل التخطيط، والخطوات السبع الإجرائية لبناء المنهج، والمستويات الهيكلية الثلاثة (القومي، المحلي، والمدرسي) وعلاقتها بالتنظيمات المنهجية (النشاط والوحدات مدرسياً والمواد المنفصلة قومياً).',
  },
  {
    id: 'top-ch7-participating-parties-architectural-curriculum-approach',
    chapterId: 'chap-curriculum-planning',
    order: 7,
    title: 'الأطراف المشاركة في التخطيط ومدخل تنظيم البناء الهندسي للمنهج',
    headingClassification: 'educational_organizational',
    description:
      'الأدوار التفصيلية للأطراف المشاركة: دور التلاميذ (هوبكنس والمسؤولية المشتركة)، دور المدرسين كحجر زاوية وخبراء ميدانيين، دور المواطنين والمؤسسات الخارجية، ومدخل العمليات العقلية لتنظيم البناء الهندسي ووظيفتيه التربويتين.',
  },
];

/**
 * دالة مساعدة للتحقق من سلامة وصحة هيكل الموضوعات السبعة للموضوع السابع
 */
export function verifyChapter7SevenTopicsStructure(): {
  isValid: boolean;
  totalTopics: number;
  educationalOrganizationalCount: number;
  originalAuthorCount: number;
  topics: readonly TopicMetadataDefinition[];
} {
  const total = CHAPTER_7_SEVEN_TOPICS_METADATA.length;
  const eduOrg = CHAPTER_7_SEVEN_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'educational_organizational'
  ).length;
  const origAuth = CHAPTER_7_SEVEN_TOPICS_METADATA.filter(
    (t) => t.headingClassification === 'original_author'
  ).length;

  return {
    isValid: total === 7 && eduOrg === 7 && origAuth === 0,
    totalTopics: total,
    educationalOrganizationalCount: eduOrg,
    originalAuthorCount: origAuth,
    topics: CHAPTER_7_SEVEN_TOPICS_METADATA,
  };
}
