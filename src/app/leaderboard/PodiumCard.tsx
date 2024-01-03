import { cn } from "@/lib/utils";
import { LeaderboardUser } from "@/types";
import Image from "next/image";
import { RANK_POSITION, RANK_TYPE } from "./constants";
import { PodiumVariants } from "./style";

interface PodiumCardI {
  user: LeaderboardUser;
  totalPoints: number;
  rank: number;
}

export const PodiumCard = ({ user, totalPoints, rank }: PodiumCardI) => {
  const {
    full_name,
    highschool,
    choosen_university_one,
    choosen_major_one,
    choosen_university_two,
    choosen_major_two,
    choosen_university_three,
    choosen_major_three,
  } = user;

  const targetPtnList = [
    { uni: choosen_university_one, major: choosen_major_one },
    {
      uni: choosen_university_two,
      major: choosen_major_two,
    },
    {
      uni: choosen_university_three,
      major: choosen_major_three,
    },
  ];
  return (
    <div className="w-80 py-3">
      <div className="mb-3 flex w-full flex-col items-center justify-center gap-3 text-white">
        <Image
          src={"/avatar.jpeg"}
          alt="profile"
          width={100}
          height={100}
          className="h-12 w-12 rounded-full"
        />
        <p className="text-center text-lg font-bold">
          {full_name}

          <span className="-mt-2 block text-base font-normal">
            {highschool}
          </span>
        </p>
      </div>
      <div className="relative min-h-60 w-full rounded-xl bg-gradient-to-b from-white/70 to-transparent px-4 py-3">
        <div className="relative -mt-3 flex h-16 w-full justify-center pb-4">
          <div className="absolute">
            <Image
              src={`/illustrations/${RANK_POSITION[rank - 1]}-place.svg`}
              width={160}
              height={80}
              alt="badge"
            />
          </div>
          <div className="relative z-10 flex flex-row items-center gap-4">
            <Image
              src={`/illustrations/${RANK_POSITION[rank - 1]}-rank.svg`}
              width={40}
              height={40}
              alt="rank"
            />
            <div
              className={cn(
                "h-4 w-0.5 rounded-full",
                PodiumVariants({
                  divider: RANK_POSITION[rank - 1] as RANK_TYPE,
                }),
              )}
            />
            <p>{totalPoints}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-row items-center gap-3">
          <div className="h-0.5 w-full rounded-full bg-black/5" />
          <p className="text-nowrap text-gray-500">PTN Pilihan</p>
          <div className="h-0.5 w-full rounded-full bg-black/5" />
        </div>

        <div className="flex flex-col gap-1">
          {targetPtnList.map(({ uni, major }, idx) => {
            return (
              !!uni &&
              !!major && (
                <div
                  key={idx}
                  className="rounded-lg bg-black/5 px-2 py-1 leading-tight"
                >
                  <p className="font-bold">{uni}</p>
                  <p className="text-sm"> {major}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
