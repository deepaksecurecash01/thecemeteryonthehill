import ContentSection from "@/components/Memorials/ContentSection";
import HeroSection from "@/components/Memorials/HeroSection";
import BannerSection from "@/components/OurHistoryAndVision/BannerSection";

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
