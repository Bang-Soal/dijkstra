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
import { useDropzone } from "react-dropzone";

const PembahasanContainer = ({
  data,
}: PembahasanQuestionResponse): JSX.Element => {
  const { getRootProps, getInputProps, isDragAccept, acceptedFiles } =
    useDropzone({
      accept: {
        "image/jpeg": [".jpeg"],
        "image/png": [".png"],
        "image/jpg": [".jpg"],
      },
    });

  const [pembahasan] = useState<Pembahasan | string>(data.correct_answer);
  const [acceptedImages, setAcceptedImage] = useState<File[]>([]);
  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setAcceptedImage([...acceptedImages, ...acceptedFiles]);
    }
  }, [acceptedFiles]);
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
      feedbackData.data?.feedback?.is_like !== null
    ) {
      setIsLiked(feedbackData.data.feedback?.is_like);
    }
  }, [isSuccess, feedbackData]);

  const handleLike = async (isLike: boolean) => {
    if (isSuccess && feedbackData) {
      if (feedbackData?.data?.feedback?.is_like == null) {
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
    <div>
      <div className="relative mb-10 rounded-xl border-2 border-gray-200 px-6 pb-10 pt-4">
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
      <div className="mb-4 flex items-center gap-x-3 rounded-full bg-gray-100 px-4 py-3 font-600 text-gray-500">
        <Iconify height={20} width={20} icon="ph:info-bold" />
        <p className="mb-0 leading-5">
          Kamu dapat mengunggah coretan yang kamu gunakan untuk menyelesaikan
          soal ini agar bisa belajar dari cara kamu mengerjakannya.
        </p>
      </div>
      <div className="flex h-[250px] gap-x-2">
        <div className="mb-3 flex h-full gap-x-3">
          {acceptedImages.map((file) => (
            <div
              key={file.name}
              className="relative h-full w-[200px] rounded-lg border-2 border-gray-200"
            >
              <Image
                alt="dropzone placeholder"
                src={URL.createObjectURL(file)}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <button
                onClick={() => {
                  setAcceptedImage(acceptedImages.filter((f) => f !== file));
                }}
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-black"
              >
                <Iconify icon="ic:round-close" />
              </button>
            </div>
          ))}
        </div>

        <div className="h-full w-[320px]">
          <div
            {...getRootProps()}
            className={cn(
              "relative flex h-full min-h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 py-6",
              isDragAccept && "border-emerald-500",
            )}
          >
            <input {...getInputProps()} />
            <div className="relative flex h-1/2 min-h-[125px] w-full justify-center">
              <Image
                alt="dropzone placeholder"
                src="/dropzone.svg"
                width={182}
                height={120}
              />
            </div>
            <div className="h-1/2 text-center">
              <p className="mb-1 font-bold text-gray-500">
                Pilih pdf atau gambar catatanmu
              </p>
              <p className="mb-0 font-500 text-gray-400">
                atau jatuhkan ke sini
              </p>
              <div className="mt-3 space-x-2">
                <span className="h-10 rounded-full border-2 border-gray-200 bg-gray-100 px-2 text-xs text-gray-500">
                  max 5mb
                </span>
                <span className="h-10 rounded-full border-2 border-gray-200 bg-gray-100 px-2 text-xs text-gray-500">
                  PDF, PNG, JPG, JPEG
                </span>
              </div>
            </div>
          </div>
        </div>
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
