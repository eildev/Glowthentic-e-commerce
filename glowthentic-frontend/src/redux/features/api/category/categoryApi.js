import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: builder => ({
        getCategory: builder.query({
            query: () => '/category',
        }),
        getProductByDetails: builder.query({
            query: (id) => `/category/${id}`,
        }),
        searchCategory: builder.mutation({
            query: (product) => ({
                url: '/category/search',
                method: 'POST',
                body: { q: product },
            }),
        }),
      
    })
})

export const { 
    useGetCategoryQuery, 
    useGetProductByDetailsQuery, 
    useSearchCategoryMutation,

} = categoryApi;

export default categoryApi;
