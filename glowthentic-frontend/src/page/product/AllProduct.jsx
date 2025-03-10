import { useEffect, useState } from "react";
import Product from "../../components/product_card/Product";
import Loading from "../../components/spinners/Loading";
import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import cn from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const AllProduct = ({ selectedCategories = [], selectedTags = [], selectedPrices = [] }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [trigger, setTrigger] = useState(0); // State to trigger re-render for animation

  useEffect(() => {
    if (data?.data) {
      if (selectedCategories.length === 0 && selectedTags.length === 0 && selectedPrices.length === 0) {
        // No filters applied, show all products
        setFilteredProducts(data.data);
      } else {
        // Filter products based on selected categories, tags, and price ranges
        const filtered = data.data.filter((product) => {
          const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(product.category_id);

          const matchesTags =
            selectedTags.length === 0 ||
            (product.product_tags &&
              product.product_tags.some((tag) => selectedTags.includes(tag.tag_id)));

          const matchesPrice =
            selectedPrices.length === 0 ||
            selectedPrices.some(
              (priceRange) =>
                product.variants[0].regular_price >= priceRange.min &&
                product.variants[0].regular_price <= priceRange.max
            );

          // Combine conditions with AND logic
          return matchesCategory && matchesTags && matchesPrice;
        });

        setFilteredProducts(filtered);
      }

      // Increment trigger state to re-render the product grid and trigger animations
      setTrigger((prev) => prev + 1);
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
        staggerChildren: 0.1, // Stagger animations for child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, translateY: 20 }, // Start position
    show: { opacity: 1, translateY: 0, transition: { duration: 0.3 } }, // End position
  };

  return (
    <motion.div
      className={cn(`grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 my-3 px-5`)}
      key={trigger} // Use trigger as the key to force re-render for animations
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id} // Ensure each product has a unique key
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{
                scale: 1.03, // Subtle scale effect on hover
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Box shadow for hover
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
