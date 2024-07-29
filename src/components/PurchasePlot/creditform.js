// components/StripeCheckoutForm.js
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import CustomCardNumberElement from "./CustomCardNumberElement";
import CustomCardExpiryElement from "./CustomCardExpiryElement";
import CustomCardCvcElement from "./CustomCardCvcElement";
import { convertToSubcurrency, formatNumber } from "@/lib/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
  faCcDinersClub,
  faCcJcb,
  faCcStripe,
} from "@fortawesome/free-brands-svg-icons";
import PaymentTabs from "./PaymentTabs";
import GooglePayPayment from "./GooglePayPayment";
import ApplePayPayment from "./ApplePayPayment";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
);

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#933d38",
      fontSize: "1.35rem",
      fontFamiliy: "Roboto",
      fontWeight: "bold", // font-medium
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#933d38",
      },
      ":-webkit-autofill": {
        color: "#933d38",
      },
      fonts: [
        {
          cssSrc:
            "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap",
        },
      ],
    },
    invalid: {
      color: "#933d38",
      "::placeholder": {
        color: "#933d38",
      },
    },
  },
};

const cardIconMap = {
  visa: faCcVisa,
  mastercard: faCcMastercard,
  amex: faCcAmex,
  discover: faCcDiscover,
  diners: faCcDinersClub,
  jcb: faCcJcb,
  unknown: faCreditCard, // Fallback icon
};

const CardPayment = ({
  totalAmount,
  loading,
  setLoading,
  error,
  setError,
  paymentSuccess,
  setPaymentSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const stripeAmount = convertToSubcurrency(totalAmount);
  const formattedTotalAmount = formatNumber(totalAmount);
  const [cardType, setCardType] = useState("unknown");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    // Fetch the client secret from the server
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: stripeAmount }), // example amount in cents
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    });

    setLoading(false);

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
      }
    }
  };

  const handleCardNumberChange = (event) => {
    if (event.brand) {
      setCardType(event.brand);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-8">
      <div className="relative w-full flex-grow mb-5 xl:mb-5 ">
        <CustomCardNumberElement
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleCardNumberChange}
        />
        <div className="absolute bottom-1 right-2">
          <FontAwesomeIcon
            icon={cardIconMap[cardType] || cardIconMap["unknown"]}
            className="ml-3 text-2xl text-primary"
          />
        </div>
      </div>
      <div className="flex space-x-4 mb-5 xl:mb-5">
        <div className="relative w-[70%] mb-5 xl:mb-5 group contact">
          <CustomCardExpiryElement options={CARD_ELEMENT_OPTIONS} />
        </div>
        <div className="relative w-[30%] mb-5 xl:mb-5 group contact">
          <CustomCardCvcElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      <div className="flex justify-end items-center">
        <button
          disabled={!stripe || loading}
          type="submit"
          className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg"
        >
          {loading ? "Processing..." : `Pay $${formattedTotalAmount}`}
        </button>
      </div>
    </form>
  );
};

// components/StripeCheckoutForm.js
// (Include all imports and other code)

const CheckoutForm = ({
  totalAmount,
  loading,
  setLoading,
  error,
  setError,
  paymentSuccess,
  setPaymentSuccess,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div>
      <PaymentTabs setPaymentMethod={setPaymentMethod} />
      {paymentMethod === "card" && (
        <CardPayment
          totalAmount={totalAmount}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          paymentSuccess={paymentSuccess}
          setPaymentSuccess={setPaymentSuccess}
        />
      )}
      {paymentMethod === "googlePay" && (
        <GooglePayPayment totalAmount={totalAmount} />
      )}
      {paymentMethod === "applePay" && (
        <ApplePayPayment totalAmount={totalAmount} />
      )}
    </div>
  );
};

// (Include the rest of the code)

const StripeCheckoutForm = ({ totalAmount, loading, setLoading, error, setError, paymentSuccess, setPaymentSuccess }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm
      totalAmount={totalAmount}
      loading={loading}
      setLoading={setLoading}
      error={error}
      setError={setError}
      paymentSuccess={paymentSuccess}
      setPaymentSuccess={setPaymentSuccess}
    />
  </Elements>
);

export default StripeCheckoutForm;
