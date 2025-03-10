// services/checkoutApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerData) => ({
        url: '/register',
        method: 'POST',
        body: orderData,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
export default registerApi;
