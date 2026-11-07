/**
 * chapter7ComprehensiveDraft.ts
 *
 * مسودة بنك أسئلة الاختبار الشامل للفصل السابع: تخطيط المنهج المدرسي
 * كتاب مناهج التربية الرياضية — إعداد: أ.د/ هاني الدسوقي إبراهيم (2025/2026م)
 *
 * المصدر المعتمد: وثيقة «اختبار_الموضوع_السابع_نسخة_مدققة_للتحكيم_OloomSport.docx»
 *
 * حالة الحوكمة: DRAFT (مسودة أولية قيد المراجعة والتحكيم الأكاديمي)
 * محظور من النشر للطلاب وغير مدرج في بيان النشر الرسمي (QUIZ_PUBLICATION_MANIFEST).
 *
 * إجمالي الأسئلة: 50 سؤالاً
 * - 25 سؤال اختيار من متعدد (MCQ) — لكل سؤال 4 خيارات وإجابة صحيحة واحدة.
 * - 25 سؤال صواب وخطأ (True/False).
 * - تغطية شاملة لموضوعات الفصل السابع السبعة بالتفصيل.
 * - الحفاظ على التمييز الأكاديمي بين العرضين المتتابعين للتخطيط (الخطوات التسع والخطوات السبع).
 * */

import type { GovernedQuestionBank, GovernedQuizQuestion } from '../../../../types/quizGovernance.ts';
import { computeQuestionBankHash } from '../../../../utils/contentHash.ts';

