import type {
  AcademicReference,
  Chapter,
  Topic,
  Lesson,
  AnimatedExplanationBlock,
  InteractiveDiagramBlock,
  VisualComparisonBlock,
  VisualSequenceBlock,
  HeadingBlock,
  ParagraphBlock,
  DefinitionBlock,
  KeyPointBlock,
  AcademicReferenceBlock,
} from '../../types';

/**
 * المرجع الأكاديمي المعتمد المستخلص مباشرة من صفحات الكتاب المصورة (ص 2 - 5)
 */
export const CURRICULUM_ACADEMIC_REFERENCE: AcademicReference = {
  id: 'ref-curriculum-desouki-ch1',
  bookTitle: 'مناهج التربية الرياضية',
  author: 'أ.د. هاني الدسوقي إبراهيم (أستاذ المناهج وطرق تدريس التربية الرياضية)',
  edition: 'مقرر أكاديمي — العام الجامعي 2025/2026م',
  chapter: 'الفصل الأول: مقدمة وماهية المنهج',
  pageRange: 'ص 2 - 5',
  notes: 'المقرر المعتمد لطلاب الفرقة الرابعة — قسم تدريس، كلية علوم الرياضة.',
};

// 1. كتلة العنوان الرئيسي
const BLOCK_HEADING: HeadingBlock = {
  id: 'curric-blk-head-1',
  type: 'heading',
  order: 1,
  level: 1,
  text: 'تطور مفهوم المنهج: من النظرة التقليدية إلى النظرة الحديثة',
  subtitle:
    'نموذج تطبيقي حقيقي من كتاب مناهج التربية الرياضية — أ.د. هاني الدسوقي إبراهيم (الفصل الأول: ص 2 - 5)',
};

// 2. كتلة الفقرة التمهيدية التأسيسية
const BLOCK_PARAGRAPH_INTRO: ParagraphBlock = {
  id: 'curric-blk-para-intro',
  type: 'paragraph',
  order: 2,
  lead: true,
  text: 'تعد المناهج الدراسية نتاج عمل تعاوني تشارك فيه لجان تضم خبراء متخصصين وتربويين، ليرسموا المسارات التي يتعلم من خلالها الطالب. والمنهج هو الأداة الأساسية للمنظومة التعليمية وسلسلة من الخبرات الموجهة لتحقيق الأهداف التربوية المنشودة. وقد شهد مفهوم المنهج في التربية الرياضية تحولاً جوهرياً عبر مسيرته التاريخية من النظرة التقليدية الضيقة التي تحصره في مجرد مواد ومقررات ومعارف نظرية، إلى النظرة الحديثة الواسعة التي تعتبره منظومة متكاملة من الخبرات والأنشطة الموجهة التي ترعى النمو الشامل لشخصية المتعلم.',
};

// 3. كتلة تعريف أصل كلمة المنهج
const BLOCK_DEFINITION: DefinitionBlock = {
  id: 'curric-blk-def-curriculum',
  type: 'definition',
  order: 3,
  term: 'ماهية المنهج في الاصطلاح واللغة',
  scientificTermEn: 'Curriculum (Latin: Racecourse / Series of Actions)',
  definition:
    'كلمة Curriculum ذات أصل لاتيني تعني "سلسلة أفعال" أو مسار ومضمار الجري، وفي اللغة تعني "النهج أو الطريق الواضح". أما في التربية فتعني: (مجموعة أنشطة ومعارف وخبرات موجهة نحو تنمية قدرات الفرد وفي محيط التربية). والمنهج هو الأداة الأساسية التي تستخدمها التربية لتحقيق أهدافها في أية عملية تربوية.',
  academicContext: 'كتاب مناهج التربية الرياضية — أ.د. هاني الدسوقي إبراهيم (ص 5)',
};

