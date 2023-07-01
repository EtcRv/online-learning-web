import React from "react";
import FeaCop from "../../Components/UI/FeaturedTopics/FeaCop";
import SliderTop from "../../Components/UI/SliderTop/SliderTop";
import Couseras from "../../Components/UI/Couseras/Couseras";
import TopCate from "../../Components/UI/TopCategories/TopCate";
import UserPageLayout from "../../Components/Layout/UserPageLayout/UserPageLayout";
import CouserasBuy from "../../Components/ReUse/CoursesBuy/CoursesBuy";

const HomePage = () => {
  return (
    <UserPageLayout>
      <SliderTop />
      <CouserasBuy/>
      <TopCate />
      <Couseras />
      <FeaCop />
    </UserPageLayout>
  );
};

export default HomePage;
