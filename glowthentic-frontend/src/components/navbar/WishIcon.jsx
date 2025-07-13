import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import cn from "../../utils/cn";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
const WishIcon = ({ className }) => {
  const { user } = useSelector((state) => state.auth);

  const { data: wishlist } = useGetWishlistByUserIdQuery(user?.id, {
    skip: !user?.id,
  });

  const wishListCount = wishlist?.wishlist?.length ?? 0;
  return (
    <Link to="/user/favorites" className="relative">
      <Icon icon="mdi-light:heart" width="30" height="30" />
      <span
        className={cn(
          "absolute -top-1 -right-1 border-2 bg-white w-5 h-5 rounded-full text-[10px]",
          wishListCount > 0 ? "block" : "hidden",
          className
        )}
      >
        {wishListCount ?? 0}
      </span>
    </Link>
  );
};

export default WishIcon;
