const ProductSliderSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Large Device */}
      <div className="lg:flex hidden flex-row-reverse gap-6 items-center">
        <div className="h-[605px] w-full bg-gray-light rounded"></div>

        <div className="max-h-[605px] max-w-[80px] relative">
          <div className="button-prev w-[80px] h-[32px] border border-[#DFDFDF] flex justify-center items-center">
            <div className="h-2 w-4 bg-gray-light rounded"></div>
          </div>

          <div className="max-h-[541px]">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="min-w-[75px] min-h-[78px] bg-gray-light rounded mb-[24px]"
              ></div>
            ))}
          </div>

          <div className="button-next w-[80px] h-[32px] border border-[#DFDFDF] flex justify-center items-center">
            <div className="h-2 w-4 bg-gray-light rounded"></div>
          </div>
        </div>
      </div>

      {/* Mobile Device */}
      <div className="lg:hidden flex flex-col gap-2 items-center justify-center">
        <div className="w-full h-[300px] bg-gray-light rounded"></div>

        <div className="overflow-auto w-[95vw] sm:max-w-[65%]">
          <div className="flex gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-[80px] h-[80px] bg-gray-light rounded border-2 border-transparent"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderSkeleton;
