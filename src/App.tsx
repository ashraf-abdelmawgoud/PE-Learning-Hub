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
import { CurriculumAnimationPage } from './pages/CurriculumAnimationPage';
import { CoachPocPage } from './pages/CoachPocPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F4FFF7] text-[#486555] selection:bg-[#00C853] selection:text-[#071C12] overflow-x-hidden w-full">
        <Navbar />
        <main className="flex-1">
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
                import.meta.env.PROD && typeof window !== 'undefined' && !window.location.search.includes('preview=true') ? (
                  <Navigate to="/courses" replace />
                ) : (
                  <Navigate
                    to="/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1/lessons/dev-les-1"
                    replace
                  />
                )
              }
            />
            {/* Shortcut route for Phase 4 Visual Learning Sandbox (protected in production) */}
            <Route
              path="/visual-sandbox"
              element={
                import.meta.env.PROD && typeof window !== 'undefined' && !window.location.search.includes('preview=true') ? (
                  <Navigate to="/courses" replace />
                ) : (
                  <Navigate
                    to="/courses/visual-sandbox/chapters/vis-chap-1/topics/vis-top-1/lessons/vis-les-1"
                    replace
                  />
                )
              }
            />
            <Route path="/about" element={<AboutPage />} />
            {/* Phase 4.1 2D Educational Animation Direct Preview */}
            <Route path="/curriculum-animation" element={<CurriculumAnimationPage />} />
            <Route path="/pilot-animation" element={<Navigate to="/curriculum-animation" replace />} />
            {/* Proof of Concept: Coach Character Rig */}
            <Route path="/coach-poc" element={<CoachPocPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
