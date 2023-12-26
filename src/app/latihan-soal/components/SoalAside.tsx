"use client";

// assets
import bgMeshVertical from "@public/bg-mesh-vertical.webp";

// components
import Iconify from "@/components/Iconify";

// libs
import { useGetSubjectsQuery } from "@/redux/api/latihanSoalApi";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { useEffect } from "react";

import { SelectedSubjectType } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { SELECTED_SUBJECTS } from "../constants";
import { useLatihanSoalContext } from "../context";
import Filters from "./Filters";
import SoalSelector from "./SoalSelector";

export default function SoalAside() {
  const router = useRouter();
  const { slug } = useParams();
  const { data: subjectsData } = useGetSubjectsQuery();
  const {
    subjects,
    setSubjects,
    currentTopic,
    setCurrentTopic,
    yearRange,
    setYearRange,
  } = useLatihanSoalContext();

  useEffect(() => {
    if (!!subjectsData) {
      const filteredSubjects = subjectsData.data.filter(
        ({ alternate_name }) => {
          return SELECTED_SUBJECTS.includes(alternate_name);
        },
      );
      filteredSubjects.sort((a, b) => {
        const orderA = SELECTED_SUBJECTS.indexOf(a.alternate_name);
        const orderB = SELECTED_SUBJECTS.indexOf(b.alternate_name);
        return orderA - orderB;
      });

      setSubjects(filteredSubjects);
    }
  }, [subjectsData, setSubjects]);

  return (
    <aside className="sticky bottom-0 flex h-screen w-80 shrink-0 flex-col gap-6 border-r border-surface-300 bg-surface-200">
      <div className="flex h-16 items-center justify-center gap-2 text-xl font-700 text-content-200">
        <p className="">BangSoal</p>
        <p className="text-surface-400">|</p>
        <p className="font-[550]">Latihan Soal</p>
      </div>
      <div className="flex grow flex-col gap-5 px-5 pb-5 text-content-300">
        <div className="relative w-full">
          <Iconify
            icon="ph:magnifying-glass-bold"
            className="absolute left-5 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Cari soal"
            className="flex h-10 w-full items-center rounded-full border border-surface-300 bg-surface-100 pl-11 font-500"
          />
        </div>
        <Accordion.Root
          className="flex grow flex-col"
          type="single"
          defaultValue={`${slug[0] ?? "pu"}`}
          onValueChange={(value) => {
            router.replace(`/latihan-soal/${value}`);
          }}
        >
          {subjects.map(({ id, alternate_name, icon }, index) => {
            const subjectName = alternate_name.replace(
              "Literasi dalam ",
              "",
            ) as SelectedSubjectType;
            const slugName = subjectName.toLowerCase().replace(" ", "-");
            return (
              <Accordion.Item
                key={alternate_name}
                value={`${slugName}`}
                className="group relative flex flex-col rounded-xl bg-cover data-[state=closed]:h-11 data-[state=open]:grow data-[state=closed]:animate-slide-up-item data-[state=open]:animate-slide-down-item data-[state=closed]:overflow-hidden data-[state=open]:overflow-visible"
              >
                <Accordion.Trigger className="group z-10 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xl font-[650] text-content-300 outline-none transition-colors data-[state=open]:cursor-default data-[state=open]:text-surface-100 data-[state=closed]:focus-within:text-content-100 data-[state=closed]:hover:text-content-100">
                  <Image
                    src={icon}
                    alt={subjectName}
                    width={20}
                    height={20}
                    className="w-5 text-black"
                  />
                  <p className="grow truncate text-left">{subjectName}</p>
                  <Iconify
                    icon="ph:caret-down-bold"
                    className="transition-transform duration-500 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
                <Accordion.Content
                  forceMount
                  className="z-10 flex grow flex-col px-1 pb-1 data-[state=closed]:h-0 data-[state=open]:h-[--radix-accordian-content-height] data-[state=closed]:animate-slide-up-content data-[state=open]:animate-slide-down-content"
                >
                  <Filters
                    subject_id={id}
                    category={subjectName as SelectedSubjectType}
                    currentTopic={currentTopic}
                    setCurrentTopic={setCurrentTopic}
                    yearRange={yearRange}
                    setYearRange={setYearRange}
                  />
                  <SoalSelector
                    subject_id={id}
                    min_year={yearRange[subjectName][0]}
                    max_year={yearRange[subjectName][1]}
                    category={subjectName as SelectedSubjectType}
                    topic_id={currentTopic[subjectName]}
                  />
                </Accordion.Content>
                <Image
                  src={bgMeshVertical}
                  alt={""}
                  className="pointer-events-none absolute inset-0 h-full rounded-xl object-cover transition-[opacity] duration-500 group-data-[state=closed]:opacity-0 group-data-[state=open]:opacity-100"
                  aria-hidden="true"
                />
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
        <button className="flex h-10 items-center justify-center gap-1.5 rounded-full bg-gray-800 font-600 text-surface-400">
          <Iconify
            icon="ph:clock-counter-clockwise-duotone"
            className="text-xl"
          />
          Riwayat soal
        </button>
      </div>
    </aside>
  );
}
