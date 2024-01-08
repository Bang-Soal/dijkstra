import { HeaderDashboardResponse } from "@/types/dashboard";
import { baseApi } from "./baseApi";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHeadersDashboard: builder.query<HeaderDashboardResponse, void>({
      query: () => ({
        url: "/dashboard/headers",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHeadersDashboardQuery } = dashboardApi;
