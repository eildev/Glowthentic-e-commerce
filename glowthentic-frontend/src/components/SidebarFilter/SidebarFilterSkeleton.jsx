import cn from "../../utils/cn";

const SidebarFilterSkeleton = ({ className }) => {
  return (
    <div
      className={cn(
        "min-w-72 max-w-[288px] bg-white p-3 animate-pulse",
        className
      )}
    >
      <div className="mt-5">
        <hr className="border-gray" />
        {/* Title */}
        <div className="p-4">
          <div className="h-5 bg-gray rounded w-1/3"></div>
        </div>
        {/* Applied Filters */}
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            <div className="h-6 bg-gray rounded w-20"></div>
            <div className="h-6 bg-gray rounded w-16"></div>
            <div className="h-6 bg-gray rounded w-24"></div>
          </div>
        </div>
        {/* Clear All Link */}
        <div className="p-4">
          <div className="h-4 bg-gray rounded w-24"></div>
        </div>
        <hr className="border-gray" />
      </div>
    </div>
  );
};

export default SidebarFilterSkeleton;
