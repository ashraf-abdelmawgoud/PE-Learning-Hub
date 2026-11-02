import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { LearningJourneySection } from '../components/home/LearningJourneySection';
import { CoursesPreviewSection } from '../components/home/CoursesPreviewSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <BenefitsSection />
      <LearningJourneySection />
      <CoursesPreviewSection />
    </div>
  );
};
