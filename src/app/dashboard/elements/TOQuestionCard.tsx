import RenderMarkdown from "@/app/latihan-soal/components/RenderMarkdown";
import { OptionBoxVariants } from "@/app/latihan-soal/components/style";
import { cn, renderLatexContent } from "@/lib/utils";
import { OptionChoice } from "@/types";

interface TOQuestionCardI {
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
    <div className="flex flex-col gap-3 rounded-2xl bg-white px-4 shadow-md md:px-6 md:py-3">
      <p className="text-lg font-bold">{title}</p>
      <p>{subject}</p>
      <p>{topic}</p>

      <RenderMarkdown markdown={content} />

      <div className="grid w-full grid-flow-col grid-cols-2 grid-rows-3 gap-4">
        {choices.map(({ choice_id, content, key }) => {
          return (
            <div
              key={choice_id}
              className={cn(
                cn(
                  OptionBoxVariants({
                    variant: answer == choice_id ? "active" : "inactive",
                  }),
                ),
              )}
            >
              <p>{key}</p>
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
