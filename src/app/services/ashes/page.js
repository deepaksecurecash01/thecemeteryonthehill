import ContentSection from "@/components/services/ashes/ContentSection";
import React from "react";

export const metadata = {
  title: "Ashes Interments",
  description:
    "Looking for secure and dignified ashes interments? The Cemetery on The Hill offers professional services for interment of ashes in a peaceful setting. Contact us today to learn more.",
  keywords:
    "Ashes Interments, cemetery, ashes services, interments, Melbourne cemetery services, dignified interment, The Cemetery on The Hill",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/services/ashes",
};

const page = () => {
  return (
    <div className="relative">
      <ContentSection />
    </div>
  );
};

export default page;