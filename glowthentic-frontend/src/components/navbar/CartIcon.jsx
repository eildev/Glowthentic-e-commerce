import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import cn from "../../utils/cn";
import { useSelector } from "react-redux";

const CartIcon = ({ className }) => {
  const cartLength = useSelector((state) => state.cart.cartItems.length);
  return (
    <Link to="/cart" className="relative">
      <Icon icon="proicons:cart" width="30" height="30" />
      <span
        className={cn(
          "absolute -top-1 -right-1 border-2 bg-white w-5 h-5 rounded-full text-[10px]",
          cartLength > 0 ? "block" : "hidden",
          className
        )}
      >
        {cartLength}
      </span>
    </Link>
  );
};

export default CartIcon;
