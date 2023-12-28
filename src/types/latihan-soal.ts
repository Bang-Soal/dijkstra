import { ResponseWrapper } from ".";

export type Subject = {
  id: string;
  name: string;
  alternate_name: string;
  icon: string;
};

export type SelectedSubjectType =
  | "PU"
  | "PKPM"
  | "PPU"
  | "PBM"
  | "Bahasa Inggris"
  | "Bahasa Indonesia";

export type Topic = {
  id: string;
  name: string;
  subject_id: string;
};

export type SoalContent = {
  content: string;
  asset_url: string;
};

export type OptionChoice = {
  choice_id: string;
  content: string;
  key: string;
};

export type SoalOption = {
  option_id: string;
  data: OptionChoice[];
};

export type SoalQuestion = {
  id: string;
  content: string;
};

export type SoalQuestionDetail = {
  id: string;
  topic: string;
  label: string;
  content: {
    content: string;
    asset_url: string;
  };
  options: SoalOption;
};
export type SoalQuestionDetailResponse = ResponseWrapper<SoalQuestionDetail>;
export type SubjectResponse = ResponseWrapper<Subject[]>;
export type TopicResponse = ResponseWrapper<Topic[]>;

export type SubjectDetailRequest = { subject_id: string };
export type TopicBySubjectResponse = ResponseWrapper<Topic[]>;

export type LatihanSoalBySubjectRequest = {
  subject_id: string;
  topic_id?: string;
  min_year?: string;
  max_year?: string;
};

export type LatihanSoalBySubjectResponse = ResponseWrapper<{
  count: number;
  questions: SoalQuestion[];
}>;

export type GetLatihanSoalAttemptRequest = {
  question_id: string;
};
export type LatihanSoalAttemptRequest = GetLatihanSoalAttemptRequest & {
  option_id: string;
  choice_id: string;
  answer_history: string;
};
export type LatihanSoalAttemptResponse = ResponseWrapper<{
  id: string;
  question_id: string;
  options_id: string;
  choice_id: string;
  answer_history: string;
  timestamp: string;
  submission_img: string;
  submission_text: string;
  user_id: string;
}>;

export type SubmitNotesLatihanSoalRequest = GetLatihanSoalAttemptRequest & {
  attempt_id: string;
  submission_img: string;
  submission_text: string;
};
export type SubmitNotesLatihanSoalResponse = {};
