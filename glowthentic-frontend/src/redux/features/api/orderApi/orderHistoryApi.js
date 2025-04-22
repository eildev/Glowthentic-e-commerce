import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderHistoryApi = createApi({
  reducerPath: "orderHistoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api'
    // baseUrl: "http://127.0.0.1:8000/api",
  }),
  endpoints: (builder) => ({
    getOrderHistory: builder.query({
      query: (id) => {
        // console.log("in api", id);
        return `/order/completed/${id}`;
      },
    }),
  }),
});

export const { useGetOrderHistoryQuery } = orderHistoryApi;

export default orderHistoryApi;
