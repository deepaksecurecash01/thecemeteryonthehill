import ContentSection from "@/components/services/burials/ContentSetion";
import React from "react";

export const metadata = {
  title: "Burials",
  description:
    "Make the final moments with your loved one more meaningful through a traditional burial. The Cemetery on The Hill guarantees a sense of security and serenity when you visit and spend precious moments with your loved ones. Learn more about our burial options here.",
  keywords:
    "Burials, burial services, burial plots, buying a burial plot, types of burial plots, burial assistance, traditional funeral, burial rites, burial vs cremation, burial practices Australia, what happens at a burial service, how much does burial cost",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/services/burials",
};

const page = () => {
  return (
    <div className="relative">
      <ContentSection />
    </div>
  );
};

export default page;
