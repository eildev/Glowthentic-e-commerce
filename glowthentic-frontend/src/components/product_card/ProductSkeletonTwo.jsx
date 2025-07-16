const ProductSkeletonTwo = () => {
  return (
    <div
      className={cn(
        "card w-auto bg-white rounded-2xl shadow-md animate-pulse",
        className
      )}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden min-h-[180px] md:min-h-[280px] lg:h-[380px]">
        <div className="w-full h-full bg-gray-200"></div>
        {/* Badge */}
        <div className="absolute top-[20px] lg:top-[30px] left-0 bg-gray h-6 w-20 rounded-r-[25px]"></div>
        {/* Heart Icon */}
        <div className="absolute top-[15px] lg:top-[25px] right-2 bg-gray h-8 w-8 rounded-full"></div>
        {/* Cart Icon */}
        <div className="absolute bottom-[15px] lg:bottom-[25px] right-2 bg-gray h-8 w-8 rounded-full"></div>
      </div>

      {/* Card Body */}
      <div className="card-body h-[200px] px-2 md:px-4 rounded-b-2xl flex flex-col justify-center bg-white">
        {/* Product Name */}
        <div className="h-5 bg-gray rounded w-3/4 mb-2"></div>
        {/* Description */}
        <div className="h-4 bg-gray rounded w-full mb-2"></div>
        <div className="h-4 bg-gray rounded w-2/3 mb-2"></div>
        {/* Price */}
        <div className="flex gap-2 items-center">
          <div className="h-5 bg-gray rounded w-16"></div>
          <div className="h-4 bg-gray rounded w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeletonTwo;
