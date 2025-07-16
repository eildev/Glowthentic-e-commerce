import Container from "../Container";
import SidebarFilterSkeleton from "../SidebarFilter/SidebarFilterSkeleton";
import ProductSkeleton from "./ProductSkeleton";

const AllProductPageSkeleton = () => {
  return (
    <Container>
      {/* Breadcrumb */}
      <div className="animate-pulse">
        <div className="h-4 bg-gray rounded w-1/4 mb-5"></div>
      </div>

      {/* Filter Button and Sort Dropdown */}
      <div className="flex justify-between items-center mb-5 mx-5 gap-2 animate-pulse">
        <div className="w-1/2">
          <div className="h-5 bg-gray rounded w-1/4 mb-2 lg:block hidden"></div>
          <div className="h-10 bg-gray rounded w-full lg:hidden"></div>
        </div>
        <div className="h-10 bg-gray rounded w-1/3"></div>
      </div>

      {/* Main Content */}
      <div className="lg:flex lg:gap-5">
        {/* Sidebar */}
        <div className="hidden lg:block min-w-[290px]">
          <SidebarFilterSkeleton />
        </div>
        {/* Product Grid */}
        <div className="w-full px-5 my-3">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllProductPageSkeleton;
