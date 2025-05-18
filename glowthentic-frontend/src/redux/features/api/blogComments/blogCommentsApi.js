import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogCommentsApi = createApi({
  reducerPath: 'blogCommentsApi',
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
  tagTypes: ['BlogComments'],
  endpoints: (builder) => ({
    commentInfo: builder.mutation({
      query: (blogsData) => ({
        url: '/blogComments/create',
        method: 'POST',
        body: blogsData,
      }),
      invalidatesTags: (result, error, { blog_id }) => [{ type: 'BlogComments', id: blog_id }],
    }),
  }),
});

export const { useCommentInfoMutation } = blogCommentsApi;
export default blogCommentsApi;