import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const distPath = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

// إنشاء خادم محاكي لـ Cloudflare Pages SPA بنفس القاعدة /* /index.html 200
const server = http.createServer((req, res) => {
  const urlPath = req.url?.split('?')[0] || '/';
  const filePath = path.join(distPath, urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    let contentType = 'text/plain';
    if (ext === '.html') contentType = 'text/html';
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.svg') contentType = 'image/svg+xml';
    if (ext === '.webp') contentType = 'image/webp';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(fs.readFileSync(filePath));
  } else {
    // Cloudflare SPA fallback
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(indexHtml);
  }
});

server.listen(4173, '127.0.0.1', async () => {
  console.log('--- بدء فحص مسارات التطبيق واستجابتها في بيئة الإنتاج الثابتة (Cloudflare SPA Simulation) ---');
  
  const routesToTest = [
    { name: 'الصفحة الرئيسية', path: '/' },
    { name: 'دليل المواد الدراسية الست', path: '/courses' },
    { name: 'تفاصيل مادة مناهج التربية الرياضية', path: '/courses/course-1' },
    { name: 'فصل مناهج التربية الرياضية الأول', path: '/courses/course-1/chapters/chap-curriculum-intro' },
    { name: 'فصل أسس بناء المنهج المدرسي', path: '/courses/course-1/chapters/chap-curriculum-foundations' },
    { name: 'فصل 2 - موضوع 1: مدخل إلى أسس بناء المنهج والتنظيمات', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-curriculum-foundations-intro' },
    { name: 'فصل 2 - موضوع 2: الأساس النفسي للمنهج وطبيعة المتعلم (معرف أصلي محفوظ)', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-psychological-foundation' },
    { name: 'فصل 2 - موضوع 3: نمو الإنسان ومشكلاته وعلاقته بالمنهج', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-human-growth-issues' },
    { name: 'فصل 2 - موضوع 4: حاجات المتعلمين والتعلم والتعليم', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-learner-needs-learning-teaching' },
    { name: 'فصل 2 - موضوع 5: الأساس الفلسفي للمنهج والفلسفة والتربية (معرف أصلي محفوظ)', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-philosophical-foundation' },
    { name: 'فصل 2 - موضوع 6: الفلسفات ذات الصبغة التقليدية: الفلسفة المثالية', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-traditional-philosophies-idealism' },
    { name: 'فصل 2 - موضوع 7: المنهج ومشكلات المجتمع العربي', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-curriculum-arab-society-problems' },
    { name: 'فصل 2 - موضوع 8: الأسس المعرفية ومصادر المعرفة (معرف أصلي محفوظ)', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-knowledge-foundation' },
    { name: 'فصل 2 - موضوع 9: تنظيم بنية المعرفة والمنهج', path: '/courses/course-1/chapters/chap-curriculum-foundations/topics/top-ch2-knowledge-structure-organization' },
    { name: 'فصل عناصر المنهج', path: '/courses/course-1/chapters/chap-curriculum-elements' },
    { name: 'فصل 3 - موضوع 1: البناء الهيكلي لعناصر المنهج الأربعة', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-curriculum-core-elements' },
    { name: 'فصل 3 - موضوع 2: دليل معلم التربية الرياضية', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-teacher-guide' },
    { name: 'فصل 3 - موضوع 3: الكتاب المدرسي في التربية الرياضية', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-textbook-physical-education' },
    { name: 'فصل 3 - موضوع 4: معلم التربية الرياضية والمتعلم', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-pe-teacher-learner' },
    { name: 'فصل 3 - موضوع 5: طرق التدريس المناسبة والوسائل التعليمية', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-teaching-methods-media' },
    { name: 'فصل 3 - موضوع 6: القيادات التربوية والإدارية المباشرة', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-educational-admin-leadership' },
    { name: 'فصل 3 - موضوع 7: المحيط البيئي والمجتمعي الداعم', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-school-environment-community' },
    { name: 'فصل 3 - المسار التوافقي للموضوع المظلي القديم', path: '/courses/course-1/chapters/chap-curriculum-elements/topics/top-ch3-implementation-elements' },
    { name: 'فصل العوامل المؤثرة في بناء المنهج', path: '/courses/course-1/chapters/chap-curriculum-factors' },
    { name: 'فصل 4 - موضوع 1: التمهيد ومفهوم المنهج', path: '/courses/course-1/chapters/chap-curriculum-factors/topics/top-ch4-intro-traditional-contemporary-mission' },
    { name: 'فصل 4 - موضوع 2: العوامل الخمسة الرئيسية', path: '/courses/course-1/chapters/chap-curriculum-factors/topics/top-ch4-influencing-factors' },
    { name: 'فصل 4 - موضوع 3: المكونات الخمسة الأولى للصيغة المطلوبة', path: '/courses/course-1/chapters/chap-curriculum-factors/topics/top-ch4-future-curriculum-first-five-components' },
    { name: 'فصل 4 - موضوع 4: منظومة المهارات والقيم ورعاية اللغات', path: '/courses/course-1/chapters/chap-curriculum-factors/topics/top-ch4-skills-values-languages' },
    { name: 'فصل 4 - موضوع 5: المحاور التنظيمية والإيمانية والبحثية', path: '/courses/course-1/chapters/chap-curriculum-factors/topics/top-ch4-organizational-faith-research-axes' },
    { name: 'فصل 4 - المسار التوافقي للموضوع المظلي القديم', path: '/courses/course-1/chapters/chap-curriculum-factors/topics/top-ch4-future-curriculum-formula' },
    { name: 'فصل تصميمات وتنظيمات المنهاج المدرسية', path: '/courses/course-1/chapters/chap-curriculum-designs' },
    { name: 'فصل 5 - موضوع 1: المدخل التأسيسي لتصميم المنهاج', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-curriculum-design-foundations' },
    { name: 'فصل 5 - موضوع 2: المبادئ التربوية والمستويات الإدارية', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-design-principles-levels' },
    { name: 'فصل 5 - موضوع 3: مناهج المواد الدراسية', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-subject-matter-curricula' },
    { name: 'فصل 5 - موضوع 4: منهج النشاط', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-activity-curriculum' },
    { name: 'فصل 5 - موضوع 5: المنهج المحوري ومنهج الوحدة الدراسية', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-core-and-unit-curriculum' },
    { name: 'فصل 5 - موضوع 6: المنهج التكنولوجي وجدول المقارنة', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-technological-curriculum-comparison' },
    { name: 'فصل 5 - موضوع 7: الخصائص الجوهرية لمنهاج التربية الرياضية', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-pe-curriculum-characteristics' },
    { name: 'فصل 5 - المسار التوافقي للمبادئ القديمة', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-design-principles' },
    { name: 'فصل 5 - المسار التوافقي للتنظيمات القديمة', path: '/courses/course-1/chapters/chap-curriculum-designs/topics/top-ch5-curriculum-organizations' },
    { name: 'الموضوع السادس: تصميم وحدة دراسية', path: '/courses/course-1/chapters/chap-curriculum-unit-design' },
    { name: 'الموضوع السابع: تخطيط المنهج المدرسي', path: '/courses/course-1/chapters/chap-curriculum-planning' },
    { name: 'موضوع 1: التنمية الشاملة', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-curriculum-comprehensive-dev' },
    { name: 'موضوع 2: التغيرات العلمية والتعلم الذاتي', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-tech-change-self-learning' },
    { name: 'موضوع 3: الدور الحديث للمعلم والمتعلم', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-modern-role-teacher-learner' },
    { name: 'موضوع 4: تخطيط المناهج والتكيفية', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-curriculum-planning-adaptive' },
    { name: 'موضوع 5: استخدام التكنولوجيا والحاسب', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-tech-computers-in-curriculum' },
    { name: 'موضوع 6: ماهية المنهج', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-nature' },
    { name: 'موضوع 7: تعريفات المناهج قديمًا وحديثًا', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-trad-vs-mod' },
    { name: 'موضوع 8: تعريفات المنهج', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-definitions' },
    { name: 'موضوع 9: المنهج في اللغة', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-language' },
    { name: 'المسار التوافقي للموضوع الأول', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-curriculum-concept-evolution' },
    { name: 'درس تطور مفهوم المنهج الحقيقي', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-ch1-curriculum-comprehensive-dev/lessons/les-curriculum-evolution' },
    { name: 'تفاصيل مادة التعليم الحركي', path: '/courses/course-2' },
    { name: 'تفاصيل مادة البحث العلمي', path: '/courses/course-3' },
    { name: 'تفاصيل مادة التربية المقارنة', path: '/courses/course-4' },
    { name: 'تفاصيل مادة المضرب', path: '/courses/course-5' },
    { name: 'تفاصيل مادة المضمار', path: '/courses/course-6' },
    { name: 'المقرر التجريبي التقني', path: '/courses/dev-sandbox' },
    { name: 'فصل في المقرر التجريبي', path: '/courses/dev-sandbox/chapters/dev-chap-1' },
    { name: 'موضوع في الفصل التجريبي', path: '/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1' },
    { name: 'الدرس التجريبي الشامل لكتل المحتوى', path: '/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1/lessons/dev-les-1' },
    { name: 'صفحة عن المنصة', path: '/about' },
    { name: 'معمل المحرك البصري التجريبي', path: '/courses/visual-sandbox' },
    { name: 'درس المحرك البصري والأنيميشن', path: '/courses/visual-sandbox/chapters/vis-chap-1/topics/vis-top-1/lessons/vis-les-1' },
    { name: 'مسار معمل المحرك البصري المختصر', path: '/visual-sandbox' },
    { name: 'فصل غير موجود لمادة موجودة (404 Chapter)', path: '/courses/course-1/chapters/non-existent-chap' },
    { name: 'فصل لمادة غير موجودة (404 Course)', path: '/courses/non-existent-course/chapters/chap-1' },
    { name: 'مسار غير موجود (404 Fallback)', path: '/some-random-route' },
  ];

  let passed = 0;
  let failed = 0;

  for (const item of routesToTest) {
    try {
      const res = await fetch(`http://127.0.0.1:4173${item.path}`);
      const body = await res.text();
      const isOk = res.status === 200 && body.includes('dir="rtl"') && body.includes('lang="ar"');

      if (isOk) {
        console.log(`  [PASS] ${item.name.padEnd(38)} (${item.path}) -> Status: 200 OK | RTL: نعم`);
        passed++;
      } else {
        console.error(`  [FAIL] ${item.name.padEnd(38)} (${item.path}) -> Status: ${res.status}`);
        failed++;
      }
    } catch (err: unknown) {
      console.error(`  [FAIL] ${item.name.padEnd(38)} (${item.path}) -> خطأ: ${err instanceof Error ? err.message : String(err)}`);
      failed++;
    }
  }

  // فحص ملفات الأصول ديناميكياً
  const assetFiles = fs.existsSync(path.join(distPath, 'assets'))
    ? fs.readdirSync(path.join(distPath, 'assets'))
    : [];
  const jsFile = assetFiles.find((f) => f.endsWith('.js'));
  const cssFile = assetFiles.find((f) => f.endsWith('.css'));

  if (jsFile) {
    const assetTest = await fetch(`http://127.0.0.1:4173/assets/${jsFile}`);
    if (assetTest.status === 200 && assetTest.headers.get('content-type')?.includes('javascript')) {
      console.log(`  [PASS] تحميل ملف حزمة JavaScript الأساسي (${jsFile}) بنجاح`);
      passed++;
    } else {
      console.error(`  [FAIL] تعذر تحميل ملف حزمة JavaScript (${jsFile})`);
      failed++;
    }
  }

  if (cssFile) {
    const cssTest = await fetch(`http://127.0.0.1:4173/assets/${cssFile}`);
    if (cssTest.status === 200 && cssTest.headers.get('content-type')?.includes('css')) {
      console.log(`  [PASS] تحميل ملف التنسيقات CSS الأساسي (${cssFile}) بنجاح`);
      passed++;
    } else {
      console.error(`  [FAIL] تعذر تحميل ملف التنسيقات CSS (${cssFile})`);
      failed++;
    }
  }

  // فحص أصل الرسم الرياضي المعتمد في الواجهة (Approved Sports Illustration WebP Asset)
  const heroTest = await fetch('http://127.0.0.1:4173/assets/hero/athletes_lowpoly_transparent.webp');
  if (heroTest.status === 200 && heroTest.headers.get('content-type')?.includes('webp')) {
    console.log('  [PASS] تحميل أصل الرسم الرياضي المعتمد (athletes_lowpoly_transparent.webp) بنجاح');
    passed++;
  } else {
    console.error('  [FAIL] تعذر تحميل أصل الرسم الرياضي المعتمد');
    failed++;
  }

  server.close(() => {
    console.log(`\n========================================`);
    console.log(`إجمالي فحوصات المسارات الناجحة: ${passed}`);
    console.log(`إجمالي فحوصات المسارات الفاشلة: ${failed}`);
    console.log(`========================================`);

    if (failed > 0) {
      process.exitCode = 1;
    } else {
      console.log('✅ جميع المسارات والأصول تستجيب بنجاح 100% وفق معايير Cloudflare SPA.');
      process.exitCode = 0;
    }
  });
});
