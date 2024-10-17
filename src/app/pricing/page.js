import Image from "next/image";
import React from "react";
import { formatNumber } from "@/lib/helper";
import TotalAdministrationFeeTable from "@/components/pricing/TotalAdministrationFeeTable";
import AshesLocationTable from "@/components/pricing/AshesLocationTable";
import BurialLocationTable from "@/components/pricing/BurialLocationTable";
import MiscFeesTable from "@/components/pricing/MiscFeesTable";
import BannerSection from "@/components/pricing/BannerSection";

export const metadata = {
  title: "Pricing",
  description:
    "Explore our transparent and flexible pricing options for burials, ashes interments, and pet interments at The Cemetery on The Hill. Contact us today for more details.",
  keywords:
    "Cemetery pricing, burial costs, burial plot cost, cemetery plaque cost, interment pricing, ashes interments, pet interments, The Cemetery on The Hill, affordable cemetery services",
  author: "The Cemetery on The Hill",
  canonical: "https://www.thecemeteryonthehill.com.au/pricing",
};


const Page = () => {
  const prices = {
    "Internment Rights (100 Years)": 1000,
    "Preparation for initial Interments": 2000,
    "Ongoing maintenance Fee ($50 per year)": 5000,
    Plaque: 275,
  };

  const ashesLocations = [
    { name: "New Ashes Bed", fee: 1000 },
    { name: "Historic Ashes Bed", fee: 2000 },
    { name: "Sandstone Ashes Bed", fee: 5000 },
    { name: "Rose Garden Ashes Bed", fee: 1000 },
    { name: "Pepper Tree", fee: 5000 },
    { name: "Front Fence Ashes Beds", fee: 5000 },
    {
      name: "Lawn & Path with a nearby small plaque (Human - Perpetuity)",
      fee: 1000,
      adminFee: "N/A",
    },
    {
      name: "Lawn & Path with a nearby small plaque (Animal - Perpetuity)",
      fee: 500,
      adminFee: "N/A",
    },
  ];

  const miscFees = [
    { name: "Weekend Surcharge (Saturday or Sunday 10am to 4pm)", fee: 250.0 },
    {
      name: "Afterhours & Public Holidays Surcharge (Monday to Sunday 4pm to 10am)",
      fee: 950.0,
    },
    { name: "Additional Ashes Internment / Retrieval", fee: 2000.0 },
    {
      name: "Catering - Tea, Coffee, Cordial, Biscuits & Sandwiches (per 10 people)",
      fee: 175.0,
    },
    { name: "Requested General Work Hourly Rate (Plus Materials)", fee: 75.0 },
    { name: "Memorial Mason Application Fee", fee: 275.0 },
  ];

  const totalAmount = Object.values(prices)
    .reduce((acc, price) => acc + price, 0)
    .toFixed(2);
  const formattedTotalAmount = formatNumber(totalAmount);

  const fees = Object.entries(prices).map(([name, amount]) => ({
    name,
    amount: formatNumber(amount),
  }));

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden w-full">
        <div
          className="bg-ourhistoryandvision-bg bg-no-repeat bg-cover h-[30vh] w-full"
          aria-labelledby="banner-heading"
        />

        <div className="relative h-full w-full">
          <div className="absolute right-0 w-[70vw] h-full hidden 2xl:block">
            <div
              className="absolute w-[70%] right-0 h-full bg-intro-overlay bg-cover bg-no-repeat bottom-0 -z-20"
              aria-hidden="true"
            />
            <div className="absolute -right-[28rem] w-full h-full rounded-t-2xl">
              <Image
                src="/images/intro-statue.png"
                layout="fill"
                loading="lazy"
                alt="Historic Cemetery Statue"
                className="object-contain xl:object-cover 3xl:object-contain"
              />
            </div>
          </div>

          <div
            className="absolute top-0 left-0 h-full w-full bg-ellipse-1 bg-cover bg-no-repeat -z-10"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 h-full w-full bg-ellipse-2 bg-cover bg-no-repeat -z-10"
            aria-hidden="true"
          />

          <div className="w-full flex flex-col gap-6 items-center pt-10 pb-10">
            <div className=" flex flex-col justify-center items-center 2xl:items-start w-[90vw] xl:w-[80vw] 3xl:w-[60vw]">
              <h1 className="text-[1.75rem] text-start 2xl:text-center md:text-[2.75rem] font-bold font-display text-primary">
                Pricing
              </h1>
              <p className="text-paragraph text-base font-bold tracking-wide p-2 lg:text-lg 2xl:w-[70%]">
                {`At The Cemetery on The Hill, we understand the importance of clear and transparent pricing during this challenging time. Our goal is to ensure that you have all the information you need to make thoughtful decisions for your family. Below, you will find a breakdown of pricing for each of our services. If you have any questions or require further details, we are always here to assist you.`}
              </p>
            </div>
            <div className="relative w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col lg:gap-6">
              <TotalAdministrationFeeTable
                fees={fees}
                formattedTotalAmount={formattedTotalAmount}
              />
              <AshesLocationTable
                ashesLocations={ashesLocations}
                formattedTotalAmount={formattedTotalAmount}
                totalAmount={totalAmount}
              />
              <BurialLocationTable
                ashesLocations={ashesLocations}
                formattedTotalAmount={formattedTotalAmount}
                totalAmount={totalAmount}
              />
              <MiscFeesTable
                miscFees={miscFees}
                formattedTotalAmount={formattedTotalAmount}
              />
            </div>
           
          </div>
        </div>
      </section>

      <BannerSection />
    </>
  );
};

export default Page;
