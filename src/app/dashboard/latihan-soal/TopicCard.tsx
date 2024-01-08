import { Subject } from "@/types";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { DashboardBoxContainer } from "../elements/DashboardBoxContainer";

export type FeedbackSoal = {
  topic: string;
  soal_dikerjakan: number;
  soal_benar: number;
};
interface TopicCardI {
  subject: Pick<Subject, "name" | "icon">;
  soalFinished: number;
  feedbacks: FeedbackSoal[];
}
export const TopicCard = ({ subject, soalFinished, feedbacks }: TopicCardI) => {
  return (
    <DashboardBoxContainer
      variant={feedbacks.length > 0 ? "primary" : "danger"}
    >
      <div className="flex flex-row items-center gap-3">
        <Image src={subject.icon} alt="icon" width={20} height={20} />
        <p className="font-medium">{subject.name}</p>
      </div>
      <p className="text-3xl font-bold">{soalFinished} Soal</p>
      <div className="flex flex-row items-center gap-1 ">
        <p className="text-nowrap text-xs">Topik yang belum kamu kuasai</p>
        <div className="h-[0.5] w-full bg-slate-300" />
      </div>
      <div className="flex flex-col gap-1">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback, idx) => {
            return (
              <div
                className="flex flex-row gap-6 bg-slate-100 px-3 py-2"
                key={idx}
              >
                <p>{feedback.topic}</p>
                <p className="text-sm text-slate-600">
                  {" "}
                  {feedback.soal_benar}/{feedback.soal_dikerjakan} soal benar
                </p>
              </div>
            );
          })
        ) : (
          <DashboardBoxContainer variant={"dangerSecondary"}>
            <p>
              <AlertCircle className="text-red-500" />
              Perbanyak latihan soal
            </p>
            <p>
              Jangan lupa untuk melatih dirimu di setiap mata pelajaran dengan
              rutin latihan soal.
            </p>
          </DashboardBoxContainer>
        )}
      </div>
    </DashboardBoxContainer>
  );
};
