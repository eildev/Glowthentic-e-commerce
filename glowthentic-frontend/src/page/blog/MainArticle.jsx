import React from 'react';
import TopBanner from './TopBanner';
import { imagePath } from '../../utils/imagePath';
import CommentSection from './CommentSection';

const MainArticle = ({latestArticle}) => {
    console.log("afasd", latestArticle);
    const latestImage = imagePath(latestArticle?.image);
    return (
        <div>
            <TopBanner img={latestImage}></TopBanner>
   
        <div className='nt-5 md:mt-16'>
            <div className='flex gap-4 justify-center items-center font-normal text-xs md:text-xl text-[#646464]'>
            <p>World news </p>
            <div className='rounded-full w-2 h-2 bg-[#646464]'></div> 
            <p>12 June 2024</p>
            </div>
           <div className='mt-3 md:mt-8'>
            <h1 className='font-semibold text-xl md:text-[56px] lg:text-[86px] leading-6 md:leading-[107px] text-center text-[#0F1228]'>
      {latestArticle?.title}
            </h1>
            <p className='mt-3 md:mt-8 text-[#0F1228] text-xs md:text-xl'>
        {latestArticle?.desc}
            </p>
           </div>
        </div>
        <CommentSection></CommentSection>
        </div>
    );
};

export default MainArticle;