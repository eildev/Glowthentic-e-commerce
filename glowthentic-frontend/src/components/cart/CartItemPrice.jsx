const CartItemPrice = ({ finalPrice, badgeText, regularPrice }) => {
    return (
        <div className="text-[#191818] text-lg lg:text-2xl h-fit text-center flex flex-col justify-center items-center gap-1">
            ৳{finalPrice}
            {badgeText && (
                <span className="text-[12px] lg:text-[14px] line-through">${regularPrice}</span>
            )}
        </div>
    );
};

export default CartItemPrice;