// 4. محرك الشرح المتحرك ثلاثي المراحل (AnimatedExplanationView)
const BLOCK_ANIMATED_EXPLANATION: AnimatedExplanationBlock = {
  id: 'curric-blk-anim-evolution',
  type: 'animated_explanation',
  order: 4,
  title: 'شرح متحرك ثلاثي المراحل: مسار التحول من المنهج التقليدي إلى المنهج الحديث',
  description:
    'محاكاة بصرية من 3 مراحل توضح اتساع بؤرة التركيز التربوي من حفظ المواد الدراسية إلى شمولية الخبرات والأنشطة وتحقيق التنمية المتكاملة لشخصية المتعلم (وفق صفحات الكتاب 2–5).',
  viewBoxWidth: 720,
  viewBoxHeight: 300,
  defaultDurationPerStepMs: 3500,
  baseElements: [
    {
      id: 'knowledge-core',
      label: 'المقررات والمعارف',
      initialX: 70,
      initialY: 120,
      shape: 'rect',
      color: '#2563EB',
      width: 140,
      height: 48,
    },
    {
      id: 'teacher-role',
      label: 'المعلم (ناقل وملقن)',
      initialX: 70,
      initialY: 45,
      shape: 'rect',
      color: '#0891B2',
      width: 140,
      height: 44,
    },
    {
      id: 'learner-role',
      label: 'المتعلم (متلقي سلبي)',
      initialX: 70,
      initialY: 200,
      shape: 'rect',
      color: '#64748B',
      width: 140,
      height: 44,
    },
    {
      id: 'activities-pool',
      label: 'منظومة الأنشطة والخبرات',
      initialX: 280,
      initialY: 120,
      shape: 'rect',
      color: '#0D9488',
      width: 160,
      height: 52,
    },
    {
      id: 'holistic-growth',
      label: 'التنمية الشاملة للمتعلم',
      initialX: 510,
      initialY: 115,
      shape: 'circle',
      color: '#10B981',
      width: 60,
      height: 60,
    },
  ],
  steps: [
    {
      stepNumber: 1,
      title: 'المرحلة الأولى: التصور التقليدي (المنهج كمقررات ومحتوى معرفي)',
      explanation:
        'في النظرة التقليدية، يُعرف المنهج بأنه "مجموعة من المواد والمقررات الدراسية لفرقة أو سنة معينة". تضع هذه النظرة المعرفة وحدها في بؤرة الاهتمام بوصفها حصيلة التراث الثقافي للإنسان. يقف المعلم فيها كناقل وملقن للمعلومات، بينما يقف الطالب كمتلقٍ سلبي يُطالب بالحفظ وتُهمل فيه الأنشطة الرياضية والخبرات الحياتية.',
      pedagogicalTip:
        'التقويم في المنهج التقليدي يقتصر على قياس ما تم حفظه واسترجاعه من مفاهيم ونظريات فقط دون قياس التغير السلوكي (ص 5).',
      transformations: [
        {
          elementId: 'knowledge-core',
          x: 80,
          y: 120,
          scale: 1.15,
          highlight: true,
          color: '#2563EB',
        },
        {
          elementId: 'teacher-role',
          x: 80,
          y: 45,
          scale: 1,
          highlight: true,
          customLabel: 'المعلم (ناقل للمعرفة)',
        },
        {
          elementId: 'learner-role',
          x: 80,
          y: 200,
          scale: 0.95,
          opacity: 0.75,
          customLabel: 'المتعلم (متلقٍ سلبي)',
        },
        { elementId: 'activities-pool', x: 280, y: 120, opacity: 0.15 },
        { elementId: 'holistic-growth', x: 510, y: 115, opacity: 0.1 },
      ],
      spotlightZone: {
        x: 40,
        y: 25,
        width: 210,
        height: 245,
        label: 'بؤرة التركيز: حفظ المقررات والمعارف',
      },
    },
    {
      stepNumber: 2,
      title: 'المرحلة الثانية: التحول نحو الخبرات والأنشطة والمواقف التعليمية',
      explanation:
        'يتسع مفهوم المنهج ليشمل "جميع الخبرات التي يكتسبها المتعلم والأنشطة التي تخططها المدرسة وتشرف عليها سواء داخلها أو خارجها". وهنا تتغير الأدوار جذرياً: يتحول المعلم من ناقل للمعلومات إلى "موجه ومرشد ومراقب لبيئة التعلم"، ويتحول دور الطالب من السلبية إلى الإيجابية والتعلم الذاتي من خلال المشاركة الحية في الأنشطة الرياضية والمواقف التعليمية المتنوعة.',
      pedagogicalTip:
        'الخبرة التعليمية هي تفاعل حي ومتبادل بين الطالب والبيئة المدرسية، وليست مجرد نصوص مكتوبة في مذكرات أو كتب (ص 3، 5).',
      transformations: [
        {
          elementId: 'knowledge-core',
          x: 100,
          y: 60,
          scale: 0.85,
          opacity: 0.7,
          highlight: false,
        },
        {
          elementId: 'activities-pool',
          x: 280,
          y: 115,
          scale: 1.2,
          opacity: 1,
          highlight: true,
          color: '#0D9488',
        },
        {
          elementId: 'teacher-role',
          x: 280,
          y: 35,
          scale: 1.05,
          customLabel: 'المعلم (مرشد وموجه)',
          color: '#0891B2',
          highlight: true,
        },
        {
          elementId: 'learner-role',
          x: 280,
          y: 205,
          scale: 1.05,
          customLabel: 'المتعلم (مشارك نشط وإيجابي)',
          color: '#2563EB',
          highlight: true,
        },
        { elementId: 'holistic-growth', x: 510, y: 115, opacity: 0.35 },
      ],
      spotlightZone: {
        x: 230,
        y: 15,
        width: 255,
        height: 260,
        label: 'بؤرة التركيز: الخبرات والأنشطة والمواقف الحية',
      },
    },
    {
      stepNumber: 3,
      title: 'المرحلة الثالثة: المنظومة الحديثة الشاملة (ارتباط المنهج بالأهداف وتنمية المتعلم)',
      explanation:
        'يصل المفهوم إلى كماله بوصفه "منظومة تربوية متكاملة الأركان": تسعى لتحقيق أقصى قدر من التطوير والتنمية الشاملة والمتكاملة لطاقات المتعلم في مختلف الأبعاد (البدنية، والمهارية، والصحية، والنفسية، والاجتماعية). ويقوم التخطيط على مبدأ "مركزية الأهداف ولا مركزية المحتوى"، بما يتيح تفريد التعليم واستيعاب المناهج التكيفية للطلاب الموهوبين وذوي الإعاقة ومواكبة الثورة التكنولوجية.',
      pedagogicalTip:
        'مهمة المنهج الكبرى في مجتمعنا هي بناء الشخصية المتكاملة للفرد للنهوض بالمجتمع ومواكبة العصر الرقمي والتطوير المستمر (ص 2، 4).',
      transformations: [
        {
          elementId: 'knowledge-core',
          x: 100,
          y: 55,
          scale: 0.75,
          opacity: 0.6,
        },
        {
          elementId: 'activities-pool',
          x: 280,
          y: 55,
          scale: 0.85,
          opacity: 0.75,
          highlight: false,
        },
        {
          elementId: 'holistic-growth',
          x: 520,
          y: 105,
          scale: 1.35,
          opacity: 1,
          highlight: true,
          color: '#10B981',
        },
        {
          elementId: 'learner-role',
          x: 520,
          y: 215,
          scale: 1.1,
          customLabel: 'المتعلم (الشخصية المتكاملة)',
          color: '#1E40AF',
          highlight: true,
        },
        {
          elementId: 'teacher-role',
          x: 320,
          y: 215,
          scale: 1,
          customLabel: 'المعلم (مهندس الموقف التعليمي)',
          color: '#0891B2',
        },
      ],
      spotlightZone: {
        x: 450,
        y: 35,
        width: 250,
        height: 245,
        label: 'الغاية الكبرى: التنمية الشاملة لشخصية المتعلم',
      },
    },
  ],
};

