import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../typography/Checkbox";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";
import { useGetTagsQuery } from "../../redux/features/api/tagViewApi/tagViewApi";
import {
  addCategoryWithName,
  removeCategoryByName,
  setFilteredPrices,
} from "../../redux/features/slice/filterSlice";
import { useGetBrandQuery } from "../../redux/features/api/brand/brandApi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import default rc-slider styles
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import _ from "lodash"; // For debouncing

// Same slider styles as before
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
  const { selectedCategories, filteredCategories, filteredTags, filteredPrices, selectedCategoryMap } =
    useSelector((state) => state.filters);

  const { data: categoryData, isLoading, refetch } = useGetCategoryQuery();
  const { data: brandData, isBrandLoading } = useGetBrandQuery();
  const { data: tagsData } = useGetTagsQuery();
  const { data: productData, error, isLoading: isProductsLoading } = useGetProductsQuery();

  // Initialize minPrice and maxPrice with temporary defaults
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // State for price range slider
  const [priceRange, setPriceRange] = useState([
    filteredPrices[0]?.min || 0,
    filteredPrices[0]?.max || 1000,
  ]);

  // Calculate min and max prices from product data when available
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

      // Apply padding to min and max prices
      newMinPrice = Math.max(0, newMinPrice - 20);
      newMaxPrice = newMaxPrice + 20;

      // Update state only if values are valid
      if (newMinPrice !== Number.MAX_SAFE_INTEGER && newMaxPrice !== Number.MIN_SAFE_INTEGER) {
        setMinPrice(newMinPrice);
        setMaxPrice(newMaxPrice);

        // Update priceRange to use actual min/max if filteredPrices is not set
        if (!filteredPrices[0]?.min && !filteredPrices[0]?.max) {
          setPriceRange([newMinPrice, newMaxPrice]);
        }
      }
    }
  }, [productData, isProductsLoading, filteredPrices]);

  // Refetch categories when needed
  useEffect(() => {
    refetch();
  }, [refetch]);

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
    // Check if this category is already selected
    const isSelected = selectedCategories.includes(categoryName);
    
    if (isSelected) {
      // Remove the category
      dispatch(removeCategoryByName(categoryName));
    } else {
      // Add the category
      dispatch(addCategoryWithName({ id: categoryId, name: categoryName }));
    }
  };

  const handleTagsCheckboxChange = (tagName, tagId) => {
    // Check if this tag is already selected
    const isSelected = selectedCategories.includes(tagName);
    
    if (isSelected) {
      // Remove the tag
      dispatch(removeCategoryByName(tagName));
    } else {
      // Add the tag
      dispatch(addCategoryWithName({ id: tagId, name: tagName }));
    }
  };

  return (
    <div>
      {/* Inject custom slider styles */}
      <style>{sliderStyles}</style>

      {/* Price Range Slider Section */}
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" id="price" defaultChecked />
        <div className="collapse-title text-secondary font-bold" htmlFor="price">
          Price
        </div>
        <div className="collapse-content">
          <div className="px-4 py-2">
            {isProductsLoading ? (
              <div className="text-sm text-gray-500">Loading prices...</div>
            ) : (
              <>
                <Slider
                  range
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange}
                  onChange={handlePriceRangeChange}
                  allowCross={false}
                  className="custom-slider"
                  disabled={isProductsLoading}
                  step={1} // Adjust for smooth sliding
                />
              
                <div className="flex justify-between mt-4">
                  <span className="text-sm font-medium">
                    ${priceRange[0].toFixed(2)}
                  </span>
                  <span className="text-sm font-medium">
                    ${priceRange[1].toFixed(2)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="collapse collapse-arrow bg-white">
        <input type="checkbox" className="peer" id="category" defaultChecked />
        <div className="collapse-title text-secondary font-bold" htmlFor="category">
          Category
        </div>
        <div className="collapse-content">
          {categoryData?.categories?.slice(0, 10).map((category) => (
            <div
              key={category.id || category.categoryName}
              className="flex items-center py-2"
            >
              <Checkbox
                className="checkbox-sm"
                checked={selectedCategories.includes(category.categoryName)}
                onChange={() =>
                  handleCategoriesCheckboxChange(category.categoryName, category.id)
                }
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() =>
                  handleCategoriesCheckboxChange(category.categoryName, category.id)
                }
              >
                {category.categoryName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />

      {/* Skin Condition Section */}
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" id="skin-condition" />
        <div
          className="collapse-title text-secondary font-bold"
          htmlFor="skin-condition"
        >
          Skin Condition
        </div>
        <div className="collapse-content">
          {tagsData?.categories?.map((tag) => (
            <div key={tag.id || tag.tagName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedCategories.includes(tag.tagName)}
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
      <hr className="text-hr-thin" />

      {/* Brands Section */}
      <div className="collapse collapse-arrow bg-white">
        <input type="checkbox" className="peer" id="category" defaultChecked />
        <div className="collapse-title text-secondary font-bold" htmlFor="category">
          Brands
        </div>
        <div className="collapse-content">
          {brandData?.Brands.map((brand) => (
            <div
              key={brand.id || brand.BrandName}
              className="flex items-center py-2"
            >
              <Checkbox
                className="checkbox-sm"
                checked={selectedCategories.includes(brand.BrandName)}
                onChange={() =>
                  handleCategoriesCheckboxChange(brand.BrandName, brand.id)
                }
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() =>
                  handleCategoriesCheckboxChange(brand.BrandName, brand.id)
                }
              >
                {brand.BrandName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />
    </div>
  );
};

export default DropdownFilter;