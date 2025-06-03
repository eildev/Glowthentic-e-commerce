import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const comboProductApi = createApi({
  reducerPath: 'comboProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
  endpoints: (builder) => ({
    getComboProducts: builder.query({
      query: () => '/comboProduct',
    }),
  }),
});

export const { useGetComboProductsQuery } = comboProductApi;