import React from "react";
import formatPrice from "../../utils/formatPrice";

const ShowPrice = ({ selectedVariant }) => {
  const currentDate = new Date();

  const startDateStr =
    selectedVariant?.product_variant_promotion?.coupon?.start_date;
  const endDateStr =
    selectedVariant?.product_variant_promotion?.coupon?.end_date;
  let isPromotionValid = false;

  if (
    selectedVariant?.product_variant_promotion?.coupon &&
    startDateStr &&
    endDateStr
  ) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    isPromotionValid = currentDate >= startDate && currentDate <= endDate;
  }

  let finalPrice = selectedVariant?.regular_price;
  let discount = "";

  if (isPromotionValid) {
    const discountType =
      selectedVariant?.product_variant_promotion?.coupon?.discount_type;
    const discountValue =
      selectedVariant?.product_variant_promotion?.coupon?.discount_value;

    if (discountType === "fixed") {
      finalPrice = selectedVariant?.regular_price - discountValue;
      discount = "৳" + discountValue;
    } else if (discountType === "percentage") {
      finalPrice = Math.round(
        selectedVariant?.regular_price -
          (selectedVariant?.regular_price * discountValue) / 100
      );
      discount = parseInt(discountValue) + "%";
    }
  }

  return (
    <div className="lg:mt-4 flex flex-wrap items-center mb-2">
      {isPromotionValid &&
      selectedVariant?.product_variant_promotion?.coupon ? (
        <span className="text-gray text-xs md:text-sm lg:text-base font-thin pe-2">
          <del>৳{formatPrice(selectedVariant?.regular_price)} |</del>
        </span>
      ) : null}
      <span className="text-nowrap pe-2 font-bold text-secondary text-lg md:text-xl lg:text-2xl">
        ৳ {formatPrice(finalPrice ?? selectedVariant?.regular_price)}
      </span>
      {isPromotionValid &&
      selectedVariant?.product_variant_promotion?.coupon ? (
        <span className="bg-secondary rounded-tl-[15px] md:rounded-tl-[20px] rounded-br-[15px] md:rounded-br-[20px] text-white text-nowrap text-xs py-1 px-4">
          {discount} OFF
        </span>
      ) : null}
    </div>
  );
};

export default ShowPrice;
