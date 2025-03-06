import { useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setSuggestionsVisible } from "../../redux/features/slice/searchSlice";
import { Icon } from "@iconify/react";
import { useSearchProductsMutation } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import RenderSuggestion from "./RenderSuggestion";
import debounce from "../../utils/debounce";

const SearchBar = ({ className }) => {
  const dispatch = useDispatch(); // Initializing Redux dispatch function to send actions
  const { query, isSuggestionsVisible } = useSelector((state) => state.search); // Selecting search query and suggestions visibility from Redux store
  const searchRef = useRef(null); // Creating a ref to track the search bar DOM element for click-outside detection

  // Initializing RTK Query mutation hook to search products, destructuring data, loading state, and error
  const [searchProducts, { data: productData, isLoading, error }] = useSearchProductsMutation();

  // Memoizing the debounced search function to prevent unnecessary re-renders, delays execution by 300ms
  const debouncedSearch = useMemo(
    () => debounce((value) => searchProducts(value), 300),
    [searchProducts] // Dependency: Re-creates debounce if searchProducts changes
  );

  // Effect to handle search query updates and trigger debounced search
  useEffect(() => {
    if (query.length > 0) { // Check if the search query is not empty
      debouncedSearch(query); // Trigger debounced search with the current query
      dispatch(setSuggestionsVisible(true)); // Show suggestions when query exists
    } else {
      dispatch(setSuggestionsVisible(false)); // Hide suggestions when query is empty
    }
    // Cleanup: Cancel debounce on unmount or query change to prevent stale calls
    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch, dispatch]); // Dependencies: Runs when query, debouncedSearch, or dispatch changes

  // Effect to handle clicking outside the search bar to hide suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the search bar ref
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        dispatch(setSuggestionsVisible(false)); // Hide suggestions on outside click
      }
    };
    document.addEventListener("mousedown", handleClickOutside); // Add event listener for mouse down
    // Cleanup: Remove event listener on unmount to prevent memory leaks
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]); // Dependency: Runs when dispatch changes


  // Memoizing the rendered suggestions to optimize performance by preventing unnecessary re-renders
  const renderedSuggestions = useMemo(() => {
    return (
      <RenderSuggestion
        isLoading={isLoading} // Pass loading state to RenderSuggestion
        error={error} // Pass error state to RenderSuggestion
        productData={productData} // Pass fetched product data to RenderSuggestion
        // handleSelect={handleSelect} // Pass selection handler to RenderSuggestion
      />
    );
  }, [isLoading, error, productData]); // Dependencies: Re-renders if any of these change

  // Logging product data for debugging purposes
  console.log(productData);

  // JSX for rendering the search bar UI
  return (
    <div ref={searchRef} className={cn("relative", className)}> {/* Assign ref and apply dynamic class names */}
      {/* Search input container with styling */}
      <div className={cn("relative bg-white rounded-3xl shadow-md overflow-hidden z-40")}>
        {/* Search icon positioned absolutely on the right */}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Icon icon="ic:outline-search" className="text-black" width="24" /> {/* Search icon from Iconify */}
        </span>
        {/* Search input field */}
        <input
          type="text"
          placeholder="Search for products, brands..." // Placeholder text
          value={query} // Controlled input tied to Redux query state
          onChange={(e) => dispatch(setQuery(e.target.value))} // Update query in Redux on input change
          className="ps-4 border-none w-full focus:outline-none text-black h-9 placeholder:text-gray-500" // Styling for input
        />
      </div>
      {/* Suggestions dropdown, shown only when isSuggestionsVisible is true */}
      {isSuggestionsVisible && (
        <div className="absolute left-0 right-0 pt-5 bg-white rounded-b-xl max-h-[500px] overflow-y-auto shadow-xl z-30">
          {renderedSuggestions} {/* Render memoized suggestions */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
















// import { useEffect, useRef, useState } from "react";
// import SuggestionProduct from "./SuggestionProduct";
// import cn from "../../utils/cn";
// import { Icon } from "@iconify/react";
// import { useSearchProductsMutation } from "../../redux/features/api/product-api/productApi";
// import SerachItemSkeleton from "./SerachItemSkeleton";



// const SearchBar = ({ className }) => {
//   const [query, setQuery] = useState("");
//   const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
//   const searchRef = useRef(null);

//   const [searchProducts, { data: productData, isLoading: isProductLoading, error: productError }] = useSearchProductsMutation();
//   console.log(productData);
//   useEffect(() => {
//     if (query.length > 0) {
//       searchProducts(query);
//       setIsSuggestionsVisible(true);
//     }
//   }, [query, searchProducts]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setIsSuggestionsVisible(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleProductSelect = (item) => {
//     setQuery(item.title);
//     setIsSuggestionsVisible(false);
//   };

//   return (
//     <>
//       <div ref={searchRef} className={`${cn("relative", className)}`}>
//         <div className={`${cn("relative bg-white rounded-3xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden z-40", className)}`}>
//           <a href="">
//             <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//               <Icon icon="ic:outline-search" className="text-black" width="24" height="24" />
//             </span>
//           </a>
//           <input
//             type="text"
//             placeholder="Search for products, brands..."
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               setIsSuggestionsVisible(true);
//             }}
//             className="ps-4 border-none w-full focus:outline-none text-black h-9 placeholder:font-normal placeholder:text-gray-gradient"
//           />
//         </div>

//         {isSuggestionsVisible && (
//           <div className="relative z-30 -top-4 drop-shadow-xl">
//             {(isProductLoading) && (
//               <div className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl">
//                 {[...Array(8)].map((_, index) => (
//                   <SerachItemSkeleton key={index} />
//                 ))}
//               </div>
//             )}
//             {productError && <p>Error loading product suggestions</p>}


//             {(!isProductLoading && productData?.products?.length === 0) && (
//               <ul className="absolute left-0 right-0 flex items-center justify-center text-center pt-5 text-black bg-white rounded-b-xl max-h-screen overflow-y-scroll">
//                 <li className="px-4 py-2 font-bold text-gray-500 flex items-center">
//                   No results found.
//                 </li>
//               </ul>
//             )}

//             {!isProductLoading && productData?.products?.length > 0 && (
//               <div className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl max-h-[600px] overflow-y-scroll">
//                 <h3 className="font-bold text-lg mb-2 px-4 ">Products</h3>
//                 <ul>
//                   {productData?.products.map((item, index) => (
//                     <li
//                       key={index}
//                       onClick={() => handleProductSelect(item)}
//                       className="cursor-pointer hover:bg-gray-100 p-2"
//                     >
//                       <SuggestionProduct item={item} setQuery={setQuery} />
//                     </li>
//                   ))}
//                 </ul>

//                 <h3 className="font-bold text-lg mt-4 mb-2 px-4 ">Categories</h3>
//                 <ul>
//                   {productData?.categories.map((item, index) => (
//                     <li
//                       key={index}
//                       onClick={() => handleProductSelect(item)}
//                       className="cursor-pointer hover:bg-gray-100 p-2"
//                     >
//                       <SuggestionProduct item={item} setQuery={setQuery} />
//                     </li>
//                   ))}
//                 </ul>

//                 <h3 className="font-bold text-lg mt-4 mb-2 px-4 ">Brands</h3>
//                 <ul>
//                   {productData?.products.map((item, index) => (
//                     <li
//                       key={index}
//                       onClick={() => handleProductSelect(item)}
//                       className="cursor-pointer hover:bg-gray-100 p-2"
//                     >
//                       <SuggestionProduct item={item} setQuery={setQuery} />
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SearchBar;
