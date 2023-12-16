// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MeshGradient from "@/components/MeshGradient";
import Logo from "@/components/Logo";

// libs
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Langganan | BangSoal",
  description:
    "BangSoal merupakan platform terbaik untuk persiapan UTBK dan ujian mandiri!",
};

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-stretch gap-20 px-5 py-20 sm:px-10 lg:px-20">
      <div className="flex flex-col gap-5 pt-20">
        <h1 className="text-center text-4xl font-600 text-content-100 lg:text-5xl">
          Satu layanan, belajar sepuasnya
        </h1>
        <p className="text-balance text-center font-500 text-content-300">
          Dapatkan akses ke seluruh fitur BangSoal dengan satu paket yang
          terjangkau!
        </p>
      </div>
      <Tabs
        defaultValue="setia"
        className="flex w-full max-w-screen-md flex-col items-center self-center"
      >
        <TabsContent
          value="pemula"
          className="w-[80vw] max-w-md rounded-xl border-4 border-surface-100 bg-gradient-to-br from-surface-200 to-surface-300 p-4 shadow-2xl ring-1 ring-surface-300"
        >
          <div className="flex flex-col gap-5 text-content-300">
            <div className="flex justify-between">
              <h3 className="text-center text-xl font-500">Pelajar Pemula</h3>
              <Logo
                className="h-8 w-8"
                stroke="stroke-gray-800"
                fill="fill-gray-800"
              />
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <h2 className="text-4xl font-700 text-content-100 lg:text-5xl">
                Rp20.000
              </h2>
              <p className="shrink-0 text-xl font-700 opacity-70">/ bulan</p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-8">
              <p className="text-xl font-600 sm:text-3xl">x1 bulan</p>
              <div className="w-fit rounded-full border border-surface-300 bg-surface-200 px-5 py-1 text-sm sm:text-base">
                total Rp20.000
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="setia"
          className="w-[80vw] max-w-md rounded-xl bg-[url('/bg-mesh-horizontal.webp')] bg-cover bg-center p-5 shadow-2xl"
        >
          <div className="flex flex-col gap-5 text-emerald-700 mix-blend-color-burn">
            <div className="flex justify-between">
              <h3 className="text-center text-xl font-500">Pelajar Setia</h3>
              <Logo
                className="h-8 w-8"
                stroke="stroke-emerald-600"
                fill="fill-emerald-600"
              />
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <h2 className="text-4xl font-700 lg:text-5xl">Rp18.000</h2>
              <p className="shrink-0 text-xl font-700 opacity-70">/ bulan</p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-8">
              <p className="text-xl font-600 sm:text-3xl">x3 bulan</p>
              <div className="w-fit rounded-full border border-surface-400 bg-surface-300 px-5 py-1 text-sm sm:text-base">
                total <span className="line-through">Rp60.000</span> Rp54.000
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="ambis"
          forceMount
          className="relative w-[80vw] max-w-md  overflow-hidden rounded-xl p-5 shadow-2xl data-[state=inactive]:hidden"
        >
          <MeshGradient colors={["#34d399", "#5eead4", "#3b82f6", "#c4b5fd"]} />
          <div className="flex flex-col gap-5 text-gray-700 mix-blend-color-burn">
            <div className="flex justify-between">
              <h3 className="text-center text-xl font-500">Pelajar Ambis</h3>
              <Logo
                className="h-8 w-8"
                stroke="stroke-gray-800"
                fill="fill-gray-800"
              />
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <h2 className="text-4xl font-700 lg:text-5xl">Rp16.000</h2>
              <p className="shrink-0 text-xl font-700 opacity-70">/ bulan</p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-8">
              <p className="text-xl font-600 sm:text-3xl">x6 bulan</p>
              <div className="w-fit rounded-full border border-surface-400 bg-surface-300 px-5 py-1 text-sm sm:text-base">
                total <span className="line-through">Rp120.000</span> Rp96.000
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsList className="mt-10 flex w-full children:flex-1">
          <TabsTrigger value="pemula" className="relative">
            1 bulan
          </TabsTrigger>
          <TabsTrigger value="setia" className="relative">
            3 bulan
            <div className="absolute -right-3 -top-5 z-10 flex h-12 w-12 rotate-12 items-center justify-center text-xs font-700 text-emerald-600">
              <i className="i-ph-seal-duotone absolute h-full w-full" />
              <p>-10%</p>
            </div>
          </TabsTrigger>
          <TabsTrigger value="ambis" className="relative">
            6 bulan
            <div className="absolute -right-3 -top-5 z-10 flex h-12 w-12 rotate-12 items-center justify-center text-xs font-700 text-emerald-600">
              <i className="i-ph-seal-duotone absolute h-full w-full" />
              <p>-20%</p>
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <section className="flex max-w-screen-xl flex-col gap-10 self-center rounded-xl border-4 border-surface-100 bg-gray-50 p-10 outline outline-1 outline-surface-300 lg:flex-row">
        <div className="flex flex-col items-center gap-8">
          <p className="font-500 text-content-200">
            Daripada beli buku bank soal berat dan besar yang harganya ratusan
            ribu rupiah, lebih baik gunakan BangSoal! Satu paket ini memberikan
            akses penuh ke semua fitur belajar yang kamu butuhkan untuk
            persiapan seleksi PTN impianmu.
          </p>
          <div className="h-0.5 w-[90%] rounded-full bg-surface-300" />
          <div className="flex w-full flex-col gap-5 rounded-lg bg-[url('/bg-mesh-horizontal.webp')] bg-cover bg-center p-5 pb-0 @container">
            <div className="flex flex-col items-center justify-between gap-3 @sm:flex-row">
              <p className="font-600 text-white">
                Masi ragu-ragu? Cobain dulu aja!
              </p>
              <Link
                href="/latihan-soal"
                className="group flex w-full items-center justify-center gap-1 rounded-lg bg-emerald-900/30 px-4 py-2 text-sm font-500 text-emerald-100 transition-colors hover:text-white @sm:w-auto"
              >
                <p>Latihan soal</p>
                <i className="i-ph-arrow-right-bold h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex shrink-0 flex-col gap-4">
              <ul className="flex flex-col gap-2 text-emerald-200 gradient-mask-b-0">
                <li className="flex items-center gap-2 text-white">
                  <i className="i-ph-seal-check-duotone h-5 w-5" />
                  <p>Ribuan soal asli UTBK dan ujian mandiri</p>
                </li>
                <li className="flex items-center gap-2">
                  <i className="i-ph-minus-circle-duotone h-5 w-5" />
                  <p>Penjelasan soal yang lengkap dan mudah dipahami</p>
                </li>
                <li className="flex items-center gap-2">
                  <i className="i-ph-minus-circle-duotone h-5 w-5" />
                  <p>Try out UTBK berwaktu dengan penilaian</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-4">
          <ul className="flex flex-col gap-2 text-content-300">
            <li className="flex items-center gap-2">
              <i className="i-ph-seal-check-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Ribuan soal asli UTBK dan ujian mandiri</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-question-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Penjelasan soal yang lengkap dan mudah dipahami</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-timer-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Try out UTBK berwaktu dengan penilaian</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-chart-line-up-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Analisis performa belajar</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-trophy-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Leaderboard peringkat nilai siswa</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-note-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Forum berbagi catatan dan coretan</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-users-three-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Komunitas belajar barang</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-cards-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Flash cards harian</p>
            </li>
            <li className="flex items-center gap-2">
              <i className="i-ph-printer-duotone h-5 w-5 shrink-0 text-emerald-600" />
              <p>Export PDF dan cetak soal</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
