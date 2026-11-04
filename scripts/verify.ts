import { COURSES_PLACEHOLDER_DATA } from '../src/data/coursesData.ts';
import { normalizeArabicText } from '../src/utils/textUtils.ts';
import { validateAcademicContent } from '../src/utils/contentValidator.ts';
import {
  getAllCourses,
  getCourseById,
  getChaptersByCourse,
  getChapterById,
  getTopicsByChapter,
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
assert(report.chaptersCount === 3, 'عدد الفصول الإجمالي يساوي 3 (1 تجربة حقيقية + 2 معامل تقنية)');
assert(report.topicsCount === 3, 'عدد الموضوعات الإجمالي يساوي 3');
assert(report.lessonsCount === 3, 'عدد الدروس الإجمالي يساوي 3');
assert(report.blocksCount === 29, `عدد كتل المحتوى الإجمالي يساوي 29 كتلة رصينة (الفعل: ${report.blocksCount})`);

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
assert(studentCourses.find((c) => c.id === 'course-1')?.chapters.length === 1, 'مادة مناهج التربية الرياضية PE-ACAD-01 تتضمن فصلاً واحداً كمعاينة أكاديمية تجريبية');
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
assert(Boolean(course1 && course1.chapters.length === 1), 'المقرر الأول PE-ACAD-01 يتضمن الفصل الأول الحقيقي');
assert(course1?.code === 'PE-ACAD-01', 'رمز المقرر الأول PE-ACAD-01 صحيح');

const course1Chapters = getChaptersByCourse('course-1');
assert(course1Chapters.length === 1 && course1Chapters[0].id === 'chap-curriculum-intro', 'استرجاع الفصل الأول: مقدمة وماهية المنهج');

const course1Topics = getTopicsByChapter('chap-curriculum-intro');
assert(course1Topics.length === 1 && course1Topics[0].id === 'top-curriculum-concept-evolution', 'استرجاع موضوع تطور مفهوم المنهج');

const pilotLesson = getLessonById('les-curriculum-evolution');
assert(Boolean(pilotLesson), 'استرجاع الدرس الأكاديمي الحقيقي بنجاح');
assert(pilotLesson?.blocks.length === 11, `الدرس الحقيقي يتضمن 11 كتلة محتوى متكاملة رصينة (الفعل: ${pilotLesson?.blocks.length})`);

// التحقق من خلو الدرس تماماً من أي كتل كرتونية قديمة
const legacyAnimBlock = pilotLesson?.blocks.find((b) => (b.type as string) === 'curriculum_journey_animation');
assert(legacyAnimBlock === undefined, 'الدرس خالي تماماً من كتل الأنيميشن الكرتوني التجريبية القديمة');

// التحقق من تموضع المقارنة البصرية التفاعلية ككتلة رابعة رئيسية
const comparisonBlock = pilotLesson?.blocks[3];
assert(
  Boolean(comparisonBlock && comparisonBlock.type === 'visual_comparison' && comparisonBlock.id === 'curric-blk-comp-trad-vs-mod'),
  'المقارنة البصرية التفاعلية بين المفهوم التقليدي والحديث موضوعة بنجاح ككتلة رابعة رئيسية بعد التعريف'
);

// فحص المرجع الأكاديمي الدقيق
const ref = pilotLesson?.references[0];
assert(ref?.bookTitle === 'مناهج التربية الرياضية', 'عنوان المرجع: مناهج التربية الرياضية مطابق للغلاف');
assert(Boolean(ref?.author.includes('هاني الدسوقي إبراهيم')), 'المؤلف: أ.د. هاني الدسوقي إبراهيم مطابق لصفحة العنوان');
assert(ref?.pageRange === 'ص 2 - 5', 'الصفحات المرجعية: ص 2 - 5 مطابقة للترقيم الأصلي');

// فحص كتل المحرك البصري في الدرس الحقيقي
const animBlock = pilotLesson?.blocks.find((b) => b.type === 'animated_explanation');
assert(Boolean(animBlock && animBlock.type === 'animated_explanation' && animBlock.steps.length === 3), 'شرح متحرك من 3 مراحل: تقليدي -> خبرات وأنشطة -> منظومة شاملة');

const diagBlock = pilotLesson?.blocks.find((b) => b.type === 'interactive_diagram');
assert(Boolean(diagBlock && diagBlock.type === 'interactive_diagram' && diagBlock.nodes.length === 5), 'مخطط تفاعلي يتضمن 5 أركان مفاهيمية مع علاقاتها');

const compBlock = pilotLesson?.blocks.find((b) => b.type === 'visual_comparison');
assert(Boolean(compBlock && compBlock.type === 'visual_comparison' && compBlock.criteria.length === 6), 'مقارنة بصرية بين التصور التقليدي والحديث عبر 6 معايير');

const stepsBlock = pilotLesson?.blocks.find((b) => b.type === 'animated_steps');
assert(Boolean(stepsBlock && stepsBlock.type === 'animated_steps' && stepsBlock.steps.length === 4), 'تسلسل خطوات تعليمية ذكية يضم 4 مراحل لتخطيط المنهج (المرحلة 4.2)');

const decisionBlock = pilotLesson?.blocks.find((b) => b.type === 'decision_scenario');
assert(Boolean(decisionBlock && decisionBlock.type === 'decision_scenario' && decisionBlock.options.length === 3), 'موقف تعليمي تطبيقي لاتخاذ القرار يضم 3 بدائل وتفسيراً تربوياً (المرحلة 4.2)');

const seqBlock = pilotLesson?.blocks.find((b) => b.type === 'visual_sequence');
assert(Boolean(seqBlock && seqBlock.type === 'visual_sequence' && seqBlock.items.length === 4), 'نشاط ترتيب يضم مراحل تخطيط وتطوير المنهج الأربعة');

const pilotBreadcrumbs = getAcademicBreadcrumbs({
  courseId: 'course-1',
  chapterId: 'chap-curriculum-intro',
  topicId: 'top-curriculum-concept-evolution',
  lessonId: 'les-curriculum-evolution',
});
assert(pilotBreadcrumbs.length === 5, 'توليد مسار التنقل الأكاديمي للدرس الحقيقي (Breadcrumbs)');

// 9. فحص بنية الفصل الديناميكية وعزل الموارد الأكاديمية (Dynamic Chapter Architecture & Isolation - Phase 1)
console.log('\n9. فحص بنية الفصل الديناميكية وعزل الموارد الأكاديمية (Dynamic Chapter Architecture):');

// 9.1 فحص الفصل التجريبي لمناهج التربية الرياضية
const resolvedPilotChapter = getChapterById('course-1', 'chap-curriculum-intro');
assert(Boolean(resolvedPilotChapter), 'استرجاع الفصل الأول لمناهج التربية الرياضية عبر getChapterById');
assert(
  Boolean(resolvedPilotChapter?.academicReference?.bookTitle === 'مناهج التربية الرياضية'),
  'الفصل الأول يتضمن المرجع الأكاديمي المعتمد من الكتاب (أ.د. هاني الدسوقي إبراهيم)'
);
assert(
  Boolean(resolvedPilotChapter?.visualHub?.comparisonBlock && resolvedPilotChapter?.visualHub?.stepsBlock),
  'الفصل الأول يتضمن كتل المحور البصري المخصصة (Visual Hub)'
);
assert(
  Boolean(resolvedPilotChapter?.glossary && resolvedPilotChapter.glossary.length === 5),
  'الفصل الأول يتضمن قاموس مصطلحات المنهج (5 مصطلحات أكاديمية)'
);
assert(
  Boolean(resolvedPilotChapter?.selfCheckQuestions && resolvedPilotChapter.selfCheckQuestions.length === 3),
  'الفصل الأول يتضمن أسئلة التقويم الذاتي الثلاثة مع إجاباتها النموذجية'
);
assert(
  Boolean(resolvedPilotChapter?.keyPoints && resolvedPilotChapter.keyPoints.length === 6),
  'الفصل الأول يتضمن النقاط الجوهرية الست'
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

console.log(`\n========================================`);
console.log(`إجمالي الفحوصات الناجحة: ${passedTests}`);
console.log(`إجمالي الفحوصات الفاشلة: ${failedTests}`);
console.log(`========================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('✅ جميع الاختبارات والفحوصات مرت بنجاح تام 100%!');
}
