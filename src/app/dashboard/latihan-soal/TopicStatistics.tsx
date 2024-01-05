import Image from "next/image";
import { DUMMY_STATS } from "../dummy";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";

export const TopicStatistics = () => {
  // fetch data
  const data = DUMMY_STATS;

  return (
    <div className="grid grid-cols-2 gap-3">
      <DashboardBoxContainer>
        <div className="flex flex-row items-center gap-3">
          <Image src={""} alt="icon" width={20} height={20} />
          <p className="font-medium">PU</p>
        </div>
        <p className="text-3xl font-bold">400 Soal</p>
        <div className="flex flex-row items-center gap-1 ">
          <p className="text-xs">Topic yang belum kamu kuasai</p>
          <div className="h-[0.5] w-full bg-slate-300" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Silogisme</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
        </div>
      </DashboardBoxContainer>
      <DashboardBoxContainer>
        <div className="flex flex-row items-center gap-3">
          <Image src={""} alt="icon" width={20} height={20} />
          <p className="font-medium">PU</p>
        </div>
        <p className="text-3xl font-bold">400 Soal</p>
        <div className="flex flex-row items-center gap-1 ">
          <p className="text-xs">Topic yang belum kamu kuasai</p>
          <div className="h-[0.5] w-full bg-slate-300" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Silogisme</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
        </div>
      </DashboardBoxContainer>
      <DashboardBoxContainer>
        <div className="flex flex-row items-center gap-3">
          <Image src={""} alt="icon" width={20} height={20} />
          <p className="font-medium">PU</p>
        </div>
        <p className="text-3xl font-bold">400 Soal</p>
        <div className="flex flex-row items-center gap-1 ">
          <p className="text-xs">Topic yang belum kamu kuasai</p>
          <div className="h-[0.5] w-full bg-slate-300" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Silogisme</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
        </div>
      </DashboardBoxContainer>
      <DashboardBoxContainer>
        <div className="flex flex-row items-center gap-3">
          <Image src={""} alt="icon" width={20} height={20} />
          <p className="font-medium">PU</p>
        </div>
        <p className="text-3xl font-bold">400 Soal</p>
        <div className="flex flex-row items-center gap-1 ">
          <p className="text-xs">Topic yang belum kamu kuasai</p>
          <div className="h-[0.5] w-full bg-slate-300" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Silogisme</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
          <div className="flex flex-row gap-6 bg-slate-100 px-3 py-2">
            <p>Barisan Bilangan</p>
            <p className="text-sm text-slate-600"> 2/200 soal benar</p>
          </div>
        </div>
      </DashboardBoxContainer>
    </div>
  );
};
