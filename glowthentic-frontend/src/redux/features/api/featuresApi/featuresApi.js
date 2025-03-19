import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const featuresApi = createApi({
    reducerPath: 'featuresApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
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
