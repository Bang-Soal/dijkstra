"use client";

// components
import Iconify from "@/components/Iconify";

// data
import { colorMapping } from "@/data/bang-catatan";

// libs
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Toggle from "@radix-ui/react-toggle";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import { useRef, useState } from "react";

// utils
import { cn } from "@/lib/utils";
import BookmarkingWindow from "./BookmarkingWindow";

export type Catatan = {
  id: string;
  size: string;
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
  downloads: number;
  theme: string;
};

export default function CatatanCard({
  catatan,
}: Readonly<{ catatan: Catatan }>) {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isBookmarking, setIsBookmarking] = useState(false);

  return (
    <div
      ref={cardRef}
      className="group flex flex-col justify-stretch gap-2 will-change-transform @container"
      onMouseLeave={() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <div
        className={cn(
          "relative flex aspect-[16/10] w-full flex-col items-center overflow-hidden rounded-xl border",
          colorMapping[catatan.theme as keyof typeof colorMapping].viewport,
        )}
      >
        <BookmarkingWindow isBookmarking={isBookmarking} catatan={catatan} />
        <div
          className={cn(
            "stagger children:sm:translate-x-14 children:sm:group-hover:translate-x-0 absolute inset-y-0 right-0 z-10 flex flex-col justify-center gap-2 p-3",
            isBookmarking && "children:sm:translate-x-0",
          )}
        >
          <Toggle.Root
            aria-label="Toggle like"
            className={cn(
              "rounded-full bg-surface-100 p-3 text-content-300 shadow-xl transition-transform duration-300 hover:bg-surface-200 active:scale-90 active:delay-0 active:duration-150 data-[state=on]:text-white",
              colorMapping[catatan.theme as keyof typeof colorMapping].button,
            )}
          >
            <Iconify icon="ph:heart-bold" />
          </Toggle.Root>
          <Toggle.Root
            aria-label="Toggle like"
            className={cn(
              "rounded-full bg-surface-100 p-3 text-content-300 shadow-xl transition-transform duration-300 hover:bg-surface-200 active:scale-90 active:delay-0 active:duration-150 data-[state=on]:text-white",
              colorMapping[catatan.theme as keyof typeof colorMapping].button,
            )}
            pressed={false}
            onPressedChange={() => setIsBookmarking(!isBookmarking)}
          >
            <Iconify
              icon={isBookmarking ? "ph:x-bold" : "ph:bookmark-simple-bold"}
            />
          </Toggle.Root>
          <Tooltip.Provider delayDuration={300} skipDelayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  aria-label="Button download"
                  className="rounded-full bg-surface-100 p-3 text-content-300 shadow-xl transition-transform duration-300 hover:bg-surface-200 active:scale-90 active:delay-0 active:duration-150"
                >
                  <Iconify icon="ph:download-simple-bold" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="select-none rounded-md bg-content-200 px-4 py-2 font-600 leading-none text-surface-100 shadow-lg data-[state=closed]:animate-slide-up-and-fade data-[state=delayed-open]:animate-slide-down-and-fade"
                  side="bottom"
                  sideOffset={6}
                >
                  {catatan.size}
                  <Tooltip.Arrow className="fill-content-200" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
          <button
            aria-label="Button info"
            className="rounded-full bg-surface-100 p-3 text-content-300 shadow-xl transition-transform duration-300 hover:bg-surface-200 active:scale-90 active:delay-0 active:duration-150 sm:hidden"
          >
            <Iconify icon="ph:info-bold" />
          </button>
        </div>
        <ScrollArea.Root className="h-full">
          <ScrollArea.Viewport
            ref={scrollAreaRef}
            className={cn(
              "h-full origin-top-right px-16 pb-10 pt-5 transition-transform duration-300 group-hover:scale-110 @md:px-24",
              isBookmarking && "scale-110",
            )}
          >
            <div
              className={cn(
                "flex max-h-0 flex-col gap-3 overflow-hidden transition-[max-height] duration-1000 group-hover:max-h-screen",
                isBookmarking && "max-h-screen",
              )}
            >
              <div className="flex flex-wrap gap-1">
                {catatan.tags.kelas && (
                  <div
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-500",
                      colorMapping[catatan.theme as keyof typeof colorMapping]
                        .pills,
                    )}
                  >
                    {catatan.tags.kelas}
                  </div>
                )}
                {catatan.tags.mapel && (
                  <div
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-500",
                      colorMapping[catatan.theme as keyof typeof colorMapping]
                        .pills,
                    )}
                  >
                    {catatan.tags.mapel}
                  </div>
                )}
                {catatan.tags.tipe && (
                  <div
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-500",
                      colorMapping[catatan.theme as keyof typeof colorMapping]
                        .pills,
                    )}
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
              className="mt-5 rounded-lg shadow-2xl"
            />
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            orientation="vertical"
            forceMount
            className={cn(
              "absolute left-1 flex h-full w-2.5 -translate-x-4 touch-none select-none border-l border-l-transparent p-[1px] py-5 transition-transform duration-300 group-hover:translate-x-0",
              isBookmarking && "translate-x-0",
            )}
          >
            <ScrollArea.Thumb
              className={cn(
                "relative flex-1 rounded-full",
                colorMapping[catatan.theme as keyof typeof colorMapping].pills,
              )}
            />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
      <div className="flex gap-2 px-3">
        <div className="flex grow flex-col gap-1">
          <p
            className={cn(
              "line-clamp-1 font-600",
              colorMapping[catatan.theme as keyof typeof colorMapping].title,
            )}
          >
            {catatan.title}
          </p>
          <div className="flex items-center gap-1">
            <Image
              src={catatan.avatar}
              alt="Catatan avatar"
              width={800}
              height={800}
              className="size-4 rounded-full"
            />
            <p
              className={cn(
                "text-sm font-500",
                colorMapping[catatan.theme as keyof typeof colorMapping].author,
              )}
            >
              {catatan.author}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 py-1 text-sm font-500">
          <div className="flex items-center gap-1">
            <Iconify
              icon="ph:heart-fill"
              className={
                colorMapping[catatan.theme as keyof typeof colorMapping]
                  .statIcon
              }
            />
            <p
              className={
                colorMapping[catatan.theme as keyof typeof colorMapping]
                  .statNumber
              }
            >
              {catatan.likes}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Iconify
              icon="ph:download-simple-bold"
              className={
                colorMapping[catatan.theme as keyof typeof colorMapping]
                  .statIcon
              }
            />
            <p
              className={
                colorMapping[catatan.theme as keyof typeof colorMapping]
                  .statNumber
              }
            >
              {catatan.downloads}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
