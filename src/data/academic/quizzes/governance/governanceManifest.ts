/**
 * governanceManifest.ts
 *
 * سجل بيان النشر الرسمي للأسئلة وبنوك التقويم الأكاديمية (Quiz Publication Manifest)
 * لمنصة OloomSport — علوم الرياضة
 *
 * القواعد الحاكمة:
 * 1. لا يُنشر أي بنك أسئلة للطلاب إلا بعد وروده صراحةً في هذا السجل مع هاش المحتوى المعتمد (approvedContentHash).
 * 2. أي تعديل في محتوى الأسئلة يُبطل الهاش ويوقف عملية البناء (Build Failure) فوراً.
 * 3. الأسئلة التجريبية الاستكشافية للفصل الأول تخضع لاستثناء موثق ولا تُعد معتمدة أكاديمياً.
 */

import type {
  QuizPublicationManifestEntry,
  GovernedQuestionBank,
} from '../../../../types/quizGovernance.ts';
import type { QuizBlock } from '../../../../types/academic.ts';
import { computeQuestionBankHash } from '../../../../utils/contentHash.ts';

/**
 * توثيق الاستثناء التقني لأسئلة الفصل الأول التجريبية
 * تظل فعالة تشغيلياً للطلاب دون تزييف أو اختلاق بيانات اعتماد أكاديمية لها.
 */
export const CHAPTER_1_LEGACY_EXCEPTION = {
  courseId: 'course-1',
  chapterId: 'chap-curriculum-intro',
  isLegacyPilotException: true,
  academicApprovalState: 'legacy_unreviewed',
  note: 'أسئلة تجريبية استكشافية سابقة مدمجة ضمن الإصدار الأولي للفصل الأول، تعمل باستثناء تقني مع الحفاظ على تجربة الطالب، ولا تُعد معتمدة أكاديمياً حتى تخضع لدورة التحكيم الرسمية.',
} as const;

/**
 * سجل بيان النشر المعتمد (Publication Manifest)
 * في المرحلة الأولى: السجل خالٍ تماماً من أي بنوك جديدة، حيث لم يتم تحكيم واعتماد أي أسئلة رسمياً بعد.
 */
export const QUIZ_PUBLICATION_MANIFEST: QuizPublicationManifestEntry[] = [
  // لا توجد بنوك أسئلة جديدة معتمدة للنشر في هذه المرحلة.
  // يتم تسجيل البنوك المعتمدة فقط بعد اجتياز دورة التحكيم الأكاديمي الكاملة.
];

/**
 * تحويل بنك أسئلة معتمد خاضع للحوكمة إلى كتلة تقويم متوافقة مع QuizBlockView
 */
export function exportGovernedBankToQuizBlock(bank: GovernedQuestionBank, order: number = 1): QuizBlock {
  return {
    id: `quiz-block-${bank.bankId}`,
    order,
    type: 'quiz',
    title: bank.title,
    description: bank.description,
    instructions: bank.instructions,
    questions: bank.questions.map((g) => g.question),
    passingScorePercentage: bank.passingScorePercentage ?? 60,
  };
}

/**
 * التحقق مما إذا كان بنك الأسئلة مدرجاً ومصرّحاً بنشره في بيان النشر الرسمي
 */
export function isBankPublished(bank: GovernedQuestionBank): boolean {
  const entry = QUIZ_PUBLICATION_MANIFEST.find((e) => e.bankId === bank.bankId);
  if (!entry) return false;
  if (entry.approvedVersion !== bank.version) return false;
  const currentHash = computeQuestionBankHash(bank);
  return entry.approvedContentHash === currentHash;
}
