// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MeshGradient from "@/components/MeshGradient";
import Logo from "@/components/Logo";

// libs
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | BangSoal",
  description:
    "BangSoal merupakan platform terbaik untuk persiapan UTBK dan ujian mandiri!",
};

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-stretch px-5 py-20">
      <div className="flex flex-col gap-5 px-5 py-20 sm:px-10 lg:px-20">
        <h1 className="text-center text-5xl font-600 text-content-100">
          Satu layanan, belajar sepuasnya
        </h1>
        <p className="text-balance text-center font-500 text-content-300">
          Dapatkan akses ke semua fitur BangSoal dalam satu paket terjangkau!
        </p>
      </div>
      <Tabs
        defaultValue="setia"
        className="flex flex-col items-center px-5 sm:px-10 lg:px-20"
      >
        <TabsContent
          value="pemula"
          className="w-[80%] max-w-md rotate-3 rounded-xl bg-gradient-to-br from-surface-200 to-surface-500 p-5 shadow-xl duration-300 animate-in spin-in-[-3deg] sm:aspect-video"
        >
          <div className="text-gray-700 mix-blend-color-burn">
            <div className="flex justify-between">
              <h3 className="text-center text-xl font-500">Pelajar Pemula</h3>
              <Logo
                className="h-8 w-8"
                stroke="stroke-gray-800"
                fill="fill-gray-800"
              />
            </div>
            <div className="flex flex-col items-center gap-3 pt-5 sm:flex-row">
              <h2 className="text-5xl font-700">Rp20.000</h2>
              <p className="text-xl font-700 opacity-70">/ bulan</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="setia"
          className="w-[80%] max-w-md -rotate-3 rounded-xl bg-[url('/bg-mesh-horizontal.webp')] bg-cover bg-center bg-no-repeat p-5 shadow-xl duration-300 animate-in spin-in-6 sm:aspect-video"
        >
          <div className="text-emerald-700 mix-blend-color-burn">
            <div className="flex justify-between">
              <h3 className="text-center text-xl font-500">Pelajar Setia</h3>
              <Logo
                className="h-8 w-8"
                stroke="stroke-emerald-600"
                fill="fill-emerald-600"
              />
            </div>
            <div className="flex flex-col items-center gap-3 pt-5 sm:flex-row">
              <h2 className="text-5xl font-700">Rp18.000</h2>
              <p className="text-xl font-700 opacity-70">/ bulan</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="ambis"
          forceMount
          className="relative w-[80%] max-w-md rotate-3 overflow-hidden rounded-xl p-5 shadow-xl duration-300 animate-in spin-in-[-3deg] data-[state=inactive]:hidden sm:aspect-video"
        >
          <MeshGradient colors={["#34d399", "#5eead4", "#3b82f6", "#c4b5fd"]} />
          <div className="text-gray-700 mix-blend-color-burn">
            <div className="flex justify-between">
              <h3 className="text-center text-xl font-500">Pelajar Ambis</h3>
              <Logo
                className="h-8 w-8"
                stroke="stroke-gray-800"
                fill="fill-gray-800"
              />
            </div>
            <div className="flex flex-col items-center gap-3 pt-5 sm:flex-row">
              <h2 className="text-5xl font-700">Rp16.000</h2>
              <p className="text-xl font-700 opacity-70">/ bulan</p>
            </div>
          </div>
        </TabsContent>
        <TabsList className="mt-10 flex w-full children:flex-1">
          <TabsTrigger value="pemula" className="relative">
            1 bulan
          </TabsTrigger>
          <TabsTrigger value="setia" className="relative">
            3 bulan
            <div className="absolute -right-3 -top-5 z-10 flex h-12 w-12 rotate-12 items-center justify-center text-xs font-700 text-emerald-800">
              <i className="i-ph-seal-duotone absolute h-full w-full" />
              -10%
            </div>
          </TabsTrigger>
          <TabsTrigger value="ambis" className="relative">
            6 bulan
            <div className="absolute -right-3 -top-5 z-10 flex h-12 w-12 rotate-12 items-center justify-center text-xs font-700 text-emerald-800">
              <i className="i-ph-seal-duotone absolute h-full w-full" />
              -20%
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </main>
  );
}
