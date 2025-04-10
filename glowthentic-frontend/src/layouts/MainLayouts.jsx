import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import { useState } from "react";
import ScrollTop from "../components/ScrollTop";
import RedirectTop from "../components/RedirectTop";

const MainLayouts = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <RedirectTop />
      <div className="fixed top-0 left-0 w-full z-50">
        {/*--------- Header -----------*/}
        <Header
          setShowMobileMenu={setShowMobileMenu}
          showMobileMenu={showMobileMenu}
        />
        {/*--------- Navbar -----------*/}
        <Navbar
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </div>
      <div className="lg:h-[143px] h-[80px]"></div>
      <div className="lg:min-h-[calc(100vh-553px)] min-h-[calc(100vh-80px)]">
        {/*--------- Outlet -----------*/}
        <Outlet />
      </div>
      {/*--------- Footer -----------*/}
      <Footer />
      {/*--------- AppBar -----------*/}
      <AppBar />

      {/*--------- OnlineChatButton  -----------*/}
      {/* <OnlineChatButton></OnlineChatButton> */}
      {/*---------  ScrollTop -----------*/}
      <ScrollTop />
    </div>
  );
};

export default MainLayouts;
