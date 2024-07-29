import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const GooglePayPayment = ({ totalAmount }) => {
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

    paymentRequest
      .canMakePayment()
      .then((result) => {
        if (result) {
          const paymentRequestButton = stripe
            .elements()
            .create("paymentRequestButton", {
              paymentRequest,
              style: {
                paymentRequestButton: {
                  theme: "light",
                  type: "googlePay",
                  height: "64px",
                  color: "black", // Set the color to 'black', the actual button background color will be handled via custom CSS
                },
              },
            });

          paymentRequestButton.mount("#google-pay-button");
          setIsButtonReady(true);
        } else {
          document.getElementById("google-pay-button").style.display = "none";
        }
      })
      .catch((error) => {
        console.error("Error checking payment capability:", error);
      });
  }, [stripe, totalAmount]);

  return (
    <div className="py-10">
      {!isButtonReady && (
        <div className="flex justify-center items-center h-12">
          <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div>
      )}
      <div
        id="google-pay-button"
        className={`mb-4 z-20 ${!isButtonReady ? "hidden" : ""}`}
      ></div>
    </div>
  );
};

export default GooglePayPayment;
