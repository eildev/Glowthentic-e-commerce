import React from 'react';
import TopBanner from './TopBanner';
import Container from '../../components/Container';
import MainArticle from './MainArticle';
import ProductGroup from './ProductGroup';
import { useGetBlogQuery } from '../../redux/features/api/blog/blogApi';
import ALlBlogPosts from './ALlBlogPosts';
import { imagePath } from '../../utils/imagePath';



const Blog = () => {
    const {data, isLoading} = useGetBlogQuery()
    console.log("data", data);
    const latestArticle = data?.blogPost
    ?.slice() 
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0,3);

    console.log("latestArticle", latestArticle);
      
    
    return (
        <div className=''>
            <Container>
            
            <MainArticle latestArticle={latestArticle}></MainArticle>
            <ProductGroup></ProductGroup>
           
            </Container>
        </div>
    );
};

export default Blog;