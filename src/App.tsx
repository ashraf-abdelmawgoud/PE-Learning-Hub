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

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F4FAFF] text-[#334155] selection:bg-blue-600 selection:text-white">
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
            {/* Shortcut route for the isolated development sandbox */}
            <Route
              path="/dev-sandbox"
              element={
                <Navigate
                  to="/courses/dev-sandbox/chapters/dev-chap-1/topics/dev-top-1/lessons/dev-les-1"
                  replace
                />
              }
            />
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
