"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import SuccessMsg from "../../ui/FormSuccessMessage";
import { useDispatch } from "react-redux";
import { setPopupForm } from "@/redux/slice";
import WarningPopup from "@/components/ui/WarningPopup";
import { RenewFormSchema } from "@/zod/RenewFormSchema";
import FormSuccessMessage from "../../ui/FormSuccessMessage";
import FormFailedMessage from "@/components/ui/FormFailedMessage";

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
    trigger,
    watch,
    reset,
  } = useForm({ resolver: zodResolver(RenewFormSchema) });

 const formatDate = (date) => {
   const unixTimestamp = Math.floor(new Date(date).getTime());
   return unixTimestamp;
 };

  const selectedDateOfBirth = watch("DateOfBirth");
  const selectedDateOfDeath = watch("DateOfDeath");
  const selectedContactDate = watch("PreferredContactDate");

  const handleNumericOnly = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (data) => {
    try {
      // Format the date fields only if they are valid
      const formattedData = {
        ...data,
        DateOfBirth: data.DateOfBirth ? formatDate(data.DateOfBirth) : null,
        DateOfDeath: data.DateOfDeath ? formatDate(data.DateOfDeath) : null,
        PreferredContactDate: data.PreferredContactDate
          ? formatDate(data.PreferredContactDate)
          : null,
      };
console.log(formattedData);
      const response = await fetch("/api/renew-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();

      if (result.error) throw new Error(result.error);

      setSubmissionStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const DateOfBirthRef = useRef(null);
  const DateOfDeathRef = useRef(null);
  const PreferredContactMethodRef = useRef(null);
  const PreferredContactDateRef = useRef(null);

  useEffect(() => {
    if (errors) {
      const errorField = Object.keys(errors)[0]; // Get the first error field
      setCurrentErrorField(errorField);

      switch (errorField) {
        case "DateOfBirth":
          focusInput(DateOfBirthRef);
          break;
        case "DateOfDeath":
          focusInput(DateOfDeathRef);
          break;
        case "PreferredContactMethod":
          focusInput(PreferredContactMethodRef); // No specific input ref for this field
          break;
        case "PreferredContactDate":
          focusInput(null); // No specific input ref for this field (consider adding a ref if needed)
          break;
        default:
          focusInput(null); // Handle other errors (consider a more specific approach)
      }
    } else {
      setCurrentErrorField(null);
    }
  }, [errors, DateOfBirthRef, DateOfDeathRef]);

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
      <div className=" md:max-h-[1024px] h-[940px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center py-28 md:py-24 lg:py-24">
        <div
          className={`absolute ${
            submissionStatus !== null ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300  h-full w-full `}
        >
          <div className="w-[70%] md:w-[32rem] pt-8 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between  z-10">
            {submissionStatus === "success" && <FormSuccessMessage />}
            {submissionStatus === "error" && (
              <FormFailedMessage setSubmissionStatus={setSubmissionStatus} />
            )}
          </div>
        </div>

        <form
          className={`w-[70%] md:w-[32rem] pt-8 md:pt-10 h-full mx-auto flex flex-col justify-between relative z-10  ${
            submissionStatus === null ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300 `}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
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
                className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                autoComplete="new-password"
                onFocus={() => setCurrentErrorField(name)}
                onBlur={() => setCurrentErrorField(null)}
              />
              <label
                htmlFor={name}
                className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="text"
              {...register("NameOfDeceased")}
              className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              autoComplete="new-password"
              onFocus={() => setCurrentErrorField("NameOfDeceased")}
              onBlur={() => setCurrentErrorField(null)}
            />
            <label
              htmlFor="NameOfDeceased"
              className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name of Deceased
            </label>
            {errors.NameOfDeceased && (
              <WarningPopup
                error={errors.NameOfDeceased?.message}
                isFirstError={currentErrorField === "NameOfDeceased"}
              />
            )}
          </div>
          <div className="relative w-full mb-5  xl:mb-5 group contact">
            <DatePicker
              value={selectedDateOfBirth || null}
              onChange={(date) => {
                setValue("DateOfBirth", date, { shouldValidate: true });
              }}
              onFocus={() => setCurrentErrorField("DateOfBirth")}
              onBlur={() => setCurrentErrorField(null)}
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              errors={errors}
              ref={DateOfBirthRef}
              format="dd/MM/yyyy"
              className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
              autoComplete="new-password"
            />

            <label
              htmlFor="DateOfBirth"
              className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of Birth&nbsp;
              <span className="hidden md:block">of Deceased</span>
            </label>
            {errors.DateOfBirth && (
              <WarningPopup
                error={errors.DateOfBirth.message}
                isFirstError={currentErrorField === "DateOfBirth"}
              />
            )}
          </div>

          <div className="relative w-full mb-5  xl:mb-5 group contact wrapper">
            <DatePicker
              value={selectedDateOfDeath || null}
              onChange={(date) =>
                setValue("DateOfDeath", date, { shouldValidate: true })
              }
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              errors={errors}
              ref={DateOfDeathRef}
              format="dd/MM/yyyy"
              className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
              autoComplete="new-password"
              onFocus={() => setCurrentErrorField("DateOfDeath")}
              onBlur={() => setCurrentErrorField(null)}
            />
            <label
              htmlFor="DateOfDeath"
              className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date of Death
            </label>
            {errors.DateOfDeath && (
              <WarningPopup
                error={errors.DateOfDeath.message}
                isFirstError={currentErrorField === "DateOfDeath"}
              />
            )}
          </div>

          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="text"
              {...register("PlotNumber")}
              className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              autoComplete="new-password"
              onFocus={() => setCurrentErrorField("PlotNumber")}
              onBlur={() => setCurrentErrorField(null)}
            />
            <label
              htmlFor="PlotNumber"
              className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Plot Number
            </label>
            {errors.PlotNumber && (
              <WarningPopup
                error={errors.PlotNumber?.message}
                isFirstError={currentErrorField === "PlotNumber"}
              />
            )}
          </div>

          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <label
              htmlFor="PreferredContactMethod"
              className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden md:block">Preferred</span>&nbsp;Contact
              Method
            </label>
            <select
              {...register("PreferredContactMethod")}
              onChange={(e) => {
                setValue("PreferredContactMethod", e.target.value, {
                  shouldValidate: true,
                });
                setCurrentErrorField(null); // Reset error field when a selection is made
              }}
              className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              onFocus={() => setCurrentErrorField("PreferredContactMethod")}
              onBlur={() => setCurrentErrorField(null)}
              ref={PreferredContactMethodRef}
            >
              <option value="">Select Method</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select>
            {errors.PreferredContactMethod && (
              <WarningPopup
                error={errors.PreferredContactMethod.message}
                isFirstError={currentErrorField === "PreferredContactMethod"}
              />
            )}
          </div>

          <div className="relative w-full mb-5  xl:mb-5 group contact">
            <DatePicker
              value={selectedContactDate || null}
              onChange={(date) =>
                setValue("PreferredContactDate", date, {
                  shouldValidate: true,
                })
              }
              onFocus={() => setCurrentErrorField("PreferredContactDate")}
              onBlur={() => setCurrentErrorField(null)}
              errors={errors}
              ref={PreferredContactDateRef}
              dayPlaceholder="DD"
              monthPlaceholder="MM"
              yearPlaceholder="YYYY"
              format="dd/MM/yyyy"
              className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
              autoComplete="new-password"
            />
            <label
              htmlFor="PreferredContactDate"
              className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 placeholder:text-primary peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden sm:block">Preferred</span>&nbsp;Contact
              Date
            </label>
            {errors.PreferredContactDate && (
              <WarningPopup
                error={errors.PreferredContactDate.message}
                isFirstError={currentErrorField === "PreferredContactDate"}
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
