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
        // searchCategories: builder.mutation({
        //     query: (category) => ({
        //         url: '/category/search',
        //         method: 'POST',
        //         body: { q: category },
        //     }),
        // }),
        // searchBrands: builder.mutation({
        //     query: (brand) => ({
        //         url: '/brand/search',
        //         method: 'POST',
        //         body: { q: brand },
        //     }),
        // }),
    })
})

export const { 
    useGetProductsQuery, 
    useGetProductByDetailsQuery, 
    useSearchProductsMutation,
    // useSearchCategoriesMutation,
    // useSearchBrandsMutation 
} = productApi;

export default productApi;
