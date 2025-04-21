import React from 'react';
import TopBanner from './TopBanner';
import Container from '../../components/Container';
import MainArticle from './MainArticle';
import ProductGroup from './ProductGroup';
import { useGetBlogQuery } from '../../redux/features/api/blog/blogApi';

const Blog = () => {
    const { data, isLoading, isError } = useGetBlogQuery();

    if (isLoading) {
        return <div className="text-center py-10">Loading blog data...</div>;
    }

    if (isError) {
        return <div className="text-center py-10 text-red-500">Failed to load blog data. Please try again later.</div>;
    }

    const latestArticle = data?.blogPost
        ?.slice()
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 3); // Get latest 3 articles

    return (
        <div>
            <Container>
                <MainArticle latestArticle={latestArticle} />
                <ProductGroup />
            </Container>
        </div>
    );
};

export default Blog;
