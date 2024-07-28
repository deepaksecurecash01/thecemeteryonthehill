// components/GooglePayPayment.js
import { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const GooglePayPayment = ({ totalAmount }) => {
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe) return;

    const paymentRequest = stripe.paymentRequest({
      country: "US",
      currency: "usd",
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
      } else {
        document.getElementById("google-pay-button").style.display = "none";
      }
    });
  }, [stripe, totalAmount]);

    return <div id="google-pay-button" className="mb-4 z-20">
  </div>;
};

export default GooglePayPayment;
