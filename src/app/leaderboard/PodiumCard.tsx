import { LeaderboardUser } from "@/types";
import Image from "next/image";

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
    <div className="w-80 px-4 py-3">
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
      <div className=" relative w-full rounded-xl bg-gradient-to-b from-white/70 to-transparent px-4 py-3">
        <div className=""></div>
        <div className="flex flex-row items-center gap-3">
          <div className="h-1 w-full rounded-full bg-gray-100" />
          <p className="text-nowrap">PTN Pilihan</p>
          <div className="h-1 w-full rounded-full bg-gray-100" />
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
