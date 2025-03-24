import { memo } from "react";
import defaultImage from "../../assets/img/Product/20.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSuggestionsVisible } from "../../redux/features/slice/searchSlice";

const SuggestionItem = memo(function SuggestionItem({ item, showDivider }) {
  const { product_name, thumbnail, variants, slug, variant_image } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
const product_image = variant_image[0].image 
  const handleItemClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    navigate(`/product/${slug}`);
    dispatch(setSuggestionsVisible(false));
  };

  return (
    <div>
      <div
        onClick={handleItemClick}
        className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer flex items-center gap-4"
      >
        <img
          src={product_image || defaultImage}
          alt={product_name || "Product"}
          className="w-10 h-10 object-cover rounded"
        />
        <div>
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
