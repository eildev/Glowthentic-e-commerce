import { Icon } from "@iconify/react";
import React from 'react';
import { Link } from "react-router-dom";
import cn from "../../utils/cn";
const WishIcon = ({wishListCount, className}) => {
    return (
        <Link to="/wishlist" className="relative">
        <Icon  icon="mdi-light:heart" width="30" height="30" />
         <span
                className={cn(
                  "absolute -top-1 -right-1 border-2 bg-white w-5 h-5 rounded-full text-[10px]",
                  wishListCount > 0 ? "block" : "hidden",
                  className
                )}
              >
                {wishListCount}
              </span>
      </Link>
    );
};

export default WishIcon;