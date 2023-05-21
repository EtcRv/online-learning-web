import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import CourseInCart from "../ReUse/CourseInCart/CourseInCart";
import Course from "../../Pages/Course/Course";
import CartCouseras from "../../Pages/CartCouseras/CartCouseras";


const Layout = () => {

  return (
    <>
  
      <Header />
      <Outlet />  
      {/* <CourseInCart></CourseInCart> */}
      <Footer/>
    </>
  );
};

export default Layout;
