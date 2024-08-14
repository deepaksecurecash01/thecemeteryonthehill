import ContentSection from "@/components/services/ashes/ContentSection";
import HeroSection from "@/components/services/ashes/HeroSection";
import BannerSection from "@/components/history-vision/BannerSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <BannerSection />
    </div>
  );
};

export default page;
