import React from "react";
import FeaCop from "../../Components/UI/FeaturedTopics/FeaCop";
import SliderTop from "../../Components/UI/SliderTop/SliderTop";
import Couseras from "../../Components/UI/Couseras/Couseras";
import TopCate from "../../Components/UI/TopCategories/TopCate";
import UserPageLayout from "../../Components/Layout/UserPageLayout/UserPageLayout";

const HomePage = () => {
  return (
    <UserPageLayout>
      <SliderTop />
      <TopCate />
      <Couseras />
      <FeaCop />
    </UserPageLayout>
  );
};

export default HomePage;
