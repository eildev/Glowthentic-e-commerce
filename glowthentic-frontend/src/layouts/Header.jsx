import { Icon } from "@iconify/react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import { useState } from "react";
import Logo from "../components/navbar/Logo";
import CartIcon from "../components/navbar/CartIcon";
const Header = ({ setShowMobileMenu }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="bg-primary border-b border-[rgba(255,255,255,0.25)]">
      <Container>
        {/*--------- navbar -----------*/}
        <div className="navbar text-white py-5 relative">
          <div className="navbar-start">
            {/*--------- show menu icon on small Device -----------*/}
            <div
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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
            className={`absolute -bottom-9 left-0 w-full transition-all duration-300 ease-in-out transform ${showSearchBar
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
                  className="text-whitw "
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
            <CartIcon cartCount={10} className="border-primary text-primary flex justify-center items-center" />

            {/* Wishlist  */}
            <Link className="px-2">
              <Icon icon="mdi-light:heart" width="35" height="35" />
            </Link>

            {/* user  */}
            <Link className="px-2">
              <Icon icon="line-md:account-small" width="35" height="35" />
            </Link>
          </div>
          {/*--------- Cart wishlist End -----------*/}
        </div>
      </Container>
    </div>
  );
};

export default Header;
