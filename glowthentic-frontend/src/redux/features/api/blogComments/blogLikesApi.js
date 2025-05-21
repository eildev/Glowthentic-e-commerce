import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogLikesApi = createApi({
  reducerPath: 'blogLikesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
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
  endpoints: (builder) => ({
    likeInfo: builder.mutation({
      query: (blogsData) => ({
        url: '/post/react',
        method: 'POST',
        body: blogsData,
      }),
      invalidatesTags: (result, error, { blog_id }) => [{ type: 'BlogLikes', id: blog_id }],
    }),
    unlikeInfo: builder.mutation({
      query: ({ blog_id, user_id }) => ({
        url: `/post/react?blog_id=${blog_id}&user_id=${user_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { blog_id }) => [{ type: 'BlogLikes', id: blog_id }],
    }),
  }),
});

export const { useLikeInfoMutation, useUnlikeInfoMutation } = blogLikesApi;
export default blogLikesApi;