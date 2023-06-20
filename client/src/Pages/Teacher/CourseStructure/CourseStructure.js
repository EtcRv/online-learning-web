import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";

const courseStructureTips = [
  {
    title: "Start with your goals.",
    content:
      "Setting goals for what learners will accomplish in your course (also known as learning objectives) at the beginning will help you determine what content to include in your course and how you will teach the content to help your learners achieve the goals.",
  },
  {
    title: "Create an outline.",
    content:
      "Decide what skills you’ll teach and how you’ll teach them. Group related lectures into sections. Each section should have at least 3 lectures, and include at least one assignment or practical activity.",
  },
  {
    title: "Introduce yourself and create momentum.",
    content:
      "People online want to start learning quickly. Make an introduction section that gives learners something to be excited about in the first 10 minutes.",
  },
  {
    title: "Sections have a clear learning objective.",
    content:
      "Introduce each section by describing the section's goal and why it’s important. Give lectures and sections titles that reflect their content and have a logical flow.",
  },
  {
    title: "Lectures cover one concept.",
    content:
      "A good lecture length is 2-7 minutes to keep students interested and help them study in short bursts. Cover a single topic in each lecture so learners can easily find and re-watch them later.",
  },
  {
    title: "Mix and match your lecture types.",
    content:
      "Alternate between filming yourself, your screen, and slides or other visuals. Showing yourself can help learners feel connected.",
  },
  {
    title: "Practice activities create hands-on learning.",
    content:
      "Help learners apply your lessons to their real world with projects, assignments, coding exercises, or worksheets.",
  },
];

const CourseStructure = () => {
  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="basis-1/4">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Course structure</label>
            </div>
            <div className="p-8">
              <span className="font-bold text-2xl">Tips</span>
              {courseStructureTips.map((item, idx) => {
                return (
                  <div className="mt-8" key={idx}>
                    <label className="font-bold">{item.title}</label>
                    <br></br>
                    <span>{item.content}</span>
                  </div>
                );
              })}
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default CourseStructure;
