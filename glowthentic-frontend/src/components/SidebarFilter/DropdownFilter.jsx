import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../typography/Checkbox";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";
import { useGetTagsQuery } from "../../redux/features/api/tagViewApi/tagViewApi";
import {
  addCategoryWithName,
  removeCategoryByName,
  setFilteredPrices,
  addTag,
  removeTag,
  addBrand,
  removeBrand,
  clearAllFilters,
  setFilteredProducts,
} from "../../redux/features/slice/filterSlice";
import { useGetBrandQuery } from "../../redux/features/api/brand/brandApi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import _ from "lodash";

// Slider styles
const sliderStyles = `
  .custom-slider .rc-slider-track {
    background-color: #4A5568;
    height: 6px;
    transition: all 0.2s ease;
  }
  .custom-slider .rc-slider-rail {
    background-color: #E2E8F0;
    height: 6px;
  }
  .custom-slider .rc-slider-handle {
    border: 2px solid #4A5568;
    background-color: #ffffff;
    width: 16px;
    height: 16px;
    opacity: 1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    cursor: grab;
  }
  .custom-slider .rc-slider-handle:hover {
    transform: scale(1.1);
  }
  .custom-slider .rc-slider-handle:active {
    cursor: grabbing;
  }
  .custom-slider .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #2D3748;
    box-shadow: 0 0 0 5px rgba(74, 85, 104, 0.2);
    transform: scale(1.1);
  }
`;

