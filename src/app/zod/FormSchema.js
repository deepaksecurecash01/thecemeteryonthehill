import { z } from "zod";

export const formSchema = z.object({
  fullName: z
    .string()
    .nonempty("Full Name is required")
    .regex(/^\S+\s\S+$/, "Full Name must include both first and last name"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  phoneNumber: z
    .string()
    .nonempty("Phone Number is required")
    .regex(/^[0-9]{10}$/, "Invalid phone number format"),
  nameOfDeceased: z
    .string()
    .nonempty("Name of Deceased is required")
    .regex(
      /^\S+\s\S+$/,
      "Name of Deceased must include both first and last name"
    ),
  dateOfBirth: z
    .string()
    .nonempty("Date of Birth is required")
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Date of Birth must be in DD/MM/YYYY format"
    ),
  dateOfDeath: z
    .string()
    .nonempty("Date of Death is required")
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Date of Death must be in DD/MM/YYYY format"
    ),
  rowPlot: z.string().optional(),
  preferredContactMethod: z.enum(["Phone", "Email"]),
  preferredContactDate: z
    .string()
    .nonempty("Preferred Contact Date is required")
    .regex(
      /^\d{2}\/\d{2}\/\d{4}$/,
      "Preferred Contact Date must be in DD/MM/YYYY format"
    ),
});
