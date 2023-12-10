// component
import Logo from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";

// libs
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 p-4 lg:flex-row">
      <div className="flex grow flex-col justify-center gap-6 rounded-2xl bg-[url('/bg-mesh-hero.webp')] bg-center p-10 lg:w-80 lg:grow-0">
        <p className="text-2xl font-600 text-white">
          Ambiskan persiapan UTBK-mu sekarang
        </p>
        <Link
          href=""
          className="inline-flex self-start rounded-lg bg-emerald-900/30 px-5 py-3 font-600 text-white hover:bg-emerald-900/60"
        >
          Mulai sekarang
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-10 rounded-2xl bg-gray-800 p-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-1 gap-1 text-xl/8 font-600 text-white">
            <Logo className="h-8 w-8" stroke="stroke-white" fill="fill-white" />
            BangSoal
          </div>
          <div className="flex flex-1 flex-col gap-2 text-xl font-600 text-white">
            Belajar
            <div className="flex flex-col items-start children:p-0 children:text-surface-400">
              <Link
                href="/latihan-soal"
                className={cn(buttonVariants({ variant: "link" }), "")}
              >
                Latihan
              </Link>
              <Link
                href="/try-out"
                className={cn(buttonVariants({ variant: "link" }), "")}
              >
                Try out
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-2 text-xl font-600 text-white">
            Komunitas
            <div className="flex flex-col items-start children:p-0 children:text-surface-400">
              <Link
                href="/bang-catatan"
                className={cn(buttonVariants({ variant: "link" }), "")}
              >
                Bang Catatan
              </Link>
              <Link
                href="/leaderboard"
                className={cn(buttonVariants({ variant: "link" }), "")}
              >
                Leaderboard
              </Link>
              <Link
                href=""
                className={cn(buttonVariants({ variant: "link" }), "")}
              >
                Grup WA
              </Link>
            </div>
          </div>
        </div>
        <p className="font-600 text-gray-300">&copy; 2023 BangSoal</p>
      </div>
    </footer>
  );
}
