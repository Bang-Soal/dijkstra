"use client";
import CaretUpIcon from "@/components/icons/CaretUp";
import { Button } from "@/components/ui/button";
import { LeaderboardData } from "@/types";
import { ArrowDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface MyRankCardI {
  myRank?: LeaderboardData;
}

export const MyRankCard = ({ myRank }: MyRankCardI) => {
  const router = useRouter();
  return (
    <div className="rounded-3xl bg-gradient-to-br from-emerald-700/60 to-emerald-600/50 py-3">
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-5 text-white lg:flex-row lg:divide-x-2 lg:divide-emerald-600/80">
        <div className="grid w-full grid-cols-2 justify-items-center gap-4 lg:w-2/5">
          <p className="col-span-2 gap-4 justify-self-start text-xl md:px-10">
            Posisimu
          </p>

          {!!myRank ? (
            <>
              <div className="flex flex-row items-center">
                <span>
                  <CaretUpIcon />
                </span>
                <p className="text-5xl font-bold">
                  {" "}
                  <span className="text-base font-bold text-emerald-200">
                    #
                  </span>
                  {myRank.rank}
                </p>
              </div>
              <div>
                <p className="text-5xl font-bold">
                  {myRank.totalPoints}{" "}
                  <span className="text-base font-bold text-emerald-200">
                    pts
                  </span>
                </p>
              </div>
              <div className="col-span-2">
                <Button variant={"bsSecondary"} className="w-full">
                  <span className="pr-2">
                    <ArrowDown className="w-4" />
                  </span>
                  Lihat posisi
                </Button>
              </div>
            </>
          ) : (
            <div className="col-span-2">
              {" "}
              <Button
                variant={"bsSecondary"}
                onClick={() => {
                  router.push("/login");
                }}
              >
                Masuk untuk melihat posisimu
              </Button>
            </div>
          )}
        </div>
        <div className="grid w-full grid-cols-1 lg:w-3/5">
          {[...Array(3)].map((_, idx) => {
            return (
              <div
                key={idx}
                className="grid grid-cols-3 content-center gap-4 divide-x-2 divide-emerald-600/80"
              >
                <div className="col-span-2 mx-auto flex flex-col py-2 leading-tight">
                  <p className="font-bold">Institut Teknologi Bandung</p>
                  <p>STEI</p>
                </div>
                <div className="col-span-1 flex w-full flex-row items-center justify-center gap-1 px-2 py-2">
                  <span>
                    <CaretUpIcon />
                  </span>
                  <div className="flex flex-row items-end gap-1">
                    <span className="text-sm font-bold text-emerald-200">
                      #
                    </span>
                    <p className="text-5xl font-bold">{idx + 1}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