// 5. محرك المخططات المتجهية التفاعلية (InteractiveDiagramView)
const BLOCK_INTERACTIVE_DIAGRAM: InteractiveDiagramBlock = {
  id: 'curric-blk-diag-system',
  type: 'interactive_diagram',
  order: 5,
  title: 'المخطط المفاهيمي لمنظومة المنهج الحديث في التربية الرياضية',
  caption:
    'انقر على أي ركن مفاهيمي لاستعراض تأصيله العلمي في كتاب مناهج التربية الرياضية وتطبيقه الميداني للفرقة الرابعة.',
  viewBoxWidth: 760,
  viewBoxHeight: 370,
  initialSelectedNodeId: 'node-curric-goals',
  nodes: [
    {
      id: 'node-curric-goals',
      label: 'مركزية الأهداف التربوية',
      sublabel: 'Central Educational Goals',
      description:
        'الأهداف هي الأداة الموجهة للمعلم والمتعلم والمرجع الأساسي لتقويم المنهج. وتشتق الأهداف من فلسفة المجتمع وقيمه وحاجات المتعلمين لتوجيه السلوك نحو الغايات المنشودة (ص 2، 4).',
      category: 'الأسس والغايات',
      x: 50,
      y: 40,
      width: 195,
      height: 75,
      details: {
        academicTerm: 'Centrality of Educational Objectives',
        functionRole: 'توجيه العملية التعليمية وتحديد معايير تقويم المنهج',
        keyPoints: [
          'يجب أن يكون الهدف وثيق الصلة بالظروف الاجتماعية والحياة الحاضرة للمتعلم (ص 5).',
          'التخطيط لبرامج التربية الرياضية يفرض مركزية الأهداف مع مراعاة فلسفة المجتمع (ص 4).',
        ],
      },
    },
    {
      id: 'node-curric-experiences',
      label: 'منظومة الخبرات والأنشطة',
      sublabel: 'Curricular Experiences & Activities',
      description:
        'سلسلة من الأنشطة والمواقف التعليمية الموجهة التي يكتسبها الطالب تحت إشراف وتوجيه المدرسة، سواء تمت داخل المدرسة أو خارجها في الملاعب والمجتمع (ص 2، 5).',
      category: 'المحتوى والعمليات',
      x: 285,
      y: 40,
      width: 195,
      height: 75,
      details: {
        academicTerm: 'Educational Experiences Network',
        functionRole: 'توفير التفاعل الحي والممارسة الحركية والاجتماعية',
        keyPoints: [
          'تشمل جميع الأنشطة الرياضية التي تخططها المدرسة أو تشرف عليها داخلها وخارجها (ص 5).',
          'تتحدى إمكانات المتعلمين وتستثير دوافعهم وحماسهم وتلبي ميولهم ورغباتهم (ص 4).',
        ],
      },
    },
    {
      id: 'node-curric-holistic',
      label: 'التنمية الشاملة للشخصية',
      sublabel: 'Holistic Development (4 Dimensions)',
      description:
        'المهمة الكبرى لمناهج التربية الرياضية المدرسية في مجتمعنا: تحقيق النمو المتكامل للطاقات الكامنة في المتعلم في مختلف الجوانب: البدنية، والمهارية، والصحية، والنفسية، والاجتماعية (ص 2).',
      category: 'المخرجات والغاية',
      x: 520,
      y: 145,
      width: 195,
      height: 85,
      details: {
        academicTerm: 'Comprehensive Individual Growth',
        functionRole: 'بناء الشخصية المتوازنة وتحسين نوعية الحياة والصحة النفسية',
        keyPoints: [
          'الجانب البدني والمهاري: النهوض بالمستوى الرياضي والكفاءة الحركية للفرد (ص 2).',
          'الجانب النفسي والاجتماعي: الوصول للصحة النفسية والتوافق الإيجابي مع الآخرين (ص 2).',
        ],
      },
    },
    {
      id: 'node-curric-teacher',
      label: 'المعلم: موجه ومرشد للتعلم',
      sublabel: 'Teacher as Facilitator & Guide',
      description:
        'تعديل دور معلم التربية الرياضية من ناقل للمعرفة إلى موجه ومرشد ومراقب لبيئة التعلم الذاتي، ومصمم للمواقف التعليمية التفاعلية بالوسائط المتعددة (ص 3).',
      category: 'الأدوار التعليمية',
      x: 50,
      y: 245,
      width: 195,
      height: 75,
      details: {
        academicTerm: 'Facilitator & Learning Guide',
        functionRole: 'إدارة وتوجيه بيئة التعلم الذاتي والتفكير الابتكاري',
        keyPoints: [
          'تغيير دور المتعلمين في التربية الرياضية من السلبية إلى الإيجابية التفاعلية (ص 3).',
          'الاستفادة من تكنولوجيا العصر والإنترنت والوسائط المتعددة في التدريس (ص 3، 4).',
        ],
      },
    },
    {
      id: 'node-curric-decentralized',
      label: 'لا مركزية المحتوى الميداني',
      sublabel: 'Decentralized Content & Facilities',
      description:
        'مرونة تنظيم الأنشطة والمحتوى بما يتلاءم مع الإمكانات الفعلية المتوفرة بالمؤسسة التعليمية ويلبي حاجات المتعلمين، مع الالتزام بوحدة الأهداف (ص 4).',
      category: 'التنظيم والتطبيق',
      x: 285,
      y: 245,
      width: 195,
      height: 75,
      details: {
        academicTerm: 'Content Decentralization',
        functionRole: 'مراعاة الواقع الميداني وتنوع البيئات التعليمية',
        keyPoints: [
          'إدخال المناهج التكيفية (الخاصة) للفئات الخاصة من المتعلمين: الموهوبين والمعاقين (ص 4).',
          'التخطيط التعاوني بمشاركة الأكاديميين والموجهين والمعلمين والطلاب (ص 4).',
        ],
      },
    },
  ],
  connections: [
    {
      id: 'c-goals-exp',
      from: 'node-curric-goals',
      to: 'node-curric-experiences',
      label: 'توجه وتشرف',
      style: 'solid',
      arrow: true,
    },
    {
      id: 'c-exp-holistic',
      from: 'node-curric-experiences',
      to: 'node-curric-holistic',
      label: 'تثمر التنمية',
      style: 'solid',
      arrow: true,
    },
    {
      id: 'c-teacher-exp',
      from: 'node-curric-teacher',
      to: 'node-curric-experiences',
      label: 'يدير ويوجه',
      style: 'solid',
      arrow: true,
    },
    {
      id: 'c-decent-exp',
      from: 'node-curric-decentralized',
      to: 'node-curric-experiences',
      label: 'يكيف المحتوى',
      style: 'solid',
      arrow: true,
    },
    {
      id: 'c-holistic-goals',
      from: 'node-curric-holistic',
      to: 'node-curric-goals',
      label: 'تقويم مستمر',
      style: 'dashed',
      arrow: true,
    },
  ],
  annotations: [
    {
      id: 'ann-curric-ch1',
      text: 'منظومة المنهج الحديث — ص 2-5',
      x: 290,
      y: 175,
    },
  ],
};

