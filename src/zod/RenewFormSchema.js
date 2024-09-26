import { z } from "zod";


export const RenewFormSchema = z
  .object({
    FullName: z
      .string()
      .nonempty("Full Name is required.")
      .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
    Email: z
      .string()
      .nonempty("Email is required.")
      .email("Please enter a valid email address."),
    PhoneNumber: z
      .string()
      .nonempty("Phone Number is required.")
      .regex(/^[0-9]+$/, "Phone Number must contain only digits."),
    NameOfDeceased: z
      .string()
      .nonempty("Name of Deceased is required.")
      .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
    DateOfBirth: z
      .date({
        required_error: "Date of Birth is required",
        invalid_type_error: "Date of Birth is required",
      })
      .refine((date) => date <= new Date(), {
        message: "Date of Birth must be in the past or today",
      }),
    DateOfDeath: z
      .date({
        required_error: "Date of Death is required",
        invalid_type_error: "Date of Death must be a valid date",
      })
      .refine((date) => date <= new Date(), {
        message: "Date of Death must be in the past or today",
      }),
    Row: z.string().optional(),
    Plot: z.string().optional(),

    PreferredContactMethod: z.enum(["Email", "Phone"], {
      errorMap: () => ({ message: "Contact Method is required." }),
    }),
    PreferredContactDate: z.date({
      required_error: "Preferred Contact Date is required.",
      invalid_type_error: "Preferred Contact Date is required.",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.DateOfBirth >= data.DateOfDeath) {
      ctx.addIssue({
        path: ["DateOfDeath"],
        message: "Date of Death must be after Date of Birth.",
      });
    }
  });