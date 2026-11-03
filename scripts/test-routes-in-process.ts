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
    { name: 'دليل المقررات السبعة', path: '/courses' },
    { name: 'تفاصيل المقرر الأول', path: '/courses/course-1' },
    { name: 'فصل مناهج التربية الرياضية الأول', path: '/courses/course-1/chapters/chap-curriculum-intro' },
    { name: 'موضوع تطور مفهوم المنهج', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-curriculum-concept-evolution' },
    { name: 'درس تطور مفهوم المنهج الحقيقي', path: '/courses/course-1/chapters/chap-curriculum-intro/topics/top-curriculum-concept-evolution/lessons/les-curriculum-evolution' },
    { name: 'تفاصيل المقرر السابع', path: '/courses/course-7' },
    { name: 'المقرر التجريبي التقني', path: '/courses/dev-sandbox' },
    { name: 'فصل في المقرر التجريبي', path: '/courses/dev-sandbox/chapters/dev-chap-1' },
    { name: 'موضوع في الفصل التجريبي', path: '/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1' },
    { name: 'الدرس التجريبي الشامل لكتل المحتوى', path: '/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1/lessons/dev-les-1' },
    { name: 'صفحة عن المنصة', path: '/about' },
    { name: 'معمل المحرك البصري التجريبي', path: '/courses/visual-sandbox' },
    { name: 'درس المحرك البصري والأنيميشن', path: '/courses/visual-sandbox/chapters/vis-chap-1/topics/vis-top-1/lessons/vis-les-1' },
    { name: 'مسار معمل المحرك البصري المختصر', path: '/visual-sandbox' },
    { name: 'معاينة تجربة الأنيميشن التعليمي 2D (المرحلة 4.1)', path: '/curriculum-animation' },
    { name: 'مسار مختصر لأنيميشن تطور المنهج', path: '/pilot-animation' },
    { name: 'معاينة شخصية المعلم المفصلية (Coach Rig PoC)', path: '/coach-poc' },
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

  // فحص أصول نموذج المعلم (Coach PoC WebP Assets)
  const coachWebpAssets = [
    'coach_body_full.webp',
    'coach_head_full.webp',
    'coach_arm_full.webp'
  ];
  for (const asset of coachWebpAssets) {
    const webpTest = await fetch(`http://127.0.0.1:4173/assets/poc/coach/${asset}`);
    if (webpTest.status === 200 && webpTest.headers.get('content-type')?.includes('webp')) {
      console.log(`  [PASS] تحميل أصل المعلم المفصلي (${asset}) بنجاح`);
      passed++;
    } else {
      console.error(`  [FAIL] تعذر تحميل أصل المعلم (${asset})`);
      failed++;
    }
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
