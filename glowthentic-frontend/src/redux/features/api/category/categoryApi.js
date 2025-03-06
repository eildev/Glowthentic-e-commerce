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
    })
})

export const { 
    useGetCategoryQuery, 
    useGetProductByDetailsQuery,

} = categoryApi;

export default categoryApi;
