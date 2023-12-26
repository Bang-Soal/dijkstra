import {
  GetLatihanSoalAttemptRequest,
  LatihanSoalAttemptRequest,
  LatihanSoalAttemptResponse,
  LatihanSoalBySubjectRequest,
  LatihanSoalBySubjectResponse,
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
        params: { params },
      }),
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
        url: `latihan-soal/history/${question_id}`,
        method: "POST",
        body,
      }),
    }),
    getAttemptLatihanSoal: builder.query<
      LatihanSoalAttemptResponse,
      GetLatihanSoalAttemptRequest
    >({
      query: ({ question_id }) => ({
        url: `latihan-soal/attempt/${question_id}`,
        method: "GET",
      }),
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
      LatihanSoalAttemptResponse,
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
} = latihanSoal;