import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const wishlistByUserAPI = createApi({
    reducerPath: 'wishlistByUserAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: (builder) => ({
        // Get Wishlist by User ID
        getWishlistByUserId: builder.query({
            query: (userId) => `/wishlist/${userId}`,
        }),
        // Delete Wishlist Item
        deleteWishlistItem: builder.mutation({
            query: (itemId) => ({
                url: `/wishlist/delete/${itemId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetWishlistByUserIdQuery, // Hook for fetching wishlist
    useDeleteWishlistItemMutation, // Hook for deleting wishlist item
} = wishlistByUserAPI;

export default wishlistByUserAPI;
