"use client";
// components
import Iconify from "@/components/Iconify";
import { categoryMap } from "../constants";

// libs
import { cn, renderLatexContent } from "@/lib/utils";
import {
  useAttemptLatihanSoalMutation,
  useGetAttemptLatihanSoalQuery,
  useGetLatihanSoalDetailQuery,
  useGetPembahasanQuery,
  useLazyGetQuestionNavigationQuery,
} from "@/redux/api/latihanSoalApi";

import { QuestionNavigation } from "@/types";
import { MathpixMarkdownModel as MM } from "mathpix-markdown-it";
import { useEffect, useState } from "react";
import { useLatihanSoalContext } from "../context";
import QuestionNavigator from "./QuestionNavigator";
import { OptionBoxVariants, correctChoice, wrongChoice } from "./style";

interface QuestionContainerI {
  slug: string[];
}
export const QuestionContainer = ({ slug }: QuestionContainerI) => {
  const category = categoryMap[slug[0]];
  const [choice, setChoice] = useState<string>("");
  const [questionNavigation, setQuestionNavigation] =
    useState<QuestionNavigation>();

  const [disableChoice, setDisableChoide] = useState<boolean>(false);

  const { subjects, currentTopic } = useLatihanSoalContext();
  const { data: attemptQuestionData, isSuccess: finishedGetAttempt } =
    useGetAttemptLatihanSoalQuery(
      {
        question_id: slug[1],
      },
      {
        skip: !slug[1],
      },
    );

  const { data: pembahasan, isSuccess: pembahasanFetched } =
    useGetPembahasanQuery(
      {
        question_id: slug[1],
      },
      {
        skip: !finishedGetAttempt || !attemptQuestionData?.data?.submitted,
      },
    );

  console.log(!attemptQuestionData?.data?.submitted);

  const [navigate] = useLazyGetQuestionNavigationQuery();

  const { data, isSuccess } = useGetLatihanSoalDetailQuery(
    {
      id: slug[1],
    },
    {
      skip: !slug[1],
    },
  );
  const [question, setQuestion] = useState(data?.data ?? null);

  useEffect(() => {
    if (isSuccess) {
      setQuestion(data?.data ?? null);
    }
  }, [isSuccess]);

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

  useEffect(() => {
    return () => {
      const elStyle = document.getElementById("Mathpix-styles");
      if (!elStyle) {
        const style = document.createElement("style");
        style.setAttribute("id", "Mathpix-styles");
        style.innerHTML = MM.getMathpixFontsStyle() + MM.getMathpixStyle(true);
        document.head.appendChild(style);
      }
    };
  }, []);

  useEffect(() => {
    const subjectId = subjects.find((subject) =>
      subject.name.includes(categoryMap[slug[0]]),
    )?.id;

    if (subjectId && slug[1]) {
      navigate({
        subject_id: subjectId,
        current_question_id: slug[1],
      }).then(({ data }) => {
        if (data) {
          setQuestionNavigation(data.data);
        }
      });
    }
  }, [subjects, currentTopic, slug[1]]);

  useEffect(() => {
    if (attemptQuestionData?.data) {
      setChoice(attemptQuestionData?.data?.choice_id);
    }
    if (attemptQuestionData?.data?.submitted) {
      setDisableChoide(true);
    }
  }, [attemptQuestionData]);

  return (
    <div className="px-10">
      <div className="flex flex-col gap-5 px-10">
        <div className="mb-4 flex flex-col gap-1">
          <h1 className="text-3xl font-700 text-content-100">{category}</h1>
          <div className="flex items-center gap-1">
            <h2 className="text-xl font-600 text-content-300">
              {question?.topic}
            </h2>
            <button className="group inline-flex items-center gap-1 rounded-full px-2 text-sm font-500 text-surface-400 hover:bg-emerald-400 hover:text-emerald-100">
              <Iconify icon="ph:download-simple-bold" />
              <p className="hidden group-hover:block">Download</p>
            </button>
          </div>
          <h2 className="text-xl font-600 text-content-300">
            {question?.label}
          </h2>
        </div>
        <div
          className="w-[100%] font-quicksand"
          dangerouslySetInnerHTML={{
            __html: renderLatexContent(question?.content.content ?? ""),
          }}
        />
        <div className="mb-8 grid w-full grid-cols-2 gap-4">
          {question?.options.data.map(({ choice_id, content, key }) => (
            <button
              key={choice_id}
              disabled={disableChoice}
              onClick={() => {
                setChoice(choice_id);
                onClickOption(question.options.option_id, choice_id, content);
              }}
              className={cn(
                OptionBoxVariants({
                  variant: choice == choice_id ? "active" : "inactive",
                }),
                pembahasanFetched &&
                  choice == choice_id &&
                  pembahasan.data?.is_correct &&
                  correctChoice,
                pembahasanFetched &&
                  choice == choice_id &&
                  !pembahasan.data?.is_correct &&
                  wrongChoice,
              )}
            >
              <div
                className={cn(
                  "flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-lg text-center align-middle group-hover:bg-gray-600",
                  choice == choice_id ? "bg-gray-600" : "bg-white",
                  disableChoice &&
                    !(choice == choice_id) &&
                    "group-hover:bg-white",
                  pembahasanFetched &&
                    choice == choice_id &&
                    pembahasan.data?.is_correct &&
                    "bg-emerald-50 group-hover:bg-emerald-50",
                  pembahasanFetched &&
                    choice == choice_id &&
                    !pembahasan.data?.is_correct &&
                    "bg-red-50 group-hover:bg-red-50",
                )}
              >
                {key}
              </div>
              <div
                className="leading-8"
                id="option-content"
                dangerouslySetInnerHTML={{
                  __html: renderLatexContent(content),
                }}
              />
            </button>
          ))}
        </div>
        {questionNavigation && (
          <QuestionNavigator questionNavigation={questionNavigation} />
        )}
      </div>
    </div>
  );
};
