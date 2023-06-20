import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../../../store/createCourseSlice";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";
import CourseServices from "../../../Services/CourseServices/CourseServices";

const CourseMessages = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const course_id = useSelector(
    (state) => state.createCourse.current_course_id
  );
  const [course_messages_state, set_course_messages_state] = useState(
    useSelector((state) => state.createCourse.course_messages)
  );

  const [welcomeMessage, setWelcomeMessage] = useState(
    course_messages_state.welcome_message
  );
  const [congratulationMessage, setCongratulationMessage] = useState(
    course_messages_state.congratulation_message
  );
  const [changed, setChanged] = useState(false);
  const dispatch = useDispatch();

  const clickSaveBtn = async () => {
    const course_messages = {
      welcome_message: welcomeMessage,
      congratulation_message: congratulationMessage,
    };

    await CourseServices.updateCourseInformation(
      {
        type_update: "course_messages",
        data: course_messages,
        courseId: course_id,
      },
      token
    );

    dispatch(
      updateState({
        type: "course_messages",
        value: course_messages,
      })
    );

    // Call API to save into db
    SuccessMessage("Success", "Save successfull");
  };

  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="lg:basis-1/4 hidden lg:block ">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto lg:basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Course messages</label>
            </div>
            <div className="p-8">
              <span className="text-wrap">
                Write messages to your students (optional) that will be sent
                automatically when they join or complete your course to
                encourage students to engage with course content. If you do not
                wish to send a welcome or congratulations message, leave the
                text box blank.
              </span>
              <div className="mt-8">
                <label className="font-bold">Welcome Message</label>
                <div className="p-4 border-2 border-black mt-4 mb-2 w-full">
                  <textarea
                    className="px-2 py-2 bg-white h-full w-full outline-0"
                    placeholder=""
                    value={welcomeMessage}
                    onChange={(e) => {
                      setWelcomeMessage(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">Congratulations Message</label>
                <div className="p-4 border-2 border-black mt-4 mb-2 w-full">
                  <textarea
                    className="px-2 py-2 bg-white h-full w-full outline-0"
                    placeholder=""
                    value={congratulationMessage}
                    onChange={(e) => {
                      setCongratulationMessage(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></textarea>
                </div>
              </div>
              <button
                disabled={!changed}
                className={
                  !changed
                    ? "bg-gray-500 mt-4 mx-2 px-6 py-2 font-bold text-white"
                    : "bg-indigo-500 mt-4 mx-2 px-6 py-2 font-bold text-white"
                }
                onClick={clickSaveBtn}
              >
                Save
              </button>
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default CourseMessages;
