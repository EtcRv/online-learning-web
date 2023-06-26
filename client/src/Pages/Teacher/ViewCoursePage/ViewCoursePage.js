import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TeacherPageLayout from "../../../Components/Layout/TeacherPageLayout/TeacherPageLayout";
import InfoServices from "../../../Services/UserServices/InfoServices";
import { useNavigate } from "react-router-dom";
import CourseServices from "../../../Services/CourseServices/CourseServices";

const ViewCoursePage = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [courses, setCourses] = useState([]);
  const [teacherId, setTeacherId] = useState("");
  const navigate = useNavigate();

  const getAllCourses = async () => {
    const teacherInfor = await InfoServices.getInfo(
      {
        userId: user.userId,
        user_type: user.user_type,
      },
      token
    );
    console.log("teacherInfor: ", teacherInfor);

    const teacherId = teacherInfor.data.userInfor.id;
    setTeacherId(teacherId);

    const response = await CourseServices.getAllCourseOfTeacher(
      teacherId,
      token
    );
    setCourses(response.data.courses);
  };

  useState(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }

    if (user.user_type !== "teacher") {
      window.location.href = "/";
    }
    getAllCourses();
  }, []);

  const createNewCourse = async () => {
    const response = await CourseServices.createNewCourse(teacherId, token);
    const newCourseId = response.data.course.id;
    await CourseServices.updateSection(
      newCourseId,
      {
        allSections: [
          {
            id: 1.0000012,
            name: "New Section",
          },
        ],
      },
      token
    );
    navigate(`/instructor/course/${newCourseId}/manage/curriculum`);
  };

  const Course = (props) => {
    const clickEditBtn = () => {
      navigate(`/instructor/course/${props.course.id}/manage/curriculum`);
    };
    return (
      <div className="w-full border-[1px] border-zinc-600 flex">
        <img src={props.course.course_image} className="w-[200px] h-auto"></img>
        <div className="px-4 py-2 flex justify-between w-full">
          <div className="flex flex-col justify-between">
            <span className="font-bold text-xl text-black">
              {props.course.title}
            </span>
            <span className="font-bold text-sm text-black">
              {props.course.status.toUpperCase()}
            </span>
          </div>
          <div>
            <button
              className="px-2 py-2 bg-purple-500 font-bold text-white"
              onClick={clickEditBtn}
            >
              Edit course
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <TeacherPageLayout>
      <div>
        <h1>Courses</h1>
        <div className="w-full flex justify-items-end mt-4">
          <button
            className="px-2 py-2 bg-purple-500 font-bold text-white"
            onClick={createNewCourse}
          >
            New Course
          </button>
        </div>
        <div className="mt-4">
          {courses.map((course, idx) => {
            console.log("course: ", course);
            return (
              <div className="mt-4" key={idx}>
                <Course course={course} />
              </div>
            );
          })}
        </div>
      </div>
    </TeacherPageLayout>
  );
};

export default ViewCoursePage;
