import BannerSection from "@/components/Sections/BannerSection";
import HeroSection from "@/components/Sections/HeroSection";
import IntroSection from "@/components/Sections/IntroSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import TestimonialSection from "@/components/Sections/TestimonialSection";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialSection />
      <BannerSection />
    </>
  );
};

export default page;
