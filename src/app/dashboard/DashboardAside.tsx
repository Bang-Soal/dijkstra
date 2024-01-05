"use client";
import Logo from "@/components/Logo";
import CaretUpIcon from "@/components/icons/CaretUp";
import { RootState, useAppSelector } from "@/redux/store";
import { LogOut, Settings, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProfileCard } from "./elements/ProfileCard";
import { ReferralCode } from "./elements/ReferralCode";
import { DashboardButtonVariants } from "./style";

export const DashboardAside = () => {
  const { profile } = useAppSelector((state: RootState) => state.user);

  const [activeMenu, setActiveMenu] = useState<string>("profile");
  return (
    <aside className="hide-scrollbar sticky bottom-0 z-20 -mt-[60px] flex h-screen w-96 shrink-0 flex-col  gap-4 overflow-y-scroll border-r border-gray-300 px-4 pb-4">
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
            variant: activeMenu == "profile" ? "active" : "inactive",
          })}
          onClick={() => {
            setActiveMenu("profile");
          }}
        >
          <UserCircle />
          <p>Profile</p>
        </button>
        <button
          className={DashboardButtonVariants({
            variant: activeMenu != "profile" ? "active" : "inactive",
          })}
          onClick={() => {
            setActiveMenu("settings");
          }}
        >
          <Settings />
          <p>Settings</p>
        </button>
      </div>
      <ProfileCard
        full_name={profile?.full_name ?? ""}
        highschool={profile?.highschool ?? ""}
        points={1800}
      />
      <ReferralCode />
      <div className="h-0.5 w-full border border-slate-200 bg-gray-300" />
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4">
        <div className="flex flex-row items-center justify-center gap-3">
          <p className="text-center text-2xl font-bold">Target PTN</p>
          <Image
            src={"/icons/Target.svg"}
            alt="target"
            width={40}
            height={40}
          />
        </div>
        <div className="rounded-xl bg-black/60 px-7 py-6 text-sm">
          <div className="grid grid-cols-3 content-center gap-2 text-white">
            <div className="col-span-2 mx-auto flex flex-col leading-tight">
              <p className="font-bold">{profile?.choosen_university_one}</p>
              <p>{profile?.choosen_major_one}</p>
            </div>
            <div className="col-span-1 flex w-full flex-row items-center justify-center gap-1 px-2">
              <span>
                <CaretUpIcon />
              </span>
              <div className="flex flex-row items-end gap-1">
                <span className="text-sm font-bold text-emerald-200">#</span>
                <p className="text-4xl font-bold">{1}</p>
              </div>
            </div>
            <div className="col-span-2 mx-auto flex flex-col leading-tight">
              <p className="font-bold">
                {profile?.choosen_university_one ?? ""}
              </p>
              <p>{profile?.choosen_major_one}</p>
            </div>
            <div className="col-span-1 flex w-full flex-row items-center justify-center gap-1 px-2">
              <span>
                <CaretUpIcon />
              </span>
              <div className="flex flex-row items-end gap-1">
                <span className="text-sm font-bold text-emerald-200">#</span>
                <p className="text-4xl font-bold">{2}</p>
              </div>
            </div>
            <div className="col-span-2 mx-auto flex flex-col leading-tight">
              <p className="font-bold">
                {profile?.choosen_university_one ?? ""}
              </p>
              <p>{profile?.choosen_major_one}</p>
            </div>
            <div className="col-span-1 flex w-full flex-row items-center justify-center gap-1 px-2">
              <span>
                <CaretUpIcon />
              </span>
              <div className="flex flex-row items-end gap-1">
                <span className="text-sm font-bold text-emerald-200">#</span>
                <p className="text-4xl font-bold">{2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-4 rounded-xl border-4 border-orange-200 bg-orange-500">
        <div className="absolute right-4 top-4 z-20 text-lg font-bold text-white">
          <p>Limited points</p>
          <p className="text-xl">59:12:06</p>
        </div>
        <div className="absolute top-0 z-10 h-28 w-full bg-gradient-to-b from-orange-500 to-orange-100/0 blur-md" />
        <Image
          src={"/illustrations/flashcard-illustration.svg"}
          alt="flashcard"
          width={100}
          height={100}
          className="h-full w-full"
        />
        <div className="absolute bottom-0 z-10 h-28 w-full bg-gradient-to-t from-orange-500 to-orange-100/0 blur-md" />
        <p className="absolute bottom-4 z-10 w-full text-center text-2xl font-bold text-white ">
          Flashcard of the day
        </p>
      </div>
      <div>
        <button className="flex w-full flex-row items-center justify-center gap-2 py-2 text-xl text-red-600">
          <LogOut />
          Logout
        </button>
      </div>
    </aside>
  );
};
