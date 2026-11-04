/**
 * devRouteGuard.ts
 * فحص عزل مسارات وبيانات التطوير (Development Sandbox & Logo Preview)
 *
 * الغرض:
 * حماية بيئة الإنتاج من وصول الطلاب والجمهور إلى مسارات التطوير التجريبية
 * مثل (/dev-sandbox, /visual-sandbox, /logo-preview, /courses/dev-sandbox, /courses/visual-sandbox)
 * 
 * القواعد الصارمة:
 * 1. في بيئة التطوير (import.meta.env.DEV): متاحة دائماً لجميع المطورين والمهندسين.
 * 2. في بيئة الإنتاج (import.meta.env.PROD): محجوبة تماماً افتراضياً وتعيد التوجيه لمسار المقررات /courses أو صفحة 404.
 * 3. في بيئة الإنتاج أثناء فحص الجودة المعتمد: إذا مرر المهندس صراحة ?preview=true في الرابط، يُسمح بالمعاينة لأغراض التدقيق الفني.
 *
 * قيود الحماية من جانب العميل (Client-Side Route Protection Limitations):
 * في تطبيقات الصفحة الواحدة الثابتة (SPA) المنشورة على Cloudflare Pages دون خادم خلفي،
 * تعتمد حماية المسارات على موجهات React Router من جانب العميل، مما يحمي الواجهة ويوجه المستخدم العادي بعيداً عن المسارات التجريبية.
 */

export function isDevSandboxAllowed(): boolean {
  // بيئة التطوير المحلية (Local Development)
  if (import.meta.env.DEV) {
    return true;
  }

  // في المتصفح إذا تم طلب المعاينة بوضوح
  if (typeof window !== 'undefined' && window.location.search.includes('preview=true')) {
    return true;
  }

  return false;
}
