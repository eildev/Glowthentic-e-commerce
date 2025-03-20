// services/checkoutApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const checkoutApi = createApi({
  reducerPath: 'checkoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: '/order/create',
        method: 'POST',
        body: orderData,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation } = checkoutApi;
export default checkoutApi;
