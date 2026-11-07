/**
 * contentHash.ts
 *
 * أداة التجزئة التوافقية المستقلة (Deterministic Content Hashing)
 * مبنية بالكامل بلغة TypeScript بدون أي مكتبات خارجية (Zero Dependencies).
 * متوافقة 100% مع بيئة Node.js والمتصفح ومتطلبات Cloudflare Pages الثابتة.
 */

import type { GovernedQuestionBank, GovernedQuizQuestion } from '../types/quizGovernance.ts';
import type { QuizQuestion } from '../types/academic.ts';

/**
 * دالة التشفير القياسية SHA-256 المستقلة
 */
export function sha256Hex(ascii: string): string {
  function rightRotate(value: number, amount: number): number {
    return (value >>> amount) | (value << (32 - amount));
  }

  const words: number[] = [];
  const hash = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ];

  const k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];

  const encoder = new TextEncoder();
  const bytes = encoder.encode(ascii);
  const bitLength = bytes.length * 8;

  const byteList = Array.from(bytes);
  byteList.push(0x80);
  while ((byteList.length % 64) !== 56) {
    byteList.push(0);
  }

  const highBits = Math.floor(bitLength / 0x100000000);
  const lowBits = bitLength >>> 0;
  for (let b = 3; b >= 0; b--) byteList.push((highBits >>> (b * 8)) & 0xff);
  for (let b = 3; b >= 0; b--) byteList.push((lowBits >>> (b * 8)) & 0xff);

  for (let b = 0; b < byteList.length; b += 4) {
    words.push((byteList[b] << 24) | (byteList[b + 1] << 16) | (byteList[b + 2] << 8) | (byteList[b + 3]));
  }

  for (let chunk = 0; chunk < words.length; chunk += 16) {
    const w = new Array(64);
    for (let t = 0; t < 16; t++) w[t] = words[chunk + t];
    for (let t = 16; t < 64; t++) {
      const s0 = rightRotate(w[t - 15], 7) ^ rightRotate(w[t - 15], 18) ^ (w[t - 15] >>> 3);
      const s1 = rightRotate(w[t - 2], 17) ^ rightRotate(w[t - 2], 19) ^ (w[t - 2] >>> 10);
      w[t] = (w[t - 16] + s0 + w[t - 7] + s1) >>> 0;
    }

    let a = hash[0], b = hash[1], c = hash[2], d = hash[3];
    let e = hash[4], f = hash[5], g = hash[6], h = hash[7];

    for (let t = 0; t < 64; t++) {
      const S1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = (e & f) ^ ((~e) & g);
      const temp1 = (h + S1 + ch + k[t] + w[t]) >>> 0;
      const S0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) >>> 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) >>> 0;
    }

    hash[0] = (hash[0] + a) >>> 0;
    hash[1] = (hash[1] + b) >>> 0;
    hash[2] = (hash[2] + c) >>> 0;
    hash[3] = (hash[3] + d) >>> 0;
    hash[4] = (hash[4] + e) >>> 0;
    hash[5] = (hash[5] + f) >>> 0;
    hash[6] = (hash[6] + g) >>> 0;
    hash[7] = (hash[7] + h) >>> 0;
  }

  return hash.map(h => h.toString(16).padStart(8, '0')).join('');
}

/**
 * استخراج التمثيل القياسي المعياري لسؤال مفرد لضمان التجزئة القطعية
 */
export function canonicalizeQuestion(q: QuizQuestion | GovernedQuizQuestion): Record<string, unknown> {
  const rawQ: QuizQuestion = 'question' in q ? q.question : q;

  const base: Record<string, unknown> = {
    id: rawQ.id,
    type: rawQ.type,
    prompt: rawQ.prompt.trim(),
    explanation: (rawQ.explanation || '').trim(),
    sourceReference: (rawQ.sourceReference || '').trim(),
  };

  if (rawQ.type === 'multiple_choice') {
    base.correctOptionId = rawQ.correctOptionId;
    base.options = [...rawQ.options]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map(opt => ({ id: opt.id, text: opt.text.trim() }));
  } else if (rawQ.type === 'true_false') {
    base.correctAnswer = rawQ.correctAnswer;
  } else if (rawQ.type === 'ordering') {
    base.items = [...rawQ.items]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map(item => ({
        id: item.id,
        text: item.text.trim(),
      }));
    base.correctOrder = [...rawQ.correctOrder];
  }

  return base;
}

/**
 * حساب التجزئة التوافقية القطعية (SHA-256 Content Hash) لبنك أسئلة بالكامل
 */
export function computeQuestionBankHash(bank: GovernedQuestionBank): string {
  const canonicalRepresentation = {
    bankId: bank.bankId,
    version: bank.version,
    courseId: bank.courseId,
    chapterId: bank.chapterId,
    topicId: bank.topicId || null,
    targetType: bank.targetType,
    questions: [...bank.questions]
      .map(q => canonicalizeQuestion(q))
      .sort((a, b) => String(a.id).localeCompare(String(b.id))),
  };

  const serialized = JSON.stringify(canonicalRepresentation);
  return sha256Hex(serialized);
}
