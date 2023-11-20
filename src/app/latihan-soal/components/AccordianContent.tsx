// components
import Iconify from "@components/Iconify";

// data
import { filter } from "@/src/data/latihan-soal";

// libs
import * as Label from "@radix-ui/react-label";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Select from "@radix-ui/react-select";
import { Fragment } from "react";

export default function AccordianContent({
  category,
}: Readonly<{ category: string }>) {
  return (
    <Fragment>
      <div className="flex flex-col rounded-lg bg-emerald-900/25 px-3 py-2">
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Label.Root
              className="w-12 shrink-0 text-surface-100"
              htmlFor="topik"
            >
              Topik:
            </Label.Root>
            <Select.Root defaultValue="Semua">
              <Select.Trigger
                id="topik"
                className="flex grow items-center justify-between rounded py-1 text-left text-emerald-200 outline-none hover:text-white"
                aria-label="Topik"
              >
                <Select.Value />
                <Select.Icon>
                  <Iconify icon="ph:caret-down-bold" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="z-10 rounded-lg border border-surface-400/40 bg-surface-100/20 p-2 text-content-100 shadow-lg backdrop-blur-2xl">
                  <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center text-content-100">
                    <Iconify
                      icon="ph:caret-up-bold"
                      className="animate-bounce"
                    />
                  </Select.ScrollUpButton>
                  <Select.Viewport>
                    {filter[category as keyof typeof filter].topics.map(
                      (topic) => (
                        <Select.Item
                          key={topic}
                          value={topic}
                          className="relative cursor-pointer select-none rounded-md px-5 py-1 pl-9 text-content-100 outline-none data-[state=checked]:bg-emerald-400 data-[state=unchecked]:data-[highlighted]:bg-surface-700/10 data-[state=checked]:text-white"
                        >
                          <Select.ItemText>{topic}</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 top-1/2 inline-flex w-6 -translate-y-1/2 items-center justify-center">
                            <Iconify icon="ph:check-bold" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ),
                    )}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center text-content-100">
                    <Iconify
                      icon="ph:caret-down-bold"
                      className="animate-bounce"
                    />
                  </Select.ScrollDownButton>
                  <Select.Arrow />
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className="flex items-center gap-2">
            <Label.Root
              className="w-12 shrink-0 text-surface-100"
              htmlFor="tahun"
            >
              Tahun:
            </Label.Root>
            <Select.Root defaultValue="Semua">
              <Select.Trigger
                id="tahun"
                className="flex grow items-center justify-between rounded py-1 text-left text-emerald-200 outline-none hover:text-white"
                aria-label="Tahun"
              >
                <Select.Value />
                <Select.Icon>
                  <Iconify icon="ph:caret-down-bold" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="z-10 rounded-lg border border-surface-400/40 bg-surface-100/20 p-2 text-content-100 shadow-lg backdrop-blur-2xl">
                  <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center text-content-100">
                    <Iconify
                      icon="ph:caret-up-bold"
                      className="animate-bounce"
                    />
                  </Select.ScrollUpButton>
                  <Select.Viewport>
                    {filter[category as keyof typeof filter].years.map(
                      (year) => (
                        <Select.Item
                          key={year}
                          value={year}
                          className="relative cursor-pointer select-none rounded-md px-5 py-1 pl-9 text-content-100 outline-none data-[state=checked]:bg-emerald-400 data-[state=unchecked]:data-[highlighted]:bg-surface-700/10 data-[state=checked]:text-white"
                        >
                          <Select.ItemText>{year}</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 top-1/2 inline-flex w-6 -translate-y-1/2 items-center justify-center">
                            <Iconify icon="ph:check-bold" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ),
                    )}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center text-content-100">
                    <Iconify
                      icon="ph:caret-down-bold"
                      className="animate-bounce"
                    />
                  </Select.ScrollDownButton>
                  <Select.Arrow />
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>
      </div>
      <ScrollArea.Root className="">
        <ScrollArea.Viewport className="">
          <div className=""></div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="" orientation="vertical">
          <ScrollArea.Thumb className="" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="" orientation="horizontal">
          <ScrollArea.Thumb className="" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="" />
      </ScrollArea.Root>
    </Fragment>
  );
}
