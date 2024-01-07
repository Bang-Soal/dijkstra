import { ProgressBar } from "@/components/ui/progress-bar";
import { ArrowUpIcon } from "lucide-react";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";
import { DetailAverageScore } from "./DetailAverageScore";
import { Tips } from "./Tips";

export const TryOutSettings = () => {
  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="grid grid-cols-4 gap-3">
        <DashboardBoxContainer>
          <p className="font-medium">Finished Try Out Set</p>
          <p className="text-xl">
            <span className="text-3xl font-bold">6</span>/10 set
          </p>
          <ProgressBar progress={70} />
        </DashboardBoxContainer>
        <DashboardBoxContainer>
          <p className="font-medium">Average Score</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl font-bold">96%</p>
            <div className="flex w-1/2 flex-row items-center gap-2">
              <ArrowUpIcon className="text-green-500" />
              <p className="text-wrap text-xs">+7% from the last average</p>
            </div>
          </div>
        </DashboardBoxContainer>
        <DashboardBoxContainer variant={"secondary"}>
          <p className="font-medium">Highest Score</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl font-bold">780</p>
            <div className="flex w-1/2 flex-row items-center gap-2">
              <ArrowUpIcon className="text-green-500" />
              <p className="text-wrap text-xs">+7% from the last average</p>
            </div>
          </div>
        </DashboardBoxContainer>
        <DashboardBoxContainer variant={"danger"}>
          <p className="font-medium">Lowest Score</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl font-bold">565</p>
            <div className="flex w-1/2 flex-row items-center gap-2">
              <ArrowUpIcon className="text-green-500" />
              <p className="text-wrap text-xs">+7% from the last average</p>
            </div>
          </div>
        </DashboardBoxContainer>
      </div>
      <DetailAverageScore />
      <Tips />
    </div>
  );
};
