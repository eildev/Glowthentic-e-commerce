import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const tagViewApi = createApi({
    reducerPath: 'tagViewApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        getTags: builder.query({
            query: () => '/tagname',
        }),
    })
})

export const {
    useGetTagsQuery,
} = tagViewApi;

export default tagViewApi;
