import React, { useState } from 'react';
import Container from '../../components/Container';
import MainArticle from './MainArticle';
import ProductGroup from './ProductGroup';
import TopBanner from './TopBanner';
import { useGetBlogQuery } from '../../redux/features/api/blog/blogApi';

const Blog = () => {
    const { data, isLoading, isError } = useGetBlogQuery();
    const [selectedBlogId, setSelectedBlogId] = useState(null);
console.log("main blog data", data);
    if (isLoading) {
        return <div className="text-center py-10">Loading blog data...</div>;
    }

    if (isError) {
        return <div className="text-center py-10 text-red-500">Failed to load blog data. Please try again later.</div>;
    }

    // Sort blogs by date (latest first)
    const sortedBlogs = data?.blogPost
        ?.slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Selected blog or the latest blog if none selected
    const selectedBlog = selectedBlogId
        ? sortedBlogs?.find(blog => blog.id === selectedBlogId)
        : sortedBlogs?.[0];

    // Latest 3 blogs for ProductGroup
    const latestArticles = sortedBlogs?.slice(0, 3);

    return (
        <div>
            <Container>
                {/* Render TopBanner with all required props */}
                <TopBanner
                    selectedBlog={selectedBlog}
                    sortedBlogs={sortedBlogs}
                    setSelectedBlogId={setSelectedBlogId}
                />
                <MainArticle selectedBlog={selectedBlog} />
                <ProductGroup
                    latestArticles={latestArticles}
                    setSelectedBlogId={setSelectedBlogId}
                    sortedBlogs={sortedBlogs}
                />
            </Container>
        </div>
    );
};

export default Blog;