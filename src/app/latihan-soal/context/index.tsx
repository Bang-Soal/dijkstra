import { SoalQuestion, Subject } from "@/types";
import React, { ReactNode, createContext, useState } from "react";
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

export const LatihanSoalContext = createContext<
  LatihanSoalContextType | undefined
>(undefined);

type Props = {
  children: ReactNode;
};

export const LatihanSoalProvider: React.FC<Props> = ({ children }) => {
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

  return (
    <LatihanSoalContext.Provider
      value={{
        subjects,
        setSubjects,
        currentTopic,
        setCurrentTopic,
        yearRange,
        setYearRange,
        question,
        setQuestion,
      }}
    >
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
