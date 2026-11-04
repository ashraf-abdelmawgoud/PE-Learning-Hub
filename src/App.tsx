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
import { LogoPreviewPage } from './pages/LogoPreviewPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { isDevSandboxAllowed } from './utils/devRouteGuard';

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
            {/* Shortcut route for the isolated development sandbox (protected in production) */}
            <Route
              path="/dev-sandbox"
              element={
                isDevSandboxAllowed() ? (
                  <Navigate
                    to="/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1/lessons/dev-les-1"
                    replace
                  />
                ) : (
                  <Navigate to="/courses" replace />
                )
              }
            />
            {/* Shortcut route for Phase 4 Visual Learning Sandbox (protected in production) */}
            <Route
              path="/visual-sandbox"
              element={
                isDevSandboxAllowed() ? (
                  <Navigate
                    to="/courses/visual-sandbox/chapters/vis-chap-1/topics/vis-top-1/lessons/vis-les-1"
                    replace
                  />
                ) : (
                  <Navigate to="/courses" replace />
                )
              }
            />
            <Route path="/about" element={<AboutPage />} />
            {/* Brand Identity / Logo Concepts Preview (Development Only) */}
            <Route
              path="/logo-preview"
              element={
                isDevSandboxAllowed() ? (
                  <LogoPreviewPage />
                ) : (
                  <NotFoundPage />
                )
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
