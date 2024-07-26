"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { setPopupForm } from "@/redux/slice";
import Image from "next/image";
import PurchaseReceipt from "./PurchaseReceipt";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

function convertToSubcurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}

const schema = z.object({
  fullName: z
    .string()
    .nonempty("Full Name is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  address: z.string().nonempty("Address is required."),
  city: z.string().nonempty("City is required."),
  province: z.string().nonempty("Province is required."),
  postalCode: z
    .string()
    .nonempty("Postal code is required.")
    .regex(
      /^[A-Za-z0-9][A-Za-z0-9\- ]{0,10}[A-Za-z0-9]$/,
      "Invalid postal code format."
    ), // General regex for international postal codes
  country: z.enum(["email", "phone"], {
    errorMap: () => ({ message: "Country is required." }),
  }),
  phoneNumber: z
    .string()
    .nonempty("Phone Number is required.")
    .regex(/^[0-9]+$/, "Phone Number must contain only digits."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),
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
  cvv: z
    .string()
    .nonempty("CVV is required.")
    .regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits."),
});

const WarningPopup = ({ error, isFirstError }) => {
  return (
    isFirstError && (
      <span className="absolute backdrop-blur-lg py-1 px-2 w-full flex items-center text-primary shadow-sm z-10">
        <span className="bg-primary p-1 rounded-sm mr-1">
          <FaExclamation className="text-xs text-white" />
        </span>
        {error}
      </span>
    )
  );
};

const RelinquishForm = ({ elementData, amount }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [receiptScreen, setReceiptScreen] = useState(true); // true, //false);
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  function formatNumber(number) {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe or elements not loaded");
      setLoading(false);
      return;
    }

    try {
      const { error: submitError } = await elements.submit();

      if (submitError) {
        setErrorMessage(submitError.message);
        setLoading(false);
        return;
      }

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
        },
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        // The payment UI automatically closes with a success animation.
        // Your customer is redirected to your `return_url`.
      }

      setLoading(false);
    } catch (error) {
      setErrorMessage("An error occurred while processing the payment.");
      setLoading(false);
      return;
    }

    try {
      // Simulate a form submission
      await new Promise((resolve, reject) => {
        // Change to resolve() for success simulation, reject() for error simulation
        setTimeout(resolve, 1000);
      });

      setSubmissionStatus("success");
      setErrorMessage("");
      setSignature(null);
      reset(); // Reset form fields
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  const getTotalAmount = () => {
    const plot_Price = parseFloat(elementData[0]?.prices?.plot_Price) || 0;
    const Internment_Rights_100_Years =
      parseFloat(elementData[0]?.prices?.Internment_Rights_100_Years) || 0;
    const Preparation_for_initial_Interments =
      parseFloat(elementData[0]?.prices?.Preparation_for_initial_Interments) ||
      0;
    const Ongoing_maintenance_Fee_per_year =
      parseFloat(elementData[0]?.prices?.Ongoing_maintenance_Fee_per_year) || 0;
    const Plaque = parseFloat(elementData[0]?.prices?.Plaque) || 0;

    const totalAmount = (
      plot_Price +
      Internment_Rights_100_Years +
      Preparation_for_initial_Interments +
      Ongoing_maintenance_Fee_per_year +
      Plaque
    ).toFixed(2);

    return totalAmount;
  };
  const formattedTotalAmount = formatNumber(getTotalAmount());

  return (
    <>
      <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
        <div className=" md:max-h-[1024px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center relative py-28 md:py-24 lg:py-24">
          <div
            className={`absolute ${
              receiptScreen ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-250 duration-300  h-full w-full`}
          >
            <PurchaseReceipt
              elementData={elementData}
              formattedTotalAmount={formattedTotalAmount}
              formatNumber={formatNumber}
              getTotalAmount={getTotalAmount}
              receiptScreen={receiptScreen}
              setReceiptScreen={setReceiptScreen}
            />
          </div>

          <form
            className={`w-[70%]  md:w-auto pt-6 sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between relative z-10  ${
              !receiptScreen ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-250 duration-300 `}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <input
                type="text"
                {...register("fullName")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("fullName")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="fullName"
                className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="hidden md:block">Full Name</span>
                <span className="block md:hidden">Full Name</span>
              </label>
              {errors.fullName && (
                <WarningPopup
                  error={errors.fullName?.message}
                  isFirstError={currentErrorField === "fullName"}
                />
              )}
            </div>
            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <textarea
                type="text"
                rows="2"
                {...register("address")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("address")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="address"
                className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="hidden md:block">Address</span>
                <span className="block md:hidden">Address</span>
              </label>
              {errors.address && (
                <WarningPopup
                  error={errors.address?.message}
                  isFirstError={currentErrorField === "address"}
                />
              )}
            </div>
            <div className="flex space-x-4 mb-5  xl:mb-5 relative">
              <div className=" w-32 group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("city")}
                    className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onFocus={() => setCurrentErrorField("city")}
                    onBlur={() => setCurrentErrorField(null)}
                  />
                  <label
                    htmlFor="city"
                    className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    City
                  </label>
                </div>

                {errors.city && currentErrorField === "city" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full -bottom-8 -left-4 flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.city?.message}
                  </span>
                )}
              </div>
              <div className=" w-32 group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("province")}
                    className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onFocus={() => setCurrentErrorField("province")}
                    onBlur={() => setCurrentErrorField(null)}
                  />
                  <label
                    htmlFor="province"
                    className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Province
                  </label>
                </div>
                {errors.province && currentErrorField === "province" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full -bottom-8 -left-4 flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.province?.message}
                  </span>
                )}
              </div>
              <div className=" w-32 group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("postalCode")}
                    className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onFocus={() => setCurrentErrorField("postalCode")}
                    onBlur={() => setCurrentErrorField(null)}
                  />
                  <label
                    htmlFor="postalCode"
                    className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Postal
                  </label>
                </div>
                {errors.postalCode && currentErrorField === "postalCode" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full -bottom-8 -left-4 flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.postalCode?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <label
                htmlFor="preferredContactMethod"
                className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country
              </label>
              <select
                {...register("country")}
                onChange={(e) => {
                  setValue("country", e.target.value, {
                    shouldValidate: true,
                  });
                  setCurrentErrorField(null); // Reset error field when a selection is made
                }}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                onFocus={() => setCurrentErrorField("country")}
                onBlur={() => setCurrentErrorField(null)}
              >
                <option value="">Select Country</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
              {errors.country && (
                <WarningPopup
                  error={errors.country.message}
                  isFirstError={currentErrorField === "country"}
                />
              )}
            </div>
            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <input
                type="text"
                {...register("phoneNumber")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("phoneNumber")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="phoneNumber"
                className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="hidden md:block">Phone Number</span>
                <span className="block md:hidden">Phone Number</span>
              </label>
              {errors.phoneNumber && (
                <WarningPopup
                  error={errors.phoneNumber?.message}
                  isFirstError={currentErrorField === "phoneNumber"}
                />
              )}
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact">
              <input
                type="text"
                {...register("email")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("email")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
              {errors.email && (
                <WarningPopup
                  error={errors.email.message}
                  isFirstError={currentErrorField === "email"}
                />
              )}
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact">
              <h2 className="text-lg text-start font-bold text-primary font-display">
                Selected PLOT:
                <span className=" font-roboto uppercase text-xl">
                  &nbsp;{elementData[0]?.Plot_number}
                </span>
              </h2>
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact">
              <div className="text-lg text-start font-bold text-primary font-display flex flex-col gap-2">
                {" Here's how much you owe (AUD$):"}
                <p className=" font-roboto uppercase text-xl">
                  $ {formattedTotalAmount}
                </p>
              </div>
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact flex justify-between items-center">
              <h2 className="text-lg w-full text-start font-bold text-primary font-display">
                Payment Method:
              </h2>
              <Image
                src="/images/paymentmethods.png"
                width={200}
                height={100}
                loading="lazy"
                objectFit="contain"
                alt="Historic Cemetery Statue"
                className=" object-right bg-primary/30 p-2 rounded-lg"
              />
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact">
              <input
                type="text"
                {...register("creditCard")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("creditCard")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="creditCard"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Credit/Debit Card No.
              </label>
              {errors.creditCard && (
                <WarningPopup
                  error={errors.creditCard.message}
                  isFirstError={currentErrorField === "creditCard"}
                />
              )}
            </div>
            <div className="flex space-x-4 mb-5  xl:mb-5">
              <div className="relative w-[70%] mb-5  xl:mb-5 group contact">
                <input
                  type="text"
                  {...register("expDate")}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                  onFocus={() => setCurrentErrorField("expDate")}
                  onBlur={() => setCurrentErrorField(null)}
                />
                <label
                  htmlFor="expDate"
                  className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 placeholder:text-primary peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Exp Date
                </label>
                {errors.expDate && (
                  <WarningPopup
                    error={errors.expDate.message}
                    isFirstError={currentErrorField === "expDate"}
                  />
                )}
              </div>
              <div className="relative w-[30%] mb-5  xl:mb-5 group contact">
                <input
                  type="text"
                  {...register("cvv")}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                  onFocus={() => setCurrentErrorField("cvv")}
                  onBlur={() => setCurrentErrorField(null)}
                />
                <label
                  htmlFor="cvv"
                  className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 placeholder:text-primary peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  CVV
                </label>
                {errors.cvv && (
                  <WarningPopup
                    error={errors.cvv.message}
                    isFirstError={currentErrorField === "cvv"}
                  />
                )}
              </div>
            </div>
            {clientSecret && <PaymentElement />}

            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg"
              >
                {!loading ? `Pay $${amount}` : "Processing..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RelinquishForm;
