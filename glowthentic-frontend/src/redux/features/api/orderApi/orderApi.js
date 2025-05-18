import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderAPI = createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.glowthentic.store/api",
    credentials: "include", // Include cookies in requests (needed for CSRF)
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // Bearer token for authentication
      const csrfToken = document.cookie.match(/XSRF-TOKEN=([^;]+)/)?.[1]; // Extract CSRF token from cookies

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      if (csrfToken) {
        headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken)); // Set CSRF token header
      }
      return headers;
    },
  }),
  tagTypes: ["order"], // Shared tag type for cache management
  endpoints: (builder) => ({
    orderTrack: builder.mutation({
      query: (orderData) => ({
        url: "/order/tracking",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["order"], // Invalidate order cache on tracking
    }),
    getTrackingOrder: builder.query({
      query: (id) => {
        return `/get-order/tracking/${id}`;
      },
    })

  }),
});

export const {
  useOrderTrackMutation,
  useGetTrackingOrderQuery // Hook for order tracking
} = orderAPI;

export default orderAPI;