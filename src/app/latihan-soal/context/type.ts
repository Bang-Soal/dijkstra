import { SoalQuestion, Subject } from "@/types";
import { TopicFilter, YearRangeFilter } from "../components/interface";

export interface FilterState {
  subjects: Subject[];
  currentTopic: TopicFilter;
  yearRange: YearRangeFilter;
}

export interface QuestionState {
  question: SoalQuestion | null;
}
export interface LatihanSoalState extends FilterState, QuestionState {}

export interface LatihanSoalContextType extends LatihanSoalState {
  setQuestion: (value: SoalQuestion | null) => void;
  setSubjects: (subjects: Subject[]) => void;
  setCurrentTopic: (topic: TopicFilter) => void;
  setYearRange: (range: YearRangeFilter) => void;
  setSelectedSubject: (subjectType: string) => void;
  selectedSubject: string;
}
