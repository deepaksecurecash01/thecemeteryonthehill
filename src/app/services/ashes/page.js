import ContentSection from '@/components/Ashes/ContentSection';
import HeroSection from '@/components/Ashes/HeroSection';
import BannerSection from '@/components/OurHistoryAndVision/BannerSection';
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <BannerSection />
    </div>
  );
}

export default page