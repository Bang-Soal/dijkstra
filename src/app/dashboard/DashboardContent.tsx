"use client";

import { cn } from "@/lib/utils";
import * as Tabs from "@radix-ui/react-tabs";
import { LatihanSoalSettings } from "./latihan-soal/LatihanSoalSettings";
import { tabsTriggerStyle } from "./style";
import { TryOutSettings } from "./try-out/TryOutSettings";

export const DashboardContent = () => {
  return (
    <div className="px-4">
      <Tabs.Root className="" defaultValue="latihan-soal">
        <Tabs.List className="sticky top-0 flex flex-row gap-4 bg-white py-3 text-3xl">
          <Tabs.Trigger className={cn(tabsTriggerStyle)} value="latihan-soal">
            Latihan Soal
          </Tabs.Trigger>
          <Tabs.Trigger className={cn(tabsTriggerStyle)} value="try-out">
            Try Out
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="latihan-soal">
          <LatihanSoalSettings />
        </Tabs.Content>
        <Tabs.Content value="try-out">
          <TryOutSettings />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
