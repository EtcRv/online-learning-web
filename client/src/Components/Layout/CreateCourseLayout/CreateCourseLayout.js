import { useEffect, useState } from "react";
import Footer from "../../UI/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentCourseId,
  updateState,
} from "../../../store/createCourseSlice";
import CourseServices from "../../../Services/CourseServices/CourseServices";
import { useNavigate } from "react-router-dom";

const CreateCourseLayout = ({ children }) => {
  const navigate = useNavigate();
  const current_course_id = useSelector(
    (state) => state.createCourse.current_course_id
  );
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const getCourseId = () => {
    let url = document.URL;
    url = url.split("/");
    let courseId = 0;
    url.map((element, idx) => {
      if (/^\d+$/.test(element)) courseId = Number(element);
    });

    return courseId;
  };
  const [courseInfor, setCourseInfor] = useState(
    useSelector((state) => state.createCourse)
  );
  const [title, setTitle] = useState(
    useSelector((state) => state.createCourse.landing_page.course_title)
  );
  const [status, setStatus] = useState("Draft");
  const dispatch = useDispatch();
  const course_id = getCourseId();

  const callApiGetCourseData = async () => {
    try {
      const response = await CourseServices.getCourseInformation(course_id);
      setCourseInfor(response.data.course);
      setTitle(response.data.course.title);
      setStatus(response.data.course.status);
      const intended_learners = {
        learning_object: response.data.course.learning_object
          ? response.data.course.learning_object.split("\n")
          : "",
        required_skills: response.data.course.required_skills,
        course_for: response.data.course.course_for,
      };

      const landing_page = {
        course_title: response.data.course.title,
        course_sub_title: response.data.course.sub_title,
        course_description: response.data.course.course_description,
        basic_info: {
          language: response.data.course.language,
          level: response.data.course.level,
          category: response.data.course.category,
        },
        primarily_taught: response.data.course.primarily_taught,
        course_image: response.data.course.course_image,
        promotional_video: response.data.course.promotional_video,
      };

      const price = response.data.course.price;

      const course_messages = {
        welcome_message: response.data.course.welcome_message,
        congratulation_message: response.data.course.congratulation_message,
      };

      dispatch(
        updateCurrentCourseId({
          courseId: course_id,
        })
      );

      dispatch(
        updateState({
          type: "intended_learners",
          value: intended_learners,
        })
      );

      dispatch(
        updateState({
          type: "landing_page",
          value: landing_page,
        })
      );

      dispatch(
        updateState({
          type: "price",
          value: price,
        })
      );

      dispatch(
        updateState({
          type: "course_messages",
          value: course_messages,
        })
      );
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }

    if (user.user_type === "student") {
      window.location.href = "/";
    }
    if (current_course_id !== course_id) {
      // Call API lấy thông tin course mới
      callApiGetCourseData();
    }
  }, []);

  return (
    <section className="h-auto w-full">
      <div className="flex bg-black text-white justify-between px-8 py-4 items-center">
        <div className="flex">
          <button
            className="px-2 hover:text-slate-300"
            onClick={() => {
              navigate("/instructor/course");
            }}
          >
            Back to courses
          </button>
          <div className="px-2 font-bold text-xl">{title}</div>
          <div className="px-2 mx-2 bg-gray-500 text-base">{status}</div>
        </div>
        <div className="flex">
          <button>Setting</button>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="w-full h-full lg:ml-20">{children}</div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CreateCourseLayout;
