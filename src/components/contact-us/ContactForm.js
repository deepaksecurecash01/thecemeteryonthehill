"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import FormSuccessMessage from "../ui/FormSuccessMessage";
import FormFailedMessage from "../ui/FormFailedMessage";
import WarningPopup from "../ui/WarningPopup";
import { ContactFormSchema } from "@/zod/ContactFormSchema";



const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [currentErrorField, setCurrentErrorField] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    setValue,
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
  });

  // Handle numeric-only input for phone number
  const handleNumericOnly = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  // Form submission handler
  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Simulate a form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus("success");
      setErrorMessage("");
      reset(); // Reset form fields
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  // Hide submission status message after a delay
  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <div className="col-span-1 lg:col-span-1 lg:h-full w-full py-6 lg:py-0 xl:py-6 sm:px-8 xl:px-12 md:pr-4 space-y-6 md:flex md:flex-col justify-start lg:justify-center items-center order-2 z-0">
      <div className="bg-contact-form-bg -z-10  contact-form-bg bg-center bg-contain bg-no-repeat h-full w-full lg:h-[38rem] xl:h-[40rem] 2xl:h-[48rem] xl:w-full flex flex-col justify-center lg:justify-between items-center py-20 md:py-10 2xl:py-20 relative">
        {submissionStatus !== null && (
          <div
            className={`absolute ${
              submissionStatus !== null ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-250 duration-300 z-20 w-full h-[80%] `}
          >
            <div className="w-[18rem] md:w-[24rem] lg:w-[22rem] 2xl:w-[26rem] h-full z-0 mx-auto py-10 flex flex-col justify-evenly relative">
              {submissionStatus === "success" && <FormSuccessMessage />}
              {submissionStatus === "error" && (
                <FormFailedMessage setSubmissionStatus={setSubmissionStatus} />
              )}
            </div>
          </div>
        )}
        <form
          className={`w-[18rem] md:w-[24rem] lg:w-[22rem] 2xl:w-[26rem] z-0 mx-auto py-10 flex flex-col justify-evenly h-full  ${
            submissionStatus === null ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300`}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="relative z-0 w-full mb-5 xl:mb-5 group contact">
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
          <div className="relative z-0 w-full mb-5 xl:mb-5 group contact">
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
          <div className="relative z-0 w-full mb-5 xl:mb-5 group contact">
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
          <div className="relative z-0 w-full mb-5 xl:mb-5 group contact">
            <textarea
              {...register("message")}
              className="block py-6 px-0 w-full mt-4 text-lg font-roboto text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              rows="4"
              autoComplete="off"
              onFocus={() => setCurrentErrorField("message")}
              onBlur={() => setCurrentErrorField(null)}
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
            {errors.message && (
              <WarningPopup
                error={errors.message?.message}
                isFirstError={currentErrorField === "message"}
              />
            )}
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

export default ContactForm;