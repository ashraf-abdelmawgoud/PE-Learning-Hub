/**
 * motorLearningChapter1Draft.ts
 *
 * مسودة بنك أسئلة الاختبار الشامل للفصل الأول: المهارة الحركية (50 سؤالاً: 25 MCQ + 25 TF)
 * مقرر التعلم الحركي (course-2) — الفرقة الرابعة | حزمة MOTOR-LEARNING-CH01-QA-04
 *
 * حالة الحوكمة: DRAFT (مسودة غير معتمدة ومعزولة تماماً عن بيئة الإنتاج)
 * لا يجوز استيراد هذا الملف في src/ أو نشره للطلاب قبل الاعتماد المركزي وتحديد المراجع وتاريخ الاعتماد.
 */

import type { GovernedQuestionBank, GovernedQuizQuestion } from '../../../../types/quizGovernance.ts';
import { computeQuestionBankHash } from '../../../../utils/contentHash.ts';

const DRAFT_QUESTIONS: GovernedQuizQuestion[] = [
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-01",
      "type": "multiple_choice",
      "order": 1,
      "prompt": "أي العناصر التالية يعبر عن مفهوم المهارة الحركية؟",
      "options": [
        {
          "id": "opt-a",
          "text": "العشوائية في الأداء"
        },
        {
          "id": "opt-b",
          "text": "الإتقان والتناسق والتوقيت السليم"
        },
        {
          "id": "opt-c",
          "text": "زيادة الجهد دون هدف"
        },
        {
          "id": "opt-d",
          "text": "سرعة الحركة فقط"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "يربط المرجع المهارة بالإتقان والتناسق والتوقيت المناسب.",
      "sourceReference": "الموضوع T01، ص4 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-02",
      "type": "multiple_choice",
      "order": 2,
      "prompt": "كيف عرّف Stallings المهارة الحركية؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الفعالية العضلية الموجهة نحو غرض محدد"
        },
        {
          "id": "opt-b",
          "text": "النمو الجسمي فقط"
        },
        {
          "id": "opt-c",
          "text": "القدرة على الحفظ"
        },
        {
          "id": "opt-d",
          "text": "الاستجابة اللفظية"
        }
      ],
      "correctOptionId": "opt-a",
      "explanation": "ورد التعريف بهذه الصيغة في ص 5.",
      "sourceReference": "الموضوع T01، ص5 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-03",
      "type": "multiple_choice",
      "order": 3,
      "prompt": "أي الأمثلة التالية مهارة حركية وردت بالمرجع؟",
      "options": [
        {
          "id": "opt-a",
          "text": "قراءة صحيفة"
        },
        {
          "id": "opt-b",
          "text": "كتابة تقرير"
        },
        {
          "id": "opt-c",
          "text": "الإرسال في الكرة الطائرة"
        },
        {
          "id": "opt-d",
          "text": "الاستماع إلى محاضرة"
        }
      ],
      "correctOptionId": "opt-c",
      "explanation": "ذكر الكتاب الإرسال مثالًا على المهارة الحركية الرياضية.",
      "sourceReference": "الموضوع T01، ص4 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-04",
      "type": "multiple_choice",
      "order": 4,
      "prompt": "أي هدف يرتبط بالاقتصاد في الأداء المهاري؟",
      "options": [
        {
          "id": "opt-a",
          "text": "زيادة الطاقة المستهلكة"
        },
        {
          "id": "opt-b",
          "text": "إطالة زمن الأداء دائمًا"
        },
        {
          "id": "opt-c",
          "text": "تجاهل جودة الحركة"
        },
        {
          "id": "opt-d",
          "text": "تحقيق نتيجة جيدة بأقل طاقة وزمن"
        }
      ],
      "correctOptionId": "opt-d",
      "explanation": "الاقتصاد في الطاقة والزمن عنصر في تعريفات المهارة.",
      "sourceReference": "الموضوع T01، ص5 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-05",
      "type": "multiple_choice",
      "order": 5,
      "prompt": "ما الإجراء الذي يلي شرح المهارة في التسلسل التعليمي المذكور؟",
      "options": [
        {
          "id": "opt-a",
          "text": "عرض النموذج"
        },
        {
          "id": "opt-b",
          "text": "إنهاء التعلم"
        },
        {
          "id": "opt-c",
          "text": "تقييم المباراة"
        },
        {
          "id": "opt-d",
          "text": "إلغاء التطبيق"
        }
      ],
      "correctOptionId": "opt-a",
      "explanation": "يذكر المرجع الشرح ثم عرض النموذج ثم التطبيق.",
      "sourceReference": "الموضوع T01، ص5 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-06",
      "type": "multiple_choice",
      "order": 6,
      "prompt": "ما المقصود بالمهارات الانتقالية؟",
      "options": [
        {
          "id": "opt-a",
          "text": "تثبيت الجسم فقط"
        },
        {
          "id": "opt-b",
          "text": "نقل الجسم من مكان إلى آخر"
        },
        {
          "id": "opt-c",
          "text": "معالجة الأدوات فقط"
        },
        {
          "id": "opt-d",
          "text": "إصدار الأوامر اللفظية"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "تعتمد على تغيير موقع الجسم بالنسبة للأرض.",
      "sourceReference": "الموضوع T02، ص6 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-07",
      "type": "multiple_choice",
      "order": 7,
      "prompt": "أي المهارات التالية انتقالية؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الاستلام"
        },
        {
          "id": "opt-b",
          "text": "طبطبة الكرة"
        },
        {
          "id": "opt-c",
          "text": "المشي"
        },
        {
          "id": "opt-d",
          "text": "مسك الكرة"
        }
      ],
      "correctOptionId": "opt-c",
      "explanation": "المشي أحد الأمثلة المباشرة للمهارات الانتقالية.",
      "sourceReference": "الموضوع T02، ص6 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-08",
      "type": "multiple_choice",
      "order": 8,
      "prompt": "مم تتكون دورة المشي وفق المرجع؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الوقفة والتأرجح"
        },
        {
          "id": "opt-b",
          "text": "الدفع والاستلام"
        },
        {
          "id": "opt-c",
          "text": "اللف والدوران"
        },
        {
          "id": "opt-d",
          "text": "الرمي والالتقاط"
        }
      ],
      "correctOptionId": "opt-a",
      "explanation": "وردت مرحلتا الوقفة والتأرجح في ص 7.",
      "sourceReference": "الموضوع T02، ص7 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-09",
      "type": "multiple_choice",
      "order": 9,
      "prompt": "ما السمة التي تميز الجري عن المشي؟",
      "options": [
        {
          "id": "opt-a",
          "text": "عدم تحريك الذراعين"
        },
        {
          "id": "opt-b",
          "text": "غياب الحركة للأمام"
        },
        {
          "id": "opt-c",
          "text": "اتصال القدمين الدائم بالأرض"
        },
        {
          "id": "opt-d",
          "text": "وجود فترة طيران قصيرة"
        }
      ],
      "correctOptionId": "opt-d",
      "explanation": "توجد أثناء الجري فترة عدم ارتكاز.",
      "sourceReference": "الموضوع T02، ص7 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-10",
      "type": "multiple_choice",
      "order": 10,
      "prompt": "ما الذي يحتاجه الوثب إلى جانب قوة الدفع؟",
      "options": [
        {
          "id": "opt-a",
          "text": "القدرة على القراءة"
        },
        {
          "id": "opt-b",
          "text": "التوافق العضلي العصبي والاتزان"
        },
        {
          "id": "opt-c",
          "text": "ثبات القدمين على الأرض طوال الحركة"
        },
        {
          "id": "opt-d",
          "text": "الاستلام باليدين"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "يربط المرجع الوثب بالقوة والتوافق والاتزان.",
      "sourceReference": "الموضوع T02، ص8 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-11",
      "type": "multiple_choice",
      "order": 11,
      "prompt": "على ماذا تعتمد مهارات المعالجة والتناول؟",
      "options": [
        {
          "id": "opt-a",
          "text": "التعامل مع الأشياء والأدوات"
        },
        {
          "id": "opt-b",
          "text": "تغيير موقع الجسم فقط"
        },
        {
          "id": "opt-c",
          "text": "الحفاظ على السكون"
        },
        {
          "id": "opt-d",
          "text": "الاستماع فقط"
        }
      ],
      "correctOptionId": "opt-a",
      "explanation": "تتضمن إعطاء القوة للأداة أو استقبالها.",
      "sourceReference": "الموضوع T03، ص9 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-12",
      "type": "multiple_choice",
      "order": 12,
      "prompt": "أي المهارات التالية من المعالجة والتناول؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الجري"
        },
        {
          "id": "opt-b",
          "text": "التسلق"
        },
        {
          "id": "opt-c",
          "text": "الرمي"
        },
        {
          "id": "opt-d",
          "text": "المشي"
        }
      ],
      "correctOptionId": "opt-c",
      "explanation": "الرمي من أمثلة مهارات المعالجة والتناول.",
      "sourceReference": "الموضوع T03، ص9 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-13",
      "type": "multiple_choice",
      "order": 13,
      "prompt": "ما معيار نجاح الاستلام لدى الطفل وفق الكتاب؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الجري لمسافة طويلة"
        },
        {
          "id": "opt-b",
          "text": "الوثب لأعلى"
        },
        {
          "id": "opt-c",
          "text": "الدوران حول الجسم"
        },
        {
          "id": "opt-d",
          "text": "استقبال الكرة أو الشيء المقذوف باليدين"
        }
      ],
      "correctOptionId": "opt-d",
      "explanation": "هذا هو المحك العملي المذكور في ص 11.",
      "sourceReference": "الموضوع T03، ص11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-14",
      "type": "multiple_choice",
      "order": 14,
      "prompt": "ما المقصود بالاتزان الثابت؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الانتقال السريع"
        },
        {
          "id": "opt-b",
          "text": "الحفاظ على ثبات الجسم دون سقوط أو اهتزاز"
        },
        {
          "id": "opt-c",
          "text": "قذف الأداة"
        },
        {
          "id": "opt-d",
          "text": "زيادة سرعة الجري"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "الاتزان الثابت مرتبط بالاحتفاظ بوضع الجسم.",
      "sourceReference": "الموضوع T03، ص11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-15",
      "type": "multiple_choice",
      "order": 15,
      "prompt": "أي زوج من الحركات يورده المرجع ضمن مهارات ثبات واتزان الجسم؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الرمي والاستلام"
        },
        {
          "id": "opt-b",
          "text": "الثني والمد"
        },
        {
          "id": "opt-c",
          "text": "الجري والتسلق"
        },
        {
          "id": "opt-d",
          "text": "الركل وطبطبة الكرة"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "تذكر صفحة 11 الثني والمد ضمن أمثلة مهارات ثبات واتزان الجسم صراحة، دون تخصيصهما بأحد نوعي الاتزان.",
      "sourceReference": "الموضوع T03، ص11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-16",
      "type": "multiple_choice",
      "order": 16,
      "prompt": "أي مثال ذكره الكتاب للمهارات المعقدة؟",
      "options": [
        {
          "id": "opt-a",
          "text": "المشي"
        },
        {
          "id": "opt-b",
          "text": "الوقوف"
        },
        {
          "id": "opt-c",
          "text": "الخداع والمراوغة"
        },
        {
          "id": "opt-d",
          "text": "التنفس"
        }
      ],
      "correctOptionId": "opt-c",
      "explanation": "صنف المرجع الخداع والمراوغة ضمن المهارات المعقدة.",
      "sourceReference": "الموضوع T04، ص11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-17",
      "type": "multiple_choice",
      "order": 17,
      "prompt": "أي المهارات التالية مستمرة وفق المرجع؟",
      "options": [
        {
          "id": "opt-a",
          "text": "التصويب السلمي"
        },
        {
          "id": "opt-b",
          "text": "السباحة"
        },
        {
          "id": "opt-c",
          "text": "الخداع"
        },
        {
          "id": "opt-d",
          "text": "الرمي على الهدف"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "وردت السباحة والجري والتجديف ضمن المهارات المستمرة.",
      "sourceReference": "الموضوع T04، ص12 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-18",
      "type": "multiple_choice",
      "order": 18,
      "prompt": "أي عامل ورد ضمن العوامل المؤثرة في المهارة؟",
      "options": [
        {
          "id": "opt-a",
          "text": "لون الزي"
        },
        {
          "id": "opt-b",
          "text": "نوع المدرج"
        },
        {
          "id": "opt-c",
          "text": "عدد المشاهدين"
        },
        {
          "id": "opt-d",
          "text": "توقيت الأداء"
        }
      ],
      "correctOptionId": "opt-d",
      "explanation": "توقيت الأداء أحد العوامل الخمسة المذكورة.",
      "sourceReference": "الموضوع T04، ص12 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-19",
      "type": "multiple_choice",
      "order": 19,
      "prompt": "أي عامل يعزز تعلم المهارة؟",
      "options": [
        {
          "id": "opt-a",
          "text": "تحديد المشكلة"
        },
        {
          "id": "opt-b",
          "text": "ضعف اللياقة"
        },
        {
          "id": "opt-c",
          "text": "قصور التدريس"
        },
        {
          "id": "opt-d",
          "text": "غياب الرغبة"
        }
      ],
      "correctOptionId": "opt-a",
      "explanation": "تحديد المشكلة من عوامل التعزيز الواردة.",
      "sourceReference": "الموضوع T04، ص12 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-20",
      "type": "multiple_choice",
      "order": 20,
      "prompt": "كيف يستقبل المتعلم المعلومات في المثال الوارد؟",
      "options": [
        {
          "id": "opt-a",
          "text": "بالتخمين فقط"
        },
        {
          "id": "opt-b",
          "text": "بالنوم"
        },
        {
          "id": "opt-c",
          "text": "بالمشاهدة أو السمع"
        },
        {
          "id": "opt-d",
          "text": "دون أي مدخلات"
        }
      ],
      "correctOptionId": "opt-c",
      "explanation": "يذكر المرجع النظر والسمع كطريقين للاستقبال.",
      "sourceReference": "الموضوع T05، ص13 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-21",
      "type": "multiple_choice",
      "order": 21,
      "prompt": "ما دور الخبرة السابقة في تعلم المهارة؟",
      "options": [
        {
          "id": "opt-a",
          "text": "منع الاستجابة"
        },
        {
          "id": "opt-b",
          "text": "المساعدة في تحليل المعلومات وربط المهارات"
        },
        {
          "id": "opt-c",
          "text": "إلغاء التدريب"
        },
        {
          "id": "opt-d",
          "text": "زيادة الأخطاء بالضرورة"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "تُستخدم الخبرات المخزونة في معالجة المعلومات الجديدة، مع امتداد للفكرة في ص 16.",
      "sourceReference": "الموضوع T05، ص13،16 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-22",
      "type": "multiple_choice",
      "order": 22,
      "prompt": "أي مثال يمثل التغذية الراجعة الخارجية؟",
      "options": [
        {
          "id": "opt-a",
          "text": "الإحساس العضلي وحده"
        },
        {
          "id": "opt-b",
          "text": "الذاكرة السابقة"
        },
        {
          "id": "opt-c",
          "text": "التصور العقلي"
        },
        {
          "id": "opt-d",
          "text": "تصحيح المدرب للخطأ"
        }
      ],
      "correctOptionId": "opt-d",
      "explanation": "بحسب شرح التغذية الراجعة الخارجية في الكتاب ص 15، يقدم المعلم أو المدرب معلومات وتصحيحًا للمتعلم من الخارج.",
      "sourceReference": "الموضوع T05، ص15 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-23",
      "type": "multiple_choice",
      "order": 23,
      "prompt": "ما الذي يساعد على الاحتفاظ بالحركة واستدعائها؟",
      "options": [
        {
          "id": "opt-a",
          "text": "التكرار والممارسة من أوضاع مختلفة"
        },
        {
          "id": "opt-b",
          "text": "ترك التدريب تمامًا"
        },
        {
          "id": "opt-c",
          "text": "عدم مشاهدة الحركة"
        },
        {
          "id": "opt-d",
          "text": "تجاهل الأداء"
        }
      ],
      "correctOptionId": "opt-a",
      "explanation": "يوضح المرجع ذلك في مثال حركة الرسغ في ص 14–15.",
      "sourceReference": "الموضوع T05، ص14–15 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t06",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-24",
      "type": "multiple_choice",
      "order": 24,
      "prompt": "ما الذي يدل بصورة أفضل على ثبات المهارة؟",
      "options": [
        {
          "id": "opt-a",
          "text": "محاولة واحدة ناجحة"
        },
        {
          "id": "opt-b",
          "text": "زيادة الجهد"
        },
        {
          "id": "opt-c",
          "text": "تكرار تحقيق الهدف عبر محاولات"
        },
        {
          "id": "opt-d",
          "text": "تجنب الأداء"
        }
      ],
      "correctOptionId": "opt-c",
      "explanation": "الثبات يعني تحقيق النتيجة من أداء إلى آخر.",
      "sourceReference": "الموضوع T06، ص17 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t06",
    "approvalStatus": "draft",
    "question": {
      "id": "MCQ-25",
      "type": "multiple_choice",
      "order": 25,
      "prompt": "ما الذي يميز المتعلم صاحب الخبرة؟",
      "options": [
        {
          "id": "opt-a",
          "text": "استهلاك طاقة أكبر دائمًا"
        },
        {
          "id": "opt-b",
          "text": "الأداء بفاعلية وجهد وزمن أقل"
        },
        {
          "id": "opt-c",
          "text": "غياب التوقيت"
        },
        {
          "id": "opt-d",
          "text": "عدم تحليل المهارة"
        }
      ],
      "correctOptionId": "opt-b",
      "explanation": "يربط المرجع الخبرة بالاقتصاد في الجهد والزمن.",
      "sourceReference": "الموضوع T06، ص17 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-01",
      "type": "true_false",
      "order": 26,
      "prompt": "تقتصر المهارة الحركية على أداء الحركة بسرعة فقط.",
      "correctAnswer": false,
      "explanation": "تشمل الإتقان والتوافق والتوقيت والهدف.",
      "sourceReference": "الموضوع T01، ص4–5 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-02",
      "type": "true_false",
      "order": 27,
      "prompt": "يمكن أداء المهارة الرياضية في وجود المنافس أو عدم وجوده.",
      "correctAnswer": true,
      "explanation": "ورد ذلك في مفهوم المهارة في ص 4.",
      "sourceReference": "الموضوع T01، ص4 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-03",
      "type": "true_false",
      "order": 28,
      "prompt": "يعد الاقتصاد في الطاقة المبذولة من عناصر تعريف المهارة.",
      "correctAnswer": true,
      "explanation": "ورد ضمن تعريفات المهارة في ص 5.",
      "sourceReference": "الموضوع T01، ص5 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t01",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-04",
      "type": "true_false",
      "order": 29,
      "prompt": "التمرير في كرة القدم ليس مهارة حركية.",
      "correctAnswer": false,
      "explanation": "ذكره المرجع مثالًا مباشرًا.",
      "sourceReference": "الموضوع T01، ص4 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-05",
      "type": "true_false",
      "order": 30,
      "prompt": "المهارات الانتقالية تؤدي إلى تغيير مكان الجسم.",
      "correctAnswer": true,
      "explanation": "هذا أساس تعريفها في ص 6.",
      "sourceReference": "الموضوع T02، ص6 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-06",
      "type": "true_false",
      "order": 31,
      "prompt": "تتكون دورة المشي من مرحلة الوقفة فقط.",
      "correctAnswer": false,
      "explanation": "تتكون من الوقفة والتأرجح.",
      "sourceReference": "الموضوع T02، ص7 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-07",
      "type": "true_false",
      "order": 32,
      "prompt": "توجد في الجري فترة طيران قصيرة.",
      "correctAnswer": true,
      "explanation": "وهي مرحلة عدم الارتكاز.",
      "sourceReference": "الموضوع T02، ص7 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-08",
      "type": "true_false",
      "order": 33,
      "prompt": "يظل الجسم في المشي على اتصال بالأرض بقدم أو بالقدمين.",
      "correctAnswer": true,
      "explanation": "هذا ما يميز المشي عن الجري في المرجع.",
      "sourceReference": "الموضوع T02، ص7 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t02",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-09",
      "type": "true_false",
      "order": 34,
      "prompt": "يصف المرجع الوثب بأنه أقل صعوبة من الجري.",
      "correctAnswer": false,
      "explanation": "يذكر أن الوثب يتسم بصعوبة أكبر.",
      "sourceReference": "الموضوع T02، ص8 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-10",
      "type": "true_false",
      "order": 35,
      "prompt": "تتضمن مهارات المعالجة والتناول التعامل مع الأدوات.",
      "correctAnswer": true,
      "explanation": "قد يعطي الجسم قوة للأداة أو يستقبلها منها.",
      "sourceReference": "الموضوع T03، ص9 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-11",
      "type": "true_false",
      "order": 36,
      "prompt": "يختلف هدف الرمي بين الدقة والقوة والمسافة.",
      "correctAnswer": true,
      "explanation": "ذكر المرجع هذه الأهداف صراحة.",
      "sourceReference": "الموضوع T03، ص10 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-12",
      "type": "true_false",
      "order": 37,
      "prompt": "الاستلام (المقف) من المهارات الانتقالية.",
      "correctAnswer": false,
      "explanation": "صنفه المرجع ضمن المعالجة والتناول.",
      "sourceReference": "الموضوع T03، ص9–11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-13",
      "type": "true_false",
      "order": 38,
      "prompt": "الاتزان الثابت يعني المحافظة على وضع الجسم دون سقوط.",
      "correctAnswer": true,
      "explanation": "هذا هو تعريفه في ص 11.",
      "sourceReference": "الموضوع T03، ص11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t03",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-14",
      "type": "true_false",
      "order": 39,
      "prompt": "الاتزان الحركي لا يحدث إلا عندما يكون الجسم ساكنًا.",
      "correctAnswer": false,
      "explanation": "يرتبط بالتوازن أثناء الأداء الحركي.",
      "sourceReference": "الموضوع T03، ص11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-15",
      "type": "true_false",
      "order": 40,
      "prompt": "صنف المرجع الخداع والمراوغة مهارات بسيطة.",
      "correctAnswer": false,
      "explanation": "صنفهما ضمن المهارات المعقدة.",
      "sourceReference": "الموضوع T04، ص11 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-16",
      "type": "true_false",
      "order": 41,
      "prompt": "تعد السباحة والتجديف من المهارات المستمرة.",
      "correctAnswer": true,
      "explanation": "ورد المثالان في ص 12.",
      "sourceReference": "الموضوع T04، ص12 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-17",
      "type": "true_false",
      "order": 42,
      "prompt": "دقة الحركة أحد العوامل المؤثرة في المهارة.",
      "correctAnswer": true,
      "explanation": "ترد ضمن قائمة العوامل المؤثرة.",
      "sourceReference": "الموضوع T04، ص12 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t04",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-18",
      "type": "true_false",
      "order": 43,
      "prompt": "ضعف اللياقة البدنية من عوامل تعزيز تعلم المهارة.",
      "correctAnswer": false,
      "explanation": "ورد ضمن عوامل إضعاف التعلم.",
      "sourceReference": "الموضوع T04، ص12 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-19",
      "type": "true_false",
      "order": 44,
      "prompt": "تبدأ عملية استقبال المعلومات في المثال بشرح المدرب وعرض الأداء.",
      "correctAnswer": true,
      "explanation": "يقدم المعلم المعلومات أولًا بالشرح والعرض.",
      "sourceReference": "الموضوع T05، ص13 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-20",
      "type": "true_false",
      "order": 45,
      "prompt": "ليس للخبرة السابقة دور في معالجة المعلومات الحركية.",
      "correctAnswer": false,
      "explanation": "يعطيها المرجع دورًا مهمًا في التعلم.",
      "sourceReference": "الموضوع T05، ص13 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-21",
      "type": "true_false",
      "order": 46,
      "prompt": "التغذية الراجعة الخارجية قد تأتي من المعلم أو المدرب.",
      "correctAnswer": true,
      "explanation": "يورد الكتاب أن التغذية الراجعة الخارجية تشمل ما يقال للمتعلم من الخارج عن طريق المعلم (ص 15).",
      "sourceReference": "الموضوع T05، ص15 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-22",
      "type": "true_false",
      "order": 47,
      "prompt": "يربط المرجع التغذية الراجعة الداخلية بالشعور العضلي العصبي.",
      "correctAnswer": true,
      "explanation": "يربط الكتاب بين التغذية الراجعة الداخلية ومعرفة الإنجاز والشعور العضلي العصبي (ص 15).",
      "sourceReference": "الموضوع T05، ص15 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t05",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-23",
      "type": "true_false",
      "order": 48,
      "prompt": "يساعد تكرار المهارة على الاحتفاظ بها واستدعائها لاحقًا.",
      "correctAnswer": true,
      "explanation": "ورد في مثال التصويب والذاكرة الحركية ص 14–15.",
      "sourceReference": "الموضوع T05، ص14–15 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t06",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-24",
      "type": "true_false",
      "order": 49,
      "prompt": "النجاح في أول محاولة يثبت دائمًا أن المهارة قد تعلمت.",
      "correctAnswer": false,
      "explanation": "يحذر المرجع من أن النجاح الأول قد يكون صدفة.",
      "sourceReference": "الموضوع T06، ص16 (المصدر)"
    }
  },
  {
    "courseId": "course-2",
    "chapterId": "chap-motor-skill",
    "topicId": "top-motor-ch1-t06",
    "approvalStatus": "draft",
    "question": {
      "id": "TF-25",
      "type": "true_false",
      "order": 50,
      "prompt": "تشمل المهارة الجيدة استخدام الأداء المناسب في الوقت المناسب.",
      "correctAnswer": true,
      "explanation": "ورد ذلك ضمن خاصية تحليل متطلبات التنفيذ.",
      "sourceReference": "الموضوع T06، ص17 (المصدر)"
    }
  }
];

export const MOTOR_LEARNING_CHAPTER_1_DRAFT_BANK: GovernedQuestionBank = {
  bankId: 'bank-motor-ch1-skill-draft-50q',
  version: '0.1.0-draft',
  contentHash: '',
  title: 'مسودة اختبار الفصل الأول: المهارة الحركية',
  description:
    'مسودة بنك أسئلة تضم 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) محولة من حزمة MOTOR-LEARNING-CH01-QA-04 وتغطي الموضوعات T01–T06 (ص4–17).',
  instructions:
    'أجب عن جميع الأسئلة الـ 50. هذه المسودة مخصصة للمراجعة والاعتماد المركزي وليست منشورة للطلاب.',
  courseId: 'course-2',
  chapterId: 'chap-motor-skill',
  targetType: 'chapter',
  approvalStatus: 'draft',
  reviewMetadata: {
    reviewerName: 'غير محدد بعد (مسودة بانتظار الاعتماد المركزي)',
    reviewerTitle: 'بانتظار تحديد المراجع الأكاديمي من الإدارة المركزية',
    approvalDate: '',
    academicSource:
      'كتاب «التعلم الحركي» — جامعة جنوب الوادي / كلية علوم الرياضة (الفرقة الرابعة)، الفصل الأول «المهارة الحركية» ص3–17',
    sourceLocation: 'الفصل الأول: المهارة الحركية (ص4–17) — حزمة MOTOR-LEARNING-CH01-QA-04',
    reviewNotes:
      'مسودة محولة عن question_bank_50.json (25 MCQ + 25 TF). معزولة في drafts/ وغير منشورة للطلاب حتى استيفاء الاعتماد الرسمي وتحديد المراجع وتاريخ الاعتماد.',
  },
  passingScorePercentage: 60,
  questions: DRAFT_QUESTIONS,
};

MOTOR_LEARNING_CHAPTER_1_DRAFT_BANK.contentHash = computeQuestionBankHash(MOTOR_LEARNING_CHAPTER_1_DRAFT_BANK);
