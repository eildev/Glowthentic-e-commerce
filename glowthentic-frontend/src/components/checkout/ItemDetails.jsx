import { useEffect, useState } from "react";

const ItemDetails = ({
  carts,
  total,
  shipingCharge,
  Shipping,
  subTotal,
  tax,
  discountPrice,
  couponData,
  isLoading,
}) => {
  // const [isReady, setIsReady] =useState(false)

  // const numericTotal = Number(total) || 0;

  // const subTotal = carts.reduce((sum, cartItem) => {
  //   return sum + (cartItem.regular_price * cartItem.quantity);
  // }, 0);
  // const Shipping = carts.reduce((sum, cartItem) => {
  //   return sum + cartItem.quantity;
  // }, 0);
  // const shipingCharge = carts.length <= 1 ? 80 : 80 + (Shipping - 1) * 20;

  const value = couponData?.discount_type == "fixed" ? "৳" : "%";

  return (
    <div className="space-y-4">
      <div className="flex justify-between pt-6">
        <span className="text-sm text-gray font-normal">Sub-total</span>
        <span className="text-sm font-medium">{subTotal} ৳</span>
      </div>
      <div className="flex justify-between ">
        <span className="text-sm text-gray font-normal">Shipping</span>
        <span className="text-sm font-medium">{shipingCharge} ৳</span>
      </div>
      {isLoading ? (
        <p className="text-sm text-gray">Loading...</p>
      ) : (
        <div
          className={`flex justify-between ${
            discountPrice ? "text-green-600" : "text-gray"
          }`}
        >
          <span className="text-sm font-normal">
            Discount ({couponData ? couponData.cupon_code : ""})
          </span>
          <span className="text-sm font-medium">
            {discountPrice ? discountPrice : 0}{" "}
            <span>{discountPrice ? value : "৳"}</span>
          </span>
        </div>
      )}
      <div className="flex justify-between">
        <span className="text-sm text-gray font-normal">Tax</span>
        <span className="text-sm font-medium">{tax} ৳</span>
      </div>
      <hr className="my-2 text-hr-thin" />
      {/* <div className="flex justify-between font-bold">
        <span className="text-sm text-gray font-bold">Grand Total</span>
        <span className="text-lg font-medium">{total} ৳</span>
      </div> */}
    </div>
  );
};

export default ItemDetails;
