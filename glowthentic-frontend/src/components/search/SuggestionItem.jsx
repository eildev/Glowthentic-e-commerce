import { memo } from "react";
import defaultImage from "../../assets/img/Product/20.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSuggestionsVisible } from "../../redux/features/slice/searchSlice";

const SuggestionItem = memo(function SuggestionItem({ item, showDivider }) {
  const { product_name, thumbnail, variants, slug } = item;
  const dispatch = useDispatch();
  const handleHideSuggestions = () => {
    dispatch(setSuggestionsVisible(false));
  };

  return (
    <div>
      <Link
        to={`/product/${slug}`}
        onClick={handleHideSuggestions}
        className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer flex items-center gap-4"
      >
        <img
          src={thumbnail || defaultImage}
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
      </Link>
      {showDivider && (
        <div className="my-2 h-[1px] bg-[#00000042] w-full"></div>
      )}
    </div>
  );
});

export default SuggestionItem;

// import { memo } from "react";
// import defaultImage from "../../assets/img/Product/20.png";
// import { Link } from "react-router-dom";

// const SuggestionItem = memo(function SuggestionItem({ item ,showDivider }) {
//   const { product_name, thumbnail, variants,slug} = item;

//   return (
//     <div>
//     <Link
//        to={`/product/${slug}`}
//       className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer  flex items-center gap-4"
//     >
//       <img
//         src={thumbnail || defaultImage}
//         alt={product_name || "Product"}
//         className="w-10 h-10 object-cover rounded"
//       />

//       {/* Name and price on the right */}
//       <div className="" >
//         <p className="font-medium text-sm text-black">
//           {product_name || "Unknown"}
//         </p>
//         <p className="text-xs font-medium text-[#A27754]">
//           ৳ {variants?.[0]?.regular_price || "N/A"}
//         </p>
//       </div>
//     </Link>
//    {/* Divider */}
//    {showDivider && <div className="my-2 h-[1px] bg-[#00000042] w-full"></div>}
//     </div>
//   );
// });

// export default SuggestionItem;
