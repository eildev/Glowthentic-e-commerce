import React from 'react';
import TopBanner from './TopBanner';
import Container from '../../components/Container';
import MainArticle from './MainArticle';
import ProductGroup from './ProductGroup';

const blog = () => {
    return (
        <div className=''>
            <Container>
            <TopBanner></TopBanner>
            <MainArticle></MainArticle>
            <ProductGroup></ProductGroup>
            </Container>
        </div>
    );
};

export default blog;