import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const offerBannerApi = createApi({
    reducerPath: 'offerBannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: builder => ({
        getOfferBanner: builder.query({
            query: () => '/offerBanner',
        }),
    })
})

export const {
    useGetOfferBannerQuery,

} = offerBannerApi;

export default offerBannerApi;
