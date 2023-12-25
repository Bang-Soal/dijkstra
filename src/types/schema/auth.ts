import { z } from "zod";

export const SigninFormSchema = z.object({
  phone_number: z
    .string()
    .min(10, { message: "Invalid phone number. Too short" })
    .max(13, { message: "Invalid phone number. Too long" })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Phone number must be digits only",
    })
    .refine((value) => /^08[0-9]{8,11}$/.test(value), {
      // Regex for Indonesian phone numbers
      message:
        "Invalid format. Indonesian phone numbers should start with '08'",
    }),
});
export const onboardingFormSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  highschool: z.string().min(1, "High school name is required"),
  choosen_university_one: z
    .string()
    .min(1, "First chosen university is required"),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  referral_code: z.string().optional(),
  source: z.string().min(1, "Source is required"),
  choosen_major_one: z.string().min(1, "First chosen major is required"),
  highschool_year: z
    .string()
    .min(4, { message: "Invalid year" })
    .max(4, { message: "Invalid year" })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Year must be digits only",
    }),
  choosen_university_two: z.string().optional(),
  choosen_major_two: z.string().optional(),
  choosen_university_three: z.string().optional(),
  choosen_major_three: z.string().optional(),
});
