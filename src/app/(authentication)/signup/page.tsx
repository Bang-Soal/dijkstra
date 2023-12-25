import type { Metadata } from "next";
import { AuthenticationContainer } from "../AuthenticationContainer";

export const metadata: Metadata = {
  title: "BangSoal",
  description: "Signup",
};

export default function SignupPage() {
  return <AuthenticationContainer />;
}
