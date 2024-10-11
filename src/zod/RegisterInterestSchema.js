import { z } from "zod";

export const RegisterInterestSchema = z.object({
  FullName: z
    .string()
    .nonempty("Full Name is required.")
    .regex(/^[A-Za-z\s]+$/, "Name must only contain letters and spaces.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  Email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),
  MobileNumber: z
    .string()
    .nonempty("Phone Number is required.")
    .regex(/^[0-9]+$/, "Phone Number must contain only digits."),
});
