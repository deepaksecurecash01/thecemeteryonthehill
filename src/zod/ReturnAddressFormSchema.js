import { z } from "zod";
import countries from "@/json/ListOfCountries.json"; // Import the JSON file directly

export const ReturnAddressFormSchema = z
  .object({
    Address: z.string().nonempty("Address is required."),
    City: z.string().nonempty("Suburb is required."),
    State: z.string().nonempty("State is required."),

    PostalCode: z.string().nonempty("Post Code is required."),
    Country: z.enum(countries, {
      errorMap: () => ({ message: "Country is required." }),
    }),
  })
  .superRefine((data, ctx) => {
    if (data.Country === "Australia") {
      if (!/^\d{4}$/.test(data.PostalCode)) {
        ctx.addIssue({
          path: ["PostalCode"],
          message: "Australian postal code contains 4 digits.",
        });
      }
    } else {
      // Example for other countries, adjust as needed
      if (!/^\d+$/.test(data.PostalCode)) {
        ctx.addIssue({
          path: ["PostalCode"],
          message: "Invalid post code format for the selected Country.",
        });
      }
    }
  });
