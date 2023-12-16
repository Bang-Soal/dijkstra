"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Onboarding } from "./Onboarding";
import { SignupForm } from "./SignupForm";

export const Authentication = () => {
  const searchParams = useSearchParams();
  const onboard = searchParams.get("onboard");

  return (
    <div className="h-screen">
      {!!onboard ? <Onboarding /> : <SignupForm />}
    </div>
  );
};
