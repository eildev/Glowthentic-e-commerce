import { useState } from "react";
import Checkbox from "../typography/Checkbox";

const DropdownFilter = () => {
  const categories = [
    { name: "Cleansers" },
    { name: "Exfoliators" },
    { name: "Toners" },
    { name: "Retinols" },
    { name: "Peels and Masques" },
    { name: "Moisturiser" },
    { name: "Night Cream" },
    { name: "Facial Oil" },
    { name: "Sunscreen" },
    { name: "Eye Care" },
  ];
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

  const [selectedData, setselectedData] = useState([]);

  const handleCheckboxChange = (category) => {
    setselectedData((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };
  return (
    <div>
      <div className="collapse collapse-arrow  bg-white">
        <input type="checkbox" className="peer" id="category" defaultChecked />
        <div
          className="collapse-title text-secondary  font-bold "
          htmlFor="category"
        >
          Category
        </div>
        <div className="collapse-content">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(category.name)}
                onChange={() => handleCheckboxChange(category.name)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleCheckboxChange(category.name)}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />
      <div className="collapse collapse-arrow ">
        <input type="checkbox" className="peer" id="skin-condition" />
        <div
          className="collapse-title text-secondary  font-bold"
          htmlFor="skin-condition"
        >
          Skin Condition
        </div>
        <div className="collapse-content">
          {skinCondition.map((skin) => (
            <div key={skin.name} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(skin.name)}
                onChange={() => handleCheckboxChange(skin.name)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleCheckboxChange(skin.name)}
              >
                {skin.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />
      <div className="collapse collapse-arrow ">
        <input type="checkbox" className="peer" id="featured" />
        <div
          className="collapse-title  text-secondary font-bold"
          htmlFor="featured"
        >
          Featured
        </div>
        <div className="collapse-content">
          {featureds.map((featured) => (
            <div key={featured.name} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(featured.name)}
                onChange={() => handleCheckboxChange(featured.name)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleCheckboxChange(featured.name)}
              >
                {featured.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-hr-thin" />
      <div className="collapse collapse-arrow ">
        <input type="checkbox" className="peer" id="price" />
        <div
          className="collapse-title  text-secondary font-bold"
          htmlFor="price"
        >
          Price
        </div>
        <div className="collapse-content">
          {prices.map((price) => (
            <div key={price.price} className="flex items-center py-2">
              <Checkbox
                className="checkbox-sm"
                checked={selectedData.includes(price.price)}
                onChange={() => handleCheckboxChange(price.price)}
              />
              <span
                className="ml-3 font-normal mb-1 cursor-pointer"
                onClick={() => handleCheckboxChange(price.price)}
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
