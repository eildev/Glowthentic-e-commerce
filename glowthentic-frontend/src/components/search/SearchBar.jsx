import { useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setSuggestionsVisible,
} from "../../redux/features/slice/searchSlice";
import { Icon } from "@iconify/react";
import { useSearchProductsMutation } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import RenderSuggestion from "./RenderSuggestion";
import debounce from "../../utils/debounce";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query, isSuggestionsVisible } = useSelector((state) => state.search);
  const searchRef = useRef(null);

  const [searchProducts, { data: productData, isLoading, error }] =
    useSearchProductsMutation();

  const debouncedSearch = useMemo(
    () => debounce((value) => searchProducts(value), 300),
    [searchProducts]
  );

  useEffect(() => {
    if (query.length > 0) {
      debouncedSearch(query);
      dispatch(setSuggestionsVisible(true));
    } else {
      dispatch(setSuggestionsVisible(false));
    }
    return () => debouncedSearch.cancel();
  }, [query, debouncedSearch, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is part of the search results/suggestions
      const suggestionsContainer = document.querySelector('.suggestions-container');
      const isClickInsideSuggestions = suggestionsContainer && suggestionsContainer.contains(event.target);
      
      // Only close if the click is outside both the search input and suggestions
      if (searchRef.current && !searchRef.current.contains(event.target) && !isClickInsideSuggestions) {
        dispatch(setSuggestionsVisible(false));
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query.trim()) {
      dispatch(setSuggestionsVisible(false));
      navigate("/products", { state: { searchQuery: query } });
    }
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      dispatch(setSuggestionsVisible(false));
      navigate("/products", { state: { searchQuery: query } });
    }
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevent input click from triggering handleClickOutside
  };

  const renderedSuggestions = useMemo(() => {
    return (
      <RenderSuggestion
        isLoading={isLoading}
        error={error}
        productData={productData}
      />
    );
  }, [isLoading, error, productData]);

  return (
    <div ref={searchRef} className={cn("relative", className)}>
      <div
        className={cn(
          "relative bg-white rounded-3xl shadow-md overflow-hidden z-40"
        )}
      >
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleSearchClick}
        >
          <Icon icon="ic:outline-search" className="text-black" width="24" />
        </span>
        <input
          type="text"
          placeholder="Search for products, brands..."
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          onKeyPress={handleKeyPress}
          onClick={handleInputClick} // Stop propagation on input click
          className="ps-4 border-none w-full focus:outline-none text-black h-9 placeholder:text-gray-500"
        />
      </div>
      {isSuggestionsVisible && (
  <div className="absolute left-0 right-0 pt-5 -mt-[14px] bg-white rounded-b-xl max-h-[500px] overflow-y-auto shadow-xl z-30 suggestions-container">
    {renderedSuggestions}
  </div>
)}
    </div>
  );
};

export default SearchBar;
