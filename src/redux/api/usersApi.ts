import { OnboardRequest } from "@/types";
import { baseApi } from "./baseApi";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    onboarding: builder.mutation<void, OnboardRequest>({
      query: (body) => ({
        url: "/users/onboarding",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useOnboardingMutation } = usersApi;
