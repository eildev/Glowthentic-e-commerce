const ShowPrice = ({ selectedVariant }) => {
  let finalPrice = selectedVariant?.regular_price;
  let discountType =
    selectedVariant?.product_variant_promotion?.coupon?.discount_type;
  let discountValue =
    selectedVariant?.product_variant_promotion?.coupon?.discount_value;
  let discount = "";
  if (discountType === "fixed") {
    finalPrice = selectedVariant?.regular_price - discountValue;
    discount = "৳" + discountValue;
  } else if (discountType === "percentage") {
    finalPrice =
      selectedVariant?.regular_price -
      (selectedVariant?.regular_price * discountValue) / 100;
    discount = discountValue + "%";
  } else {
    finalPrice = selectedVariant?.regular_price;
  }

  return (
    <div className=" lg:mt-4 flex flex-wrap items-center">
      {selectedVariant?.product_variant_promotion?.coupon ? (
        <span className="text-gray  text-xs md:text-sm font-thin  pe-2 ">
          <del>৳{selectedVariant?.regular_price} |</del>
        </span>
      ) : (
        ""
      )}
      <span className="text-black text-nowrap text-xs md:text-sm pe-2 font-normal">
        ৳{finalPrice ?? selectedVariant?.regular_price}
      </span>
      {selectedVariant?.product_variant_promotion?.coupon ? (
        <span className="bg-secondary rounded-tl-[20px]  rounded-br-[20px] text-white  text-nowrap  text-xs p-1 px-2">
          {" "}
          {discount} OFF
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowPrice;
