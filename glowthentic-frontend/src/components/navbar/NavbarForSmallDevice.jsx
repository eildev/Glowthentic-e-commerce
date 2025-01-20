import { Link } from "react-router-dom";
import Container from "../Container";
import { Icon } from "@iconify/react";
import { useState } from "react";

const NavbarForSmallDevice = ({ showMobileMenu, category }) => {
  const [subMenu, setSubMenu] = useState(false);

  return (
    <div
      className={`px-5 absolute top-0 left-0 w-full z-10 min-h-screen bg-body shadow-lg transition-all duration-500 ease-in-out transform ${showMobileMenu
        ? "opacity-100 visible translate-x-0"
        : "opacity-0 invisible -translate-x-[100%]"
        }`}
    >
      <Container>
        <div
          onClick={() => setSubMenu(false)}
          className={` absolute top-0 py-2 flex justify-start gap-1 items-center font-semibold text-lg ps-4 cursor-pointer ${subMenu ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-[100%]'}`}>
          <Icon
            icon="solar:alt-arrow-left-linear"
            className="font-semibold"
            width="24"
            height="24"
          />
          Women Skincare
        </div>
        <ul className={`mt-5 ${subMenu ? 'absolute top-0 opacity-0 invisible -translate-x-[100%]' : 'opacity-100 visible translate-x-0'}`}>
          {
            category.map(element => (
              <>
                <li
                  key={element.id}
                  className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer"

                >
                  <Link
                    to="#"
                    className="flex justify-between"
                    onClick={() => setSubMenu(true)}>
                    {element.name ?? ""}
                    {
                      element.subcategories.length > 0 ? <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" /> : ""
                    }
                  </Link>
                </li>
              </>
            ))
          }
        </ul>
        <ul className={`mt-12 ${subMenu ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-[100%]'} `}>
          <li
            className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              By Subcategory
              <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
            </Link>
          </li>
          <li
            className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              By Product Type
              <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
            </Link>
          </li>
          <li
            className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              By Skin Condition
              <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
            </Link>
          </li>
          <li
            className="bg-white py-2 px-5 border-t last:border-b font-normal text-gray-thin border-gray-light cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              New
            </Link>
          </li>
          <li
            className="bg-white py-2 px-5 border-t last:border-b font-normal text-gray-thin border-gray-light cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              Best Seller
            </Link>
          </li>
          <li
            className="bg-white py-2 px-5 border-t last:border-b font-normal text-gray-thin border-gray-light cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              Travel size
            </Link>
          </li>
          <li
            className="bg-white py-2 px-5 border-t last:border-b font-normal text-gray-thin border-gray-light cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              Limited Time Offer
            </Link>
          </li>
          <li
            className="bg-white py-2 px-5 border-t last:border-b font-normal text-gray-thin border-gray-light cursor-pointer"
          >
            <Link
              to="#"
              className="flex justify-between">
              Buy 1 Get 1
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default NavbarForSmallDevice;
