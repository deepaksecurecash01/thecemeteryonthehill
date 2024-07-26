import React from "react";
import StripeCheckoutForm from "./creditform";

const StripeCheckout = ({
  elementData,
  formattedTotalAmount,
  formatNumber,
  screenToShow,
  setscreenToShow,
  getTotalAmount,
}) =>
{
    const totalAmount = getTotalAmount()
    
  return (
    <div className="w-[70%] md:w-[32rem] sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-center items-center  z-10">
      <div className="h-[80%] py-5 flex flex-col gap-10 z-20">
        <div className="flex flex-col gap-4"> 
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
              Payment Checkout
            </h2>
          </div>
          <div>
            <h2 className="text-[1.25rem] md:text-[1.50rem] text-center font-bold text-primary font-display">
              Selected PLOT:
              <span className=" font-roboto uppercase">
                &nbsp;{elementData[0]?.Plot_number}
              </span>
            </h2>
          </div>
          <div>
            <div className="text-[1.25rem] md:text-[1.50rem] text-center font-bold text-primary font-display">
              {"Total Amount (AUDS): "}
              <span className=" font-roboto uppercase ">
                $ {formattedTotalAmount}
              </span>
            </div>
          </div>
        </div>
        <StripeCheckoutForm totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default StripeCheckout;
