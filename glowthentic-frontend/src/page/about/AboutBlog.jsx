import React from 'react';
import blogImage1 from '../../assets/img/about/Blog (1).png'
import blogImage2 from '../../assets/img/about/Blog (2).png'
import blogImage3 from '../../assets/img/about/Blog (3).png'

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
        <div className='mt-32'>
           
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
{
    blogs.map((blog, index) => (
        <div key={index} className='text-[#0F1228] text-center md:text-start'>
            <img src={blog.image} alt="" className='rounded-md mx-auto max-w-[340px]'/>
            <p className='font-bold text-sm mt-3'>{blog.subTitle}</p>
            <h1 className='font-bold text-xl md:text-2xl mt-2 '>{blog.title}</h1>
            <p className='text-[#FA8232] text-sm font-bold mt-6'>READ MORE</p>
        </div>
     ) )
}
            </div>
        </div>
    );
};

export default AboutBlog;