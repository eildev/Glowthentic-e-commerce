import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import { useState } from "react";

const MainLayouts = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      {/*--------- Header -----------*/}
      <Header setShowMobileMenu={setShowMobileMenu} />
      {/*--------- Navbar -----------*/}
      <Navbar showMobileMenu={showMobileMenu} />
      {/*--------- Outlet -----------*/}
      <Outlet />
      {/*--------- Footer -----------*/}
      <Footer />
      {/*--------- AppBar -----------*/}
      <AppBar />
    </div>
  );
};

export default MainLayouts;