const DropdownFilter = () => {
  const dispatch = useDispatch();
  const { filteredCategories, filteredTags, filteredPrices, filteredBrands, selectedCategoryMap } =
    useSelector((state) => state.filters);
  const { data: categoryData, isLoading, refetch } = useGetCategoryQuery();
  const { data: brandData, isLoading: isBrandLoading } = useGetBrandQuery();
  const { data: tagsData, isLoading: isTagsLoading } = useGetTagsQuery();
  const { data: productData, error, isLoading: isProductsLoading } = useGetProductsQuery();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [priceRange, setPriceRange] = useState([
    filteredPrices[0]?.min || 0,
    filteredPrices[0]?.max || 1000,
  ]);

  // Calculate min and max prices from product data
  useEffect(() => {
    if (productData?.data && !isProductsLoading) {
      let newMinPrice = Number.MAX_SAFE_INTEGER;
      let newMaxPrice = Number.MIN_SAFE_INTEGER;

      productData.data.forEach((product) => {
        product.variants.forEach((variant) => {
          if (typeof variant.regular_price === "number" && !isNaN(variant.regular_price)) {
            if (variant.regular_price < newMinPrice) newMinPrice = variant.regular_price;
            if (variant.regular_price > newMaxPrice) newMaxPrice = variant.regular_price;
          }
        });
      });

      newMinPrice = Math.max(0, newMinPrice - 20);
      newMaxPrice = newMaxPrice + 20;

      if (newMinPrice !== Number.MAX_SAFE_INTEGER && newMaxPrice !== Number.MIN_SAFE_INTEGER) {
        setMinPrice(newMinPrice);
        setMaxPrice(newMaxPrice);
        if (!filteredPrices[0]?.min && !filteredPrices[0]?.max) {
          setPriceRange([newMinPrice, newMaxPrice]);
        }
      }
    }
  }, [productData, isProductsLoading, filteredPrices]);

  // Sync priceRange with filteredPrices
  useEffect(() => {
    if (filteredPrices[0]?.min && filteredPrices[0]?.max) {
      setPriceRange([filteredPrices[0].min, filteredPrices[0].max]);
    }
  }, [filteredPrices]);

  // Refetch categories when needed
  useEffect(() => {
    refetch();
  }, [refetch]);

  // Re-filter products when filters change
  useEffect(() => {
    if (productData?.data && !isProductsLoading) {
      console.log("Re-filtering products due to filter change:", {
        filteredCategories,
        filteredTags,
        filteredBrands,
        filteredPrices,
      });
      dispatch(setFilteredProducts(productData.data));
    }
  }, [dispatch, productData, isProductsLoading, filteredCategories, filteredTags, filteredBrands, filteredPrices]);

  // Debounced price range change handler
  const debouncedPriceChange = useCallback(
    _.debounce((newRange) => {
      dispatch(setFilteredPrices([{ min: newRange[0], max: newRange[1] }]));
    }, 100),
    [dispatch]
  );

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    debouncedPriceChange(newRange);
  };

  const handleCategoriesCheckboxChange = (categoryName, categoryId) => {
    const isSelected = filteredCategories.includes(String(categoryId));
    console.log(`Category ${categoryName} (ID: ${categoryId}) isSelected: ${isSelected}`);
    if (isSelected) {
      dispatch(removeCategoryByName(categoryName));
    } else {
      dispatch(addCategoryWithName({ id: String(categoryId), name: categoryName }));
    }
  };

  const handleTagsCheckboxChange = (tagName, tagId) => {
    const isSelected = filteredTags.includes(String(tagId));
    console.log(`Tag ${tagName} (ID: ${tagId}) isSelected: ${isSelected}`);
    if (isSelected) {
      dispatch(removeTag(tagName));
    } else {
      dispatch(addTag({ id: String(tagId), name: tagName }));
    }
  };

  const handleBrandsCheckboxChange = (brandName, brandId) => {
    const isSelected = filteredBrands.includes(String(brandId));
    console.log(`Brand ${brandName} (ID: ${brandId}) isSelected: ${isSelected}`);
    if (isSelected) {
      dispatch(removeBrand(brandName));
    } else {
      dispatch(addBrand({ id: String(brandId), name: brandName }));
    }
  };

  const handleClearFilters = () => {
    console.log("Clearing all filters");
    dispatch(clearAllFilters());
    if (productData?.data) {
      dispatch(setFilteredProducts(productData.data));
    }
  };

  // Handle loading and error states
  if (isLoading || isBrandLoading || isTagsLoading || isProductsLoading) {
    return <div className="text-gray-500">Loading filters...</div>;
  }
  if (error || !categoryData || !brandData || !tagsData || !productData) {
    return <div className="text-red-500">Error loading filters. Please try again.</div>;
  }

  return (
    <div className="p-4">
      <style>{sliderStyles}</style>

      {/* Price Range Slider Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="checkbox" className="peer" id="price" defaultChecked />
        <label className="collapse-title text-secondary font-bold" htmlFor="price">
          Price
        </label>
        <div className="collapse-content">
          <div className="px-4 py-2">
            <Slider
              range
              min={minPrice}
              max={maxPrice}
              value={priceRange}
              onChange={handlePriceRangeChange}
              allowCross={false}
              className="custom-slider"
              disabled={isProductsLoading || minPrice === 0 || maxPrice === 1000}
              step={1}
            />
            <div className="flex justify-between mt-4">
              <span className="text-sm font-medium">${priceRange[0].toFixed(2)}</span>
              <span className="text-sm font-medium">${priceRange[1].toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="checkbox" className="peer" id="category" defaultChecked />
        <label className="collapse-title text-secondary font-bold" htmlFor="category">
          Category
        </label>
        <div className="collapse-content">
          {categoryData?.categories?.slice(0, 10).map((category) => (
            <div key={category.id || category.categoryName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={filteredCategories.includes(String(category.id))}
                onChange={() => handleCategoriesCheckboxChange(category.categoryName, category.id)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleCategoriesCheckboxChange(category.categoryName, category.id)}
              >
                {category.categoryName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin my-2" />

      {/* Skin Condition (Tags) Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="checkbox" className="peer" id="skin-condition" />
        <label className="collapse-title text-secondary font-bold" htmlFor="skin-condition">
          Skin Condition
        </label>
        <div className="collapse-content">
          {tagsData?.categories?.map((tag) => (
            <div key={tag.id || tag.tagName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={filteredTags.includes(String(tag.id))}
                onChange={() => handleTagsCheckboxChange(tag?.tagName, tag.id)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleTagsCheckboxChange(tag?.tagName, tag.id)}
              >
                {tag.tagName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin my-2" />

      {/* Brands Section */}
      <div className="collapse collapse-arrow bg-white mb-2">
        <input type="checkbox" className="peer" id="brands" defaultChecked />
        <label className="collapse-title text-secondary font-bold" htmlFor="brands">
          Brands
        </label>
        <div className="collapse-content">
          {brandData?.Brands.map((brand) => (
            <div key={brand.id || brand.BrandName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={filteredBrands.includes(String(brand.id))}
                onChange={() => handleBrandsCheckboxChange(brand.BrandName, brand.id)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleBrandsCheckboxChange(brand.BrandName, brand.id)}
              >
                {brand.BrandName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin my-2" />

      {/* Clear All Filters Button */}
      <button className="btn btn-secondary w-full mt-4" onClick={handleClearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default DropdownFilter;