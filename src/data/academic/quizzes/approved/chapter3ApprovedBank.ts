/**
 * chapter3ApprovedBank.ts
 * بنك الأسئلة المعتمد رسمياً للفصل 3 (50 سؤالاً)
 * مقرر مناهج التربية الرياضية — الفرقة الرابعة | أ.د. هاني الدسوقي إبراهيم
 */

import type { GovernedQuestionBank } from '../../../../types/quizGovernance.ts';

export const CHAPTER_3_APPROVED_BANK: GovernedQuestionBank = {
  "bankId": "bank-ch3-elements-approved-50q",
  "version": "1.0.0",
  "contentHash": "76ef63fa7795c1dfdaa33e13e83e654a92b7287ac87aa07a3b5431ccc01581bd",
  "title": "بنك أسئلة اختبار الفصل الثالث: عناصر المنهج",
  "description": "مسودة بنك أسئلة غير معتمدة تتضمن 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) تغطي موضوعات الفصل الثالث السبعة وعناصر التنفيذ الميداني الـ 13 بالتفصيل.",
  "instructions": "أجب عن جميع الأسئلة الـ 50. هذه المسودة مخصصة للمراجعة والتحكيم الأكاديمي الداخلي فقط وليست منشورة للطلاب.",
  "courseId": "course-1",
  "chapterId": "chap-curriculum-elements",
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
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-curriculum-core-elements",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q01",
        "type": "multiple_choice",
        "order": 1,
        "prompt": "ما الوصف الذي يقدمه المؤلف للعلاقة بين العناصر الرئيسية للمنهج؟",
        "options": [
          {
            "id": "opt-a",
            "text": "عناصر متكاملة ترتبط ارتباطًا عضويًا"
          },
          {
            "id": "opt-b",
            "text": "عناصر مستقلة يمكن الاستغناء عن بعضها"
          },
          {
            "id": "opt-c",
            "text": "عناصر يقتصر دورها على تنظيم المحتوى"
          },
          {
            "id": "opt-d",
            "text": "عناصر متتابعة لا تتفاعل فيما بينها"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يقرر النص أن العناصر الرئيسية تتكامل فيما بينها وترتبط ارتباطًا عضويًا.",
        "sourceReference": "«عناصر المنهج» — ص 21 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-curriculum-core-elements",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q02",
        "type": "multiple_choice",
        "order": 2,
        "prompt": "متى تبرز الحاجة إلى توافر عناصر تنفيذ منهاج التربية الرياضية وفق تسلسل العرض في الفصل؟",
        "options": [
          {
            "id": "opt-a",
            "text": "قبل تحديد فلسفة المجتمع"
          },
          {
            "id": "opt-b",
            "text": "بعد وضع المنهاج وتنظيمه ودفعه إلى الميدان"
          },
          {
            "id": "opt-c",
            "text": "بعد الانتهاء من تقويم جميع المتعلمين"
          },
          {
            "id": "opt-d",
            "text": "عند استبعاد دور الإدارة المدرسية"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "يفصل المؤلف بين وضع المنهاج وتنظيمه وبين دفعه إلى الميدان للتنفيذ، حيث تظهر ضرورة عناصر التنفيذ.",
        "sourceReference": "«عناصر تنفيذ المنهاج» — ص 22 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q03",
        "type": "multiple_choice",
        "order": 3,
        "prompt": "ما الوظيفة الأساسية لدليل المعلم في بداية تنفيذ المنهاج؟",
        "options": [
          {
            "id": "opt-a",
            "text": "الاستعاضة عن المعلم"
          },
          {
            "id": "opt-b",
            "text": "إلغاء النماذج التدريسية"
          },
          {
            "id": "opt-c",
            "text": "ترجمة تصور المخطط لتحقيق أهداف المنهاج ومساندة المعلم"
          },
          {
            "id": "opt-d",
            "text": "وضع درجات المتعلمين تلقائيًا"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "يصف الكتاب الدليل بأنه ترجمة حقيقية لتصور المخطط ومرجع يعتمد عليه المعلم في التنفيذ.",
        "sourceReference": "«أولاً: دليل معلم التربية الرياضية» — ص 22 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch3-draft-q04",
        "type": "multiple_choice",
        "order": 4,
        "prompt": "عند تعديل المنهاج خلال التجريب أو التعميم، ما الإجراء المتسق مع الكتاب؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تأجيل تعديل الدليل حتى انتهاء التدريس"
          },
          {
            "id": "opt-b",
            "text": "إلغاء الدليل لعدم ثبات المنهاج"
          },
          {
            "id": "opt-c",
            "text": "تعديل عنوان الدليل دون مضمونه"
          },
          {
            "id": "opt-d",
            "text": "إجراء تعديلات موازية على دليل المعلم"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يؤكد المؤلف أن العمل في المنهاج ودليل المعلم يجب أن يكون متوازيًا.",
        "sourceReference": "«أولاً: دليل معلم التربية الرياضية» — ص 23 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch3-draft-q05",
        "type": "multiple_choice",
        "order": 5,
        "prompt": "أي عنصر يقع ضمن «مقدمة الدليل» تحديدًا؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تحديد فلسفة منهاج التربية الرياضية بإيجاز"
          },
          {
            "id": "opt-b",
            "text": "قوائم المراجع المتخصصة الموسعة"
          },
          {
            "id": "opt-c",
            "text": "جداول حصص الوحدات وحدها"
          },
          {
            "id": "opt-d",
            "text": "تقرير زيارة الموجه"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "تشتمل المقدمة على أساس الفلسفة، وأهداف الدليل، وتعريف أبوابه أو فصوله الرئيسية.",
        "sourceReference": "«أ- محتويات دليل المعلم — مقدمة الدليل» — ص 23 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch3-draft-q06",
        "type": "multiple_choice",
        "order": 6,
        "prompt": "أي مجموعة تمثل مصادر اشتقاق أهداف المنهاج كما وردت في الدليل؟",
        "options": [
          {
            "id": "opt-a",
            "text": "الاختبارات النهائية وحدها"
          },
          {
            "id": "opt-b",
            "text": "المجتمع والمتعلم وطبيعة المعرفة والاتجاهات الجديدة"
          },
          {
            "id": "opt-c",
            "text": "الكتاب المدرسي وحده"
          },
          {
            "id": "opt-d",
            "text": "جدول الحصص وعدد الملاعب فقط"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "يورد النص المجتمع وتطلعاته، والمتعلم وطبيعته، وطبيعة المعرفة، والاتجاهات الجديدة في التربية الرياضية والتربية.",
        "sourceReference": "«أ- محتويات دليل المعلم — أهداف المنهاج» — ص 23 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q07",
        "type": "multiple_choice",
        "order": 7,
        "prompt": "ماذا يُطلب من جزء «وحدات المنهاج» إلى جانب بيان جوانب التعلم؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تعيين ميزانية المديرية"
          },
          {
            "id": "opt-b",
            "text": "حصر غياب جميع العاملين"
          },
          {
            "id": "opt-c",
            "text": "تحديد متوسط الزمن أو عدد الحصص لكل وحدة"
          },
          {
            "id": "opt-d",
            "text": "إصدار تقارير توجيه رسمية"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "يتضمن هذا الجزء إطار الوحدات وجوانب التعلم ومتوسط الزمن أو عدد الحصص اللازمة لتنفيذ كل وحدة.",
        "sourceReference": "«أ- محتويات دليل المعلم — وحدات المنهاج» — ص 23 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q08",
        "type": "multiple_choice",
        "order": 8,
        "prompt": "أي مثال يضعه المؤلف ضمن جزء «النشاط» في دليل المعلم؟",
        "options": [
          {
            "id": "opt-a",
            "text": "قواعد استلام المخصصات المالية"
          },
          {
            "id": "opt-b",
            "text": "شروط تعيين العاملين"
          },
          {
            "id": "opt-c",
            "text": "إلغاء التعزيز والدافعية"
          },
          {
            "id": "opt-d",
            "text": "خطط تنفيذ الأنشطة وأدوار المعلم والمتعلم"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يشمل الجزء أمثلة لخطط تنفيذ أشكال النشاط والأهداف والأدوار وإثارة دافعية المتعلم.",
        "sourceReference": "«أ- محتويات دليل المعلم — النشاط» — ص 24 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q09",
        "type": "multiple_choice",
        "order": 9,
        "prompt": "أي استخدام يوضحه جزء «التقويم» في دليل المعلم؟",
        "options": [
          {
            "id": "opt-a",
            "text": "عرض أسس التقويم وأنواعه وأمثلة لبناء الاختبارات"
          },
          {
            "id": "opt-b",
            "text": "تحديد مواعيد العطلات فقط"
          },
          {
            "id": "opt-c",
            "text": "حصر مصادر التمويل دون تقويم"
          },
          {
            "id": "opt-d",
            "text": "استبدال كل وسائل التدريس"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يتناول التقويم الأسس والأساليب والأنواع والعلاقة بالعناصر الأخرى وأمثلة يمكن بناء اختبارات اعتمادًا عليها.",
        "sourceReference": "«أ- محتويات دليل المعلم — التقويم» — ص 24 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q10",
        "type": "multiple_choice",
        "order": 10,
        "prompt": "ما النقص الذي يرى المؤلف أن الكتاب المدرسي للتربية الرياضية يمكن أن يسهم في معالجته؟",
        "options": [
          {
            "id": "opt-a",
            "text": "نقص حصص المواد الأخرى"
          },
          {
            "id": "opt-b",
            "text": "قلة المصادر والمراجع الرياضية بالمكتبة المدرسية"
          },
          {
            "id": "opt-c",
            "text": "انعدام الحاجة إلى التدريس العملي"
          },
          {
            "id": "opt-d",
            "text": "غياب مسؤوليات أولياء الأمور"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "يربط النص اقتراح الكتاب بسد نقص مصادر ومراجع الأنشطة الرياضية بالمكتبة المدرسية.",
        "sourceReference": "«2- الكتاب المدرسي» — ص 24 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q11",
        "type": "multiple_choice",
        "order": 11,
        "prompt": "كيف يفسر المؤلف إسهام الكتاب المدرسي في تقليل الزمن المستغرق لتعليم المهارات؟",
        "options": [
          {
            "id": "opt-a",
            "text": "من خلال إلغاء التدريب"
          },
          {
            "id": "opt-b",
            "text": "من خلال تخفيض عدد المتعلمين"
          },
          {
            "id": "opt-c",
            "text": "عبر تقديم معارف ومعلومات منظمة تعين على التعلم"
          },
          {
            "id": "opt-d",
            "text": "بتجنب إعداد المعلم لدروسه"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "يوضح النص أن إتاحة المعرفة الرياضية المنظمة تخفف عبء المعلم وتعين على تعلم المهارات.",
        "sourceReference": "«2- الكتاب المدرسي» — ص 25 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q12",
        "type": "multiple_choice",
        "order": 12,
        "prompt": "أي دور يتيح الكتاب المدرسي تقويمًا مباشرًا له كما يرد في الفصل؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تقويم ميزانية الوزارة"
          },
          {
            "id": "opt-b",
            "text": "تقييم جميع العاملين إداريًا"
          },
          {
            "id": "opt-c",
            "text": "تقييم المباني خارج المدرسة"
          },
          {
            "id": "opt-d",
            "text": "تقويم المتعلم في الناحية النظرية الرياضية"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "من الفوائد الواردة استخدام الكتاب وسيلة لتقويم المعارف والمعلومات النظرية المرتبطة بالتربية الرياضية.",
        "sourceReference": "«2- الكتاب المدرسي — أهمية الكتاب» — ص 25 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch3-draft-q13",
        "type": "multiple_choice",
        "order": 13,
        "prompt": "أي مجموعة وردت باعتبارها مبادئ لتنظيم محتوى الأنشطة والمعلومات في الكتاب؟",
        "options": [
          {
            "id": "opt-a",
            "text": "التسلسل والاستمرار والتكامل والتتابع ووضوح المفاهيم"
          },
          {
            "id": "opt-b",
            "text": "التنافس والرسوب والتصنيف والعقاب فقط"
          },
          {
            "id": "opt-c",
            "text": "العشوائية والتجزئة وتكرار المحتوى بلا نظام"
          },
          {
            "id": "opt-d",
            "text": "الاكتفاء بترتيب الصور دون النص"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يسمي النص هذه المبادئ الخمسة صراحة ضمن ضوابط إعداد الكتاب.",
        "sourceReference": "«2- الكتاب المدرسي — ضوابط إعداد الكتاب» — ص 26 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q14",
        "type": "multiple_choice",
        "order": 14,
        "prompt": "ماذا يقصد النص بالعناية بإخراج الكتاب المدرسي؟",
        "options": [
          {
            "id": "opt-a",
            "text": "قصر الكتاب على الصفحات النظرية"
          },
          {
            "id": "opt-b",
            "text": "نوع الورق والطباعة والغلاف والعناوين ووضوح بيانات الرسوم"
          },
          {
            "id": "opt-c",
            "text": "الاستغناء عن الأشكال والصور"
          },
          {
            "id": "opt-d",
            "text": "إلغاء المقدمة والفهرس"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "يفصل المؤلف عناصر الإخراج المادي والبصري للكتاب، ومنها الورق والطباعة والغلاف والعناوين وبيانات الصور.",
        "sourceReference": "«2- الكتاب المدرسي — ضوابط إعداد الكتاب» — ص 26 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-pe-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q15",
        "type": "multiple_choice",
        "order": 15,
        "prompt": "وفق المؤلف، لماذا تتضاءل قيمة الإمكانات والمناهج عند غياب المعلم الكفء؟",
        "options": [
          {
            "id": "opt-a",
            "text": "لأن عدد الكتب يصبح أكبر"
          },
          {
            "id": "opt-b",
            "text": "لأن الإدارة تصبح بلا مبنى"
          },
          {
            "id": "opt-c",
            "text": "لأن المعلم عنصر أساسي في فعالية التعليم"
          },
          {
            "id": "opt-d",
            "text": "لأن المتعلم يحدد السياسة العامة"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "يؤكد النص أن قدرة المعلم وكفاءته أساس فعالية التعليم، وأن الإمكانات والمناهج تتضاءل بغيابه.",
        "sourceReference": "«3- معلم التربية الرياضية» — ص 26 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-pe-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q16",
        "type": "multiple_choice",
        "order": 16,
        "prompt": "كيف يحدد النص موقع التخرج من كلية التربية الرياضية في إعداد المعلم؟",
        "options": [
          {
            "id": "opt-a",
            "text": "النهاية الكاملة للإعداد المهني"
          },
          {
            "id": "opt-b",
            "text": "بديلًا عن الإعداد الأكاديمي"
          },
          {
            "id": "opt-c",
            "text": "مرحلة غير متصلة بمهنة التعليم"
          },
          {
            "id": "opt-d",
            "text": "نقطة بداية تتطلب استمرار النمو المهني"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يرى المؤلف أن التخرج لا يعني نهاية إعداد المعلم، بل إن فترة الإعداد قبل التخرج نقطة بداية.",
        "sourceReference": "«3- معلم التربية الرياضية» — ص 27 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-pe-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch3-draft-q17",
        "type": "multiple_choice",
        "order": 17,
        "prompt": "ما الممارسة التي ينتقدها المؤلف في علاقة المعلم بتخطيط المنهاج؟",
        "options": [
          {
            "id": "opt-a",
            "text": "إلزام المعلم بتنفيذ منهاج مفروض عليه دون مشاركة"
          },
          {
            "id": "opt-b",
            "text": "مشاركة المعلم في لجان وضع المنهاج"
          },
          {
            "id": "opt-c",
            "text": "تحديد خبرات المتعلمين وفق حاجاتهم"
          },
          {
            "id": "opt-d",
            "text": "تعرف المعلم على أساليب مستحدثة"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يصف المؤلف إلزام المعلم بتنفيذ منهاج مفروض عليه بأنه من أسوأ أمور التربية الرياضية المدرسية.",
        "sourceReference": "«3- معلم التربية الرياضية» — ص 27 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-pe-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch3-draft-q18",
        "type": "multiple_choice",
        "order": 18,
        "prompt": "إذا أرادت المدرسة سماع رغبات المتعلمين بشأن تنفيذ المنهاج، فما حدود هذه المشاركة وفق النص؟",
        "options": [
          {
            "id": "opt-a",
            "text": "رأيهم ملزم في كل اختيار"
          },
          {
            "id": "opt-b",
            "text": "تكون آراؤهم استشارية وغير ملزمة"
          },
          {
            "id": "opt-c",
            "text": "لا يجوز شرح الأهداف لهم"
          },
          {
            "id": "opt-d",
            "text": "يحددون كل محتوى المنهاج منفردين"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "يدعو النص لسماع رأي المتعلم مع عدم منحه حرية مطلقة، ويحدد رأيه بأنه استشاري فقط وغير ملزم.",
        "sourceReference": "«4- المتعلم» — ص 28 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teaching-methods-media",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q19",
        "type": "multiple_choice",
        "order": 19,
        "prompt": "أي عامل يذكره المؤلف ضمن مؤثرات اختيار طريقة تدريس مناسبة؟",
        "options": [
          {
            "id": "opt-a",
            "text": "اسم المؤلف وحده"
          },
          {
            "id": "opt-b",
            "text": "تاريخ طباعة الكتاب فقط"
          },
          {
            "id": "opt-c",
            "text": "عدد المتعلمين والفروق الفردية ومهارة المعلم"
          },
          {
            "id": "opt-d",
            "text": "رغبة الموجه منفردًا دون أهداف الدرس"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "وردت ضمن العوامل أهداف الدرس وأنواع الأنشطة والوقت والأدوات والمكان والعدد والفروق ومهارة المعلم والتنظيم.",
        "sourceReference": "«5- اختيار طرق التدريس المناسبة» — ص 28 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teaching-methods-media",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q20",
        "type": "multiple_choice",
        "order": 20,
        "prompt": "ما المبرر التربوي الذي يقدمه النص لاستخدام الوسائل التي تخاطب أكثر من حاسة؟",
        "options": [
          {
            "id": "opt-a",
            "text": "إلغاء حاجة المتعلم إلى الممارسة"
          },
          {
            "id": "opt-b",
            "text": "الاعتماد الكامل على حاسة واحدة"
          },
          {
            "id": "opt-c",
            "text": "الاستغناء عن أساليب التعزيز"
          },
          {
            "id": "opt-d",
            "text": "تكوين التصور الذهني والمفاهيم بصورة أفضل"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يربط المؤلف اشتراك أكثر من حاسة بتحسين التصور الذهني وتكوين المفاهيم ودعم التعلم.",
        "sourceReference": "«6- الوسائل التعليمية» — ص 28 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-educational-admin-leadership",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q21",
        "type": "multiple_choice",
        "order": 21,
        "prompt": "أي مسؤولية ينسبها الكتاب إلى المدير العام للمديرية؟",
        "options": [
          {
            "id": "opt-a",
            "text": "وضع السياسات العامة وتقديم بيانات الإمكانات"
          },
          {
            "id": "opt-b",
            "text": "إعداد دفاتر غياب الفصل يوميًا"
          },
          {
            "id": "opt-c",
            "text": "تحديد رغبات كل متعلم منفردًا"
          },
          {
            "id": "opt-d",
            "text": "شرح المهارات في جميع الحصص"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يذكر النص السياسات العامة المرتبطة بالمنهاج وتوفير بيانات الميزانيات والأدوات والأجهزة والتعاون بين المدارس.",
        "sourceReference": "«7- المدير العام لمديرية التربية والتعليم» — ص 28 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-educational-admin-leadership",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q22",
        "type": "multiple_choice",
        "order": 22,
        "prompt": "كيف يدعم مدير قسم بحوث المناهج تنفيذ المنهاج وفق النص؟",
        "options": [
          {
            "id": "opt-a",
            "text": "بتولي دور المتعلم في جميع الدروس"
          },
          {
            "id": "opt-b",
            "text": "بإبداء الرأي في حل مشكلات التنفيذ وتهيئة الظروف"
          },
          {
            "id": "opt-c",
            "text": "بمنع التغيير العلمي"
          },
          {
            "id": "opt-d",
            "text": "بالاقتصار على تسجيل الغياب"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "تتمثل مهمته في تهيئة الظروف للمعلم والمتعلم والمساهمة برأيه في حل مشكلات التنفيذ.",
        "sourceReference": "«8- مدير قسم بحوث المناهج بالمديرية التعليمية» — ص 29 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-educational-admin-leadership",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch3-draft-q23",
        "type": "multiple_choice",
        "order": 23,
        "prompt": "أي إجراء يتبعه الموجه بعد زيارة المدرسة لمتابعة تنفيذ المنهاج؟",
        "options": [
          {
            "id": "opt-a",
            "text": "يحتفظ بالتقرير دون توزيعه"
          },
          {
            "id": "opt-b",
            "text": "يرفع التقرير إلى أولياء الأمور فقط"
          },
          {
            "id": "opt-c",
            "text": "يسلم نسخة للمعلمين ويرفع أخرى للموجه الأول"
          },
          {
            "id": "opt-d",
            "text": "يلغي التقرير عند وجود صعوبات"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "ينص الكتاب على كتابة تقرير، وإعطاء نسخة للمعلمين، ورفع نسخة أخرى إلى الموجه الأول.",
        "sourceReference": "«9- موجه التربية الرياضية» — ص 29 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-educational-admin-leadership",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q24",
        "type": "multiple_choice",
        "order": 24,
        "prompt": "كيف تستفيد الإدارة المدرسية من البيئة المحلية لدعم المنهاج؟",
        "options": [
          {
            "id": "opt-a",
            "text": "بفصل المدرسة عن الهيئات المحلية"
          },
          {
            "id": "opt-b",
            "text": "بحصر دعمها في الامتحانات النظرية"
          },
          {
            "id": "opt-c",
            "text": "بتعطيل التنسيق بين المواد"
          },
          {
            "id": "opt-d",
            "text": "بتكوين حلقة اتصال مع المدارس والهيئات للاستفادة من الإمكانات"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يصف النص الإدارة بأنها حلقة اتصال بين المدرسة والبيئة المحلية للاستفادة من الإمكانات المتاحة.",
        "sourceReference": "«10- الإدارة المدرسية» — ص 29 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-school-environment-community",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch3-draft-q25",
        "type": "multiple_choice",
        "order": 25,
        "prompt": "أي وضع يذكره المؤلف ضمن عوامل قد تعوق صلاحية البيئة لتنفيذ منهاج التربية الرياضية؟",
        "options": [
          {
            "id": "opt-a",
            "text": "وضع حصص التربية الرياضية في نهاية اليوم الدراسي"
          },
          {
            "id": "opt-b",
            "text": "تعاون الإدارة مع معلمي التربية الرياضية"
          },
          {
            "id": "opt-c",
            "text": "توفير الأدوات والأجهزة الكافية"
          },
          {
            "id": "opt-d",
            "text": "ملاءمة زمن الحصة للحاجة"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يسرد المؤلف وضع الحصص في نهاية اليوم ونقص الملاعب والأدوات وعدم التعاون ضمن العوامل المؤثرة سلبًا.",
        "sourceReference": "«11- البيئة المدرسية» — ص 30 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-curriculum-core-elements",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "reviewMetadata": {
        "reviewerName": "قيد المراجعة والتحكيم الأكاديمي",
        "reviewerTitle": "المراجع الأكاديمي لم يُحدد بعد",
        "approvalDate": "",
        "academicSource": "كتاب مناهج التربية الرياضية — أ.د/ هاني الدسوقي إبراهيم",
        "sourceLocation": "عناصر المنهج، ص 21 مطبوعة",
        "reviewNotes": "تنبيه مصدري: يذكر افتتاح الفصل «أربع عناصر رئيسية»، لكن القائمة الظاهرة في الكتاب مطبوعة مرقمة من 1 إلى 5 وفيها بند رابع غير مكتمل الصياغة «طرق وأساليب». تم استخدام العبارات المكتملة في نص السؤال دون افتراض صياغة للبند الناقص."
      },
      "question": {
        "id": "ch3-draft-q26",
        "type": "true_false",
        "order": 26,
        "prompt": "تتضمن القائمة الافتتاحية للفصل الأهداف التعليمية ومحتوى المنهج وطرق وأساليب التدريس وتقويم المنهج وتطويره.",
        "correctAnswer": true,
        "explanation": "هذه البنود واردة في قائمة العناصر الافتتاحية؛ ويتضمن ترقيمها خللًا مطبعيًا موضحًا في الملاحظات.",
        "sourceReference": "«عناصر المنهج» — ص 21 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-curriculum-core-elements",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q27",
        "type": "true_false",
        "order": 27,
        "prompt": "يحصر المؤلف تنفيذ المنهاج في المعلم والمتعلم دون أي عناصر أو جهات مساندة.",
        "correctAnswer": false,
        "explanation": "تورد القائمة ثلاثة عشر عنصرًا، من بينها أدوات وجهات إدارية وأسرية وعاملون بالمدرسة.",
        "sourceReference": "«عناصر تنفيذ المنهاج» — ص 22 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q28",
        "type": "true_false",
        "order": 28,
        "prompt": "يقدم دليل المعلم نماذج دروس وطرق تدريس وأساليب تقويم متنوعة لتعين المعلم في التنفيذ.",
        "correctAnswer": true,
        "explanation": "يسرد النص هذه النماذج والأساليب بوصفها مما يرجع إليه المعلم عند الحاجة.",
        "sourceReference": "«أولاً: دليل معلم التربية الرياضية» — ص 23 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q29",
        "type": "true_false",
        "order": 29,
        "prompt": "يُعنى قسم أهداف المنهاج ببيان العلاقة بين أهداف المنهاج وأهداف المواقف التعليمية اليومية.",
        "correctAnswer": true,
        "explanation": "ورد هذا الربط صراحة ضمن محتويات القسم الخاص بالأهداف.",
        "sourceReference": "«أ- محتويات دليل المعلم — أهداف المنهاج» — ص 23 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q30",
        "type": "true_false",
        "order": 30,
        "prompt": "يقتصر جزء الطرق والوسائل في دليل المعلم على أسماء الوسائل دون نماذج تطبيقية.",
        "correctAnswer": false,
        "explanation": "يتضمن قراءات متنوعة بطرق ووسائل تعليمية مصحوبة بنماذج وأمثلة تفصيلية.",
        "sourceReference": "«أ- محتويات دليل المعلم — الطرق والوسائل» — ص 23 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q31",
        "type": "true_false",
        "order": 31,
        "prompt": "يشمل التقويم الذي يقدمه دليل المعلم تقويم المتعلم لذاته وتقويم المعلم للمتعلمين وتقويم المعلم لأدائه.",
        "correctAnswer": true,
        "explanation": "يورد النص هذه الصور ضمن نماذج أساليب التقويم في الدليل.",
        "sourceReference": "«أ- محتويات دليل المعلم — التقويم» — ص 24 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch3-draft-q32",
        "type": "true_false",
        "order": 32,
        "prompt": "ينبغي أن يضم دليل المعلم قوائم لمصادر أكاديمية وتربوية يستعين بها معلم التربية الرياضية.",
        "correctAnswer": true,
        "explanation": "يؤكد النص حاجة المعلم إلى مصادر تخصصية وتربوية وإيراد قوائم لها.",
        "sourceReference": "«أ- محتويات دليل المعلم — مصادر التعلم الأخرى» — ص 24 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teacher-guide",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q33",
        "type": "true_false",
        "order": 33,
        "prompt": "يعرض جزء الاتجاهات الجديدة أحدث ما يتعلق بالتدريس والوسائل وتكنولوجيا التعليم لإرشاد المعلم.",
        "correctAnswer": true,
        "explanation": "هذا هو الغرض المذكور للجزء الثامن من محتويات الدليل.",
        "sourceReference": "«أ- محتويات دليل المعلم — الاتجاهات الجديدة» — ص 24 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch3-draft-q34",
        "type": "true_false",
        "order": 34,
        "prompt": "يقرر المؤلف أن مادة التربية الرياضية تمتلك بالفعل كتابًا مدرسيًا مماثلًا لبقية المواد الدراسية.",
        "correctAnswer": false,
        "explanation": "يذكر النص أن المادة ليس لها كتاب مدرسي مثل باقي المواد، ويطرح ضرورة إيجاده.",
        "sourceReference": "«2- الكتاب المدرسي» — ص 24 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q35",
        "type": "true_false",
        "order": 35,
        "prompt": "يربط المؤلف بين المحتوى المعرفي الرياضي وتحسين أداء المتعلم للمهارات.",
        "correctAnswer": true,
        "explanation": "يؤكد أن المعلومات والمعارف الرياضية تساعد على حسن الأداء والارتقاء بالمستوى المهاري.",
        "sourceReference": "«2- الكتاب المدرسي — أهمية الكتاب» — ص 25 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q36",
        "type": "true_false",
        "order": 36,
        "prompt": "من فوائد الكتاب المدرسي المقترح تقليل العبء الواقع على المعلم في شرح المعلومات والمهارات الرياضية.",
        "correctAnswer": true,
        "explanation": "ورد تخفيف مجهود المعلم ضمن قائمة الفوائد.",
        "sourceReference": "«2- الكتاب المدرسي — أهمية الكتاب» — ص 25 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch3-draft-q37",
        "type": "true_false",
        "order": 37,
        "prompt": "يشترط المؤلف أن تكون الألفاظ في الكتاب مناسبة للمتعلم من حيث الكم والكيف.",
        "correctAnswer": true,
        "explanation": "هذا شرط صريح ضمن ضوابط إعداد الكتاب المدرسي.",
        "sourceReference": "«2- الكتاب المدرسي — ضوابط إعداد الكتاب» — ص 26 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q38",
        "type": "true_false",
        "order": 38,
        "prompt": "يرى المؤلف أن تكرار المهارة أو المعرفة يجب أن يكون عشوائيًا حتى يحقق التعلم.",
        "correctAnswer": false,
        "explanation": "يوضح أن التكرار مهم لكنه يجب أن يخضع لنظام مفهوم.",
        "sourceReference": "«2- الكتاب المدرسي — ضوابط إعداد الكتاب» — ص 26 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-textbook-physical-education",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q39",
        "type": "true_false",
        "order": 39,
        "prompt": "يدعو النص إلى عرض الرسومات والصور الخاصة بالمهارات الرياضية من زوايا وأبعاد مختلفة.",
        "correctAnswer": true,
        "explanation": "وردت هذه الضابطة صراحة في قائمة إعداد الكتاب.",
        "sourceReference": "«2- الكتاب المدرسي — ضوابط إعداد الكتاب» — ص 26 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-pe-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q40",
        "type": "true_false",
        "order": 40,
        "prompt": "يقتصر دور معلم التربية الرياضية أثناء الخدمة على التنفيذ، ولا يشارك في تخطيط المنهاج أو تقويمه.",
        "correctAnswer": false,
        "explanation": "ينص الكتاب على مشاركته في تحديد الأهداف والمحتوى والأنشطة والتنفيذ والتقويم.",
        "sourceReference": "«3- معلم التربية الرياضية» — ص 27 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-pe-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q41",
        "type": "true_false",
        "order": 41,
        "prompt": "تتطلب كفاءة المعلم الجمع بين الإعداد الأكاديمي والتربية المهنية المرتبطة بمتطلبات التدريس.",
        "correctAnswer": true,
        "explanation": "يذكر النص النوعين من الخبرات اللازمة لإعداد معلم التربية الرياضية.",
        "sourceReference": "«3- معلم التربية الرياضية» — ص 27 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-pe-teacher-learner",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q42",
        "type": "true_false",
        "order": 42,
        "prompt": "ترتفع فرص إقبال المتعلم على المنهاج عندما تكون أهدافه واضحة في ذهنه.",
        "correctAnswer": true,
        "explanation": "يربط المؤلف وضوح الأهداف باستفادة المتعلمين وبذل الجهد لبلوغها.",
        "sourceReference": "«4- المتعلم» — ص 28 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teaching-methods-media",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q43",
        "type": "true_false",
        "order": 43,
        "prompt": "يمكن اختيار طريقة التدريس المناسبة بمعزل عن وقت الدرس والأدوات ومكانه.",
        "correctAnswer": false,
        "explanation": "يسرد المؤلف هذه العوامل ضمن ما يؤثر في طريقة التدريس.",
        "sourceReference": "«5- اختيار طرق التدريس المناسبة» — ص 28 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-teaching-methods-media",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q44",
        "type": "true_false",
        "order": 44,
        "prompt": "قد يؤدي نقص الوسائل التعليمية إلى لجوء المعلم لطرق تقليدية أقل جودة وفعالية.",
        "correctAnswer": true,
        "explanation": "يشرح النص هذا الأثر عند عدم توافر الوسائل التعليمية الضرورية.",
        "sourceReference": "«6- الوسائل التعليمية» — ص 28 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-educational-admin-leadership",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q45",
        "type": "true_false",
        "order": 45,
        "prompt": "يشمل دور المدير العام بحث إمكان التعاون بين مدارس المنطقة لخدمة البيئة المحلية.",
        "correctAnswer": true,
        "explanation": "ورد ذلك ضمن دور المدير العام بعد ذكر السياسات والإمكانات.",
        "sourceReference": "«7- المدير العام لمديرية التربية والتعليم» — ص 29 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-educational-admin-leadership",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q46",
        "type": "true_false",
        "order": 46,
        "prompt": "تقتصر مهمة موجه التربية الرياضية على تنفيذ أعمال المعلم بنفسه داخل المدرسة.",
        "correctAnswer": false,
        "explanation": "ينص الكتاب على أن مهمة التوجيه هي توجيه المعلمين لتنفيذ أعمالهم لا تنفيذها بدلًا منهم.",
        "sourceReference": "«9- موجه التربية الرياضية» — ص 29 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-educational-admin-leadership",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q47",
        "type": "true_false",
        "order": 47,
        "prompt": "تساهم الإدارة المدرسية في دعم المعلم بتوفير الأدوات والأجهزة والوسائل والمساعدة في تجاوز الصعوبات.",
        "correctAnswer": true,
        "explanation": "يسرد الكتاب هذه الصور من الدعم وتأثيرها في معنويات المعلم.",
        "sourceReference": "«10- الإدارة المدرسية» — ص 29 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-school-environment-community",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q48",
        "type": "true_false",
        "order": 48,
        "prompt": "يعد عدد الحصص وزمن الحصة وعدد المتعلمين من العوامل المؤثرة في صلاحية البيئة المدرسية.",
        "correctAnswer": true,
        "explanation": "ترد العوامل الثلاثة في بداية قائمة مؤثرات البيئة المدرسية.",
        "sourceReference": "«11- البيئة المدرسية» — ص 30 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-school-environment-community",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q49",
        "type": "true_false",
        "order": 49,
        "prompt": "تقتصر مساهمة أولياء الأمور في التنفيذ على حضور الامتحانات المدرسية.",
        "correctAnswer": false,
        "explanation": "يساهمون بتقديم معلومات عن الأبناء وتيسير الإمكانات وتشجيع المشاركة الرياضية.",
        "sourceReference": "«12- أولياء الأمور» — ص 30 مطبوعة."
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-elements",
      "topicId": "top-ch3-school-environment-community",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch3-draft-q50",
        "type": "true_false",
        "order": 50,
        "prompt": "يساعد العاملون بالمدرسة في التنفيذ بتوفير بيانات المتعلمين وتجهيز الملاعب وحصر الغياب والمراسلات.",
        "correctAnswer": true,
        "explanation": "ترد هذه الأعمال ضمن دور السكرتارية والإداريين والعمال.",
        "sourceReference": "«13- العاملون بالمدرسة» — ص 30 مطبوعة."
      }
    }
  ]
};
