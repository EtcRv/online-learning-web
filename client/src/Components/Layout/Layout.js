import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import CardCousera from "../ReUse/CardCousera/CardCousera";
import CardCouseraBuy from "../ReUse/CardCouseraBuy/CarCouseraBuy";
import Feedback from "../ReUse/Feedback/Feedback";
const Layout = () => {
  return (
    <>
    <Feedback></Feedback>
    {/* <CardCouseraBuy></CardCouseraBuy> */}
    {/* <CardCousera></CardCousera> */}
      {/* <Navbar /> */}
      {/* <Outlet /> */}
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
