import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import { useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import RedirectTop from "../components/RedirectTop";
import TrackPageViews from "../components/TrackPageViews";
import UserTracker from "./UserTracker";
import { useDispatch, useSelector } from "react-redux";
import { resetScrollTrigger } from "../redux/features/slice/scrollSlice";

const MainLayouts = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  // scroll top functionality implement
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { shouldScrollToTop } = useSelector((state) => state.scroll);

  useEffect(() => {
    if (shouldScrollToTop || pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (shouldScrollToTop) {
        dispatch(resetScrollTrigger());
      }
    }
  }, [pathname, shouldScrollToTop, dispatch]);

  return (
    <div>
      <RedirectTop />
      <UserTracker />
      <TrackPageViews />
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
