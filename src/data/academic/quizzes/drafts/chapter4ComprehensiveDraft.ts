/**
 * chapter4ComprehensiveDraft.ts
 *
 * مسودة بنك أسئلة الاختبار الشامل للفصل الرابع: العوامل المؤثرة في بناء المنهج
 * كتاب مناهج التربية الرياضية — إعداد: أ.د/ هاني الدسوقي إبراهيم (2025/2026م)
 *
 * المصدر المعتمد: وثيقة «اختبار_الفصل_الرابع_مناهج_التربية_الرياضية_50_سؤال(1).docx»
 *
 * حالة الحوكمة: DRAFT (مسودة أولية قيد المراجعة والتحكيم الأكاديمي)
 * محظور من النشر للطلاب وغير مدرج في بيان النشر الرسمي (QUIZ_PUBLICATION_MANIFEST).
 *
 * إجمالي الأسئلة: 50 سؤالاً
 * - 25 سؤال اختيار من متعدد (MCQ) — لكل سؤال 4 خيارات وإجابة صحيحة واحدة.
 * - 25 سؤال صواب وخطأ (True/False).
 * - تغطية شاملة لموضوعات الفصل الرابع الخمسة ومحاور مناهج المستقبل بالتفصيل.
 * - توثيق الأنماط التكرارية لمفاتيح الإجابات كملاحظة جودة أكاديمية مع التوصية بالخلط الآمن للعرض مستقبلاً.
 */

import type { GovernedQuestionBank, GovernedQuizQuestion } from '../../../../types/quizGovernance.ts';
import { computeQuestionBankHash } from '../../../../utils/contentHash.ts';

