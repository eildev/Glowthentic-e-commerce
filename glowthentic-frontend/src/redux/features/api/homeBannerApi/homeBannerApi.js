import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const homeBannerApi = createApi({
    reducerPath: 'homeBannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        getBanners: builder.query({
            query: () => '/homeBanner',
        }),


    })
})

export const {
    useGetBannersQuery,

} = homeBannerApi;

export default homeBannerApi;
