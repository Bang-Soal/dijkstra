import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { apiConfig } from "./config";

export const baseApi = createApi({
  tagTypes: [
    "Profile",
    "Subject",
    "Topic",
    "LatihanSoal",
    "LatihanSoalDetail",
    "QuestionNavigation",
    "LatihanSoalAttempt",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: apiConfig.baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
