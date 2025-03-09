import { useEffect, useState } from "react";
import Checkbox from "../typography/Checkbox";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";
import { useGetTagsQuery } from "../../redux/features/api/tagViewApi/tagViewApi";

const DropdownFilter = ({
  selectedData,
  setSelectedData,
  filterdCategories,
  setFilterdCategories,
  filterdTags,
  setFilterdTags,
  filterdPrices,
  setFilterdPrices, // Passed down from the parent
}) => {
  const { data: categoryData, isLoading, error, refetch } = useGetCategoryQuery();
  const { data: tagsdata, tagsIsLoading, tagsError } = useGetTagsQuery();

  useEffect(() => {
    refetch();
  }, []);

  console.log("categories", categoryData);
  console.log("tags", tagsdata);

  const prices = [
    { label: "$50.00 - $150.00", min: 50, max: 150 },
    { label: "$150.00 - $250.00", min: 150, max: 250 },
    { label: "$250.00 - $350.00", min: 250, max: 350 },
    { label: "$350.00 - $450.00", min: 350, max: 450 },
    { label: "$450.00 - $550.00", min: 450, max: 550 },
  ];

  const handleCategoriesCheckboxChange = (item, categoryId) => {
    setSelectedData((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );

    setFilterdCategories((prevData) => {
      if (prevData.includes(categoryId)) {
        return prevData.filter((id) => id !== categoryId);
      } else {
        return [...prevData, categoryId];
      }
    });
  };

  const handleTagsCheckboxChange = (item, tagId) => {
    setSelectedData((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );

    setFilterdTags((prevData) => {
      if (prevData.includes(tagId)) {
        return prevData.filter((id) => id !== tagId);
      } else {
        return [...prevData, tagId];
      }
    });
  };

  const handlePriceCheckboxChange = (priceRange) => {
    setSelectedData((prevSelected) =>
      prevSelected.includes(priceRange.label)
        ? prevSelected.filter((item) => item !== priceRange.label)
        : [...prevSelected, priceRange.label]
    );

    setFilterdPrices((prevData) => {
      if (prevData.find((p) => p.min === priceRange.min && p.max === priceRange.max)) {
        return prevData.filter((p) => !(p.min === priceRange.min && p.max === priceRange.max));
      } else {
        return [...prevData, priceRange];
      }
    });
  };

  return (
    <div>
      <div className="collapse collapse-arrow bg-white">
        <input type="checkbox" className="peer" id="category" defaultChecked />
        <div className="collapse-title text-secondary font-bold" htmlFor="category">
          Category
        </div>
        <div className="collapse-content">
          {categoryData?.categories?.slice(0, 10).map((category) => (
            <div key={category.categoryName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(category.categoryName)}
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
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" id="skin-condition" />
        <div className="collapse-title text-secondary font-bold" htmlFor="skin-condition">
          Skin Condition
        </div>
        <div className="collapse-content">
          {tagsdata?.categories?.map((tag) => (
            <div key={tag.tagName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(tag.tagName)}
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
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" id="price" />
        <div className="collapse-title text-secondary font-bold" htmlFor="price">
          Price
        </div>
        <div className="collapse-content">
          {prices.map((price) => (
            <div key={price.label} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(price.label)}
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
