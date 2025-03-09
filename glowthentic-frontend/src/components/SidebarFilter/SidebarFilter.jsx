import { useEffect, useState } from "react";
import Checkbox from "../typography/Checkbox";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";
import { useGetTagsQuery } from "../../redux/features/api/tagViewApi/tagViewApi";

const DropdownFilter = ({ selectedData, setSelectedData }) => {
  const { data: categoryData, isLoading, error, refetch } = useGetCategoryQuery();
  const { data: tagsdata, tagsIsLoading, tagsError } = useGetTagsQuery();
  
  useEffect(() => {
    refetch();
  }, []);
  
  console.log("categories", categoryData);
  console.log("tags", tagsdata);

  const skinCondition = [
    { name: "Brightening" },
    { name: "Hydration" },
    { name: "Acne" },
    { name: "Anti-ageing" },
    { name: "Redness" },
    { name: "Sensitive Skin" },
    { name: "Sun Protection" },
  ];
  
  const featureds = [
    { name: "New" },
    { name: "Best Sellers" },
    { name: "Travel Size" },
    { name: "Professional Treatments" },
    { name: "Daily Defense" },
  ];
  
  const prices = [
    { price: "$50.00 - $150.00" },
    { price: "$150.00 - $250.00" },
    { price: "$250.00 - $350.00" },
    { price: "$350.00 - $450.00" },
    { price: "$450.00 - $550.00" },
  ];

  // Simplified handler function for both checkbox and span clicks
  const handleSelectionChange = (item, categoryId) => {
    setSelectedData((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item]
    );
    // Also handle categoryId for product filtering
    if (categoryId) {
      setSelectedData((prevData) => {
        if (prevData.includes(categoryId)) {
          return prevData.filter((id) => id !== categoryId);
        } else {
          return [...prevData, categoryId];
        }
      });
    }
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
                onChange={() => handleSelectionChange(category.categoryName, category.id)} // onChange will handle both the checkbox and category ID
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleSelectionChange(category.categoryName, category.id)} // onClick will handle both the span and category ID
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
          {tagsdata?.categories.map((tag) => (
            <div key={tag.tagName} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(tag.tagName)}
                onChange={() => handleSelectionChange(tag.tagName)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleSelectionChange(tag.tagName)} // onClick handles the tag selection too
              >
                {tag.tagName}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" id="featured" />
        <div className="collapse-title text-secondary font-bold" htmlFor="featured">
          Featured
        </div>
        <div className="collapse-content">
          {featureds.map((featured) => (
            <div key={featured.name} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(featured.name)}
                onChange={() => handleSelectionChange(featured.name)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleSelectionChange(featured.name)}
              >
                {featured.name}
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
            <div key={price.price} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(price.price)}
                onChange={() => handleSelectionChange(price.price)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleSelectionChange(price.price)}
              >
                {price.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownFilter;
