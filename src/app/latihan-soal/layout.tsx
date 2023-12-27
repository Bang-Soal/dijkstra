"use client";
import { MathpixMarkdownModel as MM } from "mathpix-markdown-it";
import { useEffect } from "react";
import withAuth from "../components/withAuth";
import SoalAside from "./components/SoalAside";
import { LatihanSoalProvider } from "./context";

function LatihanSoalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    return () => {
      const elStyle = document.getElementById("Mathpix-styles");
      if (!elStyle) {
        const style = document.createElement("style");
        style.setAttribute("id", "Mathpix-styles");
        style.innerHTML = MM.getMathpixFontsStyle() + MM.getMathpixStyle(true);
        document.head.appendChild(style);
      }
    };
  }, []);
  return (
    <LatihanSoalProvider>
      <div className="flex min-h-screen w-full flex-row">
        <SoalAside />
        <div className="grow">{children}</div>
      </div>
    </LatihanSoalProvider>
  );
}

export default withAuth(LatihanSoalLayout);
