import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";

const CourseMessages = () => {
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
                    // value={description}
                    // onChange={(e) => setDescription(e.currentTarget.value)}
                  ></textarea>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">Congratulations Message</label>
                <div className="p-4 border-2 border-black mt-4 mb-2 w-full">
                  <textarea
                    className="px-2 py-2 bg-white h-full w-full outline-0"
                    placeholder=""
                    // value={description}
                    // onChange={(e) => setDescription(e.currentTarget.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default CourseMessages;
