"use client";

// libs
import Image from "next/image";
import { useEffect, useState } from "react";

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

  return (
    <nav
      className={`fixed flex w-full items-stretch transition-all duration-700 ${
        atTop ? "top-0 h-20 gap-0 px-0" : "top-3 h-12 gap-3 px-24"
      }`}
    >
      <div
        className={`flex h-full grow items-center justify-between border-surface-400/50 bg-surface-100/60 backdrop-blur-lg transition-all duration-500 ${
          atTop ? "rounded-none px-20 py-4" : "rounded-3xl border px-10 py-1"
        }`}
      >
        <div className="flex items-center gap-2">
          <Image src={"/logo-colored.svg"} alt={""} width={32} height={32} />
          <p className="font-bold">Bang Soal</p>
        </div>
      </div>
      <div
        className={`flex items-center transition-all duration-700 ${
          atTop && "border-surface-400/50 pr-20"
        }`}
      >
        <button className="h-12 rounded-full bg-emerald-400 px-5">
          <p className="text-sm font-medium text-white">Ajarin puh</p>
        </button>
      </div>
    </nav>
  );
}
