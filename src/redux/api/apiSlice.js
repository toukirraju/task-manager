import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:9000",
    baseUrl: "https://task-manager-server-production-a0d8.up.railway.app",
  }),
  endpoints: (builder) => ({}),
});
