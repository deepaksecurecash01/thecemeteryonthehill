import { z } from "zod";
import countries from "@/json/ListOfCountries.json"; // Import the JSON file directly

export const ReturnAddressFormSchema = z
  .object({
    address: z.string().nonempty("Address is required."),
    city: z.string().nonempty("Suburb is required."),
    state: z.string().nonempty("State is required."),

    postalCode: z.string().nonempty("Post Code is required."),
    country: z.enum(countries, {
      errorMap: () => ({ message: "Country is required." }),
    }),
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
