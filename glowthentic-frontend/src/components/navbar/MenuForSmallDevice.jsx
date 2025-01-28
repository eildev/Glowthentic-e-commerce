import { useState } from "react";
import { Link } from "react-router-dom";
import SubMenuItems from "./SubMenuItems";

const MenuForSmallDevice = ({ category, menu, setMenu, index }) => {
  return (
    <>
      {/* submenu  */}
      <ul
        className={`absolute top-0 hidden left-[100%] w-full transition-all duration-500 ease-in transform z-[9999] ${
          menu === index ? "block -left-[100%]" : "hidden left-[100%]"
        } `}
      >
        <li>By Subcategory</li>
        <li>By Subcategory</li>
        <li>By Subcategory</li>
        <li>By Subcategory</li>
        <li>By Subcategory</li>
        <li>By Subcategory</li>
      </ul>
    </>
  );
};

export default MenuForSmallDevice;
