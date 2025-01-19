import React from "react";

const SuggestionProduct = ({ item, setQuery, setSuggestions }) => {
  const { title, thumbnail, price } = item;

  const handleQuery = () => {
    setQuery(title);
    setSuggestions([]);
  };
  return (
    <li
      className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer  flex items-center gap-4"
      onClick={handleQuery}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-10 h-10 object-cover rounded"
      />

      {/* Name and price on the right */}
      <div>
        <p className="font-medium text-m ">{title}</p>
        <p className=" text-m text-[#A27754]">{price}</p>
      </div>
    </li>
  );
};

export default SuggestionProduct;
