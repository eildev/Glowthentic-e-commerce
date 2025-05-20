import { Icon } from "@iconify/react";
import Checkbox from "../typography/Checkbox";
import IncrementDecrement from "../typography/IncrementDecrement";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemSelection } from "../../redux/features/slice/selectCartSlice";
import { imagePath } from "../../utils/imagePath";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartItemForSmallDevice = ({ item, handleDelete }) => {
  const [itemCount, setItemCount] = useState(item?.quantity || 1);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectCart.selectedItems);
  const isSelected = selectedItems.includes(item.id);

  const handleCheckboxChange = () => {
    dispatch(toggleItemSelection(item.id));
  };

  const image = imagePath(item?.variant_image[0]?.image);

  // Get regular price
  const regularPrice = item?.regular_price || 0;

  // Determine which promotion to use: product-level or variant-level
  const promotion = item?.product?.promotionproduct?.[0]?.coupon || item?.product_variant_promotion?.coupon;

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

  // Determine the price to display (discounted or regular)
  const displayPrice = discountPrice ? Math.round(discountPrice) : regularPrice;

  return (
    <tr className="border-none">
      <div className="relative">
        <th>
          <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
        </th>
        <td>
          <div className="flex gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-semibold text-xs">
                {item?.product?.product_name ?? ""}
              </div>
              <div className="text-sm opacity-50 mb-1">{item?.variant_name ?? ""}</div>
              <div className="text-[#FA8232] flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.859 4.63978L5.44557 13.5451C5.12789 13.8832 4.82046 14.5493 4.75898 15.0105L4.37981 18.3308C4.24659 19.5298 5.1074 20.3496 6.29614 20.1446L9.59591 19.581C10.0571 19.499 10.7027 19.1608 11.0203 18.8124L19.4338 9.90712C20.8889 8.36996 21.5448 6.61759 19.28 4.47581C17.0255 2.35453 15.3142 3.10261 13.859 4.63978Z"
                    stroke="#FA8232"
                    strokeWidth="1.02477"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.4551 6.125C12.8957 8.95338 15.1912 11.1157 18.0401 11.4026"
                    stroke="#FA8232"
                    strokeWidth="1.02477"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.34473 23.4951H21.7907"
                    stroke="#FA8232"
                    strokeWidth="1.02477"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Link
                  to={`/product/${item?.product?.slug}`}
                  className="font-medium text-sm leading-4"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </td>
      </div>
      <div className="flex justify-between">
        <td>
          <div className="flex flex-col justify-center items-center">
            <div className="w-20 h-8">
              <IncrementDecrement setItemCount={setItemCount} item={item} status={'cart'} />
            </div>
            <div
              onClick={() => handleDelete(item?.id)}
              className="flex items-center gap-2 pt-2"
            >
              <Icon
                icon="lets-icons:trash-light"
                className="text-[#FF342D]"
                width="24"
                height="24"
              />
              <h1 className="text-[#FF342D] text-xs font-medium">Remove</h1>
            </div>
          </div>
        </td>
        <td className="text-[#191818] flex items-center font-semibold text-xl">
          <div className="flex flex-col justify-center items-center">
            <span className="block">৳{displayPrice}</span>
            <span className="line-through text-[12px] block">৳{regularPrice}</span>
          </div>
        </td>
        <td className="text-[#191818] flex items-center font-semibold text-xl">
          <span>৳</span>
          {displayPrice * itemCount}
        </td>
      </div>
    </tr>
  );
};

export default CartItemForSmallDevice;