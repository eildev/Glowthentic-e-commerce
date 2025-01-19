import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products?skip=0',
        }),
        searchProducts: builder.query({
            // query: ({ skip = 0, limit = 1000 }) => `/products?skip=${skip}&limit=${limit}`,
            query: () => `/products?limit=0`,
        }),
        getProductByDetails: builder.query({
            query: (id) => `/products/${id}`,
        }),
    })
})

export const { useGetProductsQuery, useGetProductByDetailsQuery, useSearchProductsQuery, useLazyGetProductsQuery } = productApi;

export default productApi;