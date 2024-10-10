"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { setAshesBed, setAshesWall, setPlot } from "@/redux/slice";
import WarningPopup from "../ui/WarningPopup";
import { RegisterInterestSchema } from "@/zod/RegisterInterestSchema";
import FormFailedMessage from "../ui/FormFailedMessage";
import FormSuccessMessage from "../ui/FormSuccessMessage";

const RegisterInterestForm = ({ elementData }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm({ resolver: zodResolver(RegisterInterestSchema) });

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the API endpoint
      const response = await fetch("/api/register-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FullName: data.FullName,
          Email: data.Email,
          MobileNumber: data.MobileNumber,
          PlotNumber: elementData[0]?.Plot_number, // Assuming this is available from your component props
        }),
      });

      const result = await response.json(); // Parse the JSON response

      if (response.ok) {
        // Form submission successful
        setSubmissionStatus("success");
        setErrorMessage(""); // Clear any error messages
        reset(); // Reset the form fields
      } else {
        // Handle error case
        setSubmissionStatus("error");
        setErrorMessage(
          result.error || "Failed to submit the form. Please try again."
        );
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("An error occurred during form submission:", error);
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const handleNumericOnly = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };
  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        dispatch(setPlot(""));
        dispatch(setAshesWall(""));
        dispatch(setAshesBed(""));
        setTimeout(() => {
          setSubmissionStatus(false);
        }, 1000);
      }, 300000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
      <div className=" md:max-h-[1024px] h-[846px] md:h-[940px] my-auto bg-contact-form-bg  popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center py-28 md:py-24 lg:py-24 relative">
        <div
          className={`absolute ${
            submissionStatus !== null ? "visible" : "hidden"
          } transition-opacity ease-in-out delay-250 duration-300  h-full w-full z-10`}
        >
          <div className="w-[70%] md:w-[32rem] md:pt-10 xl:pt-8 h-full mx-auto flex flex-col justify-between  z-10">
            {submissionStatus === "success" && <FormSuccessMessage />}
            {submissionStatus === "error" && (
              <FormFailedMessage setSubmissionStatus={setSubmissionStatus} />
            )}
          </div>
        </div>
        <form
          className={`w-[70%]  md:w-[32rem] md:pt-10 xl:pt-8 h-full mx-auto flex flex-col justify-between relative z-10  ${
            submissionStatus === null ? "visible" : "hidden"
          } transition-opacity ease-in-out delay-250 duration-300 `}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className=" xxs:text-[1.35rem] text-[1.75rem] md:text-[2.5rem] text-center font-bold text-primary font-display">
              Register of Interest
            </h2>
            <p className="text-primary text-xs sm:text-sm md:text-base font-roboto text-center font-bold tracking-wide lg:text-lg">
              Thank you for choosing The Cemetery on the Hill as a final resting
              place. We will inform you when the selected plot becomes
              available.
            </p>
          </div>
          {[
            { label: "Full Name", name: "FullName", type: "text" },
            { label: "Email Address", name: "Email", type: "text" },
          ].map(({ label, name, type }) => (
            <div
              key={name}
              className="relative w-full mb-5 xl:mb-5 group contact"
            >
              <input
                type={type}
                {...register(name)}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField(name)}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor={name}
                className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {label}
              </label>
              {errors[name] && (
                <WarningPopup
                  error={errors[name]?.message}
                  isFirstError={currentErrorField === name}
                />
              )}
            </div>
          ))}
          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="text"
              {...register("MobileNumber")}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
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
              className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            <h2 className="text-lg text-start font-bold text-primary font-display">
              Selected PLOT:
              <span className=" font-roboto uppercase text-xl">
                &nbsp;{elementData[0]?.Plot_number}
              </span>
            </h2>
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
  );
};

export default RegisterInterestForm;
