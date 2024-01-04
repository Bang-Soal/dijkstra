import {
  DownloadPDFRequest,
  DownloadPDFResponse,
  FeedbackResponse,
  GetLatihanSoalAttemptRequest,
  LatihanSoalAttemptRequest,
  LatihanSoalAttemptResponse,
  LatihanSoalBySubjectRequest,
  LatihanSoalBySubjectResponse,
  PembahasanQuestionResponse,
  QuestionNavigationRequest,
  QuestionNavigationResponse,
  SoalQuestionDetailResponse,
  SubjectDetailRequest,
  SubjectResponse,
  SubmitNotesLatihanSoalRequest,
  SubmitNotesLatihanSoalResponse,
  TopicBySubjectResponse,
  TopicResponse,
} from "@/types";
import { baseApi } from "./baseApi";

export const latihanSoal = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubjects: builder.query<SubjectResponse, void>({
      query: () => ({
        url: "/subjects",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Subject" as const,
                id,
              })),
              { type: "Subject" },
            ]
          : ["Subject"],
    }),
    getTopics: builder.query<TopicResponse, void>({
      query: () => ({
        url: "/subjects/topics",
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Topic" as const,
                id,
              })),
              { type: "Topic" },
            ]
          : ["Topic"],
    }),
    getTopicsBySubject: builder.query<
      TopicBySubjectResponse,
      SubjectDetailRequest
    >({
      query: ({ subject_id }) => ({
        url: `/subjects/topics/${subject_id}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Topic" as const,
                id,
              })),
              { type: "Topic" },
            ]
          : ["Topic"],
    }),
    getLatihanSoal: builder.query<
      LatihanSoalBySubjectResponse,
      LatihanSoalBySubjectRequest
    >({
      query: ({ subject_id, ...params }) => ({
        url: `/latihan-soal/subject/${subject_id}`,
        method: "GET",
        params: {
          topic_id: params.topic_id,
          question_id: params.question_id,
          min_year: params.min_year ?? undefined,
          max_year: params.max_year ?? undefined,
        },
      }),
      providesTags: (result, error, { subject_id }) => [
        { type: "LatihanSoal", id: subject_id },
      ],
    }),
    getLatihanSoalDetail: builder.query<
      SoalQuestionDetailResponse,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `/latihan-soal/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [
        { type: "LatihanSoalDetail", id },
      ],
    }),
    getLatihanSoalHistory: builder.query<
      LatihanSoalBySubjectResponse,
      LatihanSoalBySubjectRequest
    >({
      query: ({ subject_id, topic_id }) => ({
        url: `latihan-soal/history/${subject_id}`,
        method: "GET",
        params: { topic_id },
      }),
    }),
    attemptLatihanSoal: builder.mutation<
      LatihanSoalAttemptResponse,
      LatihanSoalAttemptRequest
    >({
      query: ({ question_id, ...body }) => ({
        url: `latihan-soal/attempt/${question_id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { question_id }) => [
        { type: "LatihanSoalAttempt", id: question_id },
      ],
    }),
    getAttemptLatihanSoal: builder.query<
      LatihanSoalAttemptResponse,
      GetLatihanSoalAttemptRequest
    >({
      query: ({ question_id }) => ({
        url: `latihan-soal/attempt/${question_id}`,
        method: "GET",
      }),
      providesTags: (result, error, { question_id }) => [
        { type: "LatihanSoalAttempt", id: question_id },
      ],
    }),
    deleteAttemptLatihanSoal: builder.query<
      LatihanSoalAttemptResponse,
      GetLatihanSoalAttemptRequest
    >({
      query: ({ question_id }) => ({
        url: `latihan-soal/attempt/${question_id}`,
        method: "DELETE",
      }),
    }),
    getPembahasan: builder.query<
      PembahasanQuestionResponse,
      GetLatihanSoalAttemptRequest
    >({
      query: ({ question_id }) => ({
        url: `latihan-soal/pembahasan/${question_id}`,
        method: "GET",
      }),
    }),
    submitNotesLatihanSoal: builder.mutation<
      SubmitNotesLatihanSoalResponse,
      SubmitNotesLatihanSoalRequest
    >({
      query: ({ question_id, ...body }) => ({
        url: `latihan-soal/pembahasan/${question_id}`,
        method: "POST",
        body,
      }),
    }),
    getQuestionNavigation: builder.query<
      QuestionNavigationResponse,
      QuestionNavigationRequest
    >({
      query: ({ current_question_id, subject_id, topic_id }) => ({
        url: `latihan-soal/navigation`,
        method: "GET",
        params: {
          current_question_id,
          subject_id,
          topic_id: topic_id ?? undefined,
        },
      }),
      providesTags: (_, __, { current_question_id, subject_id, topic_id }) => [
        {
          type: "QuestionNavigation",
          id: `${current_question_id}:${subject_id}:${topic_id}`,
        },
      ],
    }),
    submitLatihanSoal: builder.mutation<
      LatihanSoalAttemptResponse,
      { attempt_id: string; question_id: string }
    >({
      query: ({ attempt_id }) => ({
        url: `latihan-soal/submit/${attempt_id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, { attempt_id, question_id }) => [
        { type: "LatihanSoalAttempt", id: question_id },
      ],
    }),
    downloadPdfLatihanSoal: builder.mutation<
      DownloadPDFResponse,
      DownloadPDFRequest
    >({
      query: ({ subject_id, topic_id }) => ({
        url: `latihan-soal/generate-pdf/${subject_id}`,
        method: "POST",
        body: {
          topic_id: topic_id ?? undefined,
        },
      }),
    }),
    getFeedback: builder.query<FeedbackResponse, { questionId: string }>({
      query: ({ questionId }) => ({
        url: `latihan-soal/feedback/${questionId}`,
      }),
      providesTags: (result, error, { questionId }) => [
        { type: "Feedback", id: questionId },
      ],
    }),
    addFeedback: builder.mutation<
      FeedbackResponse,
      { questionId: string; isLike: boolean; feedback: string }
    >({
      query: ({ questionId, isLike, feedback }) => ({
        url: `latihan-soal/feedback/${questionId}`,
        method: "POST",
        body: {
          is_like: isLike,
          feedback,
        },
      }),
      invalidatesTags: (result, error, { questionId }) => [
        { type: "Feedback", id: questionId },
      ],
    }),
    updateFeedback: builder.mutation<
      void,
      {
        feedbackId: string;
        isLike: boolean;
        feedback: string;
        questionId: string;
      }
    >({
      query: ({ feedbackId, isLike, feedback }) => ({
        url: `latihan-soal/feedback/${feedbackId}`,
        method: "PUT",
        body: {
          is_like: isLike,
          feedback: feedback,
        },
      }),
      invalidatesTags: (result, error, { questionId }) => [
        { type: "Feedback", id: questionId },
      ],
    }),
  }),
});

export const {
  useGetSubjectsQuery,
  useGetTopicsQuery,
  useGetTopicsBySubjectQuery,
  useGetLatihanSoalQuery,
  useAttemptLatihanSoalMutation,
  useDeleteAttemptLatihanSoalQuery,
  useGetAttemptLatihanSoalQuery,
  useGetLatihanSoalHistoryQuery,
  useGetPembahasanQuery,
  useSubmitNotesLatihanSoalMutation,
  useGetLatihanSoalDetailQuery,
  useLazyGetLatihanSoalQuery,
  useGetQuestionNavigationQuery,
  useLazyGetQuestionNavigationQuery,
  useSubmitLatihanSoalMutation,
  useDownloadPdfLatihanSoalMutation,
  useGetFeedbackQuery,
  useAddFeedbackMutation,
  useUpdateFeedbackMutation,
} = latihanSoal;
