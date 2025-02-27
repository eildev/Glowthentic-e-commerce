import { useEffect, useRef, useState } from "react";
import SuggestionProduct from "./SuggestionProduct";
import cn from "../../utils/cn";
import { Icon } from "@iconify/react";
import { useSearchProductsQuery } from "../../redux/features/api/product-api/productApi";

// Skeleton loader for product items
const ProductItemSkeleton = () => (
  <div className="flex w-full flex-col gap-4  mt-2 mx-4">
    <div className="flex items-center gap-4">
      <div className="skeleton h-16 bg-[#0f12281a] w-16 shrink-0 "></div>
      <div className="flex flex-col w-full gap-4">
        <div className="skeleton bg-[#0f12281a] h-4 w-60"></div>
        <div className="skeleton bg-[#0f12281a] h-4 w-40"></div>
      </div>
    </div>
  </div>
);
const SearchBar = ({ className }) => {
  const [query, setQuery] = useState(""); // Search query
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false); // Toggle suggestions visibility
  const searchRef = useRef(null); // Ref for detecting outside clicks

  const { data, isLoading, error } = useSearchProductsQuery(query, {
    skip: query.length === 0,
  });

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSuggestionsVisible(false); // Close suggestions
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProductSelect = (item) => {
    setQuery(item.title); // Update query with the selected product
    setIsSuggestionsVisible(false); // Hide suggestions
  };

  return (
    <>
      {/* Full Search Start */}
      <div ref={searchRef} className={`${cn("relative", className)}`}>
        <div
          className={`${cn(
            "relative bg-white rounded-3xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden z-40",
            className
          )}`}
        >
          {/* Search icon Start */}
          <a href="">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Icon
                icon="ic:outline-search"
                className="text-black"
                width="24"
                height="24"
              />
            </span>
          </a>
          {/* Search icon End */}

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for products, brands..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsSuggestionsVisible(true); // Show suggestions when typing
            }}
            className="ps-4 border-none w-full focus:outline-none text-black h-9 placeholder:font-normal placeholder:text-gray-gradient"
          />
          {/* Search Input End */}
        </div>

        {/* Search Show Text */}
        {isSuggestionsVisible && (
          <div className="relative z-30 -top-4 drop-shadow-xl">
            {isLoading && (
              <div className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl">
                {/* Show multiple skeletons for product items */}
                {[...Array(8)].map((_, index) => (
                  <ProductItemSkeleton key={index} />
                ))}
              </div>
            )}
            {error && <p>Error loading suggestions</p>}
            {!isLoading && !error && data?.products?.length === 0 && (
             <ul className="absolute left-0 right-0 flex items-center justify-center text-center pt-5 text-black bg-white rounded-b-xl max-h-screen overflow-y-scroll">
             <li className="px-4 py-2 font-bold text-gray-500 flex items-center">
               No results found.
             </li>
           </ul>
           
            )}

            {data?.products?.length > 0 && (
              <ul className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl max-h-[600px] overflow-y-scroll ">
                {data.products.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleProductSelect(item)} // Handle product selection
                    className="cursor-pointer hover:bg-gray-100 p-2"
                  >
                    <SuggestionProduct item={item} setQuery={setQuery} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {/* Search Show Text End */}
      </div>
      {/* Full Search End */}
    </>
  );
};

export default SearchBar;
