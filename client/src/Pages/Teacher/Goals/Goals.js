import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";

const Goals = () => {
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
                  ></input>
                </div>
                <div className="p-4 border-2 border-black my-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Estimate project timelines and budget"
                  ></input>
                </div>
                <div className="p-4 border-2 border-black my-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Identify and manage project risks"
                  ></input>
                </div>
                <div className="p-4 border-2 border-black my-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Complete a case study to manage a project from conception to completion"
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
                  ></input>
                </div>
              </div>
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default Goals;
