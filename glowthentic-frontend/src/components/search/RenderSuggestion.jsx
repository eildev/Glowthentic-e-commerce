import { Icon } from "@iconify/react/dist/iconify.js";
import SerachItemSkeleton from "./SerachItemSkeleton";
import SuggestionItem from "./SuggestionItem";
import { useDispatch } from "react-redux";
import { setSuggestionsVisible } from "../../redux/features/slice/searchSlice";
import { Link } from "react-router-dom";

const RenderSuggestion = ({ isLoading, error, productData }) => {
  const dispatch = useDispatch();
  const handleHideSuggestions = () => {
    dispatch(setSuggestionsVisible(false));
  };

  console.log("error", error);
  if (isLoading) {
    return [...Array(5)].map((_, index) => <SerachItemSkeleton key={index} />);
  }
  if (error)
    return <p className="px-4 py-2 text-red-500">Error loading suggestions</p>;

  if (
    !productData?.products?.length &&
    !productData?.categories?.length &&
    !productData?.brands?.length
  ) {
    return <p className="px-4 py-2 text-gray-500">No results found</p>;
  }

  return (
    <>
      {productData.products?.length > 0 && (
        <div>
          <h3 className="font-bold text-lg px-4 py-2 text-black">Products</h3>
          <div className="my-1 h-[1px] bg-[#00000042] w-full"></div>
          <div>
            {productData.products.slice(0, 10).map((item, index) => (
              <SuggestionItem
                key={index}
                item={item}
                showDivider={
                  index !== productData.products.slice(0, 10).length - 1
                }
              />
            ))}
          </div>
        </div>
      )}
      {productData.categories?.length > 0 && (
        <div>
          <h3 className="font-bold text-lg px-4 py-2 text-black">Categories</h3>
          <ul>
            {productData.categories.slice(0, 10).map((item, index) => (
              <li
                key={index}
                className="text-black ps-4 py-[3px] flex items-center hover:bg-gray-100"
              >
                <Icon icon="iwwa:tag" width="16" height="16" className="mr-2" />
                <Link
                  to="/products"
                  state={{ categoryId: item.id }}
                  onClick={handleHideSuggestions}
                  className="w-full"
                >
                  {item.categoryName ?? "NA"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {productData.brands?.length > 0 && (
        <div>
          <h3 className="font-bold text-lg px-4 py-2 text-black">Brands</h3>
          <ul>
            {productData.brands.slice(0, 10).map((item, index) => (
              <li
                key={index}
                className="text-black ps-4 py-[3px] flex items-center hover:bg-gray-100"
              >
                <Icon icon="iwwa:tag" width="16" height="16" className="mr-2" />
                <Link
                  to="/products"
                  state={{ brandId: item.id }}
                  onClick={handleHideSuggestions}
                  className="w-full"
                >
                  {item.brandName ?? "NA"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RenderSuggestion;
