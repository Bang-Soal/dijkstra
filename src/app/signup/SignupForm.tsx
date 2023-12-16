"use client ";
import { redirect, useSearchParams } from "next/navigation";
import { InfiniteSlider } from "../components/InfiniteSlider";
import { SIGNUP_COPYWRITING, UNI_LOGOS } from "./constants";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signupFormSchema } from "@/types/schema/auth";

export const SignupForm = () => {
  const searchParams = useSearchParams();
  const login = searchParams.get("login");
  const [isLogin, setIsLogin] = useState<boolean>(!!login);
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [register, { isSuccess, isLoading }] = useRegisterMutation();

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    register(values).then(() => {
      if (isSuccess) {
        redirect("/signup?onboard=true");
      }
    });
  }

  return (
    <div className="mx-16 flex h-full flex-row items-center justify-center gap-10">
      <div className="w-1/2">
        <InfiniteSlider images={UNI_LOGOS} />
      </div>

      <div className="-mb-8 w-1/2 self-end">
        <div className="w-full -skew-x-12 overflow-hidden rounded-2xl bg-emerald-100/50 p-4 shadow-lg">
          <div className="rounded-2xl bg-white py-16">
            <div className="flex skew-x-12 flex-col items-center justify-center px-10 py-4">
              <div className="flex flex-col gap-2 text-center">
                <p className="text-2xl font-bold text-gray-950">
                  {SIGNUP_COPYWRITING[isLogin ? "login" : "register"].header}
                </p>
                <p className="text-gray-500">
                  {SIGNUP_COPYWRITING[isLogin ? "login" : "register"].caption}
                </p>
                <a href="" className="text-emerald-600 underline">
                  {SIGNUP_COPYWRITING[isLogin ? "login" : "register"].anchor}
                </a>
              </div>

              <div className="w-full">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-4 flex w-full flex-col gap-5"
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
                                color="emerald"
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
                                type="password"
                                placeholder="Password"
                                color="emerald"
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
              </div>
              {isLogin && (
                <a href="" className="text-emerald-600 underline">
                  Forgot password?
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
