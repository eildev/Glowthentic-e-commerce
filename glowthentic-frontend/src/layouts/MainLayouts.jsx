import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import { useState } from "react";
import ScrollTop from "../components/ScrollTop";
import RedirectTop from "../components/RedirectTop";
import TrackPageViews from "../components/TrackPageViews";

const MainLayouts = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      {/* <TrackPageViews /> */}
      <RedirectTop />
      <div className="fixed top-0 left-0 w-full z-50">
        {/*--------- Header -----------*/}
        <div>
          <Header
            setShowMobileMenu={setShowMobileMenu}
            showMobileMenu={showMobileMenu}
            setShowSearchBar={setShowSearchBar}
            showSearchBar={showSearchBar}
          />
        </div>
        {/*--------- Navbar -----------*/}
        <div>
          <Navbar
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        </div>
      </div>
      <div className="lg:h-[140px] h-[80px]"></div>
      <div className="lg:min-h-[calc(100vh-496px)] min-h-[calc(100vh-80px)]">
        {/*--------- Outlet -----------*/}
        <Outlet />
      </div>
      {/*--------- Footer -----------*/}
      <Footer />
      {/*--------- AppBar -----------*/}
      <AppBar />
      {/*--------- ScrollTop -----------*/}
      <ScrollTop />
    </div>
  );
};

export default MainLayouts;
