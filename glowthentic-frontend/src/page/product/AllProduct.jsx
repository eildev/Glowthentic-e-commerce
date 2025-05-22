import { useEffect, useState } from "react";
import Product from "../../components/product_card/Product";
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
import { useGetComboProductsQuery } from "../../redux/features/api/comboProductApi/comboProductApi";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";



const AllProduct = () => {
  const dispatch = useDispatch();


  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
  } = useGetProductsQuery(); 


  const {
    data: comboData,
    isLoading: comboLoading,
    error: comboError,
  } = useGetComboProductsQuery();

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


  const [regularProducts, setRegularProducts] = useState([]);
  const [comboProducts, setComboProducts] = useState([]);

  useEffect(() => {
    if (productsData?.data) {
      console.log("Regular Products Data:", productsData.data);
      setRegularProducts(productsData.data);
      dispatch(setFilteredProducts(productsData.data));
    } else {
      console.log("No regular products data available");
    }
    if (productsError) {
      console.error("Error fetching regular products:", productsError);
    }
  }, [productsData, productsError, dispatch, filteredCategories, filteredTags, filteredPrices, filteredBrands, filteredFeatures, filteredSearchQuery, sortOption]);

  useEffect(() => {
    if (comboData?.comboProduct) {
      console.log("Combo Products Data:", comboData.comboProduct);
      setComboProducts(comboData.comboProduct);
    }
    if (comboError) {
      console.error("Error fetching combo products:", comboError);
    }
  }, [comboData, comboError]);

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
    if (productsData?.data) {
      setRegularProducts(productsData.data);
      dispatch(setFilteredProducts(productsData.data));
    }
    if (comboData?.comboProduct) {
      setComboProducts(comboData.comboProduct);
    }
  };

  const allSelectedFilters = [
    ...selectedCategories,
    ...filteredTags.map((tagId) =>
      Object.values(selectedCategoryMap).find((name) => name === tagId) || tagId
    ),
    ...filteredBrands.map((brandId) =>
      Object.values(selectedCategoryMap).find((name) => name === brandId) || brandId
    ),
  ];

  if (productsLoading || comboLoading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5 w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
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

      {/* Regular Products Section */}
      <div className="mb-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-5 text-center">Products</h2>
        {productsError ? (
          <p className="text-red-500 text-center my-5">
            Error fetching regular products: {productsError.message || "Unknown error"}
          </p>
        ) : regularProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            {regularProducts.map((product) => (
              <div
                key={product.id}
                className="transition-all duration-500 ease-in-out animate-fadeIn"
              >
                <Product product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="col-span-full text-center text-gray-500 my-10">
            {isAnyFilterApplied
              ? "No products matched your filters"
              : "No regular products found"}
          </div>
        )}
      </div>

      {/* Combo Products Section */}
      <div className="mb-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-5 text-center">Combo Offers</h2>
        {comboError ? (
          <p className="text-red-500 text-center my-5">
            Error fetching combo products: {comboError.message || "Unknown error"}
          </p>
        ) : comboProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            {comboProducts.map((comboProduct) => (
              <div
                key={comboProduct.id}
                className="transition-all duration-500 ease-in-out animate-fadeIn"
              >
                <Product product={comboProduct} />
              </div>
            ))}
          </div>
        ) : (
          <div className="col-span-full text-center text-gray-500 my-10">
            No combo products found
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProduct;