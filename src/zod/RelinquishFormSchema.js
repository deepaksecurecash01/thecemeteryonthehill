import { z } from "zod";

export const RelinquishFormSchema = z.object({
  fullName: z
    .string()
    .nonempty("Full Name is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  nameOfDeceased: z
    .string()
    .nonempty("Name of Deceased is required.")
    .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
  email: z
    .string()
    .nonempty("Email is required.")
    .email("Please enter a valid email address."),
  dateofBirth: z.date({
    required_error: "Date of Birth is required",
    invalid_type_error: "Date of Birth is required",
  }),
  dateOfDeath: z.date({
    required_error: "Date of Death is required",
    invalid_type_error: "Date of Death is required",
  }),
  rowPlot: z.string().optional(),
  signature: z.string({
    errorMap: () => ({ message: "Lease Holder Signature is required." }),
  }),
  internmentType: z.enum(["ashes", "burial"], {
    errorMap: () => ({ message: "Internment Type is required." }),
  }),
  attachment: z
    .any() // `any` here is used because we can't directly enforce `File` in Zod
    .refine((file) => file instanceof File, {
      message: "File is required.",
    })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "File size should be less than 10MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "application/pdf"].includes(
          file.type
        ),
      {
        message: "Only .jpeg, .jpg, .png, and .pdf formats are supported",
      }
    ),
});
