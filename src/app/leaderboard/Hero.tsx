import heroBgMesh from "@public/hero-bg-mesh.webp";
import Image from "next/image";
import { MyRankCard } from "./MyRankCard";
import { PointsInfo } from "./PointsInfo";
import { LeaderboardComponentsI } from "./constants";

export const LeaderboardHero = ({ myRank }: LeaderboardComponentsI) => {
  return (
    <div className=" overflow-y-hidden pt-20 lg:pt-32">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image src={heroBgMesh} alt={""} className="h-full w-full" />
      </div>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 px-5 py-10 text-center text-white md:px-10 lg:w-2/3">
        <p className="text-4xl font-bold">Leaderboard</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eos velit veniam saepe adipisci asperiores facilis ut dolores numquam,
          eveniet nostrum placeat illo tempore ipsa tenetur, at cupiditate
          cumque dolorum dignissimos vitae vel harum beatae. Magni sapiente,
          accusantium odit fuga harum dicta voluptas. Esse, vero dicta a ad
          voluptatem neque?
        </p>
      </div>

      <div className="relative z-10 mx-5 flex flex-col items-center justify-center gap-5 md:mx-10 lg:mx-20 lg:flex-row">
        <div className="w-full lg:w-2/3">
          <MyRankCard myRank={myRank} />
        </div>
        <div className="w-full lg:w-1/3">
          <PointsInfo />
        </div>
      </div>
    </div>
  );
};
