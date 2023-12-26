"use client";
import { renderLatexContent } from "@/lib/utils";
import { useGetLatihanSoalQuery } from "@/redux/api/latihanSoalApi";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Tabs from "@radix-ui/react-tabs";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLatihanSoalContext } from "../context";
import { SoalSelectorI } from "./interface";

export default function SoalSelector({
  subject_id,
  category,
  min_year,
  max_year,
  topic_id,
}: SoalSelectorI) {
  const router = useRouter();
  const { slug } = useParams();
  const { setQuestion } = useLatihanSoalContext();
  const categoryParam = category.toLowerCase().replace(" ", "-");

  const { data: soalData, isSuccess } = useGetLatihanSoalQuery(
    {
      subject_id,
      topic_id: topic_id != "Semua" ? topic_id : undefined,
      min_year: `${min_year}`,
      max_year: `${max_year}`,
    },
    {
      skip: categoryParam !== slug[0],
    },
  );
  useEffect(() => {
    if (isSuccess) {
      const currentQuestion = soalData?.data.questions
        .slice(0, 40)
        .find(({ id }) => id === slug[1]);
      console.log(currentQuestion);
      setQuestion(currentQuestion ?? soalData?.data.questions[0]);
    }
  }, [isSuccess, soalData, slug]);

  return (
    <ScrollArea.Root className="relative mt-1 flex h-1 grow flex-col">
      <ScrollArea.Viewport className="grow rounded-lg">
        <Tabs.Root defaultValue="tab-1" orientation="vertical" className="grow">
          <Tabs.List className="flex flex-col gap-1">
            {soalData?.data?.questions
              .slice(0, 40)
              .map(({ id, content: { content, asset_url } }, index) => (
                <Tabs.Trigger
                  key={id}
                  value={`tab-${index + 1}`}
                  className="relative h-16 overflow-hidden rounded-lg bg-surface-100 p-3 text-left text-xs font-500 text-content-100 transition-[opacity] before:absolute before:inset-0 before:shadow-[inset_-24px_-24px_32px_0_rgba(0,0,0,1)] before:shadow-surface-100 data-[state=active]:cursor-default data-[state=active]:opacity-100 data-[state=inactive]:opacity-30 data-[state=inactive]:hover:opacity-60"
                  onClick={() =>
                    router.push(`/latihan-soal/${categoryParam}/${id}`)
                  }
                >
                  <div
                    className="w-[90%]"
                    dangerouslySetInnerHTML={{
                      __html: renderLatexContent(content),
                    }}
                  />
                </Tabs.Trigger>
              ))}
          </Tabs.List>
        </Tabs.Root>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="absolute !-right-4 flex touch-none select-none transition-colors ease-out data-[orientation=vertical]:w-1 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-full bg-surface-400 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-11 before:w-full before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
