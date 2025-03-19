import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const wishListApi = createApi({
    reducerPath: 'wishListApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        wishlist: builder.mutation({
            query: (wishlistData) => ({
                url: '/wishlist/add',
                method: 'POST',
                body: wishlistData,
            }),
            invalidatesTags: ['Wishlist'],
        }),
    }),
});

export const { useWishlistMutation } = wishListApi;
export default wishListApi;