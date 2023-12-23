"use client";

// components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// libs
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
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
    .refine((value) => !/\d/.test(value), {
      message: "Password must contain at least one digit.",
    })
    .refine((value) => !/[a-z]/.test(value), {
      message: "Password must contain at least one lowercase letter.",
    })
    .refine((value) => !/[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter.",
    }),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex flex-col items-center -space-y-16 px-5 py-20 sm:-space-y-28 sm:px-10 lg:flex-row lg:-space-x-16 lg:space-y-0 lg:px-20">
      <div className="flex w-full flex-col drop-shadow-2xl lg:w-auto lg:flex-1 lg:flex-row">
        <div className="px:10 flex flex-col justify-center gap-5 rounded-t-3xl bg-surface-100 px-10 py-8 lg:grow lg:rounded-l-3xl lg:rounded-r-none lg:pl-20 lg:pr-0">
          <h1 className="text-center text-4xl font-600 text-content-100 lg:text-left">
            Tunggu apa lagi?
          </h1>
          <p className="text-balance text-center text-lg font-500 text-content-300 lg:text-left">
            Jamin kesuksesanmu dan masuki PTN impian bersama BangSoal!
          </p>
        </div>
        <Image
          src="/slant-left.svg"
          alt="Slant left"
          width={120}
          height={400}
          className="hidden lg:block"
        />
        <Image
          src="/slant-top.svg"
          alt="Slant top"
          width={400}
          height={120}
          className="w-full lg:hidden"
        />
      </div>
      <div className="flex w-full flex-col lg:w-auto lg:flex-1 lg:flex-row">
        <Image
          src="/slant-right.svg"
          alt="Slant right"
          width={120}
          height={400}
          className="hidden lg:block"
        />
        <Image
          src="/slant-bottom.svg"
          alt="Slant bottom"
          width={400}
          height={120}
          className="w-full lg:hidden"
        />
        <div className="flex grow flex-col justify-center gap-5 rounded-b-3xl bg-emerald-300 px-10 py-8 lg:rounded-l-none lg:rounded-r-3xl lg:pl-0 lg:pr-20">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className="border-none bg-emerald-400 font-600 text-white placeholder:text-emerald-100"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          className="border-none bg-emerald-400 font-600 text-white placeholder:text-emerald-100"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="rounded-full bg-white !font-600 text-emerald-700 hover:bg-emerald-100"
              >
                Gabung sekarang!
              </Button>
            </form>
          </Form>
          <div className="flex items-center justify-center gap-2 font-600 text-white">
            <div className="h-0.5 grow rounded-full bg-emerald-200" />
            atau
            <div className="h-0.5 grow rounded-full bg-emerald-200" />
          </div>
          <Button
            type="submit"
            className="rounded-full bg-white !font-600 text-emerald-700 hover:bg-emerald-100"
          >
            <i className="i-logos-google-icon mr-2 size-4" />
            <p className="">Daftar dengan Google</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
