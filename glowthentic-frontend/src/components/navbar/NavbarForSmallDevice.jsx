import Container from "../Container";
import { useState } from "react";
import MenuForSmallDevice from "./MenuForSmallDevice";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGetNavbarCategoryQuery } from "../../redux/features/api/category/categoryApi";
import capitalizeText from "../../utils/capitalizeText";

const NavbarForSmallDevice = ({ showMobileMenu, setShowMobileMenu }) => {
  const [menu, setMenu] = useState(null);
  const [item, setItem] = useState(null);
  const { data: categories, error, isLoading } = useGetNavbarCategoryQuery();

  if (error) {
    return <span>Error</span>;
  }

  const handleHideNavbar = () => {
    setShowMobileMenu(false);
  };

  return (
    <div
      className={`px-5 absolute top-0 left-0 w-full z-10 min-h-screen lg:hidden bg-body shadow-lg transition-all duration-500 ease-in-out transform ${
        showMobileMenu
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible -translate-x-[100%]"
      }`}
    >
      <Container>
        <ul className="mt-5">
          {categories?.categories.map((data, index) => (
            <div key={index}>
              <li className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer">
                <div className="flex justify-between">
                  <Link
                    to="/products"
                    state={{ categoryId: data.id }}
                    className="capitalize"
                    onClick={handleHideNavbar}
                  >
                    {data?.categoryName
                      ? capitalizeText(data?.categoryName)
                      : ""}
                  </Link>
                  {data?.subcategories?.length > 0 ? (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu(index);
                        setItem(data);
                      }}
                    >
                      <Icon
                        icon="solar:alt-arrow-right-bold"
                        width="24"
                        height="24"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            </div>
          ))}
          <MenuForSmallDevice
            item={item}
            setItem={setItem}
            onHideNavbar={handleHideNavbar}
          />
        </ul>
      </Container>
    </div>
  );
};

export default NavbarForSmallDevice;
