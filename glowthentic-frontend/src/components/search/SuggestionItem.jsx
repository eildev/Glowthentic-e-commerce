import { memo, useEffect } from "react";
import defaultImage from "../../assets/img/Product/20.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSuggestionsVisible } from "../../redux/features/slice/searchSlice";

const SuggestionItem = memo(function SuggestionItem({ item, showDivider }) {
  const { product_name, thumbnail, variants, slug, variant_image } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Safe image access
  const product_image = thumbnail || (variant_image && variant_image[0]?.image);

  // Log the component mounting and the item data
  useEffect(() => {
    // console.log("SuggestionItem mounted with slug:", slug);
  }, [slug]);

  const handleItemClick = (e) => {
    // Add explicit debugging
    console.log("SuggestionItem clicked!");
    console.log("Slug value:", slug);

    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Prevent click from bubbling up to document

    // Check if slug exists before navigating
    if (slug) {
      console.log("Attempting to navigate to:", `/product/${slug}`);
      navigate(`/product/${slug}`);
    } else {
      console.error("Missing slug for product:", product_name);
    }

    // Close suggestions after attempting navigation
    dispatch(setSuggestionsVisible(false));
  };

  // Add a direct click handler to the image and text separately
  return (
    <div>
      <div
        className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer flex items-center gap-4"
        onClick={handleItemClick}
      >
        <img
          src={product_image || defaultImage}
          alt={product_name || "Product"}
          className="w-10 h-10 object-cover rounded"
          onClick={(e) => {
            console.log("Image clicked directly");
            handleItemClick(e);
          }}
        />
        <div
          onClick={(e) => {
            console.log("Text div clicked directly");
            handleItemClick(e);
          }}
        >
          <p className="font-medium text-sm text-black">
            {product_name || "Unknown"}
          </p>
          <p className="text-xs font-medium text-[#A27754]">
            ৳ {variants?.[0]?.regular_price || "N/A"}
          </p>
        </div>
      </div>
      {showDivider && (
        <div className="my-2 h-[1px] bg-[#00000042] w-full"></div>
      )}
    </div>
  );
});

export default SuggestionItem;
