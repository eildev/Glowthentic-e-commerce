const OrderCardSkeleton = ({ history }) => {
  return (
    <div className="border-b border-b-gray-light py-8 px-5 shadow-sm rounded-md animate-pulse bg-white">
      <div>
        {/* Invoice number skeleton */}
        <div className="h-6 w-40 md:w-48 bg-body rounded mb-2"></div>

        {/* Status and icons skeleton */}
        <div className="flex justify-between items-center bg-hr-thin py-2 px-4 my-2">
          <div className="h-5 w-24 md:w-32 bg-body rounded"></div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-body rounded-full"></div>
            <div className="hidden w-4 h-4 md:w-6 md:h-6 bg-body rounded-full"></div>
            <div className="hidden w-4 h-4 md:w-6 md:h-6 bg-body rounded-full"></div>
          </div>
        </div>

        {/* Date skeleton */}
        <div className="h-4 w-32 md:w-40 bg-body rounded mb-2"></div>

        {/* Grand total skeleton */}
        <div className="h-6 w-20 md:w-28 bg-body rounded mb-2"></div>
        <div className="flex justify-between items-center gap-5">
          <div className="h-10 w-full bg-primary rounded"></div>
          {history === true ? (
            <div className="h-10 w-full bg-secondary rounded"></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCardSkeleton;
