// components/ApplePayPayment.js
import { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const ApplePayPayment = ({ totalAmount }) => {
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Total",
        amount: totalAmount * 100, // Amount in cents
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        const paymentRequestButton = stripe
          .elements()
          .create("paymentRequestButton", {
            paymentRequest: pr,
          });

        paymentRequestButton.mount("#apple-pay-button");
      } else {
        document.getElementById("apple-pay-button").style.display = "none";
      }
    });
  }, [stripe]);

  return <div id="apple-pay-button"></div>;
};

export default ApplePayPayment;
