import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const OnlinePay = ({ totalAmount }) => {
  const stripe = useStripe();
  const [isButtonReady, setIsButtonReady] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    const paymentRequest = stripe.paymentRequest({
      country: "AU",
      currency: "aud",
      total: {
        label: "Total",
        amount: totalAmount * 100, // Amount in cents
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    paymentRequest.canMakePayment().then((result) => {
      if (result) {
        const paymentRequestButton = stripe
          .elements()
          .create("paymentRequestButton", {
            paymentRequest,
          });

        paymentRequestButton.mount("#google-pay-button");
        setIsButtonReady(true);
      } else {
        document.getElementById("google-pay-button").style.display = "none";
      }
    });
  }, [stripe, totalAmount]);

  return (
    <div className="pt-8">
      {!isButtonReady && (
        <div className="flex justify-center items-center h-12">
          <div
            className="inline-block h-12 w-12 animate-spin rounded-full border-[6px] border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      <div
        id="google-pay-button"
        className={`mb-4 z-20 ${!isButtonReady ? "hidden" : ""}`}
      ></div>
    </div>
  );
};

export default OnlinePay;
