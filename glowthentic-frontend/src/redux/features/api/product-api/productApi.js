import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/product',
        }),
        getProductByDetails: builder.query({
            query: (id) => `/product/${id}`,
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
