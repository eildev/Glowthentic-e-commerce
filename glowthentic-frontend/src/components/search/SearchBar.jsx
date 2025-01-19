import { useEffect, useState } from "react";
import SuggestionProduct from "./SuggestionProduct";
import cn from "../../utils/cn";
import { Icon } from "@iconify/react";
import {
  useGetProductsQuery,
  useSearchProductsQuery,
} from "../../redux/features/api/product-api/productApi";

const SearchBar = ({ className }) => {
  const [query, setQuery] = useState(""); // Search query
  // const [suggestions, setSuggestions] = useState([]); // Suggestions list
  // const { data, isLoading, error } = useGetProductsQuery();
  // const fetchSuggestions = async (searchText) => {
  //   const filteredData = data.products.filter((item) =>
  //     item.title.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setSuggestions(filteredData);
  // };
  // useEffect(() => {
  //   if (query) {
  //     fetchSuggestions(query);
  //   } else {
  //     setSuggestions([]); // Clear suggestions when query is empty
  //   }
  // }, [query]);

  const { data, isLoading, error } = useSearchProductsQuery(query, {
    skip: query.length === 0,
  });

  return (
    <>
      {/* //Full Search Start */}
      <div className={`${cn("relative", className)}`}>
        <div
          className={`${cn(
            "relative bg-white rounded-3xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden z-40",
            className
          )}`}
        >
          {/* //Search icon Start*/}
          <a href="">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 ">
              <Icon
                icon="ic:outline-search"
                className="text-black "
                width="24"
                height="24"
              />
            </span>
          </a>
          {/* //Search icon End*/}

          {/* //Search Input// */}
          <input
            type="text"
            placeholder="Search for products, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ps-4 border-none w-full focus:outline-none text-black h-9 placeholder:font-normal placeholder:text-gray-gradient"
          />
          {/* //Search Input End// */}
        </div>

        {/* //Search Show Text */}
        <div className="relative z-30 -top-4 drop-shadow-xl">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error loading suggestions</p>}
          {data?.products?.length > 0 && (
            <ul className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl max-h-screen overflow-y-scroll">
              {data.products.map((item, index) => (
                <SuggestionProduct
                  key={index}
                  item={item}
                  setQuery={setQuery}
                />
              ))}
            </ul>
          )}
        </div>
        {/* //Search Show Text End */}
      </div>
      {/* //Full Search End */}
    </>
  );
};

export default SearchBar;
