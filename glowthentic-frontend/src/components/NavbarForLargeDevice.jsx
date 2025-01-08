import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { navData } from "../data/dummy";

const NavbarForLargeDevice = () => {
  return (
    <div className="hidden md:block bg-primary text-white border-t border-gray-500 py-5">
      <Container>
        <div className="flex justify-between items-center gap-2">
          {navData.map((data) => (
            <Link
              to="/"
              className={`flex items-center gap-1 ${
                data.dropdown ? "" : "bg-white px-4 py-1 text-black rounded-2xl"
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
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NavbarForLargeDevice;
