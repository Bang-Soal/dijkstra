import { Podium } from "./Podium";
import { RankTable } from "./RankTable";
import { DUMMY_LEADERBOARD } from "./dummy";

export const LeaderboardModule = () => {
  return (
    <div className="flex flex-col gap-4 py-12">
      <Podium data={DUMMY_LEADERBOARD} />
      <RankTable data={DUMMY_LEADERBOARD} />
    </div>
  );
};
