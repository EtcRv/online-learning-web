import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCousera from "../../ReUse/CardCousera/CardCousera";
import "./Couseras.css";
import { useSelector } from "react-redux";
import CourseServices from "../../../Services/CourseServices/CourseServices";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Couseras() {
  const token = useSelector((state) => state.user.token);
  const [courses, setCourses] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CourseServices.getAllCourse();
        const coursesData = response.data.courses;

        setCourses(coursesData);
      } catch (error) {
        console.error("Failed when getting all courses:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
  };
  return (
    <>
      <div className="couseras mx-[35px] px-[24px] mt-[64px] mb-[96px]">
        <h2 className="mb-[16px] mx-[45px]">{t("Students are viewing")}</h2>

        <div className="mx-[45px]">
          <Slider {...settings}>
            {courses.map(
              (
                item,
                idx //data=courses
              ) => (
                <div className="" key={idx}>
                  <NavLink to={`/course/${item.id}`} activeClassName="active">
                    <CardCousera data={item}></CardCousera>
                  </NavLink>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </>
  );
}
