import { z } from "zod";
import countries from "@/json/ListOfCountries.json"; // Import the JSON file directly

export const PurchaseFormSchema = z
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
