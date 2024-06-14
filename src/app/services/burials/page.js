import ContentSection from '@/components/Burials/ContentSetion';
import HeroSection from '@/components/Burials/HeroSection';
import BannerSection from '@/components/OurHistoryAndVision/BannerSection';
import React from 'react'

const page = () => {
  return (
    <div className="relative">
      <HeroSection />
      <ContentSection />
      <BannerSection />
    </div>
  );
}

export default page