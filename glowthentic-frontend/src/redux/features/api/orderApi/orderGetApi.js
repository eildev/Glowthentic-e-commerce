import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const orderGetApi = createApi({
    reducerPath: 'orderGetApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api',
        credentials: "include",
        prepareHeaders: (headers, { getState, endpoint }) => {
            const csrfToken = Cookies.get("XSRF-TOKEN");
            if (csrfToken) {
                headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken));
            }
            const token = getState().auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            if (endpoint !== "updateUser") {
                headers.set("Content-Type", "application/json");
            }
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    endpoints: builder => ({
        getOrderInfo: builder.query({
            query: (id) => {
                return `/order/get/${id}`;
            },
        }),
        getProcessingOrder: builder.query({
            query: (id) => {
                return `/order/processing/${id}`;
            },
        }),
    })
})


export const { useGetOrderInfoQuery, useGetProcessingOrderQuery } = orderGetApi;

export default orderGetApi;
