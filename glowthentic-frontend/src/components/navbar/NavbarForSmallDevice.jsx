import Container from "../Container";
import { useState } from "react";
import MenuForSmallDevice from "./MenuForSmallDevice";

const NavbarForSmallDevice = ({ showMobileMenu, category }) => {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <div
      className={`px-5 absolute top-0 left-0 w-full z-10 min-h-screen bg-body shadow-lg transition-all duration-500 ease-in-out transform ${
        showMobileMenu
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible -translate-x-[100%]"
      }`}
    >
      <Container>
        {/* main menu  */}
        <ul
          className={`mt-5 transition-all duration-500 ease-in-out transform  ${
            menu
              ? "absolute top-0 opacity-0 invisible -translate-x-[100%]"
              : "delay-300 opacity-100 visible translate-x-0"
          }`}
        >
          {category.map((element) => (
            <MenuForSmallDevice
              key={element.id}
              category={element}
              setMenu={setMenu}
              menu={menu}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default NavbarForSmallDevice;
