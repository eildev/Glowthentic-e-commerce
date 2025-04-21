import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const offerBannerApi = createApi({
    reducerPath: 'offerBannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
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
