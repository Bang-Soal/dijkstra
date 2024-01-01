import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  useGetAttemptLatihanSoalQuery,
  useSubmitLatihanSoalMutation,
} from "@/redux/api/latihanSoalApi";
import * as Separator from "@radix-ui/react-separator";
import { useParams, useRouter } from "next/navigation";
import { useLatihanSoalContext } from "../context";

const QuestionNavigator = ({
  disableCekJawaban,
}: {
  disableCekJawaban: boolean;
}) => {
  const router = useRouter();
  const { slug } = useParams();
  const { soalData } = useLatihanSoalContext();
  const [submitMutation] = useSubmitLatihanSoalMutation();
  const { data } = useGetAttemptLatihanSoalQuery(
    {
      question_id: slug[1],
    },
    {
      skip: !slug[1],
    },
  );
  const currentNumber = soalData.findIndex((item) => item.id === slug[1]);
  const isLastNumber = currentNumber === soalData.length - 1;
  const isFirstNumber = currentNumber === 0;

  const next = () => {
    router.replace(
      `/latihan-soal/${slug[0]}/${soalData[currentNumber + 1].id}`,
    );
  };

  const prev = () => {
    router.replace(
      `/latihan-soal/${slug[0]}/${soalData[currentNumber - 1].id}`,
    );
  };

  return (
    <div className="flex items-center gap-x-2">
      <div className="flex gap-x-4">
        <button
          disabled={!currentNumber}
          onClick={() => {
            prev();
          }}
          className={cn(
            "flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-100",
            !isFirstNumber && "group hover:bg-emerald-600",
          )}
        >
          <div className="i-ph-arrow-left-bold h-[16px] w-[16px] text-gray-500 group-hover:text-white"></div>
        </button>
        <button
          disabled={currentNumber === soalData.length - 1}
          onClick={() => {
            next();
          }}
          className={cn(
            "flex h-[36px] w-[36px] items-center justify-center rounded-full bg-gray-100",
            !isLastNumber && "group hover:bg-emerald-600",
          )}
        >
          <div className="i-ph-arrow-right-bold h-[16px] w-[16px] text-gray-500 group-hover:text-white"></div>
        </button>
      </div>
      <Separator.Root
        orientation="horizontal"
        className="h-[2px] flex-grow bg-gray-100"
      />
      {data && (
        <Button
          disabled={!data.data || disableCekJawaban}
          onClick={() => {
            submitMutation({
              attempt_id: data?.data.id,
              question_id: slug[1],
            });
          }}
          variant="emerald"
          className="rounded-full disabled:bg-gray-200 disabled:text-gray-400 "
        >
          Cek Jawaban
        </Button>
      )}
    </div>
  );
};

export default QuestionNavigator;
