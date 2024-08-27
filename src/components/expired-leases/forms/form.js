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
import SuccessMsg from "../../ui/FormSuccessMessage";
import { useDispatch } from "react-redux";
import { setPopupForm } from "@/redux/slice";
import { RelinquishFormSchema } from "@/zod/RelinquishFormSchema";
import WarningPopup from "@/components/ui/WarningPopup";
import FormSuccessMessage from "../../ui/FormSuccessMessage";
import FormFailedMessage from "@/components/ui/FormFailedMessage";
import { useFormState } from "react-dom";
import { uploadFile } from "@/app/actions/file";
import AshesPopup from "./AshesReturnPopup";
import RadioButtons from "./AshesReturnPopup";
import AshesReturnPopup from "./AshesReturnPopup";

const focusInput = (ref) => {
  if (ref && ref.current) {
    ref.current.focus();
  }
};

const RelinquishForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const dispatch = useDispatch();
  const [signature, setSignature] = useState(null);
  const signCanvas = useRef();
  const FileRef = useRef();
  const [showAshesReturn, setShowAshesReturn] = useState(false);
  const [file, setFile] = useState(null);
  const [ashesReturned, setAshesReturned] = useState(null);
  const [ashesReturnAddress, setAshesReturnAddress] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(RelinquishFormSchema),
  });

  const selectedDateOfBirth = watch("dateofBirth");
  const selectedDateOfDeath = watch("dateOfDeath");
  const selectedInternmentType = watch("internmentType");

  const handleSignatureEnd = () => {
    const sigDataUrl = signCanvas.current.toDataURL();
    setSignature(sigDataUrl);
    setValue("signature", sigDataUrl, { shouldValidate: true });
  };

  const clearSignature = () => {
    signCanvas.current.clear();
    setSignature(null);
    setValue("signature", null, { shouldValidate: true });
  };

  const handleFileChange = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    setFile(file);
    setValue("attachment", file);
    await trigger("attachment");
    console.log(file);
  };

  const onSubmit = async (data) => {
    if (!signature) {
      focusInput(signCanvas);
      setSubmissionStatus("error");
      setErrorMessage("Lease Holder Signature is required");
      return;
    }

    if (!file) {
      focusInput(FileRef);

      setSubmissionStatus("error");
      setErrorMessage("File upload is required");
      return;
    }

    // Append signature and file to form data
    const formData = new FormData();
    formData.append("signature", signature);
    formData.append("file", file);

    if (selectedInternmentType === "ashes") {
      setAshesReturned(null);
      setAshesReturnAddress(true);
      return;
    }
    if (data.internmentType === "ashes") {
      if (ashesReturned === true) {
        formData.append("ashesReturnAddress", ashesReturnAddress);
      } else {
        formData.append("ashesReturnAddress", "Not Returned");
      }
    }

    // Append other form data
    Object.keys(data).forEach((key) => formData.append(key, data[key]));

    console.log("Form Data:", ...formData.entries());

    try {
      // Simulate a form submission
      await new Promise((resolve, reject) => {
        // Change to resolve() for success simulation, reject() for error simulation
        setTimeout(resolve, 1000);
      });

      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      console.log(result);

      setSubmissionStatus("success");
      setErrorMessage("");
      signCanvas.current.clear();
      setSignature(null);
      reset(); // Reset form fields
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const dateofBirthRef = useRef(null);
  const dateOfDeathRef = useRef(null);
  const internmentTypeRef = useRef(null);
  const DateRef = useRef(null);

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
        case "Date":
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
    <>
      <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
        <div className=" md:max-h-[1024px] md:h-[986px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center relative py-28 md:py-24 lg:py-24">
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
          {ashesReturnAddress !== true && (
            <form
              className={`w-[70%] md:w-[32rem] pt-8 md:pt-10 h-full mx-auto flex flex-col justify-between relative z-10  ${
                submissionStatus === null ? "opacity-100" : "opacity-0"
              } transition-opacity ease-in-out delay-250 duration-300 `}
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="flex flex-col justify-between relative">
                {[
                  {
                    label: "Full Name of Lease Holder",
                    shortLabel: "Full Name",
                    name: "fullName",
                    type: "text",
                  },
                  {
                    label: "Name of Deceased",
                    shortLabel: "Name of Deceased",
                    name: "nameOfDeceased",
                    type: "text",
                  },
                ].map(({ label, shortLabel, name, type }) => (
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
                      <span className="hidden md:block">{label}</span>
                      <span className="block md:hidden">{shortLabel}</span>
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
                  <input
                    type="text"
                    {...register("email")}
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    autoComplete="new-password"
                    onFocus={() => setCurrentErrorField("email")}
                    onBlur={() => setCurrentErrorField(null)}
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
                    autoComplete="new-password"
                  />

                  <label
                    htmlFor="dateOfBirth"
                    className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
                    autoComplete="new-password"
                    onFocus={() => setCurrentErrorField("dateOfDeath")}
                    onBlur={() => setCurrentErrorField(null)}
                  />
                  <label
                    htmlFor="dateOfDeath"
                    className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                      autoComplete="new-password"
                      onFocus={() => setCurrentErrorField("rowPlot")}
                      onBlur={() => setCurrentErrorField(null)}
                    />
                    <label
                      htmlFor="row"
                      className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      <span className="hidden md:block">Located In</span>
                      &nbsp;Row
                    </label>
                  </div>
                  <div className="relative w-full group contact">
                    <input
                      type="text"
                      {...register("plot")}
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                      autoComplete="new-password"
                      onFocus={() => setCurrentErrorField("rowPlot")}
                      onBlur={() => setCurrentErrorField(null)}
                    />
                    <label
                      htmlFor="plot"
                      className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Plot
                    </label>
                  </div>
                </div>

                <div className="relative w-full mb-5 xl:mb-5 group contact">
                  <label
                    htmlFor="internmentType"
                    className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Internment Type
                  </label>
                  <select
                    {...register("internmentType")}
                    onChange={(e) => {
                      setValue("internmentType", e.target.value, {
                        shouldValidate: true,
                      });
                      if (e.target.value === "ashes") {
                        setShowAshesReturn(true);
                      }
                      setCurrentErrorField(null); // Reset error field when a selection is made
                    }}
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    onFocus={() => setCurrentErrorField("internmentType")}
                    onBlur={() => setCurrentErrorField(null)}
                    ref={internmentTypeRef}
                  >
                    <option value="">Select Internment Type</option>
                    <option value="ashes">Ashes</option>
                    <option value="burial">Burial</option>
                  </select>

                  {errors.internmentType && (
                    <WarningPopup
                      error={errors.internmentType.message}
                      isFirstError={currentErrorField === "internmentType"}
                    />
                  )}
                </div>
                <div className="relative w-full mb-5  xl:mb-5 group contact">
                  <label
                    htmlFor="signature"
                    className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Lease Holder Signature
                  </label>
                  <div className="w-auto h-32 border-2 border-primary mt-4 relative">
                    <SignatureCanvas
                      ref={signCanvas}
                      onEnd={handleSignatureEnd}
                      penColor="#933d38"
                      canvasProps={{
                        className: " absolute w-full h-full",
                      }}
                    />
                    {signature && (
                      <button
                        type="button"
                        onClick={clearSignature}
                        className="  py-2 px-4 rounded absolute top-0 -right-2 flex justify-center items-center"
                      >
                        <MdDelete className="text-2xl text-primary" />
                      </button>
                    )}
                  </div>

                  {errors.signature && (
                    <WarningPopup
                      error={errors.signature.message}
                      isFirstError={currentErrorField === "signature"}
                    />
                  )}
                </div>
                <div className="relative w-full mb-5 xl:mb-5">
                  <input
                    type="file"
                    ref={FileRef}
                    {...register("attachment")}
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileChange}
                    onFocus={() => setCurrentErrorField("attachment")}
                    onBlur={() => setCurrentErrorField(null)}
                    className="block pt-4 px-0 w-full cursor-pointer file:cursor-pointer text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer file:bg-primary file:font-normal file:rounded-sm file:text-white file:border-0 file:outline-none file:mr-2 text-opacity-0"
                  />
                  <div
                    className="absolute bottom-1 -z-10 overflow-hidden truncate w-[75%] ml-28 pt-4 px-0 text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary"
                    id="file-name"
                  >
                    {file ? file.name : "No file chosen"}
                  </div>
                  <label
                    htmlFor="file"
                    className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Upload ID
                  </label>

                  {errors.attachment && (
                    <WarningPopup
                      error={errors.attachment.message}
                      isFirstError={currentErrorField === "attachment"}
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end items-center mt-8">
                <button
                  type="submit"
                  className={`text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg ${
                    ashesReturned === null && "hidden"
                  }`}
                >
                  {selectedInternmentType === "ashes" ? "Continue" : "Submit"}
                </button>
              </div>
            </form>
          )}

          {ashesReturnAddress === true && (
            <AshesReturnPopup
              ashesReturned={ashesReturned}
              setAshesReturned={setAshesReturned}
              submissionStatus={submissionStatus}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RelinquishForm;
