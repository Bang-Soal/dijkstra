// assets
import heroBgMesh from "@/public/hero-bg-mesh.webp";
import heroMaskBottom from "@/public/hero-mask-bottom.svg";
import heroMaskTop from "@/public/hero-mask-top.svg";

// components
import Iconify from "@components/Iconify";
import Quiz from "./Quiz";

// libs
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";

export default function HeroFooter() {
  return (
    <div className="relative flex w-full gap-10 py-8 pl-20">
      <div className="flex basis-[30%] flex-col justify-center gap-4 pb-16 pt-20">
        <h2 className="text-3xl font-600 text-white">
          The largest bank of UTBK questions EVER
        </h2>
        <p className="text-emerald-200">
          Bang Soal menggunakan soal asli UTBK untuk menyediakan soal-soal yang
          menggambarkan blah blah blah
        </p>
      </div>
      <Tabs.Root
        defaultValue="tab1"
        orientation="vertical"
        className="flex basis-[70%] items-center"
      >
        <Tabs.List
          aria-label="UTBK category tabs"
          className="z-10 -mr-8 flex shrink-0 flex-col rounded-2xl border border-surface-100/30 bg-surface-100/40 p-2 shadow-xl backdrop-blur-2xl children:rounded-lg children:px-2 children:py-5 children:text-4xl children:text-emerald-800 children:transition-colors"
        >
          <Tabs.Trigger
            value="tab1"
            className="hover:bg-emerald-700/10 data-[state=active]:bg-emerald-200"
          >
            <Iconify icon="ph:brain-duotone" />
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            className="hover:bg-emerald-700/10 data-[state=active]:bg-emerald-200"
          >
            <Iconify icon="ph:math-operations-bold" />
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab3"
            className="hover:bg-emerald-700/10 data-[state=active]:bg-emerald-200"
          >
            <Iconify icon="ph:lightbulb-filament-duotone" />
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab4"
            className="hover:bg-emerald-700/10 data-[state=active]:bg-emerald-200"
          >
            <Iconify icon="ph:book-open-text-duotone" />
          </Tabs.Trigger>
        </Tabs.List>
        <div className="to grow rounded-l-3xl bg-surface-300/20 bg-gradient-to-br from-surface-300/60 py-3 pl-3 backdrop-blur-2xl">
          <Tabs.Content value="tab1">
            <Quiz />
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <Quiz />
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <Quiz />
          </Tabs.Content>
          <Tabs.Content value="tab4">
            <Quiz />
          </Tabs.Content>
        </div>
      </Tabs.Root>
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
