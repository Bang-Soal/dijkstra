// assets
import heroBgMesh from "@public/hero-bg-mesh.webp";
import heroMaskBottom from "@public/hero-mask-bottom.svg";
import heroMaskTop from "@public/hero-mask-top.svg";

// components
import Quiz from "./Quiz";

// libs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function HeroFooter() {
  return (
    <div className="relative flex w-full flex-col gap-10 py-8 pl-5 sm:pl-10 md:flex-row lg:pl-20">
      <div className="flex basis-[30%] flex-col justify-center gap-4 pr-5 pt-20 md:pb-16 md:pr-0">
        <h2 className="text-center text-3xl font-600 text-white md:text-left">
          Bank soal terlengkap untuk kamu yang terambis
        </h2>
        <p className="text-center text-emerald-200 md:text-left">
          Tingkatkan latihanmu dengan ribuan soal asli UTBK, SNBT, SIMAK UI, dan
          ujian mandiri PTN lainnya.
        </p>
      </div>
      <Tabs
        defaultValue="tab1"
        orientation="vertical"
        className="flex basis-[70%] items-center"
      >
        <TabsList
          aria-label="UTBK category tabs"
          className="z-10 -mr-8 flex shrink-0 flex-col rounded-2xl border border-surface-100/30 bg-surface-100/40 p-2 shadow-xl backdrop-blur-2xl children:rounded-lg children:px-2 children:py-5 children:text-emerald-800 children:transition-colors"
        >
          <TabsTrigger
            value="tab1"
            className="hover:bg-emerald-700/10 data-[state=active]:cursor-default data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <i className="i-ph-brain-duotone h-9 w-9" />
          </TabsTrigger>
          <TabsTrigger
            value="tab2"
            className="hover:bg-emerald-700/10 data-[state=active]:cursor-default data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <i className="i-ph-math-operations-bold h-9 w-9" />
          </TabsTrigger>
          <TabsTrigger
            value="tab3"
            className="hover:bg-emerald-700/10 data-[state=active]:cursor-default data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <i className="i-ph-lightbulb-filament-duotone h-9 w-9" />
          </TabsTrigger>
          <TabsTrigger
            value="tab4"
            className="hover:bg-emerald-700/10 data-[state=active]:cursor-default data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <i className="i-ph-book-open-text-duotone h-9 w-9" />
          </TabsTrigger>
        </TabsList>
        <div className="grow rounded-l-3xl bg-gradient-to-br from-surface-300/60 to-surface-300/20 py-3 pl-3 backdrop-blur-2xl">
          <TabsContent value="tab1">
            <Quiz />
          </TabsContent>
          <TabsContent value="tab2">
            <Quiz />
          </TabsContent>
          <TabsContent value="tab3">
            <Quiz />
          </TabsContent>
          <TabsContent value="tab4">
            <Quiz />
          </TabsContent>
        </div>
      </Tabs>
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image src={heroBgMesh} alt={""} className="h-full w-full" />
        <Image
          src={heroMaskTop}
          alt={""}
          className="absolute inset-x-0 top-0"
        />
        <Image
          src={heroMaskBottom}
          alt={""}
          className="absolute inset-x-0 bottom-0"
        />
      </div>
    </div>
  );
}
