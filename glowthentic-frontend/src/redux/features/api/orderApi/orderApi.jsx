import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const orderAPI = createApi({
    reducerPath: 'orderAPI',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://127.0.0.1:8000/api',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['order'], // Shared tag type for cache management
    endpoints: (builder) => ({
        // Add item to wishlist
        orderTrack: builder.mutation({
            query: (orderData) => ({
                url: '/order/tracking',
                method: 'POST',
                body: orderData,
            }),
            invalidatesTags: ['order'], // Invalidate wishlist cache on add
        }),
 
      
    }),
});

export const {
    useOrderTrackMutation,    // Hook for ordertracking
  
} = orderAPI;

export default orderAPI;