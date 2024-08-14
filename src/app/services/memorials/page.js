import ContentSection from "@/components/services/memorials/ContentSection";
import HeroSection from "@/components/services/memorials/HeroSection";
import BannerSection from "@/components/history-vision/BannerSection";

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
