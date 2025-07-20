const ProductVideoSectionSkeleton = () => {
  return (
    <div className="mt-4 mb-[28px] animate-pulse">
      <div className="h-6 bg-gray-light rounded w-1/4 mx-auto p-[10px] mb-6 border-b border-gray-light"></div>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-gray-light rounded-sm border-2 border-gray-light"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideoSectionSkeleton;
