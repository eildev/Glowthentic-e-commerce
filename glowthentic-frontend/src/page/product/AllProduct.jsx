import { useEffect } from "react";
import Product from "../../components/product_card/Product";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredProducts,
  removeCategoryByName,
  removeTag,
  removeBrand,
  clearAllFilters,
} from "../../redux/features/slice/filterSlice";
import ProductSkeleton from "../../components/product_card/ProductSkeleton";
import { IoMdClose } from "react-icons/io";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetProductsQuery();

  console.log("All products", data);
  const {
    filteredCategories,
    filteredTags,
    filteredPrices,
    filteredBrands,
    filteredFeatures,
    filteredSearchQuery,
    filteredProducts,
    sortOption,
    selectedCategoryMap,
    selectedCategories,
  } = useSelector((state) => state.filters);

  const isAnyFilterApplied =
    filteredCategories.length > 0 ||
    filteredTags.length > 0 ||
    filteredPrices.length > 0 ||
    filteredBrands.length > 0 ||
    filteredFeatures.length > 0 ||
    filteredSearchQuery !== "";

  useEffect(() => {
    if (data?.data) {
      dispatch(setFilteredProducts(data.data));
    }
  }, [
    data,
    dispatch,
    filteredCategories,
    filteredTags,
    filteredPrices,
    filteredBrands,
    filteredFeatures,
    filteredSearchQuery,
    sortOption,
  ]);

  // Reuse the removeFilter logic from SidebarFilter
  const removeFilter = (itemToRemove) => {
    const idToRemove = Object.keys(selectedCategoryMap).find(
      (id) => selectedCategoryMap[id] === itemToRemove
    );
    if (idToRemove) {
      if (filteredCategories.includes(idToRemove)) {
        dispatch(removeCategoryByName(itemToRemove));
      } else if (filteredTags.includes(idToRemove)) {
        dispatch(removeTag(itemToRemove));
      } else if (filteredBrands.includes(idToRemove)) {
        dispatch(removeBrand(itemToRemove));
      }
    } else {
      console.warn(`No ID found for filter: ${itemToRemove}`);
    }
  };

  // Handle clear all filters
  const handleClearAllFilters = () => {
    dispatch(clearAllFilters());
    if (data?.data) {
      dispatch(setFilteredProducts(data.data));
    }
  };

  // Combine all selected filters for display
  const allSelectedFilters = [
    ...selectedCategories,
    ...filteredTags.map(
      (tagId) =>
        Object.values(selectedCategoryMap).find((name) => name === tagId) ||
        tagId
    ),
    ...filteredBrands.map(
      (brandId) =>
        Object.values(selectedCategoryMap).find((name) => name === brandId) ||
        brandId
    ),
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5 w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center my-5">
        Error: {error.message || "Failed to load products"}
      </p>
    );
  }

  return (
    <div className="w-full px-5 my-3">
      {/* Filter Chips Section - Visible only on small devices */}
      <div className="lg:hidden mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-semibold">Applied Filters</h3>
          {isAnyFilterApplied && (
            <button
              className="text-secondary text-sm"
              onClick={handleClearAllFilters}
            >
              Clear All
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedCategories.length > 0 ? (
            selectedCategories.map((item, index) => (
              <div
                key={index}
                className="text-[#0C0C0C] flex gap-2 items-center text-sm border border-[#DFDFDF] p-2 rounded"
              >
                {item}
                <button onClick={() => removeFilter(item)}>
                  <IoMdClose />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No filters selected</p>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="transition-all duration-500 ease-in-out animate-fadeIn"
            >
              <Product product={product} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 my-10">
            {isAnyFilterApplied
              ? "No products matched your filters"
              : "No products found"}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProduct;
