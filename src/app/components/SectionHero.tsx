// components
import HeroFooter from "./HeroFooter";

// libs
import dayjs from "dayjs";
import Image from "next/image";

const UTBK_DATE = dayjs("2024-05-06");
const daysLeft = UTBK_DATE.diff(dayjs(), "day");

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <div className="relative flex w-full flex-col items-center gap-5 px-20 py-40">
        <h2 className="text-balance text-center text-3xl/snug font-500 text-content-300">
          UTBK hanya{" "}
          <span className="inline-flex items-center gap-1">
            <span className="from-emeral-100 rounded-md bg-gradient-to-b from-emerald-100 to-emerald-200 px-3 py-1 text-emerald-700">
              {daysLeft}
            </span>
            <span className="from-emeral-100 rounded-md bg-gradient-to-b from-emerald-100 to-emerald-200 px-3 py-1 text-emerald-700">
              hari
            </span>
          </span>{" "}
          lagi.
        </h2>
        <h1 className="text-center text-7xl font-700">
          Apakah{" "}
          <span className="inline-flex items-center gap-1">
            <Image
              src={"/animated-emoji-point.webp"}
              alt={"Animated emoji of hand pointing at user"}
              width={64}
              height={64}
              loading="eager"
              className="h-16 w-16"
            />
            <Image
              src={"/animated-emoji-raised-eyebrow.webp"}
              alt={"Animated emoji of face raising eyebrow"}
              width={64}
              height={64}
              loading="eager"
              className="h-16 w-16"
            />
          </span>{" "}
          sudah{" "}
          <span className="relative">
            <span className="absolute -inset-x-4 -bottom-8" aria-hidden="true">
              <Image
                src={"/scribble.svg"}
                alt={"scribble highlight"}
                width={180}
                height={48}
                loading="eager"
                className=""
              />
            </span>
            <span className="relative">siap?</span>
          </span>
        </h1>
        <div className="flex gap-3">
          <button className="h-10 rounded-full bg-emerald-400 px-5">
            <p className="font-500 text-white">Ajarin puh</p>
          </button>
          <button className="h-10 rounded-full border-2 border-surface-300 px-5">
            <p className="font-500 text-content-200">Sudah dong</p>
          </button>
        </div>
        <Image
          src={"/hero-bg.svg"}
          alt={""}
          width={1440}
          height={525}
          loading="eager"
          className="absolute inset-x-0 top-20 -z-10"
        />
      </div>
      <HeroFooter />
    </section>
  );
}
