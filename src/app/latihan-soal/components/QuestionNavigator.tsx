import { Button } from "@/components/ui/button";
import {
  useGetAttemptLatihanSoalQuery,
  useSubmitLatihanSoalMutation,
} from "@/redux/api/latihanSoalApi";
import { QuestionNavigation } from "@/types";
import * as Separator from "@radix-ui/react-separator";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const QuestionNavigator = ({
  questionNavigation,
}: {
  questionNavigation: QuestionNavigation;
}) => {
  const router = useRouter();
  const { slug } = useParams();
  const [openPembahasan, setOpenPembahasan] = useState<boolean>(false);

  const [submitMutation] = useSubmitLatihanSoalMutation();
  const { data } = useGetAttemptLatihanSoalQuery(
    {
      question_id: slug[1],
    },
    {
      skip: !slug[1],
    },
  );

  return (
    <div className="flex items-center gap-x-2">
      <div className="flex gap-x-4">
        <button
          disabled={!questionNavigation.prev_question}
          onClick={() => {
            router.replace(
              `/latihan-soal/${slug[0]}/${questionNavigation.prev_question}`,
            );
          }}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-100"
        >
          <div className="i-ph-arrow-left-bold h-[16px] w-[16px] text-gray-500"></div>
        </button>
        <button
          disabled={!questionNavigation.next_question}
          onClick={() => {
            router.replace(
              `/latihan-soal/${slug[0]}/${questionNavigation.next_question}`,
            );
          }}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-100"
        >
          <div className="i-ph-arrow-right-bold h-[16px] w-[16px] text-gray-500"></div>
        </button>
      </div>
      <Separator.Root
        orientation="horizontal"
        className="h-[2px] flex-grow bg-gray-100"
      />
      {data && (
        <Button
          disabled={!data.data}
          onClick={() => {
            submitMutation({
              attempt_id: data?.data.id,
              question_id: slug[1],
            });
          }}
          variant="emerald"
          className="rounded-full disabled:bg-gray-200 disabled:text-gray-400"
        >
          Cek Jawaban
        </Button>
      )}
    </div>
  );
};

export default QuestionNavigator;
