import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { ChapterDetailPage } from './pages/ChapterDetailPage';
import { TopicDetailPage } from './pages/TopicDetailPage';
import { LessonPage } from './pages/LessonPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

// In production build, import.meta.env.DEV is literal false, so dead-code elimination prunes development preview pages
const isDev = Boolean(import.meta.env.DEV);
const LogoPreviewPage = import.meta.env.DEV
  ? React.lazy(() =>
      import('./pages/LogoPreviewPage').then((m) => ({ default: m.LogoPreviewPage }))
    )
  : null;

const TypographyPreviewPage = import.meta.env.DEV
  ? React.lazy(() =>
      import('./pages/TypographyPreviewPage').then((m) => ({ default: m.TypographyPreviewPage }))
    )
  : null;

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F4FFF7] text-[#486555] selection:bg-[#00C853] selection:text-[#071C12] overflow-x-hidden w-full">
        {/* Skip to Content accessible link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00C853] focus:text-[#071C12] focus:font-black focus:rounded-xl focus:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#071C12]"
        >
          الانتقال إلى المحتوى الرئيسي
        </a>

        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route
              path="/courses/:courseId/chapters/:chapterId"
              element={<ChapterDetailPage />}
            />
            <Route
              path="/courses/:courseId/chapters/:chapterId/topics/:topicId"
              element={<TopicDetailPage />}
            />
            <Route
              path="/courses/:courseId/chapters/:chapterId/topics/:topicId/lessons/:lessonId"
              element={<LessonPage />}
            />
            
            {/* Development-Only Routes (Strictly registered in local dev; excluded in production) */}
            {isDev && LogoPreviewPage && (
              <Route
                path="/logo-preview"
                element={
                  <React.Suspense fallback={<div className="min-h-screen bg-[#F4FFF7]" />}>
                    <LogoPreviewPage />
                  </React.Suspense>
                }
              />
            )}
            {isDev && TypographyPreviewPage && (
              <>
                <Route
                  path="/typography-preview"
                  element={
                    <React.Suspense fallback={<div className="min-h-screen bg-[#05140D]" />}>
                      <TypographyPreviewPage />
                    </React.Suspense>
                  }
                />
                <Route
                  path="/font-preview"
                  element={<Navigate to="/typography-preview" replace />}
                />
              </>
            )}
            {isDev && (
              <>
                <Route
                  path="/dev-sandbox"
                  element={
                    <Navigate
                      to="/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1/lessons/dev-les-1"
                      replace
                    />
                  }
                />
                <Route
                  path="/visual-sandbox"
                  element={
                    <Navigate
                      to="/courses/visual-sandbox/chapters/vis-chap-1/topics/vis-top-1/lessons/vis-les-1"
                      replace
                    />
                  }
                />
              </>
            )}

            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