// 6. مكون المقارنة البصرية التفاعلية (VisualComparisonView)
const BLOCK_VISUAL_COMPARISON: VisualComparisonBlock = {
  id: 'curric-blk-comp-trad-vs-mod',
  type: 'visual_comparison',
  order: 6,
  title: 'مقارنة بصرية تحليلية: المفهوم التقليدي في مقابل المفهوم الحديث للمنهج',
  description:
    'مقارنة علمية دقيقة مستخلصة من نصوص الصفحات 2 إلى 5 توضح التحول الجوهري في فلسفة وأهداف وتطبيقات مناهج التربية الرياضية.',
  defaultItemAId: 'concept-traditional',
  defaultItemBId: 'concept-modern',
  criteria: [
    { key: 'focus_core', label: 'مفهوم المنهج وبؤرة الاهتمام', category: 'الفلسفة' },
    { key: 'teacher_role', label: 'دور معلم التربية الرياضية', category: 'التدريس' },
    { key: 'learner_role', label: 'دور الطالب / المتعلم', category: 'التعلم' },
    { key: 'activity_scope', label: 'نطاق ومجال الأنشطة والخبرات', category: 'التطبيق' },
    { key: 'final_goal', label: 'الغاية والهدف التربوي الأسمى', category: 'المخرجات' },
    { key: 'planning_style', label: 'طبيعة التخطيط وتطوير المنهج', category: 'الإدارة' },
  ],
  items: [
    {
      id: 'concept-traditional',
      name: 'التصور التقليدي (المنهج كمقررات ومواد)',
      badge: 'نظرة معرفية ضيقة',
      summary:
        'يرى المنهج مجموعة من المواد والمقررات الدراسية والمفاهيم والنظريات المحددة لفرقة معينة، ويضع المعرفة وحفظها في بؤرة الاهتمام بوصفها غاية في ذاتها (ص 5، 6).',
      characteristics: {
        focus_core: 'المعرفة والمواد الدراسية في بؤرة الاهتمام بوصفها حصيلة التراث الثقافي الثابت (ص 5)',
        teacher_role: 'ناقل وملقن للمعلومات، ومصدر وحيد للسلطة التعليمية وإصدار الأوامر (ص 3)',
        learner_role: 'متلقٍ سلبي، مطلوب منه حفظ واسترجاع المحتوى النظري دون فاعلية أو إبداع (ص 3)',
        activity_scope: 'محدود داخل حدود المدرسة والفصل، وإهمال للأنشطة والخبرات الحركية خارج المدرسة (ص 2)',
        final_goal: 'تزويد ذهن المتعلم بالمعلومات واجتياز الاختبارات النظرية والامتحانات (ص 5)',
        planning_style: 'مركزية صارمة تفرض مقررات موحدة دون مراعاة لتباين الإمكانات أو حاجات الطلاب (ص 4)',
      },
    },
    {
      id: 'concept-modern',
      name: 'التصور الحديث (منظومة الخبرات المتكاملة)',
      badge: 'نظرة تربوية شاملة',
      summary:
        'منظومة متكاملة من الأنشطة والخبرات الموجهة التي تخططها المدرسة وتشرف عليها داخلها وخارجها لتحقيق أقصى تنمية شاملة ومتكاملة لشخصية المتعلم (ص 2، 5).',
      characteristics: {
        focus_core: 'المتعلم ونموه الشامل في بؤرة الاهتمام من خلال سلسلة خبرات وأنشطة موجهة (ص 2، 5)',
        teacher_role: 'موجه ومرشد ومراقب لبيئة التعلم الذاتي ومحفز للتفكير والابتكار (ص 3)',
        learner_role: 'مشارك إيجابي نشط، يمارس التعلم الذاتي ويبدع في حل المشكلات الحركية (ص 3)',
        activity_scope: 'شامل ومرن؛ يضم الفعاليات الرياضية التي تقع داخل المدرسة وخارجها في المجتمع (ص 2، 5)',
        final_goal: 'التنمية الشاملة المتكاملة (بدنياً، ومهارياً، ونفسياً، واجتماعياً) وتحسين نوعية الحياة (ص 2)',
        planning_style: 'مركزية الأهداف التربوية العامة مع لا مركزية ومرونة المحتوى وفق الإمكانات الميدانية (ص 4)',
      },
    },
  ],
  sharedSimilarities: [
    'كلا المفهومين يعتبران المنهج الأداة الأساسية للمنظومة التعليمية لتحقيق الأهداف التربوية (ص 2، 5).',
    'كلاهما يتضمنان قدراً من المعرفة والمفاهيم العلمية الضرورية لبناء الأساس المعرفي للمتعلم (ص 6).',
    'كلاهما يمثلان فكراً تربوياً يهدف إلى خدمة المجتمع وتخريج أجيال قادرة على ممارسة الحياة (ص 2).',
  ],
  contrastingDifferencesSummary:
    'نقلت النظرة الحديثة بؤرة الاهتمام من مجرد حفظ المقررات والمعلومات بصورة سلبية إلى تفعيل الخبرات والأنشطة والمواقف الحركية والاجتماعية التي تبني شخصية رياضية متكاملة بدنياً ومهارياً ونفسياً واجتماعياً.',
};

