import { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import MegaMenu from "./MegaMenu";

const NavbarForLargeDevice = ({ categorys }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // console.log(category);

  return (
    <>
      <div className="hidden lg:block h-[72px] bg-primary text-white py-5">
        <Container>
          <div className="flex justify-between items-center gap-2">
            {/* category data fetch  */}
            {categorys.map((data, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* dynamic link passes  */}
                <Link
                  to="/products"
                  className={`flex items-center gap-1 hover:text-secondary ${
                    data.isButton
                      ? "bg-white px-4 py-1 text-black rounded-2xl font-medium"
                      : ""
                  }`}
                >
                  {data.name ?? ""}
                  <Icon
                    className={data.isButton ? "hidden" : "block"}
                    icon="solar:alt-arrow-down-line-duotone"
                    width="24"
                    height="24"
                  />
                </Link>
                {/* megaMenu  Start Here */}
                <MegaMenu
                  showMegaMenu={hoveredCategory === index}
                  data={data}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavbarForLargeDevice;
