import BannerSection from "@/components/history-vision/BannerSection";
import OurHistory from "@/components/history-vision/OurHistory";
import OurVision from "@/components/history-vision/OurVision";

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
