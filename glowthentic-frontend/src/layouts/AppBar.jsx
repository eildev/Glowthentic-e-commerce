import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { Icon } from "@iconify/react";
import CartIcon from "../components/navbar/CartIcon";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import WishIcon from "../components/navbar/WishIcon";
import cn from "../utils/cn";

const AppBar = () => {
  const { token, user } = useSelector((state) => state.auth);
  const {
    data: wishlist,
    error,
    isLoading,
  } = useGetWishlistByUserIdQuery(user?.data?.id);
  const wishListCount = wishlist?.wishlist.length;
  const userRoute = token ? "/profile-mobile" : "/login";
  const wishlistRoute = token ? "/wishlist" : "/login";

  const cartLength = useSelector((state) => state.cart.cartItems.length);
  return (
    <div className="fixed bottom-1 bg-white w-full right-0 lg:hidden rounded-3xl drop-shadow-xl border border-secondary z-20">
      <Container>
        <ul className="flex justify-between items-center my-2 mx-5 text-gray-thin">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-gray-thin"
              }
            >
              <Icon icon="proicons:home" width="30" height="30" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-gray-thin"
              }
            >
              <Icon icon="mdi:compass-outline" width="30" height="30" />
            </NavLink>
          </li>
          <li className="">
            {/* <CartIcon className="" /> */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-secondary relative" : "text-gray-thin relative"
              }
            >
              <Icon icon="proicons:cart" width="30" height="30" />
              <span
                className={cn(
                  "absolute -top-1 -right-1 border-2 bg-white w-5 h-5 rounded-full text-[10px]",
                  cartLength > 0 ? "block" : "hidden",
                  "flex justify-center items-center"
                )}
              >
                {cartLength}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={wishlistRoute}
              className={({ isActive }) =>
                isActive ? "text-secondary relative" : "text-gray-thin relative"
              }
            >
              <Icon icon="mdi-light:heart" width="30" height="30" />
              <span
                className={cn(
                  "absolute -top-1 -right-1 border-2 bg-white w-5 h-5 rounded-full text-[10px]",
                  wishListCount > 0 ? "block" : "hidden",
                  "flex justify-center items-center"
                )}
              >
                {wishListCount}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={userRoute}
              className={({ isActive }) =>
                isActive ? "text-secondary" : "text-gray-thin"
              }
            >
              <Icon icon="basil:user-outline" width="30" height="30" />
            </NavLink>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default AppBar;
