import React from "react";

const DropdownFilterSkeleton = () => {
  return (
    <div className="p-4 animate-pulse">
      {/* Price Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <div className="collapse-title h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="collapse-content">
          <div className="px-4 py-2">
            {/* Slider */}
            <div className="h-2 bg-gray-200 rounded w-full mb-4"></div>
            {/* Price Labels */}
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <div className="collapse-title h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="collapse-content">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-200 my-2" />

      {/* Brands Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <div className="collapse-title h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="collapse-content">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-200 my-2" />

      {/* Tags Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <div className="collapse-title h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="collapse-content">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-200 my-2" />

      {/* Clear All Button */}
      <div className="h-10 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

export default DropdownFilterSkeleton;
