import type { Metadata } from "next";
import { Onboarding } from "./Onboarding";

export const metadata: Metadata = {
  title: "Bang Soal",
  description: "Onboarding",
};

export default function OnboardPage() {
  return (
    <div className="h-screen">
      <Onboarding />
    </div>
  );
}
