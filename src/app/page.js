import HeroSection from "@/components/home-page/HeroSection";
import IntroSection from "@/components/home-page/IntroSection";
import ServicesSection from "@/components/home-page/ServicesSection";
import TestimonialSection from "@/components/home-page/TestimonialSection";

import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialSection />
    </>
  );
};

export default page;
