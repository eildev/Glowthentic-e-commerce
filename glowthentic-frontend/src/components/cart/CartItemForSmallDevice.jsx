import Checkbox from "../typography/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemSelection } from "../../redux/features/slice/selectCartSlice";
import { useState } from "react";
import CartProductInfoOne from "./CartProductInfoOne";
import CartProductInfoTwo from "./CartProductInfoTwo";
import CartItemPrice from "./CartItemPrice";

const CartItemForSmallDevice = ({ item, handleDelete }) => {
  const [itemCount, setItemCount] = useState(item?.quantity || 1);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectCart.selectedItems);
  const isSelected = selectedItems.includes(item.id);

  const handleCheckboxChange = () => {
    dispatch(toggleItemSelection(item.id));
  };

  // Get regular price
  const regularPrice = item?.regular_price || 0;

  // Determine which promotion to use: product-level or variant-level
  const promotion =
    item?.product?.promotionproduct?.[0]?.coupon ||
    item?.product_variant_promotion?.coupon;

  // Calculate discounted price and badge text
  let discountPrice = null;
  let badgeText = null;

  if (
    promotion &&
    promotion.status === "Active" &&
    new Date(promotion.end_date) >= new Date()
  ) {
    const discountValue = parseFloat(promotion.discount_value);
    if (promotion.discount_type === "percentage") {
      discountPrice = regularPrice - (regularPrice * discountValue) / 100;
      badgeText = `${discountValue}% Off`;
    } else if (promotion.discount_type === "fixed") {
      discountPrice = regularPrice - discountValue;
      badgeText = `৳${discountValue} Off`;
    }
  }

  // Determine the price to display (discounted or regular)
  const displayPrice = discountPrice ? Math.round(discountPrice) : regularPrice;

  return (
    <div className="flex justify-between items-center lg:px-5 px-1 lg:py-5 py-2 border-b border-hr-thin">
      <div className="grid gap-2">
        <CartProductInfoOne item={item} />
        <div className="flex justify-between items-center w-full">
          <CartProductInfoTwo
            setItemCount={setItemCount}
            item={item}
            status="cart"
            handleDelete={handleDelete}
          />
          <CartItemPrice finalPrice={100} badgeText={badgeText} regularPrice={regularPrice} />
          <div className="text-lg">
            <span>৳</span>
            {displayPrice * itemCount}
          </div>
          <div>
            <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemForSmallDevice;
