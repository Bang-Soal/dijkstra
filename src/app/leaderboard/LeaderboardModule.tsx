"use client";
import {
  useGetMyRankQuery,
  useGetTop100LeaderboardQuery,
} from "@/redux/api/leaderboardApi";
import { RootState, useAppSelector } from "@/redux/store";
import { LeaderboardHero } from "./Hero";
import { Podium } from "./Podium";
import { RankTable } from "./RankTable";

export const LeaderboardModule = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const { data: leaderboardData, isLoading } = useGetTop100LeaderboardQuery();
  const { data: myRankData, isLoading: isMyRankLoading } = useGetMyRankQuery(
    undefined,
    {
      skip: !user.profile,
    },
  );
  console.log(myRankData);

  return (
    <div className="flex flex-col pb-12">
      <LeaderboardHero
        data={leaderboardData?.data ?? []}
        myRank={leaderboardData?.data[(myRankData?.data ?? 0) - 1]}
        isLoading={isLoading}
      />
      <Podium data={leaderboardData?.data ?? []} isLoading={isLoading} />
      <RankTable
        data={leaderboardData?.data ?? []}
        myRank={leaderboardData?.data[(myRankData?.data ?? 0) - 1]}
        isLoading={isLoading}
      />
    </div>
  );
};
