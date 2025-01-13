import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./Appbar";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      {/* <AppBar /> */}
    </div>
  );
};

export default MainLayouts;
