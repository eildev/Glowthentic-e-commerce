import { memo, useEffect } from "react";
import defaultImage from "../../assets/img/Product/20.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSuggestionsVisible } from "../../redux/features/slice/searchSlice";
import { imagePath } from "../../utils/imagePath";
import toast from "react-hot-toast";

const SuggestionItem = memo(function SuggestionItem({ item, showDivider }) {
  const { product_name, thumbnail, variants, slug, variant_image, promotionproduct, variants: [{ product_variant_promotion }] } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Safe image access
  const product_image = thumbnail || imagePath(variant_image && variant_image[0]?.image);

  // Log the component mounting and the item data
  useEffect(() => {}, [slug]);

  const handleItemClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (slug) {
      navigate(`/product/${slug}`);
    } else {
      toast.error("Something went wrong. Please be patient");
    }

    dispatch(setSuggestionsVisible(false));
  };

  // Get regular price
  const regularPrice = variants?.[0]?.regular_price || "N/A";

  // Determine which promotion to use: product-level or variant-level
  const promotion = promotionproduct?.[0]?.coupon || product_variant_promotion?.coupon;

  // Calculate discounted price and badge text
  let discountPrice = null;
  let badgeText = null;

  if (promotion && promotion.status === "Active" && new Date(promotion.end_date) >= new Date()) {
    const discountValue = parseFloat(promotion.discount_value);
    if (promotion.discount_type === "percentage") {
      discountPrice = regularPrice - (regularPrice * discountValue) / 100;
      badgeText = `${discountValue}% Off`;
    } else if (promotion.discount_type === "fixed") {
      discountPrice = regularPrice - discountValue;
      badgeText = `৳${discountValue} Off`;
    }
  }

  return (
    <div>
      <div
        className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer flex items-center gap-4 relative"
        onClick={handleItemClick}
      >
        {/* Discount Badge */}
        {badgeText && (
          <div className="absolute top-1 right-1 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {badgeText}
          </div>
        )}
        <img
          src={product_image || defaultImage}
          alt={product_name || "Product"}
          className="w-10 h-10 object-cover rounded"
          onClick={(e) => handleItemClick(e)}
        />
        <div onClick={(e) => handleItemClick(e)}>
          <p className="font-medium text-sm text-black">{product_name || "Unknown"}</p>
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium text-[#A27754] line-through">
              ৳ {regularPrice}
            </p>
            <p className="text-xs font-medium text-[#A27754]">
              ৳ {discountPrice ? Math.round(discountPrice) : regularPrice}
            </p>
          </div>
        </div>
      </div>
      {showDivider && <div className="my-2 h-[1px] bg-[#00000042] w-full"></div>}
    </div>
  );
});

export default SuggestionItem;