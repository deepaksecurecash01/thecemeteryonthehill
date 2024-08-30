import Image from "next/image";
import React from "react";
import { formatNumber } from "@/lib/helper";
import TotalAdministrationFeeTable from '@/components/pricing/TotalAdministrationFeeTable'
import AshesLocationTable from "@/components/pricing/AshesLocationTable";
import BurialLocationTable from "@/components/pricing/BurialLocationTable";
import MiscFeesTable from "@/components/pricing/MiscFeesTable";

const Page = () => {
  // Hard-coded prices for administration fees
  const prices = {
    "Internment Rights (100 Years)": 1000,
    "Preparation for initial Interments": 2000,
    "Ongoing maintenance Fee ($ 50 per year)": 5000,
    Plaque: 275,
  };

  // List of ashes locations with their respective fees
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

  // Misc fees list
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

  // Calculate total amount from hard-coded prices
  const calculateTotalAmount = () => {
    const totalAmount = Object.values(prices).reduce(
      (acc, price) => acc + price,
      0
    );
    return totalAmount.toFixed(2);
  };

  const totalAmount = calculateTotalAmount();
  const formattedTotalAmount = formatNumber(totalAmount);

  // Convert prices object to array for rendering
  const fees = Object.entries(prices).map(([name, amount]) => ({
    name,
    amount: formatNumber(amount),
  }));

  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden pb-10">
      <div
        className="absolute top-0 left-0 h-full w-full bg-ellipse-1 bg-cover bg-no-repeat -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-full w-full bg-ellipse-2 bg-cover bg-no-repeat -z-10"
        aria-hidden="true"
      />
      <div className=" w-full flex flex-col gap-4 items-center pt-10 lg:pt-2 xl:pt-10">
        <div className="lg:h-[25vh] xl:h-auto flex flex-col justify-center items-center">
          <h1 className="text-[1.75rem] md:text-[2.75rem] font-bold font-display text-primary">
            Pricing
          </h1>
        </div>
        <div className="relative w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col gap-6 lg:pt-0">
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
    </section>
  );
};

export default Page;
