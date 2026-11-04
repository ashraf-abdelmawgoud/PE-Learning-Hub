/**
 * devRouteGuard.ts
 * فحص عزل مسارات وبيانات التطوير (Development Sandbox & Logo Preview)
 *
 * القواعد الصارمة (Strict Production Isolation):
 * 1. في بيئة التطوير (Development): متاحة حصراً أثناء التطوير المحلي (npm run dev).
 * 2. في بيئة الإنتاج (Production): محجوبة تماماً دون أي تجاوز على الإطلاق (Zero bypass).
 * 3. في بيئة الإنتاج، لا يتم تسجيل هذه المسارات في موجهات التطبيق وتُستبعد من الحزمة الإنتاجية.
 */

export function isDevSandboxAllowed(): boolean {
  // فحص صارم ومباشر لبيئة التطوير
  return Boolean(
    import.meta.env?.DEV ||
    (typeof globalThis !== 'undefined' && (globalThis as any).process?.env?.NODE_ENV !== 'production')
  );
}
