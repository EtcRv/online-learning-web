import React from "react";
import FeaCop from "../../Components/UI/FeaturedTopics/FeaCop";
import SliderTop from "../../Components/UI/SliderTop/SliderTop";
import Couseras from "../../Components/UI/Couseras/Couseras";
import TopCate from "../../Components/UI/TopCategories/TopCate";
const HomePage = () => {
  return (
    <>
      <SliderTop />
      <TopCate />
      <Couseras />
      <FeaCop />
    </>
  );
};

export default HomePage;
