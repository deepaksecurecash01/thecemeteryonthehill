import React, { useState, useEffect } from "react";

const PaymentProcessing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000); // Toggle every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div
        className="inline-block h-14 w-14 animate-spin rounded-full border-[6px] border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <div>
        {currentIndex === 0 && (
          <p className="text-sm flex justify-center font-display items-center md:text-xl text-primary font-semibold tracking-wide text-center">
            Processing Payment
          </p>
        )}
        {currentIndex === 1 && (
          <p className="text-sm flex justify-center font-display items-center md:text-xl text-primary font-semibold tracking-wide text-center">
            Please wait while we securely <br />
            process your payment.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentProcessing;
