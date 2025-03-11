import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const wishlistByUserAPI = createApi({
    reducerPath: 'wishlistByUserAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        // Get Wishlist by User ID
        getWishlistByUserId: builder.query({
            query: (userId) => `/wishlist/${userId}`,
        }),
    }),
});

export const {
    useGetWishlistByUserIdQuery, // Hook for fetching wishlist
} = wishlistByUserAPI;

export default wishlistByUserAPI;
