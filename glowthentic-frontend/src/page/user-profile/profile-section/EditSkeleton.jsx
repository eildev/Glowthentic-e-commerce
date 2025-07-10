import cn from "../../../utils/cn";

const EditSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Form container skeleton */}
      <div
        className={cn(
          "w-full mx-auto bg-white rounded-lg shadow-md px-10 py-5 animate-pulse"
        )}
      >
        {/* User image upload section skeleton */}
        <div className="flex justify-center my-5">
          <div
            className={cn("relative w-28 h-28 rounded-full bg-body shadow-md")}
          ></div>
        </div>

        {/* Input fields grid skeleton */}
        <div className={cn("grid lg:grid-cols-2 grid-cols-1 gap-5")}>
          {/* Full Name skeleton */}
          <div className={cn("lg:col-span-2")}>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* Email skeleton */}
          <div className={cn("lg:col-span-2")}>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* Address skeleton */}
          <div className={cn("lg:col-span-2")}>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* District skeleton */}
          <div>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* Upazila skeleton */}
          <div>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* Postal Code skeleton */}
          <div>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* Country skeleton */}
          <div>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* Secondary Email skeleton */}
          <div>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>

          {/* Phone Number skeleton */}
          <div>
            <div className="h-5 w-24 bg-body rounded mb-2"></div>
            <div className="h-10 w-full bg-body rounded"></div>
          </div>
        </div>

        {/* Submit button skeleton */}
        <div className={cn("mt-6")}>
          <div className="h-12 w-full bg-body rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default EditSkeleton;
