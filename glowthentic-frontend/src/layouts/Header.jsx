import { Icon } from "@iconify/react";
import Container from "../components/Container";

const Header = () => {
  return (
    <div  className="bg-primary">
      <Container>
      <div className="navbar text-white py-5	">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <img src="/logo/Glowthentic-Logo.svg" alt="Logo" className="h-12 w-auto" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="relative">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
    <Icon icon="ic:outline-search" className="text-black " width="24" height="24" />
    </span>
    <input 
      type="text" 
      placeholder="Search for products, brands..." 
      className="input input-bordered text-black h-9 rounded-e-3xl rounded-s-3xl md:w-96 pl-10"
    />
</div>
  </div>
  <div className="navbar-end">
    <a className="px-2"><Icon icon="mdi-light:cart" width="24" height="24" />
    </a>
    <a className="px-2"><Icon icon="mdi-light:heart" width="24" height="24" />
    </a>
    <a className="px-2"><Icon icon="line-md:account-small" width="24" height="24" />
    </a>
    
  </div>
</div>
</Container>
    </div>
  );
};

export default Header;
