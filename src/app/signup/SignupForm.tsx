"use client ";
import { useState, useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { InfiniteSlider } from "../components/InfiniteSlider";
import { SIGNUP_COPYWRITING, UNI_LOGOS } from "./constants";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  useLoginMutation,
  useRegisterMutation,
  useSendOTPMutation,
} from "@/redux/api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SigninFormSchema } from "@/types/schema/auth";
import { OTPInput } from "../components/OTPInput";

export const SignupForm = () => {
  const searchParams = useSearchParams();
  const login = searchParams.get("login");
  const [isLogin, setIsLogin] = useState<boolean>(!!login);
  const [otpValue, setOtpValue] = useState<string>("");
  const [showOTPInput, setShowOTPInput] = useState<boolean>(false);
  const form = useForm<z.infer<typeof SigninFormSchema>>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      phone_number: "",
    },
  });
  const { handleSubmit } = form;
  const [sendOTP, { isSuccess: isOTPSucess, isLoading: isOTPLoading }] =
    useSendOTPMutation();
  const [
    register,
    { isSuccess: isRegisterSuccess, isLoading: isRegisterLoading },
  ] = useRegisterMutation();
  const [loginUser, { isSuccess: isLoginSucess, isLoading: isLoginLoading }] =
    useLoginMutation();

  const onSubmitForm = (values: z.infer<typeof SigninFormSchema>) => {
    values.phone_number = `+62${values.phone_number.slice(1)}`;
    if (!showOTPInput) {
      sendOTP({ phone_number: values.phone_number }).then(() => {});
    } else {
      const body = { ...values, otp: otpValue };
      if (isLogin) {
        loginUser(body);
      } else {
        register(body);
      }
    }
  };

  useEffect(() => {
    if (isOTPSucess) {
      setShowOTPInput(true);
    }
    if (isLoginSucess || isRegisterSuccess) {
      redirect("/");
    }
  }, [isLoginSucess, isRegisterSuccess, isOTPSucess]);

  return (
    <div className="mx-5 flex h-full flex-col justify-center gap-10 md:mx-16 md:pt-10 lg:flex-row lg:items-center">
      <div className="-mx-4 hidden w-full md:block lg:w-1/2">
        <InfiniteSlider images={UNI_LOGOS} />
      </div>

      <div className="-mx-10 -mb-8 overflow-hidden md:overflow-visible lg:w-1/2 lg:self-end">
        <div className="w-full min-w-[380px] -skew-x-12 overflow-hidden rounded-2xl bg-emerald-100/50 p-4 shadow-lg">
          <div className="rounded-2xl bg-white py-8 md:py-16">
            <div className="flex skew-x-12 flex-col items-center justify-center px-10 py-4">
              <div className="flex flex-col gap-2 text-center">
                <p className="ml-8 text-2xl font-bold text-gray-950 md:ml-6">
                  {SIGNUP_COPYWRITING[isLogin ? "login" : "register"].header}
                </p>
                <p className="ml-6 text-gray-500 md:ml-6">
                  {SIGNUP_COPYWRITING[isLogin ? "login" : "register"].caption}
                </p>
                <a
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-4 text-emerald-600 underline md:ml-6"
                >
                  {SIGNUP_COPYWRITING[isLogin ? "login" : "register"].anchor}
                </a>
              </div>

              <div className="w-full">
                <Form {...form}>
                  <form className="mt-4 flex w-full flex-col gap-5">
                    {showOTPInput ? (
                      <div className="flex md:justify-center">
                        <OTPInput setValue={setOtpValue} />
                      </div>
                    ) : (
                      <div className="-ml-4 mr-1 md:-ml-4 md:mr-2">
                        <FormField
                          control={form.control}
                          name="phone_number"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Phone Number" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                    <Button
                      onClick={handleSubmit(onSubmitForm)}
                      variant={"emerald"}
                      className="-ml-6 mr-2 rounded-full md:-ml-8 md:mr-4"
                      loading={
                        isOTPLoading || isLoginLoading || isRegisterLoading
                      }
                    >
                      {showOTPInput
                        ? isLogin
                          ? "Login"
                          : "Register"
                        : "Send OTP"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
