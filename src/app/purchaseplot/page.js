"use client";
import PlotTable from "@/components/PurchasePlot/PlotTable";
import PopupForm from "@/components/PurchasePlot/PopupForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

function convertToSubcurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}

if (process.env.STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY_TEST);

const page = () => {
  const amount = 49.99;

  return (
    <div className="flex flex-col justify-start  items-center my-5 overflow-hidden">
      <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
        Purchase a Plot
      </h2>
      <PlotTable />

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "aud",
        }}
      >
        <PopupForm />
      </Elements>
    </div>
  );
};

export default page;
