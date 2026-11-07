/**
 * chapter1ApprovedBank.ts
 * بنك الأسئلة المعتمد رسمياً للفصل 1 (50 سؤالاً)
 * مقرر مناهج التربية الرياضية — الفرقة الرابعة | أ.د. هاني الدسوقي إبراهيم
 */

import type { GovernedQuestionBank } from '../../../../types/quizGovernance.ts';

export const CHAPTER_1_APPROVED_BANK: GovernedQuestionBank = {
  "bankId": "bank-ch1-intro-approved-50q",
  "version": "1.0.0",
  "contentHash": "fd8a4a801ae5a8a7f7b00d8da0eb1d5f8f67ac8afb5a1942606ffa844ac1ddbe",
  "title": "بنك أسئلة اختبار الفصل الأول: مقدمة وماهية المنهج",
  "description": "مسودة بنك أسئلة غير معتمدة تتضمن 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) تغطي موضوعات الفصل الأول التسعة بالتفصيل.",
  "instructions": "أجب عن جميع الأسئلة الـ 50. هذه المسودة مخصصة للمراجعة والتحكيم الأكاديمي الداخلي فقط وليست منشورة للطلاب.",
  "courseId": "course-1",
  "chapterId": "chap-curriculum-intro",
  "targetType": "chapter",
  "approvalStatus": "approved",
  "reviewMetadata": {
    "reviewerName": "أ.د. هاني الدسوقي إبراهيم",
    "approvalDate": "2026-11-07",
    "academicSource": "كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم",
    "reviewNotes": "تم التحكيم الأكاديمي والاعتماد للنشر والدمج في الاختبار الشامل للفصل."
  },
  "passingScorePercentage": 60,
  "questions": [
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-comprehensive-dev",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q01",
        "type": "multiple_choice",
        "order": 1,
        "prompt": "تعتبر التربية الرياضية بأنشطتها المختلفة، كما ورد في مقدمة الفصل:",
        "options": [
          {
            "id": "opt-a",
            "text": "نشاطًا ترويحيًا مكملًا للمواد الدراسية"
          },
          {
            "id": "opt-b",
            "text": "أحد المناهج الدراسية التي تمثل جانبًا هامًا في العملية التربوية بالمدرسة"
          },
          {
            "id": "opt-c",
            "text": "مجالًا مستقلًا عن المناهج الدراسية يختص بالموهوبين رياضيًا"
          },
          {
            "id": "opt-d",
            "text": "نشاطًا يقتصر على إعداد المتعلمين للمنافسات الرياضية"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "تنص المقدمة على أن التربية الرياضية بأنشطتها المختلفة أحد المناهج الدراسية التي تمثل جانبًا هامًا في العملية التربوية بالمدرسة.",
        "sourceReference": "مقدمة الفصل، ص2"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-comprehensive-dev",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q02",
        "type": "multiple_choice",
        "order": 2,
        "prompt": "المهمة الكبرى لمناهج التربية الرياضية المدرسية في مجتمعنا المصري، كما وردت في الكتاب، هي:",
        "options": [
          {
            "id": "opt-a",
            "text": "إعداد أبطال لتحقيق مراكز متقدمة في المنافسات العالمية"
          },
          {
            "id": "opt-b",
            "text": "رفع المستوى المهاري للمتعلمين في الأنشطة الرياضية المختلفة"
          },
          {
            "id": "opt-c",
            "text": "توفير الإمكانات والتجهيزات اللازمة لممارسة الأنشطة الرياضية"
          },
          {
            "id": "opt-d",
            "text": "تنمية الشخصية المتكاملة من خلال النهوض بالمستوى الرياضي للفرد"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يربط الكتاب مهمتها الكبرى بتنمية الشخصية المتكاملة عبر النهوض بالمستوى الرياضي للفرد في الجوانب البدنية والصحية والمهارية والاجتماعية.",
        "sourceReference": "مقدمة الفصل، ص2"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-comprehensive-dev",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch1-draft-q03",
        "type": "multiple_choice",
        "order": 3,
        "prompt": "أعلنت لجنة تطوير أحد مناهج التربية الرياضية أن عملها اكتمل وأن المنهج لا يحتاج إلى مراجعة بعد ذلك. أي موقف يتفق مع مقدمة الفصل؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تطوير المناهج عملية مستمرة ليست لها نهاية، مع إتاحة فرص مستمرة للتقويم والتحسين"
          },
          {
            "id": "opt-b",
            "text": "الاكتفاء بتجريب المقرر مرة واحدة ثم تثبيته دون تعديل"
          },
          {
            "id": "opt-c",
            "text": "اعتماد المنهج نهائيًا متى وافق عليه الخبراء المتخصصون"
          },
          {
            "id": "opt-d",
            "text": "قصر التقويم على نهاية المرحلة التعليمية التي طُبق فيها المنهج"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يذكر الكتاب أن تطوير المناهج عملية مستمرة وليس لها نهاية، وأنه يجب تجريب المقررات مع إتاحة الفرص المستمرة للتقويم والتحسين.",
        "sourceReference": "مقدمة الفصل، ص2"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-change-self-learning",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q04",
        "type": "multiple_choice",
        "order": 4,
        "prompt": "يصف الكتاب العصر الذي نعيشه بأنه عصر «الموجة الثالثة»، ومن سماته أنه:",
        "options": [
          {
            "id": "opt-a",
            "text": "يعتمد على ثبات المفاهيم التعليمية واستقرارها عبر الأجيال"
          },
          {
            "id": "opt-b",
            "text": "تنحصر تطوراته في المواد العلمية دون التربية الرياضية"
          },
          {
            "id": "opt-c",
            "text": "يقوم بتسريع الزمن وتجاوز المسافات والحدود بصورة غير مسبوقة"
          },
          {
            "id": "opt-d",
            "text": "يقتصر أثره على الدول الصناعية دون غيرها"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "يذكر الكتاب أن الموجة الثالثة تسرّع الزمن وتتجاوز المسافات والحدود بصورة غير مسبوقة، وأن التطورات شملت جميع المواد الدراسية ومنها التربية الرياضية.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-change-self-learning",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q05",
        "type": "multiple_choice",
        "order": 5,
        "prompt": "يشهد النظام التعليمي، كما يذكر الكتاب، حركة تغيير لبعض الثوابت القديمة، منها الانتقال من التعليم المعتمد اعتمادًا كاملًا على المعلم والمفروض على المتعلم إلى:",
        "options": [
          {
            "id": "opt-a",
            "text": "التعلم الذاتي"
          },
          {
            "id": "opt-b",
            "text": "التعلم التعاوني بين أفراد المجموعات"
          },
          {
            "id": "opt-c",
            "text": "التعليم المبرمج الذي تشرف عليه الإدارة المدرسية"
          },
          {
            "id": "opt-d",
            "text": "التعلم بالاكتشاف الموجه من المعلم"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "النص: الانتقال من التعليم المعتمد كليًا على المعلم والمفروض على المتعلم إلى التعلم الذاتي باستخدام أحدث منجزات العصر التكنولوجية.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-change-self-learning",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch1-draft-q06",
        "type": "multiple_choice",
        "order": 6,
        "prompt": "عند تحديد موقعنا الرياضي على الخريطة العالمية، ينبغي وفق الكتاب أن يكون النظر:",
        "options": [
          {
            "id": "opt-a",
            "text": "من الدائرة العالمية ثم النزول إلى الدائرة المحلية"
          },
          {
            "id": "opt-b",
            "text": "من الدائرة الصغيرة محليًا (المدرسة) إلى الدائرة الأكبر (العالمية)"
          },
          {
            "id": "opt-c",
            "text": "من مستوى الأندية والاتحادات الرياضية ثم المستوى الدولي"
          },
          {
            "id": "opt-d",
            "text": "من الدائرة الإقليمية ثم الاقتصار عليها في المنافسات"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "يقول الكتاب إن علينا أن ننظر إلى موقعنا الرياضي بدءًا من الدائرة الصغيرة محليًا (المدرسة) إلى الدائرة الأكبر (العالمية) في جميع الأنشطة الرياضية.",
        "sourceReference": "مقدمة الفصل، ص2–3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-modern-role-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q07",
        "type": "multiple_choice",
        "order": 7,
        "prompt": "يرى الكتاب أن معلم القرن القادم ليس ناقلًا للمعرفة فقط، وإنما هو:",
        "options": [
          {
            "id": "opt-a",
            "text": "مصدر المعرفة الوحيد الذي يحدد للمتعلم محتواه وخطواته"
          },
          {
            "id": "opt-b",
            "text": "منفذ للمحتوى الذي تحدده الجهات المركزية دون أي تدخل"
          },
          {
            "id": "opt-c",
            "text": "مقوّم لنواتج التعلم في نهاية كل مرحلة دراسية"
          },
          {
            "id": "opt-d",
            "text": "موجه ومرشد ومراقب للعملية التعليمية التي تتم تحت إشرافه"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "النص: معلم ليس بناقل للمعرفة فقط ولكنه موجه ومرشد ومراقب للعملية التعليمية التي تتم تحت إشرافه.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-modern-role-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q08",
        "type": "multiple_choice",
        "order": 8,
        "prompt": "يربط الكتاب بين تغيير دور المتعلم في التربية الرياضية من السلبية إلى الإيجابية وبين:",
        "options": [
          {
            "id": "opt-a",
            "text": "تقليل الحاجة إلى المعلم داخل الدرس"
          },
          {
            "id": "opt-b",
            "text": "تنمية الصفات البدنية للمتعلمين دون غيرها"
          },
          {
            "id": "opt-c",
            "text": "إثراء عقول المتعلمين وإكسابهم الصحة البدنية والنفسية والعقلية، مما يساعد على خلق جيل من الموهوبين رياضيًا"
          },
          {
            "id": "opt-d",
            "text": "زيادة عدد الحصص المخصصة للتربية الرياضية بالمدرسة"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "يذكر الكتاب أن التغيير يتم من أجل إثراء عقول المتعلمين وإكسابهم الصحة البدنية والنفسية والعقلية، مما يساعد على خلق جيل من الموهوبين رياضيًا.",
        "sourceReference": "مقدمة الفصل، ص3–4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-modern-role-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch1-draft-q09",
        "type": "multiple_choice",
        "order": 9,
        "prompt": "يترتب على الاستفادة من ثورة المعلومات في مناهج التربية الرياضية، وفق الكتاب، ضرورة:",
        "options": [
          {
            "id": "opt-a",
            "text": "الإبقاء على مفاهيم إعداد المعلم بكليات التربية الرياضية لثبات دوره"
          },
          {
            "id": "opt-b",
            "text": "تغيير مفاهيم تكوين المعلم بكليات التربية الرياضية في ضوء المفهوم الحديث لأهداف التعليم ودور المعلم"
          },
          {
            "id": "opt-c",
            "text": "قصر إعداد معلم التربية الرياضية على الجوانب التكنولوجية"
          },
          {
            "id": "opt-d",
            "text": "نقل مسؤولية إعداد المعلم إلى مراكز البحوث التربوية"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "النص: ضرورة تغيير مفاهيم تكوين المعلم بكليات التربية الرياضية في ضوء المفهوم الحديث لأهداف التعليم ودور المعلم في تحقيقها.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-planning-adaptive",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q10",
        "type": "multiple_choice",
        "order": 10,
        "prompt": "وفق الكتاب، ينبغي أن يكون التخطيط لبرامج التربية الرياضية المدرسية:",
        "options": [
          {
            "id": "opt-a",
            "text": "تعاونيًا، يشترك فيه الخبراء الأكاديميون بكليات التربية الرياضية ومراكز البحوث التربوية والموجهون والمعلمون والمتعلمون"
          },
          {
            "id": "opt-b",
            "text": "فرديًا، يتولاه الموجه الأول لكل مادة دراسية"
          },
          {
            "id": "opt-c",
            "text": "مركزيًا، تتولاه الوزارة وحدها ثم تعممه على المدارس"
          },
          {
            "id": "opt-d",
            "text": "أكاديميًا خالصًا، يقتصر على الخبراء بكليات التربية الرياضية"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يشترط الكتاب أن يكون التخطيط تعاونيًا بمشاركة الخبراء الأكاديميين ومراكز البحوث التربوية والموجهين والمعلمين والمتعلمين.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-planning-adaptive",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q11",
        "type": "multiple_choice",
        "order": 11,
        "prompt": "يجب أن يكون تخطيط المناهج، وفق الكتاب:",
        "options": [
          {
            "id": "opt-a",
            "text": "لا مركزية الأهداف ومركزية المحتوى"
          },
          {
            "id": "opt-b",
            "text": "مركزية الأهداف ومركزية المحتوى معًا"
          },
          {
            "id": "opt-c",
            "text": "مركزية الأهداف ولا مركزية المحتوى"
          },
          {
            "id": "opt-d",
            "text": "لا مركزية الأهداف ولا مركزية المحتوى"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "النص: يجب أن يكون تخطيط المناهج مركزية الأهداف ولا مركزية المحتوى، بما يتمشى مع الإمكانيات الموجودة بالمؤسسات التعليمية.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-planning-adaptive",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q12",
        "type": "multiple_choice",
        "order": 12,
        "prompt": "يشير مفهوم المناهج التكيفية (الخاصة) داخل مناهج التربية الرياضية، كما ورد في الكتاب، إلى:",
        "options": [
          {
            "id": "opt-a",
            "text": "خبرات تُعدَّل لتناسب الإمكانات المتاحة في كل مدرسة"
          },
          {
            "id": "opt-b",
            "text": "الخبرات نفسها المقدمة لجميع المتعلمين مع تعديل زمن التنفيذ"
          },
          {
            "id": "opt-c",
            "text": "برامج إضافية تقدم للمتعلمين المتأخرين دراسيًا بعد اليوم الدراسي"
          },
          {
            "id": "opt-d",
            "text": "خبرات تعليمية موجهة إلى الفئات الخاصة من المتعلمين (الموهوبين والمعاقين) وتختلف عن خبرات من هم في مثل سنهم"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يحدد الكتاب المفهوم بأنه الخبرات الموجهة للفئات الخاصة (الموهوبين والمعاقين) والتي تختلف عن الخبرات المقدمة لأقرانهم في السن.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch1-draft-q13",
        "type": "multiple_choice",
        "order": 13,
        "prompt": "برنامج حاسوبي يعرض محتوى منهج التربية الرياضية ويقوم بدور المعلم. أي منظور من منظورات تأثير الحاسب في المنهج، وفق الكتاب، يمثله هذا البرنامج؟",
        "options": [
          {
            "id": "opt-a",
            "text": "الحاسب كمدير للمنهج"
          },
          {
            "id": "opt-b",
            "text": "الحاسب كمقدم للمنهج (معلم)"
          },
          {
            "id": "opt-c",
            "text": "الحاسب كأداة متكاملة داخل المنهج"
          },
          {
            "id": "opt-d",
            "text": "الحاسب كمنهج للمادة"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "المنظورات الأربعة في الكتاب: مدير للمنهج، ومقدم للمنهج (معلم)، وأداة متكاملة داخل المنهج، ومنهج للمادة. والبرنامج الذي يقدم المحتوى ويقوم بدور المعلم هو «مقدم للمنهج (معلم)».",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q14",
        "type": "multiple_choice",
        "order": 14,
        "prompt": "تسهم شبكة المعلومات (الإنترنت) في بعض المدارس، وفق الكتاب، في:",
        "options": [
          {
            "id": "opt-a",
            "text": "تقديم برامج تعليمية وتدريبية لتنمية الصفات البدنية والمهارية"
          },
          {
            "id": "opt-b",
            "text": "ترسيخ المفاهيم البيئية الرياضية لدى المتعلمين"
          },
          {
            "id": "opt-c",
            "text": "تحليل الحركات الرياضية وتقويم أداء المتعلمين"
          },
          {
            "id": "opt-d",
            "text": "تشجيع المعلم والمتعلم على تعقب مصادر العلم والمعرفة في مجال التربية الرياضية، مما ينمي التعلم الذاتي واكتشاف المعلومات"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يذكر الكتاب أن الإنترنت يشجع المعلم والمتعلم على تعقب مصادر العلم والمعرفة، مما يؤدي إلى القدرة على تنمية التعلم الذاتي واكتشاف المعلومات.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch1-draft-q15",
        "type": "multiple_choice",
        "order": 15,
        "prompt": "وفق الكتاب، يمكن لشبكة الألياف الضوئية بوزارة التربية والتعليم أن تساهم في:",
        "options": [
          {
            "id": "opt-a",
            "text": "تطوير برامج تدريب معلمي وموجهي التربية الرياضية بربطها بالتطبيق العملي وتبادل الخبرات والمعلومات على الهواء مباشرة"
          },
          {
            "id": "opt-b",
            "text": "تقديم موسوعة عن الأنشطة الرياضية وقوانينها داخل كل مدرسة"
          },
          {
            "id": "opt-c",
            "text": "تحليل الحركات الرياضية وتقويم مستوى المتعلمين"
          },
          {
            "id": "opt-d",
            "text": "تعليم المهارات الرياضية للمتعلمين من خلال الفيديو التفاعلي"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "الشبكة تساهم في تطوير برامج تدريب معلمي وموجهي التربية الرياضية بربطها بالتطبيق العملي وتبادل الخبرات والمعلومات على الهواء مباشرة، فينهض ذلك بمستوى القائمين على العملية التعليمية.",
        "sourceReference": "مقدمة الفصل، ص4–5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q16",
        "type": "multiple_choice",
        "order": 16,
        "prompt": "لكي تواكب مادة التربية الرياضية المواد الدراسية الأخرى في استخدام الأساليب الحديثة في التعلم، يمكن وفق الكتاب الاستفادة أثناء تعليم المهارات الرياضية من:",
        "options": [
          {
            "id": "opt-a",
            "text": "الاقتصار على النماذج العملية التي يؤديها المعلم"
          },
          {
            "id": "opt-b",
            "text": "الوسائل التعليمية الثابتة كالصور واللوحات"
          },
          {
            "id": "opt-c",
            "text": "الوسائط المتعددة من خلال الكمبيوتر والفيديو التفاعلي"
          },
          {
            "id": "opt-d",
            "text": "البث الإذاعي المدرسي لتعليمات الأداء"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "يذكر الكتاب الاستفادة من الوسائط المتعددة عبر الكمبيوتر والفيديو التفاعلي أثناء تعليم المهارات الرياضية لمواكبة المواد الدراسية الأخرى.",
        "sourceReference": "مقدمة الفصل، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q17",
        "type": "multiple_choice",
        "order": 17,
        "prompt": "يمكن استخدام الحاسب في مناهج التربية الرياضية لتقديم موسوعة ومعلومات عن الأنشطة الرياضية المختلفة وقوانينها، ويهدف ذلك وفق الكتاب إلى:",
        "options": [
          {
            "id": "opt-a",
            "text": "تنمية الصفات البدنية والمهارية"
          },
          {
            "id": "opt-b",
            "text": "إكساب المتعلمين القوام الجيد"
          },
          {
            "id": "opt-c",
            "text": "ترسيخ المفاهيم البيئية الرياضية"
          },
          {
            "id": "opt-d",
            "text": "تنمية الثقافة الرياضية"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "النص: تقديم موسوعة ومعلومات عن الأنشطة الرياضية وقوانينها لتنمية الثقافة الرياضية، أما بقية الخيارات فهي أوجه استخدام أخرى مستقلة.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-nature",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch1-draft-q18",
        "type": "multiple_choice",
        "order": 18,
        "prompt": "كلمة Curriculum التي يقابلها «المنهج» ذات أصل لاتيني، وهي تعني:",
        "options": [
          {
            "id": "opt-a",
            "text": "سلسلة أفعال"
          },
          {
            "id": "opt-b",
            "text": "خطة مكتوبة للدرس"
          },
          {
            "id": "opt-c",
            "text": "مجموعة من القواعد المنظمة للتعلم"
          },
          {
            "id": "opt-d",
            "text": "مجموعة المواد الدراسية"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يذكر الكتاب أن الكلمة ذات أصل لاتيني تعني سلسلة أفعال.",
        "sourceReference": "أولًا: ماهية المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-nature",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q19",
        "type": "multiple_choice",
        "order": 19,
        "prompt": "يشير الكتاب إلى أن الهدف في المنهج:",
        "options": [
          {
            "id": "opt-a",
            "text": "نتيجة تظهر بعد التقويم ولا تؤثر في العمل التربوي"
          },
          {
            "id": "opt-b",
            "text": "مرجع التقويم فيه والحافز لإيجاد العمل التربوي والأداة الموجهة للمعلم والمتعلم"
          },
          {
            "id": "opt-c",
            "text": "بيان بالموضوعات التي سيدرسها المتعلم في كل فرقة دراسية"
          },
          {
            "id": "opt-d",
            "text": "أحد عناصر التقويم يأتي بعد الانتهاء من تنفيذ المنهج"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "النص: الهدف في المنهج يعتبر مرجع التقويم فيه والحافز لإيجاد العمل التربوي والأداة الموجهة للمعلم والمتعلم.",
        "sourceReference": "أولًا: ماهية المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-nature",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q20",
        "type": "multiple_choice",
        "order": 20,
        "prompt": "ولكي يكون الهدف التربوي علميًا يمكن تحقيقه، يشترط الكتاب أن يكون:",
        "options": [
          {
            "id": "opt-a",
            "text": "مصوغًا بعبارات عامة تتسع لجميع التفسيرات"
          },
          {
            "id": "opt-b",
            "text": "قاصرًا على المعارف التي يتضمنها المقرر الدراسي"
          },
          {
            "id": "opt-c",
            "text": "وثيق الصلة بالظروف الاجتماعية والحياة الحاضرة للمتعلم"
          },
          {
            "id": "opt-d",
            "text": "مستمدًا من تجارب الدول المتقدمة دون ارتباط بالواقع المحلي"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "النص: لا بد أن يكون الهدف وثيق الصلة بالظروف الاجتماعية والحياة الحاضرة للمتعلم، لأن حياة المجتمع تشتمل على قوانين وعناصر ثقافية ونظم.",
        "sourceReference": "أولًا: ماهية المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-trad-vs-mod",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q21",
        "type": "multiple_choice",
        "order": 21,
        "prompt": "النظرة إلى المنهج كمجموعة من المواد الدراسية تضع في بؤرة الاهتمام:",
        "options": [
          {
            "id": "opt-a",
            "text": "المعرفة، باعتبارها حصيلة التراث الثقافي والاجتماعي للإنسان"
          },
          {
            "id": "opt-b",
            "text": "المتعلم وميوله وحاجاته"
          },
          {
            "id": "opt-c",
            "text": "أساليب التدريس وطرق التقويم"
          },
          {
            "id": "opt-d",
            "text": "المشكلات الحياتية التي يواجهها المتعلم"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "النص: هذه النظرة تضع المعرفة في بؤرة الاهتمام، وترى أن المعرفة تمثل حصيلة التراث الثقافي والاجتماعي للإنسان.",
        "sourceReference": "تعريفات المناهج قديمًا وحديثًا، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-trad-vs-mod",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q22",
        "type": "multiple_choice",
        "order": 22,
        "prompt": "وفق أحد التعريفات الواردة تحت هذا العنوان، يشمل المنهج إلى جانب محتوى المقرر الدراسي:",
        "options": [
          {
            "id": "opt-a",
            "text": "نظام الامتحانات وأساليب التقويم النهائي"
          },
          {
            "id": "opt-b",
            "text": "أسلوب تنظيم هذا المحتوى وأساليب تفاعل التلاميذ معه"
          },
          {
            "id": "opt-c",
            "text": "الإمكانات المادية والبشرية بالمدرسة"
          },
          {
            "id": "opt-d",
            "text": "فلسفة المجتمع والقيم السائدة فيه"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "التعريف: محتوى أحد المقررات أو ما يضمنه مقرر دراسي، وأسلوب تنظيم هذا المحتوى، وأساليب تفاعل التلاميذ معه.",
        "sourceReference": "تعريفات المناهج قديمًا وحديثًا، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-definitions",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q23",
        "type": "multiple_choice",
        "order": 23,
        "prompt": "يمتد نطاق التعلم في التعريف الذي ينص على أن المنهج «كل تعلم تخططه المدرسة أو تشرف عليه» ليشمل:",
        "options": [
          {
            "id": "opt-a",
            "text": "التعلم داخل الفصل الدراسي فقط"
          },
          {
            "id": "opt-b",
            "text": "التعلم الفردي المخطط داخل المدرسة فقط"
          },
          {
            "id": "opt-c",
            "text": "التعلم خارج المدرسة وفق رغبة المتعلم دون إشراف منها"
          },
          {
            "id": "opt-d",
            "text": "التعلم الجماعي أو الفردي، داخل المدرسة أو خارجها"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "النص: كل تعلم تخططه المدرسة أو تشرف عليه، سواء تم في مجموعات أو بشكل فردي، داخل المدرسة أو خارجها.",
        "sourceReference": "تعريفات المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-definitions",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q24",
        "type": "multiple_choice",
        "order": 24,
        "prompt": "يعرّف أحد التعريفات المنهج بأنه مجموعة مرتبة من المقررات الدراسية أو موضوعات متتابعة مطلوبة:",
        "options": [
          {
            "id": "opt-a",
            "text": "لتحديد مستوى المتعلم قبل بدء الدراسة"
          },
          {
            "id": "opt-b",
            "text": "لتنفيذ الأنشطة غير الصفية بالمدرسة"
          },
          {
            "id": "opt-c",
            "text": "للتخرج أو للحصول على شهادة في فرع أساسي للدراسة"
          },
          {
            "id": "opt-d",
            "text": "لتأهيل المعلم لتدريس المقرر"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "النص: مجموعة مرتبة من المقررات الدراسية أو موضوعات متتابعة مطلوبة للتخرج أو للحصول على شهادة في فرع أساسي للدراسة.",
        "sourceReference": "تعريفات المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-language",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch1-draft-q25",
        "type": "multiple_choice",
        "order": 25,
        "prompt": "تعني كلمة «منهج» في اللغة، كما يذكر الكتاب:",
        "options": [
          {
            "id": "opt-a",
            "text": "المسار الزمني للدراسة"
          },
          {
            "id": "opt-b",
            "text": "الطريق الواضح (النهج الواضح للتعليم والتعلم)"
          },
          {
            "id": "opt-c",
            "text": "الخطة المرتبة للأنشطة"
          },
          {
            "id": "opt-d",
            "text": "الأسلوب المتبع في الإدارة"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "النص: المنهج في اللغة هو الطريق الواضح، أي النهج الواضح للتعليم والتعلم.",
        "sourceReference": "المنهج في اللغة، ص6"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-comprehensive-dev",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q26",
        "type": "true_false",
        "order": 26,
        "prompt": "يتطلب تقويم المنهج، وفق مقدمة الفصل، مراعاة مدخلات المنظومات التي يتأثر بها، مثل المتعلمين والإمكانات ومستوى المعلمين والسياسات التعليمية.",
        "correctAnswer": true,
        "explanation": "تنص المقدمة على ضرورة الأخذ في الاعتبار مدخلات هذه المنظومات عند تقويم المنهج.",
        "sourceReference": "مقدمة الفصل، ص2"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-comprehensive-dev",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q27",
        "type": "true_false",
        "order": 27,
        "prompt": "تقتصر التنمية التي تسعى إليها التربية الرياضية، كما ورد في المقدمة، على تطوير الجانب البدني للمتعلم.",
        "correctAnswer": false,
        "explanation": "المقدمة تذكر أنها تعمل على تحقيق أقصى قدر من التطوير والتنمية الشاملة المتزنة والمتكاملة للطاقات الكامنة في المتعلم، وفقًا لقدراته واستعداداته واهتماماته.",
        "sourceReference": "مقدمة الفصل، ص2"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-comprehensive-dev",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q28",
        "type": "true_false",
        "order": 28,
        "prompt": "يرى الكتاب أن تطوير المناهج بما يتفق ومتطلبات العصر يتحقق بالاعتماد على الخبرة الشخصية للمسؤولين دون التقيد بأسلوب علمي محدد.",
        "correctAnswer": false,
        "explanation": "النص يربط التطوير باتباع الأسلوب العلمي في تخطيط المناهج وتطويرها وتحديثها بهدف تحسين العملية التربوية.",
        "sourceReference": "مقدمة الفصل، ص2"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-change-self-learning",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q29",
        "type": "true_false",
        "order": 29,
        "prompt": "تشير المقدمة إلى أن القوة في العالم المتغير أصبحت لمن يملك تكنولوجيا جديدة ومتطورة في جميع المجالات، ومنها المجال الرياضي.",
        "correctAnswer": true,
        "explanation": "هذا نص المقدمة، مع ملاحظة أن التكنولوجيا نفسها تتقدم بسرعة.",
        "sourceReference": "مقدمة الفصل، ص2"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-change-self-learning",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q30",
        "type": "true_false",
        "order": 30,
        "prompt": "ترى المقدمة أن حركة التطوير والتحديث في النظام التعليمي منذ التسعينات اقتصرت على توفير الإمكانات دون محاولات لإدخال التكنولوجيا الحديثة في المناهج.",
        "correctAnswer": false,
        "explanation": "المقدمة تصفها بأنها حركة غير مسبوقة تشمل محاولات إدخال التكنولوجيا الحديثة في المناهج إلى جانب الإمكانات التي توفرها الوزارة.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-change-self-learning",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q31",
        "type": "true_false",
        "order": 31,
        "prompt": "يناط بنظام التربية الرياضية في المؤسسات التعليمية بالدرجة الأولى تكوين الأفراد رياضيًا حتى يتمكنوا من التعامل والتفاعل مع التغير السريع والمتلاحق.",
        "correctAnswer": true,
        "explanation": "هذا ما يذكره الكتاب عن مسؤولية نظام التربية الرياضية تجاه التغير السريع.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-change-self-learning",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q32",
        "type": "true_false",
        "order": 32,
        "prompt": "ترى المقدمة أن محتوى مناهج التربية الرياضية في المؤسسات التعليمية يحتاج إلى تعديلات طفيفة فقط.",
        "correctAnswer": false,
        "explanation": "المقدمة تقول إن المحتوى في حاجة ماسة إلى مراجعة شاملة وتغيرات جذرية للاستفادة من ثورة المعلومات.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-modern-role-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q33",
        "type": "true_false",
        "order": 33,
        "prompt": "من المطلوب في معلم القرن القادم أن يكون متفهمًا لحقائق العصر في المجالات التي ترتبط بمجال التربية الرياضية.",
        "correctAnswer": true,
        "explanation": "النص يصف المعلم بأنه متفهم لحقائق العصر في كل المجالات المرتبطة بالتربية الرياضية.",
        "sourceReference": "مقدمة الفصل، ص3"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-planning-adaptive",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q34",
        "type": "true_false",
        "order": 34,
        "prompt": "ينبغي لواضعي المناهج أن يصاحب مناهج التربية الرياضية إطار معرفي يساعد على اكتساب القيم الخلقية والاجتماعية والصحية والمفاهيم البيئية.",
        "correctAnswer": true,
        "explanation": "هذا ما يذكره الكتاب عن واجب واضعي المناهج.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-planning-adaptive",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q35",
        "type": "true_false",
        "order": 35,
        "prompt": "يرى الكتاب أن تطوير أهداف مناهج التربية الرياضية ينبغي أن يتم بمعزل عن عادات المجتمع وتقاليده وفلسفته حتى تواكب متغيرات العصر.",
        "correctAnswer": false,
        "explanation": "الكتاب يشترط أن يتناسب التطوير مع المتغيرات الحادثة في المجتمع ومع الواقع الفعلي والعادات والتقاليد وفلسفة المجتمع.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-curriculum-planning-adaptive",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q36",
        "type": "true_false",
        "order": 36,
        "prompt": "يرى الكتاب أن تخطيط المناهج ينبغي أن يلبي رغبات المتعلمين وحاجاتهم وميولهم دون اعتبار للإمكانيات الموجودة بالمؤسسات التعليمية.",
        "correctAnswer": false,
        "explanation": "النص يشترط أن يتمشى التخطيط مع الإمكانيات الموجودة بالمؤسسات التعليمية وأن يلبي في الوقت نفسه رغبات معظم المتعلمين وحاجاتهم وميولهم.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q37",
        "type": "true_false",
        "order": 37,
        "prompt": "يرى الكتاب أن الحاسب الآلي أسلوب تكنولوجي لا يمكن أن يساهم في تطوير مناهج التربية الرياضية.",
        "correctAnswer": false,
        "explanation": "الكتاب يعده أحد الأساليب التكنولوجية الحديثة التي يمكن أن تساهم بشكل إيجابي في تطوير هذه المناهج.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q38",
        "type": "true_false",
        "order": 38,
        "prompt": "أوضحت نتائج بعض الدراسات والبحوث الأكاديمية، كما يذكر الكتاب، تفوق المتعلمين الذين تلقوا تعليمهم عن طريق الحاسب الآلي مقارنة بالطريقة التقليدية.",
        "correctAnswer": true,
        "explanation": "هذا نص الكتاب في عرض نتائج الدراسات.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q39",
        "type": "true_false",
        "order": 39,
        "prompt": "يذكر الكتاب أن استخدام الحاسب الآلي في التعليم يوفر الوقت، لكنه لا يؤثر في اتجاهات المتعلمين.",
        "correctAnswer": false,
        "explanation": "الكتاب يقول إنه يوفر الوقت ويساهم أيضًا في تكوين الاتجاهات الإيجابية لدى المتعلمين.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q40",
        "type": "true_false",
        "order": 40,
        "prompt": "من أوجه استخدام الحاسب في مناهج التربية الرياضية، وفق الكتاب، تقديم برامج تعليمية وتدريبية لتنمية الصفات البدنية والمهارية.",
        "correctAnswer": true,
        "explanation": "ورد ذلك ضمن أوجه الاستخدام التي يعددها الكتاب.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q41",
        "type": "true_false",
        "order": 41,
        "prompt": "يرى الكتاب أن الحاسب الآلي لا يمكن استخدامه في تحليل الحركات الرياضية.",
        "correctAnswer": false,
        "explanation": "يذكر الكتاب تحليل الحركات الرياضية ضمن أوجه استخدام الحاسب في مناهج التربية الرياضية.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q42",
        "type": "true_false",
        "order": 42,
        "prompt": "من أوجه استخدام الحاسب في مناهج التربية الرياضية، كما ذكر الكتاب، ترسيخ بعض المفاهيم البيئية الرياضية.",
        "correctAnswer": true,
        "explanation": "ورد ذلك صراحة ضمن أوجه الاستخدام.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-tech-computers-in-curriculum",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q43",
        "type": "true_false",
        "order": 43,
        "prompt": "يذكر الكتاب ضمن أوجه استخدام الحاسب البرامج الصحية التي تهتم بصحة المتعلمين وإكسابهم القوام الجيد.",
        "correctAnswer": true,
        "explanation": "هذا هو نص الكتاب في آخر أوجه الاستخدام التي يعرضها.",
        "sourceReference": "مقدمة الفصل، ص4"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-nature",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q44",
        "type": "true_false",
        "order": 44,
        "prompt": "يعتبر المنهج، وفق نص «ماهية المنهج»، أداة ثانوية تستعين بها التربية في تحقيق أهدافها في بعض العمليات التربوية.",
        "correctAnswer": false,
        "explanation": "النص يصفه بأنه الأداة الأساسية التي تستخدمها التربية لتحقيق أهدافها في أية عملية تربوية.",
        "sourceReference": "أولًا: ماهية المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-nature",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q45",
        "type": "true_false",
        "order": 45,
        "prompt": "يتضمن تعريف المنهج في التربية الوارد في نص «ماهية المنهج» أنه مجموعة أنشطة ومعارف وخبرات موجهة نحو تنمية قدرات الفرد.",
        "correctAnswer": true,
        "explanation": "هذا هو المعنى التربوي الذي يورده النص بعد ذكر الأصل اللاتيني للكلمة.",
        "sourceReference": "أولًا: ماهية المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-trad-vs-mod",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q46",
        "type": "true_false",
        "order": 46,
        "prompt": "يقصر التعريف الذي ينص على أن المنهج «جميع الخبرات التي يكتسبها المتعلم تحت توجيه المدرسة» المنهج على محتوى المقررات الدراسية.",
        "correctAnswer": false,
        "explanation": "التعريف يتناول جميع الخبرات التي يكتسبها المتعلم بتوجيه المدرسة، فلا يقتصر على محتوى المقررات.",
        "sourceReference": "تعريفات المناهج قديمًا وحديثًا، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-definitions",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q47",
        "type": "true_false",
        "order": 47,
        "prompt": "يعرّف أحد التعريفات المنهج بأنه برنامج نشاطات يصمم لكي يبلغ الطلاب أهدافهم وغايتهم بصورة كاملة في جميع الحالات.",
        "correctAnswer": false,
        "explanation": "النص يقول: «بقدر الإمكان»، فلا يشترط تحقق الأهداف كاملة في جميع الحالات.",
        "sourceReference": "تعريفات المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-definitions",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q48",
        "type": "true_false",
        "order": 48,
        "prompt": "ورد ضمن تعريفات المنهج في الكتاب وصفه بأنه محتوى تعليمي مقدم.",
        "correctAnswer": true,
        "explanation": "هذا أحد التعريفات الأربعة المدرجة تحت عنوان «تعريفات المنهج».",
        "sourceReference": "تعريفات المنهج، ص5"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-language",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q49",
        "type": "true_false",
        "order": 49,
        "prompt": "المنهج كمقرر دراسي هو، في هذه الحالة، مجموعة من المفاهيم والمعارف والحقائق والأساسيات والنظريات التي تشكل مقررًا دراسيًا لفرقة معينة أو سنة دراسية معينة.",
        "correctAnswer": true,
        "explanation": "هذا نص الكتاب تحت عنوان «المنهج في اللغة».",
        "sourceReference": "المنهج في اللغة، ص6"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-intro",
      "topicId": "top-ch1-language",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch1-draft-q50",
        "type": "true_false",
        "order": 50,
        "prompt": "يتضمن المنهج الدراسي للمرحلة الابتدائية، وفق الكتاب، مقررًا دراسيًا واحدًا فقط.",
        "correctAnswer": false,
        "explanation": "يذكر الكتاب أن المنهج الدراسي، مثل منهج المرحلة الابتدائية، يتضمن أكثر من مقرر دراسي.",
        "sourceReference": "المنهج في اللغة، ص6"
      }
    }
  ]
};
