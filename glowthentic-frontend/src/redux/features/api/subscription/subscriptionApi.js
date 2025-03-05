import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const subscriptionApi = createApi({
  reducerPath: "subscriptionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }), 
  endpoints: (builder) => ({
    subscribeUser: builder.mutation({
      query: (email) => ({
        url: "/subscribe/store",
        method: "POST",
        body: { email },
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useSubscribeUserMutation } = subscriptionApi;
export default subscriptionApi;
