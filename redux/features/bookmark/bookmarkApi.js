import {apiSlice} from "../apiSlice";

export const bookmarkApi = apiSlice.injectEndpoints({
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
} = bookmarkApi;
export const {getPosts} = bookmarkApi.endpoints;
