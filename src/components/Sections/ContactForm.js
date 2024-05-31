"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().regex(/^\(?(?:0[1-9]|[1-9][0-9])\)?(?:[ ]?[0-9]){8}$/, {
    message: "Invalid phone number",
  }),
  message: z.string().nonempty(),
});

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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


  useEffect(() => {
    if (submissionStatus) {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  return (
    <form
      className="w-[18rem] md:w-[24rem] lg:w-[22rem] 2xl:w-[26rem] mx-auto py-10 flex flex-col justify-evenly h-full relative"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          {...register("name")}
          className="block py-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
          autoComplete="new-password"
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          {...register("email")}
          className="block py-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
          autoComplete="new-password"
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
        {errors.email && <span className="text-red-500">Invalid email</span>}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          {...register("phone")}
          className="block py-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
          autoComplete="new-password"
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone No.
        </label>
        {errors.phone && (
          <span className="text-red-500">Invalid phone number</span>
        )}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          {...register("message")}
          className="block py-6 px-0 w-full mt-4 text-lg font-roboto text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
          rows="4"
          autoComplete="off"
        ></textarea>
        <label
          htmlFor="message"
          className="peer-focus:font-medium absolute text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Message
        </label>
        {errors.message && (
          <span className="text-red-500">Message is required</span>
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
          Your form is successfully submitted
        </p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-500 mt-4">{errorMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;