// 7. نشاط ترتيب الخطوات البصري التطبيقي (VisualSequenceView)
const BLOCK_VISUAL_SEQUENCE: VisualSequenceBlock = {
  id: 'curric-blk-seq-planning-steps',
  type: 'visual_sequence',
  order: 7,
  title: 'نشاط تطبيقي: ترتيب خطوات تخطيط وتطوير المنهج المدرسي الحديث',
  instructions:
    'رتب المراحل الأربعة التالية لتخطيط وتطوير منهج التربية الرياضية الحديث بالتسلسل العلمي المنطقي الوارد في الكتاب (ص 2، 4):',
  correctOrder: [
    'step-curric-needs',
    'step-curric-goals',
    'step-curric-experiences',
    'step-curric-evaluation',
  ],
  items: [
    {
      id: 'step-curric-experiences',
      text: 'اختيار وتنظيم الخبرات والأنشطة الرياضية وتكييف المحتوى حسب إمكانات المؤسسة',
      categoryBadge: 'المرحلة 3',
    },
    {
      id: 'step-curric-needs',
      text: 'دراسة فلسفة المجتمع وحاجات وميول واستعدادات المتعلمين وقدراتهم الفردية',
      categoryBadge: 'المرحلة 1',
    },
    {
      id: 'step-curric-evaluation',
      text: 'التقويم المستمر وتجريب المقررات الميدانية لإتاحة فرص التحسين الدائم',
      categoryBadge: 'المرحلة 4',
    },
    {
      id: 'step-curric-goals',
      text: 'صياغة الأهداف التربوية المركزية بدقة لتوجيه سلوك المتعلمين ومواكبة متطلبات العصر',
      categoryBadge: 'المرحلة 2',
    },
  ],
  explanation:
    'التخطيط العلمي للمنهج الحديث (ص 2، 4) يبدأ بدراسة فلسفة المجتمع وحاجات وقدرات المتعلمين (1)، ثم تحديد الأهداف التربوية المركزية بدقة (2)، يليها اختيار وتنظيم الخبرات والأنشطة الرياضية بما يتلاءم مع الإمكانات (3)، وأخيراً التقويم المستمر والتجريب الميداني لتطوير المنهج في عملية دائمة لا نهاية لها (4).',
};

