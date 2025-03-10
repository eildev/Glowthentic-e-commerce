import { useEffect, useState } from "react";
import Product from "../../components/product_card/Product";
import Loading from "../../components/spinners/Loading";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const AllProduct = ({ selectedCategories = [], selectedTags = [], selectedPrices = [] }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (data?.data) {
      if (selectedCategories.length === 0 && selectedTags.length === 0 && selectedPrices.length === 0) {
        setFilteredProducts(data.data);
      } else {
        const filtered = data.data.filter((product) => {
          const matchesCategory = selectedCategories.includes(product.category_id);
          const matchesTags =
            product.product_tags &&
            product.product_tags.some((tag) => selectedTags.includes(tag.tag_id));
          const matchesPrice = selectedPrices.some(
            (priceRange) =>
              product.variants[0].regular_price >= priceRange.min &&
              product.variants[0].regular_price <= priceRange.max
          );
          return matchesCategory || matchesTags || matchesPrice;
        });

        let sortedFiltered = filtered;
        if (selectedCategories.length > 0) {
          sortedFiltered = selectedCategories
            .map((catId) => filtered.filter((p) => p.category_id === catId))
            .flat();
        }

        setFilteredProducts(sortedFiltered.length > 0 ? sortedFiltered : filtered);
      }
    }
  }, [data, selectedCategories, selectedTags, selectedPrices]);

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, translateY: 20 },
    show: { opacity: 1, translateY: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className={cn(`grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5`)}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Product product={product} />
            </motion.div>
          ))
        ) : (
          <motion.p
            className="col-span-3 text-center text-gray-500 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            No products found.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AllProduct;
