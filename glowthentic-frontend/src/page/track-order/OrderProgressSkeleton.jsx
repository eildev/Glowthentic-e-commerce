const OrderProgressSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header background skeleton */}
      <div className="bg-primary h-[250px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 mt-[-150px] px-2 drop-shadow-sm">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Success message section skeleton */}
            <div className="flex flex-col items-center justify-center text-center py-4">
              <div className="h-[120px] lg:h-[150px] w-[120px] lg:w-[150px] bg-body rounded-full"></div>
              <div className="h-8 w-64 lg:w-96 bg-body rounded mt-4"></div>
            </div>

            {/* Progress steps skeleton */}
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-start lg:items-center justify-between text-sm text-gray-500">
                {/* Step 1: Ordered */}
                <div className="flex flex-row w-full lg:w-auto lg:flex-col lg:items-center">
                  <div className="w-8 h-8 bg-body rounded-full mb-2"></div>
                  <div className="w-full lg:w-auto">
                    <div className="h-3 w-12 bg-body rounded ps-2 lg:ps-0"></div>
                    <div className="flex w-full lg:w-auto justify-between lg:flex-col flex-row ps-2 lg:ps-0 gap-3 lg:gap-0">
                      <div className="h-4 w-20 bg-body rounded mt-1"></div>
                      <div className="h-5 w-16 bg-body rounded-3xl mt-1 lg:mt-2"></div>
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="h-14 ms-[14px] lg:ms-0 lg:h-1 w-1 lg:w-60 bg-body"></div>

                {/* Step 2: Shipped */}
                <div className="flex flex-row w-full lg:w-auto lg:flex-col lg:items-center">
                  <div className="w-8 h-8 bg-body rounded-full mb-2"></div>
                  <div className="w-full lg:w-auto">
                    <div className="h-3 w-12 bg-body rounded ps-2 lg:ps-0"></div>
                    <div className="flex w-full lg:w-auto justify-between lg:flex-col flex-row ps-2 lg:ps-0 gap-3 lg:gap-0">
                      <div className="h-4 w-20 bg-body rounded mt-1"></div>
                      <div className="h-5 w-16 bg-body rounded-3xl mt-1 lg:mt-2"></div>
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="h-14 ms-[14px] lg:ms-0 lg:h-1 w-1 lg:w-60 bg-body"></div>

                {/* Step 3: Completed */}
                <div className="flex flex-row w-full lg:w-auto lg:flex-col lg:items-center">
                  <div className="w-8 h-8 bg-body rounded-full mb-2"></div>
                  <div className="w-full lg:w-auto">
                    <div className="h-3 w-12 bg-body rounded ps-2 lg:ps-0"></div>
                    <div className="flex w-full lg:w-auto justify-between lg:flex-col flex-row ps-2 lg:ps-0 gap-3 lg:gap-0">
                      <div className="h-4 w-20 bg-body rounded mt-1"></div>
                      <div className="h-5 w-16 bg-body rounded-3xl mt-1 lg:mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashed line skeleton */}
            <div className="border-dashed border-t-2 mt-4 text-[#B2B2B2] border-gray-300 mx-10"></div>

            {/* Cart items section skeleton */}
            <div className="lg:p-6 p-2">
              <div className="bg-gray-50">
                <div className="mx-auto bg-white rounded-lg p-6">
                  <div className="text-center">
                    <div className="h-6 w-48 lg:w-64 bg-body rounded mb-4"></div>
                    <div className="h-4 w-80 lg:w-96 bg-body rounded mb-6"></div>
                  </div>

                  {/* Cart items skeleton (3 placeholders) */}
                  {Array(3)
                    .fill()
                    .map((_, index) => (
                      <div
                        key={index}
                        className="lg:flex flex-col lg:flex-row items-center gap-2 lg:gap-4 border-b py-4"
                      >
                        <div className="flex gap-4 lg:gap-0">
                          <div className="w-16 h-16 bg-body rounded"></div>
                          <div className="lg:hidden">
                            <div className="h-5 w-32 bg-body rounded mt-1"></div>
                            <div className="h-4 w-20 bg-body rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="hidden lg:block">
                            <div className="h-5 w-32 bg-body rounded mt-1"></div>
                            <div className="h-4 w-20 bg-body rounded mt-1"></div>
                          </div>
                          <div className="h-4 w-full bg-body rounded mt-2"></div>
                          <div className="flex mt-2 justify-between">
                            <div className="h-4 w-20 bg-body rounded"></div>
                            <div className="h-4 w-20 bg-body rounded"></div>
                            <div className="h-4 w-20 bg-body rounded"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  {/* Order summary skeleton */}
                  <div className="mt-6 bg-gray-100 p-2 rounded-lg">
                    <div className="flex justify-between">
                      <div className="h-6 w-40 bg-body rounded"></div>
                      <div className="h-6 w-48 bg-body rounded"></div>
                    </div>
                    <div className="h-4 w-64 bg-body rounded mt-2"></div>
                    <div className="flex justify-between mt-2">
                      <div className="h-4 w-32 bg-body rounded"></div>
                      <div className="h-4 w-20 bg-body rounded"></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="h-4 w-32 bg-body rounded"></div>
                      <div className="h-4 w-20 bg-body rounded"></div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="h-4 w-32 bg-body rounded"></div>
                      <div className="h-4 w-20 bg-body rounded"></div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <div className="h-5 w-40 bg-body rounded px-4"></div>
                      <div className="h-5 w-20 bg-body rounded"></div>
                    </div>
                  </div>

                  {/* Order confirmation skeleton */}
                  <div className="mt-6 text-center">
                    <div className="h-4 w-64 bg-body rounded mx-auto"></div>
                    <div className="h-4 w-80 bg-body rounded mt-2 mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Address and shipping details skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-white p-6 rounded-lg">
                {/* Shipping Address */}
                <div className="text-center md:text-left border-0 md:border-[1px] md:border-e-0 border-[#D3D8E3] p-5">
                  <div className="flex justify-center md:justify-start items-center mb-2">
                    <div className="w-8 h-8 bg-body rounded"></div>
                  </div>
                  <div className="h-5 w-32 bg-body rounded mb-2"></div>
                  <div className="h-4 w-40 bg-body rounded mb-1"></div>
                  <div className="h-4 w-48 bg-body rounded"></div>
                </div>

                {/* Billing Details */}
                <div className="text-center md:text-left border-0 md:border-[1px] md:border-e-0 border-[#D3D8E3] p-5">
                  <div className="flex justify-center md:justify-start items-center mb-2">
                    <div className="w-8 h-8 bg-body rounded"></div>
                  </div>
                  <div className="h-5 w-32 bg-body rounded mb-2"></div>
                  <div className="h-4 w-40 bg-body rounded mb-1"></div>
                  <div className="h-4 w-48 bg-body rounded mb-1"></div>
                  <div className="h-4 w-40 bg-body rounded"></div>
                </div>

                {/* Shipping Method */}
                <div className="text-center md:text-left border-0 md:border-[1px] border-[#D3D8E3] p-5">
                  <div className="flex justify-center md:justify-start items-center mb-2">
                    <div className="w-8 h-8 bg-body rounded"></div>
                  </div>
                  <div className="h-5 w-32 bg-body rounded mb-2"></div>
                  <div className="h-4 w-40 bg-body rounded mb-1"></div>
                  <div className="h-4 w-48 bg-body rounded"></div>
                </div>
              </div>
            </div>

            {/* Call us section skeleton */}
            <div className="mt-6 bg-orange-500 text-white text-center py-4 pyb-0 shadow">
              <div className="h-5 w-64 bg-body rounded mx-auto"></div>
            </div>

            {/* Features skeleton */}
            <div className="mb-5 grid grid-cols-2 md:grid-cols-4 text-center text-[#85888D]">
              <div className="flex flex-col py-8 border-e-0 border-t-0 border-[#D3D8E3] items-center border p-5">
                <div className="w-10 h-10 bg-body rounded mb-2"></div>
                <div className="h-4 w-32 bg-body rounded"></div>
              </div>
              <div className="flex flex-col border border-e-0 border-t-0 py-8 border-[#D3D8E3] items-center p-5">
                <div className="w-10 h-10 bg-body rounded mb-2"></div>
                <div className="h-4 w-32 bg-body rounded"></div>
              </div>
              <div className="flex flex-col border border-e-0 py-8 border-t-0 border-[#D3D8E3] items-center p-5">
                <div className="w-10 h-10 bg-body rounded mb-2"></div>
                <div className="h-4 w-32 bg-body rounded"></div>
              </div>
              <div className="flex flex-col border border-t-0 py-8 border-[#D3D8E3] items-center p-5">
                <div className="w-10 h-10 bg-body rounded mb-2"></div>
                <div className="h-4 w-32 bg-body rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProgressSkeleton;
