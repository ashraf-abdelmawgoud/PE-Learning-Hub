import type {
  AcademicCourse,
  InteractiveDiagramBlock,
  AnimatedExplanationBlock,
  VisualComparisonBlock,
  VisualSequenceBlock,
} from '../../types';

export const SAMPLE_INTERACTIVE_DIAGRAM: InteractiveDiagramBlock = {
  id: 'vis-diag-sample',
  type: 'interactive_diagram',
  order: 2,
  title: 'مخطط تفاعلي تجريبي: علاقات العناصر الميكانيكية (A, B, C)',
  caption: 'انقر على أي عقدة لاستعراض خصائصها وتأثيرها على العقد المتصلة بها.',
  viewBoxWidth: 700,
  viewBoxHeight: 320,
  initialSelectedNodeId: 'node-a',
  nodes: [
    {
      id: 'node-a',
      label: 'عنصر أ (القوة العضلية)',
      sublabel: 'Force Generator A',
      description: 'العنصر المسؤول عن توليد العزم الحركي ونقل الطاقة الميكانيكية عبر نقطة الارتكاز.',
      category: 'مدخلات الحركة',
      x: 60,
      y: 110,
      width: 170,
      height: 75,
      details: {
        academicTerm: 'Muscle Effort (F)',
        functionRole: 'توليد القوة المركزية ضد المقاومة',
        keyPoints: [
          'يتناسب طردياً مع مساحة المقطع الفسيولوجي للعضلة.',
          'يشكل ذراع القوة المؤثر حول المفصل الحركي.',
        ],
      },
    },
    {
      id: 'node-b',
      label: 'عنصر ب (نقطة الارتكاز)',
      sublabel: 'Fulcrum Pivot B',
      description: 'المحور المفصلي الثابت الذي تدور حوله الروافع العظمية لتوجيه اتجاه القوة.',
      category: 'محور الدوران',
      x: 290,
      y: 40,
      width: 170,
      height: 75,
      details: {
        academicTerm: 'Axis of Rotation (Fulcrum)',
        functionRole: 'تثبيت المركز الدوراني وتوزيع الضغوط المفصلية',
        keyPoints: [
          'يمثل المفصل الزليلي في الهيكل البشري.',
          'يحدد الفائدة الميكانيكية ونوع الرافعة الحركية.',
        ],
      },
    },
    {
      id: 'node-c',
      label: 'عنصر ج (المقاومة والحمل)',
      sublabel: 'Load Resistance C',
      description: 'الوزن أو الحمل الخارجي المطلوب التغلب عليه أو نقله في الفضاء الحركي.',
      category: 'المقاومة الخارجية',
      x: 480,
      y: 180,
      width: 170,
      height: 75,
      details: {
        academicTerm: 'Resistance Load (R)',
        functionRole: 'الحمل الميكانيكي المؤثر على توازن الرافعة',
        keyPoints: [
          'يشمل وزن العضو الحركي بالإضافة إلى أي ثقل خارجي.',
          'يحدد كمية الشغل الميكانيكي المبذول لإنجاز المهارة.',
        ],
      },
    },
  ],
  connections: [
    {
      id: 'conn-a-b',
      from: 'node-a',
      to: 'node-b',
      label: 'ذراع القوة',
      style: 'solid',
      arrow: true,
    },
    {
      id: 'conn-b-c',
      from: 'node-b',
      to: 'node-c',
      label: 'ذراع الحمل',
      style: 'solid',
      arrow: true,
    },
    {
      id: 'conn-a-c',
      from: 'node-a',
      to: 'node-c',
      label: 'التوازن والعزم',
      style: 'dashed',
      arrow: false,
    },
  ],
  annotations: [
    {
      id: 'ann-1',
      text: 'منظومة رافعة تجريبية',
      x: 280,
      y: 270,
    },
  ],
};

