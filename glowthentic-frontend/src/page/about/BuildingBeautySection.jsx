import React from 'react';
import image from "../../assets/img/about/Image.png"
import image1 from "../../assets/img/about/Image-1.png"
const BuildingBeautySection = () => {
    return (
        <div className=' flex-1 md:flex items-center relative'>
            <div className='relative top-[-200px] translate-y-[50%]'>
                <img src={image1} alt=""  className='h-[430px] w-[387px] relative z-30'/>
                <img src={image} alt="" className='h-[450px] w-[332px] relative translate-x-[50%] translate-y-[-70%]' />
            </div>
            <div className='w-[50%] absolute right-0'>
                <h1 className='text-[#0F1228] font-bold text-5xl'>Building the 
                Beauty Ecosystem</h1>
                <p className='text-lg max-w-[457px] mt-6'>Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API, the Slack platform team works with partners and developers globally to build apps and integrations that streamline your work, automate mundane tasks and bring context into your conversations in Ehya.</p>
            </div>

        </div>
    );
};

export default BuildingBeautySection;