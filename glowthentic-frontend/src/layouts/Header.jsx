import { Icon } from "@iconify/react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SearchBar from "../components/search/SearchBar";
const Header = ({ showSearchBar, setShowSearchBar }) => {
  return (
    <div className="bg-primary">
      <Container>
        {/*--------- navbar -----------*/}
        <div className="navbar text-white py-5 relative">
          <div className="navbar-start">
            {/*--------- show menu icon on small Device -----------*/}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <SearchBar />
          </div>
          {/*--------- large Device Search bar End -----------*/}

          {/*--------- Search bar show in small Device  Start -----------*/}
          <div className="absolute -bottom-9 w-full">
            <SearchBar className="w-full" />
          </div>
          {/*--------- Search bar show in small Device End -----------*/}

          {/*--------- Search Icon show on Small Device -----------*/}
          <div className="navbar-end pe-7 lg:hidden xl:hidden 2xl:hidden">
            <Link>
              <span onClick={setShowSearchBar(true)}>
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
            <Link className="px-2">
              <Icon icon="mdi-light:cart" width="24" height="24" />
            </Link>

            {/* Wishlist  */}
            <Link className="px-2">
              <Icon icon="mdi-light:heart" width="24" height="24" />
            </Link>

            {/* user  */}
            <Link className="px-2">
              <Icon icon="line-md:account-small" width="24" height="24" />
            </Link>
          </div>
          {/*--------- Cart wishlist End -----------*/}
        </div>
      </Container>
    </div>
  );
};

export default Header;
