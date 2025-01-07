import React from "react";
import Container from "./Container";
import { Icon } from "@iconify/react";

const Menu = () => {
  return (
    <div>
      <Container>
        <ul>
          <li className="bg-white py-2 px-5 flex justify-between border font-bold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-bold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-bold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-bold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-bold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-bold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Menu;
