// atoms
import { topicAtom, yearAtom } from "@/data/atoms";

// components
import Iconify from "@/components/Iconify";

// data
import { filter } from "@/data/latihan-soal";

// libs
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { useAtom } from "jotai";

export default function Filters({
  category,
}: Readonly<{ category: "PU" | "PK" | "PPU" | "PBM" }>) {
  const [currentTopic, setCurrentTopic] = useAtom(topicAtom);
  const [currentYear, setCurrentYear] = useAtom(yearAtom);

  return (
    <div className="flex flex-col rounded-lg bg-emerald-900/25 px-3 py-2">
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center gap-2">
          <Label.Root
            className="w-12 shrink-0 text-surface-100"
            htmlFor="topik"
          >
            Topik:
          </Label.Root>
          <Select.Root
            value={currentTopic[category]}
            onValueChange={(value) =>
              setCurrentTopic((prev) => ({ ...prev, [category]: value }))
            }
          >
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
                  <Iconify icon="ph:caret-up-bold" className="animate-bounce" />
                </Select.ScrollUpButton>
                <Select.Viewport>
                  {filter[category].topics.map((topic) => (
                    <Select.Item
                      key={topic}
                      value={topic}
                      className="relative cursor-pointer select-none rounded-md px-5 py-1 pl-9 text-sm text-content-100 outline-none data-[state=checked]:bg-content-200 data-[state=unchecked]:data-[highlighted]:bg-surface-700/10 data-[state=checked]:text-white"
                    >
                      <Select.ItemText>{topic}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 top-1/2 inline-flex w-6 -translate-y-1/2 items-center justify-center">
                        <Iconify icon="ph:check-bold" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
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
          <Select.Root
            value={currentYear[category]}
            onValueChange={(value) =>
              setCurrentYear((prev) => ({ ...prev, [category]: value }))
            }
          >
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
                  <Iconify icon="ph:caret-up-bold" className="animate-bounce" />
                </Select.ScrollUpButton>
                <Select.Viewport>
                  {filter[category].years.map((year) => (
                    <Select.Item
                      key={year}
                      value={year}
                      className="relative cursor-pointer select-none rounded-md px-5 py-1 pl-9 text-sm text-content-100 outline-none data-[state=checked]:bg-content-200 data-[state=unchecked]:data-[highlighted]:bg-surface-700/10 data-[state=checked]:text-white"
                    >
                      <Select.ItemText>{year}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 top-1/2 inline-flex w-6 -translate-y-1/2 items-center justify-center">
                        <Iconify icon="ph:check-bold" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
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
  );
}
