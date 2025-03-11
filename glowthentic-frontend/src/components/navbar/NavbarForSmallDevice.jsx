import Container from "../Container";
import { useState } from "react";
import MenuForSmallDevice from "./MenuForSmallDevice";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGetNavbarCategoryQuery } from "../../redux/features/api/category/categoryApi";

const NavbarForSmallDevice = ({ showMobileMenu, categorys }) => {
  const [menu, setMenu] = useState(null);
  const [item, setItem] = useState(null);

  const { data: categories, error, isLoading } = useGetNavbarCategoryQuery();
  // console.log(item);
  return (
    <div
      className={`px-5 absolute top-0 left-0 w-full z-10 min-h-screen lg:hidden bg-body shadow-lg transition-all duration-500 ease-in-out transform${
        showMobileMenu
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible -translate-x-[100%]"
      }`}
    >
      <Container>
        {/* main menu  */}
        <ul className={`mt-5 `}>
          {categories?.categories.map((data, index) => (
            <div key={index}>
              <li className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer">
                <Link
                  to="/products"
                  className="flex justify-between"
                  onClick={() => {
                    setMenu(index);
                    setItem(data);
                  }}
                >
                  {data?.categoryName ?? ""}
                  {data?.subcategories?.length > 0 ? (
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
            </div>
          ))}
          <MenuForSmallDevice item={item} setItem={setItem} />
        </ul>
      </Container>
    </div>
  );
};

export default NavbarForSmallDevice;
