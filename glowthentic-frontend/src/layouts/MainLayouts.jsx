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
      <div className="fixed top-0 left-0 w-full z-50">
        {/*--------- Header -----------*/}
        <Header setShowMobileMenu={setShowMobileMenu} />
        {/*--------- Navbar -----------*/}
        <Navbar showMobileMenu={showMobileMenu} />
      </div>
      <div className="mt-40">
        {/*--------- Outlet -----------*/}
        <Outlet />
      </div>
      {/*--------- Footer -----------*/}
      <Footer />
      {/*--------- AppBar -----------*/}
      <AppBar />
    </div>
  );
};

export default MainLayouts;
