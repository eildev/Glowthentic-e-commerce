import { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { navData } from "../../data/dummy";
import MegaMenu from "./MegaMenu";

const NavbarForLargeDevice = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <>
      <div
        className="hidden lg:block bg-primary text-white py-5 relative"
        onMouseLeave={() => setShowMegaMenu(false)}
      >
        <Container>
          <div className="flex justify-between items-center gap-2">
            {navData.map((data, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => data.dropdown && setShowMegaMenu(true)}
              >
                <Link
                  to="/"
                  className={`flex items-center gap-1 hover:text-secondary ${
                    data.dropdown
                      ? ""
                      : "bg-white px-4 py-1 text-black rounded-2xl font-medium"
                  }`}
                >
                  {data.title ?? ""}
                  <Icon
                    className={data.dropdown ? "block" : "hidden"}
                    icon="solar:alt-arrow-down-line-duotone"
                    width="24"
                    height="24"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
        <MegaMenu showMegaMenu={showMegaMenu} />
      </div>
    </>
  );
};

export default NavbarForLargeDevice;
