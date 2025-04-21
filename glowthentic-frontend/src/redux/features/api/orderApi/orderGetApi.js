import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderGetApi = createApi({
    reducerPath: 'orderGetApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api'
        // baseUrl: 'http://127.0.0.1:8000/api'

    }),
    endpoints: builder => ({
        getOrderInfo: builder.query({
            query: (id) => {
                // console.log("in api", id);
                return `/order/processing/${id}`;
            },
        }),
    })
})


export const { useGetOrderInfoQuery } = orderGetApi;

export default orderGetApi;
