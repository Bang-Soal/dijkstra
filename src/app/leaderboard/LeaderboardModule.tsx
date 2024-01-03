"use client";
import { useGetTop100LeaderboardQuery } from "@/redux/api/leaderboardApi";
import { Podium } from "./Podium";
import { RankTable } from "./RankTable";
import { DUMMY_LEADERBOARD } from "./dummy";

export const LeaderboardModule = () => {
  const { data, isLoading } = useGetTop100LeaderboardQuery();
  return (
    <div className="flex flex-col py-12">
      <Podium data={DUMMY_LEADERBOARD} isLoading={isLoading} />
      <RankTable data={DUMMY_LEADERBOARD} isLoading={isLoading} />
    </div>
  );
};
