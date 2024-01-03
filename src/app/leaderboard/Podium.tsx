import { cn } from "@/lib/utils";
import { LeaderboardData } from "@/types/leaderboard";
import { PodiumCard } from "./PodiumCard";
import { PodiumVariants } from "./style";

interface PodiumI {
  data: LeaderboardData[];
  isLoading?: boolean;
}
export const Podium = ({ data }: PodiumI) => {
  const customOrder = [1, 0, 2];
  return (
    <div className="relative -mb-10 flex flex-row justify-center">
      <div className="absolute -bottom-0 h-56 w-full rounded-t-[50%] bg-white" />
      {customOrder.map((order, idx) => {
        const rank = data[order];
        return (
          <div
            key={idx}
            className={cn(
              PodiumVariants({
                rank: idx == 0 ? "second" : idx == 1 ? "first" : "third",
              }),
            )}
          >
            <PodiumCard {...rank} />
          </div>
        );
      })}
    </div>
  );
};

export const PodiumSkeleton = () => {
  return Array.from([1, 2, 3]).map((el) => {
    return (
      <div
        key={el}
        className="skeleton relative h-16 w-full bg-surface-300 from-surface-300 via-surface-100 to-surface-300"
      ></div>
    );
  });
};
