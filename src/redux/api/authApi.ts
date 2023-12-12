import { LoginRequest, LoginResponse, User } from "@/types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body: LoginRequest) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<void, LoginRequest>({
      query: (body: LoginRequest) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
