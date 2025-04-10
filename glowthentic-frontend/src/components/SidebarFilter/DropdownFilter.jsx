import { useEffect } from "react";
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

const DropdownFilter = () => {
  const dispatch = useDispatch();
  const {
    selectedCategories,
    filteredCategories,
    filteredTags,
    filteredPrices,
  } = useSelector((state) => state.filters);

  const { data: categoryData, isLoading, refetch } = useGetCategoryQuery();
  const { data: tagsData } = useGetTagsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const prices = [
    { label: "$50.00 - $150.00", min: 50, max: 150 },
    { label: "$150.00 - $250.00", min: 150, max: 250 },
    { label: "$250.00 - $350.00", min: 250, max: 350 },
    { label: "$350.00 - $450.00", min: 350, max: 450 },
    { label: "$450.00 - $550.00", min: 450, max: 550 },
  ];

  const handleCategoriesCheckboxChange = (item, categoryId) => {
    // Update selected categories list
    const newSelected = selectedCategories.includes(item)
      ? selectedCategories.filter((i) => i !== item)
      : [...selectedCategories, item];
    dispatch(setSelectedCategories(newSelected));
    
    // Update filtered categories list
    const newFiltered = filteredCategories.includes(categoryId)
      ? filteredCategories.filter((id) => id !== categoryId)
      : [...filteredCategories, categoryId];
    dispatch(setFilteredCategories(newFiltered));
  };

  const handleTagsCheckboxChange = (item, tagId) => {
    // Update selected categories list
    const newSelected = selectedCategories.includes(item)
      ? selectedCategories.filter((i) => i !== item)
      : [...selectedCategories, item];
    dispatch(setSelectedCategories(newSelected));

    // Update filtered tags list
    const newFiltered = filteredTags.includes(tagId)
      ? filteredTags.filter((id) => id !== tagId)
      : [...filteredTags, tagId];
    dispatch(setFilteredTags(newFiltered));
  };

  const handlePriceCheckboxChange = (priceRange) => {
    // Update selected categories list for UI display
    const newSelected = selectedCategories.includes(priceRange.label)
      ? selectedCategories.filter((item) => item !== priceRange.label)
      : [...selectedCategories, priceRange.label];
    dispatch(setSelectedCategories(newSelected));

    // Update filtered prices list for actual filtering
    const priceRangeExists = filteredPrices.some(
      (p) => p.min === priceRange.min && p.max === priceRange.max
    );
    
    let newFilteredPrices;
    if (priceRangeExists) {
      newFilteredPrices = filteredPrices.filter(
        (p) => !(p.min === priceRange.min && p.max === priceRange.max)
      );
    } else {
      newFilteredPrices = [...filteredPrices, { min: priceRange.min, max: priceRange.max }];
    }
    
    dispatch(setFilteredPrices(newFilteredPrices));
  };

  return (
    <div>
      <div className="collapse collapse-arrow bg-white">
        <input type="checkbox" className="peer" id="category" defaultChecked />
        <div
          className="collapse-title text-secondary font-bold"
          htmlFor="category"
        >
          Category
        </div>
        <div className="collapse-content">
          {categoryData?.categories?.slice(0, 10).map((category) => (
            <div key={category.id || category.categoryName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedCategories.includes(category.categoryName)}
                onChange={() =>
                  handleCategoriesCheckboxChange(
                    category.categoryName,
                    category.id
                  )
                }
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() =>
                  handleCategoriesCheckboxChange(
                    category.categoryName,
                    category.id
                  )
                }
              >
                {category.categoryName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />
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
      <div className="collapse collapse-arrow bg-white">
        <input type="checkbox" className="peer" id="category" defaultChecked />
        <div
          className="collapse-title text-secondary font-bold"
          htmlFor="category"
        >
          Category
        </div>
        <div className="collapse-content">
          {categoryData?.categories?.slice(0, 10).map((category) => (
            <div key={category.id || category.categoryName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedCategories.includes(category.categoryName)}
                onChange={() =>
                  handleCategoriesCheckboxChange(
                    category.categoryName,
                    category.id
                  )
                }
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() =>
                  handleCategoriesCheckboxChange(
                    category.categoryName,
                    category.id
                  )
                }
              >
                {category.categoryName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" id="price" />
        <div
          className="collapse-title text-secondary font-bold"
          htmlFor="price"
        >
          Price
        </div>
        <div className="collapse-content">
          {prices.map((price) => (
            <div key={price.label} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedCategories.includes(price.label)}
                onChange={() => handlePriceCheckboxChange(price)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handlePriceCheckboxChange(price)}
              >
                {price.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;