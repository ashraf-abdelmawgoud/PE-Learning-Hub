/**
 * progressPersistence.ts
 * Real Learning Progress Persistence for OloomSport (علوم الرياضة)
 *
 * Core Principles:
 * - 100% REAL student progress tracking; strictly ZERO fabricated or mocked percentages.
 * - Stores topic completion and actual quiz scores in browser localStorage.
 * - Resilient fallback: in-memory storage if localStorage is blocked or unavailable.
 * - Fully isolated by course, chapter, and topic identifiers.
 */

export interface TopicProgressRecord {
  isCompleted: boolean;
  quizScore?: number; // 0 - 100
  updatedAt: string;
}

export interface ChapterProgressRecord {
  isChapterQuizCompleted: boolean;
  chapterQuizScore?: number; // 0 - 100
  updatedAt: string;
}

interface LearningProgressStore {
  topics: Record<string, TopicProgressRecord>;
  chapters: Record<string, ChapterProgressRecord>;
}

const STORAGE_KEY = 'oloom_learning_progress_v1';

// In-memory fallback if localStorage is disabled or restricted
const inMemoryStore: LearningProgressStore = {
  topics: {},
  chapters: {},
};

function isLocalStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    const testKey = '__oloom_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

function loadStore(): LearningProgressStore {
  if (!isLocalStorageAvailable()) {
    return inMemoryStore;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { topics: {}, chapters: {} };
    const parsed = JSON.parse(raw);
    return {
      topics: typeof parsed.topics === 'object' && parsed.topics !== null ? parsed.topics : {},
      chapters: typeof parsed.chapters === 'object' && parsed.chapters !== null ? parsed.chapters : {},
    };
  } catch {
    return inMemoryStore;
  }
}

function saveStore(store: LearningProgressStore): void {
  if (!isLocalStorageAvailable()) {
    inMemoryStore.topics = store.topics;
    inMemoryStore.chapters = store.chapters;
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Gracefully handle storage quota exceeded or disabled
  }
}

function makeTopicKey(courseId: string, chapterId: string, topicId: string): string {
  return `${courseId}::${chapterId}::${topicId}`;
}

function makeChapterKey(courseId: string, chapterId: string): string {
  return `${courseId}::${chapterId}`;
}

/**
 * Get real progress for a specific topic
 */
export function getTopicProgress(
  courseId: string,
  chapterId: string,
  topicId: string
): TopicProgressRecord {
  const store = loadStore();
  const key = makeTopicKey(courseId, chapterId, topicId);
  return store.topics[key] || { isCompleted: false, updatedAt: '' };
}

/**
 * Record topic completion and optional quiz score
 */
export function setTopicProgress(
  courseId: string,
  chapterId: string,
  topicId: string,
  progress: { isCompleted: boolean; quizScore?: number }
): void {
  const store = loadStore();
  const key = makeTopicKey(courseId, chapterId, topicId);
  store.topics[key] = {
    isCompleted: progress.isCompleted,
    quizScore: progress.quizScore,
    updatedAt: new Date().toISOString(),
  };
  saveStore(store);
}

/**
 * Calculate real aggregated progress for a chapter
 */
export function getChapterProgressStats(
  courseId: string,
  chapterId: string,
  topicIds: string[]
): {
  completedTopicsCount: number;
  totalTopics: number;
  progressPercentage: number;
  isChapterQuizCompleted: boolean;
  chapterQuizScore?: number;
} {
  const store = loadStore();
  const chapKey = makeChapterKey(courseId, chapterId);
  const chapRecord = store.chapters[chapKey];

  if (!topicIds || topicIds.length === 0) {
    return {
      completedTopicsCount: 0,
      totalTopics: 0,
      progressPercentage: 0,
      isChapterQuizCompleted: Boolean(chapRecord?.isChapterQuizCompleted),
      chapterQuizScore: chapRecord?.chapterQuizScore,
    };
  }

  let completedCount = 0;
  for (const tid of topicIds) {
    const key = makeTopicKey(courseId, chapterId, tid);
    if (store.topics[key]?.isCompleted) {
      completedCount++;
    }
  }

  const percentage = Math.round((completedCount / topicIds.length) * 100);

  return {
    completedTopicsCount: completedCount,
    totalTopics: topicIds.length,
    progressPercentage: percentage,
    isChapterQuizCompleted: Boolean(chapRecord?.isChapterQuizCompleted),
    chapterQuizScore: chapRecord?.chapterQuizScore,
  };
}

/**
 * Record completion of the final chapter quiz
 */
export function setChapterQuizProgress(
  courseId: string,
  chapterId: string,
  isCompleted: boolean,
  score?: number
): void {
  const store = loadStore();
  const key = makeChapterKey(courseId, chapterId);
  store.chapters[key] = {
    isChapterQuizCompleted: isCompleted,
    chapterQuizScore: score,
    updatedAt: new Date().toISOString(),
  };
  saveStore(store);
}