// 8. كتلة النقاط الجوهرية والكبسولة الأكاديمية
const BLOCK_KEY_POINTS: KeyPointBlock = {
  id: 'curric-blk-kp-summary',
  type: 'key_point',
  order: 8,
  title: 'أبرز الأسس المستفادة من الفصل الأول (كتاب مناهج التربية الرياضية ص 2 - 5)',
  points: [
    'المنهج ليس مجرد مقرر دراسي جامد، بل هو سلسلة موجهة من الخبرات والأنشطة التربوية الهادفة (ص 2، 5).',
    'المهمة الكبرى لمناهج التربية الرياضية في مصر هي تنمية الشخصية المتكاملة في الأبعاد: البدنية، والمهارية، والصحية، والنفسية، والاجتماعية (ص 2).',
    'التخطيط الناجح للمناهج يقوم على مبدأ "مركزية الأهداف ولا مركزية المحتوى" لمراعاة إمكانات المدارس (ص 4).',
    'المعلم في التربية الرياضية الحديثة موجه ومرشد للتعلم الذاتي وليس ناقلاً للمعلومة فقط، مع تحويل دور الطالب من السلبية إلى الإيجابية (ص 3).',
    'تطوير المناهج عملية مستمرة وليس لها نهاية، وتتطلب تجريب المقررات والاستفادة من منجزات العصر التكنولوجية (ص 2، 3).',
    'ضرورة إدخال المناهج التكيفية (الخاصة) لتوجيه خبرات تعليمية تلائم الفئات الخاصة كالموهوبين وذوي الإعاقة (ص 4).',
  ],
  importance: 'essential',
};

