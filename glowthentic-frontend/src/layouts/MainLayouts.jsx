import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import { useState } from "react";
import ScrollTop from "../components/ScrollTop";
import OnlineChatButton from "../components/OnlineChatButton";

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
      <div className="mt-[81px] lg:mt-[185px] xl:mt-[160px]">
        {/*--------- Outlet -----------*/}
        <Outlet />
      </div>
      {/*--------- Footer -----------*/}
      <Footer />
      {/*--------- AppBar -----------*/}
      <AppBar />

      {/*--------- OnlineChatButton  -----------*/}
      <OnlineChatButton></OnlineChatButton>
      {/*---------  ScrollTop -----------*/}
      <ScrollTop />
    </div>
  );
};

export default MainLayouts;
