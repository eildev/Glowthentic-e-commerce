import { useState } from "react";
import { Link } from "react-router-dom";
import SubMenuItems from "./SubMenuItems";

const MenuForSmallDevice = ({
  category,
  menu,
  index
}) => {
  const [subMenu, setSubMenu] = useState(false);
  return (
    <>

      {/* submenu  */}
      <ul
        className={`mt-12 transition-all duration-500 ease-in-out transform  ${menu === index
          ? "opacity-100 visible translate-x-0"
          : "absolute top-0 w-full opacity-0 invisible translate-x-[100%]"
          } `}
      >
        <SubMenuItems title="By Subcategory" setSubMenu={setSubMenu} subMenu={subMenu} data={category?.subcategories} />
        <SubMenuItems title="By Product Type" setSubMenu={setSubMenu} subMenu={subMenu} data={category?.tags} />
        <SubMenuItems title="By Skin Condition" setSubMenu={setSubMenu} subMenu={subMenu} data={category?.types} />

        {category?.offers?.map((offer) => (
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
    </>

  );
};

export default MenuForSmallDevice;
