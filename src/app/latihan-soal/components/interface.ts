import { SelectedSubjectType } from "@/types";

export interface SoalSelectorI {
  subject_id: string;
  topic_id?: string;
  category: SelectedSubjectType;
  min_year?: number;
  max_year?: number;
}

export type YearRangeFilter = Record<string, [number, number]>;

export type TopicFilter = Record<string, string>;

export interface FiltersI extends SoalSelectorI {
  currentTopic: TopicFilter;
  setCurrentTopic: (value: TopicFilter) => void;
  yearRange: YearRangeFilter;
  setYearRange: (value: YearRangeFilter) => void;
}
