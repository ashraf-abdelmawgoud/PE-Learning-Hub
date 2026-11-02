import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PillarsSection } from '../components/home/PillarsSection';
import { CoursesPreviewSection } from '../components/home/CoursesPreviewSection';
import { RoadmapSection } from '../components/home/RoadmapSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <PillarsSection />
      <CoursesPreviewSection />
      <RoadmapSection />
    </div>
  );
};
