import { Subject } from "@/types";
import Image from "next/image";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";
import { FeedbackSoal } from "../latihan-soal/TopicCard";
interface AverageScoreCardI {
  subject: Pick<Subject, "name" | "icon">;
  average_score: number;
  highest_score: number;
  lowest_score: number;
  feedbacks: FeedbackSoal[];
  isLowest?: boolean;
}
export const AverageScoreCard = ({
  subject,
  average_score,
  highest_score,
  lowest_score,
  feedbacks,
  isLowest = false,
}: AverageScoreCardI) => {
  return (
    <DashboardBoxContainer variant={isLowest ? "danger" : "primary"}>
      <div className="grid grid-cols-3">
        <div className="mr-4 flex flex-col border-r border-gray-300">
          <div className="flex flex-row items-center gap-3">
            <Image
              src={subject.icon}
              alt={subject.name}
              width={28}
              height={28}
            />
            <p>{subject.name}</p>
          </div>
          <p className="text-2xl font-bold">{average_score}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-blue-600">Highest Score</p>
          <p className="text-2xl font-bold">{highest_score}</p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-red-600">Highest Score</p>
          <p className="text-2xl font-bold">{lowest_score}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-1 ">
        <p className="text-xs">Topic yang belum kamu kuasai</p>
        <div className="h-[0.5] w-full bg-slate-300" />
      </div>
      <div className="flex flex-col gap-1">
        {feedbacks.map((feedback, idx) => {
          return (
            <div
              className="flex flex-row gap-6 bg-slate-100 px-3 py-2"
              key={idx}
            >
              <p>{feedback.topic}</p>
              <p className="text-sm text-slate-600">
                {feedback.soal_benar}/{feedback.soal_dikerjakan} soal benar
              </p>
            </div>
          );
        })}
      </div>
    </DashboardBoxContainer>
  );
};
