import formatPrice from "../../utils/formatPrice";

const CartItemPrice = ({ finalPrice, badgeText, regularPrice }) => {
  return (
    <div className="font-normal text-base sm:text-lg lg:text-xl h-fit text-center flex flex-col justify-center items-center gap-1">
      <div className="flex justify-start items-center gap-1">
        <span>৳</span> <span>{formatPrice(finalPrice)}</span>
      </div>
      {badgeText && (
        <div className="text-[12px] lg:text-[14px] grid">
          <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs lg:text-sm">
            {badgeText}
          </span>
          <span className="line-through">${formatPrice(regularPrice)}</span>
        </div>
      )}
    </div>
  );
};

export default CartItemPrice;
