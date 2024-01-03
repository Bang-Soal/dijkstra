import { LeaderboardData } from "@/types/leaderboard";
import { LeaderboardFilters } from "./Filters";

interface RankTableI {
  data: LeaderboardData[];
  isLoading?: boolean;
}

export const RankTable = ({ data }: RankTableI) => {
  return (
    <div className="bg-white px-10 pb-10 lg:px-16">
      <LeaderboardFilters />

      <div className="grid border-spacing-2 grid-cols-12 gap-4 px-2 text-left">
        <div className="col-span-1 font-bold">Rank</div>
        <div className="col-span-3 font-bold">Name</div>
        <div className="col-span-2 font-bold">Poin</div>
        <div className="col-span-2 font-bold">Choice 1</div>
        <div className="col-span-2 font-bold">Choice 2</div>
        <div className="col-span-2 font-bold">Choice 3</div>
      </div>
      <div className="hide-scrollbar max-h-[67vh] overflow-y-scroll">
        {data
          .concat(data)
          .slice(3)
          .map(({ rank, totalPoints, user }, idx) => (
            <div
              key={idx}
              className="my-2 grid border-spacing-2 grid-cols-12 items-center gap-4 rounded-lg bg-gray-100 px-2 py-2 text-left"
            >
              <div className="col-span-1 rounded-lg px-2 font-bold text-gray-500">
                {rank}
              </div>
              <div className="col-span-3 rounded-lg">
                <p className="font-bold">{user.full_name}</p>
                <p className="text-sm">{user.highschool}</p>
              </div>
              <div className="col-span-2 rounded-lg font-bold">
                {totalPoints}
              </div>
              <div className="col-span-2 rounded-lg">
                <p className="font-bold">{user.choosen_university_one}</p>
                <p className="text-sm">{user.choosen_major_one}</p>
              </div>
              <div className="col-span-2 rounded-lg">
                <p className="font-bold">{user.choosen_university_two}</p>
                <p className="text-sm">{user.choosen_major_two}</p>
              </div>
              <div className="col-span-2 rounded-lg">
                <p className="font-bold">{user.choosen_university_three}</p>
                <p className="text-sm">{user.choosen_major_three}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
