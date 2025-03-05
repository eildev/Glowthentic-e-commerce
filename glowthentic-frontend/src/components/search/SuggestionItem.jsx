import { memo } from "react";
import defaultImage from '../../assets/img/Product/20.png';
import { Link } from "react-router-dom";

const SuggestionItem = memo(function SuggestionItem({ item }) {
  const { product_name, thumbnail, variants } = item;

  return (
    <Link to={`/product/${item.id}`}
      className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer  flex items-center gap-4"
    >
      <img
        src={thumbnail || defaultImage}
        alt={product_name || "Product"}
        className="w-10 h-10 object-cover rounded"
      />

      {/* Name and price on the right */}
      <div className="">
        <p className="font-medium text-sm text-black">{product_name || "Unknown"}</p>
        <p className="text-xs font-medium text-[#A27754]">৳ {variants?.[0]?.regular_price || "N/A"}</p>
      </div>
    </Link>
  );
});

export default SuggestionItem;