"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import SignatureCanvas from "react-signature-canvas";
import { MdDelete } from "react-icons/md";

import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { setPopupForm } from "@/redux/slice";
import SuccessMsg from "../ExpiredLeases/SuccessMsg";
import Image from "next/image";

const schema = z.object({
  fullName: z
    .string()
    .nonempty("Full Name is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  address: z
    .string()
    .nonempty("Full Name is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  nameOfDeceased: z
    .string()
    .nonempty("Name of Deceased is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),
  preferredContactMethod: z.enum(["email", "phone"], {
    errorMap: () => ({ message: "Contact Method is required." }),
  }),
  dateofBirth: z.date({
    required_error: "Date of Birth is required",
    invalid_type_error: "Date of Birth is required",
  }),
  dateOfDeath: z.date({
    required_error: "Date of Death is required",
    invalid_type_error: "Date of Death is required",
  }),
  rowPlot: z.string().optional(),
  signature: z.string({
    errorMap: () => ({ message: "Lease Holder Signature is required." }),
  }),
  Date: z.date({
    required_error: "Date is required.",
    invalid_type_error: "Date is required.",
  }),
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
const focusInput = (ref) => {
  if (ref && ref.current) {
    ref.current.focus();
  }
};
const RelinquishForm = ({ elementData }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [receiptScreen, setReceiptScreen] = useState(true); // true, //false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const dispatch = useDispatch();
  const [signature, setSignature] = useState(null);
  const signCanvas = useRef();

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



  const onSubmit = async (data) => {
  
    try {
      // Simulate a form submission
      await new Promise((resolve, reject) => {
        // Change to resolve() for success simulation, reject() for error simulation
        setTimeout(resolve, 1000);
      });

      setSubmissionStatus("success");
      setErrorMessage("");
      signCanvas.current.clear();

      setSignature(null);
      reset(); // Reset form fields
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const address = useRef(null);
  const dateOfDeathRef = useRef(null);
  const email = useRef(null);
  const DateRef = useRef(null);

  useEffect(() => {
    if (errors) {
      const errorField = Object.keys(errors)[0]; // Get the first error field
      setCurrentErrorField(errorField);

      switch (errorField) {
        case "dateofBirth":
          focusInput(address);
          break;
        case "dateOfDeath":
          focusInput(dateOfDeathRef);
          break;
        case "Date":
          focusInput(null); // No specific input ref for this field (consider adding a ref if needed)
          break;
        default:
          focusInput(null); // Handle other errors (consider a more specific approach)
      }
    } else {
      setCurrentErrorField(null);
    }
  }, [errors, address, dateOfDeathRef]);

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        dispatch(setPopupForm("")); // Dispatch blank value when closing modal
        setTimeout(() => {
          setSubmissionStatus(null);
        }, 1000);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

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
  const numbersInWords = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertAmountToWords(amount) {
    if (amount === 0) {
      return numbersInWords[0];
    }

    let words = "";

    if (amount >= 1000) {
      const thousands = Math.floor(amount / 1000);
      words += `${convertAmountToWords(thousands)} Thousand `;
      amount %= 1000;
    }

    if (amount >= 100) {
      const hundreds = Math.floor(amount / 100);
      words += `${numbersInWords[hundreds]} Hundred `;
      amount %= 100;
    }

    if (amount > 0) {
      if (words !== "") {
        words += "and ";
      }

      if (amount < 20) {
        words += numbersInWords[amount];
      } else {
        const tens = Math.floor(amount / 10);
        words += `${numbersInWords[tens + 18]} `;
        amount %= 10;

        if (amount > 0) {
          words += numbersInWords[amount];
        }
      }
    }

    return words;
  }
  const amountInWords = convertAmountToWords(getTotalAmount());
  const preferredContactMethodRef = useRef(null);

  return (
    <>
      <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
        <div className=" md:max-h-[1024px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center relative py-28 md:py-24 lg:py-24">
          <div
            className={`absolute ${
              receiptScreen ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-250 duration-300  h-full w-full`}
          >
            <div className="w-[70%] md:w-[32rem] sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-center items-center  z-10">
              <div className="h-[80%] py-5 flex flex-col gap-6">
                <div className="flex flex-col justify-center items-center gap-4">
                  <h2 className="text-[1.75rem] md:text-[2.75rem] font-bold text-primary font-display">
                    PURCHASE A PLOT
                  </h2>
                  <p className="text-primary text-base font-roboto text-center font-bold tracking-wide lg:text-lg">
                    Thank you for choosing The Cemetery on the Hill as a final
                    resting place. It is important to us to provide an amazing
                    location to be remembered.
                  </p>
                </div>
                <div>
                  <h2 className="text-[1.25rem] md:text-[1.50rem] text-center font-bold text-primary font-display">
                    Selected PLOT:
                    <span className=" font-roboto uppercase">
                      &nbsp;{elementData[0]?.Plot_number}
                    </span>
                  </h2>
                </div>
                <div
                  className="col-span-2 md:col-span-2"
                  style={{ gridColumn: "span 4 / span 2" }}
                >
                  <table className="w-full" id="voucherTable">
                    <thead>
                      <tr className="font-bold font-display text-primary text-lg border-primary border-t-2 border-b-2">
                        <th className="w-3/4 py-2 text-start">Breakdown</th>
                        <th className=" w-1/4 text-start py-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Ashes Plot B-1",
                          amount: formatNumber(
                            elementData[0]?.prices?.plot_Price
                          ),
                        },
                        {
                          name: "Internment Rights (100 Years)",
                          amount: formatNumber(
                            elementData[0]?.prices?.Internment_Rights_100_Years
                          ),
                        },
                        {
                          name: "Preparation for initial Interments",
                          amount: formatNumber(
                            elementData[0]?.prices
                              ?.Preparation_for_initial_Interments
                          ),
                        },
                        {
                          name: "Ongoing maintenance Fee ($50 per year)",
                          amount: formatNumber(
                            elementData[0]?.prices
                              ?.Ongoing_maintenance_Fee_per_year
                          ),
                        },
                        {
                          name: "Plaque",
                          amount: formatNumber(elementData[0]?.prices?.Plaque),
                        },
                      ].map((fee, index) => (
                        <tr key={index} className="font-roboto text-tertiary">
                          <td className="text-base py-3 w-3/4 text-start">
                            {fee.name}
                          </td>
                          <td className="text-base py-3 w-1/4 text-start">
                            $ {fee.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className=" font-bold font-display text-lg text-primary border-primary border-t-2 border-b-2">
                        <td className="w-3/4 text-start py-2">Total</td>
                        <td className="w-1/4 text-start py-2">
                          $ {formattedTotalAmount}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <p className="text-primary text-sm font-roboto text-center font-bold tracking-wide">
                  In Words: {amountInWords} Dollars Only
                </p>
                <div className="flex justify-end items-center">
                  <button
                    type="submit"
                    className="text-primary font-display uppercase z-20 rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg"
                    onClick={() => setReceiptScreen(!receiptScreen)}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
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
            <div className="flex space-x-4 mb-5  xl:mb-5">
              <div className="relative w-32 group contact">
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
              <div className="relative w-32 group contact">
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
              <div className="relative w-32 group contact">
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
            </div>
            <div className="relative w-full mb-5 xl:mb-5 group contact">
              <label
                htmlFor="preferredContactMethod"
                className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country
              </label>
              <select
                {...register("preferredContactMethod")}
                onChange={(e) => {
                  setValue("preferredContactMethod", e.target.value, {
                    shouldValidate: true,
                  });
                  setCurrentErrorField(null); // Reset error field when a selection is made
                }}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                onFocus={() => setCurrentErrorField("preferredContactMethod")}
                onBlur={() => setCurrentErrorField(null)}
                ref={preferredContactMethodRef}
              >
                <option value="">Select Method</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
              {errors.preferredContactMethod && (
                <WarningPopup
                  error={errors.preferredContactMethod.message}
                  isFirstError={currentErrorField === "preferredContactMethod"}
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
                Credit/Debit Card No.
              </label>
              {errors.email && (
                <WarningPopup
                  error={errors.email.message}
                  isFirstError={currentErrorField === "email"}
                />
              )}
            </div>
            <div className="flex space-x-4 mb-5  xl:mb-5">
              <div className="relative w-[70%] mb-5  xl:mb-5 group contact">
                <input
                  type="text"
                  {...register("Date")}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                  onFocus={() => setCurrentErrorField("rowPlot")}
                  onBlur={() => setCurrentErrorField(null)}
                />
                <label
                  htmlFor="Date"
                  className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 placeholder:text-primary peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Exp Date
                </label>
                {errors.Date && (
                  <WarningPopup
                    error={errors.Date.message}
                    isFirstError={currentErrorField === "Date"}
                  />
                )}
              </div>
              <div className="relative w-[30%] mb-5  xl:mb-5 group contact">
                <input
                  type="text"
                  {...register("Date")}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                  onFocus={() => setCurrentErrorField("rowPlot")}
                  onBlur={() => setCurrentErrorField(null)}
                />
                <label
                  htmlFor="Date"
                  className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 placeholder:text-primary peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  CVV
                </label>
                {errors.Date && (
                  <WarningPopup
                    error={errors.Date.message}
                    isFirstError={currentErrorField === "Date"}
                  />
                )}
              </div>
            </div>

            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RelinquishForm;
