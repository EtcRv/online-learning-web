import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../Components/Layout/AdminLayout/AdminLayout";
import Card from "../../../Components/ReUse/Card/Card";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import CourseServices from "../../../Services/CourseServices/CourseServices";

const ReviewCoursePage = () => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const allCourses = await CourseServices.getDraftCourse(token);
      setCourses(allCourses.data);
    };
    getCourses();
  }, []);

  const Course = (props) => {
    const clickViewCourse = () => {
      navigate(`/course/${props.course.id}`);
    };
    const clickPublicCourse = async () => {
      await CourseServices.publicCourse(props.course.id, token);
      const newCourses = courses.map((course, idx) => {
        if (course.id !== props.course.id) return course;
      });

      const newUpdate = newCourses.filter((data) => {
        return data !== undefined;
      });
      setCourses(newUpdate);
    };
    return (
      <div className="w-full border-[1px] border-zinc-600 flex">
        <img src={props.course.course_image} className="w-[200px] h-auto"></img>
        <div className="px-4 py-2 flex justify-between w-full">
          <div className="flex flex-col justify-between">
            <span className="font-bold text-xl text-black">
              {props.course.title}
            </span>
          </div>
          <div className="flex flex-col">
            <button
              className="px-2 py-2 my-2 bg-purple-500 font-bold text-white"
              onClick={clickViewCourse}
            >
              View course
            </button>
            <button
              className="px-2 py-2 my-2 bg-purple-500 font-bold text-white"
              onClick={clickPublicCourse}
            >
              Public course
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AdminLayout>
      <Card extra={"w-full sm:overflow-auto p-4"}>
        <header className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-zinc-700 ">Courses</div>
        </header>

        <div className="mt-4">
          {courses.map((course, idx) => {
            return (
              <div className="mt-4" key={idx}>
                <Course course={course} />
              </div>
            );
          })}
        </div>
      </Card>
    </AdminLayout>
  );
};

export default ReviewCoursePage;
