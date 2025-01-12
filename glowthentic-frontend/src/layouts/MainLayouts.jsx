import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import { useState } from "react";

const MainLayouts = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <div>
      <Header
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
      <Navbar />
      <Outlet />
      <Footer />
      <AppBar />
    </div>
  );
};

export default MainLayouts;
