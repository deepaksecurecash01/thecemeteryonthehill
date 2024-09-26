import { z } from "zod";

export const RelinquishFormSchema = z
  .object({
    FullName: z
      .string()
      .nonempty("Full Name is required.")
      .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
    NameOfDeceased: z
      .string()
      .nonempty("Name of Deceased is required.")
      .regex(/^\S+\s\S+$/, "Name must include both first and last name."),
    Email: z
      .string()
      .nonempty("Email is required.")
      .email("Please enter a valid email address."),
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
    InternmentType: z.enum(["Ashes", "Burial"], {
      errorMap: () => ({ message: "Internment Type is required." }),
    }),
    Signature: z.string({
      errorMap: () => ({ message: "Lease Holder Signature is required." }),
    }),
    Id: z
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
  })
  .superRefine((data, ctx) => {
    if (data.DateOfBirth >= data.DateOfDeath) {
      ctx.addIssue({
        path: ["DateOfDeath"],
        message: "Date of Death must be after Date of Birth.",
      });
    }
  });
