import { useEffect, useState } from "react";
import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../../../store/createCourseSlice";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";
import CourseServices from "../../../Services/CourseServices/CourseServices";

const Goals = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const course_id = useSelector(
    (state) => state.createCourse.current_course_id
  );
  const [intended_learners_state, set_intended_learners_state] = useState(
    useSelector((state) => state.createCourse.intended_learners)
  );

  const [learningObject1, setLearningObject1] = useState(
    intended_learners_state.learning_object[0]
  );
  const [learningObject2, setLearningObject2] = useState(
    intended_learners_state.learning_object[1]
  );
  const [learningObject3, setLearningObject3] = useState(
    intended_learners_state.learning_object[2]
  );
  const [learningObject4, setLearningObject4] = useState(
    intended_learners_state.learning_object[3]
  );
  const [skillRequirement, setSkillRequirement] = useState(
    intended_learners_state.required_skills
  );
  const [courseFor, setCourseFor] = useState(
    intended_learners_state.course_for
  );
  const [changed, setChanged] = useState(false);
  const dispatch = useDispatch();

  const clickSaveBtn = async () => {
    const new_intended_learners = {
      learning_object: [
        learningObject1,
        learningObject2,
        learningObject3,
        learningObject4,
      ],
      required_skills: skillRequirement,
      course_for: courseFor,
    };

    await CourseServices.updateCourseInformation(
      {
        type_update: "goals",
        data: new_intended_learners,
        courseId: course_id,
      },
      token
    );

    dispatch(
      updateState({
        type: "intended_learners",
        value: new_intended_learners,
      })
    );

    // Call API to save into db
    SuccessMessage("Success", "Save successfull");
  };

  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="basis-1/4">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Intended learners</label>
            </div>
            <div className="p-8">
              <span className="text-wrap">
                The following descriptions will be publicly visible on your
                Course Landing Page and will have a direct impact on your course
                performance. These descriptions will help learners decide if
                your course is right for them.
              </span>
              <div className="mt-8">
                <label className="font-bold">
                  What will students learn in your course?
                </label>
                <br></br>
                <span>
                  You must enter at least 4 learning objectives or outcomes that
                  learners can expect to achieve after completing your course.
                </span>
                <div className="p-4 border-2 border-black mt-4 mb-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Define the roles and responsibilities of a project manager"
                    value={learningObject1}
                    onChange={(e) => {
                      setLearningObject1(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></input>
                </div>
                <div className="p-4 border-2 border-black my-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Estimate project timelines and budget"
                    value={learningObject2}
                    onChange={(e) => {
                      setLearningObject2(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></input>
                </div>
                <div className="p-4 border-2 border-black my-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Identify and manage project risks"
                    value={learningObject3}
                    onChange={(e) => {
                      setLearningObject3(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></input>
                </div>
                <div className="p-4 border-2 border-black my-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Complete a case study to manage a project from conception to completion"
                    value={learningObject4}
                    onChange={(e) => {
                      setLearningObject4(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></input>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">
                  What are the requirements or prerequisites for taking your
                  course?
                </label>
                <br></br>
                <span>
                  List the required skills, experience, tools or equipment
                  learners should have prior to taking your course. If there are
                  no requirements, use this space as an opportunity to lower the
                  barrier for beginners.
                </span>
                <div className="p-4 border-2 border-black mt-4 mb-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: No programming experience needed. You will learn everything you need to know"
                    value={skillRequirement}
                    onChange={(e) => {
                      setSkillRequirement(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></input>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">Who is this course for?</label>
                <br></br>
                <span>
                  Write a clear description of the intended learners for your
                  course who will find your course content valuable. This will
                  help you attract the right learners to your course.
                </span>
                <div className="p-4 border-2 border-black mt-4 mb-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Beginner Python developers curious about data science"
                    value={courseFor}
                    onChange={(e) => {
                      setCourseFor(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></input>
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

export default Goals;
