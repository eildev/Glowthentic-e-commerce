import { Icon } from "@iconify/react/dist/iconify.js";
import SerachItemSkeleton from "./SerachItemSkeleton";
import SuggestionItem from "./SuggestionItem";

const RenderSuggestion = ({ isLoading, error, productData }) => {
  if (isLoading) {
    return [...Array(5)].map((_, index) => <SerachItemSkeleton key={index} />);
  }
  if (error)
    return <p className="px-4 py-2 text-red-500">Error loading suggestions</p>;
  if (!productData?.products?.length) {
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
              <SuggestionItem key={index} item={item} showDivider={index !== productData.products.slice(0, 10).length}/>
            ))}
          </div>
        </div>
      )}
      {productData.categories?.length > 0 && (
        <div>
          <h3 className="font-bold text-lg px-4 py-2 text-black">Categories</h3>
          <ul>
            {productData.categories.slice(0, 10).map((item, index) => (
              <li key={index} className="text-black ps-4  py-[3px]  flex items-center">
                <Icon icon="iwwa:tag" width="16" height="16" className="mr-2" />
            
                {item.categoryName ?? "NA"}
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
              <li key={index} className="text-black ps-4 py-[3px] flex items-center">
             
                  <Icon icon="iwwa:tag" width="16" height="16" className="mr-2" />
                {item.BrandName ?? "NA"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RenderSuggestion;
