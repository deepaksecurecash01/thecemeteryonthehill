import React, { useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const StripeCardForm = ({
  registerElements,
  elementData,
  formattedTotalAmount,
  formatNumber,
  screenToShow,
  setscreenToShow,
  getTotalAmount,
}) => {
  const cardNumberRef = useRef(null);
  const cardExpiryRef = useRef(null);
  const cardCvcRef = useRef(null);

  useEffect(() => {
    const setupStripe = async () => {
      const stripe = await stripePromise;
      const elements = stripe.elements({
        fonts: [
          {
            cssSrc: "https://fonts.googleapis.com/css?family=Source+Code+Pro",
          },
        ],
        locale: window.__exampleLocale || "auto",
      });

      // Floating labels
      const inputs = document.querySelectorAll(".cell.example.example2 .input");
      Array.from(inputs).forEach((input) => {
        input.addEventListener("focus", () => {
          input.classList.add("focused");
        });
        input.addEventListener("blur", () => {
          input.classList.remove("focused");
        });
        input.addEventListener("keyup", () => {
          if (input.value.length === 0) {
            input.classList.add("empty");
          } else {
            input.classList.remove("empty");
          }
        });
      });

      const elementStyles = {
        base: {
          color: "#32325D",
          fontWeight: 500,
          fontFamily: "Source Code Pro, Consolas, Menlo, monospace",
          fontSize: "16px",
          fontSmoothing: "antialiased",
          "::placeholder": {
            color: "#CFD7DF",
          },
          ":-webkit-autofill": {
            color: "#e39f48",
          },
        },
        invalid: {
          color: "#E25950",
          "::placeholder": {
            color: "#FFCCA5",
          },
        },
      };

      const elementClasses = {
        focus: "focused",
        empty: "empty",
        invalid: "invalid",
      };

      const cardNumber = elements.create("cardNumber", {
        style: elementStyles,
        classes: elementClasses,
      });
      cardNumber.mount(cardNumberRef.current);

      const cardExpiry = elements.create("cardExpiry", {
        style: elementStyles,
        classes: elementClasses,
      });
      cardExpiry.mount(cardExpiryRef.current);

      const cardCvc = elements.create("cardCvc", {
        style: elementStyles,
        classes: elementClasses,
      });
      cardCvc.mount(cardCvcRef.current);

      registerElements([cardNumber, cardExpiry, cardCvc], "example2");
    };

    setupStripe();
  }, [registerElements]);

  return (
    <div className="cell example example2">
      <div
        className="input"
        ref={cardNumberRef}
        id="example2-card-number"
      ></div>
      <div
        className="input"
        ref={cardExpiryRef}
        id="example2-card-expiry"
      ></div>
      <div className="input" ref={cardCvcRef} id="example2-card-cvc"></div>
    </div>
  );
};

export default StripeCardForm;
