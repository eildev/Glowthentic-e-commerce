import React from 'react';
import { useGetBlogQuery } from '../../redux/features/api/blog/blogApi';
import BlogCard from './BlogCard';

const AllBlogPosts = ({ selectedCategoryId, setSelectedBlogId, sortedBlogs }) => {
    const { data, isLoading, isError } = useGetBlogQuery();

    if (isLoading) {
        return <div className="text-center mt-10">Loading blogs...</div>;
    }

    if (isError) {
        return <div className="text-center mt-10 text-red-500">Failed to load blogs. Please try again later.</div>;
    }

    // Use sortedBlogs prop instead of fetching data again
    const filteredBlogs = selectedCategoryId === 'all'
        ? sortedBlogs
        : sortedBlogs?.filter(blog => blog.cat_id === selectedCategoryId);

    return (
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 p-4">
            {filteredBlogs?.length > 0 ? (
                filteredBlogs.map(blog => (
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                        setSelectedBlogId={setSelectedBlogId}
                    />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500">No blogs found in this category.</div>
            )}
        </div>
    );
};

export default AllBlogPosts;