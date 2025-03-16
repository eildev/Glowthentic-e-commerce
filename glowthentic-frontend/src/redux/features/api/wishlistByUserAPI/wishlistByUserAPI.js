import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const wishlistByUserAPI = createApi({
    reducerPath: 'wishlistByUserAPI',
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
    tagTypes: ['Wishlist'], // Shared tag type for cache management
    endpoints: (builder) => ({
        // Add item to wishlist
        addToWishlist: builder.mutation({
            query: (wishlistData) => ({
                url: '/wishlist/add',
                method: 'POST',
                body: wishlistData,
            }),
            invalidatesTags: ['Wishlist'], // Invalidate wishlist cache on add
        }),
        // Get Wishlist by User ID
        getWishlistByUserId: builder.query({
            query: (userId) => `/wishlist/${userId}`,
            providesTags: ['Wishlist'], // Provide tag for this query
        }),
        // Delete Wishlist Item
        deleteWishlistItem: builder.mutation({
            query: (itemId) => ({
                url: `/wishlist/delete/${itemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Wishlist'], // Invalidate wishlist cache on delete
        }),
    }),
});

export const {
    useAddToWishlistMutation,    // Hook for adding to wishlist
    useGetWishlistByUserIdQuery, // Hook for fetching wishlist
    useDeleteWishlistItemMutation // Hook for deleting wishlist item
} = wishlistByUserAPI;

export default wishlistByUserAPI;