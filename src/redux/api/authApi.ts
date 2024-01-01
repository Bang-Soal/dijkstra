import {
  ProfileResponse,
  SendOTPRequest,
  SigninRequest,
  SigninResponse,
  SignupResponse,
} from "@/types";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<SigninResponse, SigninRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<SignupResponse, SigninRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    sendOTP: builder.mutation<void, SendOTPRequest>({
      query: (body) => ({
        url: "/auth/send-otp",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSendOTPMutation,
  useGetProfileQuery,
} = authApi;
