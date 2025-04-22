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
        return headers;
      },
    }),
    tagTypes: ['BlogLikes'], // Add tagTypes
    endpoints: builder => ({
      getblogLikesInfo: builder.query({
        query: (blogId) => `/post/react?blog_id=${blogId}`,
        providesTags: (result, error, blogId) => [{ type: 'BlogLikes', id: blogId }],
      }),
    }),
  });

export const { useGetblogLikesInfoQuery } = blogLikesGetApi;
export default blogLikesGetApi;