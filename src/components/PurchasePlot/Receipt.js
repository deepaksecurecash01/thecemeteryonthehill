"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { setPopupForm } from "@/redux/slice";
import SuccessMsg from "../ExpiredLeases/SuccessMsg";

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

const Receipt = ({elementData}) => {
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

  const onSubmit = async (data) => {
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
    

        <form
          className={`w-[70%]  md:w-auto pt-6 sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between relative z-10  ${
            submissionStatus === null ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300 `}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {elementData?.map(({ plot_number, status, short_plot_number }) => (
            <div
              key={name}
              className="relative w-full mb-5 xl:mb-5 flex flex-col justify-center h-full items-center gap-6"
            >
              <p className="text-primary text-center font-display text-4xl">
                {plot_number}
              </p>
              <p className="text-primary text-center font-display text-4xl">
                {status}
              </p>
              <p className="text-primary text-center font-display text-4xl">
                {short_plot_number}
              </p>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Receipt;