import React from 'react';
import CommentSection from './CommentSection';

const MainArticle = ({ selectedBlog }) => {
    console.log("main article page", selectedBlog);
    const blogId = selectedBlog?.id
    console.log("blog id", blogId);
    return (
        <div>
            <div className="mt-5 md:mt-16">
                <div className="flex gap-4 justify-center items-center font-normal text-xs md:text-xl text-[#646464]">
                    <p>World news</p>
                    <div className="rounded-full w-2 h-2 bg-[#646464]"></div>
                    <p>{selectedBlog?.date || '12 June 2024'}</p>
                </div>
                <div className="mt-3 md:mt-8">
                    <h1 className="font-semibold text-xl md:text-[56px] lg:text-[86px] leading-6 md:leading-[107px] text-center text-[#0F1228]">
                        {selectedBlog?.title}
                    </h1>
                    <p className="mt-3 md:mt-8 text-[#0F1228] text-xs md:text-xl">
                        {selectedBlog?.desc}
                    </p>
                </div>
            </div>
            <CommentSection blogId={blogId}/>
        </div>
    );
};

export default MainArticle;