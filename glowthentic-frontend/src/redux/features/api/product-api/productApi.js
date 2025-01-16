import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
        }),
        getProductByDetails: builder.query({
            query: (id) => `/products/${id}`,
        }),
    })
})

export const { useGetProductsQuery } = productApi;

export default productApi;