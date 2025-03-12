import { useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setSuggestionsVisible,
} from "../../redux/features/slice/searchSlice";
import { Icon } from "@iconify/react";
import {
  useGetProductsQuery,
  useSearchProductsMutation,
} from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import RenderSuggestion from "./RenderSuggestion";
import debounce from "../../utils/debounce";

const SearchBar = ({ className }) => {
  const dispatch = useDispatch(); // Initializing Redux dispatch function to send actions
  const { query, isSuggestionsVisible } = useSelector((state) => state.search); // Selecting search query and suggestions visibility from Redux store
  const searchRef = useRef(null); // Creating a ref to track the search bar DOM element for click-outside detection

  // // Initializing RTK Query mutation hook to search products, destructuring data, loading state, and error
  const [searchProducts, { data: productData, isLoading, error }] =
    useSearchProductsMutation();
  //  const { data }= useGetProductsQuery()
  //  console.log('Api Test Data',data);
  //  console.log('Product Data',searchProducts);

  const debouncedSearch = useMemo(
    () => debounce((value) => searchProducts(value), 300),
    [searchProducts]
  );

  useEffect(() => {
    if (query.length > 0) {
      debouncedSearch(query); // Trigger the search API with the query
      dispatch(setSuggestionsVisible(true)); // Show suggestions when there’s a query
    } else {
      dispatch(setSuggestionsVisible(false)); // Hide suggestions when query is empty
    }

    return () => debouncedSearch.cancel(); // Clean up debounced function on unmount or query change
  }, [query, debouncedSearch, dispatch]); // Dependency on query to trigger search

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
  // console.log(productData);

  // JSX for rendering the search bar UI
  return (
    <div ref={searchRef} className={cn("relative", className)}>
      {" "}
      {/* Assign ref and apply dynamic class names */}
      {/* Search input container with styling */}
      <div
        className={cn(
          "relative bg-white rounded-3xl shadow-md overflow-hidden z-40"
        )}
      >
        {/* Search icon positioned absolutely on the right */}
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Icon icon="ic:outline-search" className="text-black" width="24" />{" "}
          {/* Search icon from Iconify */}
        </span>
        {/* Search input field */}

        <input
          type="text"
          placeholder="Search for products, brands..."
          value={query} // The query comes from the Redux store
          onChange={(e) => dispatch(setQuery(e.target.value))} // Dispatch action to set the query
          className="ps-4 border-none w-full focus:outline-none text-black h-9 placeholder:text-gray-500"
        />
      </div>
      {isSuggestionsVisible && (
        <div className="absolute left-0 right-0 pt-5 -mt-[14px] bg-white rounded-b-xl max-h-[500px] overflow-y-auto shadow-xl z-30 ">
          {renderedSuggestions}
         
        </div>
       
     )}  
      
    </div>
  );
};

export default SearchBar;
