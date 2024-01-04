import Iconify from "@/components/Iconify";
import { buttonVariants } from "@/components/ui/button";
import { cn, renderLatexContent } from "@/lib/utils";
import {
  useAddFeedbackMutation,
  useGetFeedbackQuery,
  useUpdateFeedbackMutation,
} from "@/redux/api/latihanSoalApi";
import { Pembahasan, PembahasanQuestionResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PembahasanContainer = ({
  data,
}: PembahasanQuestionResponse): JSX.Element => {
  const [pembahasan] = useState<Pembahasan | string>(data.correct_answer);

  const { slug } = useParams();

  const { data: feedbackData, isSuccess } = useGetFeedbackQuery(
    {
      questionId: slug[1],
    },
    {
      skip: !slug[1],
    },
  );

  const [mutateAddFeedback] = useAddFeedbackMutation();
  const [mutateUpdateFeedback] = useUpdateFeedbackMutation();

  const isUserEligable = typeof pembahasan !== "string";

  const [isLiked, setIsLiked] = useState<boolean | null>(null);

  useEffect(() => {
    if (
      isSuccess &&
      feedbackData &&
      feedbackData.data.feedback.is_like !== null
    ) {
      setIsLiked(feedbackData.data.feedback.is_like);
    }
  }, [isSuccess, feedbackData]);

  const handleLike = async (isLike: boolean) => {
    if (isSuccess && feedbackData) {
      if (feedbackData.data.feedback.is_like == null) {
        await mutateAddFeedback({
          questionId: slug[1],
          isLike,
          feedback: "",
        });
      } else {
        await mutateUpdateFeedback({
          feedbackId: feedbackData.data.feedback.id,
          isLike,
          feedback: "",
          questionId: slug[1],
        });
      }
    }
  };

  return isUserEligable ? (
    <div className="relative rounded-xl border-2 border-gray-200 px-6 pb-10 pt-4">
      <div
        id="pembahasan"
        dangerouslySetInnerHTML={{
          __html: renderLatexContent(pembahasan.answer.content),
        }}
      ></div>
      <h2 className="absolute -top-4 bg-white px-2 text-lg">Penjelasan</h2>
      <div className="absolute -bottom-4 flex gap-x-3 bg-white px-3">
        <button
          onClick={() => {
            handleLike(true);
          }}
          className={cn(
            "left-4 cursor-pointer rounded-full  bg-gray-100 p-2 text-black duration-100 hover:bg-emerald-600 hover:text-white",
            isLiked != null &&
              isLiked == true &&
              "bg-emerald-600 text-white hover:bg-emerald-600",
          )}
        >
          <Iconify icon="ph:thumbs-up-bold" />
        </button>
        <button
          onClick={() => {
            handleLike(false);
          }}
          className={cn(
            "left-4 cursor-pointer rounded-full bg-gray-100 p-2 text-black duration-100 hover:bg-emerald-600 hover:text-white",
            isLiked != null &&
              isLiked == false &&
              "bg-emerald-600 text-white hover:bg-emerald-600",
          )}
        >
          <Iconify icon="ph:thumbs-down-bold" />
        </button>
      </div>
    </div>
  ) : (
    <div className="relative h-64 w-full rounded-2xl border-2">
      <Image
        alt="pembahasan placeholder"
        src="/pembahasan-placeholder.png"
        objectFit="contain"
        fill={true}
      />
      <h2 className="absolute -top-4 left-4 bg-white px-2 text-lg">
        Penjelasan
      </h2>
      <div className="flex h-full w-full items-center justify-center">
        <Link
          href="/langganan"
          className={buttonVariants({ variant: "bsPrimary", size: "lg" })}
        >
          Upgrade untuk melihat pembahasan!
        </Link>
      </div>
    </div>
  );
};

export default PembahasanContainer;
