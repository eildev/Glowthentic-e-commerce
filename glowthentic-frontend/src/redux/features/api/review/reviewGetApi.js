import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reviewGetApi = createApi({
    reducerPath: 'reviewGetApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend.glowthentic.store/api'
        // baseUrl: 'https://backend.glowthentic.store/api'

    }),
    endpoints: builder => ({
        getReviewInfo: builder.query({
            query: (id) => {
                // console.log("in api", id);
                return `/review/${id}`;
            },
        }),
    })
})


export const { useGetReviewInfoQuery } = reviewGetApi;

export default reviewGetApi;
