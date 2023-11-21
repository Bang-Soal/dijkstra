"use client";

// libs
import { Provider } from "jotai";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
