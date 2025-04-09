import React from 'react';
import cn from '../../utils/cn';

const CategorySkeleton = ({isDark}) => {
    return (
         <div
              className={cn(
                `card w-auto bg-light rounded-t-full rounded-b-none transition-all duration-300 ease-in-out animate-pulse`,
                {
                  "h-[320px] lg:h-[500px]": isDark,
                }
              )}
            >
        
              <figure className="relative overflow-hidden rounded-b-none">
                {/* <div className=" object-cover  "></div> */}
                <div className="skeleton lg:h-[380px] min-h-[180px] md:min-h-[380px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
                {/* <span className="skeleton bg-slate-400 h-6 w-16 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 z-10"></span> */}
                {/* <div className="skeleton absolute top-[15px] lg:top-[25px] right-2 h-8 w-8 rounded-full bg-slate-400 z-10"></div> */}
                {/* <div className="skeleton h-8 w-full rounded-full bg-slate-400 z-10"></div> */}
              </figure>
          <div className="skeleton h-8 w-full  bg-slate-100 z-10"></div>
              {/* <div
                className={cn(
                  `card-body px-3 lg:px-5 rounded-b-2xl`,
                  isDark ? "bg-primary" : "bg-white"
                )}
              >
                <div className="skeleton h-5 lg:h-6 bg-gray-200 rounded w-3/4 mx-auto lg:mx-0 bg-slate-200"></div>
                <div className="skeleton h-3 lg:h-4 bg-gray-200 rounded w-full mt-2 bg-slate-200"></div>
                <div
                  className={cn(
                    `flex gap-3 items-center mt-2`,
                    isDark ? "justify-center" : ""
                  )}
                >
                  <div className="skeleton h-5 lg:h-6 bg-gray-200 rounded w-16 bg-slate-200"></div>
                  <div className="skeleton h-4 lg:h-5 bg-gray-200 rounded w-12 bg-slate-200"></div>
                </div>
              </div> */}
            </div>
    );
};

export default CategorySkeleton;