const DRAFT_QUESTIONS: GovernedQuizQuestion[] = [
  // 1 | العنوان الأصلي: مفهوم التخطيط على وجه العموم — ص 60
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-philosophical-foundations-tyler-model',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q01',
      type: 'multiple_choice',
      order: 1,
      prompt: 'ما المعنى اللغوي للتخطيط كما يورده المؤلف؟',
      options: [
        { id: 'opt-a', text: 'تنفيذ الأحكام النهائية' },
        { id: 'opt-b', text: 'تسجيل نتائج الاختبارات فقط' },
        { id: 'opt-c', text: 'تحرير طرق العمل وتهذيبها' },
        { id: 'opt-d', text: 'إعداد الموازنات المالية' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يرد التخطيط لغويًا بمعنى التسطير أو التهذيب؛ أي تحرير وتهذيب طرق العمل.',
      sourceReference: 'مفهوم التخطيط على وجه العموم — الصفحة المطبوعة 60.',
    },
  },
  // 2 | العنوان الأصلي: المعنى الاصطلاحي للتخطيط — ص 60
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-philosophical-foundations-tyler-model',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q02',
      type: 'multiple_choice',
      order: 2,
      prompt: 'أي وصف ينسجم مع التعريف الاصطلاحي الثاني للتخطيط؟',
      options: [
        { id: 'opt-a', text: 'عملية منتظمة تتخذ إجراءات وقرارات لتحقيق أهداف في مراحل وزمن محددين' },
        { id: 'opt-b', text: 'قرار عفوي لا يرتبط بوقت' },
        { id: 'opt-c', text: 'اختيار محتوى واحد لجميع المتعلمين' },
        { id: 'opt-d', text: 'عملية تقتصر على معلم الفصل' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'التعريف الثاني ينص على عملية منتظمة ومراحل وفترة زمنية واستخدام الإمكانات المتاحة.',
      sourceReference: 'المعنى الاصطلاحي للتخطيط — الصفحة المطبوعة 60.',
    },
  },
  // 3 | العنوان الأصلي: نماذج تخطيط المنهج المدرسي (نموذج تايلر) — ص 60
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-philosophical-foundations-tyler-model',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q03',
      type: 'multiple_choice',
      order: 3,
      prompt: 'أي مجموعة تمثل الأبعاد الأربعة التي افترضها تايلر للمنهج المدرسي؟',
      options: [
        { id: 'opt-a', text: 'الطلاب وأولياء الأمور والوزارة والمجتمع' },
        { id: 'opt-b', text: 'الموارد والزمن والميزانية والمباني' },
        { id: 'opt-c', text: 'الوسائل والأجهزة والجداول والامتحانات' },
        { id: 'opt-d', text: 'الأهداف والمحتوى والطرائق والتقويم' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'الأبعاد الواردة هي الأهداف والمحتوى أو موضوع الدراسة والطرائق أو الإجراءات والتقييم والتقويم.',
      sourceReference: 'نماذج تخطيط المنهج المدرسي (نموذج تايلر) — الصفحة المطبوعة 60.',
    },
  },
  // 4 | العنوان الأصلي: أسئلة تايلر الأربعة — ص 61
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-philosophical-foundations-tyler-model',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q04',
      type: 'multiple_choice',
      order: 4,
      prompt: 'أي سؤال من أسئلة تايلر يتناول تنظيم الخبرات التعليمية؟',
      options: [
        { id: 'opt-a', text: 'ما الخبرات التعليمية التي يرجح أن تحقق الأهداف؟' },
        { id: 'opt-b', text: 'كيف يمكن تنظيم الخبرات التعليمية تنظيمًا فعالًا؟' },
        { id: 'opt-c', text: 'ما الأهداف التعليمية التي تسعى المدرسة لتحقيقها؟' },
        { id: 'opt-d', text: 'كيف نقرر إمكان تحقيق الأهداف التعليمية؟' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'السؤال الثالث في نموذج تايلر يختص بالتنظيم الفعال للخبرات التعليمية.',
      sourceReference: 'أسئلة تايلر الأربعة — الصفحة المطبوعة 61.',
    },
  },
  // 5 | العنوان الأصلي: أهمية التخطيط — ص 61
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-philosophical-foundations-tyler-model',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q05',
      type: 'multiple_choice',
      order: 5,
      prompt: 'ما الذي يفسر أهمية التخطيط للمنهج وفق الفصل؟',
      options: [
        { id: 'opt-a', text: 'اقتصاره على المقررات المطبوعة' },
        { id: 'opt-b', text: 'مراعاته ميول المتعلمين وتغيرات المجتمع والتقدم العلمي' },
        { id: 'opt-c', text: 'إلغاء ارتباط المدرسة بالمجتمع' },
        { id: 'opt-d', text: 'الاستغناء عن الأهداف العامة' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يربط النص التخطيط بميول المتعلمين وثقافة المجتمع والتقدم العلمي والتكنولوجي.',
      sourceReference: 'أهمية التخطيط — الصفحة المطبوعة 61.',
    },
  },
  // 6 | العنوان الأصلي: أنواع التخطيط — ص 61
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-timeframes-admin-levels-centralization',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q06',
      type: 'multiple_choice',
      order: 6,
      prompt: 'ما الذي يجعل التخطيط طويل المدى أكثر تعقيدًا بحسب المؤلف؟',
      options: [
        { id: 'opt-a', text: 'أنه ينتهي خلال يوم واحد' },
        { id: 'opt-b', text: 'أنه لا يحدد الإجراءات' },
        { id: 'opt-c', text: 'أنه يقتصر على أنشطة الصف' },
        { id: 'opt-d', text: 'ارتباطه بمستقبل بعيد يتصف بالغموض' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يذكر النص أن تعقيده ناشئ عن تعلقه بالمستقبل البعيد الغامض.',
      sourceReference: 'أنواع التخطيط — الصفحة المطبوعة 61.',
    },
  },
  // 7 | العنوان الأصلي: أنواع التخطيط — ص 61
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-timeframes-admin-levels-centralization',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q07',
      type: 'multiple_choice',
      order: 7,
      prompt: 'إذا امتدت خطة العمل المدرسي إلى عدة أسابيع أو شهور وكانت جزءًا من خطة أوسع، فما نوعها؟',
      options: [
        { id: 'opt-a', text: 'متوسطة المدى' },
        { id: 'opt-b', text: 'قصيرة المدى' },
        { id: 'opt-c', text: 'طويلة المدى بالضرورة' },
        { id: 'opt-d', text: 'خطة تقويم ختامي' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'التخطيط متوسط المدى جزء من طويل المدى، وقد يستغرق أسابيع أو شهورًا.',
      sourceReference: 'أنواع التخطيط — الصفحة المطبوعة 61.',
    },
  },
  // 8 | العنوان الأصلي: التخطيط للمنهج على المستوى المحلي (اللامركزية) — ص 62
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-timeframes-admin-levels-centralization',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q08',
      type: 'multiple_choice',
      order: 8,
      prompt: 'أي مأخذ يوجهه المؤلف إلى التخطيط اللامركزي؟',
      options: [
        { id: 'opt-a', text: 'منع المؤسسات المحلية من المشاركة' },
        { id: 'opt-b', text: 'توحيد كل البيئات في قالب جامد' },
        { id: 'opt-c', text: 'احتمال طغيان الأهداف المحلية على القومية' },
        { id: 'opt-d', text: 'إلغاء قدرة المدرسة على التكييف' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'من المآخذ المذكورة احتمال تغليب الأهداف المحلية على الأهداف التعليمية القومية.',
      sourceReference: 'التخطيط للمنهج على المستوى المحلي (اللامركزية) — الصفحة المطبوعة 62.',
    },
  },
  // 9 | العنوان الأصلي: استراتيجية بناء المناهج — ص 62
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q09',
      type: 'multiple_choice',
      order: 9,
      prompt: 'ما العنصر الرابع من عناصر المفهوم العام للمنهج في استراتيجية البناء؟',
      options: [
        { id: 'opt-a', text: 'صياغة الأهداف التربوية التي يسعى المنهج لتحقيقها' },
        { id: 'opt-b', text: 'تحديد الأفكار والمعارف والنظريات في المحتوى' },
        { id: 'opt-c', text: 'تحديد الطرق والوسائل والمعينات التربوية للتدريس' },
        { id: 'opt-d', text: 'أساليب التقويم وأدواته لقياس تحقيق الأهداف' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'تورد الاستراتيجية أربعة عناصر، وآخرها طرائق وأساليب وأدوات التقويم.',
      sourceReference: 'استراتيجية بناء المناهج — الصفحة المطبوعة 62.',
    },
  },
  // 10 | العنوان الأصلي: القواعد الفنية لبناء المناهج — ص 62
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q10',
      type: 'multiple_choice',
      order: 10,
      prompt: 'أي قاعدة تشترط أن يشمل التجديد جوانب المنهج كافة لا مظهره التقني وحده؟',
      options: [
        { id: 'opt-a', text: 'الموازنة' },
        { id: 'opt-b', text: 'الشمولية' },
        { id: 'opt-c', text: 'المرونة' },
        { id: 'opt-d', text: 'الواقعية' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'الشمولية ترفض تجديد التقنيات مع إبقاء المحتوى أو أساليب التفكير تقليدية.',
      sourceReference: 'القواعد الفنية لبناء المناهج — الصفحة المطبوعة 62.',
    },
  },
  // 11 | العنوان الأصلي: الخطوة الأولى: توضيح التبرير المنطقي لعملية التخطيط — ص 63
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q11',
      type: 'multiple_choice',
      order: 11,
      prompt: 'ما الغرض من التبرير المنطقي عند التخطيط لمنهج جديد؟',
      options: [
        { id: 'opt-a', text: 'بيان لماذا نخطط لهذا المنهج وافتراضاتنا عن المتعلمين والمجتمع' },
        { id: 'opt-b', text: 'اختيار أجهزة العرض قبل تحديد الهدف' },
        { id: 'opt-c', text: 'البدء بالتعميم قبل التجريب' },
        { id: 'opt-d', text: 'حصر التخطيط في اختيار الامتحان' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'التبرير المنطقي يوضح دوافع التخطيط وموقف المخططين من المجتمع والتلاميذ والمنهج القائم.',
      sourceReference: 'الخطوة الأولى: توضيح التبرير المنطقي لعملية التخطيط — الصفحة المطبوعة 63.',
    },
  },
  // 12 | العنوان الأصلي: الخطوة الثانية: تحديد مجال المنهج المدرسي — ص 63
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q12',
      type: 'multiple_choice',
      order: 12,
      prompt: 'لماذا يُحدَّد مجال المنهج قبل اختيار الأهداف والمحتوى والخبرات؟',
      options: [
        { id: 'opt-a', text: 'لتثبيت نتيجة التقويم' },
        { id: 'opt-b', text: 'لمنع اختلاف التنظيمات' },
        { id: 'opt-c', text: 'لأن اختيار المجال يؤثر في الأسلوب التنظيمي للمنهج لاحقًا' },
        { id: 'opt-d', text: 'لإلغاء الحاجة إلى المعلم' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'تحديد المجال خطوة تنظيمية تمهيدية تؤثر في شكل تنظيم المنهج بعد ذلك.',
      sourceReference: 'الخطوة الثانية: تحديد مجال المنهج المدرسي — الصفحة المطبوعة 63.',
    },
  },
  // 13 | العنوان الأصلي: الخطوة الثالثة: اختيار الأهداف — ص 63
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q13',
      type: 'multiple_choice',
      order: 13,
      prompt: 'لماذا تُعد خطوة اختيار الأهداف أساسية للخطوات اللاحقة؟',
      options: [
        { id: 'opt-a', text: 'لأنها تحل محل تقويم المنهج' },
        { id: 'opt-b', text: 'لأنها توجه اختيار المحتوى والخبرات وتنظيمها' },
        { id: 'opt-c', text: 'لأنها تحدد عدد المباني اللازمة' },
        { id: 'opt-d', text: 'لأنها تمنع تعديل المنهج' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'اختيار الأهداف بدقة يؤثر في اختيار المحتوى والخبرات والتعليم والتقويم.',
      sourceReference: 'الخطوة الثالثة: اختيار الأهداف — الصفحة المطبوعة 63.',
    },
  },
  // 14 | العنوان الأصلي: الخطوة الرابعة: اختيار المحتوى وتنظيمه — ص 63
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q14',
      type: 'multiple_choice',
      order: 14,
      prompt: 'أي معيار لاختيار المحتوى يركز على وثاقة صلته بالأهداف الموضوعة؟',
      options: [
        { id: 'opt-a', text: 'الموقع الجغرافي' },
        { id: 'opt-b', text: 'الكمية' },
        { id: 'opt-c', text: 'الترتيب الهجائي' },
        { id: 'opt-d', text: 'الصدق' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يقرر الفصل أن المحتوى يكون صادقًا كلما كان وثيق الصلة بالأهداف التي سبق وضعها.',
      sourceReference: 'الخطوة الرابعة: اختيار المحتوى وتنظيمه — الصفحة المطبوعة 63.',
    },
  },
  // 15 | العنوان الأصلي: الخطوة الخامسة: اختيار الخبرات التعليمية وتنظيمها — ص 64
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q15',
      type: 'multiple_choice',
      order: 15,
      prompt: 'في مثال تلميذين يجلسان في صف واحد ويختلف انتباههما، ما الفكرة التي يوضحها المؤلف؟',
      options: [
        { id: 'opt-a', text: 'تطابق الخبرات لمجرد وحدة المكان' },
        { id: 'opt-b', text: 'عدم وجود دور للمتعلم في الخبرة' },
        { id: 'opt-c', text: 'الخبرة تتعلق بما يفعله المتعلم وتفاعله لا بمجرد فعل المعلم' },
        { id: 'opt-d', text: 'أن النشاط المدرسي لا يتضمن خبرات' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'الخبرة هي التفاعل بين المتعلم والظروف الخارجية وقد تختلف بين تلميذين في الموقف نفسه.',
      sourceReference: 'الخطوة الخامسة: اختيار الخبرات التعليمية وتنظيمها — الصفحة المطبوعة 64.',
    },
  },
  // 16 | العنوان الأصلي: الخطوة السادسة: اختيار طرائق التدريس وتوضيحها — ص 64
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q16',
      type: 'multiple_choice',
      order: 16,
      prompt: 'ما الذي ينبغي أن يوضحه المخططون للمعلمين في أدلة المعلم؟',
      options: [
        { id: 'opt-a', text: 'مبادئ التدريس والمتطلبات السابقة والأهداف والتطبيقات وانتقال أثر التعلم' },
        { id: 'opt-b', text: 'تحديد طبيعة المجتمع والقيم والعادات التي توجه بناء المنهج' },
        { id: 'opt-c', text: 'تحديد محتوى المنهج بصورة تغني عن عرض المبادئ للمعلمين' },
        { id: 'opt-d', text: 'تحديد أدوار الأجهزة المركزية والمحلية في إعداد المناهج' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يشير الفصل إلى توضيح مبادئ التدريس وأهداف التعلم والمتطلبات السابقة والتطبيقات وانتقال الأثر.',
      sourceReference: 'الخطوة السادسة: اختيار طرائق التدريس وتوضيحها — الصفحة المطبوعة 64.',
    },
  },
  // 17 | العنوان الأصلي: الخطوة الثامنة: تجريب المنهج الذي تم تخطيطه — ص 65
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q17',
      type: 'multiple_choice',
      order: 17,
      prompt: 'أي إجراء يمثل جزءًا من التجريب المنظم للمنهج؟',
      options: [
        { id: 'opt-a', text: 'تعميم المنهج قبل دراسة نتائجه' },
        { id: 'opt-b', text: 'منع تدريب المعلمين على التجريب' },
        { id: 'opt-c', text: 'إلغاء إعادة التجريب بعد التعديل' },
        { id: 'opt-d', text: 'جمع البيانات بأدوات كالاختبارات والملاحظة والمقابلات وتحليلها' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'يذكر النص توفير أدوات جمع البيانات وتحليلها وتعديل المنهج ثم إعادة التجريب عند الحاجة.',
      sourceReference: 'الخطوة الثامنة: تجريب المنهج الذي تم تخطيطه — الصفحة المطبوعة 65.',
    },
  },
  // 18 | العنوان الأصلي: الخطوة التاسعة: تعميم المنهج — ص 65
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q18',
      type: 'multiple_choice',
      order: 18,
      prompt: 'متى يوصى بتعميم المنهج في التخطيط المعاصر؟',
      options: [
        { id: 'opt-a', text: 'قبل تحديد أهدافه' },
        { id: 'opt-b', text: 'بعد تجريبه والوصول إلى النتائج المرغوبة' },
        { id: 'opt-c', text: 'عند اختيار عنوانه فقط' },
        { id: 'opt-d', text: 'بعد أول اجتماع للخبراء' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'يؤكد المؤلف أن التجريب والتحقق من النتائج يسبقان تعميم المنهج.',
      sourceReference: 'الخطوة التاسعة: تعميم المنهج — الصفحة المطبوعة 65.',
    },
  },
  // 19 | العنوان الأصلي: العوامل الخارجية: أنظمة وزارات التربية وقوانينها — ص 66
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-external-influencing-factors-difficulty-management',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q19',
      type: 'multiple_choice',
      order: 19,
      prompt: 'كيف يمكن أن تؤثر قوانين الوزارة الجديدة في تخطيط المنهج؟',
      options: [
        { id: 'opt-a', text: 'بمنع أي تغيير في اهتمامات المتعلمين' },
        { id: 'opt-b', text: 'بإلغاء دور اللوائح التعليمية تمامًا' },
        { id: 'opt-c', text: 'بتغيير الاهتمام بمحتوى المنهج وخبراته عند تعديل نظام الامتحانات' },
        { id: 'opt-d', text: 'بجعل أثر القوانين مقتصرًا على المباني' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يعرض النص مثال إصدار قانون يلغي امتحان شهادة بما قد يغير اهتمام المتعلمين والمعلمين والمخططين.',
      sourceReference: 'العوامل الخارجية: أنظمة وزارات التربية وقوانينها — الصفحة المطبوعة 66.',
    },
  },
  // 20 | العنوان الأصلي: مقترحات للتعامل مع الصعوبات التي تواجه عملية التخطيط — ص 67
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-external-influencing-factors-difficulty-management',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q20',
      type: 'multiple_choice',
      order: 20,
      prompt: 'ما الاقتراح الذي يقدمه المؤلف عند تجريب منهج جديد للمرة الأولى؟',
      options: [
        { id: 'opt-a', text: 'إبقاء المنهج القديم خيارًا متاحًا أثناء التجريب' },
        { id: 'opt-b', text: 'حرمان أولياء الأمور من أي خيار' },
        { id: 'opt-c', text: 'تعميم المنهج دون تجريب' },
        { id: 'opt-d', text: 'فرض النظام الجديد دون مقارنة' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يوصي النص بإتاحة الخيار القديم للمتعلمين وأولياء الأمور عند طرح منهج جديد للتجريب.',
      sourceReference: 'مقترحات للتعامل مع الصعوبات التي تواجه عملية التخطيط — الصفحة المطبوعة 67.',
    },
  },
  // 21 | العنوان الأصلي: معايير تخطيط المنهج: الواقعية — ص 69
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-six-planning-criteria-knowledge-structure',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q21',
      type: 'multiple_choice',
      order: 21,
      prompt: 'أي مجموعة محاور أساسية يتعين على التخطيط الواقعي مراعاتها؟',
      options: [
        { id: 'opt-a', text: 'المعرفة والمتعلم والمجتمع' },
        { id: 'opt-b', text: 'الامتحانات والواجبات والدرجات' },
        { id: 'opt-c', text: 'الأدوات والملاعب والزي المدرسي' },
        { id: 'opt-d', text: 'التاريخ والجغرافيا والنحو' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يحدد النص محاور المعرفة والمتعلم والمجتمع ويربطها بأسس بناء المناهج.',
      sourceReference: 'معايير تخطيط المنهج: الواقعية — الصفحة المطبوعة 69.',
    },
  },
  // 22 | العنوان الأصلي: أنواع التخطيط: التخطيط المناسب — ص 71
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-six-planning-criteria-knowledge-structure',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q22',
      type: 'multiple_choice',
      order: 22,
      prompt: 'ما الذي يميز «التخطيط المناسب» في تصنيف المؤلف؟',
      options: [
        { id: 'opt-a', text: 'البدء بالإمكانات دون تحديد أهداف' },
        { id: 'opt-b', text: 'وضع أهداف خيالية بعيدًا عن الموارد' },
        { id: 'opt-c', text: 'محاولة الجمع بين مزايا التخطيط المنهجي والمرحلي مع البدء بالأهداف' },
        { id: 'opt-d', text: 'تجاهل صلة الأهداف بالتنفيذ' },
      ],
      correctOptionId: 'opt-c',
      explanation: 'يشرح النص أنه يجمع ميزات النوعين السابقين مع الحفاظ على البدء بالأهداف.',
      sourceReference: 'أنواع التخطيط: التخطيط المناسب — الصفحة المطبوعة 71.',
    },
  },
  // 23 | العنوان الأصلي: ثالثاً : التخطيط على المستوى المدرسى — ص 75
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-construction-steps-three-structural-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q23',
      type: 'multiple_choice',
      order: 23,
      prompt: 'من الأطراف التي تتولى التخطيط على المستوى المدرسي وفق النص؟',
      options: [
        { id: 'opt-a', text: 'الخبراء وحدهم دون مشاركة المدرسة' },
        { id: 'opt-b', text: 'هيئة من المدرسين والتلاميذ ومعهم الخبراء' },
        { id: 'opt-c', text: 'الهيئات المحلية وحدها دون المدرسين' },
        { id: 'opt-d', text: 'المؤتمرات واللجان القومية وحدها' },
      ],
      correctOptionId: 'opt-b',
      explanation: 'ينص المؤلف على اشتراك المدرسين والتلاميذ مع الخبراء في التخطيط المدرسي، ويربط ذلك بتنظيمات منهجية معينة.',
      sourceReference: 'ثالثاً : التخطيط على المستوى المدرسى — الصفحة المطبوعة 75.',
    },
  },
  // 24 | العنوان الأصلي: مستويات تخطيط المنهج: التخطيط على المستوى المحلي — ص 75
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-construction-steps-three-structural-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q24',
      type: 'multiple_choice',
      order: 24,
      prompt: 'أي دور ينسبه النص إلى الهيئات المحلية في التخطيط؟',
      options: [
        { id: 'opt-a', text: 'وضع الأهداف القومية بدلًا من جميع الجهات' },
        { id: 'opt-b', text: 'استبعاد البيئة من اعتبارات التخطيط' },
        { id: 'opt-c', text: 'إلغاء التخطيط المدرسي' },
        { id: 'opt-d', text: 'مساعدة المدارس في حل مشكلاتها وتنظيم تدريب المعلمين وتزويدها بالوسائل' },
      ],
      correctOptionId: 'opt-d',
      explanation: 'المستوى المحلي يربط المنهج بالبيئة ويساعد المدارس بالتوجيهات والتدريب والوسائل.',
      sourceReference: 'مستويات تخطيط المنهج: التخطيط على المستوى المحلي — الصفحة المطبوعة 75.',
    },
  },
  // 25 | العنوان الأصلي: مداخل تنظيم البناء الهندسي للمنهج: مدخل العمليات العقلية — ص 78
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-participating-parties-architectural-curriculum-approach',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q25',
      type: 'multiple_choice',
      order: 25,
      prompt: 'ما إحدى الوظيفتين اللتين يركز عليهما مدخل العمليات العقلية؟',
      options: [
        { id: 'opt-a', text: 'مساعدة التلاميذ على تعلم كيف يعلمون أنفسهم' },
        { id: 'opt-b', text: 'التركيز على اكتساب المعلومات دون تقويم المتعلم لعمله' },
        { id: 'opt-c', text: 'التركيز على الخبرات باعتبارها ما يقدمه المعلم دون نشاط المتعلم' },
        { id: 'opt-d', text: 'الاكتفاء بإكساب الحقائق دون تنمية القدرات العقلية' },
      ],
      correctOptionId: 'opt-a',
      explanation: 'يحدد النص مساعدة التلاميذ على تعليم أنفسهم مع تنمية استخدام قدراتهم العقلية.',
      sourceReference: 'مداخل تنظيم البناء الهندسي للمنهج: مدخل العمليات العقلية — الصفحة المطبوعة 78.',
    },
  },
  // 26 | العنوان الأصلي: مفهوم التخطيط على وجه العموم — ص 60
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-philosophical-foundations-tyler-model',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q26',
      type: 'true_false',
      order: 26,
      prompt: 'يحصر المؤلف تخطيط المنهج في العناية بمحتوى المقررات الدراسية وحده.',
      correctAnswer: false,
      explanation: 'لا؛ يجب أن يشمل مكونات المنهج المدرسي جميعها والخبرات التربوية المختارة.',
      sourceReference: 'مفهوم التخطيط على وجه العموم — الصفحة المطبوعة 60.',
    },
  },
  // 27 | العنوان الأصلي: أسئلة تايلر الأربعة — ص 61
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-philosophical-foundations-tyler-model',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q27',
      type: 'true_false',
      order: 27,
      prompt: 'يسأل نموذج تايلر عن كيفية التحقق من إمكانية تحقيق الأهداف التعليمية.',
      correctAnswer: true,
      explanation: 'السؤال الرابع من أسئلة تايلر يتعلق بتقرير مدى إمكان تحقيق الأهداف.',
      sourceReference: 'أسئلة تايلر الأربعة — الصفحة المطبوعة 61.',
    },
  },
  // 28 | العنوان الأصلي: أنواع التخطيط — ص 61
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-timeframes-admin-levels-centralization',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q28',
      type: 'true_false',
      order: 28,
      prompt: 'التخطيط قصير المدى يمثل أجزاء من الخطة طويلة المدى ويشمل إجراءات قد تُنفَّذ خلال يوم أو أسبوع.',
      correctAnswer: true,
      explanation: 'يوصف بأنه جزء أو أجزاء تنفيذية من الخطة الطويلة تستغرق يومًا أو أسبوعًا.',
      sourceReference: 'أنواع التخطيط — الصفحة المطبوعة 61.',
    },
  },
  // 29 | العنوان الأصلي: التخطيط للمنهج على المستوى الوزاري (المركزي) — ص 61
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-timeframes-admin-levels-centralization',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q29',
      type: 'true_false',
      order: 29,
      prompt: 'تتيح المركزية بالضرورة لكل بيئة محلية تصميم منهج مختلف عن بقية مناطق الدولة.',
      correctAnswer: false,
      explanation: 'في النظام المركزي تكون المناهج موحدة على المستوى الحكومي؛ وقد يؤخذ عليه عدم ملاءمة التنوع المحلي.',
      sourceReference: 'التخطيط للمنهج على المستوى الوزاري (المركزي) — الصفحة المطبوعة 61.',
    },
  },
  // 30 | العنوان الأصلي: التخطيط للمنهج على المستوى المحلي (اللامركزية) — ص 62
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-timeframes-admin-levels-centralization',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q30',
      type: 'true_false',
      order: 30,
      prompt: 'يشير المؤلف إلى إمكان الجمع بين مزايا النظامين المركزي واللامركزي مع توضيح دور كل مستوى.',
      correctAnswer: true,
      explanation: 'يختم المقارنة بإمكان الأخذ بالنظامين مع بيان أدوار الأجهزة المركزية والمحلية.',
      sourceReference: 'التخطيط للمنهج على المستوى المحلي (اللامركزية) — الصفحة المطبوعة 62.',
    },
  },
  // 31 | العنوان الأصلي: القواعد الفنية لبناء المناهج — ص 62
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q31',
      type: 'true_false',
      order: 31,
      prompt: 'تعني «الموازنة» في قواعد البناء إهمال قيم المجتمع لحساب متطلبات التطوير.',
      correctAnswer: false,
      explanation: 'تعني مراعاة التوازن بين متطلبات البناء والتطور وبين قيم المجتمع السائدة.',
      sourceReference: 'القواعد الفنية لبناء المناهج — الصفحة المطبوعة 62.',
    },
  },
  // 32 | العنوان الأصلي: الخطوة الرابعة: اختيار المحتوى وتنظيمه — ص 63
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q32',
      type: 'true_false',
      order: 32,
      prompt: 'يكفي عند اختيار المحتوى جمع الحقائق، ولا حاجة إلى المفاهيم أو التعميمات أو النظريات.',
      correctAnswer: false,
      explanation: 'معيار الأهمية يقتضي ألا يقتصر المحتوى على الحقائق بل يشمل المفاهيم والتعميمات والمبادئ والنظريات.',
      sourceReference: 'الخطوة الرابعة: اختيار المحتوى وتنظيمه — الصفحة المطبوعة 63.',
    },
  },
  // 33 | العنوان الأصلي: الخطوة السادسة: اختيار طرائق التدريس وتوضيحها — ص 64
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q33',
      type: 'true_false',
      order: 33,
      prompt: 'تمثل طرائق التدريس تطبيقًا ميدانيًا لما سبق تخطيطه من أهداف ومحتوى وخبرات.',
      correctAnswer: true,
      explanation: 'يوضح النص أن خطوة الطرائق تطبيق للخطوات السابقة في الميدان.',
      sourceReference: 'الخطوة السادسة: اختيار طرائق التدريس وتوضيحها — الصفحة المطبوعة 64.',
    },
  },
  // 34 | العنوان الأصلي: الخطوة السابعة: تحديد إجراءات التقويم ووسائله — ص 64
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q34',
      type: 'true_false',
      order: 34,
      prompt: 'يمكن أن يوفر التقويم للمعلم معلومات دقيقة عن تقدم تلاميذه واختيار المصادر الأنسب للتعلم.',
      correctAnswer: true,
      explanation: 'يشير النص إلى استفادة المعلم من التقويم في معرفة وضع التلاميذ والمصادر والوسائل الفعالة.',
      sourceReference: 'الخطوة السابعة: تحديد إجراءات التقويم ووسائله — الصفحة المطبوعة 64.',
    },
  },
  // 35 | العنوان الأصلي: الخطوة الثامنة: تجريب المنهج الذي تم تخطيطه — ص 65
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q35',
      type: 'true_false',
      order: 35,
      prompt: 'ينتهي دور التجريب بمجرد جمع البيانات ولا يشمل تحليل النتائج أو تعديل المنهج.',
      correctAnswer: false,
      explanation: 'يجب تحليل البيانات وتفسيرها وإجراء التعديلات وقد يعاد التجريب حتى تستقر النتائج.',
      sourceReference: 'الخطوة الثامنة: تجريب المنهج الذي تم تخطيطه — الصفحة المطبوعة 65.',
    },
  },
  // 36 | العنوان الأصلي: العوامل الخارجية: طبيعة المجتمع — ص 65
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-external-influencing-factors-difficulty-management',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q36',
      type: 'true_false',
      order: 36,
      prompt: 'إغفال قيم المجتمع وعاداته قد يؤدي إلى رفض المنهج مهما كانت جهود التخطيط كبيرة.',
      correctAnswer: true,
      explanation: 'يحذر المؤلف من فشل المنهج عند عدم مراعاة طبيعة المجتمع وقيمه.',
      sourceReference: 'العوامل الخارجية: طبيعة المجتمع — الصفحة المطبوعة 65.',
    },
  },
  // 37 | العنوان الأصلي: العوامل الخارجية: الصفات الشخصية والتدريسية للمعلم — ص 66
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-external-influencing-factors-difficulty-management',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q37',
      type: 'true_false',
      order: 37,
      prompt: 'قد يؤثر ضعف إعداد المعلم أو شخصيته في جودة تنفيذ منهج صُمم بإتقان.',
      correctAnswer: true,
      explanation: 'النص يبين أن ضعف الإعداد الأكاديمي والتربوي وإدارة الصف يضعف تنفيذ المنهج الجيد.',
      sourceReference: 'العوامل الخارجية: الصفات الشخصية والتدريسية للمعلم — الصفحة المطبوعة 66.',
    },
  },
  // 38 | العنوان الأصلي: العوامل الخارجية: طبيعة الطلاب — ص 66
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-external-influencing-factors-difficulty-management',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q38',
      type: 'true_false',
      order: 38,
      prompt: 'تفترض أمثلة المؤلف أن مستوى التلاميذ لا يغير مدى ملاءمة المنهج المخطط له.',
      correctAnswer: false,
      explanation: 'يورد أمثلة على صفوف ضعيفة أو قوية تجعل المنهج غير مناسب رغم مراعاة الفروق العامة.',
      sourceReference: 'العوامل الخارجية: طبيعة الطلاب — الصفحة المطبوعة 66.',
    },
  },
  // 39 | العنوان الأصلي: مقترحات للتعامل مع الصعوبات التي تواجه عملية التخطيط — ص 66
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-external-influencing-factors-difficulty-management',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q39',
      type: 'true_false',
      order: 39,
      prompt: 'يدعو المؤلف إلى تجاهل المشكلات القائمة حتى لا تعطل الأفكار الجديدة.',
      correctAnswer: false,
      explanation: 'يرى أن مواجهة المشكلات والعقبات أساس اقتراح التحسينات والتجديد.',
      sourceReference: 'مقترحات للتعامل مع الصعوبات التي تواجه عملية التخطيط — الصفحة المطبوعة 66.',
    },
  },
  // 40 | العنوان الأصلي: مقترحات للتعامل مع الصعوبات التي تواجه عملية التخطيط — ص 67
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-external-influencing-factors-difficulty-management',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q40',
      type: 'true_false',
      order: 40,
      prompt: 'تتضمن مقترحات التعامل مع الصعوبات الاستفادة من آراء التربويين والصحفيين وأصحاب الرأي في المجتمع.',
      correctAnswer: true,
      explanation: 'يذكر النص هذه الفئات ضمن من يمكن الاستفادة من آرائهم ومقترحاتهم.',
      sourceReference: 'مقترحات للتعامل مع الصعوبات التي تواجه عملية التخطيط — الصفحة المطبوعة 67.',
    },
  },
  // 41 | العنوان الأصلي: سابعاً : تنفيذ المنهج وتقويمه — ص 74
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-construction-steps-three-structural-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q41',
      type: 'true_false',
      order: 41,
      prompt: 'يؤخر المؤلف التقويم في خطوات بناء المنهج إلى ما بعد انتهاء تنفيذ المنهج الجديد، ولا يجعله مصاحبًا للتخطيط.',
      correctAnswer: false,
      explanation: 'الصحيح: يؤكد المؤلف أن التقويم ليس عملية نهائية، بل يصاحب التخطيط من بدايته حتى نهايته، مع متابعة التنفيذ وتقويمه.',
      sourceReference: 'سابعاً : تنفيذ المنهج وتقويمه — الصفحة المطبوعة 74.',
    },
  },
  // 42 | العنوان الأصلي: 6- المرونـة — ص 71
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-six-planning-criteria-knowledge-structure',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q42',
      type: 'true_false',
      order: 42,
      prompt: 'يعني معيار المرونة أن يلتزم مخططو المنهج بخطتهم دون تعديل مهما تغيرت الظروف أو ظهرت مقاومة للتنفيذ.',
      correctAnswer: false,
      explanation: 'الصحيح: يشترط المؤلف مرونة المخططين وعملية التخطيط لاستيعاب المتغيرات ومواجهة أوجه المقاومة المختلفة.',
      sourceReference: '6- المرونـة — الصفحة المطبوعة 71.',
    },
  },
  // 43 | العنوان الأصلي: معايير تخطيط المنهج: تحديد الأولويات — ص 70
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-six-planning-criteria-knowledge-structure',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q43',
      type: 'true_false',
      order: 43,
      prompt: 'يعني تحديد الأولويات أن يبدأ التخطيط بالأهم ثم المهم عند معالجة المشكلات.',
      correctAnswer: true,
      explanation: 'النص يشرح المعيار ببدء التخطيط من الأهم إلى المهم.',
      sourceReference: 'معايير تخطيط المنهج: تحديد الأولويات — الصفحة المطبوعة 70.',
    },
  },
  // 44 | العنوان الأصلي: معايير تخطيط المنهج: التكامل — ص 70
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-six-planning-criteria-knowledge-structure',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q44',
      type: 'true_false',
      order: 44,
      prompt: 'يدعو معيار التكامل إلى الاهتمام بالمعرفة وحدها حتى إذا جاء ذلك على حساب المتعلم والمجتمع.',
      correctAnswer: false,
      explanation: 'يقتضي التكامل مراعاة المعرفة والمتعلم والمجتمع دون تغليب جانب على غيره.',
      sourceReference: 'معايير تخطيط المنهج: التكامل — الصفحة المطبوعة 70.',
    },
  },
  // 45 | العنوان الأصلي: معايير تخطيط المنهج: الاستمرارية — ص 71
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-six-planning-criteria-knowledge-structure',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q45',
      type: 'true_false',
      order: 45,
      prompt: 'يصف المؤلف التخطيط بأنه عملية مستمرة لا ينتج عنها منهج صالح لكل زمان ومكان بلا تعديل.',
      correctAnswer: true,
      explanation: 'الاستمرارية مرتبطة بتغير الأزمنة والتحديات التي تواجه التعليم والمناهج.',
      sourceReference: 'معايير تخطيط المنهج: الاستمرارية — الصفحة المطبوعة 71.',
    },
  },
  // 46 | العنوان الأصلي: أنواع التخطيط: التخطيط المرحلي — ص 71
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-six-planning-criteria-knowledge-structure',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q46',
      type: 'true_false',
      order: 46,
      prompt: 'يبدأ التخطيط المرحلي، وفق التصنيف الوارد، بالأهداف أولًا ثم يبحث عن الإمكانات.',
      correctAnswer: false,
      explanation: 'يذكر النص أن هذا النوع يبدأ بالإمكانات والوسائل ثم يحدد الأهداف.',
      sourceReference: 'أنواع التخطيط: التخطيط المرحلي — الصفحة المطبوعة 71.',
    },
  },
  // 47 | العنوان الأصلي: ثالثاً : دور المواطنين العادين فى تخطيط المنهج — ص 78
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-participating-parties-architectural-curriculum-approach',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q47',
      type: 'true_false',
      order: 47,
      prompt: 'يدعو المؤلف إلى مشاركة مؤسسات وأفراد من خارج المدرسة في تخطيط المنهج مع عدم إغفال دور المتخصصين.',
      correctAnswer: true,
      explanation: 'يذكر المؤلف مشاركة قطاعات كالصناعة والزراعة والصحة والإعلام، مع تأكيد الإسهامات الرئيسة للمتخصصين في المادة الدراسية والمناهج.',
      sourceReference: 'ثالثاً : دور المواطنين العادين فى تخطيط المنهج — الصفحة المطبوعة 78.',
    },
  },
  // 48 | العنوان الأصلي: مستويات تخطيط المنهج: التخطيط على المستوى القومي — ص 75
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-curriculum-construction-steps-three-structural-levels',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q48',
      type: 'true_false',
      order: 48,
      prompt: 'تسهم اللجان العليا والخبراء والمتخصصون في رسم الخطوط العامة للمناهج على المستوى القومي.',
      correctAnswer: true,
      explanation: 'المستوى القومي يتم بالمؤتمرات واللجان التي تضم خبراء ومتخصصين وتضع الخطوط الرئيسية.',
      sourceReference: 'مستويات تخطيط المنهج: التخطيط على المستوى القومي — الصفحة المطبوعة 75.',
    },
  },
  // 49 | العنوان الأصلي: دور التلاميذ في تخطيط المنهج — ص 76
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-participating-parties-architectural-curriculum-approach',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q49',
      type: 'true_false',
      order: 49,
      prompt: 'ينتهي المؤلف إلى ضرورة إسناد مسؤولية تخطيط المنهج كاملة إلى التلاميذ وحدهم.',
      correctAnswer: false,
      explanation: 'يحذر من إسناد المسؤولية كاملة للتلاميذ أو للكبار ويطالب بمسؤولية مشتركة.',
      sourceReference: 'دور التلاميذ في تخطيط المنهج — الصفحة المطبوعة 76.',
    },
  },
  // 50 | العنوان الأصلي: دور المدرسين في تخطيط المنهج — ص 77
  {
    courseId: 'course-1',
    chapterId: 'chap-curriculum-planning',
    topicId: 'top-ch7-participating-parties-architectural-curriculum-approach',
    approvalStatus: 'draft',
    cognitiveLevel: 'comprehension',
    question: {
      id: 'ch7-draft-q50',
      type: 'true_false',
      order: 50,
      prompt: 'يعد اشتراك المدرسين في التخطيط عاملًا يدعم نموهم المهني وحماسهم للتنفيذ.',
      correctAnswer: true,
      explanation: 'يربط النص مشاركة المعلمين بنموهم المهني وإيمانهم بالتخطيط وحماس التلاميذ.',
      sourceReference: 'دور المدرسين في تخطيط المنهج — الصفحة المطبوعة 77.',
    },
  },
];

