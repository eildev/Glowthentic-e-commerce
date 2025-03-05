import React from 'react';

const SuggestionCategory = ({ item, setQuery, setSuggestions }) => {
    console.log(item);

    // const handleQuery = () => {
    //   setQuery(product_name);
    //   setSuggestions([]);
    // };
    return (
        <div>
            <li
      className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer  flex items-center gap-4"
    //   onClick={handleQuery}
    >
   

    
      <div className="">
        <p className="font-medium text-sm ">sadf</p>
    
      </div>
    </li>
        </div>
    );
};

export default SuggestionCategory;