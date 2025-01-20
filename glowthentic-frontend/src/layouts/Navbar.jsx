import { useEffect, useState } from 'react';
import NavbarForLargeDevice from '../components/navbar/NavbarForLargeDevice';
import NavbarForSmallDevice from '../components/navbar/NavbarForSmallDevice';

const Navbar = ({ showMobileMenu }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => {
        // Sort categories to show `isButton: false` first
        const sortedData = data.sort((a, b) => a.isButton - b.isButton);
        setCategory(sortedData);
      });
  }, []);
  return (
    <div className="relative">
      <NavbarForLargeDevice category={category} />
      <NavbarForSmallDevice showMobileMenu={showMobileMenu} category={category} />
    </div>
  );
};

export default Navbar;