/**
 * بنك أسئلة مسودة غير معتمد للفصل السابع (50 سؤالاً)
 */
export const CHAPTER_7_COMPREHENSIVE_DRAFT_BANK: GovernedQuestionBank = {
  bankId: 'bank-ch7-planning-draft-50q',
  version: '0.1.0-draft',
  contentHash: '', // سيتم حسابه قطعيًا أدناه
  title: 'مسودة اختبار الفصل السابع: تخطيط المنهج المدرسي',
  description:
    'مسودة بنك أسئلة غير معتمدة تتضمن 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) مستندة إلى النسخة المدققة للتحكيم الأكاديمي، وتغطي موضوعات تخطيط المنهج المدرسي السبعة والصفحات المطبوعة 60–78.',
  instructions:
    'أجب عن جميع الأسئلة الـ 50. هذه المسودة مخصصة للمراجعة والتحكيم الأكاديمي الداخلي فقط وليست منشورة للطلاب.',
  courseId: 'course-1',
  chapterId: 'chap-curriculum-planning',
  targetType: 'chapter',
  approvalStatus: 'draft',
  reviewMetadata: {
    reviewerName: 'نسخة مدققة للتحكيم الأكاديمي (مسودة غير معتمدة)',
    reviewerTitle: 'المراجع الأكاديمي لم يُحدد بعد',
    approvalDate: '', // غير معتمد بعد
    academicSource: 'كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم',
    sourceLocation: 'الموضوع السابع: تخطيط المنهج المدرسي (ص 60 - 78 مطبوعة)',
    reviewNotes:
      'مسودة اختبار الفصل السابع المأخوذة من وثيقة «اختبار_الموضوع_السابع_نسخة_مدققة_للتحكيم_OloomSport.docx» وتتكون من 50 سؤالاً (25 MCQ + 25 TF). جميع الأسئلة في وضع مسودة أولية محظورة من النشر للطلاب. تم الحفاظ على التمييز الأكاديمي بين العرضين المتتابعين للتخطيط في الكتاب (خطوات تخطيط المنهج التسع ص 63-65، وخطوات بناء المنهج السبع ص 72-74) واستبعاد النص المطبعي الشاذ الوارد بص 74 في الكتاب الأصلي. المسودة معزولة تماماً وغير منشورة.',
  },
  passingScorePercentage: 60,
  questions: DRAFT_QUESTIONS,
};

// حساب التجزئة التوافقية القطعية لمحتوى المسودة
CHAPTER_7_COMPREHENSIVE_DRAFT_BANK.contentHash = computeQuestionBankHash(CHAPTER_7_COMPREHENSIVE_DRAFT_BANK);
