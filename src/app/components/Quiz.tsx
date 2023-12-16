"use client";

// components
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// libs
import { ArcElement, Chart as ChartJS } from "chart.js";
import { useInView } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { InlineMath } from "react-katex";

// data
import { sampleSoal } from "@/data/landing";

// styles
import "katex/dist/katex.min.css";

ChartJS.register(ArcElement);

function handleExplanation(explanation: string): JSX.Element[] {
  return explanation.split("\n").map((line, index) => {
    const parts = line.split("->");
    const elements: JSX.Element[] = [];

    parts.forEach((part, i) => {
      elements.push(handleKatex(part));
      if (i < parts.length - 1) {
        elements.push(
          <i
            key={`arrow-${i}`}
            className="i-ph-arrow-right-bold mx-1 h-4 w-4 translate-y-[3px]"
          />,
        );
      }
    });

    return (
      <p key={index} className="font-500 leading-snug">
        {elements}
      </p>
    );
  });
}

function handleKatex(text: string): JSX.Element {
  const parts = text.split(/(--.*?--)/);
  return (
    <Fragment>
      {parts.map((part) => {
        if (part.startsWith("--") && part.endsWith("--")) {
          const katex = part.slice(2, -2);
          return <InlineMath key={part} math={katex} />;
        } else {
          return <Fragment key={part}>{part}</Fragment>;
        }
      })}
    </Fragment>
  );
}

export default function Quiz({ topic }: Readonly<{ topic: string }>) {
  const [answered, setAnswered] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  function handleChange(value: string[]) {
    if (!answered) {
      setAnswered(true);
      !value.includes("answer") && value.push("answer");
      setValue(value);
    }
  }

  const data = (
    sampleSoal as {
      [key: string]: {
        title: string;
        question: string;
        choices: { id: string; text: string }[];
        answer: string;
        explanation: string;
      };
    }
  )[topic];

  const [remainingTime, setRemainingTime] = useState(60);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isInView) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }
    if (answered) {
      setRemainingTime(0);
    }

    // Clean up the interval on unmount or when isInView changes
    return () => clearInterval(timer);
  }, [isInView, answered]);

  const remainingPercentage = (remainingTime / 60) * 100;
  const doughnutData = {
    datasets: [
      {
        data: [remainingPercentage, 100 - remainingPercentage],
        backgroundColor: ["#34D399", "#E5E7EB"],
        borderRadius: 9999,
        cutout: "80%",
        circumference: 270,
        rotation: 225,
        borderWidth: 0,
      },
    ],
  };
  const doughnutOptions = {
    spacing: 4,
  };

  return (
    <div className="flex flex-col gap-5 rounded-l-xl bg-gray-50 py-8 pl-12 pr-5 shadow-lg lg:pr-12">
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-600 text-content-100">{data.title}</h3>
          <div ref={ref} className="flex flex-col gap-2">
            {data.question.split("\n").map((line) => (
              <p
                key={line}
                className="select-none font-500 leading-snug text-content-300"
              >
                {handleKatex(line)}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-none flex-col items-center lg:basis-1/3">
          <div className="relative flex h-40 w-full items-center justify-center">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <div className="-mt-24 flex flex-col items-center gap-3 text-emerald-900">
            {remainingTime === 0 && value.length === 0 ? (
              <i className="i-ph-timer-bold h-12 w-12 text-content-300" />
            ) : value.length === 1 ? (
              <i className="i-ph-check-bold h-12 w-12 text-emerald-500" />
            ) : value.length === 2 ? (
              <i className="i-ph-x-bold h-12 w-12 text-rose-500" />
            ) : (
              <p className="text-5xl font-700">{remainingTime}</p>
            )}
            {remainingTime === 0 && value.length === 0 ? (
              <span className="w-16 text-center font-500 text-content-200">
                Waktu habis!
              </span>
            ) : value.length === 1 ? (
              <span className="w-16 text-center font-500 text-emerald-700">
                Jawaban benar!
              </span>
            ) : value.length === 2 ? (
              <span className="w-16 text-center font-500 text-rose-700">
                Jawaban salah!
              </span>
            ) : (
              <span className="w-16 text-center font-500 text-content-200">
                detik
              </span>
            )}
          </div>
        </div>
      </div>
      <ToggleGroup
        type="multiple"
        value={remainingTime === 0 ? [...value, "answer"] : value}
        onValueChange={(value) => {
          handleChange(value);
        }}
        disabled={answered || remainingTime === 0}
        className="flex flex-col gap-1 pt-3"
      >
        {data.choices.map((choice) => (
          <ToggleGroupItem
            key={choice.id}
            value={choice.id === data.answer ? "answer" : choice.id}
            data-answer={choice.id === data.answer ? "true" : "false"}
            className="group flex h-auto w-full select-none items-center justify-start gap-2 rounded-md border border-surface-300 bg-surface-100 p-1 pr-2 text-left font-500 text-content-200 transition-transform hover:scale-[1.025] hover:bg-surface-100 active:scale-[0.975] data-[state=on]:data-[answer=false]:border-rose-300 data-[state=on]:data-[answer=true]:border-emerald-300 data-[state=on]:data-[answer=false]:bg-rose-200 data-[state=on]:data-[answer=true]:bg-emerald-200 data-[state=on]:data-[answer=false]:text-rose-900 data-[state=on]:data-[answer=true]:text-emerald-900"
          >
            <div className="flex w-8 shrink-0 items-center justify-center self-stretch rounded-sm bg-surface-200 font-700 uppercase text-content-100 group-data-[state=on]:group-data-[answer=false]:bg-rose-300 group-data-[state=on]:group-data-[answer=true]:bg-emerald-300 group-data-[state=on]:group-data-[answer=false]:text-rose-900 group-data-[state=on]:group-data-[answer=true]:text-emerald-900">
              {choice.id}
            </div>
            <p className="py-2">{handleKatex(choice.text)}</p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {remainingTime === 0 ? (
        <div className="mt-3 flex flex-col gap-1 rounded-lg border-[3px] border-surface-100 bg-surface-200 p-3 text-sm text-content-300 outline outline-1 outline-surface-300">
          <div className="flex items-center gap-1 text-content-100">
            <i className="i-ph-info-bold h-4 w-4" />
            <p className="text-base font-500">Pembahasan</p>
          </div>
          {handleExplanation(data.explanation)}
        </div>
      ) : null}
    </div>
  );
}
