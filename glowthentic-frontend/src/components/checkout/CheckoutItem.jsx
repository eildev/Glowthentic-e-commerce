import React from "react";
import { imagePath } from "../../utils/imagePath";
import capitalizeText from "../../utils/capitalizeText";

const CheckoutItem = ({ item }) => {
  const regularPrice = item?.regular_price;
  const discountValue = item?.product_variant_promotion?.coupon?.discount_value;
  const discountType = item?.product_variant_promotion?.coupon?.discount_type;

  let finalPrice = regularPrice;
  let discountBadge = null;

  if (
    item?.product_variant_promotion?.coupon?.status === "Active" &&
    new Date(item?.product_variant_promotion?.coupon?.end_date) >= new Date()
  ) {
    if (discountType === "fixed") {
      finalPrice = regularPrice - discountValue;
      discountBadge = `৳${Math.floor(discountValue)} OFF`;
    } else if (discountType === "percentage") {
      finalPrice = regularPrice - (regularPrice * discountValue) / 100;
      discountBadge = `${Math.floor(discountValue)}% OFF`;
    }
  }

  // Round final price to avoid decimal places
  finalPrice = Math.floor(finalPrice);

  const image = imagePath(item?.variant_image[0]?.image);

  // console.log("item", item);

  return (
    <div className="flex items-center">
      <img
        src={image}
        alt={item?.product?.product_name ?? ""}
        className="w-12 h-12 object-cover rounded"
      />
      <div className="flex-1 ml-4 text-xs">
        <span>
          {capitalizeText(item?.product?.product_name) ?? ""} (
          {capitalizeText(item?.variant_name) ?? ""})
        </span>
        <div className="flex items-center gap-2">
          <span>
            {item?.quantity ?? 0} x{" "}
            <span className="text-secondary font-bold">৳{finalPrice}</span>
          </span>
          {discountBadge && (
            <>
              <span className="line-through text-gray-500">
                ৳{regularPrice}
              </span>
              <span className="bg-secondary text-white text-xs font-medium px-2 py-0.5 rounded">
                {discountBadge}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
