import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogCommentsGetApi = createApi({
    reducerPath: 'blogCommentsGetApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://backend.glowthentic.store/api',
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
    tagTypes: ['BlogComments'], // Add tagTypes
    endpoints: builder => ({
      getblogCommentsInfo: builder.query({
        query: (blogId) => `/blogComment?blog_id=${blogId}`,
        providesTags: (result, error, blogId) => [{ type: 'BlogComments', id: blogId }],
      }),
    }),
  });

export const { useGetblogCommentsInfoQuery } = blogCommentsGetApi;
export default blogCommentsGetApi;