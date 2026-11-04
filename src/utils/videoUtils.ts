/**
 * videoUtils.ts
 * Utility functions for YouTube video ID validation, extraction, and embed URL generation.
 * Follows OloomSport privacy-first standards (youtube-nocookie.com, strict 11-char regex).
 */

/**
 * Standard YouTube video ID regular expression (exactly 11 characters: alphanumeric, dashes, underscores)
 */
export const YOUTUBE_VIDEO_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

/**
 * Validates whether a given string is a valid canonical 11-character YouTube video ID.
 */
export function isValidYouTubeVideoId(id: string): boolean {
  if (!id || typeof id !== 'string') return false;
  return YOUTUBE_VIDEO_ID_REGEX.test(id.trim());
}

/**
 * Normalizes an input (which could be an 11-char ID or a full YouTube URL) into a canonical 11-char ID.
 * Returns null if the input cannot be safely parsed into a valid 11-char ID.
 */
export function normalizeYouTubeVideoId(input: string): string | null {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();

  // If already an 11-char ID
  if (YOUTUBE_VIDEO_ID_REGEX.test(trimmed)) {
    return trimmed;
  }

  // Attempt to parse standard YouTube URL formats:
  // - https://www.youtube.com/watch?v=VIDEO_ID
  // - https://youtu.be/VIDEO_ID
  // - https://www.youtube.com/embed/VIDEO_ID
  // - https://www.youtube-nocookie.com/embed/VIDEO_ID
  try {
    const url = new URL(trimmed);
    const host = url.hostname.toLowerCase();

    if (host === 'youtu.be' || host.endsWith('.youtu.be')) {
      const pathId = url.pathname.slice(1).split('/')[0];
      if (YOUTUBE_VIDEO_ID_REGEX.test(pathId)) {
        return pathId;
      }
    }

    if (
      host === 'youtube.com' ||
      host.endsWith('.youtube.com') ||
      host === 'youtube-nocookie.com' ||
      host.endsWith('.youtube-nocookie.com')
    ) {
      // Check query parameter ?v=
      const vParam = url.searchParams.get('v');
      if (vParam && YOUTUBE_VIDEO_ID_REGEX.test(vParam)) {
        return vParam;
      }

      // Check /embed/VIDEO_ID
      if (url.pathname.startsWith('/embed/')) {
        const embedId = url.pathname.replace('/embed/', '').split('/')[0];
        if (YOUTUBE_VIDEO_ID_REGEX.test(embedId)) {
          return embedId;
        }
      }
    }
  } catch {
    // Input is not a valid URL
  }

  return null;
}

/**
 * Builds a privacy-preserving YouTube embed URL using youtube-nocookie.com.
 */
export function getYouTubeEmbedUrl(
  videoId: string,
  options?: { autoplay?: boolean; lang?: string }
): string {
  const safeId = encodeURIComponent(videoId.trim());
  const autoplay = options?.autoplay ? 1 : 0;
  const lang = options?.lang || 'ar';
  return `https://www.youtube-nocookie.com/embed/${safeId}?autoplay=${autoplay}&rel=0&modestbranding=1&hl=${lang}`;
}

/**
 * Builds a direct YouTube watch URL for the fallback external link.
 */
export function getYouTubeWatchUrl(videoId: string): string {
  const safeId = encodeURIComponent(videoId.trim());
  return `https://www.youtube.com/watch?v=${safeId}`;
}

/**
 * Builds a thumbnail URL for lightweight facade previews.
 */
export function getYouTubeThumbnailUrl(
  videoId: string,
  quality: 'hq' | 'maxres' = 'hq'
): string {
  const safeId = encodeURIComponent(videoId.trim());
  const filename = quality === 'maxres' ? 'maxresdefault.jpg' : 'hqdefault.jpg';
  return `https://i.ytimg.com/vi/${safeId}/${filename}`;
}
