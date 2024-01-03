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
    <div className="relative md:-mb-10">
      <div className="absolute -bottom-10 h-56 w-full rounded-t-[50%] bg-white md:-bottom-0" />
      <div className="flex flex-col items-center justify-start md:flex-row md:justify-center">
        {customOrder.map((order, idx) => {
          const rankMD = data[order];
          const rank = data[idx];
          return (
            <div key={idx}>
              <div
                className={cn(
                  PodiumVariants({
                    rank:
                      rankMD.rank == 2
                        ? "second"
                        : rankMD.rank == 1
                          ? "first"
                          : "third",
                  }),
                  "hidden md:block",
                )}
              >
                <PodiumCard {...rankMD} />
              </div>
              <div
                className={cn(
                  PodiumVariants({
                    rank:
                      rank.rank == 2
                        ? "second"
                        : rank.rank == 1
                          ? "first"
                          : "third",
                  }),
                  "md:hidden",
                )}
              >
                <PodiumCard {...rank} />
              </div>
            </div>
          );
        })}
      </div>
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
