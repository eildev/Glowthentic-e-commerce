import SerachItemSkeleton from "./SerachItemSkeleton";
import SuggestionItem from "./SuggestionItem";

const RenderSuggestion = ({ isLoading, error, productData }) => {
    if (isLoading) {
        return [...Array(5)].map((_, index) => <SerachItemSkeleton key={index} />);
    }
    if (error) return <p className="px-4 py-2 text-red-500">Error loading suggestions</p>;
    if (!productData?.products?.length) {
        return <p className="px-4 py-2 text-gray-500">No results found</p>;
    }

    return (
        <>
            {productData.products?.length > 0 && (
                <div>
                    <h3 className="font-bold text-lg px-4 py-2 text-black">Products</h3>
                    <div>
                        {productData.products.slice(0, 10).map((item, index) => (
                            <SuggestionItem key={index} item={item}/>
                        ))}
                    </div>
                </div>
            )}
            {productData.categories?.length > 0 && (
                <div>
                    <h3 className="font-bold text-lg px-4 py-2 text-black">Categories</h3>
                    <ul>
                        {productData.categories.slice(0, 10).map((item, index) => (
                            <li key={index} className="text-black">{item.categoryName ?? "NA"}</li>
                        ))}
                    </ul>
                </div>
            )}
            {productData.brands?.length > 0 && (
                <div>
                    <h3 className="font-bold text-lg px-4 py-2 text-black">Brands</h3>
                    <ul>
                        {productData.brands.slice(0, 10).map((item, index) => (
                            <li key={index} className="text-black">{item.BrandName ?? "NA"}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default RenderSuggestion;