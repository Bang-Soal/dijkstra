type TipeCatatan =
  | "catatan"
  | "pembahasan"
  | "slide"
  | "presentasi"
  | "coretan"
  | "cheatsheet"
  | "tugas"
  | "ujian"
  | "lainnya";

export type BangCatatanRequest = {
  subjectId?: string;
  topicId?: string;
  tipe: TipeCatatan;
};

export type BangCatatan = {
  id: string;
  thumbnail_url: string;
  title: string;
  description: string;
  color_pallete: string;
  subject_id: string;
  topic_id: string;
  tipe: TipeCatatan;
  like_count: number;
  saved_count: number;
  download_count: number;
  subject: string;
  topic: string;
  author: string;
};
