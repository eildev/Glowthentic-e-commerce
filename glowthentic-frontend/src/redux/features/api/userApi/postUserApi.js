// services/checkoutApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postUserApi = createApi({
  reducerPath: 'postUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (data) => ({
        url: '/user/details/create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostUserMutation } = postUserApi;
export default postUserApi;
