"use client";
import Lottie from "lottie-react";
import failed from "../../../../../public/images/failed.json";

const PaymentFailed = ({ error, setError }) => {

  return (
    <div className="relative flex flex-col justify-center gap-4 items-center">
      <div className="flex flex-col justify-end h-48 items-center">
        <Lottie animationData={failed} loop={false} />
      </div>
      <div className="flex flex-col justify-start h-48  items-center gap-8">
        <p className="text-primary text-center font-display text-4xl">
          Payment Failed!
        </p>
        <div className="flex justify-center items-center">
          <button
            className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg z-30"
            onClick={() => setError(null)}
          >
            Try Again!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
