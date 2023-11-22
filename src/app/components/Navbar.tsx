"use client";

// libs
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

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

  if (path === "/") {
    return (
      <nav
        className={`fixed z-20 flex w-full items-stretch gap-3 transition-[height,padding,top] duration-700 ${
          atTop ? "top-0 h-20 px-20" : "top-3 h-12 px-24"
        }`}
      >
        <div
          className={`flex h-full grow items-center justify-between rounded-full border bg-surface-100/60 backdrop-blur-lg transition-[border-color,padding] duration-500 ${
            atTop
              ? "border-surface-400/0 px-0 py-4"
              : "border-surface-400/50 px-8 py-1"
          }`}
        >
          <Link
            className="flex items-center gap-2 font-700 text-content-200"
            href={"/"}
          >
            <Image src={"/logo-colored.svg"} alt={""} width={32} height={32} />
            Bang Soal
          </Link>
        </div>
        <div
          className={`flex items-center duration-700 ${
            atTop && "border-surface-400/50"
          }`}
        >
          <button className="h-12 rounded-full bg-emerald-400 px-5">
            <p className="text-sm font-500 text-white">Ajarin puh</p>
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="sticky top-0 flex h-16 items-center justify-end border-b border-surface-300 bg-surface-100/60 px-20 backdrop-blur-lg">
        <NavMenu />
      </nav>
    );
  }
}
