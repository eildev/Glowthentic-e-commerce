import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import cn from "../../utils/cn";

const CartIcon = ({ cartCount, className }) => {
  return (
    <Link to="/cart" className="relative">
      <Icon icon="proicons:cart" width="30" height="30" />
      <span
        className={cn(
          "absolute -top-1 -right-1 border-2 bg-white w-5 h-5 rounded-full text-[10px]",
          cartCount > 0 ? "block" : "hidden",
          className
        )}
      >
        {cartCount}
      </span>
    </Link>
  );
};

export default CartIcon;
