import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";

export const LatsolOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <DashboardBoxContainer>
        <p className="font-medium">Finished Latihan Soal</p>
        <p className="text-xl">
          <span className="text-3xl font-bold">700</span>/1000 soal
        </p>
        <ProgressBar progress={70} />
      </DashboardBoxContainer>
      <DashboardBoxContainer>
        <p className="font-medium">Accuracy Rate</p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-3xl font-bold">96%</p>
          <div className="flex w-1/2 flex-row items-center gap-2">
            <ArrowUpIcon className="text-green-500" />
            <p className="text-wrap text-xs">+7% from the last average</p>
          </div>
        </div>
        <p className="text-slate-500">500/789 soal benar</p>
        <ProgressBar progress={70} />
      </DashboardBoxContainer>
      <DashboardBoxContainer>
        <p className="flex flex-row items-center gap-3 font-medium">
          <Image src={"/icons/Fire.svg"} alt="fire" width={28} height={28} />
          Streak
        </p>
        <p className="text-3xl font-bold">12 Days</p>
      </DashboardBoxContainer>
    </div>
  );
};
