import BannerSection from "@/components/expired-leases/BannerSection";
import ContentSection from "@/components/expired-leases/ContentSection";
import HeroSection from "@/components/expired-leases/HeroSection";
import PopupForm from "@/components/expired-leases/PopupForm";
import TableSection from "@/components/expired-leases/TableSection";

const page = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div className="relative h-full w-full">
        <div
          className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
          aria-hidden="true"
        />
        <TableSection />
        <ContentSection />
        <BannerSection />
        <PopupForm />
      </div>
    </div>
  );
};

export default page;
