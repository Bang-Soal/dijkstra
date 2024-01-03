import { LeaderboardData } from "@/types/leaderboard";
import { LeaderboardFilters } from "./Filters";
import { RankInfoAccordion } from "./RankInfoAccordion";

interface RankTableI {
  data: LeaderboardData[];
  isLoading?: boolean;
}

export const RankTable = ({ data }: RankTableI) => {
  return (
    <div className="bg-white px-10 pb-10 lg:px-16">
      <LeaderboardFilters />

      <div className="grid border-spacing-2 grid-cols-6 gap-4 px-2 pb-2 text-left lg:grid-cols-12">
        <div className="col-span-1 font-bold">Rank</div>
        <div className="col-span-4 font-bold lg:col-span-3">Name</div>
        <div className="col-span-1 font-bold lg:col-span-2">Poin</div>
        <div className="col-span-2 hidden font-bold lg:block">Pilihan 1</div>
        <div className="col-span-2 hidden font-bold lg:block">Pilihan 2</div>
        <div className="col-span-2 hidden font-bold lg:block">Pilihan 3</div>
      </div>
      <div className="hide-scrollbar max-h-[67vh] overflow-y-scroll">
        {data
          .concat(data)
          .slice(3)
          .map(({ rank, totalPoints, user }, idx) => (
            <div key={idx} className="my-2">
              <div className="hidden border-spacing-2 grid-cols-12 items-center gap-4 rounded-lg bg-gray-100 px-2 py-2 text-left lg:grid">
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
              <div className="lg:hidden">
                <RankInfoAccordion data={{ user, totalPoints, rank }} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
