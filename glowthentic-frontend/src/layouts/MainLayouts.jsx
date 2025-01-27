import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import { useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import OnlineChatButton from "../components/OnlineChatButton";
import { useDispatch, useSelector } from "react-redux";
import { stopLoading } from "../redux/features/slice/loadingSlice";
import Loading from "../components/spinners/Loading";
import RedirectTop from "../components/RedirectTop";
import { HelmetProvider } from "react-helmet-async";

const MainLayouts = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.app.loading);

  // useEffect(() => {
  //   // Simulate loading delay or actual data fetching
  //   const timer = setTimeout(() => dispatch(stopLoading(), 2000));
  //   return () => clearTimeout(timer);
  // }, [dispatch]);
  return (
    <HelmetProvider>
      <div>
        {/* {isLoading && <Loading />} */}
        <RedirectTop />
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
    </HelmetProvider>
  );
};

export default MainLayouts;
