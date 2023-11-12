import dayjs from "dayjs";
import Image from "next/image";

const UTBK_DATE = dayjs("2024-05-06");
const daysLeft = UTBK_DATE.diff(dayjs(), "day");

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col items-center gap-5 py-40">
        <h2 className="animate-in ease-out-expo fade-in zoom-in text-3xl/snug font-medium text-content-300 duration-1000">
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
        <h1 className="animate-in ease-out-expo fade-in zoom-in text-7xl font-bold delay-200 duration-1000">
          Apakah{" "}
          <span className="inline-flex items-center gap-1">
            <Image
              src={"/animated-emoji-point.webp"}
              alt={"Animated emoji of hand pointing at user"}
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <Image
              src={"/animated-emoji-raised-eyebrow.webp"}
              alt={"Animated emoji of face raising eyebrow"}
              width={64}
              height={64}
              className="h-16 w-16"
            />
          </span>{" "}
          sudah{" "}
          <span className="relative">
            <span
              className="absolute -inset-x-4 -bottom-8 -z-10"
              aria-hidden="true"
            >
              <Image
                src={"/scribble.svg"}
                alt={"scribble highlight"}
                width={180}
                height={48}
                className=""
              />
            </span>
            <span className="relative">siap?</span>
          </span>
        </h1>
        <div className="animate-in ease-out-expo fade-in zoom-in flex gap-3 delay-500 duration-1000">
          <button className="h-10 rounded-full bg-emerald-400 px-5">
            <p className="font-medium text-white">Ajarin puh</p>
          </button>
          <button className="h-10 rounded-full border-2 border-surface-300 px-5">
            <p className="font-medium text-content-200">Sudah dong</p>
          </button>
        </div>
      </div>
      <div>quiz</div>
      <Image
        src={"/hero-bg.svg"}
        alt={""}
        width={1440}
        height={525}
        className="absolute inset-x-0 top-20 -z-10"
      />
    </section>
  );
}
