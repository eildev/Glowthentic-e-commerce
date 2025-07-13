import Checkbox from "../typography/Checkbox";

import IncrementDecrement from "../typography/IncrementDecrement";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemSelection } from "../../redux/features/slice/selectCartSlice";
import { useEffect, useState } from "react";
import { imagePath } from "../../utils/imagePath";
import { Link } from "react-router-dom";
import capitalizeText from "../../utils/capitalizeText";
import { Icon } from "@iconify/react";
import CartProductInfoOne from "./CartProductInfoOne";
import CartProductInfoTwo from "./CartProductInfoTwo";

const CartItem = ({ item, handleDelete }) => {
  const [itemCount, setItemCount] = useState(item?.quantity || 1);
  const [total, setTotal] = useState(0); // Define total state with setTotal
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
    <tr className="border-none">
      <td>
        <CartProductInfoOne item={item} />
      </td>
      <td className="mx-auto">
        <CartProductInfoTwo
          setItemCount={setItemCount}
          item={item}
          status="cart"
          handleDelete={handleDelete}
        />
      </td>
      <td>
        <div className="text-[#191818] font-semibold text-2xl pb-12 h-fit text-center flex flex-col justify-center items-center gap-1">
          ৳{finalPrice}
          {badgeText && (
            <span className="text-[14px] line-through">${regularPrice}</span>
          )}
        </div>
      </td>
      <td>
        <div className="text-[#191818] font-semibold text-2xl pb-12 h-fit text-center">
          ৳{total}
        </div>
      </td>
      <td>
        <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
      </td>
    </tr>
  );
};

export default CartItem;
