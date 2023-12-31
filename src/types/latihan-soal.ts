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
  question_id?: string;
};

export type LatihanSoalBySubjectResponse = ResponseWrapper<{
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
  submitted?: string;
}>;

export type SubmitNotesLatihanSoalRequest = GetLatihanSoalAttemptRequest & {
  attempt_id: string;
  submission_img: string;
  submission_text: string;
};
export type SubmitNotesLatihanSoalResponse = {};

export type QuestionNavigation = {
  next_question: string | null;
  prev_question: string | null;
  has_next: boolean;
  has_prev: boolean;
};

export type QuestionNavigationResponse = ResponseWrapper<QuestionNavigation>;

export type QuestionNavigationRequest = {
  subject_id: string;
  current_question_id: string;
  topic_id?: string;
};

export type Pembahasan = {
  answer: {
    content: string;
  };
  choice: {
    id: string;
    content: string;
    is_true: boolean;
    key: string;
  } | null;
};

export type PembahasanQuestion = {
  is_correct: boolean;
  correct_answer: "You are not premium account" | Pembahasan;
};

export type PembahasanQuestionResponse = ResponseWrapper<PembahasanQuestion>;

export type DownloadPDFRequest = {
  topic_id?: string;
  subject_id: string;
};

export type DownloadPDFResponse = ResponseWrapper<{
  url: string;
}>;

export type Feedback = {
  feedback: {
    id: string;
    question_id: string;
    user_id: string;
    feedback: string;
    timestamp: string;
    is_like: boolean;
  };
};

export type FeedbackResponse = ResponseWrapper<Feedback>;

export type UploadAssetRequest = {
  attempt_id: string;
  file: File;
};
