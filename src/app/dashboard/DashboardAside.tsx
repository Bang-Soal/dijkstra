"use client";
import Logo from "@/components/Logo";
import { Settings, UserCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AccountModal } from "./elements/AccountModal";
import { LogoutButton } from "./elements/LogoutButton";
import { ProfileSettings } from "./elements/ProfileSettings";
import { DashboardButtonVariants } from "./style";

export const DashboardAside = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <aside className="hide-scrollbar sticky bottom-0 z-20 -mt-[60px] hidden h-screen w-96 shrink-0 flex-col gap-4 overflow-y-scroll border-r border-gray-300 px-4 pb-4 lg:flex">
      <div className="sticky top-0 bg-white py-1">
        <Link
          className="flex items-center justify-center gap-1 text-2xl font-700 text-gray-700"
          href="/"
        >
          <Logo
            className="size-8"
            fill="stroke-[#374151]"
            stroke="stroke-[#4B5563]"
          />
          BangSoal
        </Link>
      </div>
      <div className="flex flex-row items-center gap-3">
        <button
          className={DashboardButtonVariants({
            variant: !openMenu ? "active" : "inactive",
          })}
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <UserCircle />
          <p>Profile</p>
        </button>
        <button
          className={DashboardButtonVariants({
            variant: openMenu ? "active" : "inactive",
          })}
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <Settings />
          <p>Settings</p>
        </button>
      </div>

      <ProfileSettings />

      <LogoutButton />

      <AccountModal open={openMenu} setOpen={setOpenMenu} />
    </aside>
  );
};
