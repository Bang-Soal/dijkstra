import { buttonVariants } from "@/components/ui/button";
import { renderLatexContent } from "@/lib/utils";
import { Pembahasan, PembahasanQuestionResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PembahasanContainer = ({
  data,
}: PembahasanQuestionResponse): JSX.Element => {
  const [pembahasan] = useState<Pembahasan | string>(data.correct_answer);
  const isUserEligable = typeof pembahasan !== "string";
  return isUserEligable ? (
    <div className="relative rounded-xl border-2 border-gray-200 px-6 py-4">
      <div
        id="pembahasan"
        dangerouslySetInnerHTML={{
          __html: renderLatexContent(pembahasan.answer.content),
        }}
      ></div>
      <h2 className="absolute -top-4 bg-white px-2 text-lg">Penjelasan</h2>
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
