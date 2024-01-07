import { DUMMY_TO_AVG } from "../dummy";
import { AverageScoreCard } from "./AverageScoreCard";

export const DetailAverageScore = () => {
  const data = DUMMY_TO_AVG;
  return (
    <div>
      <p>Detail Average Score</p>
      <div className="grid grid-cols-2 gap-3">
        {data.map((avgData, idx) => {
          return <AverageScoreCard key={idx} {...avgData} />;
        })}
      </div>
    </div>
  );
};
