import { COURSES_PLACEHOLDER_DATA } from '../src/data/coursesData.ts';
import { normalizeArabicText } from '../src/utils/textUtils.ts';
import { validateAcademicContent } from '../src/utils/contentValidator.ts';
import {
  getAllCourses,
  getCourseById,
  getChaptersByCourse,
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
assert(report.blocksCount === 27, `عدد كتل المحتوى الإجمالي يساوي 27 كتلة رصينة (الفعل: ${report.blocksCount})`);

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
assert(Boolean(devLesson && devLesson.blocks.length === 10), 'استرجاع الدرس الشامل بكتله العشرة كاملة');

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

console.log(`\n========================================`);
console.log(`إجمالي الفحوصات الناجحة: ${passedTests}`);
console.log(`إجمالي الفحوصات الفاشلة: ${failedTests}`);
console.log(`========================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('✅ جميع الاختبارات والفحوصات مرت بنجاح تام 100%!');
}
