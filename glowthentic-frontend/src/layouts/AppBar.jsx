import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import { Icon } from "@iconify/react";
import CartIcon from "../components/navbar/CartIcon";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import WishIcon from "../components/navbar/WishIcon";

const AppBar = () => {
  const { token, user } = useSelector((state) => state.auth);
  const {
    data: wishlist,
    error,
    isLoading,
  } = useGetWishlistByUserIdQuery(user?.data?.id);
  const wishListCount = wishlist?.wishlist.length;
  const userRoute = token ? "/user-profile" : "/login";
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
            <CartIcon className="flex justify-center items-center" />
          </li>
          <li>
            {token && (
              <div className="px-2">
                <WishIcon
                  wishListCount={wishListCount}
                  className="flex justify-center items-center"
                />
              </div>
            )}
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
