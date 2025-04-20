import React from 'react';
import { useGetBlogQuery } from '../../redux/features/api/blog/blogApi';
import BlogCard from './BlogCard';

const AllBlogPosts = ({selectedProduct}) => {
    const { data, isLoading, isError } = useGetBlogQuery();
  
console.log(data);
    if (isLoading) {
        return <div className="text-center mt-10">Loading blogs...</div>;
    }

    if (isError) {
        return <div className="text-center mt-10 text-red-500">Failed to load blogs. Please try again later.</div>;
    }

    return (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 p-4">
            {
                data?.blogPost?.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))
            }
        </div>
    );
};

export default AllBlogPosts;
