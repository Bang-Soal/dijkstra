"use client";

// components
import Iconify from "@components/Iconify";

// libs
import Image from "next/image";
import * as Toggle from "@radix-ui/react-toggle";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useRef, useEffect } from "react";

interface Catatan {
  id: string;
  title: string;
  author: string;
  avatar: string;
  thumbnail: string;
  description: string;
  tags: {
    kelas: string;
    mapel: string;
    tipe: string | null;
  };
  likes: number;
  views: number;
  theme: string;
}

const colorMapping = {
  gray: {
    viewport: "bg-gray-100 border-gray-200 text-gray-500",
    pills: "bg-gray-200",
    title: "text-gray-900",
    button: "data-[state=on]:bg-gray-500",
    author: "text-gray-700",
    statIcon: "text-gray-400",
    statNumber: "text-gray-700",
  },
  red: {
    viewport: "bg-red-100 border-red-200 text-red-500",
    pills: "bg-red-200",
    title: "text-red-900",
    button: "data-[state=on]:bg-red-500",
    author: "text-red-700",
    statIcon: "text-red-400",
    statNumber: "text-red-700",
  },
  orange: {
    viewport: "bg-orange-100 border-orange-200 text-orange-500",
    pills: "bg-orange-200",
    title: "text-orange-900",
    button: "data-[state=on]:bg-orange-500",
    author: "text-orange-700",
    statIcon: "text-orange-400",
    statNumber: "text-orange-700",
  },
  amber: {
    viewport: "bg-amber-100 border-amber-200 text-amber-500",
    pills: "bg-amber-200",
    title: "text-amber-900",
    button: "data-[state=on]:bg-amber-500",
    author: "text-amber-700",
    statIcon: "text-amber-400",
    statNumber: "text-amber-700",
  },
  yellow: {
    viewport: "bg-yellow-100 border-yellow-200 text-yellow-500",
    pills: "bg-yellow-200",
    title: "text-yellow-900",
    button: "data-[state=on]:bg-yellow-500",
    author: "text-yellow-700",
    statIcon: "text-yellow-400",
    statNumber: "text-yellow-700",
  },
  lime: {
    viewport: "bg-lime-100 border-lime-200 text-lime-500",
    pills: "bg-lime-200",
    title: "text-lime-900",
    button: "data-[state=on]:bg-lime-500",
    author: "text-lime-700",
    statIcon: "text-lime-400",
    statNumber: "text-lime-700",
  },
  green: {
    viewport: "bg-green-100 border-green-200 text-green-500",
    pills: "bg-green-200",
    title: "text-green-900",
    button: "data-[state=on]:bg-green-500",
    author: "text-green-700",
    statIcon: "text-green-400",
    statNumber: "text-green-700",
  },
  emerald: {
    viewport: "bg-emerald-100 border-emerald-200 text-emerald-500",
    pills: "bg-emerald-200",
    title: "text-emerald-900",
    button: "data-[state=on]:bg-emerald-500",
    author: "text-emerald-700",
    statIcon: "text-emerald-400",
    statNumber: "text-emerald-700",
  },
  teal: {
    viewport: "bg-teal-100 border-teal-200 text-teal-500",
    pills: "bg-teal-200",
    title: "text-teal-900",
    button: "data-[state=on]:bg-teal-500",
    author: "text-teal-700",
    statIcon: "text-teal-400",
    statNumber: "text-teal-700",
  },
  cyan: {
    viewport: "bg-cyan-100 border-cyan-200 text-cyan-500",
    pills: "bg-cyan-200",
    title: "text-cyan-900",
    button: "data-[state=on]:bg-cyan-500",
    author: "text-cyan-700",
    statIcon: "text-cyan-400",
    statNumber: "text-cyan-700",
  },
  sky: {
    viewport: "bg-sky-100 border-sky-200 text-sky-500",
    pills: "bg-sky-200",
    title: "text-sky-900",
    button: "data-[state=on]:bg-sky-500",
    author: "text-sky-700",
    statIcon: "text-sky-400",
    statNumber: "text-sky-700",
  },
  blue: {
    viewport: "bg-blue-100 border-blue-200 text-blue-500",
    pills: "bg-blue-200",
    title: "text-blue-900",
    button: "data-[state=on]:bg-blue-500",
    author: "text-blue-700",
    statIcon: "text-blue-400",
    statNumber: "text-blue-700",
  },
  indigo: {
    viewport: "bg-indigo-100 border-indigo-200 text-indigo-500",
    pills: "bg-indigo-200",
    title: "text-indigo-900",
    button: "data-[state=on]:bg-indigo-500",
    author: "text-indigo-700",
    statIcon: "text-indigo-400",
    statNumber: "text-indigo-700",
  },
  violet: {
    viewport: "bg-violet-100 border-violet-200 text-violet-500",
    pills: "bg-violet-200",
    title: "text-violet-900",
    button: "data-[state=on]:bg-violet-500",
    author: "text-violet-700",
    statIcon: "text-violet-400",
    statNumber: "text-violet-700",
  },
  purple: {
    viewport: "bg-purple-100 border-purple-200 text-purple-500",
    pills: "bg-purple-200",
    title: "text-purple-900",
    button: "data-[state=on]:bg-purple-500",
    author: "text-purple-700",
    statIcon: "text-purple-400",
    statNumber: "text-purple-700",
  },
  fuchsia: {
    viewport: "bg-fuchsia-100 border-fuchsia-200 text-fuchsia-500",
    pills: "bg-fuchsia-200",
    title: "text-fuchsia-900",
    button: "data-[state=on]:bg-fuchsia-500",
    author: "text-fuchsia-700",
    statIcon: "text-fuchsia-400",
    statNumber: "text-fuchsia-700",
  },
  pink: {
    viewport: "bg-ink-100 border-ink-200 text-ink-500",
    pills: "bg-ink-200",
    title: "text-ink-900",
    button: "data-[state=on]:bg-pink-500",
    author: "text-ink-700",
    statIcon: "text-ink-400",
    statNumber: "text-ink-700",
  },
  rose: {
    viewport: "bg-rose-100 border-rose-200 text-rose-500",
    pills: "bg-rose-200",
    title: "text-rose-900",
    button: "data-[state=on]:bg-rose-500",
    author: "text-rose-700",
    statIcon: "text-rose-400",
    statNumber: "text-rose-700",
  },
};

