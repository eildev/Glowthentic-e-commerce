import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/product',
        }),
        getProductByDetails: builder.query({
            query: (slug) => `/product/${slug}`,
        }),
        searchProducts: builder.mutation({
            query: (product) => ({
                url: '/product/search',
                method: 'POST',
                body: { q: product },
            }),
        }),

    })
})

export const {
    useGetProductsQuery,
    useGetProductByDetailsQuery,
    useSearchProductsMutation,

} = productApi;

export default productApi;
