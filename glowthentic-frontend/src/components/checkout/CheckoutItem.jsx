import React from "react";
import { imagePath } from "../../utils/imagePath";

const CheckoutItem = ({ item }) => {


  const regularPrice = item?.regular_price;
  const discountValue = item?.product_variant_promotion?.coupon?.discount_value;
  const discountType = item?.product_variant_promotion?.coupon?.discount_type;

  let finalPrice = regularPrice;

  if (discountType === "fixed") {
    finalPrice = regularPrice - discountValue;
  } else if (discountType === "percentage") {
    finalPrice = regularPrice - (regularPrice * discountValue) / 100;
  }

  const image = imagePath(item?.variant_image[0]?.image);
  return (
    <div className="flex ">
      <img
        src={image}
        alt={item?.product_name ?? ""}
        className="w-12 h-12 object-cover rounded"
      />
      <span className="flex-1 ml-4 text-xs">
        {item?.product?.product_name ?? ""}
        <br />
        <span>
          {" "}
          {item?.quantity ?? 0} x{" "}
          <span className="text-secondary font-bold">
            {" "}
            ৳ {finalPrice}
          </span>
        </span>
      </span>
    </div>
  );
};

export default CheckoutItem;
