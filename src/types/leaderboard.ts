import { LeaderboardUser, ResponseWrapper } from ".";

export type LeaderboardData = {
  user: LeaderboardUser;
  totalPoints: number;
  rank: number;
};

export type LeaderboardResponse = ResponseWrapper<LeaderboardData[]>;
export type MyRankResponse = ResponseWrapper<LeaderboardData>;
