import heroBgMesh from "@public/hero-bg-mesh.webp";
import Image from "next/image";
import { MyRankCard } from "./MyRankCard";
import { PointsInfo } from "./PointsInfo";

export const LeaderboardHero = () => {
  return (
    <div className="relative overflow-y-hidden pt-20 lg:pt-32">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Image src={heroBgMesh} alt={""} className="h-full w-full" />
      </div>
      <div className="absolute -bottom-20 h-40 w-full rounded-[50%] bg-white"></div>

      <div className="mx-auto grid w-2/3 grid-cols-1 gap-8 py-10 text-center text-white">
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

      <div className="relative z-10 mx-10 flex flex-col items-center justify-center gap-5 lg:mx-20 lg:flex-row">
        <div className="w-2/3">
          <MyRankCard />
        </div>
        <div className="w-1/3">
          <PointsInfo />
        </div>
      </div>

      <div className="h-72 "></div>
    </div>
  );
};
