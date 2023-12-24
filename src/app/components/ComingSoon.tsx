"use client";

// assets
import rickroll from "@public/rickroll.webp";

// components
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

// libs
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ComingSoon() {
  const path = usePathname();

  useEffect(() => {
    if (path !== "/" && path !== "/langganan") {
      document.body.classList.add("h-screen", "overflow-hidden");
    }
    if (path === "/" || path === "/langganan") {
      document.body.classList.remove("h-screen", "overflow-hidden");
    }
  }, [path]);

  if (path === "/" || path === "/langganan") {
    return null;
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="fixed inset-0 z-50 flex h-screen flex-col items-center justify-center bg-surface-100/70 px-5 backdrop-blur-2xl sm:px-10">
        <Image
          src="/illustrations/empty-state-under-construction.svg"
          alt="Under Construction"
          width={400}
          height={260}
          loading="eager"
          className="w-64 sm:w-80"
        />
        <div className="flex flex-col gap-2 py-5">
          <h1 className="text-center text-3xl font-bold sm:text-4xl">
            Sabar dulu bang!
          </h1>
          <p className="max-w-lg text-balance text-center text-sm text-content-300 sm:text-base">
            Fitur ini akan segera datang! Sambil menunggu, ayo join grup WA
            BangSoal! Dengan join grupnya, kamu akan mendapatkan benefit:
          </p>
          <ul className="flex flex-col gap-2 self-center pt-3 text-sm text-content-300 sm:text-base">
            <li className="flex items-center gap-2">
              <i className="i-ph-book-bookmark-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Latihan drilling soal harian serta pembahasan</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-files-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Latihan soal PDF per topik mata kuliah</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-info-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Info2 terbaru tentang UTBK SNBT</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-users-three-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Komunitas pejuang utbk yang sama2 ngejer PTN</p>
            </li>
          </ul>
          <div className="flex flex-col justify-center gap-2 pt-3 sm:flex-row">
            <Link
              href="https://chat.whatsapp.com/K9FbxphpmSx4DXVuNio5v2"
              className="flex items-center justify-center gap-1.5 rounded-full bg-emerald-400 px-5 py-2 font-500 text-white transition-transform hover:scale-105"
            >
              <i className="i-bi-whatsapp size-4" />
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
        <div className="absolute top-1 -rotate-6 bg-[url('/bg-mesh-horizontal.webp')] bg-cover bg-center shadow-md">
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
        <div className="absolute bottom-0 rotate-3 bg-[url('/bg-mesh-horizontal.webp')] bg-cover bg-center shadow-md">
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
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <Image src={rickroll} alt="Context menu" />
      </ContextMenuContent>
    </ContextMenu>
  );
}
