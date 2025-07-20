const ProductReviewSkeleton = () => {
  return (
    <div className="mt-4 mb-[28px] animate-pulse">
      <h2 className="md:text-lg text-md text-[#242424] border-b border-[#242424] w-fit p-[10px] mb-6">
        <div className="h-6 w-40 bg-gray-light rounded"></div>
      </h2>

      {[...Array(2)].map((_, index) => (
        <div key={index} className="mb-[27px]">
          <div className="flex gap-[18px]">
            <div className="w-[56px] h-[59px] rounded-full bg-gray-light"></div>
            <div className="w-full">
              <div className="flex items-center gap-2">
                <div className="h-5 w-24 bg-gray-light rounded"></div>
                <div className="h-5 w-20 bg-gray-light rounded"></div>
              </div>

              <div className="mt-1 h-4 w-full bg-gray-light rounded"></div>
              <div className="mt-2 h-4 w-3/4 bg-gray-light rounded"></div>

              <div className="flex flex-wrap gap-[18px] mt-[18px]">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="md:w-[125px] w-[72px] md:h-[125px] h-[72px] bg-gray-light rounded-sm"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReviewSkeleton;
