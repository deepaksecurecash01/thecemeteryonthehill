'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().regex(/^\(?(?:0[1-9]|[1-9][0-9])\)?(?:[ ]?[0-9]){8}$/), // Australian phone number pattern
  message: z.string().nonempty(),
});

const ContactForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="w-full lg:w-[24rem] xl:w-[26rem] mx-auto py-10 flex flex-col justify-evenly h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          {...register("name")}
          className="block py-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
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
          className="block py-6 px-0 w-full text-lg font-roboto text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
          required
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
          className="text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-tertiary hover:border-tertiary text-sm sm:text-base md:text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
