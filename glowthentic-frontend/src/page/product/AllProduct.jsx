import { useEffect } from "react";
import Product from "../../components/product_card/Product";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../redux/features/slice/filterSlice";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence ইমপোর্ট

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

  // অ্যানিমেশন ভেরিয়েন্ট
  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }, // প্রোডাক্ট রিমুভ হওয়ার সময় অ্যানিমেশন
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div
      className={cn(`grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5`)}
    >
      <AnimatePresence>
        {" "}
        {/* AnimatePresence যোগ করা */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <motion.div
              key={product.id} // ইউনিক key নিশ্চিত করা
              variants={productVariants}
              initial="hidden"
              animate="visible"
              exit="exit" // exit অ্যানিমেশন যোগ করা
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <Product product={product} />
            </motion.div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No products found.
          </p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProduct;
