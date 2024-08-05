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
import OnlinePay from "./OnlinePay";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PaymentProcessing from "./PaymentProcessing";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
);
const schema = z.object({
  creditCard: z
    .string()
    .nonempty("Credit/Debit Card No. is required.")
    .regex(/^\d{16}$/, "Credit card number must be 16 digits."),
  expDate: z
    .string()
    .nonempty("Expiration date is required.")
    .regex(
      /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
      "Invalid expiration date format."
    ), // MM/YY or MM/YYYY
  cvc: z
    .string()
    .nonempty("CVC is required.")
    .regex(/^\d{3,4}$/, "CVC must be 3 or 4 digits."),
});

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
        fontWeight: "normal",
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
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const stripeAmount = convertToSubcurrency(totalAmount);
  const formattedTotalAmount = formatNumber(totalAmount);
  const [cardType, setCardType] = useState("unknown");
  const [cardError, setCardError] = useState();




  const handleChange = async (event) => {
    if (event?.error) {
      console.log(event?.error);
      setCardError(event?.error.message);
    } else {
      console.log("remove card");
      setCardError(null);
    }
  };
  

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!cardError) {
      if (!stripe || !elements) {
        return;
      }

      if (elements == null) {
        return;
      }

      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        // Show error to your customer
        console.log(submitError.message);
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
    }
  };

  const handleCardNumberChange = (event) => {
    if (event.brand) {
      setCardType(event.brand);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 py-8">
      <div className="relative w-full mb-5 xl:mb-5">
        <CustomCardNumberElement
          options={CARD_ELEMENT_OPTIONS}
          handleChange={handleChange}
          error={cardError}
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

      <div
        className={`flex ${
          loading ? "justify-center" : "justify-end"
        } items-center`}
      >
        {loading && <PaymentProcessing />}
        {!loading && (
          <button
            disabled={!stripe || loading}
            type="submit"
            className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg"
          >
            {`Pay $${formattedTotalAmount}`}
          </button>
        )}
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
      {paymentMethod === "googlePay" && <OnlinePay totalAmount={totalAmount} />}
    </div>
  );
};

// (Include the rest of the code)

const StripeCheckoutForm = ({
  totalAmount,
  loading,
  setLoading,
  error,
  setError,
  paymentSuccess,
  setPaymentSuccess,
}) => (
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
