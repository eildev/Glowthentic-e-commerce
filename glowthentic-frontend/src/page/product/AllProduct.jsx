import { useEffect } from "react";
import Product from "../../components/product_card/Product";
import Loading from "../../components/spinners/Loading";
import {
  useGetProductsQuery,
  useLazyGetProductsQuery,
} from "../../redux/features/api/product-api/productApi";

const AllProduct = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  console.log(data);

  // useEffect(() => {
  //   trigger(); // Fetch data when the component mounts
  // }, [trigger]);
  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5">
      {data?.products.map((product) => (
        <Product key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default AllProduct;
