import { LeaderboardData } from "@/types/leaderboard";
import { PodiumCard } from "./PodiumCard";

interface PodiumI {
  data: LeaderboardData[];
}
export const Podium = ({ data }: PodiumI) => {
  return (
    <div className="relative flex flex-row justify-center">
      <div className="absolute -bottom-20 h-48 w-full rounded-t-[50%] bg-white" />
      {data.slice(0, 3).map((rank, idx) => {
        return (
          <div key={idx}>
            <PodiumCard {...rank} />
          </div>
        );
      })}
    </div>
  );
};
