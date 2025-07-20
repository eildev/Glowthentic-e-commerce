import { Icon } from "@iconify/react";

const ProductDetailsNameTagAndTagShowSkeleton = () => {
  return (
    <div className="w-full mt-4 p-2 sm:p-0 animate-pulse">
      <div className="mb-2">
        <div className="h-8 bg-gray-thin rounded w-3/4"></div>
      </div>

      <div className="font-thin line-clamp-3 text-gray">
        <div className="h-4 bg-gray-thin rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-thin rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-gray-thin rounded w-2/3"></div>
      </div>

      <div className="mt-2">
        <div className="flex gap-2">
          <div className="h-4 bg-gray-thin rounded w-16"></div>
          <div className="h-4 bg-gray-thin rounded w-16"></div>
          <div className="h-4 bg-gray-thin rounded w-16"></div>
        </div>
      </div>

      <div className="my-2 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Icon
            icon="mdi:eye"
            className="text-gray-200"
            width="1.5rem"
            height="1.5rem"
          />
          <div className="h-4 bg-gray-thin rounded w-12"></div>
        </div>
        <div className="h-4 bg-gray-thin rounded w-32"></div>
      </div>

      <div className="my-2 flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-4 w-4 bg-gray-thin rounded-full"
            ></div>
          ))}
        </div>
        <div className="h-4 bg-gray-thin rounded w-16"></div>
      </div>
    </div>
  );
};

export default ProductDetailsNameTagAndTagShowSkeleton;
