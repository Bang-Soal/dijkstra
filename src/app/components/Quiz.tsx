// assets
import heroBgMesh from "@/public/hero-bg-mesh.webp";
import heroMaskBottom from "@/public/hero-mask-bottom.svg";
import heroMaskTop from "@/public/hero-mask-top.svg";

// components
import Iconify from "@components/Iconify";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

// libs
import { ArcElement, Chart as ChartJS } from "chart.js";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default function Quiz() {
  const [remainingTime, setRemainingTime] = useState(30);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    // Clean up the interval on unmount or when isInView changes
    return () => clearInterval(timer);
  }, [isInView]);

  const remainingPercentage = (remainingTime / 30) * 100;
  const data = {
    datasets: [
      {
        data: [remainingPercentage, 100 - remainingPercentage],
        backgroundColor: ["#34D399", "#E5E7EB"],
        borderRadius: 9999,
        cutout: "80%",
        circumference: 270,
        rotation: 225,
      },
    ],
  };

  return (
    <div className="relative flex w-full gap-10 py-8 pl-20" ref={ref}>
      <div className="flex basis-[30%] flex-col justify-center gap-4 pb-16 pt-20">
        <h2 className="text-3xl font-semibold text-white">
          The largest bank of UTBK questions EVER
        </h2>
        <p className="text-emerald-200">
          Bang Soal menggunakan soal asli UTBK untuk menyediakan soal-soal yang
          menggambarkan blah blah blah
        </p>
      </div>
      <div className="flex basis-[70%] items-center">
        <div className="z-10 -mr-8 h-fit rounded-2xl border border-surface-100/30 bg-surface-100/40 p-2 shadow-xl backdrop-blur-2xl">
          <div className="rounded-lg bg-emerald-200 px-2 py-5 text-4xl text-emerald-800">
            <Iconify icon="ph:brain-duotone" />
          </div>
          <div className="rounded-lg px-2 py-5 text-4xl text-emerald-800 hover:bg-white/20">
            <Iconify icon="ph:math-operations-bold" />
          </div>
          <div className="rounded-lg px-2 py-5 text-4xl text-emerald-800 hover:bg-white/20">
            <Iconify icon="ph:lightbulb-filament-duotone" />
          </div>
          <div className="rounded-lg px-2 py-5 text-4xl text-emerald-800 hover:bg-white/20">
            <Iconify icon="ph:book-open-text-duotone" />
          </div>
        </div>
        <div className="to grow rounded-l-3xl bg-surface-300/20 bg-gradient-to-br from-surface-300/60 py-3 pl-3 backdrop-blur-2xl">
          <div className="flex gap-5 rounded-l-xl bg-surface-100 px-12 py-8 shadow-lg">
            <div className="flex flex-none basis-2/3 flex-col gap-3">
              <h3 className="text-2xl font-semibold text-content-100">
                Penalaran Umum
              </h3>
              <p className="font-medium text-content-300">
                Semua sinden pandai menari tradisional. Sinden yang bernama
                Wening tidak dapat menari tradisional di panggung.
              </p>
              <div className="flex flex-col gap-2 pt-3">
                <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-medium text-content-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-bold text-content-100">
                    A
                  </div>
                  Wening bukan sinden panggung.
                </div>
                <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-medium text-content-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-bold text-content-100">
                    B
                  </div>
                  Wening adalah sinden sampingan.
                </div>
                <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-medium text-content-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-bold text-content-100">
                    C
                  </div>
                  Wening adalah sinden amatir.
                </div>
                <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-medium text-content-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-bold text-content-100">
                    D
                  </div>
                  Wening tidak pandai menari.
                </div>
                <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-medium text-content-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-bold text-content-100">
                    E
                  </div>
                  Wening bukan sinden, tetapi penari.
                </div>
              </div>
            </div>
            <div className="flex flex-none basis-1/3 flex-col items-center">
              <div className="relative flex h-40 w-full items-center justify-center">
                <Doughnut data={data} />
              </div>
              <div className="-mt-24 flex flex-col items-center gap-3 text-emerald-900">
                {remainingTime === 0 ? (
                  <Iconify icon="ph:timer-bold" className="text-5xl" />
                ) : (
                  <p className="text-5xl font-bold">{remainingTime}</p>
                )}
                <span className="w-16 text-center font-medium">
                  {remainingTime === 0 ? "waktu habis!" : "detik"}
                </span>
              </div>
              {remainingTime === 0 ? (
                <div className="mt-3 flex flex-col gap-1 rounded-lg bg-surface-200 p-3 text-sm text-content-300">
                  <div className="flex items-center gap-1 text-base font-medium text-content-200">
                    <Iconify icon="ph:info-bold" />
                    Pembahasan
                  </div>
                  Semua sinden pandai menari tradisional. Sinden yang bernama
                  Wening tidak dapat menari tradisional di panggung. Jadi,
                  Wening tidak pandai menari.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
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
