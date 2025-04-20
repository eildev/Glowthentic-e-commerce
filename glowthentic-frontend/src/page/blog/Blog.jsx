import React from 'react';
import TopBanner from './TopBanner';
import Container from '../../components/Container';
import MainArticle from './MainArticle';
import ProductGroup from './ProductGroup';
import { useGetBlogQuery } from '../../redux/features/api/blog/blogApi';
import ALlBlogPosts from './ALlBlogPosts';



const Blog = () => {
    const {data, isLoding} = useGetBlogQuery()
    const latestArticle = data?.blogPost
    ?.slice() 
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
    console.log(data);
    console.log("latestArticle", latestArticle);
    return (
        <div className=''>
            <Container>
            
            <MainArticle latestArticle={latestArticle}></MainArticle>
            <ProductGroup></ProductGroup>
            <ALlBlogPosts> </ALlBlogPosts>
            </Container>
        </div>
    );
};

export default Blog;