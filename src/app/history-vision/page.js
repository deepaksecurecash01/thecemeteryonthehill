import BannerSection from "@/components/history-vision/BannerSection";
import OurHistory from "@/components/history-vision/OurHistory";
import OurVision from "@/components/history-vision/OurVision";

export const metadata = {
  title: "Our Vision & History",
  description:
    "Discover the rich history and vision behind The Cemetery on The Hill. Learn about our heritage, restoration efforts, and commitment to preserving the past for future generations.",
  keywords:
    "Cemetery history, The Cemetery on The Hill, heritage site, state heritage site, restoration efforts, historical cemetery, cemetery vision, South Australia heritage, cemetery development",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/history-vision",
};


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
