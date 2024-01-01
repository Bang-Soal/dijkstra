"use client";
import { useGetLatihanSoalQuery } from "@/redux/api/latihanSoalApi";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Tabs from "@radix-ui/react-tabs";
import { useParams, useRouter } from "next/navigation";
import { Suspense, lazy, useEffect, useMemo } from "react";
import { SELECTED_SUBJECT_MAPPING, useLatihanSoalContext } from "../context";
import { SoalSelectorI } from "./interface";

function loading(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const MarkdownPreview = lazy(() => loading(import("./RenderMarkdown"))); // Lazy load markdown for better performance

export default function SoalSelector({
  subject_id,
  category,
  min_year,
  max_year,
  topic_id,
}: SoalSelectorI) {
  const router = useRouter();
  const { slug } = useParams();
  const categoryParam = category.toLowerCase().replace(" ", "-");

  const { selectedSubject, setSoalData } = useLatihanSoalContext();

  const { data: soalData, isSuccess } = useGetLatihanSoalQuery(
    {
      subject_id,
      topic_id: topic_id != "Semua" ? topic_id : undefined,
      min_year: `${min_year}`,
      max_year: `${max_year}`,
      question_id: slug[1] ?? undefined,
    },
    {
      skip: categoryParam !== slug[0],
    },
  );
  useEffect(() => {
    if (isSuccess) {
      setSoalData(soalData?.data?.questions ?? []);
      let id = soalData?.data?.questions?.[0]?.id ?? "";

      if (slug[1]) {
        id = slug[1];
      }

      router.push(`/latihan-soal/${categoryParam}/${id}`);
    }
  }, [isSuccess, soalData?.data?.questions]);

  const renderTile = useMemo(() => {
    return soalData?.data?.questions?.map(({ id, content }, index) => (
      <Tabs.Trigger
        key={id}
        value={`tab-${index + 1}`}
        className="relative h-16 overflow-hidden rounded-lg bg-surface-100 p-3 text-left text-xs font-500 text-content-100 transition-[opacity] before:absolute before:inset-0 before:shadow-[inset_-24px_-24px_32px_0_rgba(0,0,0,1)] before:shadow-surface-100 data-[state=active]:cursor-default data-[state=active]:opacity-100 data-[state=inactive]:opacity-30 data-[state=inactive]:hover:opacity-60"
        onClick={() => router.push(`/latihan-soal/${categoryParam}/${id}`)}
      >
        <MarkdownPreview markdown={content} />
      </Tabs.Trigger>
    ));
  }, [soalData?.data?.questions]);

  // useEffect(() => {
  //   if (isSuccess && soalData?.data?.questions === undefined) {
  //     refetch();
  //   }
  // }, [soalData]);

  return (
    <ScrollArea.Root className="relative mt-1 flex h-1 grow flex-col">
      <ScrollArea.Viewport className="grow rounded-lg">
        <Tabs.Root defaultValue="tab-1" orientation="vertical" className="grow">
          <Tabs.List className="flex flex-col gap-1">
            {SELECTED_SUBJECT_MAPPING[category] === selectedSubject ? (
              <Suspense fallback={<SoalCardSkeleton />}>{renderTile}</Suspense>
            ) : (
              <SoalCardSkeleton />
            )}
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

export const SoalCardSkeleton = () => {
  return Array.from([1, 2, 3]).map((el) => {
    return (
      <div
        key={el}
        className="skeleton relative h-16 w-full bg-surface-300 from-surface-300 via-surface-100 to-surface-300"
      ></div>
    );
  });
};
