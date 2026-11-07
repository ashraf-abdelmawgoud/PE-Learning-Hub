/**
 * chapter2ApprovedBank.ts
 * بنك الأسئلة المعتمد رسمياً للفصل 2 (50 سؤالاً)
 * مقرر مناهج التربية الرياضية — الفرقة الرابعة | أ.د. هاني الدسوقي إبراهيم
 */

import type { GovernedQuestionBank } from '../../../../types/quizGovernance.ts';

export const CHAPTER_2_APPROVED_BANK: GovernedQuestionBank = {
  "bankId": "bank-ch2-foundations-approved-50q",
  "version": "1.0.0",
  "contentHash": "dd3309df3145c603a5e87891298ec516853890a620fd4a50895c391bb7923ce5",
  "title": "بنك أسئلة اختبار الفصل الثاني: أسس ومكونات بناء المنهج المدرسي",
  "description": "مسودة بنك أسئلة غير معتمدة تتضمن 50 سؤالاً موضوعياً (25 اختيار من متعدد و25 صواب وخطأ) تغطي موضوعات الفصل الثاني التسعة بالتفصيل.",
  "instructions": "أجب عن جميع الأسئلة الـ 50. هذه المسودة مخصصة للمراجعة والتحكيم الأكاديمي الداخلي فقط وليست منشورة للطلاب.",
  "courseId": "course-1",
  "chapterId": "chap-curriculum-foundations",
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
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-curriculum-foundations-intro",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q01",
        "type": "multiple_choice",
        "order": 1,
        "prompt": "بحسب الكتاب، تدور «المناهج المحورية» (أحد الأقسام الرئيسية الثلاثة لتنظيمات المناهج) حول:",
        "options": [
          {
            "id": "opt-a",
            "text": "المادة الدراسية وما تتضمنه من معارف ومفاهيم"
          },
          {
            "id": "opt-b",
            "text": "الطالب وميوله ورغباته وحاجاته"
          },
          {
            "id": "opt-c",
            "text": "مشكلات الحياة في إطار علاقاتها بحاجات الطلبة"
          },
          {
            "id": "opt-d",
            "text": "طرائق التدريس وأساليب التقويم المستخدمة"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "ذكر المؤلف ثلاثة تنظيمات: مناهج المادة الدراسية (تدور حول المادة)، ومناهج النشاط (تدور حول الطالب وميوله ورغباته وحاجاته)، والمناهج المحورية (تدور حول مشكلات الحياة في إطار علاقاتها بحاجات الطلبة).",
        "sourceReference": "مقدمة الفصل الثاني، ص 6"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-curriculum-foundations-intro",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q02",
        "type": "multiple_choice",
        "order": 2,
        "prompt": "الأساس الذي ينص على اختيار خبرات المنهج وتنظيمها بمراعاة طبيعة المعرفة وخصائصها، إضافةً إلى طرق البحث والتفكير الخاصة بكل شكل من أشكال المعرفة هو الأساس:",
        "options": [
          {
            "id": "opt-a",
            "text": "المعرفي"
          },
          {
            "id": "opt-b",
            "text": "النفسي"
          },
          {
            "id": "opt-c",
            "text": "الفلسفي"
          },
          {
            "id": "opt-d",
            "text": "الاجتماعي"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "عرض الكتاب أربعة أسس رئيسية، وعرّف الأساس المعرفي بأنه مراعاة طبيعة المعرفة وخصائصها وطرق البحث والتفكير الخاصة بكل شكل من أشكالها.",
        "sourceReference": "مقدمة الفصل الثاني (الأسس الرئيسية الأربعة، البند 4)، ص 6"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-psychological-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q03",
        "type": "multiple_choice",
        "order": 3,
        "prompt": "يقصد بالأسس النفسية للمنهج، وفق الكتاب:",
        "options": [
          {
            "id": "opt-a",
            "text": "المعتقدات والقيم والمثل العليا التي تتشكل منها فلسفة المجتمع"
          },
          {
            "id": "opt-b",
            "text": "طبيعة المعرفة وخصائصها وطرق البحث الخاصة بكل مجال منها"
          },
          {
            "id": "opt-c",
            "text": "القيمة الاجتماعية السائدة في المجتمع ونظمه الثقافية"
          },
          {
            "id": "opt-d",
            "text": "المبادئ النفسية التي توصلت إليها البحوث والدراسات في علم النفس حول المتعلم والتعلم والتعليم"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "حدد الكتاب مجالات المبادئ النفسية في ثلاثة محاور: المتعلم (طبيعته وخصائص نموه وحاجاته وميوله...)، والتعلم، والتعليم.",
        "sourceReference": "الأساس النفسي، ص 7"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-psychological-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q04",
        "type": "multiple_choice",
        "order": 4,
        "prompt": "ينظر الكتاب إلى سلوك المتعلم بوصفه حصيلة:",
        "options": [
          {
            "id": "opt-a",
            "text": "العامل الوراثي وحده"
          },
          {
            "id": "opt-b",
            "text": "العامل الوراثي والعامل البيئي والتفاعل بينهما"
          },
          {
            "id": "opt-c",
            "text": "المحتوى الدراسي وطرائق التدريس المتبعة"
          },
          {
            "id": "opt-d",
            "text": "الخبرات المدرسية دون غيرها من الخبرات"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "لما كان السلوك حصيلة الوراثة والبيئة والتفاعل بينهما، اقتضى ذلك أن يهتم واضعو المناهج بطبيعة المتعلم وخصائص نموه وحاجاته واستعداداته وميوله واتجاهاته.",
        "sourceReference": "أولاً: المتعلم وطبيعته وعلاقته بالمنهج، ص 7"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-psychological-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q05",
        "type": "multiple_choice",
        "order": 5,
        "prompt": "وفق تصنيف «مكدوجل» للغرائز الوارد في الكتاب، تُستثار «غريزة الاستطلاع» عندما يجد الإنسان نفسه:",
        "options": [
          {
            "id": "opt-a",
            "text": "في موقف خطر يريد التخلص منه"
          },
          {
            "id": "opt-b",
            "text": "أمام موقف لم يألفه من قبل"
          },
          {
            "id": "opt-c",
            "text": "أمام عائق يقف في طريق تحقيق رغباته"
          },
          {
            "id": "opt-d",
            "text": "في موقف ضعيف يحتاج فيه إلى معونة الآخرين"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "الخيار الأول يصف غريزة الخلاص، والثالث غريزة القتال، والرابع غريزة الاستغاثة، أما الاستطلاع فتستثار بمواجهة موقف غير مألوف.",
        "sourceReference": "طبيعة المتعلم (غرائز مكدوجل)، ص 8"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-human-growth-issues",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q06",
        "type": "multiple_choice",
        "order": 6,
        "prompt": "يوضح الكتاب أن الطفل لا يستطيع الوقوف على قدميه والمشي إلا بعد:",
        "options": [
          {
            "id": "opt-a",
            "text": "خضوعه لتدريب مكثف على المشي في وقت مبكر"
          },
          {
            "id": "opt-b",
            "text": "اكتمال الحصيلة اللغوية لديه"
          },
          {
            "id": "opt-c",
            "text": "استكمال نمو العضلات والأعصاب وبعض خلايا المخ المسؤولة عن حفظ التوازن"
          },
          {
            "id": "opt-d",
            "text": "ظهور الميول الاجتماعية عنده"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "ورد هذا المثال لتوضيح خاصية أن النمو يؤدي إلى النضج والتعلم؛ فإذا لم يحدث نمو كافٍ لهذه الأجزاء تأخر الطفل في المشي.",
        "sourceReference": "خصائص النمو (4: النمو يؤدي إلى النضج والتعلم)، ص 9"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-human-growth-issues",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q07",
        "type": "multiple_choice",
        "order": 7,
        "prompt": "تحرك الطفل بكل جسمه للوصول إلى لعبته أولاً، ثم باليدين، ثم بيد واحدة، ثم ببعض الأصابع، مثال يوضح أن:",
        "options": [
          {
            "id": "opt-a",
            "text": "النمو يسري من العام إلى الخاص"
          },
          {
            "id": "opt-b",
            "text": "النمو عملية مستمرة ومتصلة"
          },
          {
            "id": "opt-c",
            "text": "النمو عملية شاملة متكاملة"
          },
          {
            "id": "opt-d",
            "text": "الطفولة تمثل مرحلة النمو الأساسية"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "المثال الوارد في الكتاب يتدرج من الحركة الكلية العامة إلى الحركة الدقيقة المحددة، وهو ما يعبر عنه المبدأ «النمو يسري من العام إلى الخاص».",
        "sourceReference": "خصائص النمو (7: النمو يسري من العام إلى الخاص)، ص 9"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q08",
        "type": "multiple_choice",
        "order": 8,
        "prompt": "تُعرَّف «الحاجة» في الكتاب بأنها:",
        "options": [
          {
            "id": "opt-a",
            "text": "ميل الفرد نحو نشاط معين، ويتغير كلما تقدم في النمو والنضج"
          },
          {
            "id": "opt-b",
            "text": "استعداد فطري يُستثار بموقف معين فيدفع الفرد إلى سلوك محدد"
          },
          {
            "id": "opt-c",
            "text": "قدرة المتعلم على تطبيق الخبرة المكتسبة في مواقف جديدة"
          },
          {
            "id": "opt-d",
            "text": "حالة من الشعور بالنقص أو الافتقار يصاحبها شيء من التوتر والضيق، ويزول ذلك بإشباعها"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "عرّف الكتاب الحاجة بأنها حالة شعور بالنقص قد يكون مادياً أو معنوياً، داخلياً أو خارجياً، ويزول التوتر الناجم عنها بإشباعها.",
        "sourceReference": "العلاقة بين المنهج وحاجات المتعلمين، ص 10"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q09",
        "type": "multiple_choice",
        "order": 9,
        "prompt": "يُعرِّف الكتاب «التعلم» بأنه:",
        "options": [
          {
            "id": "opt-a",
            "text": "تغيّر مؤقت في سلوك المتعلم ناجم عن التعب أو الإثارة العارضة"
          },
          {
            "id": "opt-b",
            "text": "نقل المعارف من المعلم إلى المتعلم دون مشاركة منه"
          },
          {
            "id": "opt-c",
            "text": "تغيّر دائم نسبياً في سلوك المتعلم ناجم عن الخبرة والمران"
          },
          {
            "id": "opt-d",
            "text": "نمو جسمي يحدث نتيجة العوامل الوراثية وحدها"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "ذكر الكتاب أن التعلم تغيير دائم نسبياً في سلوك المتعلم ناجم عن الخبرة والمران، ويتصل بما يستفيده الفرد من خبراته وتجاربه وتفاعله مع الآخرين.",
        "sourceReference": "ثانياً: التعلم وطبيعته وعلاقته بالمنهج، ص 11"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q10",
        "type": "multiple_choice",
        "order": 10,
        "prompt": "أيُّ الأزواج الآتية يربط بين كيفية حدوث التعلم والمنظِّرين الذين ارتبطت بهم في الكتاب؟",
        "options": [
          {
            "id": "opt-a",
            "text": "التعلم بالفعل المنعكس الشرطي – ثورندايك"
          },
          {
            "id": "opt-b",
            "text": "التعلم بالتبصر – بافلوف وواطسون"
          },
          {
            "id": "opt-c",
            "text": "التعلم بالمحاولة والخطأ – الجشتالتيون"
          },
          {
            "id": "opt-d",
            "text": "التعلم بالمحاولة والخطأ – ثورندايك"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "الكتاب ينسب الفعل المنعكس الشرطي إلى بافلوف وواطسون، والمحاولة والخطأ إلى ثورندايك، والتبصر إلى الجشتالتيين.",
        "sourceReference": "التعلم وطبيعته (ثلاث كيفيات لحدوث التعلم)، ص 11"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q11",
        "type": "multiple_choice",
        "order": 11,
        "prompt": "يذكر الكتاب أن عضلات الأصابع التي تمكّن الطفل من الإمساك بالقلم والتحكم في رسم الحروف تنضج فيما بين:",
        "options": [
          {
            "id": "opt-a",
            "text": "الثانية والرابعة من العمر"
          },
          {
            "id": "opt-b",
            "text": "الخامسة والسابعة من العمر"
          },
          {
            "id": "opt-c",
            "text": "السابعة والتاسعة من العمر"
          },
          {
            "id": "opt-d",
            "text": "التاسعة والحادية عشرة من العمر"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "استُشهد بهذا المثال على النضج الجسمي بوصفه شرطاً للتعلم، ولذلك لا يُرغَم الطفل على الكتابة قبل نضج عضلات أصابعه.",
        "sourceReference": "شروط التعلم (1: النضج)، ص 11"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q12",
        "type": "multiple_choice",
        "order": 12,
        "prompt": "يرجع الكتاب تساؤل كثير من الأبناء «لماذا نتعلم؟ ولماذا نذهب إلى المدرسة؟» إلى محورين هما:",
        "options": [
          {
            "id": "opt-a",
            "text": "إشباع حاجاتهم الأساسية تماماً، وأداء المعلمين عملهم بشكل روتيني يبعث على الملل"
          },
          {
            "id": "opt-b",
            "text": "ضعف الثواب المادي، وكثرة الواجبات المنزلية"
          },
          {
            "id": "opt-c",
            "text": "ازدحام الفصول الدراسية، وقلة الوسائل التعليمية"
          },
          {
            "id": "opt-d",
            "text": "غياب الأهداف المكتوبة، وضعف الرقابة الأسرية"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "نص الكتاب على أن مبعث هذه الأسئلة محوران: أن حاجاتهم الأساسية مشبعة تماماً، وأن المعلمين يؤدون عملهم بشكل روتيني ممل.",
        "sourceReference": "شروط التعلم (2: الدافعية)، ص 12"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-philosophical-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q13",
        "type": "multiple_choice",
        "order": 13,
        "prompt": "تُعرَّف «الأسس الفلسفية للمنهج» في الكتاب بأنها:",
        "options": [
          {
            "id": "opt-a",
            "text": "الأطر الفكرية التي يقوم عليها المنهج وتعكس خصوصية مجتمع ما في زمن ما"
          },
          {
            "id": "opt-b",
            "text": "المبادئ النفسية التي توصلت إليها البحوث حول المتعلم والتعلم"
          },
          {
            "id": "opt-c",
            "text": "المفاهيم والتعميمات التي تمثل بنية المعرفة في كل مجال"
          },
          {
            "id": "opt-d",
            "text": "الإمكانات المادية والبشرية المتاحة في المؤسسات التعليمية"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "تتمثل هذه الأطر الفكرية في عقيدة المجتمع وتراثه وحقوق أفراده وواجباتهم، وفق ما ورد في تعريف الكتاب.",
        "sourceReference": "مفهوم الأسس الفلسفية للمنهج، ص 14"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-philosophical-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q14",
        "type": "multiple_choice",
        "order": 14,
        "prompt": "يشبّه الكتاب العلاقة بين الفلسفة والتربية بالعلاقة بين العلم والتقانة؛ ومن ثَمّ يكون دور التربية:",
        "options": [
          {
            "id": "opt-a",
            "text": "وضع المبادئ والمسلَّمات التي تقوم عليها الفلسفة"
          },
          {
            "id": "opt-b",
            "text": "الاستقلال التام عن الفلسفات السائدة في المجتمع"
          },
          {
            "id": "opt-c",
            "text": "تطبيق مبادئ الفلسفة على واقع العمل التربوي"
          },
          {
            "id": "opt-d",
            "text": "نقد الفلسفة السائدة دون الأخذ بمبادئها"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "الفلسفة تضع المبادئ كما يضع العلم النظرية، والتربية تطبق هذه المبادئ كما تطبق التقانة النظرية، وهذا التطبيق هو ما يُسمى فلسفة التربية.",
        "sourceReference": "علاقة الفلسفة بالتربية، ص 14"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-philosophical-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q15",
        "type": "multiple_choice",
        "order": 15,
        "prompt": "وفق الكتاب، رأت الفلسفة الطبيعية أن الطبيعة مصدر العلوم، ولذلك وجَّهت التربية إلى:",
        "options": [
          {
            "id": "opt-a",
            "text": "الاهتمام بالعقل وإعلاء شأنه والتركيز على الجانب المعرفي"
          },
          {
            "id": "opt-b",
            "text": "جعل الأطفال يحتكّون بالطبيعة ليكتسبوا منها المعرفة"
          },
          {
            "id": "opt-c",
            "text": "منح الأفراد الحرية وتعزيز القيم الديمقراطية"
          },
          {
            "id": "opt-d",
            "text": "نقل التراث الإنساني من جيل إلى جيل"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "الخيار الأول يمثل توجيه الفلسفة المثالية، والثالث توجيه الفلسفة البرجماتية، والرابع صفة الاتجاه التقليدي (المادة الدراسية).",
        "sourceReference": "علاقة الفلسفة بالتربية (نظرة الفلسفات إلى الإنسان)، ص 14"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-traditional-philosophies-idealism",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q16",
        "type": "multiple_choice",
        "order": 16,
        "prompt": "ترى الفلسفة المثالية، بحسب الكتاب، أن العالم الحقيقي الأزلي هو:",
        "options": [
          {
            "id": "opt-a",
            "text": "العالم المادي المتمثل في الطبيعة المدركة بالحواس"
          },
          {
            "id": "opt-b",
            "text": "العالم المؤقت الذي يتغير بتغير الظروف والأشخاص"
          },
          {
            "id": "opt-c",
            "text": "الخبرة الحسية المباشرة للمتعلم"
          },
          {
            "id": "opt-d",
            "text": "العالم غير المادي الذي لا يُدرَك بالحواس"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "قسّمت المثالية العالم إلى غير مادي (الحقيقي الأزلي) ومادي (المؤقت المشوَّه أو الزائف)، ومن ثم عدّت البحث عن الحقيقة في العالم المادي سذاجة.",
        "sourceReference": "الفلسفة المثالية – مبادئ الفلسفة المثالية، ص 15"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-traditional-philosophies-idealism",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q17",
        "type": "multiple_choice",
        "order": 17,
        "prompt": "من الطرائق الثلاث التي ذكرها أفلاطون لاسترجاع العقل للمعلومات، تقوم «طريقة سقراط» على:",
        "options": [
          {
            "id": "opt-a",
            "text": "المثير الحسي الذي يُسترجع به المعلومات عن طريق الصدفة"
          },
          {
            "id": "opt-b",
            "text": "التأمل الذي يصل به العقل إلى مرتبة اللاشعور"
          },
          {
            "id": "opt-c",
            "text": "المحاولة والخطأ حتى تتحقق النتيجة المرغوبة"
          },
          {
            "id": "opt-d",
            "text": "معلم ماهر يوجّه إلى التلاميذ أسئلة عميقة متلاحقة ذات فائدة ومغزى"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "الطريقة الأولى هي المثير الحسي بالصدفة، والثانية طريقة سقراط بالأسئلة المتلاحقة، والثالثة التأمل. ومن عيوب طريقة سقراط أن المعرفة التي يقدمها المعلم هي ما يعرفه هو نفسه.",
        "sourceReference": "الفلسفة المثالية (منهج أفلاطون في كتاب «الجمهورية»)، ص 15"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-traditional-philosophies-idealism",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q18",
        "type": "multiple_choice",
        "order": 18,
        "prompt": "الطرائق التي دعا المثاليون إلى استخدامها في التدريس هي الطرائق القائمة على:",
        "options": [
          {
            "id": "opt-a",
            "text": "المحاضرة والتلقين"
          },
          {
            "id": "opt-b",
            "text": "حل المشكلات والاستكشاف"
          },
          {
            "id": "opt-c",
            "text": "المشروعات والأنشطة الجماعية"
          },
          {
            "id": "opt-d",
            "text": "التعلم الذاتي باستخدام الحاسب الآلي"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "نص الكتاب على أن طرائق التدريس التي دعا إليها المثاليون هي الطرائق القائمة على المحاضرة والتلقين.",
        "sourceReference": "الفلسفة المثالية (طرائق التدريس)، ص 16"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q19",
        "type": "multiple_choice",
        "order": 19,
        "prompt": "في الرأي الذي يفرّق بين المصطلحين، تبحث «نظرية المعرفة» (Epistemology) في:",
        "options": [
          {
            "id": "opt-a",
            "text": "نوع خاص من المعارف هو المعرفة العلمية، ومجالها العلم"
          },
          {
            "id": "opt-b",
            "text": "مصادر المعرفة الدينية دون غيرها من المصادر"
          },
          {
            "id": "opt-c",
            "text": "طبيعة المعرفة ومصادرها وحدودها والعلاقة بين الفرد المُدرِك والموضوع المُدرَك، ومجالها الفلسفة"
          },
          {
            "id": "opt-d",
            "text": "طرائق تدريس المعارف داخل قاعة الصف"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "الخيار الأول يصف «المعرفة» بمعناها العلمي، التي تهتم بنوع خاص من المعارف ومجالها العلم، بينما تبحث نظرية المعرفة في طبيعتها ومصادرها وحدودها.",
        "sourceReference": "الأسس المعرفية – مفهوم المعرفة، ص 18"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q20",
        "type": "multiple_choice",
        "order": 20,
        "prompt": "بعد عرض اتجاهَي «المعرفة فطرية» و«المعرفة مكتسبة»، يرى الكتاب أن الكفة تميل إلى:",
        "options": [
          {
            "id": "opt-a",
            "text": "الاتجاه القائل إن المعرفة مولودة مع الإنسان، لأن ظهورها رهن بتحفيزها وحده"
          },
          {
            "id": "opt-b",
            "text": "الاتجاه القائل إن المعرفة مكتسبة، لانسجامه مع توجهات التربية الحديثة الداعية إلى نشاط المتعلم"
          },
          {
            "id": "opt-c",
            "text": "الاتجاه القائل إن المعرفة موضوعية خارجية لا علاقة للإنسان بها"
          },
          {
            "id": "opt-d",
            "text": "الاتجاه القائل إن ظواهر الأشياء لا تنبئ بالمعرفة الحق"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "علّل الكتاب ذلك بأن اكتساب العلوم والمعارف يتوقف على نشاط الإنسان وخبرته المباشرة وإعمال حواسه وعقله، وهو ما ينسجم مع التربية الحديثة.",
        "sourceReference": "طبيعة المعرفة والمنهج (من حيث وصولها إلى الإنسان)، ص 19"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q21",
        "type": "multiple_choice",
        "order": 21,
        "prompt": "يرى أصحاب الاتجاه الثالث في موضوعية المعرفة وذاتيتها (وهم من رجال العلوم السلوكية) أن المعرفة:",
        "options": [
          {
            "id": "opt-a",
            "text": "موضوعية خارجية تأتي الإنسان من الخارج فيخزنها في عقله"
          },
          {
            "id": "opt-b",
            "text": "مزيج بين الموضوعية والذاتية؛ فالبيئة مصدرها والإنسان يضيف إليها من ذاته"
          },
          {
            "id": "opt-c",
            "text": "ذاتية من صنع الإنسان نفسه فهو منتج لها لا مستقبِل"
          },
          {
            "id": "opt-d",
            "text": "مطلقة لا تتأثر بالبيئة ولا بالإنسان"
          }
        ],
        "correctOptionId": "opt-b",
        "explanation": "الاتجاه الأول (علماء العلوم والرياضيات) يراها موضوعية، والثاني (رجال الفن والأدب) يراها ذاتية، والثالث السلوكي يجمع بينهما ويجعل الإنسان مسؤولاً عن تشكيل بنيته المعرفية.",
        "sourceReference": "طبيعة المعرفة والمنهج (موضوعيتها وذاتيتها)، ص 19"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q22",
        "type": "multiple_choice",
        "order": 22,
        "prompt": "من الفروق التي يذكرها الكتاب بين «الحدس» و«الإلهام»:",
        "options": [
          {
            "id": "opt-a",
            "text": "الإلهام يشترك فيه مختلف الأفراد، بينما يتفرد بالحدس الأتقياء من العباد"
          },
          {
            "id": "opt-b",
            "text": "الحدس معرفة استدلالية تقوم على مقدمات منطقية، بينما الإلهام معرفة حسية"
          },
          {
            "id": "opt-c",
            "text": "الحدس ينتج عن التجريب والملاحظة المنظمة، بينما ينتج الإلهام عن القراءة"
          },
          {
            "id": "opt-d",
            "text": "الحدس يشترك فيه مختلف الأفراد، بينما ينبلج الإلهام عن الصفاء الروحي ويتفرد به الأتقياء من العباد"
          }
        ],
        "correctOptionId": "opt-d",
        "explanation": "عدّ الكتاب الحدس والإلهام معرفتين ذاتيتين باطنيتين سريعتين كومضة الضوء، لكنه ميّز بينهما بأن الحدس عام بين الأفراد، والإلهام خاص بالأتقياء.",
        "sourceReference": "مصادر المعرفة والمنهج (الحدس والإلهام)، ص 19–20"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-structure-organization",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q23",
        "type": "multiple_choice",
        "order": 23,
        "prompt": "عند تصنيف المعارف بحسب موضوعها، تضم «العلوم الاجتماعية» وفق الكتاب:",
        "options": [
          {
            "id": "opt-a",
            "text": "التاريخ والجغرافيا وعلم الاجتماع وعلم الاقتصاد وعلم النفس"
          },
          {
            "id": "opt-b",
            "text": "اللغات والفنون الجميلة"
          },
          {
            "id": "opt-c",
            "text": "علم الحيوان وعلم النبات والفيزياء والكيمياء والجيولوجيا"
          },
          {
            "id": "opt-d",
            "text": "الحساب والجبر والهندسة والإحصاء"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "الخيار الثاني يمثل العلوم الإنسانية، والثالث العلوم الطبيعية، والرابع العلوم الرياضية.",
        "sourceReference": "تنظيم بنية المعرفة والمنهج (النوع الأول: بحسب الموضوع)، ص 20"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-structure-organization",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q24",
        "type": "multiple_choice",
        "order": 24,
        "prompt": "يضرب الكتاب المثال «مساحة المربع = الضلع × الضلع» على:",
        "options": [
          {
            "id": "opt-a",
            "text": "الحقائق"
          },
          {
            "id": "opt-b",
            "text": "المفاهيم"
          },
          {
            "id": "opt-c",
            "text": "القوانين (ضمن التعميمات)"
          },
          {
            "id": "opt-d",
            "text": "النظريات"
          }
        ],
        "correctOptionId": "opt-c",
        "explanation": "تشمل التعميمات القواعد والمبادئ والقوانين والنظريات؛ ومثال القانون مساحة المربع، أما النظرية فمثالها مربع وتر المثلث، وأما القاعدة فمثالها «العدد واحد قاسم مشترك لكل الأعداد».",
        "sourceReference": "تنظيم بنية المعرفة (النوع الثاني: درجة التجريد – التعميمات)، ص 20"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-structure-organization",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q25",
        "type": "multiple_choice",
        "order": 25,
        "prompt": "بسبب التفجّر المعرفي وتدفق الحقائق الذي لا يمكن إحصاؤه، يؤكد الكتاب أن على المنهج المعاصر التركيز على:",
        "options": [
          {
            "id": "opt-a",
            "text": "المستويات الأكثر تجريداً من الحقائق، أي المفاهيم والتعميمات (أساسيات المعرفة عند برونر)"
          },
          {
            "id": "opt-b",
            "text": "الحقائق المفردة لأنها أسهل في التدريس"
          },
          {
            "id": "opt-c",
            "text": "إحصاء الحقائق وتدريسها كلها"
          },
          {
            "id": "opt-d",
            "text": "المصادر والمراجع دون أساسيات المعرفة"
          }
        ],
        "correctOptionId": "opt-a",
        "explanation": "لا يمكن لأي منهج استيعاب سيل الحقائق، لذلك يُركَّز على المفاهيم والتعميمات مع إكساب المتعلمين أساليب البحث العلمي، ليعودوا إلى المصادر ويكتشفوا البنية التكاملية للمعرفة.",
        "sourceReference": "تنظيم بنية المعرفة والمنهج (ما ينبغي أن يراعيه المنهج)، ص 21"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-psychological-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q26",
        "type": "true_false",
        "order": 26,
        "prompt": "يوضح الكتاب أن الإنسان اجتماعي بطبيعته لأن له خصائص يتفرد بها عن غيره وتميزه في سلوكه وطريقة تفكيره.",
        "correctAnswer": false,
        "explanation": "الخصائص التي يتفرد بها الإنسان تجعله «فردياً»، أما كونه «اجتماعياً» فلأنه يحتاج بطبيعته إلى أن ينمو في وسط اجتماعي يتعايش معه ويتكيف معه.",
        "sourceReference": "طبيعة المتعلم، ص 8"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-psychological-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q27",
        "type": "true_false",
        "order": 27,
        "prompt": "من الحاجات النفسية التي ذكرها الكتاب: الحاجة إلى الطمأنينة، والحب المتبادل، وتقدير الآخرين، والحرية، والثراء المادي، والنجاح.",
        "correctAnswer": false,
        "explanation": "الحاجة المذكورة في الكتاب هي «الحاجة إلى سلطة ضابطة موجِّهة»، أما «الثراء المادي» فلم يرد ضمن الحاجات التي عدّدها.",
        "sourceReference": "طبيعة المتعلم (الحاجات النفسية)، ص 8"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-human-growth-issues",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q28",
        "type": "true_false",
        "order": 28,
        "prompt": "ينص الكتاب على أن النمو عملية شاملة متكاملة، وأن العلاقة بين جوانبه العقلية والجسمية والاجتماعية قائمة على الاستقلال التام بحيث لا يؤثر جانب في آخر.",
        "correctAnswer": false,
        "explanation": "قرر الكتاب أن العلاقة بين الجوانب تقوم على التفاعل؛ فكل جانب يؤثر في الجوانب الأخرى ويتأثر بها.",
        "sourceReference": "خصائص النمو (5: النمو عملية شاملة متكاملة)، ص 9"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-human-growth-issues",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q29",
        "type": "true_false",
        "order": 29,
        "prompt": "يرى الكتاب أن الطفولة مرحلة النمو الأساسية، ولذلك ينبغي أن يركز منهج المرحلة الابتدائية، ومنهج الصفوف الأولى منها خاصة، على تكوين الاتجاهات والقيم والأنماط السلوكية المرغوب فيها.",
        "correctAnswer": true,
        "explanation": "هذه هي علاقة المنهج بمبدأ «الطفولة تمثل مرحلة النمو الأساسية» كما ورد نصاً في الكتاب.",
        "sourceReference": "خصائص النمو (6: الطفولة مرحلة النمو الأساسية)، ص 9"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-human-growth-issues",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q30",
        "type": "true_false",
        "order": 30,
        "prompt": "من المسؤوليات الملقاة على واضعي المنهج إزاء مشكلات النمو إجراء فحوص طبية دورية لاكتشاف الطلبة ذوي القصور في حاستي السمع والبصر، بالتعاون مع أطباء الصحة المدرسية.",
        "correctAnswer": true,
        "explanation": "ورد هذا الإجراء ضمن المسؤوليات المتمثلة في اكتشاف مشكلات النمو والتعامل معها بأسلوب علمي وإنساني.",
        "sourceReference": "مشكلات النمو وعلاقتها بالمنهج، ص 9"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q31",
        "type": "true_false",
        "order": 31,
        "prompt": "قد يسلك الفرد طريقاً منحرفاً لإشباع حاجاته، أو يتعرض لاضطراب نفسي، إذا لم تُشبَع حاجاته بالطريقة المقبولة اجتماعياً.",
        "correctAnswer": true,
        "explanation": "نص الكتاب على أن عدم الإشباع بالطريقة المقبولة اجتماعياً قد ينجم عنه مشكلات كثيرة وحالات من الفشل الاجتماعي.",
        "sourceReference": "العلاقة بين المنهج وحاجات المتعلمين، ص 10"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q32",
        "type": "true_false",
        "order": 32,
        "prompt": "تظل ميول التلاميذ واتجاهاتهم ثابتة ولا تتغير بتقدم الفرد في النمو والنضج، ولذلك لا يحتاج المنهج إلى العمل على تنميتها.",
        "correctAnswer": false,
        "explanation": "قرر الكتاب أن الميول والاتجاهات تتغير كلما تقدم الفرد في النمو والنضج، وأنه لا بد من تنمية الصالح منها بما يتفق مع قدرات الفرد واستعداداته.",
        "sourceReference": "المنهج وعادات التلاميذ واتجاهاتهم وميولهم، ص 10"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q33",
        "type": "true_false",
        "order": 33,
        "prompt": "يؤكد الكتاب أنه يمكن لتلميذ الصف الثاني الابتدائي أن يدرك بسهولة أن الأرض كروية وتدور حول الشمس إذا شرح له المعلم ذلك جيداً.",
        "correctAnswer": false,
        "explanation": "ذكر الكتاب أن التلميذ في هذه المرحلة العقلية لا يدرك إلا ما يحسه بحواسه، فيصعب عليه إدراك مثل هذه المعلومات؛ إذ لا تعلُّم بدون النضج العقلي والجسمي اللازم.",
        "sourceReference": "شروط التعلم (1: النضج – المثال على النضج العقلي)، ص 11"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q34",
        "type": "true_false",
        "order": 34,
        "prompt": "يذكر الكتاب أن الإسراف في العقاب قد يؤدي إلى شعور المتعلم بالنقص.",
        "correctAnswer": true,
        "explanation": "ورد ذلك في حديثه عن «الثواب والعقاب» بوصفه من أشكال الدافعية.",
        "sourceReference": "شروط التعلم (2: الدافعية – الثواب والعقاب)، ص 12"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q35",
        "type": "true_false",
        "order": 35,
        "prompt": "بحسب الكتاب، يستطيع التلميذ أن يتعلم الطرح بمجرد الاستماع إلى شرح المعلم، دون حاجة إلى أن يُجري العمليات بنفسه.",
        "correctAnswer": false,
        "explanation": "قرر الكتاب أن التلميذ لا بد أن يجري بنفسه عدة عمليات ويستمر في ممارسة حل مسائل الطرح حتى يكتسب المهارة، وكذلك السباح لا يتعلم بمشاهدة غيره.",
        "sourceReference": "شروط التعلم (3: الممارسة)، ص 12"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-learner-needs-learning-teaching",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q36",
        "type": "true_false",
        "order": 36,
        "prompt": "يعرّف الكتاب التعليم بأنه جعل الآخر يتعلم بمساعدته على التعلم، وصولاً إلى تحقيق الأهداف التربوية المطلوبة.",
        "correctAnswer": true,
        "explanation": "هذا هو نص تعريف التعليم في الكتاب، وتشمل العملية التعليمية إثارة القوى العقلية للمتعلم ودوافعه وتحفيزه وتوفير الإمكانات والبيئة اللازمة للتعلم.",
        "sourceReference": "ثالثاً: طبيعة التعليم وأطرافه وأنواعه، ص 12–13"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-philosophical-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q37",
        "type": "true_false",
        "order": 37,
        "prompt": "عند تصميم المنهاج التربوي تُستخلص الفلسفة التربوية من فلسفة المجتمع، وتعمل هذه الفلسفة على تحديد السياسة التربوية، ومن ثم تحديد الأهداف التربوية.",
        "correctAnswer": true,
        "explanation": "هذا التسلسل (فلسفة المجتمع ← الفلسفة التربوية ← السياسة التربوية ← الأهداف التربوية) ورد صراحة في عرض الأساس الفلسفي.",
        "sourceReference": "الأساس الفلسفي، ص 13"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-philosophical-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "direct_recall",
      "question": {
        "id": "ch2-draft-q38",
        "type": "true_false",
        "order": 38,
        "prompt": "تعني الفلسفة في أصل وضعها اليوناني «حب الحكمة»، ويعد فيثاغورس أول من وضع هذا المعنى للفلسفة.",
        "correctAnswer": true,
        "explanation": "ذكر الكتاب أن فيثاغورس جمع كلمتي Sophia (الحكمة) وPhilo (محبة) فصارتا Philo Sophia أي حب الحكمة.",
        "sourceReference": "مفهوم الفلسفة، ص 13"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-philosophical-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q39",
        "type": "true_false",
        "order": 39,
        "prompt": "يركّز الاتجاه التقدمي في الفلسفات التربوية على المادة الدراسية (المعرفة) ويدعو إلى نقل التراث الإنساني من جيل إلى جيل.",
        "correctAnswer": false,
        "explanation": "هذه سمة الاتجاه التقليدي (اتجاه المادة الدراسية)، أما الاتجاه التقدمي فيركز على المتعلم واهتماماته.",
        "sourceReference": "اتجاهات الفلسفات التربوية، ص 14"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-traditional-philosophies-idealism",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q40",
        "type": "true_false",
        "order": 40,
        "prompt": "ذكر الكتاب أن الهدف النهائي من تعلّم الفلك في المنهج المثالي لأفلاطون هو الإفادة منه في الملاحة ومعرفة الزمن.",
        "correctAnswer": false,
        "explanation": "الهدف النهائي من تعلم الفلك التأمل في حركة الأجرام السماوية وانسجامها، وليس الإفادة منه في الملاحة أو معرفة الزمن.",
        "sourceReference": "الفلسفة المثالية (العلوم التي ركزت عليها المناهج المثالية: الفلك)، ص 15"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-traditional-philosophies-idealism",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q41",
        "type": "true_false",
        "order": 41,
        "prompt": "أعطى المثاليون رياضة البدن اهتماماً لافتاً، لكنهم لا يقصدون بها إلا خدمة العقل والروح، إذ لا يزدهران في ظل جسم عليل.",
        "correctAnswer": true,
        "explanation": "ورد في الكتاب أن العناية بالجسم يجب أن تكون ليكون خليقاً بالعقل والروح اللذين ينضويان في إهابه.",
        "sourceReference": "الفلسفة المثالية (الاهتمام برياضة البدن)، ص 16"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-curriculum-arab-society-problems",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q42",
        "type": "true_false",
        "order": 42,
        "prompt": "من المشكلات التربوية التي أوردها الكتاب أن المعلومات النظرية ما زالت هي الطاغية، وأن كثيراً من المدارس العربية تفتقر إلى المختبرات التي تمكّن الطلبة من الحصول على الخبرة المربية.",
        "correctAnswer": true,
        "explanation": "عبّر الكتاب عن ذلك بـ«عدم إيلاء الأنشطة العملية ما تستحقه من اهتمام».",
        "sourceReference": "المشكلات التربوية التي يمكن تلخيصها بما يأتي، ص 16"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-curriculum-arab-society-problems",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q43",
        "type": "true_false",
        "order": 43,
        "prompt": "عند إتاحة المجال للناشئة للإسهام في حل مشكلات المجتمع العربي، ينبّه الكتاب إلى أن دورهم هو مساعدة صاحب القرار وليس أخذ دوره.",
        "correctAnswer": true,
        "explanation": "نص الكتاب على أن يتم ذلك بأسلوب علمي يبدأ بتحديد المشكلة وجمع المعلومات ووضع الفروض واختبارها، مع التنبيه إلى حدود دور الناشئة.",
        "sourceReference": "المنهج ومشكلات المجتمع العربي، ص 17"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q44",
        "type": "true_false",
        "order": 44,
        "prompt": "منذ عقد الستينيات من القرن العشرين أخذ التربويون يولون المعرفة جلّ اهتمامهم، بعد أن كانوا يركزون على المتعلم ومبادئ تعلمه والمجتمع وفلسفته وثقافته.",
        "correctAnswer": true,
        "explanation": "ربط الكتاب هذا التحول بتحدي تزايد حجم المعارف والمعلومات وبالثورة العلمية والتكنولوجية، فأصبحت المعرفة أساساً مهماً في تخطيط المناهج الحديثة.",
        "sourceReference": "مفهوم الأسس المعرفية للمنهج، ص 17–18"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q45",
        "type": "true_false",
        "order": 45,
        "prompt": "يستدل أصحاب الاتجاه القائل بأن المعرفة مولودة مع الإنسان بأنه يدرك بفطرته بعض البدهيات، مثل أن الكل أكبر من الجزء.",
        "correctAnswer": true,
        "explanation": "ذكر الكتاب هذا ضمن أدلة أصحاب الاتجاه الأول (المعرفة فطرية) في وصول المعرفة إلى الإنسان.",
        "sourceReference": "طبيعة المعرفة والمنهج (من حيث وصولها إلى الإنسان)، ص 18"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q46",
        "type": "true_false",
        "order": 46,
        "prompt": "يعد العقل المصدر الأبرز من مصادر المعرفة الإنسانية، أما الوحي فمصدر ثانوي.",
        "correctAnswer": false,
        "explanation": "وصف الكتاب الوحي بأنه المصدر الأبرز من مصادر المعرفة الإنسانية، وعدّ العقل من المصادر الرئيسة الأخرى.",
        "sourceReference": "مصادر المعرفة والمنهج (الوحي)، ص 19"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q47",
        "type": "true_false",
        "order": 47,
        "prompt": "يقصد بالعقل بوصفه مصدراً للمعرفة عمليات التفكير التي يقوم بها الفرد بعد تلقيه المؤثرات الصادرة من الحواس، كالتذكر والفهم والاستنتاج والتحليل والتصنيف والقياس والتقويم.",
        "correctAnswer": true,
        "explanation": "هذا هو المقصود بالعقل في عرض الكتاب لمصادر المعرفة، والمعرفة الحق تعتمد بدرجة كبيرة على استثمار القدرات العقلية للفرد.",
        "sourceReference": "مصادر المعرفة والمنهج (العقل)، ص 19"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-foundation",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q48",
        "type": "true_false",
        "order": 48,
        "prompt": "لا يُعدّ التراث الثقافي العالمي (المعرفة التي أنتجتها شعوب العالم الأخرى) مصدراً من مصادر المعرفة، وإنما يقتصر المصدر الثقافي على التراث الوطني.",
        "correctAnswer": false,
        "explanation": "عدّ الكتاب التراث الثقافي العالمي مصدراً غنياً للمعرفة، وأن إنجازات الشعوب السابقة واللاحقة يمكن أن تكون مصدراً لمعارفنا.",
        "sourceReference": "مصادر المعرفة والمنهج (التراث الثقافي العالمي)، ص 20"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-structure-organization",
      "approvalStatus": "approved",
      "cognitiveLevel": "comprehension",
      "question": {
        "id": "ch2-draft-q49",
        "type": "true_false",
        "order": 49,
        "prompt": "تمثل الحقائق أعلى درجات تنظيم المعارف وفق درجة تجريدها، ويسهل إحصاؤها لقلة عددها.",
        "correctAnswer": false,
        "explanation": "الحقائق هي أدنى درجات هذا المستوى، وتدل على معارف بسيطة محسوسة غالباً، ويصعب إحصاؤها لكثرتها.",
        "sourceReference": "تنظيم بنية المعرفة والمنهج (النوع الثاني: الحقائق)، ص 20"
      }
    },
    {
      "courseId": "course-1",
      "chapterId": "chap-curriculum-foundations",
      "topicId": "top-ch2-knowledge-structure-organization",
      "approvalStatus": "approved",
      "cognitiveLevel": "applied_analysis",
      "question": {
        "id": "ch2-draft-q50",
        "type": "true_false",
        "order": 50,
        "prompt": "من التوجهات العالمية المعاصرة التي ينبغي لواضعي المنهج مراعاتها: جعل معيار التفوق حفظ المعلومات واسترجاعها بدلاً من امتلاك المهارات واستخدامها.",
        "correctAnswer": false,
        "explanation": "التوجه الوارد في الكتاب هو العكس: جعل معيار التفوق امتلاك المهارات واستخدامها بدلاً من حفظ المعلومات واسترجاعها.",
        "sourceReference": "تنظيم بنية المعرفة والمنهج (التوجهات العالمية المعاصرة)، ص 21"
      }
    }
  ]
};
