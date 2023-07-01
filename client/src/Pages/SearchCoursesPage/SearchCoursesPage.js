import React, { useEffect, useState } from "react";
import CardCousera from "../../Components/ReUse/CardCousera/CardCousera";
import { NavLink } from "react-router-dom";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import CourseServices from "../../Services/CourseServices/CourseServices";
import { useParams } from "react-router-dom";

const SearchCoursesPage = () => {
const { title }= useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async (title) => {
      try {
        const response = await CourseServices.getAllCourseOfTitle(title);
        const coursesData = response.data;
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed when getting all courses:", error);
      }
    };

    fetchData(title);
  }, []); // Empty dependency array to run only once on component mount



  return (
    <>
    <Header></Header>
    <div className="">
      <h1 className="text-3xl font-bold mb-[20px] mt-[40px]">Search Results</h1>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course) => (
            <NavLink to={`/course/${course.id}`} key={course.id}>
              <CardCousera data={course} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default SearchCoursesPage;
