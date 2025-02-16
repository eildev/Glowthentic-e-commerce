import { useState } from "react";
import { Link } from "react-router-dom";
import SubMenuItems from "./SubMenuItems";

const MenuForSmallDevice = ({ item, setItem, setMenu, menu }) => {

  console.log(item);
  console.log(menu);
  return (
    <>
      {/* submenu  */}
      <ul
        className={`absolute top-0 left-[100%] w-full transition-all duration-500 ease-in transform z-[9999] ${
          item || menu ? "block -left-[100%]" : "hidden left-[100%]"
        } `}
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default MenuForSmallDevice;
