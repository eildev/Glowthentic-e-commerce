import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const MenuForSmallDevice = ({
  category,
  setMenu,
  menu,
  subMenu,
  setSubMenu,
}) => {
  return (
    <li className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer">
      <Link
        to="#"
        className="flex justify-between"
        onClick={() => setMenu(true)}
      >
        {category.name ?? ""}
        {category.subcategories.length > 0 ? (
          <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
        ) : (
          ""
        )}
      </Link>

      {/* submenu  */}
      <ul
        className={`mt-12 transition-all  duration-500 ease-in-out transform  ${
          menu
            ? "opacity-100 visible translate-x-0"
            : "absolute top-0 w-full opacity-0 invisible translate-x-[100%]"
        } `}
      >
        <li
          onClick={() => setSubMenu((prev) => !prev)}
          className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer relative"
        >
          <Link to="#" className="flex justify-between">
            By Subcategory
            {category.subcategories.length > 0 ? (
              <Icon
                className={`transition-all duration-500 ease-in-out transform ${
                  subMenu ? "rotate-90" : ""
                }`}
                icon="solar:alt-arrow-right-bold"
                width="24"
                height="24"
              />
            ) : (
              ""
            )}
          </Link>

          {/* sub sub menu  */}
          {category.subcategories.length > 0 ? (
            <ul
              className={`w-full mt-2 transition-all duration-500 ease-in-out transform ${
                subMenu
                  ? "opacity-100 visible translate-y-0"
                  : "absolute opacity-0 invisible -translate-y-0"
              }`}
            >
              {category.subcategories.map((subcategory) => (
                <li
                  key={subcategory.id}
                  className="bg-white py-2 px-5 border-t last:border-b font-normal  border-gray-light cursor-pointer"
                >
                  <Link to="#" className="flex justify-between">
                    {subcategory?.name ?? ""}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>

        <li className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer ">
          <Link to="#" className="flex justify-between">
            By Product Type
            {category.types.length > 0 ? (
              <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
            ) : (
              ""
            )}
          </Link>

          {/* sub sub menu  */}
          {category.types.length > 0 ? (
            <ul
              className={`w-full mt-2 transition-all duration-500 ease-in-out transform ${
                subMenu
                  ? "opacity-100 visible translate-y-0"
                  : "absolute opacity-0 invisible -translate-y-0"
              }`}
            >
              {category.types.map((type) => (
                <li
                  key={type.id}
                  className="bg-white py-2 px-5 border-t last:border-b font-normal  border-gray-light cursor-pointer"
                >
                  <Link to="#" className="flex justify-between">
                    {type?.name ?? ""}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>

        <li className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer">
          <Link to="#" className="flex justify-between">
            By Skin Condition
            {category.tags.length > 0 ? (
              <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
            ) : (
              ""
            )}
          </Link>

          {/* sub sub menu  */}
          {category.tags.length > 0 ? (
            <ul
              className={`w-full mt-2 transition-all duration-500 ease-in-out transform ${
                subMenu
                  ? "opacity-100 visible translate-y-0"
                  : "absolute opacity-0 invisible -translate-y-0"
              }`}
            >
              {category.types.map((tag) => (
                <li
                  key={tag.id}
                  className="bg-white py-2 px-5 border-t last:border-b font-normal  border-gray-light cursor-pointer"
                >
                  <Link to="#" className="flex justify-between">
                    {tag?.name ?? ""}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>

        {category.offers.map((offer) => (
          <li
            key={offer.id}
            className="bg-white py-2 px-5 border-t last:border-b font-normal  border-gray-light cursor-pointer"
          >
            <Link to="#" className="flex justify-between">
              {offer?.name ?? ""}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MenuForSmallDevice;
