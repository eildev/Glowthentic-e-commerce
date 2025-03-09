import { useEffect, useState } from 'react';
import NavbarForLargeDevice from '../components/navbar/NavbarForLargeDevice';
import NavbarForSmallDevice from '../components/navbar/NavbarForSmallDevice';

const Navbar = ({ showMobileMenu }) => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => {
        // Sort categories to show `isButton: false` first
        const sortedData = data.sort((a, b) => a.isButton - b.isButton);
        // console.log(sortedData);
        setCategorys(sortedData);
      });
  }, []);
  return (
    <div className="relative">
      <NavbarForLargeDevice categorys={categorys} />
      <NavbarForSmallDevice showMobileMenu={showMobileMenu} categorys={categorys} />
    </div>
  );
};

export default Navbar;
