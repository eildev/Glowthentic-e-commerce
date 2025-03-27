import { Icon } from "@iconify/react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import { useState } from "react";
import Logo from "../components/navbar/Logo";
import CartIcon from "../components/navbar/CartIcon";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import WishIcon from "../components/navbar/WishIcon";
const Header = ({ setShowMobileMenu, showMobileMenu }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { token, user } = useSelector((state) => state.auth);

  // console.log("token",  token);
  // console.log(user?.data?.id);

  const {
    data: wishlist,
    error,
    isLoading,
  } = useGetWishlistByUserIdQuery(user?.id, {
    skip: !user?.id,
  });
  const wishListCount = wishlist?.wishlist.length;
  // console.log(wishlist);
  const userRoute = token ? "/user-profile" : "/login";

  const cartLength = useSelector((state) => state.cart.cartItems.length);

  return (
    <div className="bg-primary border-b border-[rgba(255,255,255,0.25)]">
      <Container>
        {/*--------- navbar -----------*/}
        <div className="navbar text-white lg:py-5 py-2 relative">
          <div className="navbar-start">
            {/*--------- show menu icon on small Device -----------*/}
            <div
              role="button"
              className={`btn btn-ghost lg:hidden`}
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              <div className="transition-transform duration-300 ease-in-out">
                {showMobileMenu ? (
                  <Icon
                    icon="radix-icons:cross-2"
                    width="24"
                    height="24"
                    className="transform rotate-90"
                  />
                ) : (
                  <Icon
                    icon="ci:menu-alt-04"
                    width="30"
                    height="30"
                    className="transform rotate-0"
                  />
                )}
              </div>
            </div>
            {/*--------- show menu icon on small Device End -----------*/}

            {/*--------- Logo show in Large Device Start -----------*/}
            <div className="navbar-start hidden lg:flex">
              <Logo />
            </div>
            {/*--------- Logo show in Large Device End -----------*/}
          </div>

          {/*--------- Small Device logo -----------*/}
          <div className="lg:hidden">
            <Logo />
          </div>
          {/*--------- Small Device logo -----------*/}

          {/*--------- large Device Search bar  Start -----------*/}
          <div className="navbar-center hidden lg:flex">
            <SearchBar className="w-[600px]" />
          </div>
          {/*--------- large Device Search bar End -----------*/}

          {/*--------- Search bar show in small Device  Start -----------*/}
          <div
            className={`absolute -bottom-9 left-0 w-full transition-all duration-300 ease-in-out transform ${
              showSearchBar
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-5"
            }`}
          >
            <SearchBar className="w-full" />
          </div>
          {/*--------- Search bar show in small Device End -----------*/}

          {/*--------- Search Icon show on Small Device -----------*/}
          <div className="navbar-end pe-7 lg:hidden xl:hidden 2xl:hidden">
            <Link to="#" onClick={() => setShowSearchBar((prev) => !prev)}>
              <span>
                <Icon
                  icon="ic:outline-search"
                  className="text-white"
                  width="30"
                  height="30"
                />
              </span>
            </Link>
          </div>
          {/*--------- Search Icon show on Small Device End -----------*/}

          {/*--------- Cart wishlist start -----------*/}
          <div className="navbar-end hidden lg:flex">
            {/* Cart Icon  */}
            <div className="px-2">
              <CartIcon className="border-primary text-primary flex justify-center items-center" />
            </div>
            {/* Wishlist */}
            {token && (
              <div className="px-2">
                <WishIcon
                  wishListCount={wishListCount}
                  className="border-primary text-primary flex justify-center items-center"
                ></WishIcon>
              </div>
            )}
            {/* user  */}
            <Link to={userRoute} className="px-2">
              <Icon icon="line-md:account-small" width="30" height="30" />
            </Link>
          </div>
          {/*--------- Cart wishlist End -----------*/}
        </div>
      </Container>
    </div>
  );
};

export default Header;
