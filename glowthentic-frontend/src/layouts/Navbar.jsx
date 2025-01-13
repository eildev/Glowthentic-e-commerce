import NavbarForLargeDevice from '../components/navbar/NavbarForLargeDevice';
import NavbarForSmallDevice from '../components/navbar/NavbarForSmallDevice';

const Navbar = ({ showMobileMenu }) => {
  return (
    <div className="relative">
      <NavbarForLargeDevice />
      <NavbarForSmallDevice showMobileMenu={showMobileMenu} />
    </div>
  );
};

export default Navbar;
