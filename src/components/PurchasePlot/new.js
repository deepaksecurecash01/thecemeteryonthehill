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
} from "@fortawesome/free-brands-svg-icons";
import PaymentProcessing from "./PaymentProcessing";
import { FaExclamation } from "react-icons/fa";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
);

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#933d38",
      fontSize: "1.35rem",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#933d38",
        fontWeight: "normal",
      },
      ":-webkit-autofill": {
        color: "#933d38",
      },
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

const WarningPopup = ({ error }) => (
  <span className="absolute backdrop-blur-lg py-1 px-2 w-full flex items-center text-primary shadow-sm z-10">
    <span className="bg-primary p-1 rounded-sm mr-1">
      <FaExclamation className="text-xs text-white" />
    </span>
    {error}
  </span>
);

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
  const [cardType, setCardType] = useState("unknown");
  const [cardError, setCardError] = useState(null);
  const [formError, setFormError] = useState(null); // State for form-level errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status
  const stripeAmount = convertToSubcurrency(totalAmount);
  const formattedTotalAmount = formatNumber(totalAmount);

  const handleCardNumberChange = (event) => {
    if (event.brand) {
      setCardType(event.brand);
    }
    if (event.error) {
      setCardError(event.error.message);
    } else if (event.complete) {
      setCardError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear form-level errors
    setFormError(null);

    // Check if Stripe.js and elements are available
    if (!stripe || !elements) {
      setFormError("Stripe.js has not loaded.");
      return;
    }

    // Validate card elements
    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    if (!cardNumber || !cardExpiry || !cardCvc) {
      setFormError("Please fill out all fields.");
      return;
    }

    // Validate if card number is complete
    const { error: cardNumberError } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumber,
    });

    if (cardNumberError) {
      setFormError(cardNumberError.message);
      return;
    }

    setLoading(true);
    setIsSubmitting(true); // Set submitting state to true

    try {
      // Fetch the client secret from the server
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: stripeAmount }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch client secret.");
      }

      const { clientSecret } = await res.json();

      // Confirm card payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumber,
          billing_details: {
            // Include any other billing details if needed
          },
        },
      });

      if (result.error) {
        // Handle error from Stripe
        setFormError(result.error.message);
        setError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        // Payment succeeded
        setPaymentSuccess(true);
      }
    } catch (err) {
      setFormError(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-8">
      <div className="relative w-full mb-5 xl:mb-5">
        <div aria-modal>
          <CardNumberElement
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleCardNumberChange}
            className={`block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer max-h-10 ${
              cardError ? "border-red-500" : ""
            }`}
          />
          <label className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            <span className="hidden md:block">Card Number</span>
            <span className="block md:hidden">Card Number</span>
          </label>
          {(formError || cardError) && (
            <WarningPopup error={formError || cardError} />
          )}
        </div>
        <div className="absolute bottom-1 right-2">
          <FontAwesomeIcon
            icon={cardIconMap[cardType] || cardIconMap["unknown"]}
            className="ml-3 text-2xl text-primary"
          />
        </div>
      </div>
      <div className="flex space-x-4 mb-5 xl:mb-5">
        <div className="relative w-[70%] mb-5 xl:mb-5 group contact">
          <div className="relative">
            <CardExpiryElement
              options={CARD_ELEMENT_OPTIONS}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer max-h-10"
            />
            <label className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              <span className="hidden md:block">Expiry Date</span>
              <span className="block md:hidden">Expiry Date</span>
            </label>
          </div>{" "}
        </div>
        <div className="relative w-[30%] mb-5 xl:mb-5 group contact">
          <div className="relative">
            <CardCvcElement
              options={CARD_ELEMENT_OPTIONS}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer max-h-10 "
            />
            <label className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              <span className="hidden md:block">CVC</span>
              <span className="block md:hidden">CVC</span>
            </label>
          </div>{" "}
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
            disabled={!stripe || loading || isSubmitting} // Disable button during payment processing
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-lg"
          >
            {`Pay $${formattedTotalAmount}`}
          </button>
        )}
      </div>
    </form>
  );
};

const StripeCheckoutForm = () => (
  <Elements stripe={stripePromise}>
    <CardPayment
      totalAmount={1000} // Example amount
      loading={false}
      setLoading={() => {}}
      error={null}
      setError={() => {}}
      paymentSuccess={false}
      setPaymentSuccess={() => {}}
    />
  </Elements>
);

export default StripeCheckoutForm;
