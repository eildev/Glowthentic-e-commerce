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
import { useGetUserQuery } from "../redux/features/api/auth/authApi";
import Cookies from "js-cookie";
import { loginSuccess, restoreUser } from "../redux/features/slice/authSlice";

const MainLayouts = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { data: userData, isSuccess } = useGetUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (isSuccess && userData) {
      dispatch(restoreUser(userData));
    }
  }, [isSuccess, userData, dispatch]);

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken && !token) {
      dispatch(loginSuccess({ data: { token: storedToken } }));
    }
  }, [dispatch, token]);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.app.loading);

  // useEffect(() => {
  //   // Simulate loading delay or actual data fetching
  //   const timer = setTimeout(() => dispatch(stopLoading(), 2000));
  //   return () => clearTimeout(timer);
  // }, [dispatch]);
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
        <Navbar showMobileMenu={showMobileMenu} />
      </div>
      <div className="lg:h-[161px] h-[80px]"></div>
      <div className="lg:min-h-[calc(100vh-553px)] min-h-[calc(100vh-80px)]">
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
