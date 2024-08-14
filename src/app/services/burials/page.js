import ContentSection from "@/components/services/burials/ContentSetion";
import HeroSection from "@/components/services/burials/HeroSection";
import BannerSection from "@/components/history-vision/BannerSection";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <HeroSection />
      <ContentSection />
      <BannerSection />
    </div>
  );
};

export default page;