const DRAFT_QUESTIONS: GovernedQuizQuestion[] = [
  // 1 | العنوان الأصلي: طبيعة المجتمع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-intro-traditional-contemporary-mission',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q01',
      type: 'multiple_choice',
      order: 1,
      prompt: 'من أين تنبثق السياسة التعليمية بحسب المؤلف؟',
      options: [
        { id: 'opt-a', text: 'من خصائص المجتمع وهويته' },
        { id: 'opt-b', text: 'من تفضيلات المعلم وحدها' },
        { id: 'opt-c', text: 'من عدد الحصص المقررة' },
        { id: 'opt-d', text: 'من تجهيزات الصف فقط' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يربط المؤلف السياسة التعليمية بخصائص المجتمع وهويته، ويؤكد أثر المجتمع ومؤسساته في شخصية المتعلم.',
      sourceReference: '«طبيعة المجتمع» — الصفحة المطبوعة 31.',
    },
  },
  // 2 | العنوان الأصلي: طبيعة المجتمع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-intro-traditional-contemporary-mission',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q02',
      type: 'multiple_choice',
      order: 2,
      prompt: 'ما الذي ينبغي لواضع المنهج مراعاته عند التخطيط للوثائق التعليمية؟',
      options: [
        { id: 'opt-a', text: 'استبعاد المؤسسات الاجتماعية' },
        { id: 'opt-b', text: 'العلاقة بين واقع المجتمع وطبيعة التعليم' },
        { id: 'opt-c', text: 'الاقتصار على مهارات الحفظ' },
        { id: 'opt-d', text: 'توحيد جميع البيئات المدرسية' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يوضح النص وجود تلاحم بين واقع المجتمع وطبيعة التعليم وتأثير الوعي الاجتماعي في صورة المناهج.',
      sourceReference: '«طبيعة المجتمع» — الصفحة المطبوعة 31.',
    },
  },
  // 3 | العنوان الأصلي: طبيعة العصر
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q03',
      type: 'multiple_choice',
      order: 3,
      prompt: 'كيف ينبغي للمنهج التعامل مع منجزات العصر وخدماته؟',
      options: [
        { id: 'opt-a', text: 'تجاهلها لضمان ثبات المنهج' },
        { id: 'opt-b', text: 'تأجيل التعامل معها حتى التخرج' },
        { id: 'opt-c', text: 'الاستفادة منها وتأهيل الناشئة للتفاعل الإيجابي معها' },
        { id: 'opt-d', text: 'استبدال كل أهداف التربية بها' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يدعو النص إلى الإفادة من المبتكرات والخدمات وتأهيل المتعلمين للتفاعل معها بخطط مدروسة.',
      sourceReference: '«طبيعة العصر» — الصفحة المطبوعة 31.',
    },
  },
  // 4 | العنوان الأصلي: تأثير المعلومة وتيار العولمة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q04',
      type: 'multiple_choice',
      order: 4,
      prompt: 'ما التحدي الذي تطرحه تعدد قنوات المعلومات أمام المدرسة؟',
      options: [
        { id: 'opt-a', text: 'انتهاء الحاجة إلى التعلم' },
        { id: 'opt-b', text: 'زوال تجدد المعارف' },
        { id: 'opt-c', text: 'انحصار مصادر المعرفة في الكتاب' },
        { id: 'opt-d', text: 'منافسة قنوات تتفوق في العرض وتجدد المعرفة' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يشير المؤلف إلى أن للمعلومة قنوات متعددة تنافس المدرسة في أساليب العرض والتجدد.',
      sourceReference: '«تأثير المعلومة وتيار العولمة» — الصفحة المطبوعة 31.',
    },
  },
  // 5 | العنوان الأصلي: تأثير المعلومة وتيار العولمة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q05',
      type: 'multiple_choice',
      order: 5,
      prompt: 'ما الاستجابة التي يطلبها النص تجاه مؤثرات العولمة؟',
      options: [
        { id: 'opt-a', text: 'تفاعل إيجابي يحافظ على شخصية الناشئة' },
        { id: 'opt-b', text: 'الانغلاق التام عن المستجدات' },
        { id: 'opt-c', text: 'إذابة الهوية في المؤثرات الخارجية' },
        { id: 'opt-d', text: 'قصر الاهتمام على الاقتصاد' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يدعو المؤلف إلى التفاعل الإيجابي مع العولمة دون ذوبان معالم شخصية الناشئة.',
      sourceReference: '«تأثير المعلومة وتيار العولمة» — الصفحة المطبوعة 32.',
    },
  },
  // 6 | العنوان الأصلي: تأثير المتغير
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'direct_recall',
    question: {
      id: 'ch4-draft-q06',
      type: 'multiple_choice',
      order: 6,
      prompt: 'أي مجموعة عدّها النص من آليات التغير الراهنة؟',
      options: [
        { id: 'opt-a', text: 'زيادة عدد الامتحانات والواجبات' },
        { id: 'opt-b', text: 'تقانة المعلومات والاتصال وبرامج الحواسيب' },
        { id: 'opt-c', text: 'تقليل اتصال المجتمعات' },
        { id: 'opt-d', text: 'تثبيت نمط الحياة دون تطوير' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يذكر المؤلف التطور في تقانة المعلومات والاتصال وبرامج الحواسيب من أبرز آليات المتغير.',
      sourceReference: '«تأثير المتغير» — الصفحة المطبوعة 32.',
    },
  },
  // 7 | العنوان الأصلي: مكانة التعليم الرسمي في حياة المستقبل
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q07',
      type: 'multiple_choice',
      order: 7,
      prompt: 'على أي أساس يتوقع النص تفاوت تطوير التعليم وإنتاجيته بين المجتمعات؟',
      options: [
        { id: 'opt-a', text: 'طول اسم المدرسة' },
        { id: 'opt-b', text: 'عدد الكتب التاريخية' },
        { id: 'opt-c', text: 'الإمكانات والقدرة على استيعاب الخطط والأهداف' },
        { id: 'opt-d', text: 'ثبات شكل الصف في جميع الدول' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يرجع تفاوت التطوير إلى الإمكانات واستيعاب الدرس وصياغة الأهداف والخطط المتخصصة.',
      sourceReference: '«مكانة التعليم الرسمي في حياة المستقبل» — الصفحة المطبوعة 32.',
    },
  },
  // 8 | العنوان الأصلي: توسيع دائرة بناء المناهج
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'direct_recall',
    question: {
      id: 'ch4-draft-q08',
      type: 'multiple_choice',
      order: 8,
      prompt: 'أي مجموعة تعبّر عن مطالب صياغة منهج مثمر؟',
      options: [
        { id: 'opt-a', text: 'التكرار والجمود وإهمال المجتمع' },
        { id: 'opt-b', text: 'الحفظ فقط وإلغاء النشاط' },
        { id: 'opt-c', text: 'حصر المنهج في توصيل المهارة' },
        { id: 'opt-d', text: 'الشمول والمرونة والملاءمة للمتعلم والالتزام بالثوابت' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يعدد النص الشمول والمرونة والتطبيق والتجدد والملاءمة والثوابت ضمن مطالب صياغة منهج مثمر.',
      sourceReference: '«توسيع دائرة بناء المناهج» — الصفحة المطبوعة 32.',
    },
  },
  // 9 | العنوان الأصلي: توسيع دائرة بناء المناهج
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q09',
      type: 'multiple_choice',
      order: 9,
      prompt: 'كيف يتجاوز توسيع بناء المناهج المفهوم التقليدي للتعليم؟',
      options: [
        { id: 'opt-a', text: 'باستثمار الإمكانات التقنية وتجديد الإدارة ودور المعلم' },
        { id: 'opt-b', text: 'بإلغاء عناصر العملية التعليمية الأخرى' },
        { id: 'opt-c', text: 'بالاكتفاء بنقل المهارة دون تطوير' },
        { id: 'opt-d', text: 'بفصل تنظيم المنهج عن البيئة التعليمية' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يوسع المؤلف البناء ليشمل قاعة الدراسة والإدارة ودور المعلم والمنظومة التعليمية الشاملة.',
      sourceReference: '«توسيع دائرة بناء المناهج» — الصفحة المطبوعة 32.',
    },
  },
  // 10 | العنوان الأصلي: التعامل مع المعلومة وطرق اكتسابها
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q10',
      type: 'multiple_choice',
      order: 10,
      prompt: 'أي قدرة ينبغي أن تنميها المناهج في عصر المعلوماتية؟',
      options: [
        { id: 'opt-a', text: 'التسليم بكل معلومة دون فحص' },
        { id: 'opt-b', text: 'التفكير الناقد والمبدع في التعامل مع المعلومات' },
        { id: 'opt-c', text: 'الاكتفاء بنقل الحقائق من المعلم' },
        { id: 'opt-d', text: 'حفظ مصادر المعلومات دون استخدامها' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يربط المؤلف التعامل مع وفرة المعلومات بتنمية العقل المفكر الناقد والمبدع.',
      sourceReference: '«التعامل مع المعلومة وطرق اكتسابها» — الصفحة المطبوعة 33.',
    },
  },
  // 11 | العنوان الأصلي: الاهتمام بالتعليم الذاتي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q11',
      type: 'multiple_choice',
      order: 11,
      prompt: 'ما الأثر الذي ينسبه النص للتعليم الذاتي والتعاوني المستقل؟',
      options: [
        { id: 'opt-a', text: 'إضعاف المبادرة الفردية' },
        { id: 'opt-b', text: 'تثبيت الاعتماد الكامل على المعلم' },
        { id: 'opt-c', text: 'تنمية الإبداع والتفكير المستقل والنقد الإيجابي' },
        { id: 'opt-d', text: 'إلغاء الحاجة إلى التعليم المستمر' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يذكر المؤلف أن هذه الأنماط تنمي الإبداع والتفكير المستقل والنقد الإيجابي.',
      sourceReference: '«الاهتمام بالتعليم الذاتي» — الصفحة المطبوعة 33.',
    },
  },
  // 12 | العنوان الأصلي: الاهتمام بالتعليم الذاتي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q12',
      type: 'multiple_choice',
      order: 12,
      prompt: 'لماذا يُعد التعليم الذاتي مهمًا لمدرسة المستقبل؟',
      options: [
        { id: 'opt-a', text: 'لأنه يعزل المتعلم عن المراجع' },
        { id: 'opt-b', text: 'لأنه يمنع تجدد المعرفة' },
        { id: 'opt-c', text: 'لأنه يلغي مسؤولية الطالب' },
        { id: 'opt-d', text: 'لأنه يساعد على مواكبة تجدد المعلومة والتعلم المستمر' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يرى النص أنه يخفف إشكالية تجدد المعلومة وطرق كسبها ويؤهل للتعليم المستمر.',
      sourceReference: '«الاهتمام بالتعليم الذاتي» — الصفحة المطبوعة 33.',
    },
  },
  // 13 | العنوان الأصلي: التقليل من الاعتماد على جهد المعلم وتحديد موقع الكتاب المدرسي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q13',
      type: 'multiple_choice',
      order: 13,
      prompt: 'ما موقف النص المعتدل من دور المعلم مستقبلًا؟',
      options: [
        { id: 'opt-a', text: 'الإبقاء على دوره دون إلغائه أو التمسك بموضعه التقليدي المختل' },
        { id: 'opt-b', text: 'إلغاء المعلم نهائيًا' },
        { id: 'opt-c', text: 'الإبقاء على المعلم مصدرًا وحيدًا للمعرفة' },
        { id: 'opt-d', text: 'منع توظيف أي جهاز تعليمي' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يذكر المؤلف رأيًا معتدلًا لا يلغي دور المعلم ولا يتشبث بمكانته التقليدية المعيبة.',
      sourceReference: '«التقليل من الاعتماد على جهد المعلم وتحديد موقع الكتاب المدرسي» — الصفحة المطبوعة 33.',
    },
  },
  // 14 | العنوان الأصلي: الاهتمام بالمهارات المرتبطة بمهن المستقبل
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q14',
      type: 'multiple_choice',
      order: 14,
      prompt: 'بم ترتبط مهمة المدرسة تجاه مهن المستقبل؟',
      options: [
        { id: 'opt-a', text: 'تكرار المهن القائمة دون متابعة' },
        { id: 'opt-b', text: 'استشراف المستجدات وتأهيل الناشئة للتفاعل معها' },
        { id: 'opt-c', text: 'استبعاد المعارف التقنية من المناهج' },
        { id: 'opt-d', text: 'توجيه الخريجين إلى تخصص واحد' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يدعو النص إلى استقراء المستقبل وتحديد ملامحه وتأهيل المتعلمين للتفاعل مع مهنه الجديدة.',
      sourceReference: '«الاهتمام بالمهارات المرتبطة بمهن المستقبل» — الصفحة المطبوعة 33.',
    },
  },
  // 15 | العنوان الأصلي: الاهتمام بالمهارات المرتبطة بمهن المستقبل
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q15',
      type: 'multiple_choice',
      order: 15,
      prompt: 'ما إحدى النتائج المتوقعة من تحديد المهن المستقبلية وتغطيتها بالمناهج؟',
      options: [
        { id: 'opt-a', text: 'زيادة الخلل بين التخصصات' },
        { id: 'opt-b', text: 'تعطيل تأهيل الكوادر الفنية' },
        { id: 'opt-c', text: 'الحد من البطالة وتحقيق توازن أعداد الخريجين' },
        { id: 'opt-d', text: 'زيادة الاعتماد على كوادر من الخارج' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يعد المؤلف تغطية المهن المستقبلية وسيلة للحد من البطالة وتحقيق التوازن وتلبية الاحتياجات محليًا.',
      sourceReference: '«الاهتمام بالمهارات المرتبطة بمهن المستقبل» — الصفحة المطبوعة 34.',
    },
  },
  // 16 | العنوان الأصلي: تحديد المهارات والقيم الأساسية المطلوب تحققها في المنهج
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q16',
      type: 'multiple_choice',
      order: 16,
      prompt: 'ما الموقع الذي يمنحه النص للقيم والمهارات في رسالة المدرسة؟',
      options: [
        { id: 'opt-a', text: 'موضوعان ثانويان بلا صلة بالهوية' },
        { id: 'opt-b', text: 'بديلان عن عملية التعلم كلها' },
        { id: 'opt-c', text: 'مهارات مؤقتة لا علاقة لها بالمجتمع' },
        { id: 'opt-d', text: 'جزء جوهري وأساسي من الرسالة التربوية' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يصف النص القيم والمهارات بأنهما الجزء الجوهري والأساسي من رسالة المدرسة.',
      sourceReference: '«تحديد المهارات والقيم الأساسية المطلوب تحققها في المنهج» — الصفحة المطبوعة 34.',
    },
  },
  // 17 | العنوان الأصلي: مهارات مرتبطة بحاجات المتعلم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q17',
      type: 'multiple_choice',
      order: 17,
      prompt: 'أي ممارسة تدعم إعداد المتعلم لحياة المستقبل وفق النص؟',
      options: [
        { id: 'opt-a', text: 'التعلم الذاتي والفكر الناقد والحوار الهادف' },
        { id: 'opt-b', text: 'حصر التعلم في مطالب الحاضر' },
        { id: 'opt-c', text: 'تجنب استشراف التحديات القادمة' },
        { id: 'opt-d', text: 'عزل المتعلم عن مصادر المعلومات' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يربط المؤلف حاجات المتعلم بالتعلم الذاتي والتفكير الناقد والاستشراف والحوار والقيم.',
      sourceReference: '«مهارات مرتبطة بحاجات المتعلم» — الصفحة المطبوعة 34.',
    },
  },
  // 18 | العنوان الأصلي: مهارات مرتبطة بمتطلبات المجتمع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q18',
      type: 'multiple_choice',
      order: 18,
      prompt: 'كيف تُدرج مطالب المجتمع في مناهج مدرسة المستقبل؟',
      options: [
        { id: 'opt-a', text: 'بتجاهل خبرات المجتمعات الأخرى' },
        { id: 'opt-b', text: 'باستشراف المرحلة القادمة والانفتاح على التجارب وتضمين المطالب بصورة مدروسة' },
        { id: 'opt-c', text: 'بتثبيت البرامج بصرف النظر عن الإمكانات' },
        { id: 'opt-d', text: 'بفصل المدرسة عن رؤية المجتمع' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يدعو المؤلف إلى الاستشراف والاستفادة من التجارب وتضمين متطلبات المجتمع في المناهج.',
      sourceReference: '«مهارات مرتبطة بمتطلبات المجتمع» — الصفحة المطبوعة 35.',
    },
  },
  // 19 | العنوان الأصلي: مهارات مرتبطة بطبيعة العصر
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q19',
      type: 'multiple_choice',
      order: 19,
      prompt: 'لماذا تحتاج التربية والتعليم إلى التطوير المتواصل بحسب النص؟',
      options: [
        { id: 'opt-a', text: 'لأن المجتمع لا يتغير' },
        { id: 'opt-b', text: 'لأن المهارات تبقى ثابتة' },
        { id: 'opt-c', text: 'لسرعة التحول وشمول التغير لمناحي الحياة' },
        { id: 'opt-d', text: 'لأن القيم لا علاقة لها بالتعليم' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يؤكد النص سرعة التغير وشموله، ولذلك تتجدد حاجات التعليم والتربية.',
      sourceReference: '«مهارات مرتبطة بطبيعة العصر» — الصفحة المطبوعة 35.',
    },
  },
  // 20 | العنوان الأصلي: اللغة العربية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q20',
      type: 'multiple_choice',
      order: 20,
      prompt: 'ما أحد الأسس التي يوردها النص للاهتمام باللغة العربية؟',
      options: [
        { id: 'opt-a', text: 'أنها تنفصل عن تراث المجتمع' },
        { id: 'opt-b', text: 'أنها تمنع الانفتاح الثقافي' },
        { id: 'opt-c', text: 'أن استخدامها يقتصر على الامتحانات' },
        { id: 'opt-d', text: 'أنها لغة الأم ووعاء التراث الحضاري الإسلامي' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يربط المؤلف توظيف العربية بالهوية وكونها لغة القرآن ووعاء التراث الحضاري.',
      sourceReference: '«اللغة العربية» — الصفحة المطبوعة 35.',
    },
  },
  // 21 | العنوان الأصلي: اللغات الأجنبية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q21',
      type: 'multiple_choice',
      order: 21,
      prompt: 'ما الفائدة المتوقعة من تضمين لغة أو لغتين مساعدتين بأسلوب مشوق؟',
      options: [
        { id: 'opt-a', text: 'إثراء حصيلة المتعلم واستمرار تواصله مع مصادر المعلومات' },
        { id: 'opt-b', text: 'إلغاء اللغة الأم' },
        { id: 'opt-c', text: 'الابتعاد عن التواصل الحضاري' },
        { id: 'opt-d', text: 'تقليل قدرة الطالب على فهم المصطلحات' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يرى المؤلف أن تعلم لغات مساندة بصورة مشوقة يثري حصيلة المتعلم ويصلّه بالمصادر المتجددة.',
      sourceReference: '«اللغات الأجنبية» — الصفحة المطبوعة 36.',
    },
  },
  // 22 | العنوان الأصلي: توسيع دائرة النشاط وتنظيم البرامج التي تحقق ذلك
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q22',
      type: 'multiple_choice',
      order: 22,
      prompt: 'أي مثال ينسجم مع برامج النشاط التي يدعو إليها النص؟',
      options: [
        { id: 'opt-a', text: 'زيادة الحصص المجردة دون تطبيق' },
        { id: 'opt-b', text: 'أنشطة لخدمة الأسرة واستثمار خامات المجتمع والثقافة الصحية' },
        { id: 'opt-c', text: 'منع التفاعل مع المجتمع المفتوح' },
        { id: 'opt-d', text: 'قصر النشاط على تلقين المعلومات' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يذكر النص خدمة الأسرة واستثمار خامات المجتمع والثقافة الصحية ضمن مجالات النشاط الهادف.',
      sourceReference: '«توسيع دائرة النشاط وتنظيم البرامج التي تحقق ذلك» — الصفحة المطبوعة 36.',
    },
  },
  // 23 | العنوان الأصلي: اعتماد المناهج على تنفيذ التعليم التعاوني وتنمية الإبداع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q23',
      type: 'multiple_choice',
      order: 23,
      prompt: 'متى تتحقق فوائد التعليم التعاوني كما حددها المؤلف؟',
      options: [
        { id: 'opt-a', text: 'عند غياب تقويم الأداء' },
        { id: 'opt-b', text: 'عند انعدام الأهداف المحددة' },
        { id: 'opt-c', text: 'عند توافر الإمكانات والخطط والأهداف والبرامج المترابطة والتقويم' },
        { id: 'opt-d', text: 'عند اعتماد العمل الارتجالي' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يشترط النص إمكانات وخططًا مدروسة وأهدافًا محددة وبرامج مترابطة وتقويمًا مستمرًا.',
      sourceReference: '«اعتماد المناهج على تنفيذ التعليم التعاوني وتنمية الإبداع» — الصفحة المطبوعة 36.',
    },
  },
  // 24 | العنوان الأصلي: أن تحقق المناهج متطلبات المتعلمين وخصائصهم المرحلية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q24',
      type: 'multiple_choice',
      order: 24,
      prompt: 'أي إجراء يقترحه النص لزيادة مشاركة المتعلم في الخبرة؟',
      options: [
        { id: 'opt-a', text: 'إلغاء النقاش من الوحدة الدراسية' },
        { id: 'opt-b', text: 'توحيد حاجات جميع المراحل' },
        { id: 'opt-c', text: 'إغفال ميول المتعلم' },
        { id: 'opt-d', text: 'صياغة بعض مكونات الوحدة في صورة أسئلة مفتوحة يناقشها المتعلم' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يذكر المؤلف الأسئلة المفتوحة كمشروعات تسهم في مناقشة المتعلم واكتسابه الخبرة.',
      sourceReference: '«أن تحقق المناهج متطلبات المتعلمين وخصائصهم المرحلية» — الصفحة المطبوعة 36.',
    },
  },
  // 25 | العنوان الأصلي: الاهتمام بمراكز تخطيط وتقويم البرامج ودعمها
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch4-draft-q25',
      type: 'multiple_choice',
      order: 25,
      prompt: 'أي عمل يدخل ضمن مهام مراكز التخطيط والتقويم في النص؟',
      options: [
        { id: 'opt-a', text: 'دراسة اقتصاديات الرسوب والتسرب والتكلفة الحقيقية للطالب والخريج' },
        { id: 'opt-b', text: 'الاكتفاء بتقارير دون تجريب' },
        { id: 'opt-c', text: 'استبعاد متابعة الخطط الميدانية' },
        { id: 'opt-d', text: 'تجاهل البدائل عند ظهور خلل' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يحدد النص بحوث اقتصاديات التعليم ومتابعة الخطط والتجريب العملي وإصلاح الخلل ضمن هذه المهام.',
      sourceReference: '«الاهتمام بمراكز تخطيط وتقويم البرامج ودعمها» — الصفحة المطبوعة 37.',
    },
  },
  // 26 | العنوان الأصلي: طبيعة المجتمع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q26',
      type: 'true_false',
      order: 26,
      prompt: 'يرى المؤلف أن المجتمع يستفيد من مخرجات التعليم ويسهم عبر مؤسساته في تكوين شخصية المتعلم.',
      correctAnswer: true,
      explanation: 'ينص الفصل على مساهمة مؤسسات المجتمع في تشكيل شخصية المتعلم والاستفادة من التعليم.',
      sourceReference: '«طبيعة المجتمع» — الصفحة المطبوعة 31.',
    },
  },
  // 27 | العنوان الأصلي: طبيعة العصر
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q27',
      type: 'true_false',
      order: 27,
      prompt: 'يدعو النص إلى إهمال المطالب الاجتماعية المتجددة عند بناء المنهج.',
      correctAnswer: false,
      explanation: 'يؤكد ضرورة التعامل بجدية مع المطالب والمنجزات الاجتماعية المتجددة.',
      sourceReference: '«طبيعة العصر» — الصفحة المطبوعة 31.',
    },
  },
  // 28 | العنوان الأصلي: تأثير المعلومة وتيار العولمة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q28',
      type: 'true_false',
      order: 28,
      prompt: 'كان تقديم المهارات المعرفية من مهام المدرسة حين كانت منافسة قنوات المعلومات لها أقل.',
      correctAnswer: true,
      explanation: 'يقارن النص بين موقع المدرسة السابق وتعدد القنوات الحالية المنافسة.',
      sourceReference: '«تأثير المعلومة وتيار العولمة» — الصفحة المطبوعة 31.',
    },
  },
  // 29 | العنوان الأصلي: تأثير المتغير
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'direct_recall',
    question: {
      id: 'ch4-draft-q29',
      type: 'true_false',
      order: 29,
      prompt: 'يحصر النص آليات المتغير الراهنة في تغيير المناهج الدراسية فقط.',
      correctAnswer: false,
      explanation: 'يسرد آليات تشمل العولمة وتقنية المعلومات والحواسيب والمعايير الدولية.',
      sourceReference: '«تأثير المتغير» — الصفحة المطبوعة 32.',
    },
  },
  // 30 | العنوان الأصلي: مكانة التعليم الرسمي في حياة المستقبل
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-influencing-factors',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q30',
      type: 'true_false',
      order: 30,
      prompt: 'يقرر المؤلف أن الصورة المستقبلية للتعليم ستتغير، لكن مقدار التطوير يختلف بين المجتمعات.',
      correctAnswer: true,
      explanation: 'يؤكد النص التغير المتوقع مع تفاوت المجتمعات في الإمكانات والإنتاجية.',
      sourceReference: '«مكانة التعليم الرسمي في حياة المستقبل» — الصفحة المطبوعة 32.',
    },
  },
  // 31 | العنوان الأصلي: توسيع دائرة بناء المناهج
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q31',
      type: 'true_false',
      order: 31,
      prompt: 'يرى المؤلف أن دائرة بناء المنهج يجب أن تبقى ذات مساحة ثابتة مهما تغير المجتمع.',
      correctAnswer: false,
      explanation: 'يوضح أنها متجددة المساحة بحسب طبيعة العصر وحاجات المجتمع.',
      sourceReference: '«توسيع دائرة بناء المناهج» — الصفحة المطبوعة 32.',
    },
  },
  // 32 | العنوان الأصلي: التعامل مع المعلومة وطرق اكتسابها
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q32',
      type: 'true_false',
      order: 32,
      prompt: 'تتسابق قنوات اكتساب المعلومة في عصر المعلوماتية في سرعة تقديمها وطرق عرضها.',
      correctAnswer: true,
      explanation: 'يصف النص سباق قنوات المعرفة في العرض وخدمة المعلومة.',
      sourceReference: '«التعامل مع المعلومة وطرق اكتسابها» — الصفحة المطبوعة 33.',
    },
  },
  // 33 | العنوان الأصلي: الاهتمام بالتعليم الذاتي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'direct_recall',
    question: {
      id: 'ch4-draft-q33',
      type: 'true_false',
      order: 33,
      prompt: 'يصف المؤلف التعليم الذاتي بأنه نمط ظهر لأول مرة في العصر الحديث دون أي جذور سابقة.',
      correctAnswer: false,
      explanation: 'يستشهد المؤلف بممارسات اختيار التعلم في مدارس الكتاتيب.',
      sourceReference: '«الاهتمام بالتعليم الذاتي» — الصفحة المطبوعة 33.',
    },
  },
  // 34 | العنوان الأصلي: التقليل من الاعتماد على جهد المعلم وتحديد موقع الكتاب المدرسي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q34',
      type: 'true_false',
      order: 34,
      prompt: 'يعرض النص المعلم بوصفه جزءًا من استراتيجية تعليمية شاملة متكاملة.',
      correctAnswer: true,
      explanation: 'يحدد موقع المعلم الحديث داخل استراتيجية شاملة وفق أسلوب النظم.',
      sourceReference: '«التقليل من الاعتماد على جهد المعلم وتحديد موقع الكتاب المدرسي» — الصفحة المطبوعة 33.',
    },
  },
  // 35 | العنوان الأصلي: الاهتمام بالمهارات المرتبطة بمهن المستقبل
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-future-curriculum-first-five-components',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q35',
      type: 'true_false',
      order: 35,
      prompt: 'يؤكد النص أن مطالب الحياة المهنية ثابتة ولا تستلزم تطوير المناهج.',
      correctAnswer: false,
      explanation: 'يشير إلى تجدد متطلبات الحياة وظهور مهن مستقبلية جديدة.',
      sourceReference: '«الاهتمام بالمهارات المرتبطة بمهن المستقبل» — الصفحة المطبوعة 33.',
    },
  },
  // 36 | العنوان الأصلي: تحديد المهارات والقيم الأساسية المطلوب تحققها في المنهج
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q36',
      type: 'true_false',
      order: 36,
      prompt: 'يعُدّ المؤلف القيم مادة لبناء الأمة وهويتها.',
      correctAnswer: true,
      explanation: 'يصف النص القيم بأنها مادة بناء الأمة وهوية المجتمع.',
      sourceReference: '«تحديد المهارات والقيم الأساسية المطلوب تحققها في المنهج» — الصفحة المطبوعة 34.',
    },
  },
  // 37 | العنوان الأصلي: مهارات مرتبطة بحاجات المتعلم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q37',
      type: 'true_false',
      order: 37,
      prompt: 'يركز النص على إعداد الطالب لمطالب الحياة الراهنة فقط دون التفكير في المستقبل.',
      correctAnswer: false,
      explanation: 'يؤكد استشراف المستقبل وتأهيل الطالب لتحدياته.',
      sourceReference: '«مهارات مرتبطة بحاجات المتعلم» — الصفحة المطبوعة 34.',
    },
  },
  // 38 | العنوان الأصلي: مهارات مرتبطة بحاجات المتعلم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q38',
      type: 'true_false',
      order: 38,
      prompt: 'يربط النص تلبية حاجات المتعلم بتنمية ثقته بنفسه وبمجتمعه وحبه للعلم.',
      correctAnswer: true,
      explanation: 'يسرد تلك الآثار ضمن نتائج تحقيق مطالب المتعلم.',
      sourceReference: '«مهارات مرتبطة بحاجات المتعلم» — الصفحة المطبوعة 34.',
    },
  },
  // 39 | العنوان الأصلي: مهارات مرتبطة بمتطلبات المجتمع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q39',
      type: 'true_false',
      order: 39,
      prompt: 'يقرر المؤلف إمكان نجاح الإدارة التعليمية في غياب أي رؤية للمجتمع وأهدافه.',
      correctAnswer: false,
      explanation: 'يؤكد أن غياب الرؤية الواضحة يمنع تحقيق المخرجات المنتظرة.',
      sourceReference: '«مهارات مرتبطة بمتطلبات المجتمع» — الصفحة المطبوعة 34.',
    },
  },
  // 40 | العنوان الأصلي: مهارات مرتبطة بطبيعة العصر
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q40',
      type: 'true_false',
      order: 40,
      prompt: 'يذكر المؤلف أن التغير في العصر الراهن سريع وشامل لمختلف مناحي الحياة.',
      correctAnswer: true,
      explanation: 'يؤكد سرعة التحول وضعف مقاومة المتغير وشموليته.',
      sourceReference: '«مهارات مرتبطة بطبيعة العصر» — الصفحة المطبوعة 35.',
    },
  },
  // 41 | العنوان الأصلي: الاهتمام باللغات
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'direct_recall',
    question: {
      id: 'ch4-draft-q41',
      type: 'true_false',
      order: 41,
      prompt: 'يقصر المؤلف الاهتمام باللغات على تعلم اللغات الأجنبية وحدها.',
      correctAnswer: false,
      explanation: 'يقسم المحور إلى اللغة العربية واللغات الأجنبية.',
      sourceReference: '«الاهتمام باللغات» — الصفحة المطبوعة 35.',
    },
  },
  // 42 | العنوان الأصلي: اللغة العربية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q42',
      type: 'true_false',
      order: 42,
      prompt: 'يرى النص أن توظيف العربية في التعليم ينبغي أن يتجنب الرتابة والضعف.',
      correctAnswer: true,
      explanation: 'يدعو إلى أسلوب فاعل يجدد طرق التوظيف ويسهل تلقي المهارات.',
      sourceReference: '«اللغة العربية» — الصفحة المطبوعة 35.',
    },
  },
  // 43 | العنوان الأصلي: اللغات الأجنبية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-skills-values-languages',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q43',
      type: 'true_false',
      order: 43,
      prompt: 'يشترط النص تدريس اللغات المساندة بأسلوب معقد ورتيب لزيادة التحصيل.',
      correctAnswer: false,
      explanation: 'يدعو إلى أسلوب مشوق بعيد عن الرتابة والتعقيد.',
      sourceReference: '«اللغات الأجنبية» — الصفحة المطبوعة 36.',
    },
  },
  // 44 | العنوان الأصلي: توسيع دائرة النشاط وتنظيم البرامج التي تحقق ذلك
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q44',
      type: 'true_false',
      order: 44,
      prompt: 'يمكن لبرامج النشاط الهادفة أن توسع تفكير الطالب وتربطه بالمجتمع.',
      correctAnswer: true,
      explanation: 'يشير النص إلى تأثير الأنشطة المدروسة في السلوك والتفكير والارتباط بالمجتمع.',
      sourceReference: '«توسيع دائرة النشاط وتنظيم البرامج التي تحقق ذلك» — الصفحة المطبوعة 36.',
    },
  },
  // 45 | العنوان الأصلي: اعتماد المناهج على تنفيذ التعليم التعاوني وتنمية الإبداع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q45',
      type: 'true_false',
      order: 45,
      prompt: 'يضع التعليم التعاوني المعلم خارج عمليتي المتابعة والتقويم تمامًا.',
      correctAnswer: false,
      explanation: 'يؤكد النص أنه يمنح المعلم فرصة للمتابعة والتقويم.',
      sourceReference: '«اعتماد المناهج على تنفيذ التعليم التعاوني وتنمية الإبداع» — الصفحة المطبوعة 36.',
    },
  },
  // 46 | العنوان الأصلي: أن تحقق المناهج متطلبات المتعلمين وخصائصهم المرحلية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q46',
      type: 'true_false',
      order: 46,
      prompt: 'تتفاوت مطالب المتعلمين من مرحلة إلى أخرى ومن مجتمع إلى آخر ومن زمن إلى آخر.',
      correctAnswer: true,
      explanation: 'يربط النص تغير المطالب بالمراحل والمجتمعات والفترات الزمنية.',
      sourceReference: '«أن تحقق المناهج متطلبات المتعلمين وخصائصهم المرحلية» — الصفحة المطبوعة 36.',
    },
  },
  // 47 | العنوان الأصلي: اهتمامها بالمفاهيم والمصطلحات العملية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q47',
      type: 'true_false',
      order: 47,
      prompt: 'يرى المؤلف أن اختلاف دلالات المصطلحات بين العاملين بالتعليم يحسن الإنتاجية بالضرورة.',
      correctAnswer: false,
      explanation: 'يصف اختلاف الدلالات بأنه من عوامل ضعف الإنتاجية وسبب للاجتهادات العقيمة.',
      sourceReference: '«اهتمامها بالمفاهيم والمصطلحات العملية» — الصفحة المطبوعة 37.',
    },
  },
  // 48 | العنوان الأصلي: دعمها نظرة الإنسان للكون والحياة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q48',
      type: 'true_false',
      order: 48,
      prompt: 'يدعو النص إلى توظيف التأمل في الكون بصورة تراعي طبيعة المتلقي ومستواه.',
      correctAnswer: true,
      explanation: 'يحث المؤلف على تقديم ذلك بصورة مشوقة تتناسب مع المتلقي وتنمي التأمل.',
      sourceReference: '«دعمها نظرة الإنسان للكون والحياة» — الصفحة المطبوعة 37.',
    },
  },
  // 49 | العنوان الأصلي: الاهتمام بمراكز تخطيط وتقويم البرامج ودعمها
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q49',
      type: 'true_false',
      order: 49,
      prompt: 'يستبعد النص التجريب العملي من مسؤوليات مراكز التخطيط والتقويم.',
      correctAnswer: false,
      explanation: 'يشدد على المتابعة والتقويم وخطة التجريب العملي وتقديم البدائل.',
      sourceReference: '«الاهتمام بمراكز تخطيط وتقويم البرامج ودعمها» — الصفحة المطبوعة 37.',
    },
  },
  // 50 | العنوان الأصلي: اهتمامها بالمفاهيم والمصطلحات العملية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-factors',
    topicId: 'top-ch4-organizational-faith-research-axes',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch4-draft-q50',
      type: 'true_false',
      order: 50,
      prompt: 'يقترح النص نشر المفاهيم التربوية الدقيقة عبر النشرات الموجهة والتدريبات القصيرة.',
      correctAnswer: true,
      explanation: 'يذكر المؤلف النشرات المتتابعة والتدريبات القصيرة وتوحيد استخدامها.',
      sourceReference: '«اهتمامها بالمفاهيم والمصطلحات العملية» — الصفحة المطبوعة 37.',
    },
  },
];

