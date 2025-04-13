import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../typography/Checkbox";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";
import { useGetTagsQuery } from "../../redux/features/api/tagViewApi/tagViewApi";
import {
  setSelectedCategories,
  setFilteredCategories,
  setFilteredTags,
  setFilteredPrices,
} from "../../redux/features/slice/filterSlice";
import { useGetBrandQuery } from "../../redux/features/api/brand/brandApi";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Import default rc-slider styles

// Add custom CSS for the slider
const sliderStyles = `
  .custom-slider .rc-slider-track {
    background-color: #4A5568;
    height: 6px;
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
  }
  .custom-slider .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: #2D3748;
    box-shadow: 0 0 0 5px rgba(74, 85, 104, 0.2);
  }
`;

const DropdownFilter = () => {
  const dispatch = useDispatch();
  const { selectedCategories, filteredCategories, filteredTags, filteredPrices } =
    useSelector((state) => state.filters);

  const { data: categoryData, isLoading, refetch } = useGetCategoryQuery();
  const { data: brandData, isBrandLoading } = useGetBrandQuery();
  const { data: tagsData } = useGetTagsQuery();

  console.log("brandData", brandData);

  useEffect(() => {
    refetch();
  }, [refetch]);

  // State for price range slider
  const [priceRange, setPriceRange] = useState([
    filteredPrices[0]?.min || 0,
    filteredPrices[0]?.max || 550,
  ]);

  const handleCategoriesCheckboxChange = (item, categoryId) => {
    const newSelected = selectedCategories.includes(item)
      ? selectedCategories.filter((i) => i !== item)
      : [...selectedCategories, item];
    dispatch(setSelectedCategories(newSelected));

    const newFiltered = filteredCategories.includes(categoryId)
      ? filteredCategories.filter((id) => id !== categoryId)
      : [...filteredCategories, categoryId];
    dispatch(setFilteredCategories(newFiltered));
  };

  const handleTagsCheckboxChange = (item, tagId) => {
    const newSelected = selectedCategories.includes(item)
      ? selectedCategories.filter((i) => i !== item)
      : [...selectedCategories, item];
    dispatch(setSelectedCategories(newSelected));

    const newFiltered = filteredTags.includes(tagId)
      ? filteredTags.filter((id) => id !== tagId)
      : [...filteredTags, tagId];
    dispatch(setFilteredTags(newFiltered));
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    dispatch(setFilteredPrices([{ min: newRange[0], max: newRange[1] }]));
    const priceLabel = `$${newRange[0]} - $${newRange[1]}`;
    // if (!selectedCategories.includes(priceLabel)) {
    //   dispatch(setSelectedCategories([...selectedCategories, priceLabel]));
    // }
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
            {/* Price Range Slider with custom class */}
            <Slider
              range
              min={0}
              max={550}
              value={priceRange}
              onChange={handlePriceRangeChange}
              allowCross={false}
              className="custom-slider" // Apply custom CSS class
            />
            {/* Display selected price range */}
            <div className="flex justify-between mt-4">
              <span className="text-sm font-medium">
                ${priceRange[0].toFixed(2)}
              </span>
              <span className="text-sm font-medium">
                ${priceRange[1].toFixed(2)}
              </span>
            </div>
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