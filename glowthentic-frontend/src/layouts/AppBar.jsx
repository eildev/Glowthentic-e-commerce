import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Icon } from "@iconify/react";

const AppBar = () => {
  return (
    <div className="fixed bottom-1 bg-white w-full right-0 lg:hidden rounded-3xl">
      <Container>
        <ul className="flex justify-between items-center my-5 mx-5">
          <li className="text-secondary">
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
          <li>
            <Link to="#">
              <Icon icon="proicons:cart" width="40" height="40" />
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
