"use client";

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
    <header
      className={`fixed w-full transition-all duration-700 ${
        atTop ? "top-0 h-20 px-0" : "top-3 h-12 px-24"
      }`}
    >
      <nav
        className={`flex h-full w-full items-center justify-between border-surface-400/50 bg-surface-100/60 backdrop-blur-md transition-all
        duration-500 ${
          atTop ? "rounded-none border-b px-20" : "border rounded-3xl px-10"
        }`}
      >
        nav
      </nav>
    </header>
  );
}
