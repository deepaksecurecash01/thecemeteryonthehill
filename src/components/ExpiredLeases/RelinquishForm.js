"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SignatureCanvas from "react-signature-canvas";

const schema = z.object({
  fullName: z
    .string()
    .nonempty("Full Name is required")
    .regex(/^\S+\s\S+$/, "Full Name must include both first and last name"),
  nameOfDeceased: z
    .string()
    .nonempty("Name of Deceased is required")
    .regex(
      /^\S+\s\S+$/,
      "Name of Deceased must include both first and last name"
    ),
  dateOfBirth: z
    .string()
    .nonempty("Date of Birth is required")
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Date of Birth must be in DD/MM/YYYY format"
    ),
  dateOfDeath: z
    .string()
    .nonempty("Date of Death is required")
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Date of Death must be in DD/MM/YYYY format"
    ),
  rowPlot: z.string().optional(),
  leaseHolderName: z
    .string()
    .nonempty("Lease Holder Name is required")
    .regex(
      /^\S+\s\S+$/,
      "Lease Holder Name must include both first and last name"
    ),
  signature: z.string().nonempty("Lease Holder Signature is required"),
  date: z
    .string()
    .nonempty("Date is required")
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Date must be in DD/MM/YYYY format"),
});

const RelinquishForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [signature, setSignature] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (signature) {
      data.signature = signature.toDataURL();
    } else {
      setSubmissionStatus("error");
      setErrorMessage("Lease Holder Signature is required");
      return;
    }

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
      setSignature(null); // Reset signature
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <>
      <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
        <div className="h-[52rem] md:max-h-[1024px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center  py-24 md:py-14 lg:py-20 xl:py-24">
          <form
            className="w-[70%] md:w-auto md:py-10 xl:py-2 mx-auto  flex flex-col justify-between h-full relative z-10  "
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className="relative z-0 w-full mb-5 lg:mb-2 xl:mb-5 group contact">
              <input
                type="text"
                {...register("fullName")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                autoComplete="new-password"
              />
              <label
                htmlFor="fullName"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full Name
              </label>
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName.message}</span>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 lg:mb-2 xl:mb-5 group contact">
              <input
                type="text"
                {...register("nameOfDeceased")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                autoComplete="new-password"
              />
              <label
                htmlFor="nameOfDeceased"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name of Deceased
              </label>
              {errors.nameOfDeceased && (
                <span className="text-red-500">
                  {errors.nameOfDeceased.message}
                </span>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 lg:mb-2 xl:mb-5 group contact">
              <input
                type="date"
                {...register("dateOfBirth")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase selection:bg-black"
                placeholder=""
                required
                autoComplete="new-password"
              />
              <label
                htmlFor="dateOfBirth"
                className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date of Birth&nbsp;
                <span className="hidden md:block">of Deceased</span>
              </label>
              {errors.dateOfBirth && (
                <span className="text-red-500">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 lg:mb-2 xl:mb-5 group contact">
              <input
                type="date"
                {...register("dateOfDeath")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
                placeholder="DD/MM/YYYY"
                required
                autoComplete="new-password"
              />
              <label
                htmlFor="dateOfDeath"
                className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date of Death&nbsp;
                <span className="hidden md:block">of Deceased</span>
              </label>
              {errors.dateOfDeath && (
                <span className="text-red-500">
                  {errors.dateOfDeath.message}
                </span>
              )}
            </div>
            <div className="flex space-x-4 mb-5 lg:mb-2 xl:mb-5">
              <div className="relative z-0 w-full group contact">
                <input
                  type="text"
                  {...register("row")}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                />
                <label
                  htmlFor="row"
                  className="peer-focus:font-medium flex absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <span className="hidden md:block">Located</span>&nbsp;In Row
                </label>
              </div>
              <div className="relative z-0 w-full group contact">
                <input
                  type="text"
                  {...register("plot")}
                  className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                />
                <label
                  htmlFor="plot"
                  className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Plot
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 lg:mb-2 xl:mb-5 group contact">
              <input
                type="text"
                {...register("leaseHolderName")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
                autoComplete="new-password"
              />
              <label
                htmlFor="leaseHolderName"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Lease Holder Name
              </label>
              {errors.leaseHolderName && (
                <span className="text-red-500">
                  {errors.leaseHolderName.message}
                </span>
              )}
            </div>
            <div className="relative z-0 w-full mb-5 lg:mb-2 xl:mb-5 group contact">
              <label
                htmlFor="signature"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Lease Holder Signature
              </label>
              <SignatureCanvas
                penColor="#933d38"
                canvasProps={{
                  className: "w-full h-32 border-2 border-primary mt-4",
                }}
                ref={(ref) => setSignature(ref)}
              />
              {errors.signature && (
                <span className="text-red-500">{errors.signature.message}</span>
              )}
            </div>

            <div className="relative z-0 w-full mb-5 lg:mb-2 xl:mb-5 group contact">
              <input
                type="date"
                {...register("date")}
                className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer uppercase"
                placeholder="DD/MM/YYYY"
                required
                autoComplete="new-password"
              />
              <label
                htmlFor="date"
                className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date
              </label>
              {errors.date && (
                <span className="text-red-500">{errors.date.message}</span>
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
            {submissionStatus === "success" && (
              <p className="text-primary text-center bottom-1 left-1/2 transform -translate-x-1/2 w-full  absolute">
                Your message has successfully sent!
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default RelinquishForm;
