"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import SuccessMsg from "./SuccessMsg";
import { useDispatch } from "react-redux";
import { setPopupForm } from "@/redux/slice";

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
  dateofBirth: z.date({
    required_error: "Date of Birth is required",
    invalid_type_error: "Date of Birth is required",
  }),
  dateOfDeath: z.date({
    required_error: "Date of Death is required",
    invalid_type_error: "Date of Death is required",
  }),
  rowPlot: z.string().optional(),
  preferredContactMethod: z.enum(["email", "phone"], {
    errorMap: () => ({ message: "Contact Method is required." }),
  }),
  preferredContactDate: z.date({
    required_error: "Preferred Contact Date is required.",
    invalid_type_error: "Preferred Contact Date is required.",
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

const RenewForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const selectedDateOfBirth = watch("dateofBirth");
  const selectedDateOfDeath = watch("dateOfDeath");
  const selectedContactDate = watch("preferredContactDate");

  const onSubmit = async (data) =>
  {
    
    console.log(data);

    try {
      // Simulate a form submission
      await new Promise((resolve, reject) => {
        // Change to resolve() for success simulation, reject() for error simulation
        setTimeout(resolve, 1000);
      });

      setSubmissionStatus("success");
      setErrorMessage("");
      reset(); // Reset form fields
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const dateofBirthRef = useRef(null);
  const dateOfDeathRef = useRef(null);
  const preferredContactMethodRef = useRef(null);
  const preferredContactDateRef = useRef(null);

  useEffect(() => {
    if (errors) {
      const errorField = Object.keys(errors)[0]; // Get the first error field
      setCurrentErrorField(errorField);

      switch (errorField) {
        case "dateofBirth":
          focusInput(dateofBirthRef);
          break;
        case "dateOfDeath":
          focusInput(dateOfDeathRef);
          break;
        case "preferredContactMethod":
          focusInput(preferredContactMethodRef); // No specific input ref for this field
          break;
        case "preferredContactDate":
          focusInput(null); // No specific input ref for this field (consider adding a ref if needed)
          break;
        default:
          focusInput(null); // Handle other errors (consider a more specific approach)
      }
    } else {
      setCurrentErrorField(null);
    }
  }, [errors, dateofBirthRef, dateOfDeathRef]);

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
  return (
    <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
      <div className=" md:max-h-[1024px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center py-28 md:py-24 lg:py-20">
        <div
          className={`absolute ${
            submissionStatus !== null ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300  h-full w-full `}
        >
          <div className="w-[70%] md:w-[32rem] sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between  z-10">
            {submissionStatus === "success" && <SuccessMsg />}
            {submissionStatus === "error" && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </div>
        </div>

        <form
          className={`w-[70%]  md:w-auto pt-6 sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between relative z-10  ${
            submissionStatus === null ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300 `}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Email Address", name: "email", type: "text" },
            { label: "Phone Number", name: "phoneNumber", type: "text" },
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

          <div className="relative w-full mb-5  xl:mb-5 group contact">
            <DatePicker
              value={selectedDateOfBirth || null}
              onChange={(date) =>
                setValue("dateofBirth", date, { shouldValidate: true })
              }
              onFocus={() => setCurrentErrorField("dateofBirth")}
              onBlur={() => setCurrentErrorField(null)}
              openCalendarOnFocus={true}
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              firstInputRef={dateofBirthRef}
              onInvalid={() => setCurrentErrorField("dateofBirth")}
              format="dd/MM/yyyy"
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
              autoComplete="new-password"
            />

            <label
              htmlFor="dateOfBirth"
              className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of Birth&nbsp;
              <span className="hidden md:block">of Deceased</span>
            </label>
            {errors.dateofBirth && (
              <WarningPopup
                error={errors.dateofBirth.message}
                isFirstError={currentErrorField === "dateofBirth"}
              />
            )}
          </div>

          <div className="relative w-full mb-5  xl:mb-5 group contact wrapper">
            <DatePicker
              value={selectedDateOfDeath || null}
              onChange={(date) =>
                setValue("dateOfDeath", date, { shouldValidate: true })
              }
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              errors={errors}
              ref={dateOfDeathRef}
              format="dd/MM/yyyy"
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
              autoComplete="new-password"
              onFocus={() => setCurrentErrorField("dateOfDeath")}
              onBlur={() => setCurrentErrorField(null)}
            />
            <label
              htmlFor="dateOfDeath"
              className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of Death
            </label>
            {errors.dateOfDeath && (
              <WarningPopup
                error={errors.dateOfDeath.message}
                isFirstError={currentErrorField === "dateOfDeath"}
              />
            )}
          </div>

          <div className="flex space-x-4 mb-5  xl:mb-5">
            <div className="relative w-full group contact">
              <input
                type="text"
                {...register("row")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("rowPlot")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="row"
                className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <span className="hidden md:block">Located In</span>&nbsp;Row
              </label>
            </div>
            <div className="relative w-full group contact">
              <input
                type="text"
                {...register("plot")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField("rowPlot")}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor="plot"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Plot
              </label>
            </div>
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
            <DatePicker
              value={selectedContactDate || null}
              onChange={(date) =>
                setValue("preferredContactDate", date, {
                  shouldValidate: true,
                })
              }
              onFocus={() => setCurrentErrorField("preferredContactDate")}
              onBlur={() => setCurrentErrorField(null)}
              errors={errors}
              ref={preferredContactDateRef}
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              format="dd/MM/yyyy"
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
              autoComplete="new-password"
            />
            <label
              htmlFor="preferredContactDate"
              className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 placeholder:text-primary peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden sm:block">Preferred</span>&nbsp;Contact
              Date
            </label>
            {errors.preferredContactDate && (
              <WarningPopup
                error={errors.preferredContactDate.message}
                isFirstError={currentErrorField === "preferredContactDate"}
              />
            )}
          </div>

          <div className="flex justify-end items-center mt-8">
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

export default RenewForm;
