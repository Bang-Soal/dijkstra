import { SelectedSubjectType, SoalQuestion, Subject } from "@/types";
import { useParams } from "next/navigation";
import React, {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TopicFilter, YearRangeFilter } from "../components/interface";
import { LatihanSoalContextType, LatihanSoalState } from "./type";

const defaultState: LatihanSoalState = {
  subjects: [],
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

export type PembahasanPanelState = {
  [key: string]: boolean;
};

export const LatihanSoalProvider: React.FC<Props> = ({ children }) => {
  const { slug } = useParams();

  const [subjects, setSubjects] = useState<Subject[]>(defaultState.subjects);
  const [currentTopic, setCurrentTopic] = useState<TopicFilter>(
    defaultState.currentTopic,
  );

  const [currentPembahasanPanel, setCurrentPembahasanPanel] =
    useState<PembahasanPanelState>({} as PembahasanPanelState);

  const [yearRange, setYearRange] = useState<YearRangeFilter>(
    defaultState.yearRange,
  );
  const [selectedTopicId, setSelectedTopicId] = useState<string>("");
  const [soalData, setSoalData] = useState<SoalQuestion[]>([]);

  const [selectedSubject, setSelectedSubject] = useState<string>(slug[0]);

  useEffect(() => {
    if (soalData.length > 0) {
      const temp = {} as PembahasanPanelState;
      soalData.forEach((item) => {
        temp[item.id] = false;
      });
      setCurrentPembahasanPanel(temp);
    }
  }, [soalData]);

  const value = useMemo(
    () => ({
      subjects,
      setSubjects,
      currentTopic,
      setCurrentTopic,
      yearRange,
      setYearRange,
      selectedSubject,
      setSelectedSubject,
      soalData,
      setSoalData,
      currentPembahasanPanel,
      setCurrentPembahasanPanel,
      selectedTopicId,
      setSelectedTopicId,
    }),
    [
      yearRange,
      selectedSubject,
      currentTopic,
      subjects,
      soalData,
      currentPembahasanPanel,
      selectedTopicId,
    ],
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
