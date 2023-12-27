import { SelectedSubjectType, SoalQuestion, Subject } from "@/types";
import { useParams } from "next/navigation";
import React, { ReactNode, createContext, useMemo, useState } from "react";
import { TopicFilter, YearRangeFilter } from "../components/interface";
import { LatihanSoalContextType, LatihanSoalState } from "./type";

const defaultState: LatihanSoalState = {
  subjects: [],
  question: null,
  currentTopic: {
    PU: "Semua",
    PKPM: "Semua",
    PPU: "Semua",
    PBM: "Semua",
    "Bahasa Inggris": "Semua",
    "Bahasa Indonesia": "Semua",
  },
  yearRange: {
    PU: [2010, 2023],
    PKPM: [2010, 2023],
    PPU: [2010, 2023],
    PBM: [2010, 2023],
    "Bahasa Inggris": [2010, 2023],
    "Bahasa Indonesia": [2010, 2023],
  },
};

export const SELECTED_SUBJECT_MAPPING: Record<SelectedSubjectType, string> = {
  "Bahasa Indonesia": "bahasa-indonesia",
  "Bahasa Inggris": "bahasa-inggris",
  PBM: "pbm",
  PU: "pu",
  PKPM: "pkpm",
  PPU: "ppu",
};

export const LatihanSoalContext = createContext<
  LatihanSoalContextType | undefined
>(undefined);

type Props = {
  children: ReactNode;
};

export const LatihanSoalProvider: React.FC<Props> = ({ children }) => {
  const { slug } = useParams();

  const [question, setQuestion] = useState<SoalQuestion | null>(
    defaultState.question,
  );
  const [subjects, setSubjects] = useState<Subject[]>(defaultState.subjects);
  const [currentTopic, setCurrentTopic] = useState<TopicFilter>(
    defaultState.currentTopic,
  );
  const [yearRange, setYearRange] = useState<YearRangeFilter>(
    defaultState.yearRange,
  );

  const [selectedSubject, setSelectedSubject] = useState<string>(slug[0]);

  const value = useMemo(
    () => ({
      subjects,
      setSubjects,
      currentTopic,
      setCurrentTopic,
      yearRange,
      setYearRange,
      question,
      setQuestion,
      selectedSubject,
      setSelectedSubject,
    }),
    [yearRange, selectedSubject, currentTopic, subjects],
  );

  return (
    <LatihanSoalContext.Provider value={value}>
      {children}
    </LatihanSoalContext.Provider>
  );
};

export const useLatihanSoalContext = () => {
  const context = React.useContext(LatihanSoalContext);
  if (context === undefined) {
    throw Error("Error using Latihan Soal Context");
  } else {
    return context;
  }
};
