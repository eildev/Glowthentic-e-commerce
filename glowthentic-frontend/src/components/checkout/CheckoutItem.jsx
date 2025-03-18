import React from "react";
import { imagePath } from "../../utils/imagePath";

const CheckoutItem = ({ item }) => {
  const image = imagePath(item?.variant_image[0].image);
  return (
    <div className="flex ">
      <img
        src={image}
        alt={item?.product_name}
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
            ${item?.regular_price ?? 0}
          </span>
        </span>
      </span>
    </div>
  );
};

export default CheckoutItem;
