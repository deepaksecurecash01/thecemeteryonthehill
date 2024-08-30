import { z } from "zod";


export const RenewFormSchema = z.object({
  fullName: z
    .string()
    .nonempty("Full Name is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),
  phoneNumber: z
    .string()
    .nonempty("Phone Number is required.")
    .regex(/^[0-9]+$/, "Phone Number must contain only digits."),
  nameOfDeceased: z
    .string()
    .nonempty("Name of Deceased is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  dateofBirth: z
    .date({
      required_error: "Date of Birth is required",
      invalid_type_error: "Date of Birth is required",
    })
    .refine((date) => date <= new Date(), {
      message: "Date of Birth must be in the past or today",
    }),
  dateOfDeath: z
    .date({
      required_error: "Date of Death is required",
      invalid_type_error: "Date of Death must be a valid date",
    })
    .refine((date) => date <= new Date(), {
      message: "Date of Death must be in the past or today",
    }),
  rowPlot: z.string().optional(),
  preferredContactMethod: z.enum(["email", "phone"], {
    errorMap: () => ({ message: "Contact Method is required." }),
  }),
  preferredContactDate: z.date({
    required_error: "Preferred Contact Date is required.",
    invalid_type_error: "Preferred Contact Date is required.",
  }),
})
  .superRefine((data, ctx) => {
    if (data.dateofBirth <= data.dateOfDeath) {
      ctx.addIssue({
        path: ["dateOfDeath"],
        message: "Date of Death must be after Date of Birth.",
      });
    }
  });