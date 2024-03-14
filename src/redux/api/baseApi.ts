import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://disaster-care-hub-s2.vercel.app",
  }),
  tagTypes: ["supply", "volunteer", "testimonial", "user"],
  endpoints: () => ({}),
});