export const SAMPLE_ANIMATED_EXPLANATION: AnimatedExplanationBlock = {
  id: 'vis-anim-sample',
  type: 'animated_explanation',
  order: 3,
  title: 'شرح متحرك متسلسل: مسار انتقال مركز ثقل الجسم أثناء الحركة',
  description: 'محاكاة تسلسلية من 4 خطوات توضح ارتقاء وهبوط مركز الثقل في حركة نموذجية.',
  viewBoxWidth: 700,
  viewBoxHeight: 280,
  defaultDurationPerStepMs: 3200,
  baseElements: [
    {
      id: 'athlete-center',
      label: 'مركز الثقل',
      initialX: 60,
      initialY: 170,
      shape: 'circle',
      color: '#2563EB',
      width: 44,
      height: 44,
    },
    {
      id: 'support-base',
      label: 'قاعدة الارتكاز',
      initialX: 40,
      initialY: 220,
      shape: 'rect',
      color: '#94A3B8',
      width: 120,
      height: 24,
    },
    {
      id: 'target-marker',
      label: 'نقطة الهدف',
      initialX: 540,
      initialY: 90,
      shape: 'rect',
      color: '#0D9488',
      width: 100,
      height: 36,
    },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'الخطوة الأولى: مرحلة الاستعداد والاستقرار الابتدائي',
      explanation: 'يقع مركز الثقل عمودياً فوق منتصف قاعدة الارتكاز مما يوفر أقصى ثبات استاتيكي قبل بدء الحركة.',
      pedagogicalTip: 'كلما اتسعت قاعدة الارتكاز وانخفض مركز الثقل، زاد اتزان الجسم الميكانيكي.',
      transformations: [
        { elementId: 'athlete-center', x: 75, y: 165, scale: 1, highlight: true },
        { elementId: 'support-base', x: 40, y: 220, opacity: 1 },
      ],
      spotlightZone: { x: 30, y: 140, width: 150, height: 110, label: 'منطقة الاستقرار' },
    },
    {
      stepNumber: 2,
      title: 'الخطوة الثانية: انطلاق القوة وبدء التسارع الأفقي',
      explanation: 'يندفع مركز الثقل للأمام خارج قاعدة الارتكاز ليتحول الاتزان إلى حالة ديناميكية تتيح توليد السرعة.',
      pedagogicalTip: 'الخروج المتعمد لمركز الثقل عن قاعدة الارتكاز هو سر سرعة الانطلاق في ألعاب القوى.',
      transformations: [
        { elementId: 'athlete-center', x: 230, y: 130, scale: 1.15, highlight: true, color: '#06B6D4' },
        { elementId: 'support-base', x: 40, y: 220, opacity: 0.5 },
      ],
      spotlightZone: { x: 200, y: 100, width: 140, height: 90, label: 'منطقة التسارع' },
    },
    {
      stepNumber: 3,
      title: 'الخطوة الثالثة: قمة المسار المنحني (Apex Transition)',
      explanation: 'يصل مركز الثقل إلى أعلى نقطة في مساره المقذوف، حيث تكون السرعة الرأسية لحظياً صفراً وتبلغ طاقة الوضع قيمتها القصوى.',
      pedagogicalTip: 'شكل المسار المنحني لمركز الثقل يحدد مسبقاً بزاوية الانطلاق وسرعة الدفع الميكانيكية.',
      transformations: [
        { elementId: 'athlete-center', x: 390, y: 65, scale: 1.25, highlight: true, color: '#F59E0B' },
      ],
      spotlightZone: { x: 350, y: 40, width: 140, height: 90, label: 'قمة الارتفاع' },
    },
    {
      stepNumber: 4,
      title: 'الخطوة الرابعة: الاقتراب من الهدف وإعادة امتصاص الصدمة',
      explanation: 'يتحرك مركز الثقل باتجاه منطقة الهبوط، لتبدأ العضلات مرحلة الانقباض اللامركزي لامتصاص قوى رد فعل الأرض.',
      pedagogicalTip: 'تثبيت الهبوط الناجح يعتمد على إعادة إدخال مركز الثقل داخل قاعدة ارتكاز جديدة فور التلامس.',
      transformations: [
        { elementId: 'athlete-center', x: 550, y: 85, scale: 1, highlight: true, color: '#10B981' },
        { elementId: 'target-marker', x: 540, y: 90, opacity: 1 },
      ],
      spotlightZone: { x: 520, y: 60, width: 140, height: 100, label: 'منطقة الوصول' },
    },
  ],
};

export const SAMPLE_VISUAL_COMPARISON: VisualComparisonBlock = {
  id: 'vis-comp-sample',
  type: 'visual_comparison',
  order: 4,
  title: 'مقارنة بصرية تفاعلية: نموذج الانقباض متساوي الطول (Isometric) مقابل متساوي التوتر (Isotonic)',
  description: 'اختر المفهومين واستعرض الفروق الميكانيكية والفسيولوجية والقواسم المشتركة بينهما.',
  defaultItemAId: 'model-isometric',
  defaultItemBId: 'model-isotonic',
  criteria: [
    { key: 'length_change', label: 'تغير طول العضلة', category: 'ميكانيكي' },
    { key: 'joint_motion', label: 'الحركة المفصلية', category: 'حركي' },
    { key: 'mechanical_work', label: 'الشغل الميكانيكي الخارجي', category: 'فيزيائي' },
    { key: 'energy_consumption', label: 'استهلاك الطاقة الفسيولوجي', category: 'طاقة' },
    { key: 'sports_application', label: 'التطبيق الرياضي النموذجي', category: 'تطبيقي' },
  ],
  items: [
    {
      id: 'model-isometric',
      name: 'الانقباض الثابت (Isometric)',
      badge: 'انقباض استاتيكي',
      summary: 'تولد العضلة توتراً وقوة داخلية دون حدوث أي تغير ملموس في طولها الخارجي أو حركة زاوية المفصل.',
      characteristics: {
        length_change: 'ثابت لا يتغير (مسافة = 0)',
        joint_motion: 'معدومة (زاوية المفصل ثابتة)',
        mechanical_work: 'صفر ميكانيكياً (Work = F x 0)',
        energy_consumption: 'مرتفع نتيجة استمرار تجنيد الوحدات الحركية وضغط الأوعية',
        sports_application: 'تثبيت الجذع في وضع البلانك (Plank) وثبات الحلق في الجمباز',
      },
    },
    {
      id: 'model-isotonic',
      name: 'الانقباض المتحرك (Isotonic)',
      badge: 'انقباض ديناميكي',
      summary: 'تتغير أطوال الألياف العضلية بالتقارب (مركزي) أو التباعد (لامركزي) مع تحريك زاوية المفصل والحمل.',
      characteristics: {
        length_change: 'يتغير إما بالقصر (Concentric) أو الاستطالة (Eccentric)',
        joint_motion: 'ديناميكية مستمرة بتغير زاوية المفصل',
        mechanical_work: 'شغل إيجابي أو سلبي فعال (Work = F x D)',
        energy_consumption: 'متناسب مع المقاومة المحركة وعدد التكرارات الحركية',
        sports_application: 'رفع وخفض الأثقال، ودفع الجلة، والركل في كرة القدم',
      },
    },
  ],
  sharedSimilarities: [
    'كلا النوعين يعتمدان على نظرية الخيوط المنزلقة وتكوين الجسور المستعرضة بين الأكتين والمايوسين.',
    'كلاهما يتطلبان استهلاك جزيئات الطاقة (ATP) وإشارات عصبية من الخلايا العصبية الحركية.',
    'كلاهما يستخدمان في برامج التأهيل الرياضي وتنمية القوة العضلية لدى الرياضيين.',
  ],
  contrastingDifferencesSummary:
    'يكمن الفارق الجوهري في إنتاج الحركة الخارجية؛ فالانقباض الثابت يولد قوة لتثبيت الوضعية دون شغل فيزيائي، بينما الانقباض المتحرك ينتج حركة فعلية وينقل الأحمال عبر مدى حركي محدد.',
};

export const SAMPLE_VISUAL_SEQUENCE: VisualSequenceBlock = {
  id: 'vis-seq-sample',
  type: 'visual_sequence',
  order: 5,
  title: 'نشاط ترتيبي تفاعلي: تسلسل المراحل الحركية لمهارة الوثب العمودي',
  instructions: 'قم بترتيب المراحل الحركية الأربعة التالية بالتسلسل الزمني والميكانيكي الصحيح باستخدام أزرار التحريك.',
  correctOrder: ['phase-prep', 'phase-counter', 'phase-takeoff', 'phase-landing'],
  items: [
    {
      id: 'phase-counter',
      text: 'مرحلة الثني والانعكاس المطاطي (Countermovement Dip)',
      categoryBadge: 'المرحلة 2',
    },
    {
      id: 'phase-prep',
      text: 'مرحلة الوقوف المبدئي وضبط الاتزان (Initial Upright Stance)',
      categoryBadge: 'المرحلة 1',
    },
    {
      id: 'phase-landing',
      text: 'مرحلة الهبوط وامتصاص القوى الانعكاسية (Deceleration & Landing)',
      categoryBadge: 'المرحلة 4',
    },
    {
      id: 'phase-takeoff',
      text: 'مرحلة الدفع الانفجاري والارتقاء في الهواء (Triple Extension & Takeoff)',
      categoryBadge: 'المرحلة 3',
    },
  ],
  explanation:
    'التسلسل البيوميكانيكي السليم يبدأ بـ (1) الوقوف المبدئي، ثم (2) حركة الثني لأسفل لتفعيل دورة الإطالة والتقصير العضلي (Stretch-Shortening Cycle)، يليها (3) الامتداد الثلاثي المفاصل (الكاحل والركبة والفخذ) لدفع الأرض والارتقاء، وأخيراً (4) الهبوط المتدرج لامتصاص قوى الصدمة.',
};

/**
 * مقرر تجريبي تقني معزول مخصص لاختبار كتل المحرك البصري التفاعلي (Phase 4 Visual Sandbox).
 */
