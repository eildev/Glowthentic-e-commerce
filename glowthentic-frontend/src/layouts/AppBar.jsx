import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Icon } from "@iconify/react";
import CartIcon from "../components/navbar/CartIcon";

const AppBar = () => {
  const cartCount = 10;
  return (
    <div className="fixed bottom-1 bg-white w-full right-0 lg:hidden rounded-3xl drop-shadow-xl">
      <Container>
        <ul className="flex justify-between items-center my-2 mx-5 text-gray-thin">
          <li className="">
            <Link to="#">
              <Icon icon="proicons:home" width="35" height="35" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icon icon="mdi:compass-outline" width="35" height="35" />
            </Link>
          </li>
          <li className="text-secondary">
            {/* <Link to="#" className="relative">
              <Icon icon="proicons:cart" width="35" height="35" />
              <span
                className={`absolute top-0 right-0 border-2 bg-white border-secondary text-secondary w-4 h-4 rounded-full text-[10px] flex justify-center items-center ${
                  cartCount > 0 ? "block" : "hidden"
                }`}
              >
                {cartCount}
              </span>
            </Link> */}
            <CartIcon cartCount={cartCount} className="border-secondary text-secondary flex justify-center items-center" />
          </li>
          <li>
            <Link to="#">
              <Icon icon="basil:heart-outline" width="35" height="35" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icon icon="basil:user-outline" width="35" height="35" />
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default AppBar;
