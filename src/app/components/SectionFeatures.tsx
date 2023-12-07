// libs
import Image from "next/image";

// utils
import { join } from "@/lib/utils";

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
            choices={feature.choices}
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

type Feature = {
  title: string;
  choices: string[];
  illustration: string;
  description: string;
  theme: string;
};

function FeatureCard({
  title,
  choices,
  illustration,
  description,
  theme,
}: Readonly<Feature>) {
  const colors: { [key: string]: string } = {
    emerald:
      "border-emerald-200 bg-emerald-600 text-emerald-50 after:shadow-emerald-400/80 children:after:shadow-emerald-600",
    cyan: "border-cyan-200 bg-cyan-600 text-cyan-50 after:shadow-cyan-400/80 children:after:shadow-cyan-600",
    indigo:
      "border-indigo-600 bg-indigo-900 text-indigo-50 after:shadow-indigo-700/80 children:after:shadow-indigo-900",
    fuchsia:
      "border-fuchsia-300 bg-fuchsia-700 text-fuchsia-50 after:shadow-fuchsia-500/80 children:after:shadow-fuchsia-700",
    orange:
      "border-orange-200 bg-orange-500 text-orange-50 after:shadow-orange-300/80 children:after:shadow-orange-500",
    rose: "border-rose-300 bg-rose-500 text-rose-50 after:shadow-rose-300/80 children:after:shadow-rose-500",
  };

  return (
    <div className="flex gap-2 rounded-3xl bg-surface-100 p-3 shadow-lg ">
      <div className="flex basis-1/2 flex-col justify-between px-4 py-2">
        <p className="text-lg font-700 text-content-200">{title}</p>
        <div className="flex flex-col gap-0.5">
          {choices.map((choice) => (
            <div
              key={title}
              className="flex gap-2 rounded-md bg-surface-200/50 px-3 py-1 font-600 text-surface-400"
            >
              {choice}
            </div>
          ))}
        </div>
      </div>
      <div
        className={join(
          "relative flex aspect-square basis-1/2 flex-col justify-end overflow-hidden rounded-xl border-4 after:absolute after:inset-0 after:shadow-[inset_0_40px_40px_0_rgba(0_0_0_/_0.05)]",
          colors[theme],
        )}
      >
        <div className="relative -mb-5 h-48 after:absolute after:inset-0 after:shadow-[inset_0_-32px_40px_0_rgba(0_0_0_/_0.05)]">
          <Image
            src={illustration}
            alt={title}
            layout="fill"
            className="pointer-events-none select-none object-cover"
          />
        </div>
        <p className="z-10 px-5 pb-5 text-center font-500">{description}</p>
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    title: "Gimana saya bisa lihat ranking saingan ke PTN saya?",
    choices: ["Leaderboard", "Ranking", "Scoreboard", "Rating"],
    illustration: "/illustrations/leaderboard.svg",
    description:
      "Gain insight on your competition and see where you stand with leaderboards",
    theme: "emerald",
  },
  {
    title: "Which platform provides try outs like the real deal?",
    choices: ["Leaderboard", "Ranking", "Scoreboard", "Rating"],
    illustration: "/illustrations/latsol.svg",
    description:
      "No other platform provides try outs made from 100% real past UTBK questions",
    theme: "cyan",
  },
  {
    title: "What online tool can help me answer questions faster?",
    choices: ["Leaderboard", "Ranking", "Scoreboard", "Rating"],
    illustration: "/illustrations/timer.svg",
    description:
      "Practice with timed trials to see how well you pace and manage your time",
    theme: "indigo",
  },
  {
    title: "Where can I get detailed test answers with explanations?",
    choices: ["Leaderboard", "Ranking", "Scoreboard", "Rating"],
    illustration: "/illustrations/penjelasan.svg",
    description:
      "Answers arent enough. Gain insight and learn meaningful feedback from explanations.",
    theme: "fuchsia",
  },
  {
    title: "Where can I get daily flashcards to help me practice?",
    choices: ["Leaderboard", "Ranking", "Scoreboard", "Rating"],
    illustration: "/illustrations/flashcards.svg",
    description:
      " Stay at the top of your game with brand new questions every day.",
    theme: "orange",
  },
  {
    title: "How can I practice offline without online distractions?",
    choices: ["Leaderboard", "Ranking", "Scoreboard", "Rating"],
    illustration: "/illustrations/print.svg",
    description:
      "Easily download and print questions in bulk to share with friends or practice at school.",
    theme: "rose",
  },
];
