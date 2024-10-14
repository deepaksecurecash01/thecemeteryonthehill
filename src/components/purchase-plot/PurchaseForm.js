"use client";

import React, { useState } from "react";
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
  const [screenToShow, setscreenToShow] = useState("receipt"); // null,//stripecheckout , //receipt
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const [errorMessage, setErrorMessage] = useState();
  const [purchaseFormData, setPurchaseFormData] = useState();

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
      Country: "Australia", // Set default value for Country
    },
  });

  const Country = watch("Country");

  const handleAlphaOnly = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  const handleNumericOnly = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  const handleChangePostCodeValidation = () => {
    if (Country) {
      trigger("PostCode"); // Trigger validation for PostCode when Country changes
    }
  };


  const totalAmount = getTotalAmount(elementData);

  const formattedTotalAmount = formatNumber(totalAmount);

  const onSubmit = async (data) =>
  {
    if (data.BotField) {
      // If the honeypot field has any value, block the form submission
      console.log("Bot detected.");
      setSubmissionStatus("error");
      return;
    }
   try {
     // Prepare a simple JSON object instead of FormData for API submission
     const purchaseData = {
       PlotNumber: elementData[0]?.Plot_number,
       Amount: totalAmount,
       ...data, // Spread the form data fields into the object
     };

     console.log("Purchase Data:", purchaseData);

     // Set the JSON object to state, ready for API call in Stripe Checkout
     setPurchaseFormData(purchaseData);

     setSubmissionStatus("success");
     setErrorMessage("");
     setscreenToShow("stripecheckout");
   } catch (error) {
     setSubmissionStatus("error");
     setErrorMessage("Failed to submit the form. Please try again.");
   }
 };

  return (
    <>
      <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
        <div className=" md:max-h-[1024px] h-[846px] md:h-[940px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center relative py-28 md:py-24 lg:py-24">
          <div
            className={`absolute ${
              screenToShow === "receipt" ? "visible" : " hidden"
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
            className={`w-[70%] xs:pt-8 md:w-auto md:pt-10 xl:pt-8 h-full mx-auto flex flex-col justify-between relative z-10  ${
              screenToShow === "detailedform" ? "visible" : " hidden"
            } transition-opacity ease-in-out delay-250 duration-300 `}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            {/* Bot field (honeypot) */}
            <input type="hidden" {...register("BotField")} className="" />
            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <input
                type="text"
                {...register("FullName")}
                className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("FullName")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="FullName"
                className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="hidden md:block">Full Name</span>
                <span className="block md:hidden">Full Name</span>
              </label>
              {errors.FullName && (
                <WarningPopup
                  error={errors.FullName?.message}
                  isFirstError={currentErrorField === "FullName"}
                />
              )}
            </div>
            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <input
                type="text"
                {...register("Address")}
                className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("Address")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="Address"
                className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="hidden md:block">Address</span>
                <span className="block md:hidden">Address</span>
              </label>
              {errors.Address && (
                <WarningPopup
                  error={errors.Address?.message}
                  isFirstError={currentErrorField === "Address"}
                />
              )}
            </div>
            <div className="flex space-x-4 mb-5  xl:mb-5 relative">
              <div className=" w-full group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("Suburb")}
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onChange={handleAlphaOnly}
                    onFocus={() => setCurrentErrorField("Suburb")}
                    onBlur={() => {
                      setCurrentErrorField(null);
                      trigger("Suburb");
                    }}
                  />

                  <label
                    htmlFor="Suburb"
                    className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Suburb
                  </label>
                </div>

                {errors.Suburb && currentErrorField === "Suburb" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.Suburb?.message}
                  </span>
                )}
              </div>

              <div className=" w-full group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("State")}
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onChange={handleAlphaOnly}
                    onFocus={() => setCurrentErrorField("State")}
                    onBlur={() => {
                      setCurrentErrorField(null);
                      trigger("State");
                    }}
                  />
                  <label
                    htmlFor="State"
                    className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    State
                  </label>
                </div>

                {errors.State && currentErrorField === "State" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.State?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-4 mb-5  xl:mb-5 relative">
              <div className=" md:w-1/3 group contact">
                <div className="w-full relative">
                  <input
                    type="text"
                    {...register("PostCode")}
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onChange={handleNumericOnly}
                    onFocus={() => setCurrentErrorField("PostCode")}
                    onBlur={() => {
                      setCurrentErrorField(null);
                      handleChangePostCodeValidation();
                    }}
                  />
                  <label
                    htmlFor="PostCode"
                    className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Post Code
                  </label>
                </div>
                {errors.PostCode && currentErrorField === "PostCode" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.PostCode?.message}
                  </span>
                )}
              </div>
              <div className=" md:w-2/3 group contact">
                <label
                  htmlFor="preferredContactMethod"
                  className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Country
                </label>
                <select
                  {...register("Country")}
                  onChange={(e) => {
                    setValue("Country", e.target.value, {
                      shouldValidate: true,
                    });
                    handleChangePostCodeValidation();
                    setCurrentErrorField(null); // Reset error field when a selection is made
                  }}
                  className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  onFocus={() => setCurrentErrorField("Country")}
                  onBlur={() => setCurrentErrorField(null)}
                >
                  <option value="">Select a country</option>
                  {countries.map((Country) => (
                    <option key={Country} value={Country}>
                      {Country}
                    </option>
                  ))}
                </select>
                {errors.Country && currentErrorField === "Country" && (
                  <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                    <span className="bg-primary p-1 rounded-sm mr-1">
                      <FaExclamation className="text-xs text-white" />
                    </span>
                    {errors?.Country?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <input
                type="text"
                {...register("MobileNumber")}
                className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onChange={handleNumericOnly}
                onFocus={() => setCurrentErrorField("MobileNumber")}
                onBlur={() => {
                  setCurrentErrorField(null);
                  trigger("MobileNumber");
                }}
              />
              <label
                htmlFor="MobileNumber"
                className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="hidden md:block">Phone Number</span>
                <span className="block md:hidden">Phone Number</span>
              </label>
              {errors.MobileNumber && (
                <WarningPopup
                  error={errors.MobileNumber?.message}
                  isFirstError={currentErrorField === "MobileNumber"}
                />
              )}
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact">
              <input
                type="text"
                {...register("Email")}
                className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("Email")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="Email"
                className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
              {errors.Email && (
                <WarningPopup
                  error={errors.Email.message}
                  isFirstError={currentErrorField === "Email"}
                />
              )}
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact">
              <h2 className="text-base xxs:text-[0.95rem] md:text-lg text-start font-bold text-primary font-display">
                Selected PLOT:
                <span className=" font-roboto uppercase text-lg md:text-xl">
                  &nbsp;{elementData[0]?.Plot_number}
                </span>
              </h2>
            </div>
            <div className="relative w-full mb-5  xl:mb-5 group contact">
              <div className="text-base xxs:text-[0.95rem] md:text-lg text-start font-bold text-primary font-display flex flex-col gap-2">
                {" Here's how much you owe (AUD$):"}
                <span className=" font-roboto uppercase text-lg md:text-xl">
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
              screenToShow === "stripecheckout" ? "visible" : " hidden"
            } transition-opacity ease-in-out delay-250 duration-300  h-full w-full`}
          >
            <StripeCheckout
              elementData={elementData}
              formattedTotalAmount={formattedTotalAmount}
              formatNumber={formatNumber}
              totalAmount={totalAmount}
              screenToShow={screenToShow}
              setscreenToShow={setscreenToShow}
              purchaseFormData={purchaseFormData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseForm;
