// src/redux/features/api/auth/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api",
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const csrfToken = Cookies.get("XSRF-TOKEN");
            if (csrfToken) {
                headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken));
            }
            const token = getState().auth.token; // Redux থেকে Sanctum টোকেন নেওয়া
            if (token) {
                headers.set("Authorization", `Bearer ${token}`); // Sanctum টোকেন হেডারে যোগ
            }
            headers.set("Content-Type", "application/json");
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCsrfToken: builder.query({
            query: () => ({
                url: "/sanctum/csrf-cookie",
                method: "GET",
            }),
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetCsrfTokenQuery, useLoginUserMutation, useLogoutUserMutation } = authApi;
export default authApi;