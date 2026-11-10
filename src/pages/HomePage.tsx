/**
 * HomePage.tsx
 * Premium Homepage for PE Interactive Learning Hub
 *
 * Streamlined Structure:
 * 1. HeroSection (Distinctive Hero + Low-Poly Sports Illustration + Platform Stats)
 * 2. HowItWorksSection (The 4-step student learning journey)
 * 3. FeaturesSection (Organized Content, Videos, Field Examples, Quizzes)
 */

import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { FeaturesSection } from '../components/home/FeaturesSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Premium Hero */}
      <HeroSection />

      {/* 2. Learning Experience (How it works) */}
      <HowItWorksSection />

      {/* 3. Platform Features & Academic Value */}
      <FeaturesSection />
    </div>
  );
};
