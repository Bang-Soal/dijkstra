import { z } from "zod";

export const SigninFormSchema = z.object({
  phone_number: z
    .string()
    .min(10, { message: "Nomor telepon tidak valid. Terlalu pendek" })
    .max(13, { message: "Nomor telepon tidak valid. Terlalu panjang" })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Nomor telepon harus berupa angka saja",
    })
    .refine((value) => /^08[0-9]{8,11}$/.test(value), {
      message:
        "Format tidak valid. Nomor telepon Indonesia harus diawali dengan '08'",
    }),
});

export const onboardingFormSchema = z.object({
  full_name: z.string().min(1, "Nama lengkap diperlukan"),
  highschool: z.string().min(1, "Nama sekolah menengah atas diperlukan"),
  choosen_university_one: z
    .string()
    .min(1, "Universitas pilihan pertama diperlukan"),
  email: z.string().email({
    message: "Silakan masukkan alamat email yang valid",
  }),
  referral_code: z.string().optional(),
  source: z.string().min(1, "Sumber diperlukan"),
  choosen_major_one: z.string().min(1, "Jurusan pilihan pertama diperlukan"),
  highschool_year: z
    .string()
    .min(4, { message: "Tahun tidak valid" })
    .max(4, { message: "Tahun tidak valid" })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Tahun harus berupa angka saja",
    }),
  choosen_university_two: z.string().optional(),
  choosen_major_two: z.string().optional(),
  choosen_university_three: z.string().optional(),
  choosen_major_three: z.string().optional(),
});

export const EditAccountFormSchema = z.object({
  full_name: z.string().min(1, "Nama lengkap diperlukan"),
  highschool: z.string().min(1, "Nama sekolah menengah atas diperlukan"),
  phone_number: z
    .string()
    .min(10, { message: "Nomor telepon tidak valid. Terlalu pendek" })
    .max(13, { message: "Nomor telepon tidak valid. Terlalu panjang" })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: "Nomor telepon harus berupa angka saja",
    })
    .refine((value) => /^08[0-9]{8,11}$/.test(value), {
      message:
        "Format tidak valid. Nomor telepon Indonesia harus diawali dengan '08'",
    }),
});
