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
import { useGetAllPTNQuery } from "@/redux/api/ptnApi";
import { useOnboardingMutation } from "@/redux/api/usersApi";
import { onboardingFormSchema } from "@/types/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Onboarding = () => {
  const form = useForm<z.infer<typeof onboardingFormSchema>>({
    resolver: zodResolver(onboardingFormSchema),
    defaultValues: {
      full_name: "",
      highschool: "",
      highschool_year: "",
      phone_number: "",
      referral_code: "",
      source: "",
      choosen_university_one: "",
      choosen_major_one: "",
      choosen_university_two: "",
      choosen_major_two: "",
      choosen_university_three: "",
      choosen_major_three: "",
    },
  });

  const { data: ptnList } = useGetAllPTNQuery();

  const [onboard, { isSuccess, isLoading }] = useOnboardingMutation();

  function onSubmit(values: z.infer<typeof onboardingFormSchema>) {
    onboard(values).then(() => {
      if (isSuccess) {
        redirect("/");
      }
    });
  }
  return (
    <div className="mx-16 flex h-full flex-col-reverse items-center justify-center gap-10 md:flex-row">
      <div className="-mb-16 w-full overflow-hidden rounded-2xl bg-emerald-300 p-4 shadow-lg lg:w-2/3 ">
        <div className="rounded-2xl bg-white">
          <div className="relative flex flex-col items-center justify-center px-10 py-4">
            <p className="text-center text-3xl font-bold md:mx-20">
              Let&apos;s get your UTBK journey started
            </p>
            <div className="absolute inset-x-0 top-20 h-24 w-full rounded-[50%] bg-transparent shadow-[0_6px_10px_-5px_rgba(0,0,0,0.2)]" />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-10 flex h-[70vh] w-full flex-col gap-3 overflow-scroll px-4 pb-16 pt-8"
              >
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>What&apos;s your name</FormLabel>
                            <Input placeholder="Full Name" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="highschool"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>What&apos;s your high school</FormLabel>
                            <Input placeholder="High School" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              Could we get your phone number?
                            </FormLabel>
                            <Input placeholder="Phone Number" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="choosen_university_one"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              Which PTN are you aiming for?{" "}
                              <span className="text-xs text-gray-400">
                                &#40;Primary Choice&#41;
                              </span>
                            </FormLabel>
                            <Input placeholder="PTN" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="choosen_major_one"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              What do you hope to major in?{" "}
                              <span className="text-xs text-gray-400">
                                &#40;Primary Choice&#41;
                              </span>
                            </FormLabel>
                            <Input placeholder="Major" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="choosen_university_two"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              Which PTN are you aiming for?{" "}
                              <span className="text-xs text-gray-400">
                                &#40;Secondary Choice&#41;
                              </span>
                            </FormLabel>
                            <Input placeholder="PTN" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="choosen_major_two"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              What do you hope to major in?{" "}
                              <span className="text-xs text-gray-400">
                                &#40;Secondary Choice&#41;
                              </span>
                            </FormLabel>
                            <Input placeholder="Major" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="choosen_university_three"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              Which PTN are you aiming for?{" "}
                              <span className="text-xs text-gray-400">
                                &#40;Tertiary Choice&#41;
                              </span>
                            </FormLabel>
                            <Input placeholder="PTN" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="choosen_major_three"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              What do you hope to major in?{" "}
                              <span className="text-xs text-gray-400">
                                &#40;Tertiary Choice&#41;
                              </span>
                              <span className="text-xs text-gray-400">
                                &#40;Secondary Choice&#41;
                              </span>
                            </FormLabel>
                            <Input placeholder="Major" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-row justify-end">
                  <Button
                    type="submit"
                    className="w-40 items-end rounded-full bg-emerald-400 !font-600 text-white hover:bg-emerald-400/70"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
