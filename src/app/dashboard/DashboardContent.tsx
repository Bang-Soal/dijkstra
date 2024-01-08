"use client";

import { useWindowsBreakpoints } from "@/lib/hooks/useWindowBreakpoints";
import { cn } from "@/lib/utils";
import * as Tabs from "@radix-ui/react-tabs";
import withAuth from "../components/withAuth";
import { ProfileSettings } from "./elements/ProfileSettings";
import { LatihanSoalSettings } from "./latihan-soal/LatihanSoalSettings";
import { tabsTriggerStyle } from "./style";
import { TryOutSettings } from "./try-out/TryOutSettings";

const DashboardContent = () => {
  const { isDesktopBreakpoint } = useWindowsBreakpoints();

  return (
    <div className="px-4">
      <Tabs.Root defaultValue="latihan-soal">
        <Tabs.List className="hide-scrollbar sticky top-0 flex flex-row gap-4 overflow-x-scroll bg-white py-3">
          {!isDesktopBreakpoint && (
            <Tabs.Trigger className={cn(tabsTriggerStyle)} value="profile">
              Profile
            </Tabs.Trigger>
          )}

          <Tabs.Trigger className={cn(tabsTriggerStyle)} value="latihan-soal">
            Latihan Soal
          </Tabs.Trigger>
          <Tabs.Trigger className={cn(tabsTriggerStyle)} value="try-out">
            Try Out
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="profile">
          <ProfileSettings />
        </Tabs.Content>

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

export default withAuth(DashboardContent);
