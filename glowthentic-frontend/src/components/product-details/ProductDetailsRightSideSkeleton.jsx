import { Icon } from "@iconify/react";

const ProductDetailsRightSideSkeleton = () => {
  return (
    <div className="sm:col-span-3 md:pt-7 md:pl-4 animate-pulse">
      <div className="hidden sm:block">
        <div className="w-full mt-4 p-2 sm:p-0">
          <div className="h-8 bg-gray-thin rounded w-3/4 mb-2"></div>

          <div className="line-clamp-3">
            <div className="h-4 bg-gray-thin rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-thin rounded w-5/6 mb-1"></div>
            <div className="h-4 bg-gray-thin rounded w-2/3"></div>
          </div>

          <div className="mt-2 flex gap-2">
            <div className="h-4 bg-gray-thin rounded w-16"></div>
            <div className="h-4 bg-gray-thin rounded w-16"></div>
            <div className="h-4 bg-gray-thin rounded w-16"></div>
          </div>

          <div className="my-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Icon
                icon="mdi:eye"
                className="text-gray-thin"
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
      </div>
      <div className="h-6 bg-gray-thin rounded w-1/3 mt-2"></div>
      <hr className="text-gray-thin my-4" />

      <div className="mt-4 flex flex-wrap justify-start items-center gap-3">
        <div className="h-10 bg-gray-thin rounded w-24"></div>
        <div className="h-10 bg-gray-thin rounded w-28"></div>
        <div className="h-10 bg-gray-thin rounded w-28"></div>
      </div>

      <div className="mt-2 mb-5 lg:text-left text-center">
        <div className="h-4 bg-gray-thin rounded w-40 mx-auto lg:mx-0"></div>
      </div>

      <div className="flex items-center justify-start my-3">
        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border border-transparent bg-gray-thin h-[50px] w-[50px]"
            ></div>
          ))}
        </div>
      </div>

      <div className="flex sm:flex-wrap justify-start items-center gap-3 mt-5">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-7 w-7 bg-gray-thin rounded-full flex justify-center items-center"
          >
            <Icon
              icon="mdi:circle"
              className="text-gray-thin"
              width="1rem"
              height="1rem"
            />
          </div>
        ))}
      </div>

      <div className="bg-gray-thin p-2 mt-4 rounded">
        <div className="flex items-center py-1">
          <div className="h-6 w-6 bg-gray-thin rounded"></div>
          <div className="h-4 bg-gray-thin rounded w-24 ml-2"></div>
        </div>
        <div className="flex items-center py-1">
          <div className="h-6 w-6 bg-gray-thin rounded"></div>
          <div className="h-4 bg-gray-thin rounded w-full ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsRightSideSkeleton;
