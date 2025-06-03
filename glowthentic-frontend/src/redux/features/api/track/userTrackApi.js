import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const userTrackApi = createApi({
    reducerPath: "userTrackApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend.glowthentic.store/api",
        credentials: "include",
        prepareHeaders: (headers) => {
            const csrfToken = Cookies.get("XSRF-TOKEN");
            if (csrfToken) {
                headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken));
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        trackUser: builder.mutation({
            query: (trackerData) => ({
                url: '/user-tracker',
                method: 'POST',
                body: trackerData,
            }),
        }),
    }),
});

export const { useTrackUserMutation } = userTrackApi;

export default userTrackApi;