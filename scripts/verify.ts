import { COURSES_PLACEHOLDER_DATA } from '../src/data/coursesData.ts';
import { normalizeArabicText } from '../src/utils/textUtils.ts';
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

// 1. فحص بيانات المقررات السبعة
console.log('\n1. فحص سلامة المقررات الأكاديمية السبعة:');
assert(COURSES_PLACEHOLDER_DATA.length === 7, 'عدد المقررات يساوي 7 بالضبط');

COURSES_PLACEHOLDER_DATA.forEach((course, idx) => {
  const expectedNum = idx + 1;
  assert(course.orderNumber === expectedNum, `المقرر ${expectedNum}: الترتيب صحيح (${expectedNum})`);
  assert(course.id === `course-${expectedNum}`, `المقرر ${expectedNum}: المعرف id صحيح (${course.id})`);
  assert(course.code === `PE-ACAD-0${expectedNum}`, `المقرر ${expectedNum}: الرمز code صحيح (${course.code})`);
  assert(course.status === 'pending_content', `المقرر ${expectedNum}: الحالة pending_content`);
  assert(Boolean(course.title && course.title.trim()), `المقرر ${expectedNum}: العنوان موجود`);
  assert(Boolean(course.targetBookReference), `المقرر ${expectedNum}: مرجع الكتاب موجود`);
  assert(course.architecture.lessonsPlanned === true, `المقرر ${expectedNum}: بنية الدروس مخططة`);
  assert(course.architecture.quizzesPlanned === true, `المقرر ${expectedNum}: بنية الاختبارات مخططة`);
  assert(course.architecture.simulationsPlanned === true, `المقرر ${expectedNum}: بنية المحاكاة مخططة`);
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

assert(searchCourses('').length === 7, 'البحث الفارغ يعيد جميع المقررات السبعة');
assert(searchCourses('1').length >= 1 && searchCourses('1')[0].id === 'course-1', 'البحث برقم 1 يجد المقرر الأول');
assert(searchCourses('١').length >= 1 && searchCourses('١')[0].id === 'course-1', 'البحث برقم ١ (أرقام مشرقية) يجد المقرر الأول');
assert(searchCourses('الاول').length >= 1 && searchCourses('الاول')[0].id === 'course-1', 'البحث بكلمة الاول (بدون همزة) يجد المقرر الأول');
assert(searchCourses('السابع').length >= 1 && searchCourses('السابع')[0].id === 'course-7', 'البحث بكلمة السابع يجد المقرر السابع');
assert(searchCourses('PE-ACAD-04').length === 1 && searchCourses('PE-ACAD-04')[0].id === 'course-4', 'البحث بالرمز PE-ACAD-04 يجد المقرر الرابع');
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

console.log(`\n========================================`);
console.log(`إجمالي الفحوصات الناجحة: ${passedTests}`);
console.log(`إجمالي الفحوصات الفاشلة: ${failedTests}`);
console.log(`========================================`);

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('✅ جميع الاختبارات والفحوصات مرت بنجاح تام 100%!');
}