/**
 * بنك أسئلة مسودة غير معتمد للفصل الرابع (50 سؤالاً)
 */
export const CHAPTER_4_COMPREHENSIVE_DRAFT_BANK: GovernedQuestionBank = {
  bankId: 'bank-ch4-factors-draft-50q',
  version: '0.1.0-draft',
  contentHash: '', // سيتم حسابه قطعيًا أدناه
  title: 'مسودة اختبار الفصل الرابع: العوامل المؤثرة في بناء المنهج',
  description:
    'مسودة بنك أسئلة غير معتمدة تتضمن 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) تغطي موضوعات الفصل الرابع الخمسة ومحاور مناهج المستقبل بالتفصيل.',
  instructions:
    'أجب عن جميع الأسئلة الـ 50. هذه المسودة مخصصة للمراجعة والتحكيم الأكاديمي الداخلي فقط وليست منشورة للطلاب.',
  courseId: 'course-1',
  chapterId: 'chap-curriculum-factors',
  targetType: 'chapter',
  approvalStatus: 'draft',
  reviewMetadata: {
    reviewerName: 'قيد المراجعة الأكاديمية (مسودة غير معتمدة)',
    reviewerTitle: 'المراجع الأكاديمي لم يُحدد بعد',
    approvalDate: '', // غير معتمد بعد
    academicSource: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم',
    sourceLocation: 'الفصل الرابع (ص 31 - 37 مطبوعة)',
    reviewNotes:
      'مسودة اختبار الفصل الرابع المرفوعة في وثيقة «اختبار_الفصل_الرابع_مناهج_التربية_الرياضية_50_سؤال(1).docx» تتكون من 50 سؤالاً (25 MCQ + 25 TF). جميع الأسئلة في وضع مسودة أولية محظورة من النشر للطلاب. يُلاحظ وجود نمط دوري لمفاتيح إجابات الاختيار من متعدد (أ، ب، ج، د) ونمط متناوب لأسئلة الصواب والخطأ (صواب، خطأ). نوصي عند النشر المستقبلي بتفعيل الخلط الآمن للعرض (presentation shuffling) للأسئلة والخيارات مع الحفاظ على ثبات المعرفات والتقييم، مع ثبات تسميات الصواب والخطأ.',
  },
  passingScorePercentage: 60,
  questions: DRAFT_QUESTIONS,
};

// حساب التجزئة التوافقية القطعية لمحتوى المسودة
CHAPTER_4_COMPREHENSIVE_DRAFT_BANK.contentHash = computeQuestionBankHash(CHAPTER_4_COMPREHENSIVE_DRAFT_BANK);
