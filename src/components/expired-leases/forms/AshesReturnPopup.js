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
  releaseFormData,
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
      Country: "Australia",
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
  const Country = watch("Country");

  const handleChangePostCodeValidation = () => {
    if (Country) {
      trigger("PostCode"); // Trigger validation for PostCode when Country changes
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Function to combine releaseFormData and additionalData
    const combineData = (releaseFormData, data) => {
      // Create a copy of releaseFormData entries as an object
      const releaseData = {};
      for (const [key, value] of releaseFormData.entries()) {
        if (value instanceof File) {
          releaseData[key] = value; // Preserve File objects
        } else {
          releaseData[key] = value;
        }
      }

      // Merge with additional data
      return { ...releaseData, ...data };
    };

    // Merge data from releaseFormData and additionalData
    const finalData = combineData(releaseFormData, data);

    // Append merged data to FormData
    for (const [key, value] of Object.entries(finalData)) {
      if (value instanceof File) {
        // Append file directly
        formData.append(key, value);
      } else if (value && typeof value === "object") {
        if (key === "Attachments") {
          // Flatten nested attachments object
          for (const [subKey, subValue] of Object.entries(value)) {
            formData.append(`Attachments.${subKey}`, subValue);
          }
        }
      } else {
        formData.append(key, value);
      }
    }

    if (ashesReturned === true) {
      // Flatten and append ReturnAshesDetails data
      const ReturnAshesDetails = {
        Address: data?.Address || "",
        Suburb: data?.Suburb || "",
        State: data?.State || "",
        PostCode: data?.PostCode || "",
        Country: data?.Country || "",
      };

      for (const [key, value] of Object.entries(ReturnAshesDetails)) {
        formData.append(`ReturnAshesDetails.${key}`, value);
      }
    }

    // Add `Returned` flag if `ashesReturned` is false
    formData.append("ReturnAshes", ashesReturned === false ? false : true);

    console.log("Form Data:", ...formData.entries());

    try {
      const response = await fetch("/api/release-form", {
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
                  {...register("Address")}
                  className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  autoComplete="new-password"
                  onFocus={() => setCurrentErrorField("Address")}
                  onBlur={() => setCurrentErrorField(null)}
                />
                <label
                  htmlFor="Address"
                  className="peer-focus:font-medium absolute w-full text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  <span className="hidden md:block">Address</span>
                  <span className="block md:hidden">Address</span>
                </label>
                {errors.Address && (
                  <WarningPopup
                    error={errors.Address?.message}
                    isFirstError={currentErrorField === "Address"}
                  />
                )}
              </div>
              <div className="flex space-x-4 mb-5  xl:mb-5 relative">
                <div className=" w-full group contact">
                  <div className="w-full relative">
                    <input
                      type="text"
                      {...register("Suburb")}
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                      autoComplete="new-password"
                      onChange={handleAlphaOnly}
                      onFocus={() => setCurrentErrorField("Suburb")}
                      onBlur={() => {
                        setCurrentErrorField(null);
                        trigger("Suburb");
                      }}
                    />

                    <label
                      htmlFor="Suburb"
                      className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Suburb
                    </label>
                  </div>

                  {errors.Suburb && currentErrorField === "Suburb" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.Suburb?.message}
                    </span>
                  )}
                </div>

                <div className=" w-full group contact">
                  <div className="w-full relative">
                    <input
                      type="text"
                      {...register("State")}
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                      autoComplete="new-password"
                      onChange={handleAlphaOnly}
                      onFocus={() => setCurrentErrorField("State")}
                      onBlur={() => {
                        setCurrentErrorField(null);
                        trigger("State");
                      }}
                    />
                    <label
                      htmlFor="State"
                      className="peer-focus:font-medium flex absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      State
                    </label>
                  </div>

                  {errors.State && currentErrorField === "State" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.State?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex space-x-4 mb-5  xl:mb-5 relative">
                <div className=" md:w-1/3 group contact">
                  <div className="w-full relative">
                    <input
                      type="text"
                      {...register("PostCode")}
                      className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                      autoComplete="new-password"
                      onChange={handleNumericOnly}
                      onFocus={() => setCurrentErrorField("PostCode")}
                      onBlur={() => {
                        setCurrentErrorField(null);
                        handleChangePostCodeValidation();
                      }}
                    />
                    <label
                      htmlFor="PostCode"
                      className="peer-focus:font-medium absolute text-base xxs:text-[0.95rem] md:text-lg font-display text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Post Code
                    </label>
                  </div>
                  {errors.PostCode && currentErrorField === "PostCode" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.PostCode?.message}
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
                    {...register("Country")}
                    onChange={(e) => {
                      setValue("Country", e.target.value, {
                        shouldValidate: true,
                      });
                      handleChangePostCodeValidation();
                      setCurrentErrorField(null); // Reset error field when a selection is made
                    }}
                    className="block pt-4 px-0 w-full text-base xxs:text-[0.95rem] md:text-lg font-roboto font-medium text-primary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                    onFocus={() => setCurrentErrorField("Country")}
                    onBlur={() => setCurrentErrorField(null)}
                  >
                    <option value="">Select a country</option>
                    {countries.map((Country) => (
                      <option key={Country} value={Country}>
                        {Country}
                      </option>
                    ))}
                  </select>
                  {errors.Country && currentErrorField === "Country" && (
                    <span className="absolute backdrop-blur-lg py-1 px-2 w-full text-[0.85rem] md:text-base -bottom-8 left-0  flex items-center text-primary shadow-sm z-10">
                      <span className="bg-primary p-1 rounded-sm mr-1">
                        <FaExclamation className="text-xs text-white" />
                      </span>
                      {errors?.Country?.message}
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
