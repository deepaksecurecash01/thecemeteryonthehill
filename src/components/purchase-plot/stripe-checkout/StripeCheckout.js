import React, { useEffect, useState } from "react";
import StripeCheckoutForm from "./StripeCheckoutForm";
import PaymentSuccess from "./payment-message-screen/PaymentSuccess";
import PaymentFailed from "./payment-message-screen/PaymentFailed";
import {
  setAshesBed,
  setAshesWall,
  setPlot,
  setPopupForm,
} from "@/redux/slice";
import { useDispatch } from "react-redux";
import PaymentTabs from "./PaymentTabs";
import Image from "next/image";

const StripeCheckout = ({
  elementData,
  formattedTotalAmount,
  formatNumber,
  screenToShow,
  setscreenToShow,
  totalAmount,
  purchaseFormData,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const dispatch = useDispatch();



  useEffect(() => {
    if (paymentSuccess) {
      const timer = setTimeout(() => {
        dispatch(setPlot(""));
        dispatch(setAshesWall(""));
        dispatch(setAshesBed(""));
        setTimeout(() => {
          setError(null);
          setPaymentSuccess(false);
        }, 1000);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);
  return (
    <div className="w-[70%] md:w-[32rem] md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-center items-center  z-10">
      {!paymentSuccess && !error && (
        <div className="h-[80%] py-5 flex flex-col gap-8 md:gap-10 z-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-4">
              <h2 className=" xxs:text-[1.35rem] text-[1.75rem] md:text-[2.75rem] text-center font-bold text-primary font-display">
                Payment Checkout
              </h2>
            </div>
            <div>
              <h2 className="text-base xxs:text-[0.95rem] md:text-lg text-center font-bold text-primary font-display">
                Selected PLOT:
                <span className=" font-roboto uppercase">
                  &nbsp;{elementData[0]?.Plot_number}
                </span>
              </h2>
            </div>
            <div>
              <div className="text-base xxs:text-[0.95rem] md:text-lg text-center font-bold text-primary font-display">
                {"Total Amount (AUDS): "}
                <span className=" font-roboto uppercase ">
                  $ {formattedTotalAmount}
                </span>
              </div>
            </div>
          </div>
          <PaymentTabs setPaymentMethod={setPaymentMethod} />
          <div className="relative w-full flex justify-center items-center bg-secondary/30 text-primary py-2 rounded-lg">
            <Image
              src={"/images/secure-stripe-payment-logo.webp"}
              width={400}
              height={100}
              alt={`Hero-Section Image-1 | The Cemetery on the Hill`}
              loading="lazy"
              objectFit="cover"
              className=" rounded-lg object-center"
            />
          </div>
          <StripeCheckoutForm
            totalAmount={totalAmount}
            loading={loading}
            setLoading={setLoading}
            error={error}
            setError={setError}
            paymentSuccess={paymentSuccess}
            paymentMethod={paymentMethod}
            setPaymentSuccess={setPaymentSuccess}
            purchaseFormData={purchaseFormData}
          />
        </div>
      )}
      {error && <PaymentFailed error={error} setError={setError} />}
      {paymentSuccess && <PaymentSuccess />}
    </div>
  );
};

export default StripeCheckout;
