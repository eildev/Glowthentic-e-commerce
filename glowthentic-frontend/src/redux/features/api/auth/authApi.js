import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend.glowthentic.store/api",
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
            if (endpoint === "updateUser" && getState().auth.body instanceof FormData) {

            } else {
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
                // console.log("in api", id);
                return `/user/details/show/${id}`;
            },
            providesTags: ["UserDetails"],
        }),
        updateUser: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `user/details/update/${id}`,
                method: "POST",
                body: data, // JSON বা FormData
            }),
            invalidatesTags: ["User", "UserDetails"],
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
} = authApi;

export default authApi;