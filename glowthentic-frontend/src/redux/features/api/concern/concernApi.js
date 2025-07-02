import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const concernApi = createApi({
    reducerPath: 'concernApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: builder => ({
        getConcern: builder.query({
            query: () => '/concern',
        }),

    })
})

export const {
    useGetConcernQuery
} = concernApi;

export default concernApi;
