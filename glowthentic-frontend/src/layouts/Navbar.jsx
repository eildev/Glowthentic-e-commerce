import NavbarForLargeDevice from "../components/NavbarForLargeDevice";
import NavbarForSmallDevice from "../components/NavbarForSmallDevice";

const Navbar = ({ showMobileMenu }) => {
  return (
    <div className="relative">
      <NavbarForLargeDevice />
      <NavbarForSmallDevice showMobileMenu={showMobileMenu} />
    </div>
  );
};

export default Navbar;
