"use client";

// libs
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <motion.nav
      className={`fixed z-20 flex w-full items-stretch duration-700 ${
        atTop ? "top-0 h-20 gap-0 px-0" : "top-3 h-12 gap-3 px-24"
      }`}
      layout
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex h-full grow items-center justify-between border-surface-400/50 bg-surface-100/60 backdrop-blur-lg duration-500 ${
          atTop ? "rounded-none px-20 py-4" : "rounded-3xl border px-10 py-1"
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
          atTop && "border-surface-400/50 pr-20"
        }`}
      >
        <button className="h-12 rounded-full bg-emerald-400 px-5">
          <p className="text-sm font-500 text-white">Ajarin puh</p>
        </button>
      </div>
    </motion.nav>
  );
}
