const DropdownFilterSkeleton = () => {
  return (
    <div className="p-4 animate-pulse">
      {/* Price Section */}
      <div className=" bg-white mb-2">
        <div className=" h-3 bg-gray-light rounded w-full"></div>
        <div className="">
          <div className="px-4 py-2">
            {/* Slider */}
            <div className="h-2 bg-gray-light rounded w-full mb-4"></div>
            {/* Price Labels */}
            <div className="flex justify-between">
              <div className="h-4 bg-gray-light rounded w-16"></div>
              <div className="h-4 bg-gray-light rounded w-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className=" bg-white mb-2">
        <div className=" h-3 bg-gray-light rounded w-full"></div>
        <div className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="h-4 bg-gray-light rounded mr-3"></div>
              <div className="h-4 bg-gray-light rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-hr-thin my-2" />

      {/* Brands Section */}
      <div className=" bg-white mb-2">
        <div className=" h-3 bg-gray-light rounded w-full"></div>
        <div className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="h-4 w-4 bg-gray-light rounded mr-3"></div>
              <div className="h-4 bg-gray-light rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-hr-thin my-2" />

      {/* Tags Section */}
      <div className=" bg-white mb-2">
        <div className=" h-3 bg-gray-light rounded w-full"></div>
        <div className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center py-2">
              <div className="h-4 w-4 bg-gray-light rounded mr-3"></div>
              <div className="h-4 bg-gray-light rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-hr-thin my-2" />

      {/* Clear All Button */}
      <div className="h-5 bg-gray-light rounded w-full"></div>
    </div>
  );
};

export default DropdownFilterSkeleton;
