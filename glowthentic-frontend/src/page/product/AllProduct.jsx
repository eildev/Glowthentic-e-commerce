import { useEffect, useState } from "react";
import Product from "../../components/product_card/Product";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../redux/features/slice/filterSlice";
import ProductSkeleton from "../../components/product_card/ProductSkeleton";
import ProductSkeleton2 from "../../components/product_card/ProductSkeleton2";

const AllProduct = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetProductsQuery();
  const {
    filteredCategories,
    filteredTags,
    filteredPrices,
    filteredProducts,
    sortOption,
  } = useSelector((state) => state.filters);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    if (data?.data) {
      dispatch(setFilteredProducts(data.data));
    }
  }, [
    data,
    filteredCategories,
    filteredTags,
    filteredPrices,
    sortOption,
    dispatch,
  ]);

  useEffect(() => {
    setVisibleProducts((prev) => {
      return filteredProducts.map((product) => ({
        ...product,
        isExiting: false,
      }));
    });
  }, [filteredProducts]);

  if (isLoading) {
    return (
      <div
        className={cn(
          `grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5 w-full`
        )}
      >
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
      </div>
    );
  }
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div
      className={cn(`grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5`)}
    >
      {visibleProducts.length > 0 ? (
        visibleProducts.map((product) => (
          <div
            key={product.id}
            className={`transition-all duration-500 ease-in-out ${
              product.isExiting ? "animate-fadeOut" : "animate-fadeIn"
            }`}
          >
            <Product product={product} />
          </div>
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
};

export default AllProduct;
