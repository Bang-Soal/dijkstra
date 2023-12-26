"use client";
// components
import Iconify from "@/components/Iconify";
import { categoryMap } from "../constants";
import { useLatihanSoalContext } from "../context";

// libs
import { renderLatexContent } from "@/lib/utils";

interface QuestionContainerI {
  slug: string[];
}
export const QuestionContainer = ({ slug }: QuestionContainerI) => {
  const category = categoryMap[slug[0]];
  const question_id = slug[1];
  const { question } = useLatihanSoalContext();
  console.log(question);
  return (
    <div>
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
        <div>
          {question?.options.data.map((option) => (
            <div key={option.choice_id}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
