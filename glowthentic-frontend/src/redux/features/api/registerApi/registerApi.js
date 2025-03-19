// services/checkoutApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
  endpoints: (builder) => ({
    registerInfo: builder.mutation({
      query: (registerData) => ({
        url: '/register',
        method: 'POST',
        body: registerData,
      }),
    }),
  }),
});

export const { useRegisterInfoMutation } = registerApi;
export default registerApi;
