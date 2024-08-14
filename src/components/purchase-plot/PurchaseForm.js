"use client";

import React, {useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import PurchaseReceipt from "./PurchaseReceipt";
import { formatNumber, getTotalAmount } from "@/lib/helper";
import StripeCheckout from "./stripe-checkout/StripeCheckout";
import { PurchaseFormSchema } from "@/zod/PurchaseFormSchema";
import countries from "@/json/ListOfCountries.json"; // Import the JSON file directly
import WarningPopup from "../ui/WarningPopup";

const PurchaseForm = ({ elementData }) => {
   const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
   const [screenToShow, setscreenToShow] = useState("receipt");
   const [currentErrorField, setCurrentErrorField] = useState(null);
   const [errorMessage, setErrorMessage] = useState();


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm({
    resolver: zodResolver(PurchaseFormSchema),
    defaultValues: {
      country: "Australia", // Set default value for country
    },
  });

  const country = watch("country");

  const handleAlphaOnly = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  const handleNumericOnly = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  const handleChangePostCodeValidation = () => {
    if (country) {
      trigger("postalCode"); // Trigger validation for postalCode when country changes
    }
  };

  const onSubmit = async (data) => {
    try {
      // Simulate a form submission
      await new Promise((resolve, reject) => {
        // Change to resolve() for success simulation, reject() for error simulation
        setTimeout(resolve, 1000);
      });
      console.log("Form submitted:", data);

      setSubmissionStatus("success");
      setErrorMessage("");
      setscreenToShow("stripecheckout");
      reset(); // Reset form fields
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const totalAmount = getTotalAmount(elementData);

  const formattedTotalAmount = formatNumber(totalAmount);

  return (
    <>
      <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
        <div className=" md:max-h-[1024px] md:h-[940px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center relative py-28 md:py-24 lg:py-24">
          <div
            className={`absolute ${
              screenToShow === "receipt" ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-250 duration-300  h-full w-full`}
          >
            <PurchaseReceipt
              elementData={elementData}
              formattedTotalAmount={formattedTotalAmount}
              formatNumber={formatNumber}
              totalAmount={totalAmount}
              screenToShow={screenToShow}
              setscreenToShow={setscreenToShow}
            />
          </div>

          <form
            className={`w-[70%]  md:w-auto pt-6 sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between relative z-10  ${
              screenToShow === "detailedform" ? "opacity-100" : "opacity-0"
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
              <input
                type="text"
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
              <div className=" w-full group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("city")}
                    className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onChange={handleAlphaOnly}
                    onFocus={() => setCurrentErrorField("city")}
                    onBlur={() => {
                      setCurrentErrorField(null);
                      trigger("city");
                    }}
                  />

                  <label
                    htmlFor="city"
                    className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Suburb
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

              <div className=" w-full group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("state")}
                    className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onChange={handleAlphaOnly}
                    onFocus={() => setCurrentErrorField("state")}
                    onBlur={() => {
                      setCurrentErrorField(null);
                      trigger("state");
                    }}
                  />
                  <label
                    htmlFor="city"
                    className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    State
                  </label>
                </div>

                {errors.state && currentErrorField === "state" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full -bottom-8 -left-4 flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.state?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-4 mb-5  xl:mb-5 relative">
              <div className=" md:w-1/3 group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("postalCode")}
                    className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onChange={handleNumericOnly}
                    onFocus={() => setCurrentErrorField("postalCode")}
                    onBlur={() => {
                      setCurrentErrorField(null);
                      handleChangePostCodeValidation();
                    }}
                  />
                  <label
                    htmlFor="postalCode"
                    className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Post Code
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
              <div className=" md:w-2/3 group contact">
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
                    handleChangePostCodeValidation();
                    setCurrentErrorField(null); // Reset error field when a selection is made
                  }}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  onFocus={() => setCurrentErrorField("country")}
                  onBlur={() => setCurrentErrorField(null)}
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && currentErrorField === "country" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full -bottom-8 -left-4 flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.country?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <input
                type="text"
                {...register("phoneNumber")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onChange={handleNumericOnly}
                onFocus={() => setCurrentErrorField("phoneNumber")}
                onBlur={() => {
                  setCurrentErrorField(null);
                  trigger("phoneNumber");
                }}
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
                <span className=" font-roboto uppercase text-xl">
                  ${formattedTotalAmount}
                </span>
              </div>
            </div>

            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg"
              >
                Checkout
              </button>
            </div>
          </form>
          <div
            className={`absolute ${
              screenToShow === "stripecheckout" ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-250 duration-300  h-full w-full`}
          >
            <StripeCheckout
              elementData={elementData}
              formattedTotalAmount={formattedTotalAmount}
              formatNumber={formatNumber}
              totalAmount={totalAmount}
              screenToShow={screenToShow}
              setscreenToShow={setscreenToShow}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseForm;
