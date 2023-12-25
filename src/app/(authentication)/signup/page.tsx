import type { Metadata } from "next";
import { AuthenticationContainer } from "./AuthenticationContainer";

export const metadata: Metadata = {
  title: "Bang Soal",
  description: "Authentication",
};

export default function SignupPage() {
  return <AuthenticationContainer />;
}
