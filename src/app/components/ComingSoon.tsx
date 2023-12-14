"use client";

// libs
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  const path = usePathname();

  useEffect(() => {
    path !== "/" && document.body.classList.add("h-screen", "overflow-hidden");
    path === "/" &&
      document.body.classList.remove("h-screen", "overflow-hidden");
  }, [path]);

  if (path === "/") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center bg-surface-100/20 px-10 backdrop-blur-2xl">
      <Image
        src="/illustrations/empty-state-under-construction.svg"
        alt="Under Construction"
        width={400}
        height={260}
        loading="eager"
      />
      <div className="flex flex-col gap-2 py-5">
        <h1 className="text-center text-4xl font-bold">Sabar dulu bang!</h1>
        <p className="text-balance max-w-lg text-center text-content-300">
          Fitur ini sedang dibuat oleh abang developer kami! Sambil menunggu,
          ayo join grup WA biar ga FOMO.
        </p>
        <div className="flex flex-col justify-center gap-2 pt-5 sm:flex-row">
          <Link
            href="https://chat.whatsapp.com/K9FbxphpmSx4DXVuNio5v2"
            className="flex items-center justify-center gap-1.5 rounded-full bg-emerald-400 px-5 py-2 font-500 text-white transition-transform hover:scale-105"
          >
            <i className="i-bi-whatsapp h-4 w-4" />
            <p>Masuk grup WA</p>
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-1 rounded-full border border-surface-400 bg-surface-200 px-5 py-2 font-500 text-content-200 transition-transform hover:scale-105"
          >
            <p>Balik ke beranda</p>
          </Link>
        </div>
      </div>
      <div className="absolute top-5 -rotate-6 bg-[url('/bg-mesh-horizontal.webp')] bg-cover bg-center shadow-md">
        <div className="flex animate-infinite-track">
          {[...Array(20)].map((e, i) => (
            <p
              key={i}
              className="w-40 shrink-0 py-1 text-center text-sm font-600 text-white/70"
            >
              coming soon
            </p>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 rotate-3 bg-[url('/bg-mesh-horizontal.webp')] bg-cover bg-center shadow-md">
        <div className="flex animate-infinite-track">
          {[...Array(20)].map((e, i) => (
            <p
              key={i}
              className="w-40 shrink-0 py-1 text-center text-sm font-600 text-white/70"
            >
              coming soon
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
