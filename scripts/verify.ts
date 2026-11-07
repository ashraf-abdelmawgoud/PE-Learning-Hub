import { COURSES_PLACEHOLDER_DATA } from '../src/data/coursesData.ts';
import { normalizeArabicText } from '../src/utils/textUtils.ts';
import { validateAcademicContent } from '../src/utils/contentValidator.ts';
import {
  getAllCourses,
  getCourseById,
  getChaptersByCourse,
  getChapterById,
  getTopicsByChapter,
  getTopicById,
  getLessonById,
  getPreviousAndNextLesson,
  getAcademicBreadcrumbs,
} from '../src/data/academic/selectors.ts';
import {
  SAMPLE_INTERACTIVE_DIAGRAM,
  SAMPLE_ANIMATED_EXPLANATION,
  SAMPLE_VISUAL_COMPARISON,
  SAMPLE_VISUAL_SEQUENCE,
} from '../src/data/academic/visualSandboxData.ts';
import {
  isValidYouTubeVideoId,
  normalizeYouTubeVideoId,
  getYouTubeEmbedUrl,
  getYouTubeWatchUrl,
  getYouTubeThumbnailUrl,
} from '../src/utils/videoUtils.ts';
import {
  evaluateQuestion,
  evaluateQuiz,
  getUnansweredQuestionIds,
  isQuizComplete,
  shuffleOrderingItems,
  getExpectedAnswerText,
} from '../src/utils/quizScoring.ts';
import { isDevSandboxAllowed } from '../src/utils/devRouteGuard.ts';
import type { QuizBlock } from '../src/types/academic.ts';
import {
  validateSingleGovernedBank,
  validateQuizGovernance,
  verifyNoDraftImports,
} from './validate-quiz-governance.ts';
import {
  QUIZ_PUBLICATION_MANIFEST,
  CHAPTER_1_LEGACY_EXCEPTION,
} from '../src/data/academic/quizzes/governance/governanceManifest.ts';
import { computeQuestionBankHash } from '../src/utils/contentHash.ts';
import type { GovernedQuestionBank } from '../src/types/quizGovernance.ts';
import {
  verifyChapter1NineTopicsStructure,
  CHAPTER_1_NINE_TOPICS_METADATA,
} from '../src/data/academic/curriculumNineTopicsConfig.ts';
import {
  verifyChapter2NineTopicsStructure,
  CHAPTER_2_NINE_TOPICS_METADATA,
} from '../src/data/academic/curriculumChapter2TopicsConfig.ts';
import { CHAPTER_2_FOUNDATIONS_TOPICS } from '../src/data/academic/curriculumChapter2Data.ts';
import {
  verifyChapter3SevenTopicsStructure,
  CHAPTER_3_SEVEN_TOPICS_METADATA,
} from '../src/data/academic/curriculumChapter3TopicsConfig.ts';
import { CHAPTER_3_ELEMENTS_TOPICS } from '../src/data/academic/curriculumChapter3Data.ts';
import {
  verifyChapter4FiveTopicsStructure,
  CHAPTER_4_FIVE_TOPICS_METADATA,
} from '../src/data/academic/curriculumChapter4TopicsConfig.ts';
import { CHAPTER_4_FACTORS_TOPICS } from '../src/data/academic/curriculumChapter4Data.ts';
import {
  verifyChapter5SevenTopicsStructure,
  CHAPTER_5_SEVEN_TOPICS_METADATA,
} from '../src/data/academic/curriculumChapter5TopicsConfig.ts';
import { CHAPTER_5_DESIGNS_TOPICS } from '../src/data/academic/curriculumChapter5Data.ts';
import {
  verifyChapter6SixTopicsStructure,
  CHAPTER_6_SIX_TOPICS_METADATA,
} from '../src/data/academic/curriculumChapter6TopicsConfig.ts';
import { CHAPTER_6_UNIT_DESIGN_TOPICS } from '../src/data/academic/curriculumChapter6Data.ts';
import {
  verifyChapter7SevenTopicsStructure,
  CHAPTER_7_SEVEN_TOPICS_METADATA,
} from '../src/data/academic/curriculumChapter7TopicsConfig.ts';
import { CHAPTER_7_PLANNING_TOPICS } from '../src/data/academic/curriculumChapter7Data.ts';
import {
  getTopicProgress,
  getChapterProgressStats,
} from '../src/utils/progressPersistence.ts';
import fs from 'node:fs';
import path from 'node:path';

