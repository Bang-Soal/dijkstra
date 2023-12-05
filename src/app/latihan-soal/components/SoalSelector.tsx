// data
import { questions } from "@/data/latihan-soal";

// libs
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Tabs from "@radix-ui/react-tabs";
import { useRouter } from "next/navigation";

export default function SoalSelector({
  category,
}: Readonly<{ category: "PU" | "PK" | "PPU" | "PBM" }>) {
  const router = useRouter();

  return (
    <ScrollArea.Root className="relative mt-1 flex h-1 grow flex-col">
      <ScrollArea.Viewport className="grow rounded-lg">
        <Tabs.Root defaultValue="tab-1" orientation="vertical" className="grow">
          <Tabs.List className="flex flex-col gap-1">
            {questions[category].map((question, index) => (
              <Tabs.Trigger
                key={question.id}
                value={`tab-${index + 1}`}
                className="relative h-16 overflow-hidden rounded-lg bg-surface-100 p-3 text-left text-xs font-500 text-content-100 transition-[opacity] before:absolute before:inset-0 before:shadow-[inset_-24px_-24px_32px_0_rgba(0,0,0,1)] before:shadow-surface-100 data-[state=active]:cursor-default data-[state=active]:opacity-100 data-[state=inactive]:opacity-30 data-[state=inactive]:hover:opacity-60"
                onClick={() =>
                  router.push(
                    `/latihan-soal/${category.toLowerCase()}/${question.id}`,
                  )
                }
              >
                <p className="w-[110%]">{question.text}</p>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="absolute !-right-4 flex touch-none select-none transition-colors ease-out data-[orientation=vertical]:w-1 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="before:min-h-11 before:min-w-11 relative flex-1 rounded-full bg-surface-400 before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
