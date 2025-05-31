import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const comboProductApi = createApi({
  reducerPath: 'comboProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    getComboProducts: builder.query({
      query: () => '/comboProduct',
    }),
  }),
});

export const { useGetComboProductsQuery } = comboProductApi;