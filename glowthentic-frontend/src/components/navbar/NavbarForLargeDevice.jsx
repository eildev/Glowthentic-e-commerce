import { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import MegaMenu from "./MegaMenu";
import { useGetNavbarCategoryQuery } from "../../redux/features/api/category/categoryApi";

const NavbarForLargeDevice = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { data: categories, error, isLoading } = useGetNavbarCategoryQuery();

  if (error) {
    return <span>Error</span>;
  }
  const handleHideMegaMenu = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="hidden lg:block h-[54px] bg-primary text-white py-4">
      <Container>
        <div className="flex justify-between items-center gap-2 capitalize">
          {categories?.categories.map((data, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link
                to="/products"
                state={{ categoryId: data.id }}
                onClick={handleHideMegaMenu}
                className={` flex items-center gap-1 text-xs xl:text-sm  hover:text-secondary ${
                  data?.isButton
                    ? "bg-white px-4 py-1 text-black rounded-2xl font-medium"
                    : ""
                }`}
              >
                <p className="capitalize">
                  {data?.categoryName
                    ? data.categoryName
                        .toLowerCase()
                        .replace(/(^|\s)\w/g, (letter) => letter.toUpperCase())
                    : ""}
                </p>
                <Icon
                  className={data?.isButton ? "hidden" : "block"}
                  icon="solar:alt-arrow-down-line-duotone"
                  width="24"
                  height="24"
                />
              </Link>
              <MegaMenu
                showMegaMenu={hoveredCategory === index}
                data={data}
                onHideMegaMenu={handleHideMegaMenu}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NavbarForLargeDevice;