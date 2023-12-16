import { z } from "zod";

export const signupFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .refine((value) => !/\s/.test(value), {
      message: "Password cannot contain spaces.",
    })
    .refine((value) => /\d/.test(value), {
      message: "Password must contain at least one digit.",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must contain at least one lowercase letter.",
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter.",
    }),
});

export const onboardingFormSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  highschool: z.string().min(1, "High school name is required"),
  choosen_university_one: z
    .string()
    .min(1, "First chosen university is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  referral_code: z.string().optional(),
  source: z.string().min(1, "Source is required"),
  choosen_major_one: z.string().min(1, "First chosen major is required"),
  highschool_year: z.string().min(1, "High school year is required"),
  choosen_university_two: z.string().optional(),
  choosen_major_two: z.string().optional(),
  choosen_university_three: z.string().optional(),
  choosen_major_three: z.string().optional(),
});
