import { DUMMY_STATS } from "../dummy";
import { TopicCard } from "./TopicCard";

export const TopicStatistics = () => {
  // fetch data
  const data = DUMMY_STATS;

  return (
    <div className="grid grid-cols-2 gap-3">
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
