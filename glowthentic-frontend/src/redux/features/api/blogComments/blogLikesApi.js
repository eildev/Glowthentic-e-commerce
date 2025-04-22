import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogLikesApi = createApi({
  reducerPath: 'blogLikesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend.glowthentic.store/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Accept', 'application/json'); // Ensure JSON response
      return headers;
    },
  }),
  tagTypes: ['BlogLikes'],
  endpoints: (builder) => ({
    likeInfo: builder.mutation({
      query: (blogsData) => ({
        url: '/post/react',
        method: 'POST',
        body: blogsData,
      }),
      invalidatesTags: (result, error, { blog_id }) => [{ type: 'BlogLikes', id: blog_id }],
    }),
  }),
});

export const {  useLikeInfoMutation } = blogLikesApi;
export default blogLikesApi;