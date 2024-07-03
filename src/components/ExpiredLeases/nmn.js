"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const schema = z.object({
  fullName: z
    .string()
    .nonempty("Full Name is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),
  phoneNumber: z
    .string()
    .nonempty("Phone Number is required.")
    .regex(/^[0-9]+$/, "Phone Number must contain only digits."),
  nameOfDeceased: z
    .string()
    .nonempty("Name of Deceased is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  row: z.string().optional(),
  plot: z.string().optional(),
  preferredContactMethod: z
    .string()
    .min(1, "Contact Method is required.")
    .refine((method) => {
      const allowedMethods = ["email", "phone"];
      if (!allowedMethods.includes(method)) {
        throw new Error(
          "Invalid contact method. Please choose 'email' or 'phone'."
        );
      }
      return method;
    }),
});

const WarningPopup = ({ error, isFirstError }) =>
  isFirstError && (
    <span className="absolute backdrop-blur-lg py-1 px-2 w-full flex items-center text-primary shadow-sm">
      <span className="bg-primary p-1 rounded-sm mr-1">
        <FaExclamation className="text-xs text-white" />
      </span>
      {error}
    </span>
  );

const focusInput = (ref) => {
  if (ref && ref.current) {
    ref.current.focus();
  }
};

const RenewForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentErrorField, setCurrentErrorField] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus("success");
      setErrorMessage("");
      reset();
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const refs = {
    dateofBirth: useRef(null),
    dateOfDeath: useRef(null),
    preferredContactMethod: useRef(null),
    preferredContactDate: useRef(null),
  };

  useEffect(() => {
    if (errors) {
      const errorField = Object.keys(errors)[0];
      setCurrentErrorField(errorField);

      switch (errorField) {
        case "dateofBirth":
          focusInput(refs.dateofBirth);
          break;
        case "dateOfDeath":
          focusInput(refs.dateOfDeath);
          break;
        case "preferredContactMethod":
          focusInput(refs.preferredContactMethod);
          break;
        case "preferredContactDate":
          focusInput(refs.preferredContactDate);
          break;
        default:
          focusInput(null);
      }
    } else {
      setCurrentErrorField(null);
    }
  }, [errors, refs]);

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
      <div className="md:max-h-[1024px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center py-28 md:py-24 lg:py-20">
        <form
          className="w-[70%] md:w-auto sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between relative z-10"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phoneNumber", type: "tel" },
            {
              label: "Full Name of Deceased",
              name: "nameOfDeceased",
              type: "text",
            },
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

          <div className="flex space-x-4 mb-5 xl:mb-5">
            {[
              { label: "Located In Row", name: "row" },
              { label: "Plot", name: "plot" },
            ].map(({ label, name }) => (
              <div key={name} className="relative w-full group contact">
                <input
                  type="text"
                  {...register(name)}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                  onFocus={() => setCurrentErrorField(name)}
                  onBlur={() => setCurrentErrorField(null)}
                />
                <label
                  htmlFor={name}
                  className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>

          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <label
              htmlFor="preferredContactMethod"
              className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden md:block">Preferred</span>&nbsp;Contact
              Method
            </label>
            <select
              {...register("preferredContactMethod")}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              onFocus={() => setCurrentErrorField("preferredContactMethod")}
              onBlur={() => setCurrentErrorField(null)}
              ref={refs.preferredContactMethod}
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

          <div className="flex justify-end items-center mt-3">
            <button
              type="submit"
              className="text-lg font-display bg-primary text-white py-2 px-4 rounded shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Submit
            </button>
          </div>
          {submissionStatus && (
            <div
              className={`mt-4 p-2 text-center ${
                submissionStatus === "success" ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              {submissionStatus === "success"
                ? "Form submitted successfully!"
                : errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RenewForm;
