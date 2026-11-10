/**
 * kinematicChapter1ApprovedBank.ts
 * بنك الأسئلة المعتمد رسمياً للفصل الأول (50 سؤالاً: 25 MCQ و 25 TF)
 * مقرر التحليل الحركي — الفرقة الرابعة | د. رحاب عبدالمنعم الرشيدي (2020م)
 */

import type { GovernedQuestionBank } from '../../../../types/quizGovernance.ts';

export const KINEMATIC_CHAPTER_1_APPROVED_BANK: GovernedQuestionBank = {
  "bankId": "bank-kin-ch1-concept-approved-50q",
  "version": "1.0.0",
  "contentHash": "9ce82c5cdb855e5c4f45a7767f3d1502ee423359ea2a02362f60d3acff0b9512",
  "title": "بنك أسئلة اختبار الفصل الأول: مفهوم التحليل الحركي",
  "description": "بنك أسئلة أكاديمي معتمد يتضمن 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) يغطي موضوعات الفصل الأول الاثني عشر بالتفصيل استناداً لكتاب مبادئ التحليل الحركي للدكتورة رحاب عبدالمنعم الرشيدي (2020م).",
  "instructions": "أجب عن جميع الأسئلة الـ 50. هذه النسخة معتمدة ومطابقة لتقرير KIN-CH01-FINAL-QA وبنك الأسئلة النهائي KIN-CH01-QUIZ50-PUBLISH-QA.",
  "courseId": "course-7",
  "chapterId": "chap-kin-concept",
  "targetType": "chapter",
  "approvalStatus": "approved",
  "reviewMetadata": {
    "reviewerName": "د. رحاب عبدالمنعم الرشيدي",
    "approvalDate": "2026-11-09",
    "academicSource": "كتاب مبادئ التحليل الحركي (نظري – تطبيقي) — د. رحاب عبدالمنعم الرشيدي (2020م)",
    "reviewNotes": "تم التحكيم الأكاديمي والاعتماد للنشر بعد استيفاء التدقيق النهائي في تقرير KIN-CH01-FINAL-QA وتنظيف بدائل الطالب."
  },
  "passingScorePercentage": 60,
  "questions": [
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t01",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-01",
        "type": "multiple_choice",
        "order": 1,
        "prompt": "أي وصف يعبّر بدقة عن جوهر التحليل الكمي للحركة؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تحديد مقادير متغيرات الحركة بصورة رقمية"
          },
          {
            "id": "opt-b",
            "text": "الاكتفاء بتقدير الأداء بأنه جيد أو ضعيف"
          },
          {
            "id": "opt-c",
            "text": "وصف انسياب الحركة دون تحويله إلى قيم رقمية"
          },
          {
            "id": "opt-d",
            "text": "ترتيب مراحل المهارة وفق انطباع المقوِّم فقط"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "التحليل الكمي يصوغ متغيرات الحركة في مقادير موضوعية رقمية، ومنها الإزاحة والزوايا والسرعة والعجلة والقوة.",
        "sourceReference": "الموضوع T01، ص10 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t02",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "MC-02",
        "type": "multiple_choice",
        "order": 2,
        "prompt": "أي موقف يمثل انتقالًا من حكم كيفي إلى قياس كمي كما في مثال المؤلف؟",
        "options": [
          {
            "id": "opt-a",
            "text": "وصف لاعب بأنه سريع دون قياس"
          },
          {
            "id": "opt-b",
            "text": "تحديد إيقاع حركة اللاعب بوصفه منتظمًا دون تسجيل قيم زمنية"
          },
          {
            "id": "opt-c",
            "text": "قياس زمن عداءين على المسافة نفسها بعد وصف أحدهما بالأسرع"
          },
          {
            "id": "opt-d",
            "text": "الحكم بأن لاعبًا أكثر توافقًا حركيًا دون إجراء قياس"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "القول «سريع/بطيء» حكم كيفي، وتسجيل الزمن لمسافة معلومة يوفر تحديدًا كميًا.",
        "sourceReference": "الموضوع T02، ص10–11 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t02",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-03",
        "type": "multiple_choice",
        "order": 3,
        "prompt": "أي تسلسل يندرج ضمن الأشكال الخمسة التي ذكرها المؤلف؟",
        "options": [
          {
            "id": "opt-a",
            "text": "كيفي ثم كيفي ثم كمي ثم كمي"
          },
          {
            "id": "opt-b",
            "text": "كيفي ثم كمي ثم كيفي"
          },
          {
            "id": "opt-c",
            "text": "كمي ثم كمي ثم كيفي ثم زمني"
          },
          {
            "id": "opt-d",
            "text": "كيفي ثم وصفي ثم كيفي فقط"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "ذكر النص صراحة تحليلًا كيفيًا ثم كميًا ثم كيفيًا ضمن خمسة أشكال محتملة.",
        "sourceReference": "الموضوع T02، ص11 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t03",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-04",
        "type": "multiple_choice",
        "order": 4,
        "prompt": "ما مجموعة مستويات التحليل الكمي البيوميكانيكي الثلاثة في الكتاب؟",
        "options": [
          {
            "id": "opt-a",
            "text": "الزمني والنوعي والكينماتيكي"
          },
          {
            "id": "opt-b",
            "text": "الكينماتيكي والكيناتيكي والوصفي الكيفي"
          },
          {
            "id": "opt-c",
            "text": "الزمني والميكانيكي الوصفي والتحليل الإحصائي"
          },
          {
            "id": "opt-d",
            "text": "الزمني والكينماتيكي والكيناتيكي"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "حدّد المؤلف ثلاثة مستويات: الزمني، ثم الكينماتيكي، ثم الكيناتيكي.",
        "sourceReference": "الموضوع T03، ص12–13 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t04",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-05",
        "type": "multiple_choice",
        "order": 5,
        "prompt": "ما الغرض الذي ذكره مخطط الخطوات العامة من «الدراسة الاستطلاعية»؟",
        "options": [
          {
            "id": "opt-a",
            "text": "صياغة التعميمات النهائية بعد التحليل الإحصائي"
          },
          {
            "id": "opt-b",
            "text": "تجنب الأخطاء قبل الدراسة الأساسية"
          },
          {
            "id": "opt-c",
            "text": "استبدال الدراسة الأساسية بتقدير وصفي للحركة"
          },
          {
            "id": "opt-d",
            "text": "قياس النتائج الأولية دون اختبار إجراءات الرصد"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "الخطوة الخامسة في المخطط هي دراسة استطلاعية لتجنب الأخطاء، وتسبق الدراسة الأساسية.",
        "sourceReference": "الموضوع T04، ص14 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t04",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "MC-06",
        "type": "multiple_choice",
        "order": 6,
        "prompt": "أي مجموعة تجمع ما يلزم تحديده قبل رصد حركة الجسم وفق شروط الكتاب؟",
        "options": [
          {
            "id": "opt-a",
            "text": "نوع الحركة ومستوياتها، محاور الرصد، نقاط الوصلات المرصودة، الفترة الزمنية"
          },
          {
            "id": "opt-b",
            "text": "نوع الحركة وزمنها فقط دون تعيين محاور الرصد"
          },
          {
            "id": "opt-c",
            "text": "المستوى الفراغي فقط دون تحديد نقاط الوصلات"
          },
          {
            "id": "opt-d",
            "text": "محاور الرصد والنقاط المرصودة دون تحديد فترة زمنية"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "تُذكر أربعة شروط: نوع الحركة/مستوياتها، المحاور، النقاط المرصودة، والفترة الزمنية.",
        "sourceReference": "الموضوع T04، ص17 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t04",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-07",
        "type": "multiple_choice",
        "order": 7,
        "prompt": "ما القيمة الصحيحة لطول 2.5 متر بالسنتيمتر؟",
        "options": [
          {
            "id": "opt-a",
            "text": "25 سم"
          },
          {
            "id": "opt-b",
            "text": "2500 سم"
          },
          {
            "id": "opt-c",
            "text": "0.025 سم"
          },
          {
            "id": "opt-d",
            "text": "250 سم"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "تحويل معتمد علميًا بصورة مستقلة عن النص الخاطئ في المصدر: 1 متر = 100 سم، ومن ثم 2.5 × 100 = 250 سم. أما 0.025 سم فهي قيمة غير صحيحة لهذا التحويل؛ ولا تُفسَّر بقسمة 2.5 على 100 مرتين.",
        "sourceReference": "الموضوع T04، ص17–18 (تصحيح علمي مستقل معتمد حسابيًا)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t05",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "MC-08",
        "type": "multiple_choice",
        "order": 8,
        "prompt": "ما الفائدة المباشرة لتقسيم سباق 100 متر إلى عشرة أجزاء طول كل منها 10 أمتار؟",
        "options": [
          {
            "id": "opt-a",
            "text": "استخراج الزمن الكلي دون التمييز بين مراحل السباق"
          },
          {
            "id": "opt-b",
            "text": "قياس الزوايا المفصلية في كل جزء بدلًا من زمنه"
          },
          {
            "id": "opt-c",
            "text": "تحديد أزمنة الأجزاء ومقارنتها خلال السباق"
          },
          {
            "id": "opt-d",
            "text": "استنتاج مقدار قوة رد فعل الأرض من أزمنة أجزاء السباق وحدها"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "التحليل الزمني يكشف الاختلافات بين أزمنة أجزاء المسافة التي قد لا تظهر من الزمن النهائي وحده.",
        "sourceReference": "الموضوع T05، ص19–20 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t05",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-09",
        "type": "multiple_choice",
        "order": 9,
        "prompt": "أي ترتيب يطابق الإجراءات الأربعة للتحليل الزمني؟",
        "options": [
          {
            "id": "opt-a",
            "text": "الهدف ثم بداية الفترة ونهايتها ثم الطول الزمني ثم التركيب الزمني"
          },
          {
            "id": "opt-b",
            "text": "الهدف ثم التركيب الزمني ثم تحديد حدود الفترة ثم الطول الزمني"
          },
          {
            "id": "opt-c",
            "text": "تحديد بداية الفترة ونهايتها ثم الطول الزمني ثم الهدف ثم التركيب الزمني"
          },
          {
            "id": "opt-d",
            "text": "التركيب الزمني ثم الطول الزمني ثم حدود الفترة ثم الهدف"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "ورد ترتيب الإجراءات: الهدف، حدود الفترة، الطول الزمني، التركيب الزمني.",
        "sourceReference": "الموضوع T05، ص21–22 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t05",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-10",
        "type": "multiple_choice",
        "order": 10,
        "prompt": "ما المقصود بالتركيب الزمني للأداء الحركي؟",
        "options": [
          {
            "id": "opt-a",
            "text": "حساب الزمن الكلي للمهارة دون توزيع زمن المراحل"
          },
          {
            "id": "opt-b",
            "text": "تحديد ترتيب مراحل المهارة دون قياس أزمنتها"
          },
          {
            "id": "opt-c",
            "text": "قياس زمن مرحلة منفردة دون نسبته إلى الزمن الكلي"
          },
          {
            "id": "opt-d",
            "text": "تحديد أزمنة أجزاء المهارة والزمن الكلي ونسبة كل جزء إليه"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "يتضمن التركيب الزمني زمن الأجزاء والزمن الكلي والنسب، ويفيد في فهم الإيقاع.",
        "sourceReference": "الموضوع T05، ص22–24 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t06",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-11",
        "type": "multiple_choice",
        "order": 11,
        "prompt": "يقطع شخص 20 مترًا خلال 10 ثوانٍ. ما مقدار سرعته المتوسطة القياسية؟",
        "options": [
          {
            "id": "opt-a",
            "text": "0.5 م/ث"
          },
          {
            "id": "opt-b",
            "text": "2 م/ث"
          },
          {
            "id": "opt-c",
            "text": "10 م/ث"
          },
          {
            "id": "opt-d",
            "text": "20 م/ث"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "السرعة القياسية المتوسطة = المسافة/الزمن = 20/10 = 2 م/ث.",
        "sourceReference": "الموضوع T06، ص26 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t06",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "MC-12",
        "type": "multiple_choice",
        "order": 12,
        "prompt": "إذا كانت سرعة جسم تتناقص بمرور الزمن في خط مستقيم باتجاه موجب، فما وصف العجلة على هذا المحور؟",
        "options": [
          {
            "id": "opt-a",
            "text": "صفرية لأن الجسم يتحرك في خط مستقيم"
          },
          {
            "id": "opt-b",
            "text": "موجبة لأنها في اتجاه الحركة نفسه"
          },
          {
            "id": "opt-c",
            "text": "سالبة بالنسبة إلى الاتجاه الموجب"
          },
          {
            "id": "opt-d",
            "text": "لا يمكن وصف إشارتها حتى مع تعيين الاتجاه الموجب"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "عندما تنخفض السرعة في اتجاه المحور الموجب تكون العجلة سالبة بالنسبة إليه.",
        "sourceReference": "الموضوع T06، ص31 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t06",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-13",
        "type": "multiple_choice",
        "order": 13,
        "prompt": "تتحرك نقطة على دائرة نصف قطرها ثابت 0.5 متر حول محور ثابت بسرعة زاوية مقدارها 4 راديان/ثانية. ما مقدار سرعتها المماسية؟",
        "options": [
          {
            "id": "opt-a",
            "text": "2 م/ث"
          },
          {
            "id": "opt-b",
            "text": "0.125 م/ث"
          },
          {
            "id": "opt-c",
            "text": "4.5 م/ث"
          },
          {
            "id": "opt-d",
            "text": "8 م/ث"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "صيغة تدقيق علمي مستقلة وليست نقلًا حرفيًا من المعادلة الناقصة في ص32: v=rω=0.5×4=2 م/ث، عند ثبات نصف القطر والدوران حول المحور المحدد.",
        "sourceReference": "الموضوع T06، ص31–32 (تصحيح علمي مستقل معتمد حسابيًا)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t06",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-14",
        "type": "multiple_choice",
        "order": 14,
        "prompt": "عداء متوسط طول خطوته 2 متر وترددها 4 خطوات/ثانية. ما سرعة الجري المحسوبة؟",
        "options": [
          {
            "id": "opt-a",
            "text": "2 م/ث"
          },
          {
            "id": "opt-b",
            "text": "8 م/ث"
          },
          {
            "id": "opt-c",
            "text": "4 م/ث"
          },
          {
            "id": "opt-d",
            "text": "6 م/ث"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "وفق علاقة المصدر V=L×F: ‏2×4=8 م/ث، وهي معطيات مكتملة مستقلة عن الجدول الملتبس.",
        "sourceReference": "الموضوع T06، ص38–40 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t07",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-15",
        "type": "multiple_choice",
        "order": 15,
        "prompt": "أي مجموعة تُمثل خصائص القوة الأربع المطلوبة لتحليلها؟",
        "options": [
          {
            "id": "opt-a",
            "text": "نقطة التأثير ومقدار القوة فقط دون اتجاهها أو زاويتها"
          },
          {
            "id": "opt-b",
            "text": "اتجاه القوة ومقدارها فقط دون نقطة التأثير والزاوية"
          },
          {
            "id": "opt-c",
            "text": "زاوية القوة ونقطة تأثيرها فقط دون اتجاهها أو مقدارها"
          },
          {
            "id": "opt-d",
            "text": "نقطة التأثير والزاوية والاتجاه والمقدار"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "تتطلب دراسة القوة تحديد نقطة التأثير والزاوية والاتجاه والمقدار.",
        "sourceReference": "الموضوع T07، ص42 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t07",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-16",
        "type": "multiple_choice",
        "order": 16,
        "prompt": "إذا كانت مركبتا القوة المتعامدتان في مستوى واحد 3 نيوتن و4 نيوتن، فما مقدار محصلتهما؟",
        "options": [
          {
            "id": "opt-a",
            "text": "1 نيوتن"
          },
          {
            "id": "opt-b",
            "text": "7 نيوتن"
          },
          {
            "id": "opt-c",
            "text": "5 نيوتن"
          },
          {
            "id": "opt-d",
            "text": "12 نيوتن"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "بتصحيح علمي مستقل عن الصيغة المطبوعة الخاطئة: للمركبتين المتعامدتين فقط، مقدار المحصلة √(3²+4²)=5 نيوتن.",
        "sourceReference": "الموضوع T07، ص44–45 (تصحيح علمي مستقل معتمد حسابيًا)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t08",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-17",
        "type": "multiple_choice",
        "order": 17,
        "prompt": "أي جهاز يرتبط في الكتاب بالقياس الكيناتيكي المباشر للقوة؟",
        "options": [
          {
            "id": "opt-a",
            "text": "منصة قياس القوة"
          },
          {
            "id": "opt-b",
            "text": "كاميرا عالية السرعة لقياس زمن الأداء"
          },
          {
            "id": "opt-c",
            "text": "برنامج تصوير لاستخراج زوايا المفاصل"
          },
          {
            "id": "opt-d",
            "text": "جهاز Digitizer لاستخراج الإحداثيات من الصورة"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "منصة القوة من أجهزة القياس المباشر؛ في حين تستخرج الطريقة غير المباشرة القوة من المتغيرات الكينماتيكية.",
        "sourceReference": "الموضوع T08، ص45–46 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t08",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "MC-18",
        "type": "multiple_choice",
        "order": 18,
        "prompt": "ما الوظيفة الأساسية للسنسور أو مبدل الطاقة في منظومة القياس كما وردت في الكتاب؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تحديد محصلة القوى من زمن الحركة وحده دون حساسات"
          },
          {
            "id": "opt-b",
            "text": "تخزين صور الحركة دون التقاط مقدار فيزيائي"
          },
          {
            "id": "opt-c",
            "text": "تحويل الظاهرة المقاسة إلى إشارة قابلة للمعالجة"
          },
          {
            "id": "opt-d",
            "text": "توليد قيمة قياس رياضية من دون استشعار الظاهرة"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "الحساس يستقبل ظاهرة أو مقدارًا ويحوّله غالبًا إلى إشارة كهربائية قابلة للقياس والمعالجة.",
        "sourceReference": "الموضوع T08، ص47–48 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t09",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-19",
        "type": "multiple_choice",
        "order": 19,
        "prompt": "أي متغير في جدول (10) يخص التحليل الكيناتيكي للحركة الزاوية؟",
        "options": [
          {
            "id": "opt-a",
            "text": "كمية الحركة الخطية"
          },
          {
            "id": "opt-b",
            "text": "عزم القصور الذاتي"
          },
          {
            "id": "opt-c",
            "text": "دفع القوة الخطي"
          },
          {
            "id": "opt-d",
            "text": "الشغل الخطي"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "يصنف جدول (10) عزم القصور الذاتي ضمن متغيرات الحركة الزاوية.",
        "sourceReference": "الموضوع T09، ص50–51 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t09",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-20",
        "type": "multiple_choice",
        "order": 20,
        "prompt": "جسم عزم قصوره الذاتي حول محور ثابت 2 كجم·م² وسرعته الزاوية 3 راديان/ث. ما طاقة دورانه؟",
        "options": [
          {
            "id": "opt-a",
            "text": "3 جول"
          },
          {
            "id": "opt-b",
            "text": "6 جول"
          },
          {
            "id": "opt-c",
            "text": "18 جول"
          },
          {
            "id": "opt-d",
            "text": "9 جول"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "صيغة علمية منقحة مستقلة غير منقولة حرفيًا من خانة الكتاب الملتبسة: لطاقة دوران جسم حول محور ثابت E=½Iω²=½×2×3²=9 جول.",
        "sourceReference": "الموضوع T09، ص51–52 (تصحيح علمي مستقل معتمد حسابيًا)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t09",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "MC-21",
        "type": "multiple_choice",
        "order": 21,
        "prompt": "عندما يكون عزم القوة ثابتًا حول محور ثابت وفي اتجاه الإزاحة الزاوية، ما العلاقة التي تعطي الشغل الزاوي؟",
        "options": [
          {
            "id": "opt-a",
            "text": "القوة × الإزاحة الخطية دون مراعاة اتجاهها"
          },
          {
            "id": "opt-b",
            "text": "عزم القوة ÷ الإزاحة الزاوية"
          },
          {
            "id": "opt-c",
            "text": "العزم × الإزاحة الزاوية بالراديان"
          },
          {
            "id": "opt-d",
            "text": "عزم القوة × السرعة الزاوية"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "صيغة تدقيق علمي مستقلة لتوضيح شرط عزم ثابت واتجاه متوافق مع الإزاحة الزاوية بالراديان: W=τΔθ. لا تُنسب باعتبارها نقلًا حرفيًا من جدول (10).",
        "sourceReference": "الموضوع T09، ص51 (تصحيح علمي مستقل معتمد حسابيًا)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t10",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "MC-22",
        "type": "multiple_choice",
        "order": 22,
        "prompt": "بعد تعيين إحداثيات مراكز ثقل أجزاء الجسم، ما الخطوة الجوهرية في طريقة كالوسير لاستخراج مركز الجسم العام؟",
        "options": [
          {
            "id": "opt-a",
            "text": "ضرب كل إحداثي في الوزن النسبي للجزء وجمع النتائج لكل محور"
          },
          {
            "id": "opt-b",
            "text": "جمع الإحداثيات مباشرة دون مراعاة الأوزان النسبية"
          },
          {
            "id": "opt-c",
            "text": "ضرب كل إحداثي في طول الوصلة بدل وزنها النسبي"
          },
          {
            "id": "opt-d",
            "text": "استخدام إحداثيات جزء واحد ممثلًا للجسم كله"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "تُحسب المتوسطات المرجحة بإحداثيات مراكز الأجزاء وأوزانها النسبية ثم تُجمع لكل محور.",
        "sourceReference": "الموضوع T10، ص54–55 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t10",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-23",
        "type": "multiple_choice",
        "order": 23,
        "prompt": "كتلة لاعب 70 كجم، وتبلغ النسبة الكتلية للجذع في نموذج فيشر 0.43. ما كتلة الجذع المحسوبة؟",
        "options": [
          {
            "id": "opt-a",
            "text": "0.43 كجم"
          },
          {
            "id": "opt-b",
            "text": "16.3 كجم"
          },
          {
            "id": "opt-c",
            "text": "70.43 كجم"
          },
          {
            "id": "opt-d",
            "text": "30.1 كجم"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "تدقيق مستقل انطلاقًا من قيم جدول المصدر: 70×0.43=30.1 كجم. نتحدث عن كتلة بالكيلوجرام، لا عن وزن مقاس بالنيوتن؛ الرقم المحسوب ليس قيمة مطبوعة في جدول مكتمل.",
        "sourceReference": "الموضوع T10، ص54،59 (تدقيق علمي مستقل من قيم جدول المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t11",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "MC-24",
        "type": "multiple_choice",
        "order": 24,
        "prompt": "إذا كان 5 سم على الصورة تمثل 100 سم حقيقية، فكم يمثل قياس 15 سم على الصورة؟",
        "options": [
          {
            "id": "opt-a",
            "text": "30 سم"
          },
          {
            "id": "opt-b",
            "text": "300 سم"
          },
          {
            "id": "opt-c",
            "text": "150 سم"
          },
          {
            "id": "opt-d",
            "text": "1500 سم"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "بالتناسب: (15/5)×100=300 سم = 3 أمتار؛ هذا المثال محدد المعطيات ولا يعتمد على عد الكادرات.",
        "sourceReference": "الموضوع T11، ص61–62 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t12",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "MC-25",
        "type": "multiple_choice",
        "order": 25,
        "prompt": "ما الغرض الأساسي من جهاز Digitizer ضمن الإجراءات الفنية؟",
        "options": [
          {
            "id": "opt-a",
            "text": "تحويل مواضع نقاط الصورة إلى إحداثيات رقمية قابلة للمعالجة"
          },
          {
            "id": "opt-b",
            "text": "تحويل الإحداثيات الرقمية إلى قوة فعلية بلا معادلات"
          },
          {
            "id": "opt-c",
            "text": "قياس الكتلة المباشر باستخدام صورة فقط"
          },
          {
            "id": "opt-d",
            "text": "تقدير تردد التصوير دون الرجوع إلى زمن التسجيل"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "يحوّل جهاز Digitizer مواضع العلامات إلى بيانات رقمية وإحداثيات للمعالجة على الحاسوب.",
        "sourceReference": "الموضوع T12، ص66–67 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t01",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-01",
        "type": "true_false",
        "order": 26,
        "prompt": "اعتماد التحليل الكمي على أجهزة وتقنيات متقدمة يعني أنه اقتصادي دائمًا.",
        "correctAnswer": false,
        "explanation": "ذكر المؤلف أن هذا الأسلوب عادةً قد يكون غير اقتصادي؛ رغم دقة أدواته.",
        "sourceReference": "الموضوع T01، ص10 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t02",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-02",
        "type": "true_false",
        "order": 27,
        "prompt": "يشترط المؤلف أن يسبق التحليل الكيفي التحليل الكمي في كل عملية تحليل حركي.",
        "correctAnswer": false,
        "explanation": "قد يسبق الكيفي الكمي، أو يأتي الكمي أولًا ثم الكيفي، وفق الهدف والإجراءات.",
        "sourceReference": "الموضوع T02، ص11 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t02",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-03",
        "type": "true_false",
        "order": 28,
        "prompt": "قد يشمل التحليل الوصفي الكيفي التزامن والتتابع والإيقاع والانسياب بين أجزاء الحركة.",
        "correctAnswer": true,
        "explanation": "هذه الخصائص واردة ضمن وصف المؤلف للتحليل الفني للمهارة.",
        "sourceReference": "الموضوع T02، ص11 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t03",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-04",
        "type": "true_false",
        "order": 29,
        "prompt": "يمكن حساب متغيرات مستويات التحليل البيوميكانيكي يدويًا أو باستخدام أجهزة ونظم التحليل الحركي.",
        "correctAnswer": true,
        "explanation": "أجاز المصدر تطبيق المعادلات يدويًا أو باستخدام الأجهزة والنظم.",
        "sourceReference": "الموضوع T03، ص12–13 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t04",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-05",
        "type": "true_false",
        "order": 30,
        "prompt": "يتفق الرصد الزمني للحركتين الخطية والدورانية من حيث حساب الفرق الزمني، بينما يختلف الرصد المكاني تبعًا لنوع الحركة.",
        "correctAnswer": true,
        "explanation": "هذه المقارنة وردت صراحةً في فقرة رصد الحركات الخطية والدورانية.",
        "sourceReference": "الموضوع T04، ص17 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t04",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-06",
        "type": "true_false",
        "order": 31,
        "prompt": "الشكل الخارجي لجسم الإنسان ثابت مثل الجسم الصلب؛ لذلك لا تتغير طريقة تحليل حركته باختلاف أوضاع المفاصل.",
        "correctAnswer": false,
        "explanation": "يتكون الجسم من وصلات ومفاصل تتغير أوضاعها؛ ما يؤثر في التحليل.",
        "sourceReference": "الموضوع T04، ص15 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t05",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-07",
        "type": "true_false",
        "order": 32,
        "prompt": "يمكن استخدام التحليل الزمني لدراسة زمن التوقع الحركي من خلال العلاقة بين زمنَي الهجوم والدفاع في رياضات المنازلات.",
        "correctAnswer": true,
        "explanation": "يشير المؤلف إلى تحليل زمن التوقع الحركي بالربط بين الهجوم والدفاع في رياضات المنازلات؛ وهو تطبيق مختلف عن تقسيم أزمنة سباق العدو.",
        "sourceReference": "الموضوع T05، ص24 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t05",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-08",
        "type": "true_false",
        "order": 33,
        "prompt": "في المثال المقارن عام 1991، كان الفارق بين زمنَي لويس وبيوريل النهائيين 0.20 ثانية.",
        "correctAnswer": false,
        "explanation": "الزمنان 9.86 و9.88 ثانية؛ الفارق 0.02 ثانية.",
        "sourceReference": "الموضوع T05، ص19 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t05",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-09",
        "type": "true_false",
        "order": 34,
        "prompt": "يمكن تمثيل أزمنة مراحل الأداء باستخدام أعمدة بيانية أو دوائر مقسمة إلى أجزاء.",
        "correctAnswer": true,
        "explanation": "يذكر المصدر هذين التمثيلين لتسهيل فهم التركيب الزمني.",
        "sourceReference": "الموضوع T05، ص22–24 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t06",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-10",
        "type": "true_false",
        "order": 35,
        "prompt": "تُحسب السرعة المتوسطة القياسية بقسمة المسافة الكلية المقطوعة على الزمن الكلي.",
        "correctAnswer": true,
        "explanation": "هذه هي العلاقة المعروضة لمتوسط السرعة القياسية.",
        "sourceReference": "الموضوع T06، ص29–30 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t06",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-11",
        "type": "true_false",
        "order": 36,
        "prompt": "إذا ظلت السرعة المتجهة ثابتة مقدارًا واتجاهًا، فإن العجلة تساوي صفرًا.",
        "correctAnswer": true,
        "explanation": "تدقيق علمي مستقل لاتساق تعريف العجلة: a=Δv/Δt؛ إذا ظلت السرعة المتجهة ثابتة مقدارًا واتجاهًا يكون تغيرها صفرًا. ليست صيغة منقولة حرفيًا.",
        "sourceReference": "الموضوع T06، ص31 (تدقيق علمي مستقل لاتساق مفهوم العجلة)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t06",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-12",
        "type": "true_false",
        "order": 37,
        "prompt": "وحدة العجلة الزاوية هي الراديان/ثانية، لا الراديان/ثانية مربعة.",
        "correctAnswer": false,
        "explanation": "تصحيح علمي مستقل لوحدة العجلة الزاوية: لأنها تغير السرعة الزاوية (راديان/ث) لكل ثانية فالوحدة راديان/ث²؛ وليست راديان/ث. لا يُعد نقلًا حرفيًا من معادلة ناقصة.",
        "sourceReference": "الموضوع T06، ص31–32 (تصحيح علمي مستقل معتمد حسابيًا)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t07",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-13",
        "type": "true_false",
        "order": 38,
        "prompt": "قوة رد فعل الأرض واحدة من القوى التي يذكرها المؤلف عند تحليل حركة الجري.",
        "correctAnswer": true,
        "explanation": "ترد قوة رد فعل الأرض GRF في قائمة القوى المؤثرة في الجري.",
        "sourceReference": "الموضوع T07، ص42–43 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t07",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-14",
        "type": "true_false",
        "order": 39,
        "prompt": "إذا أثرت قوتان متساويتان مقدارًا ومتعاكستان تمامًا اتجاهًا على جسم، فمحصلتهما تساوي صفرًا.",
        "correctAnswer": true,
        "explanation": "مجموع المتجهين في الاتجاهين المتعاكسين يتلاشى.",
        "sourceReference": "الموضوع T07، ص41 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t07",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-15",
        "type": "true_false",
        "order": 40,
        "prompt": "يعرض المؤلف قوة العضلات مثالًا لتحليل القوى الداخلية، وقوة رد فعل الأرض عند ارتقاء الوثب العالي مثالًا لتحليل قوة خارجية.",
        "correctAnswer": true,
        "explanation": "في الرسمين (A) و(B) من ص42 يقارن المؤلف تحليل القوة العضلية داخل الجسم بقوة رد فعل الأرض المؤثرة أثناء ارتقاء لاعب الوثب العالي.",
        "sourceReference": "الموضوع T07، ص42 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t08",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-16",
        "type": "true_false",
        "order": 41,
        "prompt": "يتكون نظام القياس أو التحكم المعروض في الكتاب من الدخل، وتكييف الإشارة، والخرج.",
        "correctAnswer": true,
        "explanation": "هذه هي المراحل الثلاث الواردة بالنص.",
        "sourceReference": "الموضوع T08، ص47–48 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t08",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-17",
        "type": "true_false",
        "order": 42,
        "prompt": "الطريقة غير المباشرة للقياس الكيناتيكي تستلزم دائمًا منصة قوة ولا تستخدم المتغيرات الكينماتيكية.",
        "correctAnswer": false,
        "explanation": "تُقدَّر القوة بطريقة غير مباشرة من المتغيرات الكينماتيكية والمعادلات الميكانيكية.",
        "sourceReference": "الموضوع T08، ص49–50 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t09",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-18",
        "type": "true_false",
        "order": 43,
        "prompt": "في نموذج الدوران حول محور ثابت مناسب، تُحسب كمية الحركة الزاوية حول ذلك المحور بالعلاقة L=Iω.",
        "correctAnswer": true,
        "explanation": "علاقة تدقيق علمي مستقلة صحيحة لنموذج الدوران حول محور ثابت، بعزم قصور I حول المحور نفسه. ليست اقتباسًا حرفيًا من خلايا جدول (10).",
        "sourceReference": "الموضوع T09، ص51 (تصحيح علمي مستقل معتمد حسابيًا)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t09",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-19",
        "type": "true_false",
        "order": 44,
        "prompt": "عندما تؤثر قوة خارجية على جسم صلب حر بحيث لا يمر خط عملها بمركز كتلته، فإنها تولّد دورانًا فقط ولا تؤثر في الحركة الانتقالية لمركز الكتلة.",
        "correctAnswer": false,
        "explanation": "تدقيق ميكانيكي مستقل: لجسم صلب حر تؤثر القوة المحصلة في تسارع مركز الكتلة، ويولد خط عمل القوة غير المار بالمركز عزمًا كذلك؛ قد يحدث انتقال ودوران معًا. لا يقتبس هذا التصحيح حرفيًا من المؤلف.",
        "sourceReference": "الموضوع T09، ص50 (تدقيق علمي مستقل)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t10",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-20",
        "type": "true_false",
        "order": 45,
        "prompt": "يمكن أن يتغير موضع مركز ثقل جسم الإنسان بالنسبة إلى الجسم عند تغير أوضاع الأطراف والمفاصل.",
        "correctAnswer": true,
        "explanation": "يتغير توزيع مواضع الأجزاء بتغير الوضع الحركي.",
        "sourceReference": "الموضوع T10، ص52–53 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t10",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-21",
        "type": "true_false",
        "order": 46,
        "prompt": "في نموذج تقسيم الجسم إلى أجزائه الأربعة عشر، يُفترض أن مجموع الأوزان النسبية للأجزاء يساوي 1.",
        "correctAnswer": true,
        "explanation": "الجداول تعرض الأوزان النسبية للكتلة الكلية ومجموعها 1.00.",
        "sourceReference": "الموضوع T10، ص54 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t11",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "TF-22",
        "type": "true_false",
        "order": 47,
        "prompt": "تتغير قيمة الزاوية لمجرد تكبير الصورة، حتى إذا لم يتغير اتجاه ضلعيها.",
        "correctAnswer": false,
        "explanation": "قيمة الزاوية تعتمد على اتجاه الضلعين؛ التكبير وحده لا يغيرها.",
        "sourceReference": "الموضوع T11، ص61 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t11",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-23",
        "type": "true_false",
        "order": 48,
        "prompt": "يذكر المؤلف سبع علامات أساسية على الجسم لرسم المسار الحركي، مع إمكان إضافة علامتي مركز الثقل والأداة.",
        "correctAnswer": true,
        "explanation": "السبع تشمل الرأس والكتف والمرفق والرسغ والفخذ والركبة والقدم، وتضاف علامتان أحيانًا.",
        "sourceReference": "الموضوع T11، ص62–63 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t12",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-24",
        "type": "true_false",
        "order": 49,
        "prompt": "يعرض الكتاب التزامن في اتجاهين: التغير المكاني، وربط التسجيل المرئي بقياسات مسببات الحركة.",
        "correctAnswer": true,
        "explanation": "هذا هو التقسيم الوارد لطرق التزامن.",
        "sourceReference": "الموضوع T12، ص68–70 (المصدر)"
      }
    },
    {
      "courseId": "course-7",
      "chapterId": "chap-kin-concept",
      "topicId": "top-kin-ch1-t12",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "TF-25",
        "type": "true_false",
        "order": 50,
        "prompt": "يتألف الحامل الثلاثي في العرض من الرأس والعمود الأوسط والأرجل، ويُعد نوعا الرأس مكوّنين إضافيين مستقلين.",
        "correctAnswer": false,
        "explanation": "المكونات الرئيسية ثلاثة فقط؛ الكروي وذو الذراع نوعان للرأس، لا مكونان رابع وخامس.",
        "sourceReference": "الموضوع T12، ص70–72 (المصدر)"
      }
    }
  ]
};
