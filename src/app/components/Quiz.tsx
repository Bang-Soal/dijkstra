"use client";

// libs
import { ArcElement, Chart as ChartJS } from "chart.js";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default function Quiz() {
  const [remainingTime, setRemainingTime] = useState(30);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

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
    <div className="flex flex-col gap-5 rounded-l-xl bg-surface-100 py-8 pl-12 pr-5 shadow-lg lg:flex-row lg:pr-12">
      <div className="flex flex-none flex-col gap-3 lg:basis-2/3">
        <h3 className="text-2xl font-600 text-content-100">Penalaran Umum</h3>
        <p className="font-500 text-content-300">
          Semua sinden pandai menari tradisional. Sinden yang bernama Wening
          tidak dapat menari tradisional di panggung.
        </p>
        <div className="flex flex-col gap-2 pt-3">
          <div
            className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-500 text-content-200"
            ref={ref}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-700 text-content-100">
              A
            </div>
            Wening bukan sinden panggung.
          </div>
          <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-500 text-content-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-700 text-content-100">
              B
            </div>
            Wening adalah sinden sampingan.
          </div>
          <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-500 text-content-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-700 text-content-100">
              C
            </div>
            Wening adalah sinden amatir.
          </div>
          <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-500 text-content-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-700 text-content-100">
              D
            </div>
            Wening tidak pandai menari.
          </div>
          <div className="flex items-center gap-2 rounded-md bg-surface-200 p-1 font-500 text-content-200">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-surface-100 p-1 font-700 text-content-100">
              E
            </div>
            Wening bukan sinden, tetapi penari.
          </div>
        </div>
      </div>
      <div className="flex flex-none flex-col items-center lg:basis-1/3">
        <div className="relative flex h-40 w-full items-center justify-center">
          <Doughnut data={data} />
        </div>
        <div className="-mt-24 flex flex-col items-center gap-3 text-emerald-900">
          {remainingTime === 0 ? (
            <i className="i-ph-timer-bold h-12 w-12" />
          ) : (
            <p className="text-5xl font-700">{remainingTime}</p>
          )}
          <span className="w-16 text-center font-500">
            {remainingTime === 0 ? "waktu habis!" : "detik"}
          </span>
        </div>
        {remainingTime === 0 ? (
          <div className="mt-3 flex flex-col gap-1 rounded-lg bg-surface-200 p-3 text-sm text-content-300">
            <div className="flex items-center gap-1 text-base font-500 text-content-200">
              <i className="i-ph-info-bold h-4 w-4" />
              Pembahasan
            </div>
            Semua sinden pandai menari tradisional. Sinden yang bernama Wening
            tidak dapat menari tradisional di panggung. Jadi, Wening tidak
            pandai menari.
          </div>
        ) : null}
      </div>
    </div>
  );
}
