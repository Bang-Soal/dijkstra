"use client";

// components
import Quiz from "./Quiz";

// libs
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";

const UTBK_DATE = dayjs("2024-05-06");
const daysLeft = UTBK_DATE.diff(dayjs(), "day");

const variants = {
  initial: { opacity: 0, y: 80, scale: 0.5 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <div className="relative flex w-full flex-col items-center gap-5 px-20 py-40">
        <motion.h2
          className="text-3xl/snug font-medium text-content-300"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.8 }}
        >
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
        </motion.h2>
        <motion.h1
          className="text-7xl font-bold"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
            <span className="absolute -inset-x-4 -bottom-8" aria-hidden="true">
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
        </motion.h1>
        <motion.div
          className="flex gap-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="h-10 rounded-full bg-emerald-400 px-5">
            <p className="font-medium text-white">Ajarin puh</p>
          </button>
          <button className="h-10 rounded-full border-2 border-surface-300 px-5">
            <p className="font-medium text-content-200">Sudah dong</p>
          </button>
        </motion.div>
        <Image
          src={"/hero-bg.svg"}
          alt={""}
          width={1440}
          height={525}
          className="absolute inset-x-0 top-20 -z-10"
        />
      </div>
      <Quiz />
    </section>
  );
}
