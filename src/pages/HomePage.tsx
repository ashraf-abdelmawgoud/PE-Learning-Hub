/**
 * HomePage.tsx
 * Premium Homepage for PE Interactive Learning Hub
 *
 * Structure:
 * 1. HeroSection (Distinctive Hero + Sports-Academic Graphic)
 * 2. CoursesSection (7 Official PE Courses with clear status differentiation)
 * 3. HowItWorksSection (The 4-step student learning journey)
 * 4. FeaturesSection (Organized Content, Videos, Field Examples, Quizzes)
 * 5. FeaturedLessonSection (Live Verified Published Academic Lesson)
 * 6. FinalCtaSection (Closing Section with Direct Course Action)
 */

import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { FeaturedLessonSection } from '../components/home/FeaturedLessonSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <main className="space-y-0" id="main-content">
      {/* 1. Premium Hero */}
      <HeroSection />

      {/* 2. Official PE Courses Discovery */}
      <CoursesSection />

      {/* 3. Learning Experience (How it works) */}
      <HowItWorksSection />

      {/* 4. Platform Features & Academic Value */}
      <FeaturesSection />

      {/* 5. Featured Verified Published Lesson */}
      <FeaturedLessonSection />

      {/* 6. Final Closing CTA */}
      <FinalCtaSection />
    </main>
  );
};
