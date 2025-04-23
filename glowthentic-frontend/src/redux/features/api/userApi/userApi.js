import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        getUserInfo: builder.query({
            query: (id) => {
                return `/user/details/show/${id}`;
            },
        }),
    })
})

export const {
    useGetUserInfoQuery,

} = userApi;

export default userApi;
