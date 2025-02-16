import React from 'react';
import image from "../../assets/img/about/Image.png"
import image1 from "../../assets/img/about/Image-1.png"
const BuildingBeautySection = () => {
    return (
        // <div className=' grid grid-cols-1
        //  md:grid-cols-2  items-center relative'>
        //     <div className='relative top-[-200px] translate-y-[50%]'>
        //         <img src={image1} alt=""  className='h-[430px] w-[387px] relative z-30'/>
        //         <img src={image} alt="" className='h-[450px] w-[332px] relative translate-x-[50%] translate-y-[-70%]' />
        //     </div>
        //     <div className='w-[50%] absolute right-0'>
        //         <h1 className='text-[#0F1228] font-bold text-5xl'>Building the 
        //         Beauty Ecosystem</h1>
        //         <p className='text-lg max-w-[457px] mt-6'>Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API, the Slack platform team works with partners and developers globally to build apps and integrations that streamline your work, automate mundane tasks and bring context into your conversations in Ehya.</p>
        //     </div>

        // </div>
        <div className="mt-24  relative grid grid-cols-1 lg:grid-cols-2 items-center md:items-start md:gap-32 md:justify-between p-6 md:p-2 max-w-5xl mx-auto overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center min-h-[500px]">
        {/* Bottom Right Image */}
        <div className="absolute bottom-32 md:bottom-0 left-24 md:left-56 w-[170px] md:w-[270px] md:h-[350px] z-0">
          <img
            src={image}
            alt="Beauty Product"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Top Left Image */}
        <div className="absolute top-0 right-16 md:right-44 md:left-0 w-[215px] md:w-[327px]  md:h-[430px] z-10">
          <img
            src={image1}
            alt="Beauty Product 2"
            className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="relative z-20  mt-0  text-center md:text-left  p-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Building the Beauty Ecosystem</h2>
        <p className="mt-4 text-gray-600">
          Connect your conversations with the tools and services that you need to get the job done. With over 1,500 apps
          and a robust API, the Slack platform team works with partners and developers globally to build apps and
          integrations that streamline your work, automate mundane tasks, and bring context into your conversations in
          Enya.
        </p>
      </div>
    </div>
    );
};

export default BuildingBeautySection;