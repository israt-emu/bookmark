import {apiSlice} from "./apiSlice";

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: `/posts`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetPostsQuery,
  util: {getRunningQueriesThunk},
} = postApi;
export const {getPosts} = postApi.endpoints;
