import { SelectedSubjectType } from "@/types";

export type TopicFilter = {
  PU: string;
  PKPM: string;
  PPU: string;
  PBM: string;
  "Bahasa Inggris": string;
  "Bahasa Indonesia": string;
};
export interface SoalSelectorI {
  subject_id: string;
  category: SelectedSubjectType;
}
export interface FiltersI extends SoalSelectorI {
  currentTopic: TopicFilter;
  setCurrentTopic: (value: TopicFilter) => void;
}
