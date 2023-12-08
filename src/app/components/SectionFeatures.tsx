// components
import FeatureCard from "./FeatureCard";

// libs
import Image from "next/image";

// types
import { Feature } from "./FeatureCard";

// utils
import { shuffle } from "@/lib/utils";

export default function Features() {
  return (
    <section className="relative flex min-h-screen flex-col items-center px-20 py-20">
      <div className="flex flex-col gap-6 py-10">
        <h1 className="text-center text-5xl font-700 text-content-100">
          The{" "}
          <span className="relative">
            <span
              className="absolute -inset-x-4 -bottom-6 -z-10"
              aria-hidden="true"
            >
              <Image
                src="/scribble.svg"
                alt="scribble highlight"
                width={180}
                height={48}
                className=""
              />
            </span>
            <span className="relative">only</span>
          </span>{" "}
          UTBK prep you need
        </h1>
        <p className="text-center font-500 text-content-300">
          No other platform offers this many features to help you get into top
          PTNs
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            choices={shuffle(feature.choices)}
            answer={feature.answer}
            illustration={feature.illustration}
            description={feature.description}
            theme={feature.theme}
          />
        ))}
      </div>
      <div className="absolute -z-10 pt-36">
        <Image
          src="/bg-curve.svg"
          alt="Curve background"
          width={1440}
          height={240}
        />
        <Image
          src="/bg-curve.svg"
          alt="Curve background"
          width={1440}
          height={240}
        />
        <Image
          src="/bg-curve.svg"
          alt="Curve background"
          width={1440}
          height={240}
        />
        <Image
          src="/bg-curve.svg"
          alt="Curve background"
          width={1440}
          height={240}
        />
      </div>
    </section>
  );
}

const features: Feature[] = [
  {
    title: "Gimana melihat saingan yang mau masuk ke PTN tujuanku?",
    choices: ["Leaderboard", "Ranking", "Scoreboard", "Rating"],
    answer: "Leaderboard",
    illustration: "/illustrations/leaderboard.svg",
    description:
      "Dapatkan wawasan mengenai kompetisimu dan lihat posisimu melalui leaderboard.",
    theme: "emerald",
  },
  {
    title: "BangSoal menggunakan soal latihan tipe apa?",
    choices: [
      "Asli UTBK + Ujian Mandiri",
      "Prediksi",
      "Ujian sekolah",
      "Ujian bimbel",
    ],
    answer: "Asli UTBK + Ujian Mandiri",
    illustration: "/illustrations/latsol.svg",
    description:
      "BangSoal hanya menyediakan 100% asli soal UTBK, SIMAK, UM UGM, dan lebih dari tahun-tahun sebelumnya.",
    theme: "cyan",
  },
  {
    title: "Apa fitur yang akan membantu saya merasakan suasana ujian beneran?",
    choices: ["Timer", "Leaderboard", "Penjelasan jawaban", "Analytics"],
    answer: "Timer",
    illustration: "/illustrations/timer.svg",
    description:
      "Berlatih dengan ujian berdurasi untuk melihat seberapa baik kamu mengatur waktu.",
    theme: "indigo",
  },
  {
    title: "Apa yang bisa didapatkan dari mengerjakan latihan BangSoal?",
    choices: [
      "Feedback + penjelasan rinci",
      "Nilai",
      "Feedback",
      "Penjelasan rinci",
    ],
    answer: "Feedback + penjelasan rinci",
    illustration: "/illustrations/penjelasan.svg",
    description:
      "Dapatkan umpan balik dan penjelasan jawaban untuk setiap soal yang kamu kerjakan.",
    theme: "fuchsia",
  },
  {
    title: "Bagaimana aku bisa tetap termotivasi untuk belajar?",
    choices: ["Flash cards", "Kopi", "Bimbel", "Try out"],
    answer: "Flash cards",
    illustration: "/illustrations/flashcards.svg",
    description:
      "Tetap di puncak performamu dengan flash cards baru setiap hari",
    theme: "orange",
  },
  {
    title: "Apa cara terbaik untuk latihan soal di sekolah atau saat offline?",
    choices: ["PDF export", "Flash cards", "Scoreboard", "Rating"],
    answer: "PDF export",
    illustration: "/illustrations/print.svg",
    description:
      "Unduh dan cetak soal dengan mudah untuk dibagikan dengan teman dan berlatih di sekolah.",
    theme: "rose",
  },
];
