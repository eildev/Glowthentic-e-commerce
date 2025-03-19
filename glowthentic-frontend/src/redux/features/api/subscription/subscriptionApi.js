import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const subscriptionApi = createApi({
  reducerPath: "subscriptionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.glowthentic.store/api" }),
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
