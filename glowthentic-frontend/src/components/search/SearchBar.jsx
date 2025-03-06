import { useEffect, useRef, useState } from "react";
import SuggestionProduct from "./SuggestionProduct";
import cn from "../../utils/cn";
import { Icon } from "@iconify/react";
import { 
    useSearchProductsMutation, 
    // useSearchCategoriesMutation,
    // useSearchBrandsMutation 
} from "../../redux/features/api/product-api/productApi";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";

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
  const [query, setQuery] = useState("");
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const searchRef = useRef(null);

  const [searchProducts, { data: productData, isLoading: isProductLoading, error: productError }] = useSearchProductsMutation();
  // const [searchCategory, { data: categoryData, isLoading: iscategoryLoading, error: categoryError }] = useSearchCategoryMutation();
    // const { data, isLoading, error, } = useGetCategoryQuery();
  // const [searchCategories, { data: categoryData, isLoading: isCategoryLoading, error: categoryError }] = useSearchCategoriesMutation();
  // const [searchBrands, { data: brandData, isLoading: isBrandLoading, error: brandError }] = useSearchBrandsMutation();
console.log(productData);
  useEffect(() => {
    if (query.length > 0) {
      searchProducts(query);
      // searchCategory(query);
      // searchBrands(query);
      setIsSuggestionsVisible(true);
    }
  }, [query, searchProducts ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSuggestionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProductSelect = (item) => {
    setQuery(item.title);
    setIsSuggestionsVisible(false);
  };

  return (
    <>
      <div ref={searchRef} className={`${cn("relative", className)}`}>
        <div className={`${cn("relative bg-white rounded-3xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden z-40", className)}`}>
          <a href="">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Icon icon="ic:outline-search" className="text-black" width="24" height="24" />
            </span>
          </a>
          <input
            type="text"
            placeholder="Search for products, brands..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsSuggestionsVisible(true);
            }}
            className="ps-4 border-none w-full focus:outline-none text-black h-9 placeholder:font-normal placeholder:text-gray-gradient"
          />
        </div>

        {isSuggestionsVisible && (
          <div className="relative z-30 -top-4 drop-shadow-xl">
            {(isProductLoading ) && (
              <div className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl">
                {[...Array(8)].map((_, index) => (
                  <ProductItemSkeleton key={index} />
                ))}
              </div>
            )}
            {productError && <p>Error loading product suggestions</p>}
        

            {(!isProductLoading && productData?.products?.length === 0) && (
              <ul className="absolute left-0 right-0 flex items-center justify-center text-center pt-5 text-black bg-white rounded-b-xl max-h-screen overflow-y-scroll">
                <li className="px-4 py-2 font-bold text-gray-500 flex items-center">
                  No results found.
                </li>
              </ul>
            )}

            {!isProductLoading && productData?.products?.length > 0 && (
              <div className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl max-h-[600px] overflow-y-scroll">
                <h3 className="font-bold text-lg mb-2 px-4 ">Products</h3>
                <ul>
                  {productData?.products.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleProductSelect(item)}
                      className="cursor-pointer hover:bg-gray-100 p-2"
                    >
                      <SuggestionProduct item={item} setQuery={setQuery} />
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-bold text-lg mt-4 mb-2 px-4 ">Categories</h3>
                <ul>
                  {productData?.categories.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleProductSelect(item)}
                      className="cursor-pointer hover:bg-gray-100 p-2"
                    >
                      <SuggestionProduct item={item} setQuery={setQuery} />
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-bold text-lg mt-4 mb-2 px-4 ">Brands</h3>
                <ul>
                  {productData?.products.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleProductSelect(item)}
                      className="cursor-pointer hover:bg-gray-100 p-2"
                    >
                      <SuggestionProduct item={item} setQuery={setQuery} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