export default function CatatanCard({
  catatan,
}: Readonly<{ catatan: Catatan }>) {
  // const scrollArea = document.querySelector(".scroll-reset");

  // scrollArea?.addEventListener("mouseleave", () => {
  //   scrollArea.scrollTo({ top: 0, behavior: "smooth" });
  // });
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;

    if (scrollArea) {
      const handleMouseLeave = () => {
        (scrollArea as HTMLDivElement).scrollTo({ top: 0, behavior: "smooth" });
      };

      scrollArea.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        scrollArea.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="group flex flex-col justify-stretch gap-2">
      <div
        className={`relative flex aspect-[16/10] w-full flex-col items-center overflow-hidden rounded-xl border ${
          colorMapping[catatan.theme as keyof typeof colorMapping].viewport
        }`}
      >
        <div className="absolute inset-y-0 right-0 z-10 flex flex-col justify-center gap-2 p-3">
          <Toggle.Root
            aria-label="Toggle like"
            className={`translate-x-14 rounded-full bg-surface-100 p-3 text-content-300 transition-transform duration-300 hover:bg-surface-200 group-hover:translate-x-0 data-[state=on]:text-white ${
              colorMapping[catatan.theme as keyof typeof colorMapping].button
            }`}
          >
            <Iconify icon="ph:heart-bold" />
          </Toggle.Root>
          <Toggle.Root
            aria-label="Toggle bookmark"
            className={`translate-x-14 rounded-full bg-surface-100 p-3 text-content-300 transition-transform delay-[50ms] duration-300 hover:bg-surface-200 group-hover:translate-x-0 data-[state=on]:text-white ${
              colorMapping[catatan.theme as keyof typeof colorMapping].button
            }`}
          >
            <Iconify icon="ph:bookmark-simple-bold" />
          </Toggle.Root>
          <button
            aria-label="Button download"
            className="translate-x-14 rounded-full bg-surface-100 p-3 text-content-300 transition-transform delay-100 duration-300 hover:bg-surface-200 group-hover:translate-x-0"
          >
            <Iconify icon="ph:download-simple-bold" />
          </button>
          <button
            aria-label="Button info"
            className="translate-x-14 rounded-full bg-surface-100 p-3 text-content-300 transition-transform delay-150 duration-300 hover:bg-surface-200 group-hover:translate-x-0 sm:hidden"
          >
            <Iconify icon="ph:info-bold" />
          </button>
        </div>
        <ScrollArea.Root className="h-full pr-16">
          <ScrollArea.Viewport
            ref={scrollAreaRef}
            className="relative h-full origin-top-right overscroll-contain pb-10 pl-16 pt-5 transition-transform duration-300 group-hover:scale-110"
          >
            <div className="flex flex-col gap-5">
              <div className="flex max-h-0 flex-col gap-3 overflow-hidden transition-[max-height] duration-1000 group-hover:max-h-screen">
                <div className="flex flex-wrap gap-1">
                  {catatan.tags.kelas && (
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-500 ${
                        colorMapping[catatan.theme as keyof typeof colorMapping]
                          .pills
                      }`}
                    >
                      {catatan.tags.kelas}
                    </div>
                  )}
                  {catatan.tags.mapel && (
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-500 ${
                        colorMapping[catatan.theme as keyof typeof colorMapping]
                          .pills
                      }`}
                    >
                      {catatan.tags.mapel}
                    </div>
                  )}
                  {catatan.tags.tipe && (
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-500 ${
                        colorMapping[catatan.theme as keyof typeof colorMapping]
                          .pills
                      }`}
                    >
                      {catatan.tags.tipe}
                    </div>
                  )}
                </div>
                <p className="font-600">{catatan.description}</p>
              </div>
              <Image
                src={catatan.thumbnail}
                alt="Catatan thumbnail"
                width={1096}
                height={1472}
                className="rounded-lg after:w-full"
              />
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="absolute left-3 flex -translate-x-4 touch-none select-none py-5 transition-transform ease-out group-hover:translate-x-0 data-[orientation=vertical]:w-1 data-[orientation=horizontal]:flex-col"
            orientation="vertical"
            forceMount
          >
            <ScrollArea.Thumb
              className={`before:min-h-11 before:min-w-11 relative flex-1 rounded-full before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] ${
                colorMapping[catatan.theme as keyof typeof colorMapping].pills
              }`}
            />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </div>
      <div className="flex gap-2 px-3">
        <div className="flex flex-col gap-1">
          <p
            className={`font-600 ${
              colorMapping[catatan.theme as keyof typeof colorMapping].title
            }`}
          >
            {catatan.title}
          </p>
          <div className="flex items-center gap-1">
            <Image
              src={catatan.avatar}
              alt="Catatan avatar"
              width={800}
              height={800}
              className="h-4 w-4 rounded-full"
            />
            <p
              className={`text-sm font-500 ${
                colorMapping[catatan.theme as keyof typeof colorMapping].author
              }`}
            >
              {catatan.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
