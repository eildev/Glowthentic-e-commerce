import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/product?skip=0',
        }),
        searchProducts: builder.query({
            query: (product) => `/product/search?q=${product}`,
        }),
        getProductByDetails: builder.query({
            query: (id) => `/product/${id}`,
        }),
    })
})

export const { useGetProductsQuery, useGetProductByDetailsQuery, useSearchProductsQuery, useLazyGetProductsQuery } = productApi;

export default productApi;