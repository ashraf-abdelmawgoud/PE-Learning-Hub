/**
 * HomePage.tsx
 * Premium Homepage for PE Interactive Learning Hub
 *
 * Streamlined Structure:
 * 1. HeroSection (Distinctive Hero + Low-Poly Sports Illustration)
 * 2. CoursesSection (Official 6 PE Subject Cards)
 * 3. HowItWorksSection (The 4-step student learning journey)
 * 4. FeaturesSection (Organized Content, Videos, Field Examples, Quizzes)
 * 5. FinalCtaSection (Closing Section with Direct Course Action)
 */

import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CoursesSection } from '../components/home/CoursesSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <main className="space-y-0" id="main-content">
      {/* 1. Premium Hero */}
      <HeroSection />

      {/* 2. Official PE Courses Discovery (6 Subjects) */}
      <CoursesSection />

      {/* 3. Learning Experience (How it works) */}
      <HowItWorksSection />

      {/* 4. Platform Features & Academic Value */}
      <FeaturesSection />

      {/* 5. Final Closing CTA */}
      <FinalCtaSection />
    </main>
  );
};
