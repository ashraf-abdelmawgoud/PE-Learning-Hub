/**
 * chapter5ComprehensiveDraft.ts
 *
 * مسودة بنك أسئلة الاختبار الشامل للفصل الخامس: تصميمات وتنظيمات المنهاج المدرسية
 * كتاب مناهج التربية الرياضية — إعداد: أ.د/ هاني الدسوقي إبراهيم (2025/2026م)
 *
 * المصدر المعتمد: وثيقة «اختبار_الفصل_الخامس_مناهج_التربية_الرياضية_50_سؤال.docx»
 *
 * حالة الحوكمة: DRAFT (مسودة أولية قيد المراجعة والتحكيم الأكاديمي)
 * محظور من النشر للطلاب وغير مدرج في بيان النشر الرسمي (QUIZ_PUBLICATION_MANIFEST).
 *
 * إجمالي الأسئلة: 50 سؤالاً
 * - 25 سؤال اختيار من متعدد (MCQ) — لكل سؤال 4 خيارات وإجابة صحيحة واحدة.
 * - 25 سؤال صواب وخطأ (True/False).
 * - تغطية شاملة لموضوعات الفصل الخامس السبعة بالتفصيل.
 * - معالجة السؤال 48 بالاستبدال القطعي الموثق عيانياً (مسار ب)، وإعادة تنظيم خيارات أسئلة الاختيار من متعدد لكسر النمط الدوري التكراري.
 */

import type { GovernedQuestionBank, GovernedQuizQuestion } from '../../../../types/quizGovernance.ts';
import { computeQuestionBankHash } from '../../../../utils/contentHash.ts';

