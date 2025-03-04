import React from 'react';
import TopBanner from './TopBanner';
import Container from '../../components/Container';
import MainArticle from './MainArticle';

const blog = () => {
    return (
        <div className=''>
            <Container>
            <TopBanner></TopBanner>
            <MainArticle></MainArticle>
            </Container>
        </div>
    );
};

export default blog;