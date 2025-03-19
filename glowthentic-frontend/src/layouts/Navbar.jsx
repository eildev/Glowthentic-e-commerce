import { useEffect, useState } from "react";
import NavbarForLargeDevice from "../components/navbar/NavbarForLargeDevice";
import NavbarForSmallDevice from "../components/navbar/NavbarForSmallDevice";

const Navbar = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <div className="relative">
      <NavbarForLargeDevice />
      <NavbarForSmallDevice
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
    </div>
  );
};

export default Navbar;
