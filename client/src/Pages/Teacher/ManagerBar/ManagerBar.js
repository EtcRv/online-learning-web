import { useNavigate } from "react-router-dom";

const ManagerBar = () => {
  const navigate = useNavigate();

  let url = document.URL;
  url = url.split("/");
  const activePage = url[url.length - 1];
  const courseId = url[url.length - 3];

  const changePage = (pageName) => {
    if (pageName === "goals")
      navigate(`/instructor/course/${courseId}/manage/goals`);
    else if (pageName === "course-structure")
      navigate(`/instructor/course/${courseId}/manage/course-structure`);
    else if (pageName === "setup")
      navigate(`/instructor/course/${courseId}/manage/setup`);
    else if (pageName === "film")
      navigate(`/instructor/course/${courseId}/manage/film`);
    else if (pageName === "curriculum")
      navigate(`/instructor/course/${courseId}/manage/curriculum`);
    else if (pageName === "basics")
      navigate(`/instructor/course/${courseId}/manage/basics`);
    else if (pageName === "pricing")
      navigate(`/instructor/course/${courseId}/manage/pricing`);
    else if (pageName === "messages")
      navigate(`/instructor/course/${courseId}/manage/messages`);
  };

  return (
    <div>
      <div className="my-6">
        <label className="font-bold my-4">Plan your course</label>
        <div>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "goals"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("goals")}
          >
            <div
              className={`border-2 border-black rounded-full w-5 h-5 mx-2 `}
            ></div>
            <div>Intended learners</div>
          </button>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "course-structure"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("course-structure")}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 mx-2"></div>
            <div>Course structure</div>
          </button>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "setup"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("setup")}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 mx-2"></div>
            <div>Setup & test video</div>
          </button>
        </div>
      </div>
      <div className="my-6">
        <label className="font-bold my-4">Create your content</label>
        <div>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "film"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("film")}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 mx-2"></div>
            <div>Film & edit</div>
          </button>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "curriculum"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("curriculum")}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 mx-2"></div>
            <div>Curriculum</div>
          </button>
        </div>
      </div>
      <div className="my-6">
        <label className="font-bold my-4">Publish your course</label>
        <div>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "basics"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("basics")}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 mx-2"></div>
            <div>Course landing page</div>
          </button>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "pricing"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("pricing")}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 mx-2"></div>
            <div>Price</div>
          </button>
          <button
            className={`flex items-center py-2 px-4 ${
              activePage === "messages"
                ? "border-l-4 border-black"
                : "border-l-4 border-transparent"
            }`}
            onClick={() => changePage("messages")}
          >
            <div className="border-2 border-black rounded-full w-5 h-5 mx-2"></div>
            <div>Course messages</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerBar;