// 9. كتلة التوثيق الأكاديمي والاستشهاد
const BLOCK_ACADEMIC_REFERENCE: AcademicReferenceBlock = {
  id: 'curric-blk-ref-ch1',
  type: 'academic_reference',
  order: 9,
  referenceId: CURRICULUM_ACADEMIC_REFERENCE.id,
  reference: CURRICULUM_ACADEMIC_REFERENCE,
  citationText:
    'تم بناء وتأصيل هذا الدرس التفاعلي بالكامل استناداً إلى نصوص وتحليلات كتاب مناهج التربية الرياضية، إعداد أ.د. هاني الدسوقي إبراهيم، أستاذ المناهج وطرق تدريس التربية الرياضية، الفصل الأول: مقدمة وماهية المنهج، الصفحات 2 - 5، طبعة 2025/2026م، الفرقة الرابعة — قسم تدريس.',
};

/**
 * الدرس الأكاديمي الحقيقي المكتمل
 */
export const CURRICULUM_PILOT_LESSON: Lesson = {
  id: 'les-curriculum-evolution',
  topicId: 'top-curriculum-concept-evolution',
  title: 'تطور مفهوم المنهج: من النظرة التقليدية إلى النظرة الحديثة',
  description:
    'درس تفاعلي تطبيقي يستعرض الفوارق الجوهرية بين النظرة للمنهج كمقررات ومعارف، والنظرة إليه كمنظومة خبرات وأنشطة موجهة لتنمية شخصية المتعلم.',
  order: 1,
  learningObjectives: [
    'المقارنة بين المفهوم التقليدي للمنهج (كمقررات ومعارف) والمفهوم الحديث (كمنظومة خبرات وأنشطة).',
    'تتبع التطور التربوي لدور المعلم من ملقن وناقل إلى موجه ومرشد للتعلم الذاتي.',
    'تحليل دور مناهج التربية الرياضية في تحقيق التنمية الشاملة (بدنياً، ومهارياً، ونفسياً، واجتماعياً).',
    'فهم وتطبيق مبدأ مركزية الأهداف ولا مركزية المحتوى في تخطيط المناهج المدرسية.',
    'إدراك أهمية المناهج التكيفية والوسائط التكنولوجية الحديثة في تطوير التربية الرياضية.',
  ],
  estimatedDuration: 20,
  blocks: [
    BLOCK_HEADING,
    BLOCK_PARAGRAPH_INTRO,
    BLOCK_DEFINITION,
    BLOCK_ANIMATED_EXPLANATION,
    BLOCK_INTERACTIVE_DIAGRAM,
    BLOCK_VISUAL_COMPARISON,
    BLOCK_VISUAL_SEQUENCE,
    BLOCK_KEY_POINTS,
    BLOCK_ACADEMIC_REFERENCE,
  ],
  references: [CURRICULUM_ACADEMIC_REFERENCE],
  status: 'published',
};

