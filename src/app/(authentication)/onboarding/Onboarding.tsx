"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useState } from "react";

import withAuth from "@/app/components/withAuth";
import SearchableDropdown from "@/components/ui/searchable-dropdown";
import { PTN } from "@/types";
import { PTNChoices } from "../signup/interface";

const Onboarding = () => {
  const form = useForm<z.infer<typeof onboardingFormSchema>>({
    resolver: zodResolver(onboardingFormSchema),
    defaultValues: {
      full_name: "",
      highschool: "",
      highschool_year: "",
      email: "",
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

  const { setValue, watch, getValues, handleSubmit } = form;
  const { data: ptnData } = useGetAllPTNQuery();
  const ptnList: PTN[] = ptnData?.data ?? [];
  const ptnOptions = ptnList?.map(({ name }) => name) ?? [];
  const uniOne = watch("choosen_university_one");
  const uniTwo = watch("choosen_university_two");
  const uniThree = watch("choosen_university_three");
  const ptnValues = getValues([
    "choosen_university_one",
    "choosen_university_two",
    "choosen_university_three",
  ]);

  const [selectedPTN, setSelectedPTN] = useState<PTNChoices>({
    one: null,
    two: null,
    three: null,
  });

  useEffect(() => {
    if (ptnList) {
      setSelectedPTN({
        one: ptnList.find(({ name }) => name == ptnValues[0]) ?? null,
        two: ptnList.find(({ name }) => name == ptnValues[1]) ?? null,
        three: ptnList.find(({ name }) => name == ptnValues[2]) ?? null,
      });
    }
  }, [uniOne, uniTwo, uniThree]);

  const [onboard, { isSuccess, isLoading }] = useOnboardingMutation();

  const onSubmit = async (data: z.infer<typeof onboardingFormSchema>) => {
    await onboard(data);
  };

  useEffect(() => {
    if (isSuccess) {
      redirect("/");
    }
  }, [isSuccess]);

  return (
    <div className="mx-0 flex h-full items-center justify-center gap-10 pt-10 lg:mx-16">
      <div className="-mb-16 overflow-hidden rounded-2xl bg-emerald-300 p-4 shadow-lg">
        <div className="w-full rounded-2xl bg-white">
          <div className="relative z-10 flex flex-col items-center justify-center px-4 py-4 md:px-10">
            <p className="relative z-10 mt-6 text-center text-2xl font-bold md:mx-20 md:mt-12 md:text-3xl">
              Let&apos;s get your UTBK journey started
            </p>
            <div className="absolute inset-x-0 top-[6%] h-24 w-full rounded-[50%] bg-gradient-to-b from-transparent to-white shadow-[0_6px_10px_-5px_rgba(0,0,0,0.2)] md:top-[8%]" />

            <Form {...form}>
              <form className="hide-scrollbar mt-10 flex h-[70vh] w-full flex-col gap-3 overflow-scroll py-8 md:px-4">
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
                    name="highschool_year"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>
                              When is your expected graduation year?
                            </FormLabel>
                            <Input placeholder="High School Year" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>Could we get your email?</FormLabel>
                            <Input placeholder="Email" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="source"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>How do you know BangSoal?</FormLabel>
                            <Input
                              placeholder="Website, Social Media, etc"
                              {...field}
                            />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormItem>
                    <FormControl>
                      <>
                        <FormLabel>
                          Which PTN are you aiming for?{" "}
                          <span className="text-xs text-gray-400">
                            &#40;Primary Choice&#41;
                          </span>
                        </FormLabel>
                        <SearchableDropdown
                          options={ptnOptions}
                          setValue={setValue}
                          field={"choosen_university_one"}
                          placeholder="Primary PTN"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <>
                        <FormLabel>What do you hope to major in? </FormLabel>
                        <SearchableDropdown
                          options={selectedPTN.one?.prodi ?? []}
                          setValue={setValue}
                          field={"choosen_major_one"}
                          placeholder="Primary Major"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <>
                        <FormLabel>
                          Which PTN are you aiming for?{" "}
                          <span className="text-xs text-gray-400">
                            &#40;Secondary Choice&#41;
                          </span>
                        </FormLabel>
                        <SearchableDropdown
                          options={ptnOptions}
                          setValue={setValue}
                          field={"choosen_university_two"}
                          placeholder="Secondary PTN"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <>
                        <FormLabel>
                          What do you hope to major in?{" "}
                          <span className="text-xs text-gray-400">
                            &#40;Secondary Choice&#41;
                          </span>
                        </FormLabel>
                        <SearchableDropdown
                          options={selectedPTN.two?.prodi ?? []}
                          setValue={setValue}
                          field={"choosen_university_two"}
                          placeholder="Secondary Major"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <>
                        <FormLabel>
                          Which PTN are you aiming for?{" "}
                          <span className="text-xs text-gray-400">
                            &#40;Tertiary Choice&#41;
                          </span>
                        </FormLabel>
                        <SearchableDropdown
                          options={ptnOptions}
                          setValue={setValue}
                          field={"choosen_university_three"}
                          placeholder="Tertiary PTN"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <>
                        <FormLabel>
                          What do you hope to major in?{" "}
                          <span className="text-xs text-gray-400">
                            &#40;Tertiary Choice&#41;
                          </span>
                        </FormLabel>
                        <SearchableDropdown
                          options={selectedPTN.three?.prodi ?? []}
                          setValue={setValue}
                          field={"choosen_major_three"}
                          placeholder="Tertiary Major"
                        />
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
                <div className="mb-4 flex flex-row justify-end pt-8">
                  <Button
                    onClick={handleSubmit(onSubmit)}
                    variant={"bsPrimary"}
                    className="w-40 items-end"
                    loading={isLoading}
                  >
                    Kirim
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

export default withAuth(Onboarding);
