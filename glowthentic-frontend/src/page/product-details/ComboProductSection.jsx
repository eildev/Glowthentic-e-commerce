import { useGetProductsQuery } from "../../redux/features/api/product-api/productApi";
import formatPrice from "../../utils/formatPrice";
import { imagePath } from "../../utils/imagePath";
import { Link } from "react-router-dom";
import ComboProductSectionSkeleton from "./ComboProductSectionSkeleton";

const ComboProductSection = ({ data, isLoading }) => {
  const combo = data?.data?.comboproduct?.[0]?.combo;

  if (isLoading && data?.data?.comboproduct?.length > 0) {
    return <ComboProductSectionSkeleton />;
  }
  return (
    <section
      className={`py-10 bg-body ${
        data?.data?.comboproduct?.length > 0 ? "block" : "hidden"
      }`}
    >
      <h3 className="text-xl lg:text-2xl font-encode font-bold text-primary mb-8 text-center animate-fadeIn">
        Exclusive Combo Deals
      </h3>
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={imagePath(combo?.image)}
            alt="Combo Package"
            className="h-[250px] w-full md:w-[300px] object-cover rounded-md border border-gray-light"
          />
        </div>
        {/* Content Section */}
        <div className="flex-1">
          <h4 className="text-lg lg:text-xl font-encode font-semibold text-dark mb-2">
            {combo?.name ?? "Combo Package"}
          </h4>
          <h2 className="text-xl lg:text-2xl font-encode font-bold text-secondary mb-4">
            ৳ {formatPrice(combo?.offerd_price) ?? "N/A"}
          </h2>
          <div className="flex gap-4">
            <Link
              to="#"
              className="inline-block bg-secondary text-white font-encode text-base font-medium py-2 px-4 rounded-md hover:bg-primary transition-colors duration-300"
            >
              View Details
            </Link>
            <button className="inline-block bg-primary text-white font-encode text-base font-medium py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboProductSection;
