import { useGetHeadersDashboardQuery } from "@/redux/api/dashboardApi";
import { Catatanmu } from "./Catatanmu";
import { LatsolOverview } from "./LatsolOverview";
import { TopicStatistics } from "./TopicStatistics";

export const LatihanSoalSettings = () => {
  const { data } = useGetHeadersDashboardQuery();

  return (
    <div className="flex flex-col gap-5 pb-4">
      <LatsolOverview />
      <TopicStatistics />
      <Catatanmu />
    </div>
  );
};
