"use client";

// components
import Logo from "@/components/Logo";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

// libs
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// utils
import { cn } from "@/lib/utils";

export default function Nav() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const path = usePathname();

  if (path === "/latihan-soal" || path === "/try-out") {
    return (
      <nav className="sticky top-0 z-20 flex h-16 items-center justify-end bg-surface-100/60 px-20 backdrop-blur-lg">
        <NavMenuDesktop />
        <NavMenuMobile />
      </nav>
    );
  } else {
    return (
      <nav
        className={cn(
          "fixed z-20 flex w-full items-center gap-3 transition-[height,padding,top] duration-700",
          atTop
            ? "top-0 h-20 px-2 sm:px-6 lg:px-16"
            : "top-3 h-12 px-5 sm:px-10 lg:px-20",
        )}
      >
        <div
          className={cn(
            "flex h-full grow items-center justify-between rounded-full border bg-surface-100/60 backdrop-blur-lg transition-[border-color,padding] duration-700",
            atTop
              ? "border-surface-400/0 px-0 py-4"
              : "border-surface-400/50 px-8 py-1",
          )}
        >
          <Link
            className="flex items-center gap-1 font-700 text-content-200"
            href="/"
          >
            <Logo className="h-8 w-8" />
            BangSoal
          </Link>
          <NavMenuDesktop />
          <NavMenuMobile />
        </div>
        <Link
          href="https://chat.whatsapp.com/K9FbxphpmSx4DXVuNio5v2"
          className="hidden h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 text-sm font-500 text-white transition-transform hover:scale-105 lg:flex"
        >
          <i className="i-bi-whatsapp h-4 w-4" />
          <p>Masuk grup WA</p>
        </Link>
      </nav>
    );
  }
}
