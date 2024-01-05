import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";
import { Catatanmu } from "./Catatanmu";
import { TopicStatistics } from "./TopicStatistics";

export const LatihanSoalSettings = () => {
  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="grid grid-cols-3 gap-3">
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
            <div className="flex w-1/3 flex-row gap-2">
              <ArrowUpIcon className="text-green-500" />
              <p className="text-wrap">+7% from the last average</p>
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
      <TopicStatistics />
      <Catatanmu />
    </div>
  );
};
