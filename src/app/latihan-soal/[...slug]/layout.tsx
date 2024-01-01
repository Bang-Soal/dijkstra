"use client";
import { MathpixMarkdownModel as MM } from "mathpix-markdown-it";
import { redirect, useParams } from "next/navigation";
import { useEffect } from "react";
import withAuth from "../../components/withAuth";
import SoalAside from "../components/SoalAside";
import { LatihanSoalProvider } from "../context";

function LatihanSoalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) {
      redirect("/latihan-soal/pu");
    }

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
      <div className="flex w-full flex-row lg:h-screen">
        <SoalAside />
        <div className="grow lg:overflow-y-scroll">{children}</div>
      </div>
    </LatihanSoalProvider>
  );
}

export default withAuth(LatihanSoalLayout);
