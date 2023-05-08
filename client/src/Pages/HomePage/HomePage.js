import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  console.log("user: ", user);
  return <h1>This is homepage</h1>;
};

export default HomePage;
