"use client";
import PlotTable from "@/components/purchase-plot/PlotTable";
import PopupForm from "@/components/purchase-plot/PopupForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
);

const Page = () => {
  return (
    <div className="flex flex-col justify-start items-center my-5 overflow-hidden">
      <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
        Purchase a Plot
      </h2>
      <p className="text-paragraph text-base text-justify font-bold tracking-wide lg:text-lg">
        {`Choose a plot at "The Cemetery on the Hill" as a final resting place for your loved ones.`}
      </p>
      <PlotTable />
      <Elements stripe={stripePromise}>
        <PopupForm />
      </Elements>
    </div>
  );
};

export default Page;
