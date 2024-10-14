import { z } from "zod";
import countries from "@/json/ListOfCountries.json"; // Import the JSON file directly

export const PurchaseFormSchema = z
  .object({
    FullName: z
      .string()
      .nonempty("Full Name is required.")
      .regex(/^[A-Za-z\s]+$/, "Name must only contain letters and spaces.")
      .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
    Address: z.string().nonempty("Address is required."),
    Suburb: z.string().nonempty("Suburb is required."),
    State: z.string().nonempty("State is required."),

    PostCode: z.string().nonempty("Post Code is required."),
    Country: z.enum(countries, {
      errorMap: () => ({ message: "Country is required." }),
    }),
    MobileNumber: z
      .string()
      .nonempty("Phone Number is required.")
      .regex(/^[0-9]+$/, "Phone Number must contain only digits."),
    Email: z
      .string()
      .nonempty("Email is required.")
      .email("Please enter a valid email address."),
    BotField: z.string().max(0, "Bot detected!"), // honeypot field must be empty
  })
  .superRefine((data, ctx) => {
    if (data.Country === "Australia") {
      if (!/^\d{4}$/.test(data.PostCode)) {
        ctx.addIssue({
          path: ["PostCode"],
          message: "Australian postal code contains 4 digits.",
        });
      }
    } else {
      // Example for other countries, adjust as needed
      if (!/^\d+$/.test(data.PostCode)) {
        ctx.addIssue({
          path: ["PostCode"],
          message: "Invalid post code format for the selected country.",
        });
      }
    }
  });
