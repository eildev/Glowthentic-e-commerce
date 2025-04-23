import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const featuresApi = createApi({
    reducerPath: 'featuresApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        getFeature: builder.query({
            query: () => '/features',
        }),
    })
})

export const {
    useGetFeatureQuery,

} = featuresApi;

export default featuresApi;
