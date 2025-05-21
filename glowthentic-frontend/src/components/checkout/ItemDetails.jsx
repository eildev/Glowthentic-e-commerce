import { useEffect, useState } from "react";

const ItemDetails = ({
  carts,
  total,
  shippingCharge,
  Shipping,
  subTotal,
  tax,
  discountPrice,
  couponData,
  isLoading,
  location,
  totalWeight,
}) => {
  // Use the passed location value for shipping display
  const extraShipping = Math.floor(totalWeight / 850) * 20;
  const displayShipping = Math.floor((location || 0) + extraShipping);
  // Show correct discount indicator (fixed or percentage)
  const value = couponData?.discount_type === "fixed" ? "৳" : "%";

  return (
    <div className="space-y-4">
      <div className="flex justify-between pt-6">
        <span className="text-sm text-gray font-normal">Sub-total</span>
        <span className="text-sm font-medium">{Math.floor(subTotal)} ৳</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm text-gray font-normal">Shipping</span>
        <span className="text-sm font-medium">{Math.floor(shippingCharge ?? 0)} ৳</span>
      </div>
      {isLoading ? (
        <p className="text-sm text-gray">Loading...</p>
      ) : (
        <div
          className={`flex justify-between ${discountPrice ? "text-green-600" : "text-gray"}`}
        >
          <span className="text-sm font-normal">
            Discount {couponData ? `(${couponData.cupon_code})` : ""}
          </span>
          <span className="text-sm font-medium">
            {discountPrice ? Math.floor(discountPrice) : 0}{" "}
            <span>{discountPrice ? value : "৳"}</span>
          </span>
        </div>
      )}
      <div className="flex justify-between">
        <span className="text-sm text-gray font-normal">Tax</span>
        <span className="text-sm font-medium">{Math.floor(tax)} ৳</span>
      </div>
      <hr className="my-2 text-hr-thin" />
      <div className="flex justify-between font-bold">
        <span className="text-sm text-gray font-bold">Grand Total</span>
        <span className="text-lg font-medium">{Math.floor(total)} ৳</span>
      </div>
    </div>
  );
};

export default ItemDetails;