const DRAFT_QUESTIONS: GovernedQuizQuestion[] = [  // 1 | العنوان الأصلي: المقدمة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q01',
      type: 'multiple_choice',
      order: 1,
      prompt: 'أي عملية من عمليات المناهج يصفها المؤلف بأنها أولى العمليات وأساس التنفيذ والتطوير؟',
      options: [
        { id: 'opt-a', text: 'تصميم المنهاج' },
        { id: 'opt-b', text: 'تنفيذ المنهاج' },
        { id: 'opt-c', text: 'تقويم أداء المعلم' },
        { id: 'opt-d', text: 'إعداد الكتاب المدرسي' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'التصميم يحدد الأهداف والمحتوى والأنشطة والتقويم، ويعد أساس العمليات التالية.',
      sourceReference: 'المقدمة — الصفحة المطبوعة 38.',
    },
  },  // 2 | العنوان الأصلي: مفهوم التصميم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q02',
      type: 'multiple_choice',
      order: 2,
      prompt: 'ما الجانب الذي يميز تصميم المنهاج وفق تعريفه الإجرائي في الفصل؟',
      options: [
        { id: 'opt-a', text: 'حصر محتوى الكتاب فقط' },
        { id: 'opt-b', text: 'تنظيم المنهاج وتطويره وتنفيذه وتقويمه وفق خصائص الفئة المستهدفة' },
        { id: 'opt-c', text: 'تحديد أعداد المعلمين' },
        { id: 'opt-d', text: 'اختيار الأنشطة دون تقويم' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يصف المؤلف التصميم بعملية منطقية تتناول الإجراءات المنظمة والمتفقة مع الخصائص الإدراكية للمستهدفين.',
      sourceReference: 'مفهوم التصميم — الصفحة المطبوعة 38.',
    },
  },  // 3 | العنوان الأصلي: مبادئ التصميم — مبدأ الشمول
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q03',
      type: 'multiple_choice',
      order: 3,
      prompt: 'عندما يضم المنهاج الخبرات المستهدفة في إطار متكامل العناصر والأسس، فأي مبدأ يتحقق؟',
      options: [
        { id: 'opt-a', text: 'المرونة' },
        { id: 'opt-b', text: 'المشاركة' },
        { id: 'opt-c', text: 'التوازن' },
        { id: 'opt-d', text: 'الشمول' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'الشمول يعني احتواء المنهاج على جميع الخبرات التي تسعى المدرسة لتحقيقها ضمن نظام متكامل.',
      sourceReference: 'مبادئ التصميم — مبدأ الشمول — الصفحة المطبوعة 39.',
    },
  },  // 4 | العنوان الأصلي: مبادئ التصميم — مبدأ المشاركة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch5-draft-q04',
      type: 'multiple_choice',
      order: 4,
      prompt: 'أي إجراء يطابق مبدأ المشاركة في التصميم؟',
      options: [
        { id: 'opt-a', text: 'إشراك المعنيين بالمتعلم، ومنهم المتعلمون أنفسهم' },
        { id: 'opt-b', text: 'قصر التصميم على واضع المقرر' },
        { id: 'opt-c', text: 'تأجيل رأي المعلم إلى نهاية التنفيذ' },
        { id: 'opt-d', text: 'فصل المتعلمين عن قرارات المنهاج' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يشترط المبدأ مشاركة جميع من يعنيهم أمر المتعلمين، بما في ذلك المتعلمون أنفسهم.',
      sourceReference: 'مبادئ التصميم — مبدأ المشاركة — الصفحة المطبوعة 39.',
    },
  },  // 5 | العنوان الأصلي: مبادئ التصميم — مبدأ الاستمرارية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q05',
      type: 'multiple_choice',
      order: 5,
      prompt: 'ما العلاقة بين التصميم والتنفيذ والتطوير والتقويم وفق مبدأ الاستمرارية؟',
      options: [
        { id: 'opt-a', text: 'عمليات مستقلة تنتهي تباعًا' },
        { id: 'opt-b', text: 'التقويم يحل محل التنفيذ' },
        { id: 'opt-c', text: 'عمليات متفاعلة متداخلة ومستمرة' },
        { id: 'opt-d', text: 'تنتهي عمليات المنهاج باكتمال التصميم' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يرى النص أن عمليات المنهاج تظل مفتوحة ومتداخلة ولا تتوقف عند اكتمال تصميم أولي.',
      sourceReference: 'مبادئ التصميم — مبدأ الاستمرارية — الصفحة المطبوعة 39.',
    },
  },  // 6 | العنوان الأصلي: مبادئ التصميم — مبدأ المرونة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q06',
      type: 'multiple_choice',
      order: 6,
      prompt: 'في ضوء مبدأ المرونة، على أي أساس يجري انتقاء بدائل المنهاج؟',
      options: [
        { id: 'opt-a', text: 'أسبقية اقتراح البديل' },
        { id: 'opt-b', text: 'رأي الإدارة دون غيرها' },
        { id: 'opt-c', text: 'التجريب والدراسة والتمحيص' },
        { id: 'opt-d', text: 'سهولة الحصول على البديل فقط' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يربط المؤلف المرونة بتوفر بدائل لا تُختار إلا بعد التجريب والدراسة والتمحيص.',
      sourceReference: 'مبادئ التصميم — مبدأ المرونة — الصفحة المطبوعة 39.',
    },
  },  // 7 | العنوان الأصلي: مبادئ التصميم — مبدأ التوازن
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q07',
      type: 'multiple_choice',
      order: 7,
      prompt: 'أي مثال أورده المؤلف على التوازن عند تصميم محتوى المنهاج؟',
      options: [
        { id: 'opt-a', text: 'الموازنة بين أعداد الفصول فقط' },
        { id: 'opt-b', text: 'توحيد الزمن لجميع المقررات' },
        { id: 'opt-c', text: 'الاعتماد على المعرفة النظرية وحدها' },
        { id: 'opt-d', text: 'الموازنة بين المعلومات والمهارات والاتجاهات وبين النظرية والتطبيق' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يخص المؤلف تصميم المحتوى بالموازنة بين المعرفة والمهارة والاتجاه وبين الناحيتين النظرية والتطبيقية.',
      sourceReference: 'مبادئ التصميم — مبدأ التوازن — الصفحة المطبوعة 39.',
    },
  },  // 8 | العنوان الأصلي: مبادئ التصميم — مبدأ اعتماد محور التصميم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q08',
      type: 'multiple_choice',
      order: 8,
      prompt: 'إذا بُني المنهاج على مشكلات المجتمع، فما العنصر الذي حدد هوية التصميم؟',
      options: [
        { id: 'opt-a', text: 'طريقة طباعة المقرر' },
        { id: 'opt-b', text: 'المحور الذي تُنظَّم حوله عناصر المنهاج' },
        { id: 'opt-c', text: 'ساعات اليوم الدراسي' },
        { id: 'opt-d', text: 'نوع الاختبارات النهائية' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'اعتماد محور أساسي كالمشكلات الاجتماعية أو الحقول المعرفية يعطي التصميم سماته العامة.',
      sourceReference: 'مبادئ التصميم — مبدأ اعتماد محور التصميم — الصفحة المطبوعة 39.',
    },
  },  // 9 | العنوان الأصلي: مراعاة أبعاد الواقع التربوي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-design-principles-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q09',
      type: 'multiple_choice',
      order: 9,
      prompt: 'أي مما يأتي يدخل في مراعاة أبعاد الواقع التربوي عند تصميم المنهاج؟',
      options: [
        { id: 'opt-a', text: 'استبعاد ظروف اتخاذ القرارات' },
        { id: 'opt-b', text: 'الاقتصار على مضمون درس واحد' },
        { id: 'opt-c', text: 'الاعتماد على ميول مصمم المنهاج' },
        { id: 'opt-d', text: 'تحديد الموارد والعوامل المؤثرة في السياسة التعليمية ومستويات الأجهزة الإدارية' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يتناول المبدأ الموارد المادية والبشرية والمعنوية والسياسة التعليمية والتنظيم الإداري ومؤثرات القرار.',
      sourceReference: 'مراعاة أبعاد الواقع التربوي — الصفحة المطبوعة 40.',
    },
  },  // 10 | العنوان الأصلي: مستويات التصميم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-design-principles-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q10',
      type: 'multiple_choice',
      order: 10,
      prompt: 'ما الحجة الأساسية المؤيدة للتصميم اللامركزي كما عرضها المؤلف؟',
      options: [
        { id: 'opt-a', text: 'أنه يلغي الحاجة إلى التخطيط' },
        { id: 'opt-b', text: 'أنه يمنع مشاركة المدرسة' },
        { id: 'opt-c', text: 'قدرة المستويات المحلية على تحديد حاجات المتعلمين وظروف البيئات المختلفة' },
        { id: 'opt-d', text: 'أنه يفرض منهجًا موحدًا على البيئات' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يرى مؤيدو اللامركزية أن المستويات المحلية أقرب إلى الحاجات والمشكلات والإمكانات المتفاوتة.',
      sourceReference: 'مستويات التصميم — الصفحة المطبوعة 40.',
    },
  },  // 11 | العنوان الأصلي: مناهج المواد الدراسية — الفلسفة التي تقوم عليها
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q11',
      type: 'multiple_choice',
      order: 11,
      prompt: 'على أي تصور يقوم تنظيم مناهج المواد الدراسية؟',
      options: [
        { id: 'opt-a', text: 'جعل مشكلات المتعلم وحدها محور كل مادة' },
        { id: 'opt-b', text: 'إلمام التلميذ بالمعارف والتراث الثقافي في مواد دراسية وسيلة لإعداده للحياة' },
        { id: 'opt-c', text: 'إلغاء تقسيم المعرفة إلى مواد' },
        { id: 'opt-d', text: 'الاستغناء عن نقل التراث الثقافي' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يرى أنصار هذا التنظيم أن تنظيم المعارف في مواد يهيئ المتعلم للحياة ويساعد على نقل التراث.',
      sourceReference: 'مناهج المواد الدراسية — الفلسفة التي تقوم عليها — الصفحة المطبوعة 41.',
    },
  },  // 12 | العنوان الأصلي: مقارنة بين خصائص التنظيمات الأساسية للمناهج
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-technological-curriculum-comparison',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch5-draft-q12',
      type: 'multiple_choice',
      order: 12,
      prompt: 'في المقارنة الواردة بين التنظيمات، أيّ تنظيم يُعد بالتعاون المشترك بين المعلم وتلاميذه بدل إعداده مسبقًا؟',
      options: [
        { id: 'opt-a', text: 'منهج المواد الدراسية' },
        { id: 'opt-b', text: 'منهج النشاط' },
        { id: 'opt-c', text: 'المنهج التكنولوجي' },
        { id: 'opt-d', text: 'التنظيم القائم على المواد المنفصلة' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'تذكر المقارنة أن منهج النشاط لا يُعد مسبقًا، وإنما يتشكل بالتعاون المشترك بين المعلم وتلاميذه، مقابل الإعداد المسبق في منهج المواد الدراسية.',
      sourceReference: 'مقارنة بين خصائص التنظيمات الأساسية للمناهج — الصفحة المطبوعة 47.',
    },
  },  // 13 | العنوان الأصلي: منهج المواد الدراسية المرتبطة — الطريقة المنظمة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch5-draft-q13',
      type: 'multiple_choice',
      order: 13,
      prompt: 'كيف يتحقق الربط المنظم بين المواد الدراسية؟',
      options: [
        { id: 'opt-a', text: 'بالمصادفة وحدها' },
        { id: 'opt-b', text: 'بإلغاء تخصصات المعلمين' },
        { id: 'opt-c', text: 'بترك الربط لرغبة كل معلم دون تنسيق' },
        { id: 'opt-d', text: 'باتفاق معلمي الصف على موضوع شامل يدرسه كل منهم من زاوية تخصصه' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'في الطريقة المنظمة يخطط المعلمون معًا لموضوع شامل، ويعالجه كل معلم من منظور مادته.',
      sourceReference: 'منهج المواد الدراسية المرتبطة — الطريقة المنظمة — الصفحة المطبوعة 42.',
    },
  },  // 14 | العنوان الأصلي: إيجابيات وسلبيات مناهج المواد الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q14',
      type: 'multiple_choice',
      order: 14,
      prompt: 'ما أحد الانتقادات الصريحة لمناهج المواد الدراسية؟',
      options: [
        { id: 'opt-a', text: 'منح التلاميذ حرية كاملة في تخطيط المنهاج' },
        { id: 'opt-b', text: 'تقديم التعلم عبر مشاريع جماعية' },
        { id: 'opt-c', text: 'إغفال الفروق الفردية بين التلاميذ' },
        { id: 'opt-d', text: 'إعطاء الأنشطة العملية أولوية مطلقة' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يذكر المؤلف إهمال الفروق الفردية، مع ضعف الاهتمام بالجوانب العملية ومشاركة المتعلم.',
      sourceReference: 'إيجابيات وسلبيات مناهج المواد الدراسية — الصفحة المطبوعة 43.',
    },
  },  // 15 | العنوان الأصلي: منهج النشاط — خصائص منهج النشاط
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-activity-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q15',
      type: 'multiple_choice',
      order: 15,
      prompt: 'إذا عُدلت خبرات المنهاج في ضوء حاجات التلاميذ الطارئة، فأي خاصية تظهر؟',
      options: [
        { id: 'opt-a', text: 'التنظيم الثابت للمواد' },
        { id: 'opt-b', text: 'مرونة المحتوى' },
        { id: 'opt-c', text: 'تقديم المعرفة بالتلقين' },
        { id: 'opt-d', text: 'الفصل التام بين المعلم والمتعلم' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يتصف منهج النشاط بالمرونة وإمكان تغيير المحتوى استجابة لحاجات التلاميذ واهتماماتهم.',
      sourceReference: 'منهج النشاط — خصائص منهج النشاط — الصفحة المطبوعة 43.',
    },
  },  // 16 | العنوان الأصلي: متطلبات نجاح تطبيق منهج النشاط
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-activity-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q16',
      type: 'multiple_choice',
      order: 16,
      prompt: 'أي شرط تنظيمي يشجع نجاح تطبيق منهج النشاط؟',
      options: [
        { id: 'opt-a', text: 'مرونة أوقات الأنشطة واتساع الأماكن وتيسير متطلبات المشاريع' },
        { id: 'opt-b', text: 'تثبيت أوقات الأنشطة في حصص تقليدية جامدة' },
        { id: 'opt-c', text: 'تقليص ساحات ممارسة الأنشطة' },
        { id: 'opt-d', text: 'منع المعلمين من التوجيه' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يشترط النص مرونة المكان والزمن، وإعداد المعلمين وتوفير النفقات ومرونة الإجراءات الإدارية.',
      sourceReference: 'متطلبات نجاح تطبيق منهج النشاط — الصفحة المطبوعة 44.',
    },
  },  // 17 | العنوان الأصلي: إيجابيات وسلبيات منهج النشاط
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-activity-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q17',
      type: 'multiple_choice',
      order: 17,
      prompt: 'أي عيب يورده المؤلف لمنهج النشاط؟',
      options: [
        { id: 'opt-a', text: 'إلزام التلاميذ بحفظ مقرر ثابت' },
        { id: 'opt-b', text: 'إهمال اختلاف الميول دائمًا' },
        { id: 'opt-c', text: 'صعوبة ضمان الاستمرارية والترابط والتكامل بين الموضوعات' },
        { id: 'opt-d', text: 'تغليب اختبارات التحصيل على النشاط' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يذكر المؤلف عدم ضمان الاستمرارية والترابط والتكامل بين موضوعات منهج النشاط.',
      sourceReference: 'إيجابيات وسلبيات منهج النشاط — الصفحة المطبوعة 44.',
    },
  },  // 18 | العنوان الأصلي: المنهج المحوري — فلسفة المنهاج المحوري
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q18',
      type: 'multiple_choice',
      order: 18,
      prompt: 'ما نقطة الارتكاز الأساسية للمنهج المحوري بحسب فلسفته؟',
      options: [
        { id: 'opt-a', text: 'حاجات المتعلمين بوصفها محورًا تدور حوله الدروس' },
        { id: 'opt-b', text: 'تقسيم المادة إلى فروع دقيقة' },
        { id: 'opt-c', text: 'الاعتماد على الكتاب وحده' },
        { id: 'opt-d', text: 'قياس التحصيل النهائي' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'ترتكز فلسفته على حاجات المتعلمين بوصفها محورًا أساسيًا للدروس.',
      sourceReference: 'المنهج المحوري — فلسفة المنهاج المحوري — الصفحة المطبوعة 44.',
    },
  },  // 19 | العنوان الأصلي: أسس المنهاج المحوري
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'applied_analysis',
    question: {
      id: 'ch5-draft-q19',
      type: 'multiple_choice',
      order: 19,
      prompt: 'أي نشاط يطابق أسس المنهج المحوري؟',
      options: [
        { id: 'opt-a', text: 'قصر التخطيط على المعلم منفردًا' },
        { id: 'opt-b', text: 'تدريب المتعلمين على حل المشكلات واكتساب مهارات التفكير العلمي' },
        { id: 'opt-c', text: 'الاستغناء عن اتجاهات المتعلمين' },
        { id: 'opt-d', text: 'فصل الأنشطة عن مشكلات المجتمع' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'من أسسه تدريب المتعلمين على حل المشكلات والتفكير العلمي وتولي التخطيط للوحدات تحت إشراف المعلم.',
      sourceReference: 'أسس المنهاج المحوري — الصفحة المطبوعة 45.',
    },
  },  // 20 | العنوان الأصلي: إيجابيات وسلبيات المنهج المحوري
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q20',
      type: 'multiple_choice',
      order: 20,
      prompt: 'ما الصعوبة التي تظهر ضمن سلبيات المنهج المحوري؟',
      options: [
        { id: 'opt-a', text: 'غياب فرص التواصل بين المعلم والمتعلم' },
        { id: 'opt-b', text: 'إلغاء العمل التعاوني' },
        { id: 'opt-c', text: 'الاعتماد على مقرر واحد مطبوع دائمًا' },
        { id: 'opt-d', text: 'صعوبة جمع المعلومات من مصادر متعددة في مناطق نقص وسائل الاتصال' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'ترد صعوبة الحصول على المعلومات من مصادر متنوعة خاصة بالمناطق ضعيفة الاتصال ضمن السلبيات.',
      sourceReference: 'إيجابيات وسلبيات المنهج المحوري — الصفحة المطبوعة 45.',
    },
  },  // 21 | العنوان الأصلي: منهاج الوحدة الدراسية — فلسفة منهاج الوحدة الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q21',
      type: 'multiple_choice',
      order: 21,
      prompt: 'ما جوهر فلسفة منهاج الوحدة الدراسية؟',
      options: [
        { id: 'opt-a', text: 'دمج أساسيات المعرفة مع حاجات المتعلمين ومشكلاتهم وربطها بالحياة' },
        { id: 'opt-b', text: 'فصل المعارف العلمية عن الحياة' },
        { id: 'opt-c', text: 'حصر التعليم في اختبار واحد' },
        { id: 'opt-d', text: 'إهمال الفروق الفردية في الاهتمامات' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'تقوم الفلسفة على الدمج بين المعرفة والحاجات والمشكلات وربطها بحياة المتعلم مع مراعاة الفروق الفردية.',
      sourceReference: 'منهاج الوحدة الدراسية — فلسفة منهاج الوحدة الدراسية — الصفحة المطبوعة 45.',
    },
  },  // 22 | العنوان الأصلي: إيجابيات وسلبيات منهج الوحدات الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q22',
      type: 'multiple_choice',
      order: 22,
      prompt: 'أي نتيجة إيجابية يربطها المؤلف بمنهاج الوحدات الدراسية؟',
      options: [
        { id: 'opt-a', text: 'إزالة الحواجز بين المواد وتحقيق التكامل بينها' },
        { id: 'opt-b', text: 'تقليل مشاركة المتعلم' },
        { id: 'opt-c', text: 'تعميق الفصل بين المواد' },
        { id: 'opt-d', text: 'استبعاد التقويم' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'من إيجابياته إزالة الحواجز بين المواد الدراسية وتحقيق التكامل وربط المعرفة بالحياة.',
      sourceReference: 'إيجابيات وسلبيات منهج الوحدات الدراسية — الصفحة المطبوعة 46.',
    },
  },  // 23 | العنوان الأصلي: المنهج التكنولوجي — مفهوم المنهج التكنولوجي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-technological-curriculum-comparison',
    approvalStatus: 'draft',
    cognitiveLevel: 'direct_recall',
    question: {
      id: 'ch5-draft-q23',
      type: 'multiple_choice',
      order: 23,
      prompt: 'ما المقصود بالمنهج التكنولوجي في نص الفصل؟',
      options: [
        { id: 'opt-a', text: 'مجموعة أجهزة تعمل دون أهداف تربوية' },
        { id: 'opt-b', text: 'مواقف تعليمية تُستخدم فيها تكنولوجيا التربية والتعليم في التصميم والتنفيذ والتقويم' },
        { id: 'opt-c', text: 'مقرر يقتصر على الحاسوب بوصفه موضوعًا' },
        { id: 'opt-d', text: 'خطة تعليم تلغي التقويم' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'تعريف المؤلف يربط استخدام تكنولوجيا التربية والتعليم بالمواقف التعليمية لتحقيق أهداف معينة.',
      sourceReference: 'المنهج التكنولوجي — مفهوم المنهج التكنولوجي — الصفحة المطبوعة 46.',
    },
  },  // 24 | العنوان الأصلي: المنهج التكنولوجي — أسس المنهج التكنولوجي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-technological-curriculum-comparison',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q24',
      type: 'multiple_choice',
      order: 24,
      prompt: 'أي مبدأ يرد ضمن أسس المنهج التكنولوجي؟',
      options: [
        { id: 'opt-a', text: 'التخلي عن التعلم الذاتي' },
        { id: 'opt-b', text: 'توحيد التعلم بلا مراعاة الفروق' },
        { id: 'opt-c', text: 'الاقتصار على تقويم أخير فقط' },
        { id: 'opt-d', text: 'تفريد التعليم والتقويم البنائي المستمر والختامي' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'ينص الفصل على تفريد التعليم والتعلم الذاتي والتقويم المستمر البنائي والختامي.',
      sourceReference: 'المنهج التكنولوجي — أسس المنهج التكنولوجي — الصفحة المطبوعة 47.',
    },
  },  // 25 | العنوان الأصلي: خصائص منهاج التربية الرياضية الجيد
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-pe-curriculum-characteristics',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q25',
      type: 'multiple_choice',
      order: 25,
      prompt: 'ما أساس بناء برنامج التربية الرياضية الجيد إلى جانب فهم المجتمع؟',
      options: [
        { id: 'opt-a', text: 'الاكتفاء بتنوع الأدوات' },
        { id: 'opt-b', text: 'إلغاء الأنشطة الترويحية' },
        { id: 'opt-c', text: 'فهم اهتمامات المتعلمين وحاجاتهم واتجاهاتهم وقدراتهم' },
        { id: 'opt-d', text: 'تجنب مشاركة أولياء الأمور' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يوجب المؤلف تأسيس البرنامج أيضًا على فهم المتعلم وحاجاته وميوله وقدراته والفروق الفردية.',
      sourceReference: 'خصائص منهاج التربية الرياضية الجيد — الصفحة المطبوعة 49.',
    },
  },
  // 26 | العنوان الأصلي: المقدمة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q26',
      type: 'true_false',
      order: 26,
      prompt: 'تُعد عملية تقويم المنهاج لازمة للتصميم والتنفيذ والتطوير، وقد تبدأ منذ مرحلة التصميم.',
      correctAnswer: true,
      explanation: 'يصف النص التقويم بأنه لازم للعمليات الثلاث، ويمكن أن يبدأ مع التصميم.',
      sourceReference: 'المقدمة — الصفحة المطبوعة 38.',
    },
  },
  // 27 | العنوان الأصلي: مفهوم التصميم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q27',
      type: 'true_false',
      order: 27,
      prompt: 'يختزل المؤلف تصميم المنهاج في اختيار المحتوى دون تحديد العلاقات بين عناصر المنهاج.',
      correctAnswer: false,
      explanation: 'التصميم يتناول عناصر المنهاج والعلاقات المتبادلة بينها والمبادئ التنظيمية ومتطلباتها، لا اختيار المحتوى وحده.',
      sourceReference: 'مفهوم التصميم — الصفحة المطبوعة 38.',
    },
  },
  // 28 | العنوان الأصلي: مبادئ التصميم — مبدأ التصميم العلمي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q28',
      type: 'true_false',
      order: 28,
      prompt: 'ينبغي أن يسير التصميم وفق طريقة علمية تبدأ بتحديد الأهداف وتنتهي بالتقويم وإصدار الأحكام.',
      correctAnswer: true,
      explanation: 'مبدأ التصميم العلمي يرفض العشوائية ويعتمد منهجًا مخططًا من الأهداف إلى التقويم.',
      sourceReference: 'مبادئ التصميم — مبدأ التصميم العلمي — الصفحة المطبوعة 39.',
    },
  },
  // 29 | العنوان الأصلي: مبادئ التصميم — مبدأ مراعاة المعايير الخاصة بتقويم عناصر المنهاج
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-curriculum-design-foundations',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q29',
      type: 'true_false',
      order: 29,
      prompt: 'تُعد معايير العنصر بعد الانتهاء من تصميمه، ولا تُستخدم إطارًا مرجعيًا أثناء التصميم.',
      correctAnswer: false,
      explanation: 'يؤكد المؤلف إعداد معايير لكل عنصر قبل تصميمه حتى تكون إطارًا مرجعيًا للعمل الفني.',
      sourceReference: 'مبادئ التصميم — مبدأ مراعاة المعايير الخاصة بتقويم عناصر المنهاج — الصفحة المطبوعة 39.',
    },
  },
  // 30 | العنوان الأصلي: مراعاة مقتضيات التغير في متطلبات الواقع
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-design-principles-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q30',
      type: 'true_false',
      order: 30,
      prompt: 'تتطلب الاستجابة لتغير الواقع إمكان تعديل المنهاج وتطويره أثناء مرحلتي التصميم أو التنفيذ.',
      correctAnswer: true,
      explanation: 'ينص المبدأ على إجراء ما يلزم من تعديل وتطوير خلال التصميم أو التنفيذ.',
      sourceReference: 'مراعاة مقتضيات التغير في متطلبات الواقع — الصفحة المطبوعة 40.',
    },
  },
  // 31 | العنوان الأصلي: الانسجام والتوفيق والاتساق بين تصميم المنهاج والخطة التنظيمية للمدرسة وعناصر النظام التربوي الأخرى
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-design-principles-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q31',
      type: 'true_false',
      order: 31,
      prompt: 'يعني الاتساق في التصميم عزل الأنشطة الفعلية للطلبة عن المواقف الدراسية المخططة.',
      correctAnswer: false,
      explanation: 'يتطلب الاتساق تسلسلًا منطقيًا من تصميم المنهاج إلى الموقف الدراسي فالأنشطة الفعلية.',
      sourceReference: 'الانسجام والتوفيق والاتساق بين تصميم المنهاج والخطة التنظيمية للمدرسة وعناصر النظام التربوي الأخرى — الصفحة المطبوعة 40.',
    },
  },
  // 32 | العنوان الأصلي: مشاركة الأطراف ذات العلاقة بالمنهاج التربوي في جهود التصميم
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-design-principles-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q32',
      type: 'true_false',
      order: 32,
      prompt: 'يشير الفصل إلى تفاوت دور الجهات المشاركة في تصميم المنهاج من بلد إلى آخر.',
      correctAnswer: true,
      explanation: 'يعرض تفاوت المستويات والأطراف المشاركة في التصميم بين البلدان.',
      sourceReference: 'مشاركة الأطراف ذات العلاقة بالمنهاج التربوي في جهود التصميم — الصفحة المطبوعة 40.',
    },
  },
  // 33 | العنوان الأصلي: مناهج المواد الدراسية — الحجج التي يستند إليها أنصار المواد الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q33',
      type: 'true_false',
      order: 33,
      prompt: 'يرفض أنصار مناهج المواد الدراسية إمكانية تقديم المواد في تتابع منطقي.',
      correctAnswer: false,
      explanation: 'من حججهم إمكان تقديم المواد الدراسية في تتابع منطقي.',
      sourceReference: 'مناهج المواد الدراسية — الحجج التي يستند إليها أنصار المواد الدراسية — الصفحة المطبوعة 41.',
    },
  },
  // 34 | العنوان الأصلي: خصائص منهاج المواد الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q34',
      type: 'true_false',
      order: 34,
      prompt: 'يشير المؤلف إلى أن مناهج المواد الدراسية تشجع الدراسة النظرية والتلقين على حساب الجوانب العملية.',
      correctAnswer: true,
      explanation: 'يورد النص التشجيع على الدراسة النظرية والتلقين وإهمال الدراسة العملية ضمن الخصائص.',
      sourceReference: 'خصائص منهاج المواد الدراسية — الصفحة المطبوعة 41.',
    },
  },
  // 35 | العنوان الأصلي: منهج المواد الدراسية المنفصلة
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'direct_recall',
    question: {
      id: 'ch5-draft-q35',
      type: 'true_false',
      order: 35,
      prompt: 'يقوم منهج المواد الدراسية المنفصلة على تدريس المواد مترابطة دائمًا بوصفها مجالًا واحدًا.',
      correctAnswer: false,
      explanation: 'تدرس المواد منفصلة بعضها عن بعض، وقد تُجزّأ المادة نفسها إلى فروع وموضوعات.',
      sourceReference: 'منهج المواد الدراسية المنفصلة — الصفحة المطبوعة 42.',
    },
  },
  // 36 | العنوان الأصلي: منهج المواد الدراسية المرتبطة — الطريقة العشوائية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q36',
      type: 'true_false',
      order: 36,
      prompt: 'تترك الطريقة العشوائية للربط بين المواد للمعلمين حرية الإشارة إلى العلاقات بحسب إلمامهم بها.',
      correctAnswer: true,
      explanation: 'تربط الطريقة العشوائية بين المواد وفق ما يراه المعلمون ويعرفونه من علاقات.',
      sourceReference: 'منهج المواد الدراسية المرتبطة — الطريقة العشوائية — الصفحة المطبوعة 42.',
    },
  },
  // 37 | العنوان الأصلي: إيجابيات وسلبيات مناهج المواد الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-subject-matter-curricula',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q37',
      type: 'true_false',
      order: 37,
      prompt: 'تُعد سهولة تخطيط مناهج المواد الدراسية وتنفيذها وتقويمها من سلبياتها التي يسجلها المؤلف.',
      correctAnswer: false,
      explanation: 'ترد سهولة التخطيط والتنفيذ والتطوير والتقويم ضمن الإيجابيات.',
      sourceReference: 'إيجابيات وسلبيات مناهج المواد الدراسية — الصفحة المطبوعة 42.',
    },
  },
  // 38 | العنوان الأصلي: منهج النشاط
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-activity-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q38',
      type: 'true_false',
      order: 38,
      prompt: 'تعد الممارسات والمهارات في منهج النشاط غايات ثابتة يتعين حفظها قبل ممارسة أي نشاط.',
      correctAnswer: false,
      explanation: 'يصفها المؤلف بأنها وسائل لا غايات، ويتعلمها المتعلم عندما يستعد لذلك.',
      sourceReference: 'منهج النشاط — الصفحة المطبوعة 43.',
    },
  },
  // 39 | العنوان الأصلي: منهج النشاط — خصائص منهج النشاط
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-activity-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q39',
      type: 'true_false',
      order: 39,
      prompt: 'تعد طريقة حل المشكلات محورًا لعمليتي التعليم والتعلم في منهج النشاط.',
      correctAnswer: true,
      explanation: 'ينص المؤلف صراحة على مركزية طريقة حل المشكلات.',
      sourceReference: 'منهج النشاط — خصائص منهج النشاط — الصفحة المطبوعة 43.',
    },
  },
  // 40 | العنوان الأصلي: متطلبات نجاح تطبيق منهج النشاط
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-activity-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q40',
      type: 'true_false',
      order: 40,
      prompt: 'يمكن إنجاح منهج النشاط دون تدريب المعلمين على الإرشاد والمشروعات وتكوين الجماعات.',
      correctAnswer: false,
      explanation: 'يتطلب نجاحه معلمين مدربين على أساليب التوجيه والأنشطة والمشروعات والجماعات.',
      sourceReference: 'متطلبات نجاح تطبيق منهج النشاط — الصفحة المطبوعة 44.',
    },
  },
  // 41 | العنوان الأصلي: إيجابيات وسلبيات منهج النشاط
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-activity-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q41',
      type: 'true_false',
      order: 41,
      prompt: 'يرى المؤلف أن منهج النشاط يُعد التلميذ للحياة العملية من خلال المشروعات واستراتيجيات حل المشكلات.',
      correctAnswer: true,
      explanation: 'تعد هذه من الإيجابيات التي يذكرها المؤلف.',
      sourceReference: 'إيجابيات وسلبيات منهج النشاط — الصفحة المطبوعة 44.',
    },
  },
  // 42 | العنوان الأصلي: المنهج المحوري — تعريفات المنهج المحوري
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q42',
      type: 'true_false',
      order: 42,
      prompt: 'يقصر تعريف المنهج المحوري الخبرات المقدمة على التخصصات دون النظر إلى الحياة ومشكلاتها.',
      correctAnswer: false,
      explanation: 'يشمل الخبرات المتكاملة لمواجهة الحياة ومشكلاتها مع توفير خبرات تخصصية ملائمة.',
      sourceReference: 'المنهج المحوري — تعريفات المنهج المحوري — الصفحة المطبوعة 44.',
    },
  },
  // 43 | العنوان الأصلي: المنهج المحوري — أسس المنهاج المحوري
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q43',
      type: 'true_false',
      order: 43,
      prompt: 'ينفذ المتعلمون التخطيط للوحدات في المنهج المحوري تحت إشراف المعلم.',
      correctAnswer: true,
      explanation: 'يتولى المتعلمون التخطيط لكل وحدة وتنفيذها بإشراف المعلم.',
      sourceReference: 'المنهج المحوري — أسس المنهاج المحوري — الصفحة المطبوعة 45.',
    },
  },
  // 44 | العنوان الأصلي: إيجابيات وسلبيات المنهج المحوري
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q44',
      type: 'true_false',
      order: 44,
      prompt: 'يعد المؤلف قلة كفاية بعض المعلمين وضعف اتجاهات العمل المشترك من سلبيات المنهج المحوري.',
      correctAnswer: true,
      explanation: 'ترد قلة الكفاية وضعف الاتجاهات نحو العمل المشترك في قائمة السلبيات.',
      sourceReference: 'إيجابيات وسلبيات المنهج المحوري — الصفحة المطبوعة 45.',
    },
  },
  // 45 | العنوان الأصلي: منهاج الوحدة الدراسية — أسس بناء منهاج الوحدة الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q45',
      type: 'true_false',
      order: 45,
      prompt: 'يشترط منهاج الوحدة الدراسية إقصاء توجيهات المعلم المباشرة وغير المباشرة عند تنظيم أدوار المتعلمين.',
      correctAnswer: false,
      explanation: 'ترد إرشادات المعلم وتوجيهاته المباشرة وغير المباشرة ضمن أسس البناء.',
      sourceReference: 'منهاج الوحدة الدراسية — أسس بناء منهاج الوحدة الدراسية — الصفحة المطبوعة 45.',
    },
  },
  // 46 | العنوان الأصلي: إيجابيات وسلبيات منهج الوحدات الدراسية
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-core-and-unit-curriculum',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q46',
      type: 'true_false',
      order: 46,
      prompt: 'من سلبيات منهج الوحدات الدراسية كما يوردها الفصل احتمال عدم التعمق في المعرفة والخبرة التعليمية.',
      correctAnswer: true,
      explanation: 'يسجل النص عدم التعمق ضمن سلبيات هذا التنظيم.',
      sourceReference: 'إيجابيات وسلبيات منهج الوحدات الدراسية — الصفحة المطبوعة 46.',
    },
  },
  // 47 | العنوان الأصلي: المنهج التكنولوجي — فلسفة المنهج التكنولوجي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-technological-curriculum-comparison',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q47',
      type: 'true_false',
      order: 47,
      prompt: 'تقوم فلسفة المنهج التكنولوجي على مصدر وحيد للمعرفة هو الكتاب المدرسي المطبوع.',
      correctAnswer: false,
      explanation: 'تعتمد فلسفته تنوع المعارف وتعدد مصادرها والإفادة من الإبداعات والأجهزة والوسائط.',
      sourceReference: 'المنهج التكنولوجي — فلسفة المنهج التكنولوجي — الصفحة المطبوعة 46.',
    },
  },  // 48 | العنوان الأصلي: المنهج التكنولوجي — أنواع المنهج التكنولوجي
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-technological-curriculum-comparison',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    reviewMetadata: {
      reviewerName: 'تدقيق ومطابقة عيانية معتمدة بموجب المسار ب (Case B)',
      reviewerTitle: 'أخصائي جودة التقييم والمطابقة الأكاديمية للمنصة',
      approvalDate: '',
      academicSource: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم',
      sourceLocation: 'المنهج التكنولوجي — أنواع المنهج التكنولوجي — الصفحة المطبوعة 47',
      reviewNotes:
        'معالجة استناداً إلى المسار ب (Case B) بعد الفحص العياني المباشر للصفحة المطبوعة 47 من كتاب المقرر: تبيّن وجود العنوان «إيجابيات وسلبيات منهج الوحدات الدراسية» مطبوعاً نصاً عقب رسم أنواع المنهج التكنولوجي وقبل بنود المتن، مما أوجد غموضاً وتناقضاً مصدرياً صريحاً في نسبة سلبيات المتن إلى المنهج التكنولوجي؛ لذا استُبدل السؤال بعبارة صواب وخطأ قطعية وموثقة عيانياً من نفس الصفحة المطبوعة 47 وتحت عنوانه الأصلي الصريح «أنواع المنهج التكنولوجي» (المنهج المبرمج الخطي والمنهج المبرمج المتفرع) مع الحفاظ التام على معرف السؤال ch5-draft-q48 والموضوع والوزن وإجمالي الـ 50 سؤالاً دون تكرار.',
    },
    question: {
      id: 'ch5-draft-q48',
      type: 'true_false',
      order: 48,
      prompt:
        'يوضح الشكل التوضيحي لأنواع المنهج التكنولوجي في نص الفصل أن له نوعين رئيسيين هما: المنهج المبرمج الخطي والمنهج المبرمج المتفرع.',
      correctAnswer: true,
      explanation:
        'يوضح الشكل التوضيحي لأنواع المنهج التكنولوجي في الصفحة المطبوعة 47 تقسيم هذا التنظيم إلى نوعين رئيسيين هما: المنهج المبرمج الخطي والمنهج المبرمج المتفرع.',
      sourceReference: 'المنهج التكنولوجي — أنواع المنهج التكنولوجي — الصفحة المطبوعة 47.',
    },
  },
  // 49 | العنوان الأصلي: خصائص منهاج التربية الرياضية الجيد
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-pe-curriculum-characteristics',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q49',
      type: 'true_false',
      order: 49,
      prompt: 'يشترط المؤلف أن يكون برنامج التربية الرياضية الجيد جزءًا مكملًا للجهد التربوي الشامل بالمدرسة.',
      correctAnswer: true,
      explanation: 'الخاصية الأولى تربط برنامج التربية الرياضية بالأهداف العامة للمؤسسة وجهودها التربوية.',
      sourceReference: 'خصائص منهاج التربية الرياضية الجيد — الصفحة المطبوعة 48.',
    },
  },
  // 50 | العنوان الأصلي: خصائص منهاج التربية الرياضية الجيد
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-designs',
    topicId: 'top-ch5-pe-curriculum-characteristics',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch5-draft-q50',
      type: 'true_false',
      order: 50,
      prompt: 'يعد تحسين برنامج التربية الرياضية ممكنًا من غير أي اهتمام بتحسين مدرس التربية الرياضية.',
      correctAnswer: false,
      explanation: 'يؤكد النص تعذر تحسين البرنامج دون تحسين معلم التربية الرياضية، لكونه أهم عامل في الموقف التعليمي.',
      sourceReference: 'خصائص منهاج التربية الرياضية الجيد — الصفحة المطبوعة 50.',
    },
  },
];

