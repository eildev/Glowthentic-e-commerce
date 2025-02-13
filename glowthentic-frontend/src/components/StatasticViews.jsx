import React from 'react';

const StatasticViews = ({value, title, icon}) => {
    return (
        <div className=''>
            <div className='mx-auto w-10 h-10 rounded-full bg-[#FA8232] opacity-[10%] mb-3'>

<img src={icon} alt="" className='absolute z-30 bg-[#FA8232]'/>
            </div>
            <div className='text-center '>
            <h1 className='text-[#0F1228] font-bold text-xl mb-1'>{value}</h1>
            <h1 className='text-[#FA8232] text-sm font-normal'>{title}</h1>
            </div>
           
        </div>
    );
};

export default StatasticViews;