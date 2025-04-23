import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const brandApi = createApi({
    reducerPath: 'brandApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        getBrand: builder.query({
            query: () => '/brand',
        }),

    })
})

export const {
    useGetBrandQuery


} = brandApi;

export default brandApi;
