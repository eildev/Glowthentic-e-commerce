import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";


const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api",
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
    tagTypes: ["User", "UserDetails"],
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
            providesTags: ["User"],
        }),
        getUserInfo: builder.query({
            query: (id) => {
                return `/user/details/show/${id}`;
            },
            providesTags: ["UserDetails"],
        }),
        updateUser: builder.mutation({
            query: ({ id, body }) => ({
                url: `/user/details/update/${id}`,
                method: "POST",
                body: body,
            }),
            invalidatesTags: ["User", "UserDetails"],
        }),
        getGoogleAuthUrl: builder.query({
            query: () => '/auth/google',
        }),
        getFacebookAuthUrl: builder.query({
            query: () => '/auth/facebook',
        }),
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: "/forgot-password",
                method: "POST",
                body: data,
            }),
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: "/reset-password",
                method: "POST",
                body: data,
            }),
        }),
        verifyOTP: builder.mutation({
            query: (data) => ({
                url: "/verify-otp",
                method: "POST",
                body: data,
            }),
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: "/password-change",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useGetCsrfTokenQuery,
    useLoginUserMutation,
    useRegisterUserMutation,
    useLogoutUserMutation,
    useGetUserQuery,
    useGetUserInfoQuery,
    useUpdateUserMutation,
    useGetGoogleAuthUrlQuery,
    useGetFacebookAuthUrlQuery,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useChangePasswordMutation,
    useVerifyOTPMutation,
} = authApi;

export default authApi;