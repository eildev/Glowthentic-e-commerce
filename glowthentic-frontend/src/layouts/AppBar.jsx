import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Icon } from "@iconify/react";

const AppBar = () => {
  const cartCount = 5;
  return (
    <div className="fixed bottom-1 bg-white w-full right-0 lg:hidden rounded-3xl">
      <Container>
        <ul className="flex justify-between items-center my-5 mx-5 text-gray-thin">
          <li className="">
            <Link to="#">
              <Icon
                icon="material-symbols-light:home-outline"
                width="40"
                height="40"
              />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icon icon="mdi:compass-outline" width="40" height="40" />
            </Link>
          </li>
          <li className="text-secondary">
            <Link to="#" className="relative">
              <Icon icon="proicons:cart" width="40" height="40" />
              <span
                className={`absolute top-0 right-0 border-2 bg-white border-secondary text-secondary w-4 h-4 rounded-full text-[10px] flex justify-center items-center ${
                  cartCount > 0 ? "block" : "hidden"
                }`}
              >
                {cartCount}
              </span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icon icon="basil:heart-outline" width="40" height="40" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <Icon icon="basil:user-outline" width="40" height="40" />
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default AppBar;
