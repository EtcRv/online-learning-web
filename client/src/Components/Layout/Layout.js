import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