/**
 * الموضوع الدراسي الخاص بالتجربة
 */
export const CURRICULUM_PILOT_TOPIC: Topic = {
  id: 'top-curriculum-concept-evolution',
  chapterId: 'chap-curriculum-intro',
  title: 'مفهوم المنهج وتطوره التربوي في التربية الرياضية',
  description:
    'دراسة تأصيلية لماهية المنهج وتطور مفاهيمه وأسسه ودور المعلم والمتعلم في الموقف التعليمي الحديث.',
  order: 1,
  lessons: [CURRICULUM_PILOT_LESSON],
  status: 'published',
};

/**
 * الفصل الأكاديمي الأول (معاينة أكاديمية تجريبية حقيقية)
 */
export const CURRICULUM_PILOT_CHAPTER: Chapter = {
  id: 'chap-curriculum-intro',
  courseId: 'course-1',
  title: 'الفصل الأول: مقدمة وماهية المنهج (معاينة أكاديمية تجريبية)',
  description:
    'يتناول هذا الفصل ماهية المنهج في اللغة والاصطلاح، وتطور مفهوم المنهج من النظرة التقليدية إلى النظرة الحديثة، وأسس ومكونات بناء المنهج المدرسي.',
  order: 1,
  topics: [CURRICULUM_PILOT_TOPIC],
  status: 'published',
};

