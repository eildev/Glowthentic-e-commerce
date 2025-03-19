import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const orderGetApi = createApi({
//     reducerPath: 'orderGetApi',
//     baseQuery: fetchBaseQuery({
//         // baseUrl: 'https://backend.glowthentic.store/api'
//         baseUrl: 'http://127.0.0.1:8000/api'


//     }),
//     endpoints: builder => ({
//         getOrderInfo: builder.query({
//             query: (id) => {
//                 // console.log("in api", id);
//                 return `/order/get/${id}`;
//             },
//         }),
//     })
// })


const orderGetApi = createApi({
    reducerPath: 'orderGetApi',
    baseQuery: fetchBaseQuery({ 
        // baseUrl: 'https://backend.glowthentic.store/api',
         baseUrl: 'http://127.0.0.1:8000/api',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            console.log("Auth Token:", token); // Debug token
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: builder => ({
        getOrderInfo: builder.query({
            query: (id) => {
                console.log("API Call Initiated for ID:", id); // Debug order ID
                return `/order/get/${id}`;
            },
        }),
    })
});


export const {
    useGetOrderInfoQuery,

} = orderGetApi;

export default orderGetApi;
