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
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div >
      {/* {isLoading && <Loading />} */}
      <RedirectTop />
      <div className="fixed top-0 left-0 w-full z-50">
        {/*--------- Header -----------*/}
        <div >

   
        <Header
          setShowMobileMenu={setShowMobileMenu}
          showMobileMenu={showMobileMenu}
          setShowSearchBar={setShowSearchBar}
          showSearchBar={showSearchBar}
          
        />
             </div>
        {/*--------- Navbar -----------*/}
        <div onClick={() => setShowSearchBar((prev) => !prev)}>
        <Navbar
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          
        />
        </div>
     
      </div>
      <div className="lg:h-[140px] h-[80px]"></div>
      <div className="lg:min-h-[calc(100vh-553px)] min-h-[calc(100vh-80px)]">
        {/*--------- Outlet -----------*/}
        <div onClick={() => setShowSearchBar((prev) => !prev)}>
        <Outlet />
        </div>
        
      </div>
      {/*--------- Footer -----------*/}
      <div onClick={() => setShowSearchBar((prev) => !prev)}>
      <Footer />
      </div>

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
