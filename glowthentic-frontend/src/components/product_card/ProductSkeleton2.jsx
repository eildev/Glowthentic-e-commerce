const ProductSkeleton2 = ({ isDark }) => {
  return (
    <div
      className={`card w-auto bg-light rounded-2xl shadow-md ${
        isDark ? "h-[320px] lg:h-[500px]" : ""
      }`}
    >
      <figure className="relative overflow-hidden">
        <div className="lg:h-[380px] min-h-[180px] md:min-h-[380px] bg-gray-300 animate-pulse"></div>
        <span className="bg-gray-400 text-transparent lg:text-sm text-xs px-2 lg:px-5 py-1 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 font-semibold">
          Loading...
        </span>
        <div className="absolute top-[15px] lg:top-[25px] right-[15px] lg:right-[25px] h-8 w-8 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[15px] lg:bottom-[25px] right-[15px] lg:right-[25px] h-8 w-8 bg-gray-400 rounded-full animate-pulse"></div>
      </figure>

      <div
        className={`card-body px-3 lg:px-5 rounded-b-2xl ${
          isDark
            ? "bg-primary text-white text-center"
            : "bg-white text-primary text-left"
        }`}
      >
        <div className="h-6 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="flex gap-3 items-center justify-center">
          <div className="h-6 bg-gray-300 rounded animate-pulse w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded animate-pulse w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton2;
