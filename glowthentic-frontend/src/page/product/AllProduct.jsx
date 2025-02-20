import Product from "../../components/product_card/Product";
import Loading from "../../components/spinners/Loading";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";

const AllProduct = () => {
  const { data, isLoading, error, className } = useGetProductsQuery();
  

  console.log(data);

  // useEffect(() => {
  //   trigger(); // Fetch data when the component mounts
  // }, [trigger]);
  // if (isLoading) return <p>Product is loading</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className={cn(`grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5`, className)}>
      {data?.products.map((product) => (
        <Product key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default AllProduct;
