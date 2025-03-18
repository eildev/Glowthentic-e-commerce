import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const homeBannerApi = createApi({
    reducerPath: 'homeBannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
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
