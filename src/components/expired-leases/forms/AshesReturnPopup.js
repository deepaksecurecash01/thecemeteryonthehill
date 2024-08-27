import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaExclamation } from "react-icons/fa";
import { ReturnAddressFormSchema } from "@/zod/ReturnAddressFormSchema";
import { useState } from "react";
import countries from "@/json/ListOfCountries.json"; // Import the JSON file directly
import WarningPopup from "@/components/ui/WarningPopup";

const noOpResolver = () => ({ values: {}, errors: {} });

const AshesReturnPopup = ({
  setErrorMessage,
  ashesReturned,
  setAshesReturned,
  submissionStatus,
  setSubmissionStatus,
  releaseFormData
}) => {
  const resolver =
    ashesReturned === true
      ? zodResolver(ReturnAddressFormSchema)
      : noOpResolver;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    watch,
    reset,
  } = useForm({
    resolver,
    defaultValues: {
      country: "Australia",
    },
  });

  const [currentErrorField, setCurrentErrorField] = useState(null);

  const handleAlphaOnly = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setValue(e.target.name, value, { shouldValidate: true, shouldDirty: true });
  };
  const handleNumericOnly = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setValue(e.target.name, value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const country = watch("country");

  const handleChangePostCodeValidation = () => {
    if (country) {
      trigger("postalCode"); // Trigger validation for postalCode when country changes
    }
  };

 const onSubmit = async (data) => {
   const formData = new FormData();

   // If releaseFormData is provided and is a FormData instance, append its entries
   if (releaseFormData instanceof FormData) {
     for (const [key, value] of releaseFormData.entries()) {
       formData.append(key, value);
     }
   }

   // Append the new form data
   Object.keys(data).forEach((key) => formData.append(key, data[key]));

   // Add no-returned flag if ashesReturned is false
   if (ashesReturned === false) {
     formData.append("no-returned", "true");
   }

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
     reset(); // Reset form fields
   } catch (error) {
     console.error("Submission Error:", error);
     setSubmissionStatus("error");
     setErrorMessage("Failed to submit the form. Please try again.");
   }
 };


  return (
    <form
      className={`w-[70%] md:w-[32rem] pt-8 md:pt-10 h-full mx-auto flex flex-col justify-between relative z-10  ${
        submissionStatus === null ? "opacity-100" : "opacity-0"
      } transition-opacity ease-in-out delay-250 duration-300 `}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="flex flex-col justify-between relative h-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-base xxs:text-[0.95rem] md:text-lg text-start font-bold text-primary font-display">
            If possible would you like the Ashes returned to you?
          </h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              {
                id: "ashes-returned",
                value: "returned",
                checked: ashesReturned === true,
                label: "YES",
                onChange: () => setAshesReturned(true),
              },
              {
                id: "ashes-not-returned",
                value: "not-returned",
                checked: ashesReturned === false,
                label: "NO",
                onChange: () => setAshesReturned(false),
              },
            ].map((option) => (
              <div
                key={option.id}
                className="flex flex-row-reverse justify-between border-2 border-primary p-3 rounded-md cursor-pointer"
              >
                <input
                  type="radio"
                  id={option.id}
                  name="ashes-status"
                  value={option.value}
                  checked={option.checked}
                  onChange={option.onChange}
                  className="h-6 w-6 m-auto z-50 cursor-pointer"
                />

                <label
                  htmlFor={option.id}
                  className="font-medium text-base xxs:text-[0.95rem] md:text-lg font-roboto text-primary w-full cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          {ashesReturned === true && (
            <>
              <div className="relative w-full mb-5 xl:mb-5 group contact">
                <input
                  type="text"
                  {...register("address")}
                  className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                  onFocus={() => setCurrentErrorField("address")}
                  onBlur={() => setCurrentErrorField(null)}
                />
                <label
                  htmlFor="address"
                  className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              <div className="flex space-x-4 mb-5  xl:mb-5 relative">
                <div className=" w-full group contact">
                  <div className="w-full relative">
                    <input
                      type="text"
                      {...register("city")}
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
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
                      className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Suburb
                    </label>
                  </div>

                  {errors.city && currentErrorField === "city" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.city?.message}
                    </span>
                  )}
                </div>

                <div className=" w-full group contact">
                  <div className="w-full relative">
                    <input
                      type="text"
                      {...register("state")}
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
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
                      htmlFor="city"
                      className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      State
                    </label>
                  </div>

                  {errors.state && currentErrorField === "state" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.state?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-4 mb-5  xl:mb-5 relative">
                <div className=" md:w-1/3 group contact">
                  <div className="w-full relative">
                    <input
                      type="text"
                      {...register("postalCode")}
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
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
                      className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Post Code
                    </label>
                  </div>
                  {errors.postalCode && currentErrorField === "postalCode" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.postalCode?.message}
                    </span>
                  )}
                </div>
                <div className=" md:w-2/3 group contact">
                  <label
                    htmlFor="preferredContactMethod"
                    className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Country
                  </label>
                  <select
                    {...register("country")}
                    onChange={(e) => {
                      setValue("country", e.target.value, {
                        shouldValidate: true,
                      });
                      handleChangePostCodeValidation();
                      setCurrentErrorField(null); // Reset error field when a selection is made
                    }}
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    onFocus={() => setCurrentErrorField("country")}
                    onBlur={() => setCurrentErrorField(null)}
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && currentErrorField === "country" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.country?.message}
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end items-center mt-8">
          <button
            type="submit"
            className={`text-primary font-display uppercase rounded-sm border-2 cursor-pointer border-primary px-8 py-2 flex justify-center items-center hover:text-white hover:bg-primary text-sm sm:text-base md:text-lg ${
              ashesReturned === null && "hidden"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AshesReturnPopup;
