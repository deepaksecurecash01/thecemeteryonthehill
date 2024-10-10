import { z } from "zod";
import countries from "@/json/ListOfCountries.json"; // Import the JSON file directly

export const ReturnAddressFormSchema = z
  .object({
    Address: z.string().nonempty("Address is required."),
    Suburb: z.string().nonempty("Suburb is required."),
    State: z.string().nonempty("State is required."),

    PostCode: z.string().nonempty("Post Code is required."),
    Country: z.enum(countries, {
      errorMap: () => ({ message: "Country is required." }),
    }),
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
          message: "Invalid post code format for the selected Country.",
        });
      }
    }
  });
