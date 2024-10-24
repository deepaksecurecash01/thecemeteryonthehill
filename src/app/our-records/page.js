import BannerSection from "@/components/our-records/BannerSection";
import FaqSection from "@/components/our-records/FaqSection";
import TableSection from "@/components/our-records/TableSection";
import React from "react";

export const metadata = {
  title: "Our Records",
  description:
    "Search through The Cemetery on The Hill’s records to find information on loved ones and family members interred here. Explore the rich history of some of South Australia’s first settlers.",
  keywords:
    "Cemetery records, burial records, interment search, find loved ones, The Cemetery on The Hill records, family interment information, cemetery database, South Australian history, South Australian settlers",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/our-records",
};

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center relative w-full overflow-hidden py-10">
        <div
          className="absolute bg-ellipse-2 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bg-ellipse-1 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10"
          aria-hidden="true"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
            OUR RECORDS
          </h2>
          <p className="text-paragraph text-base font-bold tracking-wide mx-6 text-center lg:text-lg">
            {`Here's the list of our burial records.`}
          </p>
        </div>
        <div className="w-[90vw] xl:w-[80vw] my-10">
          <TableSection />
          
        </div>
        <div className="w-full my-10">
          <BannerSection />
        </div>
        <div className="w-[90vw] xl:w-[80vw]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
              FAQ
            </h2>
            <p className="text-paragraph text-base font-bold tracking-wide mx-6 text-center lg:text-lg">
              {`Frequenty asked questions`}
            </p>
          </div>
          <FaqSection />
        </div>
      </div>
      <BannerSection />
    </>
  );
};

export default page;
