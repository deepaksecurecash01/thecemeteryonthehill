import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";

// List of countries (unchanged)

const schema = z
  .object({
    fullName: z
      .string()
      .nonempty("Full Name is required.")
      .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
    address: z.string().nonempty("Address is required."),
    city: z.string().nonempty("Suburb is required."),
    state: z.string().nonempty("State is required."),
    postalCode: z.string().nonempty("Post Code is required."),
    country: z.enum(countries, {
      errorMap: () => ({ message: "Country is required." }),
    }),
    phoneNumber: z
      .string()
      .nonempty("Phone Number is required.")
      .regex(/^[0-9]+$/, "Phone Number must contain only digits."),
    email: z
      .string()
      .nonempty("Email is required.")
      .email("Please enter a valid email address."),
  })
  .superRefine((data, ctx) => {
    if (data.country === "Australia") {
      if (!/^\d{4}$/.test(data.postalCode)) {
        ctx.addIssue({
          path: ["postalCode"],
          message: "Australian postal code contains 4 digits.",
        });
      }
    } else {
      // Example for other countries, adjust as needed
      if (!/^\d+$/.test(data.postalCode)) {
        ctx.addIssue({
          path: ["postalCode"],
          message: "Invalid post code format for the selected country.",
        });
      }
    }
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

const RelinquishForm = ({ elementData }) => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [screenToShow, setscreenToShow] = useState("stripecheckout");
  const [currentErrorField, setCurrentErrorField] = useState(null);
  const [errorMessage, setErrorMessage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    trigger,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "Australia",
    },
  });

  const country = watch("country");

  const handleAlphaOnly = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  const handleNumericOnly = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };

  const handleChangePostCodeValidation = () => {
    if (country) {
      trigger("postalCode");
    }
  };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setSubmissionStatus("success");
      setErrorMessage("");
      setscreenToShow("stripecheckout");
      reset();
    } catch (error) {
      setSubmissionStatus("error");
      setErrorMessage("Failed to submit the form. Please try again.");
    }
  };

  const getTotalAmount = () => {
    const plot_Price = parseFloat(elementData[0]?.prices?.plot_Price) || 0;
    const Internment_Rights_100_Years =
      parseFloat(elementData[0]?.prices?.Internment_Rights_100_Years) || 0;
    const Preparation_for_initial_Interments =
      parseFloat(elementData[0]?.prices?.Preparation_for_initial_Interments) ||
      0;
    const Ongoing_maintenance_Fee_per_year =
      parseFloat(elementData[0]?.prices?.Ongoing_maintenance_Fee_per_year) || 0;
    const Plaque = parseFloat(elementData[0]?.prices?.Plaque) || 0;
    return (
      plot_Price +
      Internment_Rights_100_Years +
      Preparation_for_initial_Interments +
      Ongoing_maintenance_Fee_per_year +
      Plaque
    ).toFixed(2);
  };

  const formattedTotalAmount = formatNumber(getTotalAmount());

  return (
    <div className="w-full max-h-screen overflow-y-auto no-scrollbar overflow-x-hidden">
      <div className="md:max-h-[1024px] h-[940px] my-auto bg-contact-form-bg popup-form-bg bg-center bg-no-repeat md:bg-contain flex justify-center items-center relative py-28 md:py-24 lg:py-24">
        <div
          className={`absolute ${
            screenToShow === "receipt" ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300  h-full w-full`}
        >
          <PurchaseReceipt
            elementData={elementData}
            formattedTotalAmount={formattedTotalAmount}
            formatNumber={formatNumber}
            getTotalAmount={getTotalAmount}
            screenToShow={screenToShow}
            setscreenToShow={setscreenToShow}
          />
        </div>

        <form
          className={`w-[70%] md:w-auto pt-6 sm:pt-14 md:pt-10 xl:pt-6 h-full mx-auto flex flex-col justify-between relative z-10 ${
            screenToShow === "detailedform" ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in-out delay-250 duration-300`}
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div className="relative w-full mb-5 xl:mb-5 group contact">
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
          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="text"
              {...register("address")}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              autoComplete="new-password"
              onFocus={() => setCurrentErrorField("address")}
              onBlur={() => setCurrentErrorField(null)}
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden md:block">Address</span>
              <span className="block md:hidden">Address</span>
            </label>
            {errors.address && (
              <WarningPopup
                error={errors.address?.message}
                isFirstError={currentErrorField === "address"}
              />
            )}
          </div>
          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="text"
              {...register("city")}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              autoComplete="new-password"
              onChange={handleAlphaOnly}
              onFocus={() => setCurrentErrorField("city")}
              onBlur={() => {
                setCurrentErrorField(null);
                trigger("city");
              }}
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden md:block">Suburb</span>
              <span className="block md:hidden">Suburb</span>
            </label>
            {errors.city && (
              <WarningPopup
                error={errors.city?.message}
                isFirstError={currentErrorField === "city"}
              />
            )}
          </div>
          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="text"
              {...register("state")}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              autoComplete="new-password"
              onChange={handleAlphaOnly}
              onFocus={() => setCurrentErrorField("state")}
              onBlur={() => {
                setCurrentErrorField(null);
                trigger("state");
              }}
            />
            <label
              htmlFor="state"
              className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden md:block">State</span>
              <span className="block md:hidden">State</span>
            </label>
            {errors.state && (
              <WarningPopup
                error={errors.state?.message}
                isFirstError={currentErrorField === "state"}
              />
            )}
          </div>
          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="text"
              {...register("postalCode")}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              autoComplete="new-password"
              onChange={handleNumericOnly}
              onFocus={() => setCurrentErrorField("postalCode")}
              onBlur={() => {
                setCurrentErrorField(null);
                handleChangePostCodeValidation();
              }}
            />
            <label
              htmlFor="postalCode"
              className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden md:block">Post Code</span>
              <span className="block md:hidden">Post Code</span>
            </label>
            {errors.postalCode && (
              <WarningPopup
                error={errors.postalCode?.message}
                isFirstError={currentErrorField === "postalCode"}
              />
            )}
          </div>
          <div className="relative w-full mb-5 xl:mb-5 group contact">
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
          <div className="relative w-full mb-5 xl:mb-5 group contact">
            <input
              type="email"
              {...register("email")}
              className="block pt-4 px-0 w-full text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              autoComplete="new-password"
              onFocus={() => setCurrentErrorField("email")}
              onBlur={() => setCurrentErrorField(null)}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute w-full text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              <span className="hidden md:block">Email</span>
              <span className="block md:hidden">Email</span>
            </label>
            {errors.email && (
              <WarningPopup
                error={errors.email?.message}
                isFirstError={currentErrorField === "email"}
              />
            )}
          </div>

          <div className="relative w-full flex items-center justify-between gap-4">
            <button
              type="button"
              className="text-lg bg-transparent text-primary px-5 py-2.5 border-2 border-primary rounded-md hover:bg-primary hover:text-white focus:outline-none"
              onClick={() => dispatch(setPopupForm(false))}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-lg bg-primary text-white px-5 py-2.5 border-2 border-primary rounded-md hover:bg-transparent hover:text-primary focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RelinquishForm;
