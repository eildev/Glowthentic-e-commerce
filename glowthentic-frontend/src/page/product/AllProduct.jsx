import { useEffect, useState } from "react";
import Product from "../../components/product_card/Product";
import Loading from "../../components/spinners/Loading";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";

const AllProduct = ({ selectedCategories }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data?.data) {
      if (selectedCategories.length === 0) {
        // ✅ If no category is selected, show all products
        setFilteredProducts(data.data);
      } else {
        // ✅ Filter products based on selected categories
        const filtered = data.data.filter((product) =>
          selectedCategories.includes(product.category_id)
        );

        // ✅ Show latest selected category's products first
        const sortedFiltered = selectedCategories
          .map((catId) => filtered.filter((p) => p.category_id === catId))
          .flat();

        setFilteredProducts(sortedFiltered);
      }
    }
  }, [data, selectedCategories]);

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className={cn(`grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5`)}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <Product key={product.id} product={product} />)
      ) : (
        <p className="col-span-3 text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default AllProduct;
