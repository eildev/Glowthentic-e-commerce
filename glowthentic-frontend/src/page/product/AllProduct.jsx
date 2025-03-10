import { useEffect, useState } from "react";
import Product from "../../components/product_card/Product";
import Loading from "../../components/spinners/Loading";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../redux/features/slice/filterSlice";

// const AllProduct = ({ selectedCategories = [], selectedTags = [], selectedPrices = [] }) => {
const AllProduct = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetProductsQuery();
  const { filteredCategories, filteredTags, filteredPrices, filteredProducts } =
    useSelector((state) => state.filters);

  useEffect(() => {
    if (data?.data) {
      dispatch(setFilteredProducts(data.data));
    }
  }, [data, filteredCategories, filteredTags, filteredPrices, dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  // const { data, isLoading, error } = useGetProductsQuery();
  // const [filteredProducts, setFilteredProducts] = useState([]);

  //   useEffect(() => {
  //     if (data?.data) {
  //       if (selectedCategories.length === 0 && selectedTags.length === 0 && selectedPrices.length === 0) {
  //         // No filters applied, show all products
  //         setFilteredProducts(data.data);
  //       } else {
  //         // Filter products based on selected categories, tags, and price ranges
  //         const filtered = data.data.filter((product) => {
  //           const matchesCategory = selectedCategories.includes(product.category_id);
  //           const matchesTags =
  //             product.product_tags &&
  //             product.product_tags.some((tag) => selectedTags.includes(tag.tag_id));
  //           const matchesPrice = selectedPrices.some(
  //             (priceRange) =>
  //               product.variants[0].regular_price >= priceRange.min && product.variants[0].regular_price <= priceRange.max
  //           );

  //           // Check if the product matches any of the selected filters
  //           return matchesCategory || matchesTags || matchesPrice;
  //         });

  //         // Ensure latest selected categories appear first
  //         let sortedFiltered = filtered;
  //         if (selectedCategories.length > 0) {
  //           sortedFiltered = selectedCategories
  //             .map((catId) => filtered.filter((p) => p.category_id === catId))
  //             .flat();
  //         }

  //         setFilteredProducts(sortedFiltered.length > 0 ? sortedFiltered : filtered);
  //       }
  //     }
  //   }, [data, selectedCategories, selectedTags, selectedPrices]);
  // console.log(filteredProducts);
  //   if (isLoading) return <Loading />;
  //   if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div
      className={cn(`grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5`)}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
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
