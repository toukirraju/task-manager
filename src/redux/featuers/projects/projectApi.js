import { apiSlice } from "../../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects",
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
