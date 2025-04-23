import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.glowthentic.store/api' }),
    endpoints: builder => ({
        getBlog: builder.query({
            query: () => '/blogPost',
        }),
        getBlogByDetails: builder.query({
            query: (id) => `/blogPost/${id}`,
        }),
        getNavbarBlog: builder.query({
            query: () => '/nav/blogPost/show',
        }),
    })
})

export const {
    useGetBlogQuery,
    useGetBlogByDetailsQuery,
    useGetNavbarBlogQuery,

} = blogApi;

export default blogApi;
