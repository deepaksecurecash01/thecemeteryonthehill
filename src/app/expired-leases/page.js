import ContentSection from "@/components/expired-leases/ContentSection";
import HeroSection from "@/components/expired-leases/HeroSection";
import PopupForm from "@/components/expired-leases/PopupForm";
import TableSection from "@/components/expired-leases/TableSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <TableSection />
      <ContentSection />
      <PopupForm />
    </div>
  );
};

export default page;
