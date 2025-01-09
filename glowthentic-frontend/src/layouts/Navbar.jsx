import NavbarForLargeDevice from "../components/NavbarForLargeDevice";
import NavbarForSmallDevice from "../components/NavbarForSmallDevice";

const Navbar = () => {
  return (
    <div>
      <NavbarForLargeDevice />
      <NavbarForSmallDevice />
    </div>
  );
};

export default Navbar;
