import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const featuresApi = createApi({
    reducerPath: 'featuresApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: builder => ({
        getFeatures: builder.query({
            query: () => '/features',
        }),


    })
})

export const {
    useGetFeaturesQuery,

} = featuresApi;

export default featuresApi;
