"use client";
// components
import Iconify from "@/components/Iconify";
import { categoryMap } from "../constants";
import { useLatihanSoalContext } from "../context";

// libs
import { cn, renderLatexContent } from "@/lib/utils";
import {
  useAttemptLatihanSoalMutation,
  useGetAttemptLatihanSoalQuery,
} from "@/redux/api/latihanSoalApi";
import { useState } from "react";
import { OptionBoxVariants } from "./style";

interface QuestionContainerI {
  slug: string[];
}
export const QuestionContainer = ({ slug }: QuestionContainerI) => {
  const category = categoryMap[slug[0]];
  const [choice, setChoice] = useState<string>("");

  const { question } = useLatihanSoalContext();

  const { data: attemptHistory } = useGetAttemptLatihanSoalQuery(
    {
      question_id: question?.id ?? "",
    },
    { skip: !question },
  );

  const [attemptSoal] = useAttemptLatihanSoalMutation();
  const onClickOption = (
    option_id: string,
    choice_id: string,
    content: string,
  ) => {
    if (!!question) {
      attemptSoal({
        question_id: question.id,
        option_id,
        choice_id,
        answer_history: content,
      });
    }
  };
  return (
    <div className="px-10">
      <div className="flex flex-col gap-5 px-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-700 text-content-100">{category}</h1>
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-600 text-content-300">
              Barisan Bilangan
            </h2>
            <button className="group inline-flex items-center gap-1 rounded-full px-2 text-sm font-500 text-surface-400 hover:bg-emerald-400 hover:text-emerald-100">
              <Iconify icon="ph:download-simple-bold" />
              <p className="hidden group-hover:block">Download</p>
            </button>
          </div>
          <h2 className="text-xl font-600 text-content-300">UTBK 2022</h2>
        </div>
        <div
          className="w-[100%] font-quicksand"
          dangerouslySetInnerHTML={{
            __html: renderLatexContent(question?.content.content ?? ""),
          }}
        />
        <div className="grid w-full grid-cols-2 gap-4">
          {question?.options.data.map(({ choice_id, content, key }) => (
            <div
              key={choice_id}
              onClick={() => {
                setChoice(choice_id);
                onClickOption(question.options.option_id, choice_id, content);
              }}
              className={cn(
                OptionBoxVariants({
                  variant: choice == choice_id ? "active" : "inactive",
                }),
              )}
            >
              <div
                className={cn(
                  "h-8 w-8 rounded-lg pt-1 text-center align-middle",
                  choice == choice_id ? "bg-gray-60" : "bg-white",
                )}
              >
                {key}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: renderLatexContent(content),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
