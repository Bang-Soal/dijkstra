import { ProgressBar } from "@/components/ui/progress-bar";
import { useGetHeadersDashboardQuery } from "@/redux/api/dashboardApi";
import Image from "next/image";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";
import { Catatanmu } from "./Catatanmu";
import { TopicStatistics } from "./TopicStatistics";

export const LatihanSoalSettings = () => {
  const { data } = useGetHeadersDashboardQuery();

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div className="grid grid-cols-3 gap-3">
        <DashboardBoxContainer>
          <p className="font-medium">Latihan Soal Selesai</p>
          <p className="text-xl">
            <span className="text-3xl font-bold">
              {data?.data.finished.done}{" "}
            </span>
            / {data?.data.finished.total} soal
          </p>
          <ProgressBar progress={data?.data.finished.percentage || 0} />
        </DashboardBoxContainer>
        <DashboardBoxContainer>
          <p className="font-medium">Akurasi</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-3xl font-bold">
              {data?.data.accuracy.percentage}%
            </p>
            {/* <div className="flex w-1/2 flex-row items-center gap-2">
              <ArrowUpIcon className="text-green-500" />
              <p className="text-wrap text-xs">+7% from the last average</p>
            </div> */}
          </div>
          <p className="text-slate-500">
            {data?.data.accuracy.correct_answers} /{" "}
            {data?.data.accuracy.total_attempted_question} soal benar
          </p>
          <ProgressBar progress={data?.data.accuracy.percentage || 0} />
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
