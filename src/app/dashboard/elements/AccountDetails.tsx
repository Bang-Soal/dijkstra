"use client";
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
import { cn } from "@/lib/utils";
import { RootState, useAppSelector } from "@/redux/store";
import { EditAccountFormSchema } from "@/types/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlanCardVariant } from "../style";
import { ImageInput } from "./ImageInput";

export const AccountDetails = () => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const { profile } = useAppSelector((state: RootState) => state.user);

  const form = useForm<z.infer<typeof EditAccountFormSchema>>({
    resolver: zodResolver(EditAccountFormSchema),
    defaultValues: {
      full_name: profile?.full_name,
      highschool: profile?.highschool,
      phone_number: profile?.phone_number.replace("+62", "0"),
    },
  });
  const { handleSubmit } = form;

  const onSubmitEdit = async (
    values: z.infer<typeof EditAccountFormSchema>,
  ) => {
    console.log(values);
    setIsEdit(false);
  };
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className={cn(isEdit ? "text-emerald-600" : "text-gray-600")}>
          {isEdit ? (
            <button
              onClick={handleSubmit(onSubmitEdit)}
              className="flex w-full flex-row items-center justify-end gap-3"
            >
              <CheckIcon />
              <p> Save changes</p>
            </button>
          ) : (
            <button
              onClick={() => {
                setIsEdit(true);
              }}
              className="flex w-full flex-row items-center justify-end gap-3"
            >
              <i className="i-ph-pencil-simple h-5 w-5 shrink-0 text-gray-600" />
              <p>Edit profile</p>
            </button>
          )}
        </div>
      </div>
      <div className="flex grid-cols-3 flex-col gap-3 py-3 md:grid md:items-start">
        <div>
          {/* image field */}
          {!isEdit ? (
            <Image
              src={profilePicture ?? "/icons/User.svg"}
              width={160}
              height={160}
              alt="Thumbnail"
              className={cn(
                "h-44 w-44 shrink-0 rounded-full bg-slate-200 object-cover",
                !profilePicture && "p-6",
              )}
            />
          ) : (
            <ImageInput
              className="-ml-16"
              imageSrc={profilePicture}
              setImageSrc={setProfilePicture}
            />
          )}
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="flex flex-col gap-4">
            <Form {...form}>
              <form className="flex w-full flex-col gap-5">
                <div className="-ml-4 mr-1 md:-ml-4 md:mr-2">
                  <FormField
                    disabled={!isEdit}
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Full Name" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    disabled={!isEdit}
                    control={form.control}
                    name="highschool"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>High School</FormLabel>
                            <Input placeholder="High School" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    disabled={!isEdit}
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <FormLabel>Phone Number</FormLabel>
                            <Input placeholder="Phone Number" {...field} />
                          </>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold">BangSoal Payment Plan</p>
            <div className={cn(PlanCardVariant({ variant: "pemula" }), "w-96")}>
              <div className="flex justify-between">
                <h3 className="text-center text-xl font-500">Pelajar Pemula</h3>
              </div>
              <div
                className={cn("rounded-full border border-gray-300 px-4 py-3")}
              >
                <p>berlaku s/d 23 November 2024</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Upgrade your account to access pembahasan latihan soal and more{" "}
            </p>
            <div>
              <Button
                variant={"bsPrimary"}
                onClick={() => {
                  router.push("/langganan");
                }}
              >
                View Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
