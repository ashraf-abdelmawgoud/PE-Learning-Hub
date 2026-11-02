import { validateAcademicContent } from '../src/utils/contentValidator.ts';

console.log('--- بدء التدقيق الأكاديمي الصارم قبل البناء (Academic Content Validation) ---');

const report = validateAcademicContent();

if (!report.isValid || report.errors.length > 0) {
  console.error('\n❌ فشل التحقق من سلامة المحتوى الأكاديمي! تم اكتشاف أخطاء جوهرية تمنع البناء والنشر:');
  for (const err of report.errors) {
    console.error(`  - [خطأ جسيم] (${err.entity} ID: "${err.id}"): ${err.message}`);
  }
  console.error(`\nإجمالي الأخطاء: ${report.errors.length}. تم إيقاف عملية البناء (Build Aborted) لحماية منصة الطلاب.`);
  process.exit(1);
}

if (report.warnings.length > 0) {
  console.warn(`\n⚠️ تنبيهات تدقيق المحتوى (${report.warnings.length}):`);
  for (const warn of report.warnings) {
    console.warn(`  - [تنبيه] (${warn.entity} ID: "${warn.id}"): ${warn.message}`);
  }
}

console.log(`✅ فحص المحتوى الأكاديمي سليم بنسبة 100%:`);
console.log(`   - المقررات المفحوصة: ${report.coursesCount}`);
console.log(`   - الفصول الدراسية: ${report.chaptersCount}`);
console.log(`   - الموضوعات: ${report.topicsCount}`);
console.log(`   - الدروس: ${report.lessonsCount}`);
console.log(`   - كتل المحتوى: ${report.blocksCount}`);
console.log('   - لا توجد أخطاء بنيوية أو معرفات مكررة أو روابط تالفة.');
console.log('--- اكتمال التدقيق بنجاح: التصريح بالانتقال لمرحلة البناء ---\n');
process.exit(0);

