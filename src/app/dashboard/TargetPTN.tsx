import CaretUpIcon from "@/components/icons/CaretUp";
import { RootState, useAppSelector } from "@/redux/store";
import Image from "next/image";
export const TargetPTN = () => {
  const { profile } = useAppSelector((state: RootState) => state.user);
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4">
      <div className="flex flex-row items-center justify-center gap-3">
        <p className="text-center text-2xl font-bold">Target PTN</p>
        <Image src={"/icons/Target.svg"} alt="target" width={40} height={40} />
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
            <p className="font-bold">{profile?.choosen_university_two ?? ""}</p>
            <p>{profile?.choosen_major_two}</p>
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
              {profile?.choosen_university_three ?? ""}
            </p>
            <p>{profile?.choosen_major_three}</p>
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
  );
};
