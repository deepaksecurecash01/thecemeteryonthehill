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

import PaymentTabs from "./PaymentTabs";
import OnlinePay from "./OnlinePay";
import PaymentProcessing from "./payment-message-screen/PaymentProcessing";
import { FaExclamation } from "react-icons/fa";
import Image from "next/image";
import WarningPopup from "@/components/ui/WarningPopup";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST
);


const CARD_ELEMENT_OPTIONS = {
  showIcon: true,
  iconStyle: "solid",
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



const CardPayment = ({
  totalAmount,
  loading,
  setLoading,
  setError,
  setPaymentSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardNumberError, setCardNumberError] = useState(null);
  const [expiryDateError, setExpiryDateError] = useState(null);
  const [cvcError, setCvcError] = useState(null);
  const stripeAmount = convertToSubcurrency(totalAmount);
  const formattedTotalAmount = formatNumber(totalAmount);
  const [currentErrorField, setCurrentErrorField] = useState(null);

  const handleChange = (event) => {
    if (event?.empty) {
      if (event.elementType === "cardNumber")
        setCardNumberError("Please fill out the card number.");
      if (event.elementType === "cardExpiry")
        setExpiryDateError("Please fill out the expiry date.");
      if (event.elementType === "cardCvc")
        setCvcError("Please fill out the CVC.");
    } else if (event?.complete && !event?.error) {
      if (event.elementType === "cardNumber") setCardNumberError(null);
      if (event.elementType === "cardExpiry") setExpiryDateError(null);
      if (event.elementType === "cardCvc") setCvcError(null);
    } else if (event?.error) {
      if (event.elementType === "cardNumber")
        setCardNumberError(event.error.message);
      if (event.elementType === "cardExpiry")
        setExpiryDateError(event.error.message);
      if (event.elementType === "cardCvc") setCvcError(event.error.message);
    }
  };



  const onSubmit = async (event) => {
    event.preventDefault();

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExpiry = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    if (!cardNumber || !cardExpiry || !cardCvc) {
      setFormError("Please fill out all fields.");
      return;
    }

    // Validate card number
    const { error: cardNumberError } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumber,
    });

    console.log(cardNumberError)
 
    if (cardNumberError?.code == "incomplete_number") {
      setCardNumberError(cardNumberError.message);
      cardNumber.focus(); // Focus on the card number field
      return;
    }

    if (
      cardNumberError?.code == "incomplete_expiry" ||
      cardNumberError?.code == "invalid_expiry_year_past"
    ) {
      setExpiryDateError(cardNumberError.message);
      cardExpiry.focus(); // Focus on the expiry date field
      return;
    }

    if (cardNumberError) {
      setCvcError(cardNumberError.message);
      cardCvc.focus(); // Focus on the CVC field
      return;
    }

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
          billing_details: {},
        },
      });

      if (result.error) {
        setCardNumberError(result.error.message);
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
    <form onSubmit={onSubmit} className="flex flex-col gap-4 py-8">
      <div className="relative w-full mb-5 xl:mb-5 flex justify-center items-center bg-secondary/30 text-primary py-2 rounded-lg">
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
      <div className="relative w-full mb-5 xl:mb-5">
        <div aria-modal>
          <CardNumberElement
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
            onFocus={() => setCurrentErrorField("cardNumber")}
            onBlur={() => setCurrentErrorField(null)}
            className={`block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer max-h-10`}
          />
          <label className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0">
            <span className="hidden md:block">Card Number</span>
            <span className="block md:hidden">Card Number</span>
          </label>
          {cardNumberError && (
            <WarningPopup
              error={cardNumberError}
              isFirstError={currentErrorField === "cardNumber"}
            />
          )}
        </div>
      </div>

      <div className="flex space-x-4 mb-5 xl:mb-5 relative">
        <div className=" w-[70%] mb-5 xl:mb-5 group contact">
          <CardExpiryElement
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
            onFocus={() => setCurrentErrorField("cardExpiry")}
            onBlur={() => setCurrentErrorField(null)}
            className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer max-h-10"
          />
          <label className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            <span className="hidden md:block">Expiry Date</span>
            <span className="block md:hidden">Expiry Date</span>
          </label>

          {expiryDateError && currentErrorField === "cardExpiry" && (
            <span className="absolute backdrop-blur-lg py-1 px-2 w-full -bottom-3 left-0 flex items-center text-primary shadow-sm z-10">
              <span className="bg-primary p-1 rounded-sm mr-1">
                <FaExclamation className="text-xs text-white" />
              </span>
              {expiryDateError}
            </span>
          )}
        </div>
        <div className=" w-[30%] mb-5 xl:mb-5 group contact">
          <CardCvcElement
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
            onFocus={() => setCurrentErrorField("cardCvc")}
            onBlur={() => setCurrentErrorField(null)}
            className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer max-h-10"
          />
          <label className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            <span className="hidden md:block">CVC</span>
            <span className="block md:hidden">CVC</span>
          </label>
          {cvcError && currentErrorField === "cardCvc" && (
            <span className="absolute backdrop-blur-lg py-1 px-2 w-full -bottom-3 left-0 flex items-center text-primary shadow-sm z-10">
              <span className="bg-primary p-1 rounded-sm mr-1">
                <FaExclamation className="text-xs text-white" />
              </span>
              {cvcError}
            </span>
          )}
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
