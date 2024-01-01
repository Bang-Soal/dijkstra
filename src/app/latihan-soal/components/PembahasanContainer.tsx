import { renderLatexContent } from "@/lib/utils";
import { Pembahasan, PembahasanQuestionResponse } from "@/types";
import { useState } from "react";

const PembahasanContainer = ({
  data,
}: PembahasanQuestionResponse): JSX.Element => {
  const [pembahasan] = useState<Pembahasan>(data.correct_answer as Pembahasan);

  return (
    <div className="relative rounded-xl border-2 border-gray-200 px-6 py-4">
      <div
        id="pembahasan"
        dangerouslySetInnerHTML={{
          __html: renderLatexContent(pembahasan.answer.content),
        }}
      ></div>
      <h2 className="absolute -top-4 bg-white px-2 text-lg">Penjelasan</h2>
    </div>
  );
};

export default PembahasanContainer;