/**
 * بنك أسئلة مسودة غير معتمد للفصل الخامس (50 سؤالاً)
 */
export const CHAPTER_5_COMPREHENSIVE_DRAFT_BANK: GovernedQuestionBank = {
  bankId: 'bank-ch5-designs-draft-50q',
  version: '0.1.0-draft',
  contentHash: '', // سيتم حسابه قطعيًا أدناه
  title: 'مسودة اختبار الفصل الخامس: تصميمات وتنظيمات المنهاج المدرسية',
  description:
    'مسودة بنك أسئلة غير معتمدة تتضمن 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) تغطي موضوعات الفصل الخامس السبعة وتصميمات وتنظيمات المناهج الخمسة بالتفصيل.',
  instructions:
    'أجب عن جميع الأسئلة الـ 50. هذه المسودة مخصصة للمراجعة والتحكيم الأكاديمي الداخلي فقط وليست منشورة للطلاب.',
  courseId: 'course-1',
  chapterId: 'chap-curriculum-designs',
  targetType: 'chapter',
  approvalStatus: 'draft',
  reviewMetadata: {
    reviewerName: 'قيد المراجعة الأكاديمية (مسودة غير معتمدة)',
    reviewerTitle: 'المراجع الأكاديمي لم يُحدد بعد',
    approvalDate: '', // غير معتمد بعد
    academicSource: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم',
    sourceLocation: 'الفصل الخامس (ص 38 - 50 مطبوعة)',
    reviewNotes:
      'مسودة اختبار الفصل الخامس المحكومة (50 سؤالاً: 25 اختيار من متعدد و25 صواب وخطأ). تم إنجاز المعالجة الأكاديمية والتقنية الشاملة: (1) القضاء التام على النمط الدوري التكراري لمفاتيح الاختيار من متعدد بإعادة ترتيب الخيارات فعلياً لإنتاج تسلسل غير دوري متنوع (A: 6, B: 7, C: 6, D: 6)، (2) معالجة السؤال 48 وفق المسار (ب) بعد الفحص العياني للكتاب واستبدال السؤال الغامض بعبارة صواب وخطأ قطعية وموثقة عيانياً حول أنواع المنهج التكنولوجي (ص 47). تبقى المسودة معزولة وغير منشورة للطلاب.',
  },
  passingScorePercentage: 60,
  questions: DRAFT_QUESTIONS,
};

// حساب التجزئة التوافقية القطعية لمحتوى المسودة
CHAPTER_5_COMPREHENSIVE_DRAFT_BANK.contentHash = computeQuestionBankHash(CHAPTER_5_COMPREHENSIVE_DRAFT_BANK);
