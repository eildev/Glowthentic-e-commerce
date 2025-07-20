const ProductQueryNavigationSkeleton = () => {
  return (
    <div className="max-w-full mx-auto animate-pulse">
      <div className="flex justify-between border-b border-gray-light">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex py-2 text-start h-8 bg-gray-light rounded w-1/4"
          ></div>
        ))}
      </div>

      <div className="grid mt-4 gap-4">
        {[...Array(3)].map((_, index) => (
          <div className=" overflow-hidden">
            <div className="p-4 shadow-sm bg-white">
              <div className="h-6 bg-gray-light rounded w-1/3 mb-4"></div>

              <div className="mt-4">
                <div className="h-4 bg-gray-light rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-light rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-light rounded w-2/3"></div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="h-4 bg-gray-light rounded w-20"></div>
                <div className="h-6 w-6 bg-gray-light rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductQueryNavigationSkeleton;
