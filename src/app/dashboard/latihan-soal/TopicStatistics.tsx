import { DUMMY_STATS } from "../dummy";
import { TopicCard } from "./TopicCard";

export const TopicStatistics = () => {
  // fetch data
  const data = DUMMY_STATS;

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {data.map((stats, idx) => {
        return (
          <TopicCard
            key={idx}
            subject={stats.subject}
            soalFinished={stats.totalSoal}
            feedbacks={stats.feedbacks}
          />
        );
      })}
    </div>
  );
};
