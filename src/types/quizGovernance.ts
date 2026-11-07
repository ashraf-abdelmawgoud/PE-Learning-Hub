/**
 * quizGovernance.ts
 *
 * نموذج حوكمة وتدقيق واعتماد الأسئلة الأكاديمية لمنصة OloomSport
 * Stage 1: Academic Approval, Build-Time Validation & Static Architecture
 *
 * المبادئ الحاكمة:
 * 1. بنية ثابتة كلياً (100% Static) متوافقة تماماً مع Cloudflare Pages بدون أي خوادم أو قواعد بيانات.
 * 2. الحوكمة غير متصلة (Offline Review Workflow) من خلال مراجع أكاديمي متخصص معتمد.
 * 3. حظر تسليم أو بناء أي سؤال بوضع مسودة (draft) أو قيد المراجعة (under_review) أو مرفوض (rejected).
 * 4. التحقق الصارم وقت البناء (Build-Time Deterministic Verification) عبر التجزئة التوافقية (Content Hash).
 * 5. الحفاظ التام على استثناء أسئلة الفصل الأول التجريبية الموثقة دون تزييف بيانات اعتمادها.
 */

import type {
  QuizQuestion,
} from './academic';

/**
 * حالات الاعتماد الأكاديمي للأسئلة وبنوك الأسئلة
 */
export type QuizApprovalStatus =
  | 'draft'         // مسودة أولية قيد الإعداد الأكاديمي (محظورة من النشر)
  | 'under_review'  // قيد الفحص والمراجعة الأكاديمية (محظورة من النشر)
  | 'approved'      // معتمدة رسمياً ومصرح بنشرها في بيئة الإنتاج
  | 'rejected';     // مرفوضة أكاديمياً لوجود خلل علمي أو تربوي (محظورة من النشر)

/**
 * المستويات المعرفية التربوية للسؤال (اختياري)
 */
export type QuestionCognitiveLevel =
  | 'direct_recall'       // تذكر واستدعاء مباشر
  | 'comprehension'       // فهم واستيعاب المفاهيم
  | 'applied_analysis';   // تطبيق وتحليل مهاري أو حركي

/**
 * البيانات الوصفية للاعتماد والمراجعة الأكاديمية
 * (يُحظر تزييفها أو توليدها آلياً بواسطة المطور أو الذكاء الاصطناعي)
 */
export interface AcademicReviewMetadata {
  /** اسم الأستاذ / المراجع الأكاديمي المعتمد المسؤول عن صحة السؤال */
  reviewerName: string;
  /** الصفة الأكاديمية للمراجع (مثال: أستاذ مناهج التربية الرياضية) */
  reviewerTitle?: string;
  /** تاريخ الاعتماد الأكاديمي بصيغة YYYY-MM-DD */
  approvalDate: string;
  /** المرجع الأكاديمي المعتمد من كتاب المقرر */
  academicSource: string;
  /** تفاصيل الموضع في الكتاب (الطبعة، الفصل، أرقام الصفحات الأصلية) */
  sourceLocation?: string;
  /** ملاحظات المراجعة الأكاديمية أو معايير التحكيم */
  reviewNotes?: string;
}

/**
 * سؤال تقويم خاضع للحوكمة الأكاديمية
 */
export interface GovernedQuizQuestion<T extends QuizQuestion = QuizQuestion> {
  /** كائن السؤال المتوافق 100% مع محرك QuizBlockView الحالي */
  question: T;
  /** معرف المقرر المرتبط (مثل 'course-1') */
  courseId: string;
  /** معرف الفصل المرتبط */
  chapterId: string;
  /** معرف الموضوع المرتبط (إذا كان تقويماً لموضوع) */
  topicId?: string;
  /** حالة الاعتماد الأكاديمي للسؤال */
  approvalStatus: QuizApprovalStatus;
  /** المستوى المعرفي */
  cognitiveLevel?: QuestionCognitiveLevel;
  /** بيانات المراجعة الفردية للسؤال إن وجدت (أو ترث بيانات البنك) */
  reviewMetadata?: AcademicReviewMetadata;
}

/**
 * بنك أسئلة تقويمية خاضع للحوكمة والاعتماد
 */
export interface GovernedQuestionBank {
  /** المعرف الثابت الفريد لبنك الأسئلة */
  bankId: string;
  /** الإصدار الأكاديمي المعتمد (مثل '1.0.0') */
  version: string;
  /**
   * التجزئة التوافقية للمحتوى (Deterministic Content Hash)
   * يتم توليدها من نصوص الأسئلة والخيارات والإجابات الصحيحة والتفسيرات.
   * أي تعديل في محتوى الأسئلة يُبطل الهاش ويوقف البناء حتى إعادة الاعتماد.
   */
  contentHash: string;
  /** عنوان بنك الأسئلة */
  title: string;
  /** وصف بنك الأسئلة وأهدافه التعليمية */
  description?: string;
  /** تعليمات الإجابة */
  instructions?: string;
  /** معرف المقرر */
  courseId: string;
  /** معرف الفصل */
  chapterId: string;
  /** معرف الموضوع (إن كان خاصاً بموضوع) */
  topicId?: string;
  /** مستوى استهداف البنك: موضوعي أم فصلي شامل */
  targetType: 'topic' | 'chapter';
  /** حالة الاعتماد الأكاديمي الكلية للبنك */
  approvalStatus: QuizApprovalStatus;
  /** بيانات الاعتماد الأكاديمي الموثقة للبنك ككل */
  reviewMetadata: AcademicReviewMetadata;
  /** نسبة الاجتياز المقررة (الافتراضي 60%) */
  passingScorePercentage?: number;
  /** قائمة الأسئلة الخاضعة للحوكمة المندرجة تحت هذا البنك */
  questions: GovernedQuizQuestion[];
}

/**
 * سجل بيان النشر الرسمي للأسئلة (Publication Manifest)
 */
export interface QuizPublicationManifestEntry {
  bankId: string;
  courseId: string;
  chapterId: string;
  topicId?: string;
  targetType: 'topic' | 'chapter';
  approvedVersion: string;
  approvedContentHash: string;
  publishedAt: string;
  isLegacyPilotException?: boolean;
}

/**
 * تقرير التحقق من حوكمة الأسئلة الأكاديمية
 */
export interface QuizGovernanceValidationResult {
  isValid: boolean;
  publishedBanksCount: number;
  publishedQuestionsCount: number;
  errors: string[];
  warnings: string[];
}
