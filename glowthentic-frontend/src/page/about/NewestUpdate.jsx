import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
const NewestUpdate = () => {
   
    return (
        
        <div >
              <div className='bg-[#FA8232] px-2 mx-auto pt-20 h-[470px] max-w-[1440px]'>
            <h1 className='text-white mb-4 font-bold text-3xl md:text-5xl text-center'>Want a Newest Updates?</h1>
            <p className='text-base font-normal text-white text-center mb-12'>Input your email into form below to get updates from us</p>
            <div className='bg-white p-2 block md:hidden'>
              
                <div className=" relative w-full max-w-md">
          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="email"
            placeholder="Your Email"
      
            className="w-full pl-10 pr-4 py-2 placeholder:text-black border border-[#C3CAD9] rounded-lg text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button  className='bg-[#FA8232] mt-2 w-full rounded-md '>
            <div>
            <h1 className='text-center px-8 py-2 text-white'>Subscribe</h1>
            </div>
        </button>
            
         
            </div>
            <div className='bg-white p-2 md:block hidden'>
              
              <div className=" relative w-full max-w-md">
        <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        <input
          type="email"
          placeholder="Your Email"
    
          className="w-full pl-10 pr-4 py-2 placeholder:text-black border border-[#C3CAD9] rounded-lg text-black font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         <button  className='bg-[#FA8232] mt-2  rounded-md absolute right-0 top-1 transform -translate-y-1/4'>
          <div>
          <h1 className='text-center px-8 py-2 text-white'>Subscribe</h1>
          </div>
      </button>
      </div>
     
          
       
          </div>
   
        </div>
        
        </div>
      
    );
};

export default NewestUpdate;