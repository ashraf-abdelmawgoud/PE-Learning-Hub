import type { AcademicCourse, AcademicReference } from '../../types';

export const SAMPLE_ACADEMIC_REFERENCE: AcademicReference = {
  id: 'ref-dev-01',
  bookTitle: 'الميكانيكا الحيوية والتحليل الحركي في المجال الرياضي',
  author: 'أ.د. محمد حسن وآخرون',
  edition: 'الطبعة الأكاديمية الثالثة',
  chapter: 'الفصل الرابع: عزم القوة والروافع العظمية',
  pageRange: 'ص 112 - 128',
  notes: 'مرجع تجريبي مخصص لاختبار كتل التوثيق الأكاديمي في محرك المنصة.',
};

/**
 * مقرر تقني تجريبي معزول تماماً عن المقررات السبعة الرسمية.
 * الغرض: اختبار محرك كتل المحتوى (Content Block System) والتحقق من سلامة العرض.
 * تنبيه: ليس مادة أكاديمية معتمدة، ويُستخدم حصراً للتحقق التقني البرمجي.
 */
export const DEV_SANDBOX_COURSE: AcademicCourse = {
  id: 'dev-sandbox',
  orderNumber: 0,
  code: 'DEV-SANDBOX-01',
  title: 'المقرر التجريبي التقني (معمل كتل المحتوى)',
  targetBookReference: 'نموذج برمجي للاختبار التقني والمعاينة',
  status: 'published',
  statusLabel: 'نموذج تجريبي تقني',
  categoryPlaceholder: 'معمل التطوير البرمجي',
  description: 'مقرر تجريبي معزول صُمم لاختبار جميع أنواع كتل المحتوى الأكاديمي (Content Blocks)، وتجربة التنقل الهرمي بين الفصول والموضوعات والدروس دون التأثير على المقررات الرسمية.',
  architecture: {
    lessonsPlanned: true,
    quizzesPlanned: true,
    simulationsPlanned: true,
    interactiveDiagramsPlanned: true,
  },
  futureUnitsCount: 1,
  futureLessonsCount: 1,
  isDevSandbox: true,
  academicReferences: [SAMPLE_ACADEMIC_REFERENCE],
  chapters: [
    {
      id: 'dev-chap-1',
      courseId: 'dev-sandbox',
      title: 'الفصل الأول: معمل الاختبارات التقنية للشروحات الرقمية',
      description: 'فصل تقني يستعرض إمكانيات محرك المحتوى في تقديم الشروحات المفهومية والتحليل الحركي والفسيولوجي.',
      order: 1,
      status: 'published',
      topics: [
        {
          id: 'dev-top-1',
          chapterId: 'dev-chap-1',
          title: 'الموضوع الأول: استعراض شامل للكتل الأكاديمية (Content Blocks)',
          description: 'موضوع تجريبي يضم درساً شاملاً يجمع الكتل العشرة الأساسية المعتمدة للمنصة.',
          order: 1,
          status: 'published',
          relatedTopics: [],
          lessons: [
            {
              id: 'dev-les-1',
              topicId: 'dev-top-1',
              title: 'الدرس النموذجي: مبادئ الميكانيكا الحيوية وتطبيقات عزم القوة الرياضي',
              description: 'درس تقني متكامل يعرض كافة أنواع كتل المحتوى العشرة المدعومة في محرك المنصة الأكاديمي.',
              order: 1,
              status: 'published',
              estimatedDuration: 12,
              learningObjectives: [
                'معاينة كتل العناوين والفقرات والقوائم في المحرك الأكاديمي الرقمي',
                'استعراض كتل التعريفات العلمية والمصطلحات الأجنبية المصاحبة',
                'التعرف على كتل التطبيقات الميدانية والمقارنات التحليلية للأنظمة الحيوية',
                'فحص كتل التوثيق المرجعي والكتل التفاعلية المجهزة للمحاكاة والاختبارات',
              ],
              references: [SAMPLE_ACADEMIC_REFERENCE],
              relatedLessons: [],
              blocks: [
                {
                  id: 'block-01',
                  order: 1,
                  type: 'heading',
                  level: 1,
                  text: 'الميكانيكا الحيوية: مدخل تطبيقي في الأداء الحركي',
                  subtitle: 'تفكيك الحركة الرياضية إلى قوى وزوايا عزم قابلة للقياس والتحسين',
                },
                {
                  id: 'block-02',
                  order: 2,
                  type: 'paragraph',
                  lead: true,
                  text: 'تبحث الميكانيكا الحيوية (Biomechanics) في دراسة القوى الميكانيكية المؤثرة على الجهاز الحركي للإنسان وتأثيرها على كفاءة الأداء الرياضي والوقاية من الإصابات الميدانية.',
                },
                {
                  id: 'block-03',
                  order: 3,
                  type: 'definition',
                  term: 'عزم القوة الدوراني',
                  scientificTermEn: 'Torque / Moment of Force',
                  definition: 'الأثر الدوراني للقوة المؤثرة على مفصل عظمي حول محور دورانه، ويحسب رياضياً بحاصل ضرب مقدار القوة العضلية في ذراعها العمودي عن محور المفصل.',
                  academicContext: 'يحدد مقدار عزم القوة كفاءة الرياضي في حركات الانطلاق، ركل الكرة، ورفع الأثقال.',
                },
                {
                  id: 'block-04',
                  order: 4,
                  type: 'key_point',
                  title: 'المحاور الأساسية لتحليل حركة الرياضي',
                  importance: 'essential',
                  points: [
                    'القوى الداخلية تنشأ عن الانقباضات العضلية وشد الأوتار والأربطة حول المفاصل.',
                    'القوى الخارجية تشمل الجاذبية الأرضية، مقاومة الهواء، وقوة رد فعل الأرض (GRF).',
                    'تحقيق أعلى مردود كينماتيكي يعتمد على توجيه محصلة القوى بالزاوية المثالية في التوقيت المناسب.',
                  ],
                },
                {
                  id: 'block-05',
                  order: 5,
                  type: 'example',
                  title: 'تطبيق عملي: تحليل مرحلة الدفع في انطلاق عدّاء السرعة',
                  scenario: 'عند لحظة انطلاق العدّاء من مكعبات البدء في سباق 100م، تكون زاوية انثناء الركبة حوالي 140 درجة وزاوية ارتكاز الجذع للأمام 45 درجة.',
                  explanation: 'تساعد هذه الزوايا على توجيه قوة رد فعل الأرض للأمام مباشرة مع إطالة مسار تأثير القوة، مما يولد تسارعاً خطياً فائقاً دون إهدار الطاقة رأسياً.',
                  takeaway: 'ضبط زوايا الانطلاق يرفع السرعة الابتدائية بنسبة تصل إلى 8% لدى الرياضيين المتنافسين.',
                },
                {
                  id: 'block-06',
                  order: 6,
                  type: 'comparison',
                  title: 'مقارنة فسيولوجية بين أنظمة إنتاج الطاقة الرياضية',
                  headers: ['نظام الفوسفاجين (ATP-CP)', 'نظام الجليكوليز اللاهوائي (حمض اللاكتيك)'],
                  rows: [
                    {
                      feature: 'المصدر الحيوي للطاقة',
                      itemA: 'مركب فوسفات الكرياتين المخزن بالعضلات',
                      itemB: 'تحلل الجليكوجين العضلي بدون أكسجين',
                    },
                    {
                      feature: 'زمن الفاعلية القصوى',
                      itemA: 'من ثانية واحدة إلى 10 ثوانٍ',
                      itemB: 'من 30 ثانية وحتى دقيقتين',
                    },
                    {
                      feature: 'معدل إنتاج القدرة',
                      itemA: 'قدرة انفجارية فائقة وسريعة جداً',
                      itemB: 'قدرة متوسطة مع إجهاد تراكمي',
                    },
                    {
                      feature: 'المهارة الرياضية المقابلة',
                      itemA: 'سباق 100م، الوثب العالي، رفعة الخطف',
                      itemB: 'سباق 400م عدو، 100م سباحة حرة',
                    },
                  ],
                },
                {
                  id: 'block-07',
                  order: 7,
                  type: 'list',
                  style: 'ordered',
                  title: 'المراحل العلمية لإعداد التحليل الحركي للرياضي',
                  items: [
                    'تفكيك المهارة الرياضية إلى مراحلها الحركية (التمهيدية، الرئيسية، الختامية).',
                    'رصد زوايا المفاصل وارتفاع مركز ثقل الجسم (COG) عبر نقاط التتبع.',
                    'حساب متجهات السرعة والعجلة وقوة رد فعل الأرض.',
                    'مقارنة النتائج الحركية بالنموذج المثالي وتحديد نقاط الخلل والتطوير.',
                  ],
                },
                {
                  id: 'block-08',
                  order: 8,
                  type: 'image',
                  src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" fill="none"><rect width="600" height="240" rx="16" fill="%23F8FCFF"/><line x1="60" y1="200" x2="540" y2="200" stroke="%23D9EAF7" stroke-width="2"/><circle cx="120" cy="140" r="16" fill="%232563EB"/><line x1="120" y1="140" x2="300" y2="90" stroke="%232563EB" stroke-width="5" stroke-linecap="round"/><circle cx="300" cy="90" r="12" fill="%2306B6D4"/><line x1="300" y1="90" x2="480" y2="160" stroke="%2314B8A6" stroke-width="5" stroke-linecap="round"/><circle cx="480" cy="160" r="14" fill="%2310B981"/><path d="M 300 90 L 300 20" stroke="%23EF4444" stroke-width="3" stroke-dasharray="4 4"/><polygon points="300,10 295,24 305,24" fill="%23EF4444"/><text x="300" y="225" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23172B4D" text-anchor="middle">مخطط رافعة المفصل العظمي: ذراع القوة والمقاومة ومحور الارتكاز</text></svg>',
                  alt: 'مخطط هندسي توضيحي لرافعة المفصل العظمي وقوى الشد العضلي',
                  caption: 'الشكل (1-1): تمثيل تخطيطي لرافعة عظمية من النوع الثالث أثناء توليد عزم دوران المفصل.',
                  credit: 'وحدة المحاكاة الرقمية - معمل التطوير التقني',
                },
                {
                  id: 'block-09',
                  order: 9,
                  type: 'interactive_placeholder',
                  placeholderType: 'simulation',
                  title: 'مختبر محاكاة زوايا المفاصل وقوة رد فعل الأرض (قريباً)',
                  description: 'نموذج محاكاة تفاعلي سيمكن الطالب من تحريك زاوية الركبة والكاحل وملاحظة التغير المباشر في متجه القوة والنبض القلبي.',
                  expectedFeature: 'تفاعل حركي بـ Canvas/SVG مع لوحة تحكم بالزوايا والسرعة وعرض فوري لمنحنى القوة.',
                },
                {
                  id: 'block-10',
                  order: 10,
                  type: 'academic_reference',
                  reference: SAMPLE_ACADEMIC_REFERENCE,
                  citationText: 'إن الاستثمار الأمثل للروافع العظمية وزوايا التطبيق يقلل الجهد الفسيولوجي المبذول ويحقق أقصى ناتج كينماتيكي ممكن في المنافسات الرياضية.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

