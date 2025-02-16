import React from 'react';
import blogImage1 from '../../assets/img/about/Blog (1).png'
import blogImage2 from '../../assets/img/about/Blog (2).png'
import blogImage3 from '../../assets/img/about/Blog (3).png'
import { FaArrowRight } from "react-icons/fa";

const AboutBlog = () => {
    const blogs = [
        {
            subTitle: "Analytics",
            title: "How great Content helps drive success in Face",
            image: blogImage1
        },
        {
            subTitle: "Marketing",
            title: "Strossle International AB ranked #1 on Deloitte 2018",
            image: blogImage2
        },
        {
            subTitle: "Advertising",
            title: "What All Skin Should Know About Brand Safe",
            image: blogImage3
        },

    ]
    return (
        <div className='mt-32 '>
           <h1 className='font-bold text-3xl text-center md:text-start mb-8 md:mb-12'>Read Our Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto'>
{
    blogs.map((blog, index) => (
        <div key={index} className='text-[#0F1228] text-center md:text-start max-w-[340px] mx-auto md:mx-0'>
            <img src={blog.image} alt="" className='rounded-md mx-auto md:mx-0 '/>
            <p className='font-bold text-sm mt-3'>{blog.subTitle}</p>
            <h1 className='font-bold text-xl md:text-2xl mt-2  '>{blog.title}</h1>
            <div className='flex md:flex-1 gap-4 justify-center md:justify-start items-center text-[#FA8232] text-sm font-bold mt-6'>
            <p className=''>READ MORE</p>
            <FaArrowRight />
            </div>
            
        </div>
     ) )
}
            </div>
        </div>
    );
};

export default AboutBlog;