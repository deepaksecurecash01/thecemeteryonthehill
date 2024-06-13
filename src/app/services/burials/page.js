import ContentSection from '@/components/Burials/ContentSetion';
import HeroSection from '@/components/Burials/HeroSection';
import TextSection from '@/components/Burials/TextSection';
import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <HeroSection />
      <ContentSection />
    </div>
  );
}

export default page