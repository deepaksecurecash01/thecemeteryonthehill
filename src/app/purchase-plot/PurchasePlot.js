"use client";
import dynamic from "next/dynamic";
import PlotTable from "@/components/purchase-plot/PlotTable";
const PopupForm = dynamic(
  () => import("@/components/purchase-plot/PopupForm"),
  { ssr: false }
);
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
);


const PurchasePlot = () => {
  return (
    <div className="flex flex-col justify-start items-center my-5 overflow-hidden">
      <div className="w-[90vw] xl:w-[80vw] 3xl:w-[60vw] flex flex-col justify-center items-center gap-2">
        <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
          Purchase a Plot
        </h2>
        <p className="text-paragraph text-base font-bold tracking-wide mx-6 text-center lg:text-lg">
          {`Choosing a final resting place is a significant and personal decision. At The Cemetery on The Hill, we provide a serene and beautifully maintained environment where your loved ones can be honoured and remembered for generations to come. Our cemetery map below offers a detailed view of the available plots, allowing you to select the perfect spot within our historic grounds.`}
        </p>
      </div>

      <PlotTable />
      <Elements stripe={stripePromise}>
        <PopupForm />
      </Elements>
    </div>
  );
};

export default PurchasePlot;
