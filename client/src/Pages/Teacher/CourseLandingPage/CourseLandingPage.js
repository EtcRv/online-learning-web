import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";

const countries = [
  { value: "US", name: "English" },
  { value: "VN", name: "Việt Nam" },
];

const levels = [
  "-- Select Level --",
  "Beginner Level",
  "Intermediate Level",
  "Expert Level",
  "All Level",
];

const categories = [
  "-- Select Category --",
  "Development",
  "Business",
  "Finance & Accounting",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
];

const CourseLandingPage = () => {
  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="lg:basis-1/4 hidden lg:block ">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto lg:basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Course landing page</label>
            </div>
            <div className="p-8">
              <span className="text-wrap">
                Your course landing page is crucial to your success on Udemy. If
                it’s done right, it can also help you gain visibility in search
                engines like Google. As you complete this section, think about
                creating a compelling Course Landing Page that demonstrates why
                someone would want to enroll in your course.
              </span>
              <div className="mt-8">
                <label className="font-bold">Course title</label>
                <div className="p-4 border-2 border-black mt-4 mb-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Example: Test course"
                  ></input>
                </div>
                <span className="text-xs">
                  Your title should be a mix of attention-grabbing, informative,
                  and optimized for search
                </span>
              </div>
              <div className="mt-8">
                <label className="font-bold">Course subtitle</label>
                <div className="p-4 border-2 border-black mt-4 mb-2 sm:w-full lg:w-4/5">
                  <input
                    className="w-full outline-0"
                    placeholder="Insert your course subtitle."
                  ></input>
                </div>
                <span className="text-xs">
                  Use 1 or 2 related keywords, and mention 3-4 of the most
                  important areas that you've covered during your course.
                </span>
              </div>
              <div className="mt-8">
                <label className="font-bold">Course description</label>
                <div className="p-4 border-2 border-black mt-4 mb-2 sm:w-full lg:w-4/5">
                  <textarea
                    className="px-2 py-2 bg-white h-full w-full outline-0"
                    placeholder="Insert your course description."
                    // value={description}
                    // onChange={(e) => setDescription(e.currentTarget.value)}
                  ></textarea>
                </div>
                <span className="text-xs">
                  Description should have minimum 200 words.
                </span>
              </div>
              <div className="mt-8">
                <label className="font-bold">Basic info</label>
                <div className="flex justify-between">
                  <select className="border-2 border-black py-2 pl-2 pr-8">
                    {countries.map((item, idx) => (
                      <option value={item.value} key={idx}>
                        {item.name + " (" + item.value + ")"}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border-2 border-black py-2 pl-2 pr-8"
                    defaultValue={"-- Select Level --"}
                  >
                    {levels.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select className="border-2 border-black py-2 pl-2 pr-8">
                    {categories.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">
                  What is primarily taught in your course?
                </label>
                <div className="p-4 border-2 border-black mt-4 mb-2 w-3/5">
                  <input
                    className="w-full outline-0"
                    placeholder="e.g. Landscape Photography"
                  ></input>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">Course image</label>
                <div className="flex">
                  <img
                    src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                    className="w-auto h-56"
                  />
                  <div className="px-4">
                    <span>
                      Upload your course image here. It must meet our course
                      image quality standards to be accepted. Important
                      guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no
                      text on the image.
                    </span>
                    <input
                      className="w-full outline-0 p-4 border-2 border-black mt-4 mb-2 w-3/5"
                      placeholder="Image URL"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">Promotional video</label>
                <div className="flex">
                  <img
                    src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                    className="w-auto h-56"
                  />
                  <div className="px-4">
                    <span>
                      Your promo video is a quick and compelling way for
                      students to preview what they’ll learn in your course.
                      Students considering your course are more likely to enroll
                      if your promo video is well-made.
                    </span>
                    <input
                      className="w-full outline-0 p-4 border-2 border-black mt-4 mb-2 w-3/5"
                      placeholder="Video URL"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default CourseLandingPage;