export const VISUAL_SANDBOX_COURSE: AcademicCourse = {
  id: 'visual-sandbox',
  orderNumber: 0,
  code: 'VISUAL-ENGINE-01',
  title: 'معمل المحرك البصري التفاعلي (Visual Learning Sandbox)',
  targetBookReference: 'نموذج برمجي تجريبي لاختبار كتل الشرح البصري والأنيميشن',
  status: 'published',
  statusLabel: 'معمل تقني بصري',
  categoryPlaceholder: 'معمل التعلم البصري',
  description:
    'بيئة اختبار وتطوير برمجية مستقلة تهدف لمعاينة واختبار المكونات البصرية الأربعة: المخططات التفاعلية، الشرح المتحرك، المقارنة البصرية، ونشاط ترتيب الخطوات.',
  architecture: {
    lessonsPlanned: true,
    quizzesPlanned: true,
    simulationsPlanned: true,
    interactiveDiagramsPlanned: true,
  },
  futureUnitsCount: 1,
  futureLessonsCount: 1,
  chapters: [
    {
      id: 'vis-chap-1',
      courseId: 'visual-sandbox',
      order: 1,
      title: 'الفصل التجريبي: استعراض مكونات الشرح البصري والأنيميشن',
      description: 'فصل تقني مخصص لاختبار محركات الـ SVG والأنيميشن والأنشطة التفاعلية.',
      topics: [
        {
          id: 'vis-top-1',
          chapterId: 'vis-chap-1',
          order: 1,
          title: 'الموضوع التجريبي: كتل التعلم البصري المتكاملة',
          description: 'استعراض تطبيقي للكتل الأربعة الجديدة مدمجة داخل محرك الدروس.',
          lessons: [
            {
              id: 'vis-les-1',
              topicId: 'vis-top-1',
              order: 1,
              title: 'الدرس الشامل لمحرك الشرح البصري والأنيميشن التفاعلي',
              description: 'درس تجريبي يحتوي على المخطط التفاعلي، الشرح المتحرك، المقارنة البصرية، ونشاط الترتيب.',
              learningObjectives: [
                'معاينة وتجربة المخططات التفاعلية وقابلية اختيار العقد وعرض تفاصيلها.',
                'التحكم الكامل في الشرح المتحرك خطوة بخطوة وإعادة التشغيل والتحكم في السرعة.',
                'استخدام المقارنة البصرية التفاعلية لاكتشاف أوجه التشابه والاختلاف.',
                'التفاعل مع نشاط ترتيب الخطوات البصري والتحقق من التغذية الراجعة.',
              ],
              estimatedDuration: 15,
              references: [
                {
                  id: 'ref-vis-01',
                  bookTitle: 'الوسائط التفاعلية والشرح البصري في علوم الرياضة',
                  author: 'فريق التطوير التقني',
                  edition: 'الإصدار البرمجي 1.0',
                  chapter: 'الفصل التقني: كتل التعلم البصري',
                  pageRange: 'ص 1 - 20',
                  notes: 'مرجع برمجي تجريبي لاختبار محرك التوثيق في المرحلة الرابعة.',
                },
              ],
              blocks: [
                {
                  id: 'blk-head-1',
                  type: 'heading',
                  order: 1,
                  level: 2,
                  text: 'مقدمة معمل الشرح البصري والأنيميشن التفاعلي',
                  subtitle: 'اختبار محرك الكتل البصرية الأربعة (Phase 4 Visual Learning Engine)',
                },
                SAMPLE_INTERACTIVE_DIAGRAM,
                SAMPLE_ANIMATED_EXPLANATION,
                SAMPLE_VISUAL_COMPARISON,
                SAMPLE_VISUAL_SEQUENCE,
                {
                  id: 'blk-kp-summary',
                  type: 'key_point',
                  order: 6,
                  title: 'المزايا التقنية لمحرك الشرح البصري',
                  points: [
                    'تصميم خفيف وسريع يعتمد على رسومات المتجهات القياسية SVG دون أي مكتبات خارجية ثقيلة.',
                    'محمل بنظام Lazy Loading لضمان عدم زيادة حجم الصفحة الرئيسية للمنصة.',
                    'دعم كامل للتنقل بلوحة المفاتيح ومعايير إمكانية الوصول ووضع تقليل الحركة (prefers-reduced-motion).',
                    'عزل تام للمعمل التجريبي عن واجهة الطلاب في بيئة الإنتاج.',
                  ],
                },
              ],
              status: 'published',
            },
          ],
          status: 'published',
        },
      ],
      status: 'published',
    },
  ],
  academicReferences: [],
  isDevSandbox: true,
};
