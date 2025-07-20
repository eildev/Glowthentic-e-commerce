import { Link } from "react-router-dom";
import HeadTitle from "../typography/HeadTitle";
import Paragraph from "../typography/Paragraph";
import capitalizeText from "../../utils/capitalizeText";
import formatPrice from "../../utils/formatPrice";

const ProductCardDetails = ({
  isDark,
  product,
  productName,
  isComboProduct,
  productdetails,
  isPromotionValid,
  discountPercentage,
  isMobile,
  finalPrice,
  defaultVariant,
}) => {
  return (
    <div
      className={`card-body h-[200px] px-2 md:px-4 rounded-b-2xl flex flex-col justify-center transition-colors duration-300 ${
        isDark
          ? "bg-primary text-white text-center"
          : "bg-white text-primary text-left"
      }`}
    >
      <Link to={`/product/${product.slug || `combo/${product.id}`}`}>
        <HeadTitle
          className={`text-sm md:text-base lg:text-lg line-clamp-2 transition-colors duration-200 hover:text-secondary ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {capitalizeText(productName) || "N/A"}
        </HeadTitle>
      </Link>
      {isMobile ? (
        <Paragraph className="text-xs min-h-[40px] transition-opacity duration-200 hover:opacity-80">
          {(!isComboProduct &&
            productdetails?.short_description?.slice(0, 40)) ||
            (isComboProduct &&
              product?.comboproduct?.[0]?.product?.productdetails?.short_description?.slice(
                0,
                40
              )) ||
            ""}
        </Paragraph>
      ) : (
        <Paragraph className="text-sm lg:mt-2 line-clamp-2 min-h-[44px] transition-opacity duration-200 hover:opacity-80">
          {(!isComboProduct &&
            productdetails?.short_description?.slice(0, 60)) ||
            (isComboProduct &&
              product?.comboproduct?.[0]?.product?.productdetails?.short_description?.slice(
                0,
                60
              )) ||
            ""}
        </Paragraph>
      )}

      <div
        className={`flex gap-1 md:gap-2  items-center ${
          isDark ? "text-center justify-center" : "text-start justify-start"
        }`}
      >
        <span
          className={`text-sm sm:text-base md:text-lg transition-transform duration-200 hover:scale-105 ${
            isDark
              ? "text-white border-gray-700"
              : "text-secondary border-gray-300"
          }`}
        >
          ৳ {formatPrice(finalPrice)}
        </span>
        {!isComboProduct && isPromotionValid && discountPercentage > 0 && (
          <span
            className={`text-xs sm:text-sm font-thin transition-opacity duration-200 hover:opacity-60 ${
              isDark ? "text-light border-light" : "text-gray border-gray"
            }`}
          >
            <del
              aria-label={`Original price: ${defaultVariant?.regular_price} Bangladeshi Taka`}
            >
              ৳ {formatPrice(defaultVariant?.regular_price)}
            </del>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCardDetails;
