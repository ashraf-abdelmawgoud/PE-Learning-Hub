/**
 * index.ts
 * تصدير جميع بنوك الأسئلة المعتمدة رسمياً لمقرر مناهج التربية الرياضية
 */

import type { GovernedQuestionBank } from '../../../../types/quizGovernance.ts';

export { CHAPTER_1_APPROVED_BANK } from './chapter1ApprovedBank.ts';
export { CHAPTER_2_APPROVED_BANK } from './chapter2ApprovedBank.ts';
export { CHAPTER_3_APPROVED_BANK } from './chapter3ApprovedBank.ts';
export { CHAPTER_4_APPROVED_BANK } from './chapter4ApprovedBank.ts';
export { CHAPTER_5_APPROVED_BANK } from './chapter5ApprovedBank.ts';
export { CHAPTER_7_APPROVED_BANK } from './chapter7ApprovedBank.ts';

import { CHAPTER_1_APPROVED_BANK } from './chapter1ApprovedBank.ts';
import { CHAPTER_2_APPROVED_BANK } from './chapter2ApprovedBank.ts';
import { CHAPTER_3_APPROVED_BANK } from './chapter3ApprovedBank.ts';
import { CHAPTER_4_APPROVED_BANK } from './chapter4ApprovedBank.ts';
import { CHAPTER_5_APPROVED_BANK } from './chapter5ApprovedBank.ts';
import { CHAPTER_7_APPROVED_BANK } from './chapter7ApprovedBank.ts';

export const ALL_APPROVED_QUESTION_BANKS: GovernedQuestionBank[] = [
  CHAPTER_1_APPROVED_BANK,
  CHAPTER_2_APPROVED_BANK,
  CHAPTER_3_APPROVED_BANK,
  CHAPTER_4_APPROVED_BANK,
  CHAPTER_5_APPROVED_BANK,
  CHAPTER_7_APPROVED_BANK,
];
