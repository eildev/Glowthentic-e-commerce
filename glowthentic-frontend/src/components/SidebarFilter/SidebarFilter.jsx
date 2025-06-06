import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeadTitle from "../typography/HeadTitle";
import DropdownFilter from "./DropdownFilter";
import cn from "../../utils/cn";
import { IoMdClose } from "react-icons/io";
import {
  clearAllFilters,
  removeCategoryByName,
  removeTag,
  removeBrand,
  setFilteredProducts,
} from "../../redux/features/slice/filterSlice";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import { useEffect } from "react";
import capitalizeText from "../../utils/capitalizeText";

const SidebarFilter = ({ className }) => {
  const dispatch = useDispatch();
  const {
    selectedCategories,
    selectedCategoryMap,
    filteredCategories,
    filteredTags,
    filteredBrands,
    filteredPrices,
    filteredSearchQuery,
  } = useSelector((state) => state.filters);
  const { data: productData, isLoading: isProductsLoading } =
    useGetProductsQuery();

  useEffect(() => {
    if (productData?.data && !isProductsLoading) {
      dispatch(setFilteredProducts(productData.data));
    }
  }, [
    dispatch,
    productData,
    isProductsLoading,
    filteredCategories,
    filteredTags,
    filteredBrands,
    filteredPrices,
    filteredSearchQuery,
  ]);

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

  const handleClearAllFilters = () => {
    dispatch(clearAllFilters());
    if (productData?.data) {
      dispatch(setFilteredProducts(productData.data));
    }
  };

  return (
    <div className={cn("min-w-72 max-w-[288px] bg-white p-3", className)}>
      <div className="mt-5">
        <hr className="text-hr-thin" />
        <div className="p-4">
          <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
            Applied Filters
          </HeadTitle>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {selectedCategories.length > 0 ? (
              selectedCategories.map((item, index) => (
                <div
                  key={index}
                  className="text-[#0C0C0C] flex gap-2 items-center text-sm border border-[#DFDFDF] p-2"
                >
                  {capitalizeText(item)}
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
        <div className="p-4">
          <Link className="text-secondary" onClick={handleClearAllFilters}>
            Clear All Filters
          </Link>
        </div>
        <hr className="text-hr-thin" />
        <hr className="text-hr-thin" />
        <DropdownFilter />
      </div>
    </div>
  );
};

export default SidebarFilter;
