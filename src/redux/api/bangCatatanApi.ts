import { BangCatatan, BangCatatanRequest, PaginatedResponse } from "@/types";
import { baseApi } from "./baseApi";

export const bangCatatanApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBangCatatan: builder.query<
      PaginatedResponse<BangCatatan>,
      BangCatatanRequest
    >({
      query: ({
        tipe,
        subjectId,
        topicId,
        page = 1,
      }: BangCatatanRequest & { page?: number }) => ({
        url: "/catatan",
        method: "GET",
        params: {
          page: page,
          subject_id: subjectId,
          topic_id: topicId,
          tipe: tipe,
        },
      }),
    }),
  }),
});

export const { useGetAllBangCatatanQuery } = bangCatatanApi;
