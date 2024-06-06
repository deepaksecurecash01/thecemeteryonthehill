import BannerSection from "@/components/OurHistoryAndVision/BannerSection";
import OurHistory from "@/components/OurHistoryAndVision/OurHistory";
import OurVision from "@/components/OurHistoryAndVision/OurVision";
import Timeline from "@/components/OurHistoryAndVision/Timeline";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <div
        className="bg-ourhistoryandvision-bg bg-no-repeat bg-cover h-[30vh] w-full"
        aria-labelledby="banner-heading"
      />
      <OurHistory />
      <BannerSection />
      <OurVision />
    </div>
  );
};

export default page;
