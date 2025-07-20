import Checkbox from "../typography/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemSelection } from "../../redux/features/slice/selectCartSlice";
import { useEffect, useState } from "react";
import CartProductInfoOne from "./CartProductInfoOne";
import CartProductInfoTwo from "./CartProductInfoTwo";
import CartItemPrice from "./CartItemPrice";
import formatPrice from "../../utils/formatPrice";

const CartItemForSmallDevice = ({ item, handleDelete }) => {
  const [itemCount, setItemCount] = useState(item?.quantity || 1);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectCart.selectedItems);
  const isSelected = selectedItems.includes(item.id);

  const handleCheckboxChange = () => {
    dispatch(toggleItemSelection(item.id));
  };

  // Get regular price
  const regularPrice = Math.round(item?.regular_price || 0);

  // Determine which promotion to use: product-level or variant-level
  const promotion =
    item?.product?.promotionproduct?.[0]?.coupon ||
    item?.product_variant_promotion?.coupon;

  // Calculate discounted price and badge text
  let finalPrice = regularPrice;
  let badgeText = null;

  if (
    promotion &&
    promotion.status === "Active" &&
    new Date(promotion.end_date) >= new Date()
  ) {
    const discountValue = parseFloat(promotion.discount_value);
    if (promotion.discount_type === "percentage") {
      finalPrice = Math.round(
        regularPrice - (regularPrice * discountValue) / 100
      );
      badgeText = `${discountValue}% Off`;
    } else if (promotion.discount_type === "fixed") {
      finalPrice = Math.round(regularPrice - discountValue);
      badgeText = `৳${discountValue} Off`;
    }
  }

  // Update total price
  useEffect(() => {
    setTotal(Math.round(finalPrice * itemCount));
  }, [itemCount, finalPrice]);

  return (
    <div className="flex justify-between items-center lg:px-5 px-1 lg:py-5 py-2 border-b border-hr-thin">
      <div className="grid grid-cols-1 gap-2 w-full">
        <CartProductInfoOne item={item} />
        <div className="flex justify-between items-center w-full">
          <CartProductInfoTwo
            setItemCount={setItemCount}
            item={item}
            status="cart"
            handleDelete={handleDelete}
          />
          <CartItemPrice
            finalPrice={finalPrice}
            badgeText={badgeText}
            regularPrice={regularPrice}
          />
          <div className="text-base sm:text-lg lg:text-xl">
            ৳ {formatPrice(total)}
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
