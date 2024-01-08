import RenderMarkdown from "@/app/latihan-soal/components/RenderMarkdown";
import {
  OptionBoxVariants,
  wrongChoice,
} from "@/app/latihan-soal/components/style";
import { cn, renderLatexContent } from "@/lib/utils";
import { OptionChoice } from "@/types";
export interface TOQuestionCardI {
  title: string;
  subject: string;
  topic: string;
  content: string;
  choices: OptionChoice[];
  answer: string;
}
export const TOQuestionCard = ({
  title,
  subject,
  topic,
  content,
  choices,
  answer,
}: TOQuestionCardI) => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-2xl bg-white px-4 py-3 shadow-md md:px-6">
      <div className="">
        <p className="text-lg font-bold ">{title}</p>
        <p className="-mt-4 ">{subject}</p>
        <p className="-mt-3">{topic}</p>
      </div>
      <RenderMarkdown markdown={content} />

      <div className="grid w-full grid-flow-col grid-cols-2 grid-rows-3 gap-4">
        {choices.map(({ choice_id, content, key }) => {
          return (
            <div
              key={choice_id}
              className={cn(
                cn(
                  OptionBoxVariants({
                    variant: "inactive",
                  }),
                  choice_id == answer && wrongChoice,
                ),
              )}
            >
              <p className="my-auto rounded bg-black p-1.5 text-white">{key}</p>
              <div
                id="option-content"
                dangerouslySetInnerHTML={{
                  __html: renderLatexContent(content),
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
