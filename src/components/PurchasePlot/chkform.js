// pages/StripeCheckoutForm.js
import { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { FaExclamation } from "react-icons/fa";
import { formatNumber } from "@/lib/helper";

// Stripe public key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
);

// Zod schema for card validation
const cardSchema = z.object({
  cardNumber: z.boolean("Credit/Debit Card No. is required."),
});

// Custom component to display validation error messages
const WarningPopup = ({ error }) => {
  return (
    <span className="absolute backdrop-blur-lg py-1 px-2 w-full flex items-center text-primary shadow-sm z-10">
      <span className="bg-primary p-1 rounded-sm mr-1">
        <FaExclamation className="text-xs text-white" />
      </span>
      {error}
    </span>
  );
};

// Custom component for CardNumberElement
const CustomCardNumberElement = ({ options, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("change", onChange);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("change", onChange);
      }
    };
  }, [onChange]);

  return <CardNumberElement options={options} onChange={onChange} ref={ref} />;
};

// Custom component for CardExpiryElement
const CustomCardExpiryElement = ({ options }) => {
  return <CardExpiryElement options={options} />;
};

// Custom component for CardCvcElement
const CustomCardCvcElement = ({ options }) => {
  return <CardCvcElement options={options} />;
};

// CardPayment component
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
  const stripeAmount = (totalAmount * 100).toFixed(0); // Convert to smallest currency unit
  const formattedTotalAmount = formatNumber(totalAmount);

  // React Hook Form setup
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      cardNumber: "",
    },
  });

  // Handle changes in card number
  const handleChange = async (event) => {
    if (event.empty) {
      setCardError("Please fill out the required fields.");
    } else if (event.complete && !event.error) {
      setCardError(null);
    } else if (event.error) {
      setCardError(event.error.message);
    }
  };

  // Handle card number brand change
  const handleCardNumberChange = (event) => {
    if (event.brand) {
      setCardType(event.brand);
    }
  };

  // Submit form
  const onSubmit = async () => {
    if (!stripe || !elements || cardError) return;

    setLoading(true);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: stripeAmount }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch client secret.");
      }

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            // Include any other billing details if needed
          },
        },
      });

      if (result.error) {
        setCardError(result.error.message);
        setError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        setPaymentSuccess(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 py-8"
    >
      <div className="relative w-full mb-5 xl:mb-5">
        <div aria-modal>
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <CustomCardNumberElement
                options={{
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
                }}
                onChange={(event) => {
                  handleChange(event);
                  handleCardNumberChange(event);
                  setValue("cardNumber", event.complete ? true : false);
                }}
                className={`block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer max-h-10 ${
                  errors.cardNumber ? "border-red-500" : ""
                }`}
              />
            )}
          />
          <label className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            <span className="hidden md:block">Card Number</span>
            <span className="block md:hidden">Card Number</span>
          </label>
          {errors.cardNumber && (
            <WarningPopup error={errors.cardNumber.message} />
          )}
        </div>
        <div className="absolute bottom-1 right-2">
          <FontAwesomeIcon className="ml-3 text-2xl text-primary" />
        </div>
      </div>
      <div className="flex space-x-4 mb-5 xl:mb-5">
        <div className="relative w-[70%] mb-5 xl:mb-5 group contact">
          <CustomCardExpiryElement
            options={{
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
            }}
          />
        </div>
        <div className="relative w-[30%] mb-5 xl:mb-5 group contact">
          <CustomCardCvcElement
            options={{
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
            }}
          />
        </div>
      </div>
      <div
        className={`flex ${
          loading ? "justify-center" : "justify-end"
        } items-center`}
      >
        {loading && <div className="text-primary">Processing...</div>}
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

// Main component for choosing payment method
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
      <div className="flex mb-4">
        <button
          onClick={() => setPaymentMethod("card")}
          className={`py-2 px-4 ${
            paymentMethod === "card" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Credit Card
        </button>
        <button
          onClick={() => setPaymentMethod("googlePay")}
          className={`py-2 px-4 ${
            paymentMethod === "googlePay"
              ? "bg-primary text-white"
              : "bg-gray-200"
          }`}
        >
          Google Pay
        </button>
      </div>
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
        <div className="text-primary">Google Pay integration coming soon!</div>
      )}
    </div>
  );
};

// Stripe Checkout Form component
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
