// libs
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leaderboard | Bang Soal",
  description: "Catatan pribadi dan publik",
};

export default function Leaderboard() {
  return (
    <main>
      <div className="-mt-16 bg-[url('/bg-mesh-hero.webp')] pt-32">
        <div className="flex flex-col gap-3 px-20">
          <h1 className="text-3xl font-600 text-surface-100">Leaderboard</h1>
          <div className="flex rounded-xl bg-emerald-900/30 p-10"></div>
        </div>
        <div className="flex flex-col pt-10">
          <Image src="/curve-bottom.svg" alt="" width={1440} height={57} />
        </div>
      </div>
    </main>
  );
}
