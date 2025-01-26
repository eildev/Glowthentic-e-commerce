import Container from "../Container";
import { useState } from "react";
import MenuForSmallDevice from "./MenuForSmallDevice";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavbarForSmallDevice = ({ showMobileMenu, category }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`px-5 absolute top-0 left-0 w-full z-10 min-h-screen bg-body shadow-lg transition-all duration-500 ease-in-out transform${
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
          {category.map((element, index) => (
            <div key={index}>
              <li className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer">
                <Link
                  to="#"
                  className="flex justify-between"
                  onClick={() => setMenu(index)}
                >
                  {element?.name ?? ""}
                  {element?.subcategories?.length > 0 ? (
                    <Icon
                      icon="solar:alt-arrow-right-bold"
                      width="24"
                      height="24"
                    />
                  ) : (
                    ""
                  )}
                </Link>
              </li>
              <MenuForSmallDevice
                category={element}
                setMenu={setMenu}
                menu={menu}
                index={index}
              />
            </div>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default NavbarForSmallDevice;