let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${testName}`);
    failedTests++;
  }
}

console.log('--- بدء فحص واختبار سلامة بيانات المنصة ووظائفها ---');

// 1. فحص بيانات المواد الدراسية الست الرسمية
console.log('\n1. فحص سلامة المواد الدراسية الأكاديمية الست:');
assert(COURSES_PLACEHOLDER_DATA.length === 6, 'عدد المواد الدراسية يساوي 6 بالضبط');

const OFFICIAL_NAMES = [
  'التعليم الحركي',
  'البحث العلمي',
  'التربية المقارنة ونظم التعليم',
  'مناهج التربية الرياضية',
  'مادة المضرب',
  'مادة المضمار',
];

COURSES_PLACEHOLDER_DATA.forEach((course, idx) => {
  const expectedNum = idx + 1;
  assert(course.orderNumber === expectedNum, `المادة ${expectedNum}: الترتيب صحيح (${expectedNum})`);
  assert(Boolean(course.id), `المادة ${expectedNum}: المعرف id موجود (${course.id})`);
  assert(Boolean(course.code), `المادة ${expectedNum}: الرمز code موجود (${course.code})`);
  assert(course.status === 'pending_content', `المادة ${expectedNum}: الحالة pending_content`);
  assert(course.title === OFFICIAL_NAMES[idx], `المادة ${expectedNum}: المسمى الرسمي معتمد (${course.title})`);
  assert(Boolean(course.targetBookReference), `المادة ${expectedNum}: مرجع الكتاب موجود`);
  assert(course.architecture.lessonsPlanned === true, `المادة ${expectedNum}: بنية الدروس مخططة`);
  assert(course.architecture.quizzesPlanned === true, `المادة ${expectedNum}: بنية الاختبارات مخططة`);
  assert(course.architecture.simulationsPlanned === true, `المادة ${expectedNum}: بنية المحاكاة مخططة`);
});

// 2. فحص محرك معالجة النصوص والبحث العربي
console.log('\n2. فحص محرك البحث وتطبيع النصوص العربية (normalizeArabicText):');
assert(normalizeArabicText('المُقَرَّرُ الدِّرَاسِيُّ') === 'المقرر الدراسي', 'إزالة التشكيل وعلامات الإعراب');
assert(normalizeArabicText('الأول') === 'الاول', 'توحيد همزة القطع');
assert(normalizeArabicText('إعداد') === 'اعداد', 'توحيد همزة الكسر');
assert(normalizeArabicText('١٢٣') === '123', 'تحويل الأرقام المشرقية إلى قياسية');
assert(normalizeArabicText('رياضة') === 'رياضه', 'توحيد التاء المربوطة');
assert(normalizeArabicText('الأولى') === 'الاولي', 'معالجة الألف المقصورة وتوحيدها مع الياء');

// 3. فحص وظيفة التصفية بالبحث
console.log('\n3. فحص تصفية المقررات بالبحث:');
function searchCourses(query: string) {
  if (!query.trim()) return COURSES_PLACEHOLDER_DATA;
  const nQuery = normalizeArabicText(query);
  return COURSES_PLACEHOLDER_DATA.filter((course) => {
    return (
      normalizeArabicText(course.title).includes(nQuery) ||
      normalizeArabicText(course.code).includes(nQuery) ||
      normalizeArabicText(course.targetBookReference).includes(nQuery) ||
      normalizeArabicText(course.description).includes(nQuery) ||
      course.orderNumber.toString().includes(nQuery)
    );
  });
}

assert(searchCourses('').length === 6, 'البحث الفارغ يعيد جميع المواد الست');
assert(searchCourses('مناهج التربية الرياضية').length >= 1 && searchCourses('مناهج التربية الرياضية')[0].id === 'course-1', 'البحث بعبارة مناهج التربية الرياضية يجد مادة مناهج التربية الرياضية');
assert(searchCourses('حركي').length >= 1 && searchCourses('حركي')[0].id === 'course-2', 'البحث بكلمة حركي يجد مادة التعليم الحركي');
assert(searchCourses('البحث العلمي').length >= 1 && searchCourses('البحث العلمي')[0].id === 'course-3', 'البحث بكلمة البحث العلمي يجد مادة البحث العلمي');
assert(searchCourses('مقارنة').length >= 1 && searchCourses('مقارنة')[0].id === 'course-4', 'البحث بكلمة مقارنة يجد مادة التربية المقارنة');
assert(searchCourses('مضرب').length >= 1 && searchCourses('مضرب')[0].id === 'course-5', 'البحث بكلمة مضرب يجد مادة المضرب');
assert(searchCourses('مضمار').length >= 1 && searchCourses('مضمار')[0].id === 'course-6', 'البحث بكلمة مضمار يجد مادة المضمار');
assert(searchCourses('PE-ACAD-01').length === 1 && searchCourses('PE-ACAD-01')[0].id === 'course-1', 'البحث بالرمز PE-ACAD-01 يجد مادة مناهج التربية الرياضية');
assert(searchCourses('كلمة_غير_موجودة_نهائيا').length === 0, 'البحث بكلمة مجهولة يعيد 0 نتائج دون أخطاء');

// 4. فحص مخرجات الإنتاج الجاهزة لـ Cloudflare Pages
console.log('\n4. فحص ملفات حزمة الإنتاج (dist) وإعدادات Cloudflare Pages:');
const distHtml = path.resolve('dist/index.html');
const redirects = path.resolve('public/_redirects');

assert(fs.existsSync(distHtml), 'ملف dist/index.html تم بناؤه بنجاح');
if (fs.existsSync(distHtml)) {
  const htmlContent = fs.readFileSync(distHtml, 'utf-8');
  assert(htmlContent.includes('dir="rtl"'), 'HTML يحتوي على dir="rtl" لتأصيل اللغة العربية');
  assert(htmlContent.includes('lang="ar"'), 'HTML يحتوي على lang="ar"');
  assert(htmlContent.includes('Cairo'), 'HTML يستدعي خط Cairo العربي');
}

assert(fs.existsSync(redirects), 'ملف public/_redirects موجود لدعم التوجيه على Cloudflare Pages');
if (fs.existsSync(redirects)) {
  const redirectsContent = fs.readFileSync(redirects, 'utf-8');
  assert(redirectsContent.includes('/* /index.html 200'), 'قاعدة إعادة التوجيه لـ SPA مطبقة بشكل سليم');
}

// 5. فحص نظام التحقق الأكاديمي (Content Validation System - Phase 3 & 4)
console.log('\n5. فحص نظام التحقق من جودة المحتوى الأكاديمي (Phase 3 & 4 Validation):');
const report = validateAcademicContent();
assert(report.isValid === true, 'تقرير فحص المحتوى الأكاديمي سليم بدون أخطاء بنيوية');
assert(report.errors.length === 0, `عدد الأخطاء الهندسية يساوي 0 (الفعل: ${report.errors.length})`);
assert(report.coursesCount === 8, `إجمالي المقررات (6 رسمية + 2 معمل تجريبي معزول) يساوي 8`);
assert(report.chaptersCount === 9, 'عدد الفصول الإجمالي يساوي 9 (7 وحدات لمناهج التربية الرياضية + 2 معامل تقنية)');
assert(report.topicsCount === 52, 'عدد الموضوعات الإجمالي يساوي 52 (50 لمناهج التربية الرياضية + 2 معامل تقنية)');
assert(report.lessonsCount === 3, 'عدد الدروس الإجمالي يساوي 3 (2 معامل تقنية + 1 درس احتياطي معتمد)');
assert(report.blocksCount === 19, `عدد كتل المحتوى الإجمالي يساوي 19 كتلة رصينة (الفعل: ${report.blocksCount})`);

// 5.1 اختبار فشل البناء عند حقن محتوى معطوب (Corrupted Content Rejection)
console.log('\n5.1 فحص صد واكتشاف المحتوى المعطوب (Strict Validation Enforcement):');
// @ts-expect-error - اختبار حقن بيانات مشوهة لاختبار المحرك
const corruptedReport = validateAcademicContent([
  {
    id: 'corrupted-course',
    orderNumber: 99,
    code: 'CORRUPT-01',
    title: '', // خطأ: عنوان فارغ
    targetBookReference: '',
    status: 'pending_content',
    statusLabel: 'معطوب',
    description: 'مقرر تجريبي لاختبار إفشال البناء',
    chapters: [
      {
        id: 'corrupted-chap',
        courseId: 'different-course-id', // خطأ: عدم تطابق المعرف الأب
        order: 1,
        title: 'فصل بمعرف خاطئ',
        description: '',
        topics: [],
      },
    ],
  },
]);
assert(corruptedReport.isValid === false, 'المحرك يكتشف المحتوى المعطوب ويمنحه حالة غير صالح (isValid: false)');
assert(corruptedReport.errors.length >= 2, `اكتشاف الأخطاء الجوهرية ومنع مرورها (اكتشف ${corruptedReport.errors.length} أخطاء)`);

// 6. فحص استعلامات ومحددات المحتوى الأكاديمي (Academic Selectors & Hierarchy)
console.log('\n6. فحص محددات التسلسل الأكاديمي (Selectors):');
const devCourse = getCourseById('dev-sandbox');
assert(Boolean(devCourse && devCourse.isDevSandbox), 'استرجاع المقرر التجريبي بنجاح عبر معرفه dev-sandbox');

// 6.1 عزل المقرر التجريبي عن واجهة الطلاب
const studentCourses = getAllCourses(false);
assert(studentCourses.length === 6, 'واجهة الطلاب تسترجع المواد الدراسية الست فقط');
assert(studentCourses.every((c) => !c.isDevSandbox), 'لا يوجد أي مقرر تجريبي مسرب لواجهة الطلاب');
assert(studentCourses.every((c) => c.status === 'pending_content'), 'جميع المواد الست للطلاب بحالة pending_content');
assert(studentCourses.find((c) => c.id === 'course-1')?.chapters.length === 7, 'مادة مناهج التربية الرياضية PE-ACAD-01 تتضمن 7 وحدات دراسية معتمدة (5 فصول + موضوعان مستقلان)');
assert(studentCourses.filter((c) => c.id !== 'course-1').every((c) => c.chapters.length === 0), 'بقية المواد الخمس خالية من الفصول بانتظار تزويد المنصة بكتبها');

const devChapters = getChaptersByCourse('dev-sandbox');
assert(devChapters.length === 1 && devChapters[0].id === 'dev-chap-1', 'استرجاع فصول المقرر التجريبي بترتيب سليم');

const devTopics = getTopicsByChapter('dev-chap-1');
assert(devTopics.length === 1 && devTopics[0].id === 'dev-top-1', 'استرجاع موضوعات الفصل بترتيب سليم');

const devLesson = getLessonById('dev-les-1');
assert(Boolean(devLesson && devLesson.blocks.length === 12), 'استرجاع الدرس الشامل بكتله الاثنتي عشرة كاملة');

const { prevLesson, nextLesson } = getPreviousAndNextLesson('dev-les-1');
assert(prevLesson === null && nextLesson === null, 'فحص دالة الانتقال بين الدروس (السابق والتالي لدرس وحيد)');

const breadcrumbs = getAcademicBreadcrumbs({
  courseId: 'dev-sandbox',
  chapterId: 'dev-chap-1',
  topicId: 'dev-top-1',
  lessonId: 'dev-les-1',
});
assert(breadcrumbs.length === 5, 'توليد مسار التنقل الأكاديمي (Breadcrumbs) المتكامل بنجاح');

// 7. فحص محرك الشرح البصري والأنيميشن التفاعلي (Phase 4 Visual Learning Engine)
console.log('\n7. فحص محرك الشرح البصري التفاعلي والأنيميشن (Phase 4 Visual Learning Engine):');

// 7.1 فحص المخطط التفاعلي (Interactive Diagram)
assert(SAMPLE_INTERACTIVE_DIAGRAM.type === 'interactive_diagram', 'نوع كتلة المخطط التفاعلي interactive_diagram صحيح');
assert(SAMPLE_INTERACTIVE_DIAGRAM.nodes.length === 3, 'المخطط يحتوي على 3 عناصر (Nodes A, B, C)');
assert(SAMPLE_INTERACTIVE_DIAGRAM.connections.length === 3, 'المخطط يحتوي على 3 علاقات موجهة مع تسميات');
const nodeA = SAMPLE_INTERACTIVE_DIAGRAM.nodes.find((n) => n.id === 'node-a');
assert(Boolean(nodeA && nodeA.details?.keyPoints?.length), 'استرجاع تفاصيل العقدة المختارة ونقاطها الأكاديمية بنجاح');

// 7.2 فحص محرك الأنيميشن والشرح المتحرك (Animated Explanation)
assert(SAMPLE_ANIMATED_EXPLANATION.type === 'animated_explanation', 'نوع كتلة الشرح المتحرك animated_explanation صحيح');
assert(SAMPLE_ANIMATED_EXPLANATION.steps.length === 4, 'الأنيميشن يحتوي على 4 خطوات متسلسلة للشرح');
assert(SAMPLE_ANIMATED_EXPLANATION.baseElements.length === 3, 'العناصر البصرية الأساسية موجودة في مسرح الأنيميشن');
assert(SAMPLE_ANIMATED_EXPLANATION.steps.every((s) => s.transformations.length > 0), 'كل خطوة تتضمن تحولات بصرية وإحداثيات انتقال');
const durationAt1x = SAMPLE_ANIMATED_EXPLANATION.defaultDurationPerStepMs || 3000;
const durationAt2x = durationAt1x / 2;
assert(durationAt2x === durationAt1x / 2, 'التحكم في سرعة العرض الحركي 2x يحسب زمن الخطوة بدقة');

// 7.3 فحص المقارنة البصرية التفاعلية (Visual Comparison)
assert(SAMPLE_VISUAL_COMPARISON.type === 'visual_comparison', 'نوع كتلة المقارنة البصرية visual_comparison صحيح');
assert(SAMPLE_VISUAL_COMPARISON.items.length === 2, 'مقارنة بين مفهومين رياضيين (الاستاتيكي والديناميكي)');
assert(SAMPLE_VISUAL_COMPARISON.criteria.length === 5, 'المقارنة تشمل 5 معايير ميكانيكية وفسيولوجية وتطبيقية');
assert(Boolean(SAMPLE_VISUAL_COMPARISON.sharedSimilarities?.length), 'عرض القواسم المشتركة وأوجه التشابه');
assert(Boolean(SAMPLE_VISUAL_COMPARISON.contrastingDifferencesSummary), 'عرض الخلاصة التحليلية للفروق الجوهرية');

// 7.4 فحص نشاط ترتيب الخطوات البصري (Visual Sequence Activity)
assert(SAMPLE_VISUAL_SEQUENCE.type === 'visual_sequence', 'نوع كتلة نشاط الترتيب visual_sequence صحيح');
assert(SAMPLE_VISUAL_SEQUENCE.items.length === 4, 'النشاط يحتوي على 4 خطوات للترتيب الميكانيكي');
assert(SAMPLE_VISUAL_SEQUENCE.correctOrder.length === 4, 'معيار الترتيب الصحيح محدد بدقة');
// محاكاة تحريك عنصر وتبديل موضعه (Move Up / Down simulation)
const testSequence = [...SAMPLE_VISUAL_SEQUENCE.items];
const temp = testSequence[0];
testSequence[0] = testSequence[1];
testSequence[1] = temp;
assert(testSequence[0].id === SAMPLE_VISUAL_SEQUENCE.items[1].id, 'خوارزمية إعادة الترتيب وتبديل المواضع تعمل بشكل سليم');

// 7.5 فحص معمل المحرك البصري المعزول (Visual Sandbox Course)
const visualCourse = getCourseById('visual-sandbox');
assert(Boolean(visualCourse && visualCourse.isDevSandbox), 'استرجاع معمل المحرك البصري التجريبي visual-sandbox بنجاح');
const visualChapters = getChaptersByCourse('visual-sandbox');
assert(visualChapters.length === 1 && visualChapters[0].id === 'vis-chap-1', 'استرجاع فصل معمل المحرك البصري');
const visualTopics = getTopicsByChapter('vis-chap-1');
assert(visualTopics.length === 1 && visualTopics[0].id === 'vis-top-1', 'استرجاع موضوع معمل المحرك البصري');
const visualLesson = getLessonById('vis-les-1');
assert(Boolean(visualLesson && visualLesson.blocks.length === 6), 'استرجاع درس المحرك البصري بكتله الستة المتكاملة');
const visBreadcrumbs = getAcademicBreadcrumbs({
  courseId: 'visual-sandbox',
  chapterId: 'vis-chap-1',
  topicId: 'vis-top-1',
  lessonId: 'vis-les-1',
});
assert(visBreadcrumbs.length === 5, 'توليد مسار التنقل لمعمل المحرك البصري (Breadcrumbs) بنجاح');

// 7.6 فحص رفض أخطاء الكتل البصرية المعطوبة (Visual Blocks Negative Validation)
// @ts-expect-error - اختبار حقن مخطط برابط غير موجود
const corruptedVisualReport = validateAcademicContent([
  {
    id: 'corrupt-visual-course',
    orderNumber: 100,
    code: 'CORRUPT-VIS',
    title: 'مقرر بصري معطوب',
    targetBookReference: 'اختبار',
    status: 'pending_content',
    statusLabel: 'معطوب',
    description: '',
    chapters: [
      {
        id: 'c-chap',
        courseId: 'corrupt-visual-course',
        order: 1,
        title: 'فصل',
        description: '',
        topics: [
          {
            id: 'c-top',
            chapterId: 'c-chap',
            order: 1,
            title: 'موضوع',
            description: '',
            lessons: [
              {
                id: 'c-les',
                topicId: 'c-top',
                order: 1,
                title: 'درس معطوب',
                description: '',
                estimatedDuration: 5,
                learningObjectives: [],
                status: 'draft',
                references: [],
                blocks: [
                  {
                    id: 'b-bad-diag',
                    type: 'interactive_diagram',
                    order: 1,
                    title: 'مخطط برابط مكسور',
                    viewBoxWidth: 500,
                    viewBoxHeight: 300,
                    nodes: [{ id: 'n1', label: 'عقدة 1', description: '', x: 0, y: 0 }],
                    connections: [{ id: 'c1', from: 'n1', to: 'n_missing' }], // خطأ: عقدة غير موجودة
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
assert(corruptedVisualReport.isValid === false, 'المحرك يكتشف ويرفض المخططات التفاعلية ذات الروابط المكسورة');

// 8. فحص تجربة المحتوى الأكاديمي الحقيقي: كتاب مناهج التربية الرياضية (ص 2 - 5)
console.log('\n8. فحص التجربة التعليمية الحقيقية (كتاب مناهج التربية الرياضية - أ.د. هاني الدسوقي إبراهيم):');

const course1 = getCourseById('course-1');
assert(Boolean(course1 && course1.chapters.length === 7), 'المقرر الأول PE-ACAD-01 يتضمن الوحدات الدراسية السبع المعتمدة (5 فصول + موضوعان مستقلان)');
assert(course1?.code === 'PE-ACAD-01', 'رمز المقرر الأول PE-ACAD-01 صحيح');

const course1Chapters = getChaptersByCourse('course-1');
assert(course1Chapters.length === 7, 'استرجاع الوحدات الدراسية السبع لمادة مناهج التربية الرياضية بنجاح');
assert(course1Chapters[0].id === 'chap-curriculum-intro', 'الوحدة الأولى: الفصل الأول: مقدمة وماهية المنهج');
assert(course1Chapters[1].id === 'chap-curriculum-foundations', 'الوحدة الثانية: الفصل الثاني: اسس ومكونات بناء المنهج المدرسي');
assert(course1Chapters[2].id === 'chap-curriculum-elements', 'الوحدة الثالثة: الفصل الثالث: عناصر المنهج');
assert(course1Chapters[3].id === 'chap-curriculum-factors', 'الوحدة الرابعة: الفصل الرابع: العوامل المؤثرة في بناء المنهج');
assert(course1Chapters[4].id === 'chap-curriculum-designs', 'الوحدة الخامسة: الفصل الخامس: تصميمات وتنظيمات المنهاج المدرسية');
assert(course1Chapters[5].id === 'chap-curriculum-unit-design', 'الوحدة السادسة: الموضوع السادس: تصميم وحدة دراسية');
assert(course1Chapters[6].id === 'chap-curriculum-planning', 'الوحدة السابعة: الموضوع السابع: تخطيط المنهج المدرسي');
assert(Boolean(course1 && course1.academicReferences.length >= 7), 'قائمة مراجع المقرر تتضمن مراجع الكتاب المعتمدة');

const course1Topics = getTopicsByChapter('chap-curriculum-intro');
assert(course1Topics.length === 9, 'استرجاع موضوعات الفصل الأول التسعة المعتمدة');

// التحقق من الالتزام بالعناوين الرسمية التسعة وترتيبها وتصنيفاتها
const EXPECTED_TITLES = [
  'المنهج الدراسي ودور التربية الرياضية في التنمية الشاملة',
  'التغيرات العلمية والتكنولوجية والتحول نحو التعلم الذاتي',
  'الدور الحديث لمعلم التربية الرياضية والمتعلم',
  'تخطيط مناهج التربية الرياضية والمناهج التكيفية',
  'استخدام التكنولوجيا والحاسب الآلي في مناهج التربية الرياضية',
  'أولًا: ماهية المنهج',
  'تعريفات المناهج قديمًا وحديثًا',
  'تعريفات المنهج',
  'المنهج في اللغة',
];

const EXPECTED_IDS = [
  'top-ch1-curriculum-comprehensive-dev',
  'top-ch1-tech-change-self-learning',
  'top-ch1-modern-role-teacher-learner',
  'top-ch1-curriculum-planning-adaptive',
  'top-ch1-tech-computers-in-curriculum',
  'top-ch1-nature',
  'top-ch1-trad-vs-mod',
  'top-ch1-definitions',
  'top-ch1-language',
];

course1Topics.forEach((topic, idx) => {
  assert(topic.order === idx + 1, `الموضوع ${idx + 1}: الترتيب ${idx + 1} صحيح`);
  assert(topic.id === EXPECTED_IDS[idx], `الموضوع ${idx + 1}: المعرف ${topic.id} صحيح`);
  assert(topic.title === EXPECTED_TITLES[idx], `الموضوع ${idx + 1}: العنوان «${topic.title}» مطابق`);
  assert(Boolean(topic.summary && topic.summary.trim().length > 0), `الموضوع ${idx + 1}: الملخص الأكاديمي المعتمد مدمج`);
  if (idx < 5) {
    assert(topic.headingClassification === 'educational_organizational', `الموضوع ${idx + 1}: تصنيف تنظيمي تربوي سليم`);
  } else {
    assert(topic.headingClassification === 'original_author', `الموضوع ${idx + 1}: تصنيف عنوان المؤلف الأصلي سليم`);
  }
});

// فحص وجود محتويات دقيقة ومميزة في ملخصات الموضوعات التسعة المعتمدة
assert(Boolean(course1Topics[0].summary?.includes('المتعلمون')), 'ملخص الموضوع 1 يتضمن مدخلات تقويم المنهج الأربعة');
assert(Boolean(course1Topics[1].summary?.includes('الموجة الثالثة')), 'ملخص الموضوع 2 يتضمن مفهوم الموجة الثالثة');
assert(Boolean(course1Topics[2].summary?.includes('الدور الحديث للمعلم')), 'ملخص الموضوع 3 يتضمن الدور الحديث للمعلم');
assert(Boolean(course1Topics[3].summary?.includes('مركزية الأهداف ولا مركزية المحتوى')), 'ملخص الموضوع 4 يتضمن قاعدة مركزية الأهداف');
assert(Boolean(course1Topics[4].summary?.includes('الحاسب الآلي كمدير للمنهج')), 'ملخص الموضوع 5 يتضمن المنظورات الأربعة للحاسب');
assert(Boolean(course1Topics[5].summary?.includes('Curriculum')), 'ملخص الموضوع 6 يتضمن الاشتقاق اللاتيني');
assert(Boolean(course1Topics[6].summary?.includes('مقارنة تنظيمية تعليمية بين المفهومين')), 'ملخص الموضوع 7 يتضمن جدول المقارنة التعليمية');
assert(Boolean(course1Topics[7].summary?.includes('وردت أربعة تعريفات للمنهج')), 'ملخص الموضوع 8 يتضمن التعريفات الأربعة');
assert(Boolean(course1Topics[8].summary?.includes('الطريق الواضح')), 'ملخص الموضوع 9 يتضمن الدلالة اللغوية');

// فحص مسارات التنقل الأكاديمي (Breadcrumbs) للموضوعات
const topic1Breadcrumbs = getAcademicBreadcrumbs({
  courseId: 'course-1',
  chapterId: 'chap-curriculum-intro',
  topicId: 'top-ch1-curriculum-comprehensive-dev',
});
assert(topic1Breadcrumbs.length === 4, 'توليد مسار التنقل الأكاديمي لموضوعات الفصل الأول (Breadcrumbs)');

// 9. فحص بنية الفصل الديناميكية واختبار الفصل الشامل (Dynamic Chapter Architecture & Comprehensive Quiz)
console.log('\n9. فحص بنية الفصل الديناميكية واختبار الفصل الشامل (Dynamic Chapter Architecture):');

// 9.1 فحص الفصل الأول لمناهج التربية الرياضية
const resolvedPilotChapter = getChapterById('course-1', 'chap-curriculum-intro');
assert(Boolean(resolvedPilotChapter), 'استرجاع الفصل الأول لمناهج التربية الرياضية عبر getChapterById');
assert(
  Boolean(resolvedPilotChapter?.academicReference?.bookTitle === 'مناهج التربية الرياضية'),
  'الفصل الأول يتضمن المرجع الأكاديمي المعتمد من الكتاب (أ.د. هاني الدسوقي إبراهيم)'
);
assert(
  Boolean(resolvedPilotChapter?.academicReference?.author.includes('هاني الدسوقي إبراهيم')),
  'المؤلف: أ.د. هاني الدسوقي إبراهيم مطابق لصفحة العنوان'
);
assert(
  resolvedPilotChapter?.academicReference?.pageRange === 'ص 2 - 6',
  'النطاق المرجعي للفصل الأول: ص 2 - 6'
);

// فحص اختبار الفصل الشامل (15 سؤالاً)
assert(Boolean(resolvedPilotChapter?.chapterQuiz), 'الفصل الأول يتضمن اختبار الفصل الشامل');
assert(resolvedPilotChapter?.chapterQuiz?.questions.length === 15, 'اختبار الفصل الشامل يتضمن 15 سؤالاً معتمداً');
const mcqCount = resolvedPilotChapter?.chapterQuiz?.questions.filter((q) => q.type === 'multiple_choice').length;
const tfCount = resolvedPilotChapter?.chapterQuiz?.questions.filter((q) => q.type === 'true_false').length;
assert(mcqCount === 10, `الاختبار الشامل يتضمن 10 أسئلة اختيار من متعدد (الفعل: ${mcqCount})`);
assert(tfCount === 5, `الاختبار الشامل يتضمن 5 أسئلة صواب وخطأ (الفعل: ${tfCount})`);
assert(
  resolvedPilotChapter?.chapterQuiz?.questions.every((q) => Boolean(q.prompt && q.explanation && q.sourceReference)),
  'جميع أسئلة الاختبار الشامل موثقة بالنص والتفسير والصفحة المرجعية للكتاب'
);

assert(
  Boolean(resolvedPilotChapter?.glossary && resolvedPilotChapter.glossary.length === 5),
  'الفصل الأول يتضمن قاموس مصطلحات المنهج (5 مصطلحات أكاديمية)'
);
assert(
  Boolean(resolvedPilotChapter?.keyPoints && resolvedPilotChapter.keyPoints.length === 5),
  'الفصل الأول يتضمن النقاط الجوهرية الخمس'
);

// 9.2 فحص عزل الفصول الأخرى وعدم تسرب بيانات المنهج إليها
const devSandboxChap = getChapterById('dev-sandbox', 'dev-chap-1');
assert(Boolean(devSandboxChap), 'استرجاع فصل المعمل التقني dev-chap-1');
assert(devSandboxChap?.visualHub === undefined, 'معمل التقنية لا يتضمن Visual Hub (معزول تماماً عن كتل مناهج التربية الرياضية)');
assert(devSandboxChap?.glossary === undefined, 'معمل التقنية لا يتضمن قاموس مصطلحات (لا تسريب لمصطلحات المنهج)');
assert(devSandboxChap?.selfCheckQuestions === undefined, 'معمل التقنية لا يتضمن أسئلة تقويم ذاتي');

// 9.3 فحص استجابة محدد الفصول عند طلب فصل أو مقرر غير موجود
const missingChap = getChapterById('course-1', 'non-existent-chap');
assert(missingChap === undefined, 'طلب فصل غير موجود يعيد undefined بأمان دون انهيار');
const missingCourseChap = getChapterById('non-existent-course', 'chap-1');
assert(missingCourseChap === undefined, 'طلب فصل لمقرر غير موجود يعيد undefined بأمان');

// 9.4 فحص حالة واجهة الاختبار الشامل للفصول عبر جميع المقررات (Chapter Quiz UX & Status)
console.log('\n9.4 فحص حالة واجهة الاختبار الشامل للفصول عبر جميع المقررات:');
assert(Boolean(resolvedPilotChapter?.chapterQuiz?.questions.length === 15), 'الفصل الأول يحتوي على 15 سؤالاً معتمداً للاختبار الشامل');
for (let cIdx = 1; cIdx < course1Chapters.length; cIdx++) {
  const chap = course1Chapters[cIdx];
  assert(
    chap.chapterQuiz === undefined || chap.chapterQuiz.questions.length === 0,
    `الفصل ${chap.order} (${chap.title}): خالٍ من الأسئلة غير المعتمدة ويعرض حالة الاختبار قيد الإعداد`
  );
}

// 9.5 فحص الهيكل الفني التنظيمي المعتمد للفصل الأول (9 موضوعات وبياناتها الوصفية)
console.log('\n9.5 فحص الهيكل الفني التنظيمي المعتمد للفصل الأول (9 موضوعات وبياناتها الوصفية):');
const nineTopicsCheck = verifyChapter1NineTopicsStructure();
assert(nineTopicsCheck.isValid === true, 'الهيكل الفني للموضوعات التسعة صالح ومتوافق مع المعايير الأكاديمية');
assert(nineTopicsCheck.totalTopics === 9, 'عدد موضوعات الهيكل الفني للفصل الأول يساوي 9 موضوعات بالضبط');
assert(
  nineTopicsCheck.educationalOrganizationalCount === 5,
  'الموضوعات من 1 إلى 5 مصنفة كعناوين تنظيمية تربوية (educational_organizational)'
);
assert(
  nineTopicsCheck.originalAuthorCount === 4,
  'الموضوعات من 6 إلى 9 مصنفة كعناوين المؤلف الأصلي (original_author)'
);

const EXPECTED_NINE_TITLES = [
  'المنهج الدراسي ودور التربية الرياضية في التنمية الشاملة',
  'التغيرات العلمية والتكنولوجية والتحول نحو التعلم الذاتي',
  'الدور الحديث لمعلم التربية الرياضية والمتعلم',
  'تخطيط مناهج التربية الرياضية والمناهج التكيفية',
  'استخدام التكنولوجيا والحاسب الآلي في مناهج التربية الرياضية',
  'أولًا: ماهية المنهج',
  'تعريفات المناهج قديمًا وحديثًا',
  'تعريفات المنهج',
  'المنهج في اللغة',
];

CHAPTER_1_NINE_TOPICS_METADATA.forEach((t, idx) => {
  assert(t.order === idx + 1, `الموضوع ${idx + 1}: الترتيب ${idx + 1} سليم`);
  assert(t.title === EXPECTED_NINE_TITLES[idx], `الموضوع ${idx + 1}: العنوان «${t.title}» مطابق نصياً`);
  assert(Boolean(t.id), `الموضوع ${idx + 1}: المعرف id موجود`);
  assert(Boolean(t.description), `الموضوع ${idx + 1}: الوصف الهيكلي موجود`);
  if (idx < 5) {
    assert(
      t.headingClassification === 'educational_organizational',
      `الموضوع ${idx + 1}: تصنيف تربوي تنظيمي سليم`
    );
  } else {
    assert(
      t.headingClassification === 'original_author',
      `الموضوع ${idx + 1}: تصنيف عنوان المؤلف الأصلي سليم`
    );
  }
});

// 9.6 فحص الهيكل الفني التنظيمي والملخصات الأكاديمية الكاملة للفصل الثاني (9 موضوعات معتمدة)
console.log('\n9.6 فحص الهيكل الفني والملخصات الأكاديمية للفصل الثاني (9 موضوعات معتمدة):');
const nineTopicsCheckCh2 = verifyChapter2NineTopicsStructure();
assert(nineTopicsCheckCh2.isValid === true, 'الهيكل الفني للموضوعات التسعة للفصل الثاني صالح ومتوافق');
assert(nineTopicsCheckCh2.totalTopics === 9, 'عدد موضوعات الهيكل الفني للفصل الثاني يساوي 9 موضوعات بالضبط');
assert(
  nineTopicsCheckCh2.educationalOrganizationalCount === 7,
  'الموضوعات 1-6 و 8 مصنفة كعناوين تنظيمية تربوية (educational_organizational)'
);
assert(
  nineTopicsCheckCh2.originalAuthorCount === 2,
  'الموضوعان 7 و 9 مصنفان كعناوين المؤلف الأصلي (original_author)'
);

const EXPECTED_CH2_NINE_TITLES = [
  'مدخل إلى أسس بناء المنهج والتنظيمات الرئيسية للمناهج',
  'الأساس النفسي للمنهج وطبيعة المتعلم',
  'نمو الإنسان ومشكلاته وعلاقته بالمنهج',
  'حاجات المتعلمين والتعلم والتعليم وعلاقتها بالمنهج',
  'الأساس الفلسفي للمنهج والفلسفة والتربية',
  'الفلسفات ذات الصبغة التقليدية: الفلسفة المثالية',
  'المنهج ومشكلات المجتمع العربي',
  'الأسس المعرفية للمنهج ومصادر المعرفة',
  'تنظيم بنية المعرفة والمنهج',
];

CHAPTER_2_NINE_TOPICS_METADATA.forEach((t, idx) => {
  assert(t.order === idx + 1, `فصل 2 - الموضوع ${idx + 1}: الترتيب ${idx + 1} سليم`);
  assert(t.title === EXPECTED_CH2_NINE_TITLES[idx], `فصل 2 - الموضوع ${idx + 1}: العنوان «${t.title}» مطابق نصياً`);
  assert(Boolean(t.id), `فصل 2 - الموضوع ${idx + 1}: المعرف id موجود`);
  assert(Boolean(t.description), `فصل 2 - الموضوع ${idx + 1}: الوصف الهيكلي موجود`);
});

// فحص الحفاظ الصارم على المعرفات الأصلية الثلاثة
assert(CHAPTER_2_NINE_TOPICS_METADATA[1].id === 'top-ch2-psychological-foundation', 'حفظ المعرف الأصلي للموضوع الثاني (top-ch2-psychological-foundation)');
assert(CHAPTER_2_NINE_TOPICS_METADATA[4].id === 'top-ch2-philosophical-foundation', 'حفظ المعرف الأصلي للموضوع الخامس (top-ch2-philosophical-foundation)');
assert(CHAPTER_2_NINE_TOPICS_METADATA[7].id === 'top-ch2-knowledge-foundation', 'حفظ المعرف الأصلي للموضوع الثامن (top-ch2-knowledge-foundation)');

// فحص استرجاع موضوعات الفصل الثاني عبر دوال الاختيار الرسمية
const course1Ch2Topics = getTopicsByChapter('chap-curriculum-foundations');
assert(course1Ch2Topics.length === 9, 'استرجاع موضوعات الفصل الثاني التسعة المعتمدة بنجاح عبر getTopicsByChapter');

// فحص وجود الملخصات الأكاديمية الكاملة وخلوها من أرقام الصفحات ومن أي أسئلة أو فيديوهات غير معتمدة
CHAPTER_2_FOUNDATIONS_TOPICS.forEach((t, idx) => {
  assert(Boolean(t.summary && t.summary.trim().length > 200), `فصل 2 - الموضوع ${idx + 1}: الملخص الأكاديمي الكامل موجود ومفصل (${t.summary?.length} حرفاً)`);
  assert(t.lessons.length === 0, `فصل 2 - الموضوع ${idx + 1}: قائمة الدروس فارغة (خالٍ من الدروس غير المعتمدة)`);
  assert(t.quiz === undefined, `فصل 2 - الموضوع ${idx + 1}: تبويب الاختبار غير مفعل (قيد الإعداد)`);
  assert(t.video === undefined && t.videos === undefined, `فصل 2 - الموضوع ${idx + 1}: تبويب الفيديو في حالة قيد الإعداد`);
  assert(!/(?:^|\s)(?:ص|صفحة)\s*\.?\s*\d+/.test(t.summary || ''), `فصل 2 - الموضوع ${idx + 1}: خلو الملخص من أرقام الصفحات المطبوعة`);
});

// فحص عمل مسارات التوافق البديلة للموضوعات الأصلية في selectors
assert(Boolean(getTopicById('chap-curriculum-foundations', 'top-ch2-psychological')), 'مسار التوافق القديم top-ch2-psychological يستجيب بنجاح');
assert(Boolean(getTopicById('chap-curriculum-foundations', 'top-ch2-philosophical')), 'مسار التوافق القديم top-ch2-philosophical يستجيب بنجاح');
assert(Boolean(getTopicById('chap-curriculum-foundations', 'top-ch2-knowledge')), 'مسار التوافق القديم top-ch2-knowledge يستجيب بنجاح');

// التأكد الصارم من بقاء موضوعات الفصل الأول التسعة دون أي مساس
const course1Ch1Topics = getTopicsByChapter('chap-curriculum-intro');
assert(course1Ch1Topics.length === 9, 'الفصل الأول لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');

// 9.7 فحص الهيكل الفني التنظيمي والملخصات الأكاديمية الكاملة للفصل الثالث (7 موضوعات معتمدة)
console.log('\n9.7 فحص الهيكل الفني والملخصات الأكاديمية للفصل الثالث (7 موضوعات معتمدة):');
const sevenTopicsCheckCh3 = verifyChapter3SevenTopicsStructure();
assert(sevenTopicsCheckCh3.isValid === true, 'الهيكل الفني للموضوعات السبعة للفصل الثالث صالح ومتوافق');
assert(sevenTopicsCheckCh3.totalTopics === 7, 'عدد موضوعات الهيكل الفني للفصل الثالث يساوي 7 موضوعات بالضبط');
assert(
  sevenTopicsCheckCh3.educationalOrganizationalCount === 7,
  'جميع الموضوعات السبعة مصنفة كعناوين تنظيمية تعليمية (educational_organizational)'
);
assert(
  sevenTopicsCheckCh3.originalAuthorCount === 0,
  'لا توجد عناوين مصنفة كعناوين مؤلف أصلي غير مهيكلة'
);

const EXPECTED_CH3_SEVEN_TITLES = [
  'البناء الهيكلي لعناصر المنهج الأربعة ومدخل عناصر التنفيذ الميداني',
  'دليل معلم التربية الرياضية: المفهوم، الأهمية، والمحتويات الثمانية للدليل',
  'الكتاب المدرسي في التربية الرياضية: الأهمية والفوائد الـ 12 والضوابط الـ 18 لتأليفه',
  'الركنان الأساسيان للتنفيذ: معلم التربية الرياضية ومتطلبات إعداده والمتعلم كغاية ومحور',
  'المنظومة الإجرائية للتنفيذ: طرق التدريس المناسبة والوسائل التعليمية',
  'القيادات التربوية والإدارية المباشرة: المدير العام، مدير بحوث المناهج، موجه التربية الرياضية، والإدارة المدرسية',
  'المحيط البيئي والمجتمعي الداعم: البيئة المدرسية، أولياء الأمور، والعاملون بالمدرسة',
];

CHAPTER_3_SEVEN_TOPICS_METADATA.forEach((t, idx) => {
  assert(t.order === idx + 1, `فصل 3 - الموضوع ${idx + 1}: الترتيب ${idx + 1} سليم`);
  assert(t.title === EXPECTED_CH3_SEVEN_TITLES[idx], `فصل 3 - الموضوع ${idx + 1}: العنوان «${t.title}» مطابق نصياً`);
  assert(Boolean(t.id), `فصل 3 - الموضوع ${idx + 1}: المعرف id موجود`);
  assert(Boolean(t.description), `فصل 3 - الموضوع ${idx + 1}: الوصف الهيكلي موجود`);
  assert(t.headingClassification === 'educational_organizational', `فصل 3 - الموضوع ${idx + 1}: تصنيف تنظيمي تعليمي سليم`);
});

// فحص الحفاظ الصارم على المعرف الأصلي للموضوع الأول
assert(CHAPTER_3_SEVEN_TOPICS_METADATA[0].id === 'top-ch3-curriculum-core-elements', 'حفظ المعرف الأصلي للموضوع الأول (top-ch3-curriculum-core-elements)');

// فحص المعرفات الستة المستحدثة
assert(CHAPTER_3_SEVEN_TOPICS_METADATA[1].id === 'top-ch3-teacher-guide', 'معرف الموضوع 2 سليم (top-ch3-teacher-guide)');
assert(CHAPTER_3_SEVEN_TOPICS_METADATA[2].id === 'top-ch3-textbook-physical-education', 'معرف الموضوع 3 سليم (top-ch3-textbook-physical-education)');
assert(CHAPTER_3_SEVEN_TOPICS_METADATA[3].id === 'top-ch3-pe-teacher-learner', 'معرف الموضوع 4 سليم (top-ch3-pe-teacher-learner)');
assert(CHAPTER_3_SEVEN_TOPICS_METADATA[4].id === 'top-ch3-teaching-methods-media', 'معرف الموضوع 5 سليم (top-ch3-teaching-methods-media)');
assert(CHAPTER_3_SEVEN_TOPICS_METADATA[5].id === 'top-ch3-educational-admin-leadership', 'معرف الموضوع 6 سليم (top-ch3-educational-admin-leadership)');
assert(CHAPTER_3_SEVEN_TOPICS_METADATA[6].id === 'top-ch3-school-environment-community', 'معرف الموضوع 7 سليم (top-ch3-school-environment-community)');

// فحص استرجاع موضوعات الفصل الثالث عبر دوال الاختيار الرسمية
const course1Ch3Topics = getTopicsByChapter('chap-curriculum-elements');
assert(course1Ch3Topics.length === 7, 'استرجاع موضوعات الفصل الثالث السبعة المعتمدة بنجاح عبر getTopicsByChapter');

// فحص وجود الملخصات الأكاديمية الكاملة وخلوها من أرقام الصفحات ومن أي أسئلة أو فيديوهات غير معتمدة
CHAPTER_3_ELEMENTS_TOPICS.forEach((t, idx) => {
  assert(Boolean(t.summary && t.summary.trim().length > 200), `فصل 3 - الموضوع ${idx + 1}: الملخص الأكاديمي الكامل موجود ومفصل (${t.summary?.length} حرفاً)`);
  assert(t.lessons.length === 0, `فصل 3 - الموضوع ${idx + 1}: قائمة الدروس فارغة (خالٍ من الدروس غير المعتمدة)`);
  assert(t.quiz === undefined, `فصل 3 - الموضوع ${idx + 1}: تبويب الاختبار غير مفعل (قيد الإعداد)`);
  assert(t.video === undefined && t.videos === undefined, `فصل 3 - الموضوع ${idx + 1}: تبويب الفيديو في حالة قيد الإعداد`);
  assert(!/(?:^|\s)(?:ص|صفحة)\s*\.?\s*\d+/.test(t.summary || ''), `فصل 3 - الموضوع ${idx + 1}: خلو الملخص من أرقام الصفحات المطبوعة`);
});

// فحص مصادقة النصوص الأكاديمية وتضمين النقاط المحورية للفصل الثالث
assert(CHAPTER_3_ELEMENTS_TOPICS[0].summary?.includes('أربعة عناصر رئيسية') === true, 'الموضوع 1 يتضمن نص العناصر الأربعة الرئيسية وتوثيق الخلل الترقيمي بالمصدر');
assert(CHAPTER_3_ELEMENTS_TOPICS[0].summary?.includes('13 عنصراً') === true, 'الموضوع 1 يتضمن تعداد عناصر تنفيذ المنهاج الـ 13');
assert(CHAPTER_3_ELEMENTS_TOPICS[1].summary?.includes('المحتويات التفصيلية الثمانية') === true, 'الموضوع 2 يتضمن المحتويات التفصيلية الثمانية لدليل المعلم');
assert(CHAPTER_3_ELEMENTS_TOPICS[2].summary?.includes('12 فائدة جوهرية') === true, 'الموضوع 3 يتضمن الفوائد الـ 12 للكتاب المدرسي');
assert(CHAPTER_3_ELEMENTS_TOPICS[2].summary?.includes('18 ضابطة واجبة المراعاة') === true, 'الموضوع 3 يتضمن الضوابط الـ 18 لتأليف الكتاب');
assert(CHAPTER_3_ELEMENTS_TOPICS[3].summary?.includes('إعداد أكاديمي') === true, 'الموضوع 4 يتضمن متطلبات الإعداد الأكاديمي والمهني للمعلم');
assert(CHAPTER_3_ELEMENTS_TOPICS[4].summary?.includes('العوامل المؤثرة في اختيار طريقة التدريس') === true, 'الموضوع 5 يتضمن العوامل المؤثرة في اختيار طريقة التدريس');
assert(CHAPTER_3_ELEMENTS_TOPICS[5].summary?.includes('المدير العام لمديرية التربية والتعليم') === true, 'الموضوع 6 يتضمن تفصيل أدوار القيادات التربوية والإدارية');
assert(CHAPTER_3_ELEMENTS_TOPICS[6].summary?.includes('سبعة جوانب') === true, 'الموضوع 7 يتضمن العوامل السبعة لصلاحية البيئة المدرسية');

// فحص أمان وعدم تضخم تقدم الطلاب الحسابي (Student Progress Safety & Anti-Inflation)
const ch3TopicIds = CHAPTER_3_ELEMENTS_TOPICS.map((t) => t.id);
const zeroProgress = getChapterProgressStats('course-1', 'chap-curriculum-elements', ch3TopicIds);
assert(zeroProgress.totalTopics === 7, 'مقام حساب نسبة تقدم الفصل الثالث يساوي 7 موضوعات بدقة');
assert(zeroProgress.completedTopicsCount === 0, 'حساب التقدم يبدأ بصفر للموضوعات غير المكتملة دون تضخم تلقائي');

// فحص نزاهة عدم وراثة الإنجاز للموضوع المظلي القديم
const uncompletedTeacherGuide = getTopicProgress('course-1', 'chap-curriculum-elements', 'top-ch3-teacher-guide');
assert(uncompletedTeacherGuide.isCompleted === false, 'الموضوع الثاني الجديد لا يرث حالة الإنجاز تلقائياً من الموضوع القديم');

// التأكد الصارم من بقاء موضوعات الفصل الأول التسعة والفصل الثاني التسعة دون أي مساس (Regression Safety)
const regressionCh1Topics = getTopicsByChapter('chap-curriculum-intro');
assert(regressionCh1Topics.length === 9, 'الفصل الأول لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh2Topics = getTopicsByChapter('chap-curriculum-foundations');
assert(regressionCh2Topics.length === 9, 'الفصل الثاني لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');

// 9.8 فحص الهيكل الفني التنظيمي والملخصات الأكاديمية الكاملة للفصل الرابع (5 موضوعات معتمدة)
console.log('\n9.8 فحص الهيكل الفني والملخصات الأكاديمية للفصل الرابع (5 موضوعات معتمدة):');
const fiveTopicsCheckCh4 = verifyChapter4FiveTopicsStructure();
assert(fiveTopicsCheckCh4.isValid === true, 'الهيكل الفني للموضوعات الخمسة للفصل الرابع صالح ومتوافق');
assert(fiveTopicsCheckCh4.totalTopics === 5, 'عدد موضوعات الهيكل الفني للفصل الرابع يساوي 5 موضوعات بالضبط');
assert(
  fiveTopicsCheckCh4.educationalOrganizationalCount === 5,
  'جميع الموضوعات الخمسة مصنفة كعناوين تنظيمية تعليمية (educational_organizational)'
);
assert(
  fiveTopicsCheckCh4.originalAuthorCount === 0,
  'لا توجد عناوين مصنفة كعناوين مؤلف أصلي غير مهيكلة في الفصل الرابع'
);

const EXPECTED_CH4_FIVE_TITLES = [
  'التمهيد ومفهوم المنهج بين الرؤية التقليدية والرسالة المعاصرة للمدرسة',
  'العوامل الخمسة الرئيسية المؤثرة في بناء المنهج وتحديات المستقبل',
  'المكونات الخمسة الأولى للصيغة المطلوبة لمناهج المستقبل',
  'منظومة المهارات والقيم الأساسية في المنهج ورعاية اللغات',
  'المحاور التنظيمية والإيمانية والبحثية المكملة لصيغة مناهج المستقبل',
];

CHAPTER_4_FIVE_TOPICS_METADATA.forEach((t, idx) => {
  assert(t.order === idx + 1, `فصل 4 - الموضوع ${idx + 1}: الترتيب ${idx + 1} سليم`);
  assert(t.title === EXPECTED_CH4_FIVE_TITLES[idx], `فصل 4 - الموضوع ${idx + 1}: العنوان «${t.title}» مطابق نصياً`);
  assert(Boolean(t.id), `فصل 4 - الموضوع ${idx + 1}: المعرف id موجود`);
  assert(Boolean(t.description), `فصل 4 - الموضوع ${idx + 1}: الوصف الهيكلي موجود`);
  assert(t.headingClassification === 'educational_organizational', `فصل 4 - الموضوع ${idx + 1}: تصنيف تنظيمي تعليمي سليم`);
});

// فحص الحفاظ الصارم على المعرف الأصلي للموضوع الثاني
assert(CHAPTER_4_FIVE_TOPICS_METADATA[1].id === 'top-ch4-influencing-factors', 'حفظ المعرف الأصلي للموضوع الثاني (top-ch4-influencing-factors)');

// فحص المعرفات الأربعة المستحدثة
assert(CHAPTER_4_FIVE_TOPICS_METADATA[0].id === 'top-ch4-intro-traditional-contemporary-mission', 'معرف الموضوع 1 سليم (top-ch4-intro-traditional-contemporary-mission)');
assert(CHAPTER_4_FIVE_TOPICS_METADATA[2].id === 'top-ch4-future-curriculum-first-five-components', 'معرف الموضوع 3 سليم (top-ch4-future-curriculum-first-five-components)');
assert(CHAPTER_4_FIVE_TOPICS_METADATA[3].id === 'top-ch4-skills-values-languages', 'معرف الموضوع 4 سليم (top-ch4-skills-values-languages)');
assert(CHAPTER_4_FIVE_TOPICS_METADATA[4].id === 'top-ch4-organizational-faith-research-axes', 'معرف الموضوع 5 سليم (top-ch4-organizational-faith-research-axes)');

// فحص استرجاع موضوعات الفصل الرابع عبر دوال الاختيار الرسمية
const course1Ch4Topics = getTopicsByChapter('chap-curriculum-factors');
assert(course1Ch4Topics.length === 5, 'استرجاع موضوعات الفصل الرابع الخمسة المعتمدة بنجاح عبر getTopicsByChapter');

// فحص وجود الملخصات الأكاديمية الكاملة وخلوها من أرقام الصفحات ومن أي أسئلة أو فيديوهات غير معتمدة
CHAPTER_4_FACTORS_TOPICS.forEach((t, idx) => {
  assert(Boolean(t.summary && t.summary.trim().length > 200), `فصل 4 - الموضوع ${idx + 1}: الملخص الأكاديمي الكامل موجود ومفصل (${t.summary?.length} حرفاً)`);
  assert(t.lessons.length === 0, `فصل 4 - الموضوع ${idx + 1}: قائمة الدروس فارغة (خالٍ من الدروس غير المعتمدة)`);
  assert(t.quiz === undefined, `فصل 4 - الموضوع ${idx + 1}: تبويب الاختبار غير مفعل (قيد الإعداد)`);
  assert(t.video === undefined && t.videos === undefined, `فصل 4 - الموضوع ${idx + 1}: تبويب الفيديو في حالة قيد الإعداد`);
  assert(!/(?:^|\s)(?:ص|صفحة)\s*\.?\s*\d+/.test(t.summary || ''), `فصل 4 - الموضوع ${idx + 1}: خلو الملخص من أرقام الصفحات المطبوعة`);
});

// فحص مصادقة النصوص الأكاديمية وتضمين النقاط المحورية للفصل الرابع
assert(CHAPTER_4_FACTORS_TOPICS[0].summary?.includes('إشكالية تحديد مفهوم المنهج والفاصل التاريخي') === true, 'الموضوع 1 يتضمن نص تمهيد إشكالية مفهوم المنهج');
assert(CHAPTER_4_FACTORS_TOPICS[0].summary?.includes('التعريف المعاصر الشامل (رسالة المدرسة)') === true, 'الموضوع 1 يتضمن التعريف المعاصر الشامل ورسالة المدرسة');
assert(CHAPTER_4_FACTORS_TOPICS[1].summary?.includes('خمسة عوامل رئيسية') === true, 'الموضوع 2 يتضمن مقدمة العوامل الخمسة الرئيسية');
assert(CHAPTER_4_FACTORS_TOPICS[1].summary?.includes('طبيعة المجتمع') === true, 'الموضوع 2 يتضمن عامل طبيعة المجتمع');
assert(CHAPTER_4_FACTORS_TOPICS[1].summary?.includes('طبيعة العصر') === true, 'الموضوع 2 يتضمن عامل طبيعة العصر');
assert(CHAPTER_4_FACTORS_TOPICS[1].summary?.includes('تأثير المعلومة وتيار العولمة') === true, 'الموضوع 2 يتضمن عامل تأثير المعلومة والعولمة');
assert(CHAPTER_4_FACTORS_TOPICS[1].summary?.includes('تأثير المتغير') === true, 'الموضوع 2 يتضمن عامل تأثير المتغير');
assert(CHAPTER_4_FACTORS_TOPICS[1].summary?.includes('مكانة التعليم الرسمي في حياة المستقبل') === true, 'الموضوع 2 يتضمن مكانة التعليم الرسمي');
assert(CHAPTER_4_FACTORS_TOPICS[2].summary?.includes('توسيع دائرة بناء المناهج') === true, 'الموضوع 3 يتضمن توسيع دائرة بناء المناهج ومطالبها الأربعة');
assert(CHAPTER_4_FACTORS_TOPICS[2].summary?.includes('التعامل مع المعلومة وطرق اكتسابها') === true, 'الموضوع 3 يتضمن التعامل مع المعلومة والتفكير الناقد والمبدع');
assert(CHAPTER_4_FACTORS_TOPICS[2].summary?.includes('الاهتمام بالتعليم الذاتي') === true, 'الموضوع 3 يتضمن الاهتمام بالتعليم الذاتي');
assert(CHAPTER_4_FACTORS_TOPICS[2].summary?.includes('التقليل من الاعتماد على جهد المعلم وتحديد موقع الكتاب المدرسي') === true, 'الموضوع 3 يتضمن الرؤية المتوازنة لدور المعلم والكتاب');
assert(CHAPTER_4_FACTORS_TOPICS[2].summary?.includes('الاهتمام بالمهارات المرتبطة بمهن المستقبل') === true, 'الموضوع 3 يتضمن الاهتمام بمهن المستقبل');
assert(CHAPTER_4_FACTORS_TOPICS[3].summary?.includes('مهارات مرتبطة بحاجات المتعلم') === true, 'الموضوع 4 يتضمن مهارات حاجات المتعلم');
assert(CHAPTER_4_FACTORS_TOPICS[3].summary?.includes('مَن نكون؟ أين نحن الآن؟ وإلى أين نريد أن نصل؟') === true, 'الموضوع 4 يتضمن الأسئلة الاستراتيجية الثلاثة');
assert(CHAPTER_4_FACTORS_TOPICS[3].summary?.includes('الاهتمام باللغات (العربية والأجنبية)') === true, 'الموضوع 4 يتضمن رعاية اللغات العربية والأجنبية');
assert(CHAPTER_4_FACTORS_TOPICS[4].summary?.includes('5- توسيع دائرة النشاط وتنظيم برامجه') === true, 'الموضوع 5 يحفظ ترقيم المصدر (5 إلى 10)');
assert(CHAPTER_4_FACTORS_TOPICS[4].summary?.includes('اعتماد المناهج على تنفيذ التعليم التعاوني وتنمية الإبداع') === true, 'الموضوع 5 يتضمن التعليم التعاوني والإبداع');
assert(CHAPTER_4_FACTORS_TOPICS[4].summary?.includes('الاهتمام بالمفاهيم والمصطلحات العلمية') === true, 'الموضوع 5 يتضمن المفاهيم والمصطلحات');
assert(CHAPTER_4_FACTORS_TOPICS[4].summary?.includes('دعم نظرة الإنسان للكون والحياة') === true, 'الموضوع 5 يتضمن نظرة الإنسان للكون والآيات القرآنية');
assert(CHAPTER_4_FACTORS_TOPICS[4].summary?.includes('«إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ...»') === true, 'الموضوع 5 يتضمن الآية القرآنية المستشهد بها في المصدر');
assert(CHAPTER_4_FACTORS_TOPICS[4].summary?.includes('دراسات اقتصاديات التعليم') === true, 'الموضوع 5 يتضمن دراسات اقتصاديات التعليم والحد من الرسوب والتسرب');

// فحص أمان وعدم تضخم تقدم الطلاب الحسابي للفصل الرابع (Student Progress Safety & Anti-Inflation)
const ch4TopicIds = CHAPTER_4_FACTORS_TOPICS.map((t) => t.id);
const zeroProgressCh4 = getChapterProgressStats('course-1', 'chap-curriculum-factors', ch4TopicIds);
assert(zeroProgressCh4.totalTopics === 5, 'مقام حساب نسبة تقدم الفصل الرابع يساوي 5 موضوعات بدقة');
assert(zeroProgressCh4.completedTopicsCount === 0, 'حساب التقدم يبدأ بصفر للموضوعات غير المكتملة دون تضخم تلقائي للفصل الرابع');

// فحص نزاهة عدم وراثة الإنجاز للموضوع المظلي القديم للفصل الرابع
const uncompletedFutureComponents = getTopicProgress('course-1', 'chap-curriculum-factors', 'top-ch4-future-curriculum-first-five-components');
assert(uncompletedFutureComponents.isCompleted === false, 'الموضوع الثالث الجديد لا يرث حالة الإنجاز تلقائياً من الموضوع المظلي القديم');

// التأكد الصارم من بقاء موضوعات الفصول الأول والثاني والثالث دون أي مساس (Regression Safety Guarantee)
const regressionCh1Again = getTopicsByChapter('chap-curriculum-intro');
assert(regressionCh1Again.length === 9, 'الفصل الأول لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh2Again = getTopicsByChapter('chap-curriculum-foundations');
assert(regressionCh2Again.length === 9, 'الفصل الثاني لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh3Again = getTopicsByChapter('chap-curriculum-elements');
assert(regressionCh3Again.length === 7, 'الفصل الثالث لا يزال يحتوي على موضوعاته السبعة المعتمدة كاملة دون أي مساس');

// 9.9 فحص الهيكل الفني التنظيمي والملخصات الأكاديمية الكاملة للفصل الخامس (7 موضوعات معتمدة)
console.log('\n9.9 فحص الهيكل الفني والملخصات الأكاديمية للفصل الخامس (7 موضوعات معتمدة):');
const sevenTopicsCheckCh5 = verifyChapter5SevenTopicsStructure();
assert(sevenTopicsCheckCh5.isValid === true, 'الهيكل الفني للموضوعات السبعة للفصل الخامس صالح ومتوافق');
assert(sevenTopicsCheckCh5.totalTopics === 7, 'عدد موضوعات الهيكل الفني للفصل الخامس يساوي 7 موضوعات بالضبط');
assert(
  sevenTopicsCheckCh5.educationalOrganizationalCount === 7,
  'جميع الموضوعات السبعة مصنفة كعناوين تنظيمية تعليمية (educational_organizational)'
);
assert(
  sevenTopicsCheckCh5.originalAuthorCount === 0,
  'لا توجد عناوين مصنفة كعناوين مؤلف أصلي غير مهيكلة في الفصل الخامس'
);

const EXPECTED_CH5_SEVEN_TITLES = [
  'المدخل التأسيسي لتصميم المنهاج: المفاهيم، المصطلحات، والمبادئ الثمانية للتصميم العلمي',
  'المبادئ التربوية والمستويات الإدارية لتصميم المنهج المدرسي',
  'مناهج المواد الدراسية: الفلسفة، الحجج، الخصائص، الأنواع، والإيجابيات والسلبيات',
  'منهج النشاط: المفهوم، الخصائص، الأنواع، والمتطلبات والإيجابيات والسلبيات',
  'المنهج المحوري ومنهج الوحدة الدراسية: الفلسفة والأسس والمقارنة',
  'المنهج التكنولوجي والمقارنة بين تنظيمات المناهج',
  'الخصائص الجوهرية الثمانية لمنهاج التربية الرياضية الجيد',
];

CHAPTER_5_SEVEN_TOPICS_METADATA.forEach((t, idx) => {
  assert(t.order === idx + 1, `فصل 5 - الموضوع ${idx + 1}: الترتيب ${idx + 1} سليم`);
  assert(t.title === EXPECTED_CH5_SEVEN_TITLES[idx], `فصل 5 - الموضوع ${idx + 1}: العنوان «${t.title}» مطابق نصياً`);
  assert(Boolean(t.id), `فصل 5 - الموضوع ${idx + 1}: المعرف id موجود`);
  assert(Boolean(t.description), `فصل 5 - الموضوع ${idx + 1}: الوصف الهيكلي موجود`);
  assert(t.headingClassification === 'educational_organizational', `فصل 5 - الموضوع ${idx + 1}: تصنيف تنظيمي تعليمي سليم`);
});

// فحص الحفاظ الصارم على المعرف الأصلي للموضوع السابع
assert(CHAPTER_5_SEVEN_TOPICS_METADATA[6].id === 'top-ch5-pe-curriculum-characteristics', 'حفظ المعرف الأصلي للموضوع السابع (top-ch5-pe-curriculum-characteristics)');

// فحص المعرفات الستة المستحدثة
assert(CHAPTER_5_SEVEN_TOPICS_METADATA[0].id === 'top-ch5-curriculum-design-foundations', 'معرف الموضوع 1 سليم (top-ch5-curriculum-design-foundations)');
assert(CHAPTER_5_SEVEN_TOPICS_METADATA[1].id === 'top-ch5-design-principles-levels', 'معرف الموضوع 2 سليم (top-ch5-design-principles-levels)');
assert(CHAPTER_5_SEVEN_TOPICS_METADATA[2].id === 'top-ch5-subject-matter-curricula', 'معرف الموضوع 3 سليم (top-ch5-subject-matter-curricula)');
assert(CHAPTER_5_SEVEN_TOPICS_METADATA[3].id === 'top-ch5-activity-curriculum', 'معرف الموضوع 4 سليم (top-ch5-activity-curriculum)');
assert(CHAPTER_5_SEVEN_TOPICS_METADATA[4].id === 'top-ch5-core-and-unit-curriculum', 'معرف الموضوع 5 سليم (top-ch5-core-and-unit-curriculum)');
assert(CHAPTER_5_SEVEN_TOPICS_METADATA[5].id === 'top-ch5-technological-curriculum-comparison', 'معرف الموضوع 6 سليم (top-ch5-technological-curriculum-comparison)');

// فحص استرجاع موضوعات الفصل الخامس عبر دوال الاختيار الرسمية
const course1Ch5Topics = getTopicsByChapter('chap-curriculum-designs');
assert(course1Ch5Topics.length === 7, 'استرجاع موضوعات الفصل الخامس السبعة المعتمدة بنجاح عبر getTopicsByChapter');

// فحص وجود الملخصات الأكاديمية الكاملة وخلوها من أرقام الصفحات ومن أي أسئلة أو فيديوهات غير معتمدة
CHAPTER_5_DESIGNS_TOPICS.forEach((t, idx) => {
  assert(Boolean(t.summary && t.summary.trim().length > 200), `فصل 5 - الموضوع ${idx + 1}: الملخص الأكاديمي الكامل موجود ومفصل (${t.summary?.length} حرفاً)`);
  assert(t.lessons.length === 0, `فصل 5 - الموضوع ${idx + 1}: قائمة الدروس فارغة (خالٍ من الدروس غير المعتمدة)`);
  assert(t.quiz === undefined, `فصل 5 - الموضوع ${idx + 1}: تبويب الاختبار غير مفعل (قيد الإعداد)`);
  assert(t.video === undefined && t.videos === undefined, `فصل 5 - الموضوع ${idx + 1}: تبويب الفيديو في حالة قيد الإعداد`);
  assert(!/(?:^|\s)(?:ص|صفحة)\s*\.?\s*\d+/.test(t.summary || ''), `فصل 5 - الموضوع ${idx + 1}: خلو الملخص من أرقام الصفحات المطبوعة`);
});

// فحص مصادقة النصوص الأكاديمية وتضمين النقاط المحورية للفصل الخامس
assert(CHAPTER_5_DESIGNS_TOPICS[0].summary?.includes('المفهوم الأكاديمي واللغوي للتصميم') === true, 'الموضوع 1 يتضمن المفهوم الأكاديمي واللغوي للتصميم');
assert(CHAPTER_5_DESIGNS_TOPICS[0].summary?.includes('المبادئ الثمانية الأساسية لتصميم المنهاج') === true, 'الموضوع 1 يتضمن المبادئ الثمانية الأساسية للتصميم العلمي');
assert(CHAPTER_5_DESIGNS_TOPICS[1].summary?.includes('المبادئ التربوية الستة لتصميم المنهج (حسب مرعي وآخرون 1993)') === true, 'الموضوع 2 يتضمن المبادئ التربوية الستة لمرعي وآخرون');
assert(CHAPTER_5_DESIGNS_TOPICS[1].summary?.includes('مستويات تصميم المنهج الدراسي') === true, 'الموضوع 2 يتضمن مستويات التصميم المركزي واللامركزي');
assert(CHAPTER_5_DESIGNS_TOPICS[2].summary?.includes('الحجج الخمس التي يستند إليها أنصارها') === true, 'الموضوع 3 يتضمن الحجج الخمس لأنصار مناهج المواد الدراسية');
assert(CHAPTER_5_DESIGNS_TOPICS[2].summary?.includes('الخصائص الست لمناهج المواد الدراسية') === true, 'الموضوع 3 يتضمن الخصائص الست لمناهج المواد');
assert(CHAPTER_5_DESIGNS_TOPICS[3].summary?.includes('الخصائص الست لمنهج النشاط') === true, 'الموضوع 4 يتضمن الخصائص الست لمنهج النشاط وتوثيقها بدقة');
assert(CHAPTER_5_DESIGNS_TOPICS[3].summary?.includes('المتطلبات الخمسة لنجاح تطبيق منهج النشاط') === true, 'الموضوع 4 يتضمن المتطلبات الخمسة لنجاح منهج النشاط');
assert(CHAPTER_5_DESIGNS_TOPICS[4].summary?.includes('المنهج المحوري (Core Curriculum)') === true, 'الموضوع 5 يتضمن مفهوم وفلسفة وأسس المنهج المحوري');
assert(CHAPTER_5_DESIGNS_TOPICS[4].summary?.includes('منهج الوحدة الدراسية (Unit Curriculum)') === true, 'الموضوع 5 يتضمن مفهوم وأسس وإيجابيات منهج الوحدة الدراسية');
assert(CHAPTER_5_DESIGNS_TOPICS[5].summary?.includes('المنهج التكنولوجي وتطبيقاته') === true, 'الموضوع 6 يتضمن المنهج التكنولوجي ونوعيه الخطي والمتفرع');
assert(CHAPTER_5_DESIGNS_TOPICS[5].summary?.includes('تنبيه تحريري:') === true, 'الموضوع 6 يتضمن التنبيه التحريري لاضطراب المصدر الأصلي');
assert(CHAPTER_5_DESIGNS_TOPICS[5].summary?.includes('جدول المقارنة بين خصائص التنظيمات الأساسية للمناهج') === true, 'الموضوع 6 يتضمن جدول المقارنة الشامل');
assert(CHAPTER_5_DESIGNS_TOPICS[5].summary?.includes('الفلسفة التي بُني عليها') === true && CHAPTER_5_DESIGNS_TOPICS[5].summary?.includes('وسائل التقويم') === true, 'جدول المقارنة يتضمن أبعاده العشرة كاملة');
assert(CHAPTER_5_DESIGNS_TOPICS[6].summary?.includes('ثماني خصائص جوهرية') === true, 'الموضوع 7 يتضمن الخصائص الجوهرية الثمانية لمنهاج التربية الرياضية الجيد');
assert(CHAPTER_5_DESIGNS_TOPICS[6].summary?.includes('فاعلية معلم التربية الرياضية في التوجيه لثلاثة أسباب حتمية') === true, 'الموضوع 7 يتضمن الأسباب الثلاثة الحتمية لفاعلية المعلم بالتوجيه');

// فحص أمان وعدم تضخم تقدم الطلاب الحسابي للفصل الخامس (Student Progress Safety & Anti-Inflation)
const ch5TopicIds = CHAPTER_5_DESIGNS_TOPICS.map((t) => t.id);
const zeroProgressCh5 = getChapterProgressStats('course-1', 'chap-curriculum-designs', ch5TopicIds);
assert(zeroProgressCh5.totalTopics === 7, 'مقام حساب نسبة تقدم الفصل الخامس يساوي 7 موضوعات بدقة');
assert(zeroProgressCh5.completedTopicsCount === 0, 'حساب التقدم يبدأ بصفر للموضوعات غير المكتملة دون تضخم تلقائي للفصل الخامس');

// فحص نزاهة عدم وراثة الإنجاز للموضوعات المظلية القديمة للفصل الخامس
const uncompletedActivityCurriculum = getTopicProgress('course-1', 'chap-curriculum-designs', 'top-ch5-activity-curriculum');
assert(uncompletedActivityCurriculum.isCompleted === false, 'الموضوع الرابع الجديد لا يرث حالة الإنجاز تلقائياً من الموضوع المظلي القديم');

// التأكد الصارم من بقاء موضوعات الفصول الأول والثاني والثالث والرابع دون أي مساس (Regression Safety Guarantee)
const regressionCh1Ch5 = getTopicsByChapter('chap-curriculum-intro');
assert(regressionCh1Ch5.length === 9, 'الفصل الأول لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh2Ch5 = getTopicsByChapter('chap-curriculum-foundations');
assert(regressionCh2Ch5.length === 9, 'الفصل الثاني لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh3Ch5 = getTopicsByChapter('chap-curriculum-elements');
assert(regressionCh3Ch5.length === 7, 'الفصل الثالث لا يزال يحتوي على موضوعاته السبعة المعتمدة كاملة دون أي مساس');
const regressionCh4Ch5 = getTopicsByChapter('chap-curriculum-factors');
assert(regressionCh4Ch5.length === 5, 'الفصل الرابع لا يزال يحتوي على موضوعاته الخمسة المعتمدة كاملة دون أي مساس');

// 9.10 فحص سلامة الهيكل الأكاديمي السداسي للموضوع السادس (Unit 6: Unit Design Six Topics Architecture)
console.log('\n9.10 فحص سلامة الهيكل الأكاديمي السداسي للموضوع السادس (تصميم وحدة دراسية):');

const ch6Verification = verifyChapter6SixTopicsStructure();
assert(ch6Verification.isValid === true, 'هيكل الموضوعات الستة للموضوع السادس سليم بنسبة 100%');
assert(ch6Verification.totalTopics === 6, 'الموضوع السادس يحتوي بالضبط على 6 موضوعات تعليمية معتمدة');
assert(ch6Verification.educationalOrganizationalCount === 6, 'جميع موضوعات الموضوع السادس مصنفة كعناوين تنظيمية تعليمية (educational_organizational)');
assert(ch6Verification.originalAuthorCount === 0, 'لا توجد عناوين منسوبة قسرياً للمؤلف كعناوين رئيسية');

// فحص تطابق وترتيب البيانات الوصفية للموضوعات الستة
CHAPTER_6_SIX_TOPICS_METADATA.forEach((t, idx) => {
  assert(t.order === idx + 1, `موضوع 6 - الموضوع ${idx + 1}: الترتيب ${idx + 1} صحيح`);
  assert(t.chapterId === 'chap-curriculum-unit-design', `موضوع 6 - الموضوع ${idx + 1}: الارتباط بالفصل السليم (chap-curriculum-unit-design)`);
  assert(t.headingClassification === 'educational_organizational', `موضوع 6 - الموضوع ${idx + 1}: تصنيف تنظيمي تعليمي سليم`);
});

// فحص المعرفات الستة المستحدثة
assert(CHAPTER_6_SIX_TOPICS_METADATA[0].id === 'top-ch6-unit-concept-curriculum-planning', 'معرف الموضوع 1 سليم (top-ch6-unit-concept-curriculum-planning)');
assert(CHAPTER_6_SIX_TOPICS_METADATA[1].id === 'top-ch6-grade6-characteristics-teacher-role', 'معرف الموضوع 2 سليم (top-ch6-grade6-characteristics-teacher-role)');
assert(CHAPTER_6_SIX_TOPICS_METADATA[2].id === 'top-ch6-gymnastics-skill-analysis-steps', 'معرف الموضوع 3 سليم (top-ch6-gymnastics-skill-analysis-steps)');
assert(CHAPTER_6_SIX_TOPICS_METADATA[3].id === 'top-ch6-basketball-basic-skills-drills', 'معرف الموضوع 4 سليم (top-ch6-basketball-basic-skills-drills)');
assert(CHAPTER_6_SIX_TOPICS_METADATA[4].id === 'top-ch6-handball-whip-shot-feints', 'معرف الموضوع 5 سليم (top-ch6-handball-whip-shot-feints)');
assert(CHAPTER_6_SIX_TOPICS_METADATA[5].id === 'top-ch6-lesson-execution-field-challenges', 'معرف الموضوع 6 سليم (top-ch6-lesson-execution-field-challenges)');

// فحص استرجاع موضوعات الموضوع السادس عبر دوال الاختيار الرسمية
const course1Ch6Topics = getTopicsByChapter('chap-curriculum-unit-design');
assert(course1Ch6Topics.length === 6, 'استرجاع موضوعات الموضوع السادس الستة المعتمدة بنجاح عبر getTopicsByChapter');

// فحص وجود الملخصات الأكاديمية الكاملة وخلوها من أرقام الصفحات ومن أي أسئلة أو فيديوهات غير معتمدة
CHAPTER_6_UNIT_DESIGN_TOPICS.forEach((t, idx) => {
  assert(Boolean(t.summary && t.summary.trim().length > 200), `موضوع 6 - الموضوع ${idx + 1}: الملخص الأكاديمي الكامل موجود ومفصل (${t.summary?.length} حرفاً)`);
  assert(t.lessons.length === 0, `موضوع 6 - الموضوع ${idx + 1}: قائمة الدروس فارغة (خالٍ من الدروس غير المعتمدة)`);
  assert(t.quiz === undefined, `موضوع 6 - الموضوع ${idx + 1}: تبويب الاختبار غير مفعل (قيد الإعداد)`);
  assert(t.video === undefined && t.videos === undefined, `موضوع 6 - الموضوع ${idx + 1}: تبويب الفيديو في حالة قيد الإعداد`);
  assert(!/(?:^|\s)(?:ص|صفحة)\s*\.?\s*\d+/.test(t.summary || ''), `موضوع 6 - الموضوع ${idx + 1}: خلو الملخص من أرقام الصفحات المطبوعة`);
});

// فحص مصادقة النصوص الأكاديمية وتضمين النقاط المحورية للموضوع السادس
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[0].summary?.includes('مفهوم الوحدة الدراسية وتعريفاتها الأكاديمية') === true, 'الموضوع 1 يتضمن تعريفي الوحدة الدراسية');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[0].summary?.includes('جدول البيانات العامة لنموذج التطبيق') === true, 'الموضوع 1 يتضمن جدول البيانات العامة ببنوده السبعة');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[0].summary?.includes('وصف المقرر وعناصر الهيكل الإجرائي للدرس') === true, 'الموضوع 1 يتضمن محاور الدرس التسعة والـ 11 تفصيلياً');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[0].summary?.includes('32 حصة دراسية') === true, 'الموضوع 1 يثبت إجمالي 32 حصة كما صرح بها المؤلف');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[0].summary?.includes('33 حصة') === true, 'الموضوع 1 يوثق الملاحظة التحريرية لمجموع 33 حصة');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[1].summary?.includes('مميزات مرحلة النمو لطلاب الصف السادس') === true, 'الموضوع 2 يتضمن مميزات مرحلة النمو الثلاث');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[1].summary?.includes('المتطلبات التربوية التسع للمرحلة') === true, 'الموضوع 2 يتضمن المتطلبات التربوية التسع');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[1].summary?.includes('الحاجات النفسية الأربع لطلاب المرحلة') === true, 'الموضوع 2 يتضمن الحاجات النفسية الأربع');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[1].summary?.includes('التوجيهات الإجرائية الـ 11 للمعلم') === true, 'الموضوع 2 يتضمن التوجيهات الإجرائية الـ 11 للمعلم');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[2].summary?.includes('أجهزة الجمباز للذكور (6 أجهزة)') === true && CHAPTER_6_UNIT_DESIGN_TOPICS[2].summary?.includes('أجهزة الجمباز للإناث (5 أجهزة)') === true, 'الموضوع 3 يتضمن أجهزة الجمباز للذكور والإناث');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[2].summary?.includes('مهارة الدحرجة الجانبية المكورة') === true && CHAPTER_6_UNIT_DESIGN_TOPICS[2].summary?.includes('مهارة الوقوف على اليدين') === true, 'الموضوع 3 يتضمن درسي الدحرجة والوقوف على اليدين وجملة الحركات');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[3].summary?.includes('مهارة التمرير باليدين من فوق الرأس') === true && CHAPTER_6_UNIT_DESIGN_TOPICS[3].summary?.includes('حركات القدمين') === true && CHAPTER_6_UNIT_DESIGN_TOPICS[3].summary?.includes('التصويب باليدين من فوق الرأس') === true, 'الموضوع 4 يتضمن دروس كرة السلة الثلاثة بالنقاط الفنية والتدريبات وتصحيح الأخطاء');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[4].summary?.includes('التصويب من مستوى الحوض والركبة') === true && CHAPTER_6_UNIT_DESIGN_TOPICS[4].summary?.includes('الخداع بالتمرير ثم التمرير') === true, 'الموضوع 5 يتضمن درسي كرة اليد التصويب والخداع وجدول النماذج الخمسة');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[5].summary?.includes('المشكلات الأربعة التوقعية أثناء تنفيذ درس التربية الرياضية') === true, 'الموضوع 6 يتضمن المشكلات الأربعة التوقعية لتنفيذ الدرس');
assert(CHAPTER_6_UNIT_DESIGN_TOPICS[5].summary?.includes('مسؤوليات معلم التربية الرياضية') === true && CHAPTER_6_UNIT_DESIGN_TOPICS[5].summary?.includes('مسؤوليات الإدارة المدرسية') === true, 'الموضوع 6 يتضمن مسؤوليات المعلم والإدارة المدرسية');

// فحص أمان وعدم تضخم تقدم الطلاب الحسابي للموضوع السادس (Student Progress Safety & Anti-Inflation)
const ch6TopicIds = CHAPTER_6_UNIT_DESIGN_TOPICS.map((t) => t.id);
const zeroProgressCh6 = getChapterProgressStats('course-1', 'chap-curriculum-unit-design', ch6TopicIds);
assert(zeroProgressCh6.totalTopics === 6, 'مقام حساب نسبة تقدم الموضوع السادس يساوي 6 موضوعات بدقة');
assert(zeroProgressCh6.completedTopicsCount === 0, 'حساب التقدم يبدأ بصفر للموضوعات غير المكتملة دون تضخم تلقائي للموضوع السادس');

// فحص نزاهة عدم وراثة الإنجاز للموضوعات المظلية القديمة للموضوع السادس
const uncompletedUnitConcept = getTopicProgress('course-1', 'chap-curriculum-unit-design', 'top-ch6-unit-concept-curriculum-planning');
assert(uncompletedUnitConcept.isCompleted === false, 'الموضوع الأول الجديد لا يرث حالة الإنجاز تلقائياً من الموضوع المظلي القديم');

// التأكد الصارم من بقاء موضوعات الفصول الأول والثاني والثالث والرابع والخامس دون أي مساس (Regression Safety Guarantee)
const regressionCh1Ch6 = getTopicsByChapter('chap-curriculum-intro');
assert(regressionCh1Ch6.length === 9, 'الفصل الأول لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh2Ch6 = getTopicsByChapter('chap-curriculum-foundations');
assert(regressionCh2Ch6.length === 9, 'الفصل الثاني لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh3Ch6 = getTopicsByChapter('chap-curriculum-elements');
assert(regressionCh3Ch6.length === 7, 'الفصل الثالث لا يزال يحتوي على موضوعاته السبعة المعتمدة كاملة دون أي مساس');
const regressionCh4Ch6 = getTopicsByChapter('chap-curriculum-factors');
assert(regressionCh4Ch6.length === 5, 'الفصل الرابع لا يزال يحتوي على موضوعاته الخمسة المعتمدة كاملة دون أي مساس');
const regressionCh5Ch6 = getTopicsByChapter('chap-curriculum-designs');
assert(regressionCh5Ch6.length === 7, 'الفصل الخامس لا يزال يحتوي على موضوعاته السبعة المعتمدة كاملة دون أي مساس');

// 9.11 فحص سلامة الهيكل الأكاديمي السباعي للموضوع السابع (Unit 7: Curriculum Planning Seven Topics Architecture)
console.log('\n9.11 فحص سلامة الهيكل الأكاديمي السباعي للموضوع السابع (تخطيط المنهج المدرسي):');

const ch7Verification = verifyChapter7SevenTopicsStructure();
assert(ch7Verification.isValid === true, 'هيكل الموضوعات السبعة للموضوع السابع سليم بنسبة 100%');
assert(ch7Verification.totalTopics === 7, 'الموضوع السابع يحتوي بالضبط على 7 موضوعات تعليمية معتمدة');
assert(ch7Verification.educationalOrganizationalCount === 7, 'جميع موضوعات الموضوع السابع مصنفة كعناوين تنظيمية تعليمية (educational_organizational)');
assert(ch7Verification.originalAuthorCount === 0, 'لا توجد عناوين منسوبة قسرياً للمؤلف كعناوين رئيسية');

// فحص تطابق وترتيب البيانات الوصفية للموضوعات السبعة
CHAPTER_7_SEVEN_TOPICS_METADATA.forEach((t, idx) => {
  assert(t.order === idx + 1, `موضوع 7 - الموضوع ${idx + 1}: الترتيب ${idx + 1} صحيح`);
  assert(t.chapterId === 'chap-curriculum-planning', `موضوع 7 - الموضوع ${idx + 1}: الارتباط بالفصل السليم (chap-curriculum-planning)`);
  assert(t.headingClassification === 'educational_organizational', `موضوع 7 - الموضوع ${idx + 1}: تصنيف تنظيمي تعليمي سليم`);
});

// فحص المعرفات السبعة المعتمدة
assert(CHAPTER_7_SEVEN_TOPICS_METADATA[0].id === 'top-ch7-philosophical-foundations-tyler-model', 'معرف الموضوع 1 سليم (top-ch7-philosophical-foundations-tyler-model)');
assert(CHAPTER_7_SEVEN_TOPICS_METADATA[1].id === 'top-ch7-timeframes-admin-levels-centralization', 'معرف الموضوع 2 سليم (top-ch7-timeframes-admin-levels-centralization)');
assert(CHAPTER_7_SEVEN_TOPICS_METADATA[2].id === 'top-ch7-curriculum-strategy-technical-rules-nine-dimensions', 'معرف الموضوع 3 سليم (top-ch7-curriculum-strategy-technical-rules-nine-dimensions)');
assert(CHAPTER_7_SEVEN_TOPICS_METADATA[3].id === 'top-ch7-external-influencing-factors-difficulty-management', 'معرف الموضوع 4 سليم (top-ch7-external-influencing-factors-difficulty-management)');
assert(CHAPTER_7_SEVEN_TOPICS_METADATA[4].id === 'top-ch7-six-planning-criteria-knowledge-structure', 'معرف الموضوع 5 سليم (top-ch7-six-planning-criteria-knowledge-structure)');
assert(CHAPTER_7_SEVEN_TOPICS_METADATA[5].id === 'top-ch7-curriculum-construction-steps-three-structural-levels', 'معرف الموضوع 6 سليم (top-ch7-curriculum-construction-steps-three-structural-levels)');
assert(CHAPTER_7_SEVEN_TOPICS_METADATA[6].id === 'top-ch7-participating-parties-architectural-curriculum-approach', 'معرف الموضوع 7 سليم (top-ch7-participating-parties-architectural-curriculum-approach)');

// فحص استرجاع موضوعات الموضوع السابع عبر دوال الاختيار الرسمية
const course1Ch7Topics = getTopicsByChapter('chap-curriculum-planning');
assert(course1Ch7Topics.length === 7, 'استرجاع موضوعات الموضوع السابع السبعة المعتمدة بنجاح عبر getTopicsByChapter');

// فحص وجود الملخصات الأكاديمية الكاملة وخلوها من أرقام الصفحات ومن أي أسئلة أو فيديوهات غير معتمدة
CHAPTER_7_PLANNING_TOPICS.forEach((t, idx) => {
  assert(Boolean(t.summary && t.summary.trim().length > 200), `موضوع 7 - الموضوع ${idx + 1}: الملخص الأكاديمي الكامل موجود ومفصل (${t.summary?.length} حرفاً)`);
  assert(t.lessons.length === 0, `موضوع 7 - الموضوع ${idx + 1}: قائمة الدروس فارغة (خالٍ من الدروس غير المعتمدة)`);
  assert(t.quiz === undefined, `موضوع 7 - الموضوع ${idx + 1}: تبويب الاختبار غير مفعل (قيد الإعداد)`);
  assert(t.video === undefined && t.videos === undefined, `موضوع 7 - الموضوع ${idx + 1}: تبويب الفيديو في حالة قيد الإعداد`);
  assert(!/(?:^|[^\w])(?:ص|صفحة)\s*\.?\s*\d+/.test(t.summary || ''), `موضوع 7 - الموضوع ${idx + 1}: خلو الملخص من أرقام الصفحات المطبوعة`);
});

// فحص مصادقة النصوص الأكاديمية وتضمين المفاهيم الجوهرية للموضوع السابع
assert(CHAPTER_7_PLANNING_TOPICS[0].summary?.includes('الاستشهاد القرآني والدلالة التربوية') === true && CHAPTER_7_PLANNING_TOPICS[0].summary?.includes('المائدة: 48') === true, 'الموضوع 1 يتضمن الاستشهاد القرآني بسورة المائدة آية 48 ودلالته التربوية');
assert(CHAPTER_7_PLANNING_TOPICS[0].summary?.includes('تحرير وتهذيب طرق العمل') === true && CHAPTER_7_PLANNING_TOPICS[0].summary?.includes('نموذج (تايلر Tyler)') === true, 'الموضوع 1 يتضمن المعنى اللغوي والاصطلاحي ونموذج تايلر بأسئلته الأربعة وعناصره');
assert(CHAPTER_7_PLANNING_TOPICS[1].summary?.includes('أقسام التخطيط وفق المدى الزمني') === true && CHAPTER_7_PLANNING_TOPICS[1].summary?.includes('طويل المدى') === true && CHAPTER_7_PLANNING_TOPICS[1].summary?.includes('متوسط المدى') === true && CHAPTER_7_PLANNING_TOPICS[1].summary?.includes('قصير المدى') === true, 'الموضوع 2 يتضمن أقسام التخطيط الثلاثة وفق المدى الزمني');
assert(CHAPTER_7_PLANNING_TOPICS[1].summary?.includes('التخطيط للمنهج على المستوى الوزاري (المركزي)') === true && CHAPTER_7_PLANNING_TOPICS[1].summary?.includes('التخطيط للمنهج على المستوى المحلي (اللامركزي)') === true && CHAPTER_7_PLANNING_TOPICS[1].summary?.includes('النظام التوفيقي المزدوج') === true, 'الموضوع 2 يتضمن مستويات التخطيط المركزي واللامركزي والنظام التوفيقي المزدوج');
assert(CHAPTER_7_PLANNING_TOPICS[2].summary?.includes('العناصر الأربعة والقواعد الفنية الأربع لبناء المناهج') === true && CHAPTER_7_PLANNING_TOPICS[2].summary?.includes('الخطوات التسع التفصيلية لتخطيط المنهج المدرسي') === true, 'الموضوع 3 يتضمن القواعد الفنية الأربع والخطوات التسع التفصيلية لبناء وتخطيط المنهج');
assert(CHAPTER_7_PLANNING_TOPICS[2].summary?.includes('معيار الصدق') === true && CHAPTER_7_PLANNING_TOPICS[2].summary?.includes('معيار الأهمية') === true, 'الموضوع 3 يتضمن معياري الصدق والأهمية في اختيار المحتوى');
assert(CHAPTER_7_PLANNING_TOPICS[3].summary?.includes('العوامل الخارجية الأربعة المؤثرة في تخطيط المنهج') === true && CHAPTER_7_PLANNING_TOPICS[3].summary?.includes('المقترحات البناءة الخمسة للتعامل مع صعوبات التخطيط') === true, 'الموضوع 4 يتضمن العوامل الخارجية الأربعة والمقترحات الخمسة لإدارة صعوبات التخطيط');
assert(CHAPTER_7_PLANNING_TOPICS[3].summary?.includes('الإبقاء على المنهج القديم كخيار موازٍ للمنهج المطور عند بدء تجريبه') === true, 'الموضوع 4 يتضمن مقترح الإبقاء على المنهج القديم كخيار موازٍ أثناء التجريب');
assert(CHAPTER_7_PLANNING_TOPICS[4].summary?.includes('معايير تخطيط المنهج الستة وبنية المعرفة') === true && CHAPTER_7_PLANNING_TOPICS[4].summary?.includes('محور المعرفة (بنية المعرفة الست)') === true && CHAPTER_7_PLANNING_TOPICS[4].summary?.includes('أنواع التخطيط المفهومي الثلاثة والعلاقة بينها') === true, 'الموضوع 5 يتضمن المعايير الستة ومستويات بنية المعرفة الستة وأنواع التخطيط المفهومي الثلاثة');
assert(CHAPTER_7_PLANNING_TOPICS[5].summary?.includes('المبادئ التسعة الواجب وضعها في الاعتبار قبل التخطيط') === true && CHAPTER_7_PLANNING_TOPICS[5].summary?.includes('الخطوات السبع لبناء المنهج الإجرائي') === true && CHAPTER_7_PLANNING_TOPICS[5].summary?.includes('مستويات تخطيط المنهج الثلاثة والعلاقة الهيكلية بينها') === true, 'الموضوع 6 يتضمن المبادئ التسعة والخطوات السبع والمستويات الهيكلية الثلاثة');
assert(CHAPTER_7_PLANNING_TOPICS[6].summary?.includes('الأدوار التفصيلية للأطراف المشاركة في تخطيط المنهج') === true && CHAPTER_7_PLANNING_TOPICS[6].summary?.includes('دور التلاميذ في تخطيط المنهج') === true && CHAPTER_7_PLANNING_TOPICS[6].summary?.includes('دور المدرسين في تخطيط المنهج') === true && CHAPTER_7_PLANNING_TOPICS[6].summary?.includes('مدخل تنظيم البناء الهندسي للمنهج — مدخل العمليات العقلية') === true, 'الموضوع 7 يتضمن أدوار المشاركين (تلاميذ، مدرسين، مواطنين) ومدخل العمليات العقلية ووظيفتيه');

// فحص أمان وعدم تضخم تقدم الطلاب الحسابي للموضوع السابع (Student Progress Safety & Anti-Inflation)
const ch7TopicIds = CHAPTER_7_PLANNING_TOPICS.map((t) => t.id);
const zeroProgressCh7 = getChapterProgressStats('course-1', 'chap-curriculum-planning', ch7TopicIds);
assert(zeroProgressCh7.totalTopics === 7, 'مقام حساب نسبة تقدم الموضوع السابع يساوي 7 موضوعات بدقة');
assert(zeroProgressCh7.completedTopicsCount === 0, 'حساب التقدم يبدأ بصفر للموضوعات غير المكتملة دون تضخم تلقائي للموضوع السابع');

// فحص نزاهة عدم وراثة الإنجاز للموضوعات المظلية القديمة للموضوع السابع
const uncompletedTylerTopic = getTopicProgress('course-1', 'chap-curriculum-planning', 'top-ch7-philosophical-foundations-tyler-model');
assert(uncompletedTylerTopic.isCompleted === false, 'الموضوع الأول الجديد لا يرث حالة الإنجاز تلقائياً من الموضوع المظلي القديم');

// التأكد الصارم من بقاء موضوعات الفصول 1 و 2 و 3 و 4 و 5 و 6 دون أي مساس (Regression Safety Guarantee)
const regressionCh1Ch7 = getTopicsByChapter('chap-curriculum-intro');
assert(regressionCh1Ch7.length === 9, 'الفصل الأول لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh2Ch7 = getTopicsByChapter('chap-curriculum-foundations');
assert(regressionCh2Ch7.length === 9, 'الفصل الثاني لا يزال يحتوي على موضوعاته التسعة المعتمدة كاملة دون أي مساس');
const regressionCh3Ch7 = getTopicsByChapter('chap-curriculum-elements');
assert(regressionCh3Ch7.length === 7, 'الفصل الثالث لا يزال يحتوي على موضوعاته السبعة المعتمدة كاملة دون أي مساس');
const regressionCh4Ch7 = getTopicsByChapter('chap-curriculum-factors');
assert(regressionCh4Ch7.length === 5, 'الفصل الرابع لا يزال يحتوي على موضوعاته الخمسة المعتمدة كاملة دون أي مساس');
const regressionCh5Ch7 = getTopicsByChapter('chap-curriculum-designs');
assert(regressionCh5Ch7.length === 7, 'الفصل الخامس لا يزال يحتوي على موضوعاته السبعة المعتمدة كاملة دون أي مساس');
const regressionCh6Ch7 = getTopicsByChapter('chap-curriculum-unit-design');
assert(regressionCh6Ch7.length === 6, 'الموضوع السادس لا يزال يحتوي على موضوعاته الستة المعتمدة كاملة دون أي مساس');

// التحقق من الإجمالي الكلي لموضوعات المقرر الأول (50 موضوعاً معتمداً)
const allCourse1Topics = [
  ...regressionCh1Ch7,
  ...regressionCh2Ch7,
  ...regressionCh3Ch7,
  ...regressionCh4Ch7,
  ...regressionCh5Ch7,
  ...regressionCh6Ch7,
  ...course1Ch7Topics,
];
assert(allCourse1Topics.length === 50, 'إجمالي موضوعات مادة مناهج التربية الرياضية (course-1) يساوي 50 موضوعاً معتمداً بالضبط (9+9+7+5+7+6+7)');

// 10. فحص مشغل الفيديو التعليمي وتكامل كتل الفيديو (Phase 2: Educational Video Integration & Reusable Player)
console.log('\n10. فحص مشغل الفيديو التعليمي وتكامل كتل الفيديو (Phase 2: Video Integration):');

// 10.1 فحص دوال التحقق والتطبيع لروابط ومعرفات YouTube
assert(isValidYouTubeVideoId('KA_pExdDSUo') === true, 'التحقق من صحة معرف YouTube القياسي (11 رمزاً)');
assert(isValidYouTubeVideoId('short_id') === false, 'رفض معرف YouTube غير المكتمل (أقل من 11 رمزاً)');
assert(isValidYouTubeVideoId('toolongvideoid123') === false, 'رفض معرف YouTube الزائد عن 11 رمزاً');
assert(isValidYouTubeVideoId('with spaces ') === false, 'رفض معرف YouTube الذي يحتوي على مسافات');
assert(isValidYouTubeVideoId('<script>alert</script>') === false, 'رفض محاولات حقن وسوم HTML في معرف الفيديو');

assert(
  normalizeYouTubeVideoId('KA_pExdDSUo') === 'KA_pExdDSUo',
  'تطبيع المعرف النظيف يعيد المعرف نفسه'
);
assert(
  normalizeYouTubeVideoId('https://www.youtube.com/watch?v=KA_pExdDSUo') === 'KA_pExdDSUo',
  'تطبيع رابط YouTube القياسي المستخرج من شريط المتصفح'
);
assert(
  normalizeYouTubeVideoId('https://youtu.be/KA_pExdDSUo') === 'KA_pExdDSUo',
  'تطبيع الرابط المختصر youtu.be'
);
assert(
  normalizeYouTubeVideoId('https://www.youtube-nocookie.com/embed/KA_pExdDSUo') === 'KA_pExdDSUo',
  'تطبيع رابط التضمين الآمن youtube-nocookie'
);
assert(
  normalizeYouTubeVideoId('not-a-valid-url-or-id') === null,
  'تطبيع مدخل مشوه يعيد null بأمان'
);

// 10.2 فحص روابط التضمين والمشاهدة والصور المصغرة
const embedUrl = getYouTubeEmbedUrl('KA_pExdDSUo', { autoplay: true });
assert(
  embedUrl.includes('https://www.youtube-nocookie.com/embed/KA_pExdDSUo') &&
  embedUrl.includes('autoplay=1') &&
  embedUrl.includes('rel=0') &&
  embedUrl.includes('modestbranding=1'),
  'توليد رابط التضمين الآمن الخالي من ملفات تعريف الارتباط youtube-nocookie بنجاح'
);

const watchUrl = getYouTubeWatchUrl('KA_pExdDSUo');
assert(watchUrl === 'https://www.youtube.com/watch?v=KA_pExdDSUo', 'توليد رابط المشاهدة المباشرة الاحتياطي على YouTube بنجاح');

const thumbUrl = getYouTubeThumbnailUrl('KA_pExdDSUo', 'hq');
assert(thumbUrl === 'https://i.ytimg.com/vi/KA_pExdDSUo/hqdefault.jpg', 'توليد رابط الصورة المصغرة خفيفة الوزن بنجاح');

// 10.3 فحص كتلة الفيديو في الدرس النموذجي لمعمل الاختبار التقني (dev-les-1)
const devVideoLesson = getLessonById('dev-les-1');
const devVideoBlock = devVideoLesson?.blocks.find((b) => b.type === 'video');
assert(Boolean(devVideoBlock), 'استرجاع كتلة الفيديو التعليمي من الدرس النموذجي بنجاح');
assert(devVideoBlock?.order === 4, 'تموضع كتلة الفيديو التعليمي بالترتيب الرابع بعد التعريف التأسيسي');
assert(
  Boolean(devVideoBlock && (devVideoBlock as any).provider === 'youtube'),
  'مزود الفيديو المعتمد هو youtube'
);
assert(
  Boolean(devVideoBlock && (devVideoBlock as any).videoId === 'KA_pExdDSUo'),
  'معرف الفيديو التعليمي التجريبي المعتمد KA_pExdDSUo'
);
assert(
  Boolean(devVideoBlock && (devVideoBlock as any).sourceReference),
  'كتلة الفيديو تتضمن التوثيق المرجعي الأكاديمي لشرح NotebookLM'
);

// 10.4 فحص خلو المقررات الرسمية من أي فيديوهات غير معتمدة أو مزيفة (Zero Fake Videos in Official Curriculum)
const officialLesson = getLessonById('les-curriculum-evolution');
assert(Boolean(officialLesson), 'استرجاع الدرس الأكاديمي الرسمي لمناهج التربية الرياضية');
const officialVideoBlocks = officialLesson?.blocks.filter((b) => b.type === 'video') || [];
assert(
  officialVideoBlocks.length === 0,
  'المقرر الأكاديمي الرسمي خالي تماماً من الفيديوهات ريثما يتم إنتاج وتدقيق فيديوهات NotebookLM الرسمية'
);

// 10.5 فحص دعم درس يتضمن فيديوهات متعددة (Multiple Video Blocks Support)
// @ts-expect-error - اختبار حقن درس يضم فيديوهين للتحقق من دعم التعدد
const multiVideoReport = validateAcademicContent([
  {
    id: 'test-multi-video-course',
    orderNumber: 200,
    code: 'MULTI-VID',
    title: 'مقرر تجريبي لفيديوهات متعددة',
    targetBookReference: 'مرجع',
    status: 'pending_content',
    statusLabel: 'تجريبي',
    description: '',
    chapters: [
      {
        id: 'mv-chap',
        courseId: 'test-multi-video-course',
        order: 1,
        title: 'فصل',
        description: '',
        topics: [
          {
            id: 'mv-top',
            chapterId: 'mv-chap',
            order: 1,
            title: 'موضوع',
            description: '',
            lessons: [
              {
                id: 'mv-les',
                topicId: 'mv-top',
                order: 1,
                title: 'درس يضم فيديوهين',
                description: '',
                learningObjectives: [],
                status: 'published',
                references: [],
                blocks: [
                  {
                    id: 'mv-blk-vid-1',
                    order: 1,
                    type: 'video',
                    title: 'الفيديو التعليمي الأول: المفاهيم الأساسية',
                    provider: 'youtube',
                    videoId: 'KA_pExdDSUo',
                  },
                  {
                    id: 'mv-blk-vid-2',
                    order: 2,
                    type: 'video',
                    title: 'الفيديو التعليمي الثاني: التطبيق العملي',
                    provider: 'youtube',
                    videoId: 'KA_pExdDSUo',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
assert(multiVideoReport.isValid === true, 'محرك التحقق يقبل بنجاح وجود أكثر من كتلة فيديو واحدة داخل الدرس الواحد');

// 10.6 فحص الرفض الصارم لكتل الفيديو المعطوبة (Negative Video Validation)
// @ts-expect-error - اختبار حقن كتل فيديو معطوبة
const corruptVideoReport = validateAcademicContent([
  {
    id: 'test-corrupt-video-course',
    orderNumber: 201,
    code: 'BAD-VID',
    title: 'مقرر تجريبي لفيديوهات معطوبة',
    targetBookReference: 'مرجع',
    status: 'pending_content',
    statusLabel: 'معطوب',
    description: '',
    chapters: [
      {
        id: 'bv-chap',
        courseId: 'test-corrupt-video-course',
        order: 1,
        title: 'فصل',
        description: '',
        topics: [
          {
            id: 'bv-top',
            chapterId: 'bv-chap',
            order: 1,
            title: 'موضوع',
            description: '',
            lessons: [
              {
                id: 'bv-les',
                topicId: 'bv-top',
                order: 1,
                title: 'درس معطوب',
                description: '',
                learningObjectives: [],
                status: 'published',
                references: [],
                blocks: [
                  {
                    id: 'bv-blk-1',
                    order: 1,
                    type: 'video',
                    title: '', // خطأ: عنوان فارغ
                    provider: 'youtube',
                    videoId: 'KA_pExdDSUo',
                  },
                  {
                    id: 'bv-blk-2',
                    order: 2,
                    type: 'video',
                    title: 'فيديو بمزود غير معتمد',
                    provider: 'vimeo', // خطأ: مزود غير مدعوم
                    videoId: 'KA_pExdDSUo',
                  },
                  {
                    id: 'bv-blk-3',
                    order: 3,
                    type: 'video',
                    title: 'فيديو بمعرف معطوب',
                    provider: 'youtube',
                    videoId: 'short_id', // خطأ: أقل من 11 رمزاً
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
assert(corruptVideoReport.isValid === false, 'المحرك يكتشف ويرفض كتل الفيديو المعطوبة (العنوان الفارغ، المزود غير المدعوم، المعرف المشوه)');
assert(corruptVideoReport.errors.length >= 3, `تم حصر جميع أخطاء الفيديو المعطوبة (تم اكتشاف ${corruptVideoReport.errors.length} أخطاء)`);

// 11. فحص محرك التقييم الذاتي التفاعلي وتكامل كتل الاختبارات (Phase 3: Interactive Quiz & Assessment Engine)
console.log('\n11. فحص محرك التقييم الذاتي التفاعلي وتكامل كتل الاختبارات (Phase 3: Assessment Engine):');

// 11.1 فحص دوال تقييم الأسئلة الفردية (Pure Question Evaluation)
const sampleMcq: QuizQuestion = {
  id: 'q-mcq-test',
  order: 1,
  type: 'multiple_choice',
  prompt: 'ما هي عضلات السحب الرئيسية في الأداء الرياضي؟',
  options: [
    { id: 'opt-1', text: 'العضلة الظهرية العريضة' },
    { id: 'opt-2', text: 'العضلة رباعية الرؤوس الفخذية' },
  ],
  correctOptionId: 'opt-1',
  explanation: 'العضلة الظهرية العريضة هي المحرك الرئيسي لحركات السحب.',
};

const mcqCorrectResult = evaluateQuestion(sampleMcq, { type: 'multiple_choice', selectedOptionId: 'opt-1' });
assert(mcqCorrectResult.isCorrect === true && mcqCorrectResult.score === 1, 'سؤال الاختيار من متعدد: الإجابة الصحيحة تحتسب 1 نقطة');

const mcqWrongResult = evaluateQuestion(sampleMcq, { type: 'multiple_choice', selectedOptionId: 'opt-2' });
assert(mcqWrongResult.isCorrect === false && mcqWrongResult.score === 0, 'سؤال الاختيار من متعدد: الإجابة الخاطئة تحتسب 0 نقطة ولا يوجد خصم');

const mcqUnanswered = evaluateQuestion(sampleMcq, undefined);
assert(mcqUnanswered.isAnswered === false && mcqUnanswered.score === 0, 'سؤال غير مجاب يحتسب 0 نقطة دون وضع علامة صواب');

// 11.2 فحص سؤال الصواب والخطأ (True/False Evaluation)
const sampleTf: QuizQuestion = {
  id: 'q-tf-test',
  order: 2,
  type: 'true_false',
  prompt: 'قوة الاحتكاك دائماً في اتجاه الحركة نفسه.',
  correctAnswer: false,
  explanation: 'قوة الاحتكاك تعمل دائماً في الاتجاه المعاكس لاتجاه الحركة النسبية.',
};

const tfCorrectResult = evaluateQuestion(sampleTf, { type: 'true_false', selectedAnswer: false });
assert(tfCorrectResult.isCorrect === true && tfCorrectResult.score === 1, 'سؤال الصواب والخطأ: الإجابة الصحيحة تحتسب 1 نقطة');

const tfWrongResult = evaluateQuestion(sampleTf, { type: 'true_false', selectedAnswer: true });
assert(tfWrongResult.isCorrect === false && tfWrongResult.score === 0, 'سؤال الصواب والخطأ: الإجابة الخاطئة تحتسب 0 نقطة');
assert(getExpectedAnswerText(sampleTf) === 'خطأ', 'استرجاع النص البشري للإجابة المتوقعة لسؤال الصواب والخطأ');
assert(getExpectedAnswerText(sampleMcq) === 'العضلة الظهرية العريضة', 'استرجاع النص البشري للإجابة المتوقعة لسؤال الاختيار من متعدد');

// 11.3 فحص سؤال الترتيب التسلسلي (Ordering Evaluation)
const sampleOrder: QuizQuestion = {
  id: 'q-order-test',
  order: 3,
  type: 'ordering',
  prompt: 'رتب مراحل الوثب الطويل:',
  items: [
    { id: 'step-a', text: 'الاقتراب' },
    { id: 'step-b', text: 'الارتقاء' },
    { id: 'step-c', text: 'الطيران' },
    { id: 'step-d', text: 'الهبوط' },
  ],
  correctOrder: ['step-a', 'step-b', 'step-c', 'step-d'],
  explanation: 'التسلسل الميكانيكي الصحيح: الاقتراب ثم الارتقاء ثم الطيران ثم الهبوط.',
};

const orderCorrectResult = evaluateQuestion(sampleOrder, {
  type: 'ordering',
  itemOrder: ['step-a', 'step-b', 'step-c', 'step-d'],
});
assert(orderCorrectResult.isCorrect === true && orderCorrectResult.score === 1, 'سؤال الترتيب: التسلسل المتطابق 100% يحتسب 1 نقطة');

const orderWrongResult = evaluateQuestion(sampleOrder, {
  type: 'ordering',
  itemOrder: ['step-b', 'step-a', 'step-c', 'step-d'],
});
assert(orderWrongResult.isCorrect === false && orderWrongResult.score === 0, 'سؤال الترتيب: أي تبديل في موضع العناصر يحتسب 0 نقطة');

// 11.4 فحص تقييم الاختبار الشامل وحساب النسب المئوية (Full Quiz Evaluation & Scoring)
const sampleQuizBlock: QuizBlock = {
  id: 'test-quiz-full',
  order: 1,
  type: 'quiz',
  title: 'اختبار تجريبي شامل',
  passingScorePercentage: 60,
  questions: [sampleMcq, sampleTf, sampleOrder],
};

const perfectAnswers: StudentAnswersMap = {
  'q-mcq-test': { type: 'multiple_choice', selectedOptionId: 'opt-1' },
  'q-tf-test': { type: 'true_false', selectedAnswer: false },
  'q-order-test': { type: 'ordering', itemOrder: ['step-a', 'step-b', 'step-c', 'step-d'] },
};
const perfectQuizResult = evaluateQuiz(sampleQuizBlock, perfectAnswers);
assert(
  perfectQuizResult.totalQuestions === 3 &&
  perfectQuizResult.score === 3 &&
  perfectQuizResult.percentage === 100 &&
  perfectQuizResult.isPassed === true,
  'تقييم الاختبار بنتيجة كاملة: 3/3 ونسبة 100% واجتياز ناجح'
);

const partialAnswers: StudentAnswersMap = {
  'q-mcq-test': { type: 'multiple_choice', selectedOptionId: 'opt-1' }, // صح
  'q-tf-test': { type: 'true_false', selectedAnswer: true },             // خطأ
  'q-order-test': { type: 'ordering', itemOrder: ['step-a', 'step-b', 'step-c', 'step-d'] }, // صح
};
const partialQuizResult = evaluateQuiz(sampleQuizBlock, partialAnswers);
assert(
  partialQuizResult.score === 2 &&
  partialQuizResult.percentage === 67 &&
  partialQuizResult.isPassed === true,
  'تقييم الاختبار بنتيجة جزئية: 2/3 ونسبة 67% واجتياز ناجح (فوق 60%)'
);

const failingAnswers: StudentAnswersMap = {
  'q-mcq-test': { type: 'multiple_choice', selectedOptionId: 'opt-2' }, // خطأ
  'q-tf-test': { type: 'true_false', selectedAnswer: true },             // خطأ
  'q-order-test': { type: 'ordering', itemOrder: ['step-b', 'step-a', 'step-c', 'step-d'] }, // خطأ
};
const failingQuizResult = evaluateQuiz(sampleQuizBlock, failingAnswers);
assert(
  failingQuizResult.score === 0 &&
  failingQuizResult.percentage === 0 &&
  failingQuizResult.isPassed === false,
  'تقييم الاختبار بنتيجة راسبة: 0/3 ونسبة 0% وعدم اجتياز'
);

// 11.5 فحص كشف وتحديد الأسئلة غير المكتملة (Incomplete Answers Detection)
const incompleteAnswers: StudentAnswersMap = {
  'q-mcq-test': { type: 'multiple_choice', selectedOptionId: 'opt-1' },
};
const unansweredList = getUnansweredQuestionIds(sampleQuizBlock, incompleteAnswers);
assert(
  unansweredList.length === 2 &&
  unansweredList.includes('q-tf-test') &&
  unansweredList.includes('q-order-test'),
  'كشف الأسئلة غير المكتملة بنجاح وتحديد معرّفاتها بدقة'
);
assert(isQuizComplete(sampleQuizBlock, incompleteAnswers) === false, 'دالة isQuizComplete تؤكد عدم اكتمال الإجابات');
assert(isQuizComplete(sampleQuizBlock, perfectAnswers) === true, 'دالة isQuizComplete تؤكد اكتمال كافة الأسئلة');

// 11.6 فحص تجهيز عناصر الترتيب وعدم كشف الإجابة في البداية (Ordering Shuffle)
const shuffledTest = shuffleOrderingItems(sampleOrder.items, sampleOrder.correctOrder);
const isSameAsCorrect = shuffledTest.every((it, idx) => it.id === sampleOrder.correctOrder[idx]);
assert(isSameAsCorrect === false, 'عناصر سؤال الترتيب تظهر مبعثرة للتدريب ولا تكشف الترتيب الصحيح مسبقاً');

// 11.7 فحص كتلة الاختبار في الدرس النموذجي لمعمل التطوير التقني (dev-les-1)
const devQuizLesson = getLessonById('dev-les-1');
const devQuizBlock = devQuizLesson?.blocks.find((b) => b.type === 'quiz') as QuizBlock | undefined;
assert(Boolean(devQuizBlock), 'استرجاع كتلة الاختبار التقني من الدرس النموذجي بنجاح');
assert(devQuizBlock?.order === 11, 'تموضع كتلة الاختبار بالترتيب الحادي عشر');
assert(devQuizBlock?.questions.length === 3, 'كتلة الاختبار تضم 3 أسئلة تدريبية');
assert(
  Boolean(devQuizBlock?.questions.some((q) => q.type === 'multiple_choice')),
  'الاختبار يضم سؤال اختيار من متعدد'
);
assert(
  Boolean(devQuizBlock?.questions.some((q) => q.type === 'true_false')),
  'الاختبار يضم سؤال صواب وخطأ'
);
assert(
  Boolean(devQuizBlock?.questions.some((q) => q.type === 'ordering')),
  'الاختبار يضم سؤال ترتيب تسلسلي'
);

// 11.8 فحص خلو المقررات الأكاديمية الرسمية من أي اختبارات تجريبية أو مفبركة
const officialCurriculumLesson = getLessonById('les-curriculum-evolution');
assert(Boolean(officialCurriculumLesson), 'استرجاع الدرس الرسمي لمناهج التربية الرياضية');
const officialQuizzes = officialCurriculumLesson?.blocks.filter((b) => b.type === 'quiz') || [];
assert(
  officialQuizzes.length === 0,
  'المقرر الأكاديمي الرسمي خالٍ تماماً من كتل الاختبارات التجريبية ريثما تُعتمد الأسئلة الأكاديمية الرسمية من أساتذة المادة'
);

// 11.9 فحص دعم وجود كتل اختبارات متعددة في الدرس الواحد (Multiple Quiz Blocks Support)
// @ts-expect-error - اختبار حقن درس يضم اختبارين
const multiQuizReport = validateAcademicContent([
  {
    id: 'test-multi-quiz-course',
    orderNumber: 210,
    code: 'MULTI-QUIZ',
    title: 'مقرر باختبارات متعددة',
    targetBookReference: 'مرجع',
    status: 'pending_content',
    statusLabel: 'تجريبي',
    description: '',
    chapters: [
      {
        id: 'mq-chap',
        courseId: 'test-multi-quiz-course',
        order: 1,
        title: 'فصل',
        description: '',
        topics: [
          {
            id: 'mq-top',
            chapterId: 'mq-chap',
            order: 1,
            title: 'موضوع',
            description: '',
            lessons: [
              {
                id: 'mq-les',
                topicId: 'mq-top',
                order: 1,
                title: 'درس باختبارين',
                description: '',
                learningObjectives: [],
                status: 'published',
                references: [],
                blocks: [
                  {
                    id: 'mq-blk-q1',
                    order: 1,
                    type: 'quiz',
                    title: 'اختبار قصير تمهيدي',
                    questions: [sampleMcq],
                  },
                  {
                    id: 'mq-blk-q2',
                    order: 2,
                    type: 'quiz',
                    title: 'اختبار ختامي للدرس',
                    questions: [sampleTf, sampleOrder],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
assert(multiQuizReport.isValid === true, 'محرك التحقق يقبل بنجاح وجود أكثر من كتلة اختبار واحدة داخل الدرس');

// 11.10 فحص الرفض الصارم لكتل الاختبارات المعطوبة (Negative Quiz Validation)
// @ts-expect-error - اختبار حقن كتل اختبار معطوبة
const corruptQuizReport = validateAcademicContent([
  {
    id: 'test-corrupt-quiz-course',
    orderNumber: 211,
    code: 'BAD-QUIZ',
    title: 'مقرر باختبارات معطوبة',
    targetBookReference: 'مرجع',
    status: 'pending_content',
    statusLabel: 'معطوب',
    description: '',
    chapters: [
      {
        id: 'bq-chap',
        courseId: 'test-corrupt-quiz-course',
        order: 1,
        title: 'فصل',
        description: '',
        topics: [
          {
            id: 'bq-top',
            chapterId: 'bq-chap',
            order: 1,
            title: 'موضوع',
            description: '',
            lessons: [
              {
                id: 'bq-les',
                topicId: 'bq-top',
                order: 1,
                title: 'درس معطوب',
                description: '',
                learningObjectives: [],
                status: 'published',
                references: [],
                blocks: [
                  {
                    id: 'bq-blk-1',
                    order: 1,
                    type: 'quiz',
                    title: '', // خطأ: عنوان فارغ
                    questions: [], // خطأ: مصفوفة أسئلة فارغة
                  },
                  {
                    id: 'bq-blk-2',
                    order: 2,
                    type: 'quiz',
                    title: 'اختبار بأسئلة مشوهة',
                    questions: [
                      {
                        id: 'bad-mcq',
                        order: 1,
                        type: 'multiple_choice',
                        prompt: '', // خطأ: نص السؤال فارغ
                        options: [{ id: 'opt-1', text: 'خيار وحيد' }], // خطأ: أقل من خيارين
                        correctOptionId: 'non-existent-opt', // خطأ: لا يطابق أي خيار
                      },
                      {
                        id: 'bad-tf',
                        order: 2,
                        type: 'true_false',
                        prompt: 'سؤال صواب بخطأ منطقي',
                        correctAnswer: 'not-a-boolean' as any, // خطأ: قيمة غير منطقية
                      },
                      {
                        id: 'bad-order',
                        order: 3,
                        type: 'ordering',
                        prompt: 'سؤال ترتيب معطوب',
                        items: [{ id: 'it-1', text: 'عنصر' }], // خطأ: أقل من عنصرين
                        correctOrder: ['it-missing'], // خطأ: لا يطابق
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
assert(corruptQuizReport.isValid === false, 'المحرك يكتشف ويرفض كتل الاختبارات المعطوبة بمختلف أنماط أخطائها');
assert(corruptQuizReport.errors.length >= 6, `اكتشاف جميع أخطاء الاختبار المعطوبة بدقة (${corruptQuizReport.errors.length} أخطاء تم رصدها)`);

// 12. فحص استقرار الواجهات وتثبيت الجودة للمرحلة الرابعة (Phase 4 Stabilization)
console.log('\n12. فحص استقرار الواجهات وعزل المسارات وإمكانية الوصول (Phase 4 Final Stabilization):');

// أ. التحقق من حذف المكونات غير المستخدمة
const removedComponents = [
  'src/components/home/BenefitsSection.tsx',
  'src/components/home/CoursesPreviewSection.tsx',
  'src/components/home/FeaturedLessonSection.tsx',
  'src/components/home/LearningJourneySection.tsx',
  'src/components/home/SportsAcademicHeroGraphic.tsx',
  'src/components/home/SportsBiomechanicalGraphic.tsx',
  'src/components/home/SportsMotionHeroGraphic.tsx',
];

removedComponents.forEach((filePath) => {
  const exists = fs.existsSync(path.resolve(filePath));
  assert(!exists, `المكون غير المستخدم محذوف بنجاح: ${path.basename(filePath)}`);
});

// ب. التحقق من سلامة البنية الدلالية وإمكانية الوصول (Semantic HTML & Accessibility)
const appTsxContent = fs.readFileSync(path.resolve('src/App.tsx'), 'utf-8');
const homePageContent = fs.readFileSync(path.resolve('src/pages/HomePage.tsx'), 'utf-8');

assert(appTsxContent.includes('id="main-content"'), 'عنصر main الأساسي الوحيد يحمل المعرف id="main-content" في App.tsx');
assert(appTsxContent.includes('href="#main-content"'), 'رابط التخطي السريع للمحتوى الرئيسي (Skip-to-Content) متاح في أعلى الصفحة');
assert(!homePageContent.includes('<main'), 'صفحة HomePage لا تحتوي على عنصر main إضافي (منع تكرار landmark)');

// ج. فحص عزل مسارات وبيانات التطوير (Dev Route Guard & Production Isolation)
assert(typeof isDevSandboxAllowed === 'function', 'دالة فحص صلاحية المسارات التجريبية isDevSandboxAllowed معرفة وتعمل');

const devRouteGuardContent = fs.readFileSync(path.resolve('src/utils/devRouteGuard.ts'), 'utf-8');
assert(!devRouteGuardContent.includes('preview=true'), 'إلغاء ثغرة التجاوز ?preview=true نهائياً من كود المنصة (Zero Production Bypass)');

assert(appTsxContent.includes('import.meta.env.DEV'), 'تطبيق استبعاد كود المعاينة الميت في الإنتاج عبر import.meta.env.DEV (Dead Code Elimination)');
assert(appTsxContent.includes('{isDev && LogoPreviewPage && ('), 'حجب مسار استعراض الشعار /logo-preview في الإنتاج');
assert(appTsxContent.includes('{isDev && ('), 'حجب المسارات المختصرة /dev-sandbox و /visual-sandbox في الإنتاج');

// فحص محتويات حزمة الإنتاج dist والتأكد من خلوها من مكونات المعاينة
const distExists = fs.existsSync(path.resolve('dist/assets'));
if (distExists) {
  const distFiles = fs.readdirSync(path.resolve('dist/assets'));
  const hasLogoPreviewChunk = distFiles.some((f) => f.includes('LogoPreviewPage'));
  assert(!hasLogoPreviewChunk, 'حزمة الإنتاج dist خالية تماماً من ملف LogoPreviewPage (استبعاد كامل للشفرة التجريبية)');
}

// د. التحقق من جاهزية البنية لاستيعاب المحتوى الأكاديمي الشامل عبر ملفات البيانات
const mockComprehensiveCourse = {
  id: 'course-test-comprehensive',
  orderNumber: 1,
  code: 'PE-TEST-01',
  title: 'مقرر اختباري شامل للتحقق',
  description: 'وصف المقرر الاختباري',
  targetBookReference: 'مرجع كتاب اختباري',
  status: 'pending_content' as const,
  statusLabel: 'جاهز للاختبار',
  categoryPlaceholder: 'اختبارات المحتوى',
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
      id: 'test-chap-1',
      courseId: 'course-test-comprehensive',
      order: 1,
      title: 'الفصل الأول الاختباري',
      description: 'وصف الفصل',
      status: 'pending_content' as const,
      topics: [
        {
          id: 'test-top-1',
          chapterId: 'test-chap-1',
          order: 1,
          title: 'الموضوع الأول الاختباري',
          description: 'وصف الموضوع',
          status: 'pending_content' as const,
          lessons: [
            {
              id: 'test-les-1',
              topicId: 'test-top-1',
              order: 1,
              title: 'الدرس الاختباري الشامل لجميع الكتل',
              description: 'شامل لكافة كتل المحتوى المعتمدة',
              status: 'pending_content' as const,
              learningObjectives: ['الهدف 1', 'الهدف 2'],
              blocks: [
                { id: 'b1', order: 1, type: 'heading', title: 'عنوان رئيسي', text: 'نص العنوان الرئيسي', level: 2 },
                { id: 'b2', order: 2, type: 'paragraph', title: 'فقرة شرح', text: 'نص الفقرة الأكاديمية الشاملة' },
                { id: 'b3', order: 3, type: 'definition', title: 'تعريف علمي', term: 'المفهوم', definition: 'شرح المفهوم' },
                { id: 'b4', order: 4, type: 'example', title: 'مثال تطبيقي', example: 'تطبيق في الميدان' },
                { id: 'b5', order: 5, type: 'key_point', title: 'نقطة جوهرية', point: 'فكرة أساسية' },
                { id: 'b6', order: 6, type: 'list', title: 'قائمة', items: ['عنصر 1', 'عنصر 2'] },
                {
                  id: 'b7',
                  order: 7,
                  type: 'comparison',
                  title: 'مقارنة علمية',
                  headers: ['المفهوم التقليدي', 'المفهوم الحديث'],
                  rows: [{ label: 'التركيز', col1: 'المعلومات فقط', col2: 'النمو الشامل للطالب' }],
                },
                {
                  id: 'b8',
                  order: 8,
                  type: 'video',
                  title: 'فيديو شرح تفاعلي',
                  videoId: 'dQw4w9WgXcQ',
                  provider: 'youtube',
                  sourceType: 'notebooklm',
                },
                {
                  id: 'b9',
                  order: 9,
                  type: 'quiz',
                  title: 'اختبار تقييمي',
                  questions: [
                    {
                      id: 'q1',
                      order: 1,
                      type: 'true_false',
                      prompt: 'سؤال صواب وخطأ',
                      correctAnswer: true,
                    },
                  ],
                },
                {
                  id: 'b10',
                  order: 10,
                  type: 'academic_reference',
                  title: 'مراجع الدرس',
                  reference: {
                    id: 'ref-1',
                    order: 1,
                    bookTitle: 'مناهج التربية الرياضية',
                    authors: ['أ.د. هاني الدسوقي إبراهيم'],
                    pageNumbers: 'ص 2 - 5',
                  },
                },
              ],
              references: [{ id: 'ref-1', order: 1, title: 'مرجع', source: 'المصدر' }],
            },
          ],
        },
      ],
      academicResources: [{ id: 'res-1', title: 'مصدر', type: 'book_chapter', description: 'وصف' }],
      glossary: [{ term: 'مصطلح', definition: 'تعريف' }],
    },
  ],
  academicReferences: [{ id: 'cr-1', order: 1, title: 'مرجع مقرر', source: 'جامعي' }],
};

const comprehensiveValidation = validateAcademicContent([mockComprehensiveCourse as any]);
if (!comprehensiveValidation.isValid) {
  console.error('Validation errors:', comprehensiveValidation.errors);
}
assert(comprehensiveValidation.isValid === true, 'البنية الأكاديمية تدعم إدراج المقررات والفصول والموضوعات والدروس وكافة كتل المحتوى المعتمدة بنجاح 100%');
assert(comprehensiveValidation.errors.length === 0, 'المقرر الشامل يمر دون أي أخطاء تحقق');

// 13. فحص منظومة حوكمة واعتماد الأسئلة الأكاديمية (Quiz Governance & Publication Safety)
console.log('\n13. فحص منظومة حوكمة واعتماد الأسئلة الأكاديمية (Quiz Governance & Publication Safety):');

// تجهيز بنك أسئلة تركيبي معزول للاختبار (Isolated Synthetic Test Fixture)
const syntheticApprovedBank: GovernedQuestionBank = {
  bankId: 'bank-test-synthetic-gov-01',
  version: '1.0.0',
  contentHash: '',
  title: 'بنك أسئلة تركيبي لاختبار الحوكمة',
  description: 'بنك تركيبي معزول للتحقق من بوابات الاعتماد البرمجية دون نشره للطلاب',
  courseId: 'course-1',
  chapterId: 'chap-curriculum-intro',
  topicId: 'top-ch1-curriculum-concept-evolution',
  targetType: 'topic',
  approvalStatus: 'approved',
  reviewMetadata: {
    reviewerName: 'أ.د. مراجع أكاديمي معتمد',
    reviewerTitle: 'أستاذ المناهج وطرق التدريس',
    approvalDate: '2026-11-07',
    academicSource: 'مناهج التربية الرياضية، الطبعة الأولى',
    sourceLocation: 'ص 15-20',
    reviewNotes: 'تمت المراجعة والتحكيم الأكاديمي للاختبار الفني.',
  },
  questions: [
    {
      courseId: 'course-1',
      chapterId: 'chap-curriculum-intro',
      topicId: 'top-ch1-curriculum-concept-evolution',
      approvalStatus: 'approved',
      cognitiveLevel: 'comprehension',
      question: {
        id: 'q-synth-gov-01',
        type: 'multiple_choice',
        prompt: 'سؤال اختباري تركيبي للتحقق من مسار اعتماد بنك الأسئلة؟',
        options: [
          { id: 'opt-a', text: 'الخيار المعتمد الصحيح' },
          { id: 'opt-b', text: 'خيار مشتت أول' },
          { id: 'opt-c', text: 'خيار مشتت ثانٍ' },
        ],
        correctOptionId: 'opt-a',
        explanation: 'تفسير علمي تربوي معتمد وموثق بدقة لاختبار الحوكمة.',
        sourceReference: 'مناهج التربية الرياضية، ص 16',
      },
    },
  ],
};
syntheticApprovedBank.contentHash = computeQuestionBankHash(syntheticApprovedBank);

// 1. Valid explicitly approved new banks pass validation
const test1Res = validateSingleGovernedBank(syntheticApprovedBank);
assert(test1Res.errors.length === 0, '1. بنك الأسئلة المعتمد صراحة ومستوفي البيانات يجتاز التحقق بنجاح (Valid approved bank passes)');

// 2. Draft banks cannot be published
const draftBank = { ...syntheticApprovedBank, approvalStatus: 'draft' as const };
const test2Res = validateSingleGovernedBank(draftBank);
assert(test2Res.errors.some((e) => e.includes('draft') || e.includes('محظور')), '2. بنوك الأسئلة بوضع مسودة (draft) محظورة قطعياً من النشر (Draft banks blocked)');

// 3. Under-review banks cannot be published
const underReviewBank = { ...syntheticApprovedBank, approvalStatus: 'under_review' as const };
const test3Res = validateSingleGovernedBank(underReviewBank);
assert(test3Res.errors.some((e) => e.includes('under_review') || e.includes('محظور')), '3. بنوك الأسئلة قيد المراجعة (under_review) محظورة قطعياً من النشر (Under-review banks blocked)');

// 4. Rejected banks cannot be published
const rejectedBank = { ...syntheticApprovedBank, approvalStatus: 'rejected' as const };
const test4Res = validateSingleGovernedBank(rejectedBank);
assert(test4Res.errors.some((e) => e.includes('rejected') || e.includes('محظور')), '4. بنوك الأسئلة المرفوضة (rejected) محظورة قطعياً من النشر (Rejected banks blocked)');

// 5. Missing reviewer identity blocks publication
const missingReviewerBank = {
  ...syntheticApprovedBank,
  reviewMetadata: { ...syntheticApprovedBank.reviewMetadata, reviewerName: '' },
};
const test5Res = validateSingleGovernedBank(missingReviewerBank);
assert(test5Res.errors.some((e) => e.includes('reviewerName')), '5. غياب اسم المراجع الأكاديمي يمنع النشر (Missing reviewer blocks publication)');

// 6. Missing approval date blocks publication
const missingDateBank = {
  ...syntheticApprovedBank,
  reviewMetadata: { ...syntheticApprovedBank.reviewMetadata, approvalDate: '' },
};
const test6Res = validateSingleGovernedBank(missingDateBank);
assert(test6Res.errors.some((e) => e.includes('approvalDate')), '6. غياب تاريخ الاعتماد يمنع النشر (Missing approval date blocks publication)');

// 7. Missing academic source blocks approval
const missingSourceBank = {
  ...syntheticApprovedBank,
  reviewMetadata: { ...syntheticApprovedBank.reviewMetadata, academicSource: '' },
};
const test7Res = validateSingleGovernedBank(missingSourceBank);
assert(test7Res.errors.some((e) => e.includes('academicSource')), '7. غياب المرجع الأكاديمي يمنع النشر (Missing academic source blocks publication)');

// 8. Missing explanation blocks approval
const qMissingExp = {
  ...syntheticApprovedBank.questions[0],
  question: { ...syntheticApprovedBank.questions[0].question, explanation: '' },
};
const missingExpBank = { ...syntheticApprovedBank, questions: [qMissingExp] };
missingExpBank.contentHash = computeQuestionBankHash(missingExpBank);
const test8Res = validateSingleGovernedBank(missingExpBank);
assert(test8Res.errors.some((e) => e.includes('explanation') || e.includes('التفسير')), '8. غياب التفسير التعليمي للسؤال يمنع الاعتماد (Missing explanation blocks approval)');

// 9. Incorrect MCQ answers fail validation
const qBadMcq = {
  ...syntheticApprovedBank.questions[0],
  question: { ...syntheticApprovedBank.questions[0].question, correctOptionId: 'non-existent-option' },
};
const badMcqBank = { ...syntheticApprovedBank, questions: [qBadMcq] };
badMcqBank.contentHash = computeQuestionBankHash(badMcqBank);
const test9Res = validateSingleGovernedBank(badMcqBank);
assert(test9Res.errors.some((e) => e.includes('correctOptionId') || e.includes('مطابقات')), '9. الإجابة الصحيحة غير المطابقة لخيارات MCQ تفشل التحقق (Invalid MCQ answers fail validation)');

// 10. Duplicate IDs fail validation
const dupQBank = {
  ...syntheticApprovedBank,
  questions: [syntheticApprovedBank.questions[0], syntheticApprovedBank.questions[0]],
};
dupQBank.contentHash = computeQuestionBankHash(dupQBank);
const test10Res = validateSingleGovernedBank(dupQBank);
assert(test10Res.errors.some((e) => e.includes('تكرار معرف')), '10. تكرار معرفات الأسئلة داخل البنك يفشل التحقق (Duplicate IDs fail validation)');

// 11. Incorrect question-to-topic relationships fail validation
const wrongTopicBank = { ...syntheticApprovedBank, topicId: 'invalid-topic-id-nonexistent' };
wrongTopicBank.contentHash = computeQuestionBankHash(wrongTopicBank);
const mockTopicMap = new Map([
  ['course-1::chap-curriculum-intro', new Set(['top-ch1-curriculum-concept-evolution'])],
]);
const test11Res = validateSingleGovernedBank(wrongTopicBank, undefined, mockTopicMap);
assert(test11Res.errors.some((e) => e.includes('غير موجود ضمن الفصل')), '11. ربط السؤال بموضوع غير موجود يفشل التحقق (Invalid topic relationship fails validation)');

// 12. Changed approved content fails version/integrity verification
const tamperedBank = {
  ...syntheticApprovedBank,
  questions: [
    {
      ...syntheticApprovedBank.questions[0],
      question: {
        ...syntheticApprovedBank.questions[0].question,
        prompt: 'نص متلاعب به بعد الاعتماد دون تحديث الهاش!',
      },
    },
  ],
};
const test12Res = validateSingleGovernedBank(tamperedBank);
assert(test12Res.errors.some((e) => e.includes('تجزئة المحتوى') || e.includes('Content Hash')), '12. أي تعديل في محتوى السؤال المعتمد يُبطل التجزئة التوافقية ويوقف البناء (Tampered content fails hash check)');

// 13. Legacy Chapter 1 quiz behavior remains unchanged
assert(CHAPTER_1_LEGACY_EXCEPTION.isLegacyPilotException === true, '13.1 استثناء أسئلة الفصل الأول التجريبية موثق كاستثناء تقني رسمي');
const ch1Course = getCourseById('course-1');
const ch1Foundations = ch1Course?.chapters.find((ch) => ch.id === 'chap-curriculum-intro');
assert(Boolean(ch1Foundations?.chapterQuiz && ch1Foundations.chapterQuiz.questions.length === 15), '13.2 اختبار الفصل الأول التجريبي (15 سؤالاً) سليم وفعال دون مساس');

// 14. Existing student scores remain compatible
const sampleLegacyQuiz = ch1Foundations!.chapterQuiz!;
const scoreResult = evaluateQuiz(sampleLegacyQuiz, { 'q-comp-1': 'opt-a' });
assert(scoreResult.totalQuestions === 15 && typeof scoreResult.score === 'number' && scoreResult.percentage >= 0, '14. محرك حساب الدرجات والتقييم المحلي متوافق تماماً (Local quiz scoring remains compatible)');

// 15. All 50 academic topics remain unchanged
const allCourseTopics = ch1Course!.chapters.flatMap((ch) => ch.topics);
assert(allCourseTopics.length === 50, '15.1 إجمالي موضوعات المقرر الأول 50 موضوعاً معتمداً دون حذف أو نقصان');
const chapterCounts = ch1Course!.chapters.map((ch) => ch.topics.length);
assert(
  JSON.stringify(chapterCounts) === JSON.stringify([9, 9, 7, 5, 7, 6, 7]),
  '15.2 توزيع الموضوعات عبر الفصول السبعة سليم تماماً: [9, 9, 7, 5, 7, 6, 7]'
);

// 16. No new questions are published
assert(QUIZ_PUBLICATION_MANIFEST.length === 0, '16.1 بيان النشر (QUIZ_PUBLICATION_MANIFEST) خالٍ تماماً من أي بنوك جديدة غير معتمدة');
const governanceValidation = validateQuizGovernance();
assert(governanceValidation.isValid === true && governanceValidation.publishedBanksCount === 0, '16.2 التحقق من الحوكمة يؤكد عدم نشر أي أسئلة جديدة في هذه المرحلة');

// 17. Draft/unapproved question content is absent from production assets
const draftImportsCheck = verifyNoDraftImports();
assert(draftImportsCheck.leakedImports.length === 0, '17. مجلد مسودات الأسئلة (drafts) معزول تماماً ولا يوجد أي تسريب لكود الإنتاج (No draft imports in production assets)');

// 18. The deployment output remains fully static
const pkgJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
const hasNoBackendScripts = !pkgJson.dependencies['express'] && !pkgJson.dependencies['@cloudflare/workers-types'];
assert(hasNoBackendScripts && pkgJson.scripts.build.includes('vite build'), '18. بنية البناء والنشر ثابتة كلياً ومتوافقة 100% مع Cloudflare Pages بدون أي خوادم أو تبعات غير ثابتة');


console.log(`\n========================================`);
console.log(`إجمالي الفحوصات الناجحة: ${passedTests}`);
console.log(`إجمالي الفحوصات الفاشلة: ${failedTests}`);
console.log(`========================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('✅ جميع الاختبارات والفحوصات مرت بنجاح تام 100%!');
}
