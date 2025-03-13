// src/redux/features/api/auth/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend.glowthentic.store/api",
        credentials: "include",
        prepareHeaders: (headers, { getState }) => {
            const csrfToken = Cookies.get("XSRF-TOKEN");
            if (csrfToken) {
                headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken));
            }
            const token = getState().auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
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
        registerUser: builder.mutation({
            query: (credentials) => ({
                url: "/register",
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
        getUser: builder.query({
            query: () => ({
                url: "/user-info",
                method: "GET",
            }),
        }),
        getUserInfo: builder.query({
            query: (id) => {
                return `/user/details/show/${id}`;
            },
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: '/user/details/create',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetCsrfTokenQuery, useLoginUserMutation, useRegisterUserMutation, useLogoutUserMutation, useGetUserQuery, useGetUserInfoQuery, useUpdateUserMutation } = authApi;
export default authApi;