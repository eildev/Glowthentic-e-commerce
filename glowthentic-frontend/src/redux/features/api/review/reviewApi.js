import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from "js-cookie";

const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
    credentials: "include",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const csrfToken = Cookies.get("XSRF-TOKEN");
      if (csrfToken) {
        headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken));
      }
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    reviewProduct: builder.mutation({
      query: (data) => ({
        url: '/review/add',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

export const { useReviewProductMutation } = reviewApi;
export default reviewApi;
