import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogLikesGetApi = createApi({
  reducerPath: 'blogLikesGetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend.glowthentic.store/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['BlogLikes'],
  endpoints: builder => ({
    getblogLikesInfo: builder.query({
      query: (blogId) => `/post/react/${blogId}`,
      providesTags: (result, error, blogId) => [{ type: 'BlogLikes', id: blogId }],
      transformResponse: (response) => ({
        likes: response.data || [], // Adjust based on actual API response
      }),
    }),
  }),
});

export const { useGetblogLikesInfoQuery } = blogLikesGetApi;
export default blogLikesGetApi;