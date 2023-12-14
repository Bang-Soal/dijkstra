// component
import Logo from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";

// libs
import Link from "next/link";

// utils
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 p-4 lg:flex-row">
      <div className="flex grow flex-col justify-center gap-6 rounded-2xl bg-[url('/bg-mesh-horizontal.webp')] bg-center p-10 lg:w-80 lg:grow-0">
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
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="flex flex-row items-center justify-between gap-5 sm:justify-normal lg:flex-col">
            <div className="flex items-center gap-2 text-xl/8 font-600 text-white">
              <Logo
                className="h-8 w-8"
                stroke="stroke-white"
                fill="fill-white"
              />
              BangSoal
            </div>
            <div className="hidden h-0.5 grow rounded-full bg-gray-700 xs:block lg:hidden" />
            <div className="flex justify-center">
              <Link
                href="https://www.instagram.com/bangsoal.co.id"
                className="group flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-700 hover:shadow-highlight"
              >
                <i className="i-bi-instagram h-5 w-5 text-gray-300 group-hover:text-white" />
              </Link>
              <Link
                href="https://x.com/bangsoal_co_id"
                className="group flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-700 hover:shadow-highlight"
              >
                <i className="i-bi-twitter-x h-5 w-5 text-gray-300 group-hover:text-white" />
              </Link>
              <Link
                href="https://www.tiktok.com/@bangsoal.co.id"
                className="group flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-700 hover:shadow-highlight"
              >
                <i className="i-bi-tiktok h-5 w-5 text-gray-300 group-hover:text-white" />
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                  href="https://chat.whatsapp.com/K9FbxphpmSx4DXVuNio5v2"
                  className={cn(buttonVariants({ variant: "link" }), "")}
                >
                  Grup WA
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="font-600 text-gray-300">&copy; 2023 BangSoal</p>
      </div>
    </footer>
  );
}
