import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCousera from "../../ReUse/CardCousera/CardCousera";
import "./Couseras.css";
import { useSelector } from "react-redux";
import CourseServices from "../../../Services/CourseServices/CourseServices";
import { NavLink } from "react-router-dom";

const data = [
  {
    courseId: 1,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 2,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 3,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 4,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 5,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 6,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 7,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 8,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseId: 9,
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
];

export default function Couseras() {
  const token = useSelector((state) => state.user.token);
  const [courses, setCourses] = useState([]);

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
        <h2 className="mb-[16px] mx-[45px]">Students are viewing</h2>
        <Slider {...settings}>
          {courses.map(
            (
              item,
              idx //data=courses
            ) => (
              <div className="m-auto" key={idx}>
                <NavLink to={`/course/${item.id}`} activeClassName="active">
                  <CardCousera data={item}></CardCousera>
                </NavLink>
              </div>
            )
          )}
        </Slider>
      </div>
    </>
  );
}
