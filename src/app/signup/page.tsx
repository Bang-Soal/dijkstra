import type { Metadata } from "next";
import { Authentication } from "./Authentication";

export const metadata: Metadata = {
  title: "Bang Soal",
  description: "Authentication",
};

export default function SignupPage() {
  return <Authentication />;
}
