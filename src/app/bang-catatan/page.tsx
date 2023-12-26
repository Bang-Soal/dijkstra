// components
import Iconify from "@/components/Iconify";
import Filters from "./components/Filters";

// libs
import { Metadata } from "next";
import Link from "next/link";
import BangCatatanList from "./components/BangCatatanList";

export const metadata: Metadata = {
  title: "Bang Catatan | BangSoal",
  description: "Catatan pribadi dan publik",
};

export default function BangCatatan() {
  return (
    <main className="flex min-h-screen flex-col items-stretch gap-8 px-5 pb-20 sm:px-10 xl:px-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 py-10">
          <h1 className="text-3xl font-700 text-content-100">Bang Catatan</h1>
          <h2 className="text-xl font-500 text-content-300">
            Temukan dan bagikan berbagai sumber belajar bersama Komunitas Bang
            Soal!
          </h2>
        </div>
        <Link
          href="/bang-catatan/add"
          className="flex h-10 items-center justify-center rounded-full bg-emerald-400 px-4 font-600 text-surface-100"
        >
          Bagi catatan
        </Link>
      </div>
      <div className="flex items-center gap-3 text-content-300">
        <div className="relative">
          <Iconify
            icon="ph:magnifying-glass-bold"
            className="absolute left-5 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Cari catatan"
            className="flex h-10 w-80 items-center rounded-full border-2 border-surface-300 bg-gray-50 pl-11 font-500"
          />
        </div>
        <Filters />
        <div className="h-0.5 grow rounded-full bg-surface-200" />
      </div>
      <BangCatatanList />
    </main>
  );
}
