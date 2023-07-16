import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../../../store/createCourseSlice";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";
import CourseServices from "../../../Services/CourseServices/CourseServices";
import YouTube, { YouTubeProps } from "react-youtube";
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
  "Design",
  "Marketing",
  "IT & Software",
  "Business",
  "Personal Development",
  "Photography",
  "Music",
];

const CourseLandingPage = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const course_id = useSelector(
    (state) => state.createCourse.current_course_id
  );
  const [landing_page_state, set_landing_page_state] = useState(
    useSelector((state) => state.createCourse.landing_page)
  );

  const [title, setTitle] = useState(landing_page_state.course_title);
  const [subtitle, setSubTitle] = useState(landing_page_state.course_sub_title);
  const [description, setDescription] = useState(
    landing_page_state.course_description
  );
  const [language, setLanguage] = useState(
    landing_page_state.basic_info.language
  );
  const [level, setLevel] = useState(landing_page_state.basic_info.level);
  const [category, setCategory] = useState(
    landing_page_state.basic_info.category
  );
  const [primarilyTaught, setPrimarilyTaught] = useState(
    landing_page_state.primarily_taught
  );
  const [imageURL, setImageURL] = useState(landing_page_state.course_image);
  const [videoURL, setVideoURL] = useState(
    landing_page_state.promotional_video
  );
  const [changed, setChanged] = useState(false);
  const dispatch = useDispatch();

  const clickSaveBtn = async () => {
    const new_landing_page = {
      course_title: title,
      course_sub_title: subtitle,
      course_description: description,
      basic_info: {
        language: language,
        level: level,
        category: category,
      },
      primarily_taught: primarilyTaught,
      course_image: imageURL,
      promotional_video: videoURL,
    };

    await CourseServices.updateCourseInformation(
      {
        type_update: "landing_page",
        data: new_landing_page,
        courseId: course_id,
      },
      token
    );

    dispatch(
      updateState({
        type: "landing_page",
        value: new_landing_page,
      })
    );

    // Call API to save into db
    SuccessMessage("Success", "Save successfull");
  };

  const getVideoIdFromUrl = (videoUrl) => {
    let videoId = "";

    // Kiểm tra các định dạng URL phổ biến của YouTube
    if (videoUrl.includes("youtu.be")) {
      // Định dạng URL: https://youtu.be/{videoId}
      videoId = videoUrl.split("/").pop();
    } else if (videoUrl.includes("youtube.com")) {
      // Định dạng URL: https://www.youtube.com/watch?v={videoId}
      const urlParams = new URLSearchParams(new URL(videoUrl).search);
      videoId = urlParams.get("v");
    }

    return videoId;
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
                    value={title}
                    onChange={(e) => {
                      setTitle(e.currentTarget.value);
                      setChanged(true);
                    }}
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
                    value={subtitle}
                    onChange={(e) => {
                      setSubTitle(e.currentTarget.value);
                      setChanged(true);
                    }}
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
                    value={description}
                    onChange={(e) => {
                      setDescription(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></textarea>
                </div>
                <span className="text-xs">
                  Description should have minimum 200 words.
                </span>
              </div>
              <div className="mt-8">
                <label className="font-bold">Basic info</label>
                <div className="flex justify-between">
                  <select
                    className="border-2 border-black py-2 pl-2 pr-8"
                    defaultValue={language}
                    onChange={(e) => {
                      setLanguage(e.currentTarget.value);
                      setChanged(true);
                    }}
                  >
                    {countries.map((item, idx) => (
                      <option value={item.value} key={idx}>
                        {item.name + " (" + item.value + ")"}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border-2 border-black py-2 pl-2 pr-8"
                    defaultValue={level}
                    onChange={(e) => {
                      setLevel(e.currentTarget.value);
                      setChanged(true);
                    }}
                  >
                    {levels.map((item, idx) => (
                      <option value={item} key={idx}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border-2 border-black py-2 pl-2 pr-8"
                    defaultValue={category}
                    onChange={(e) => {
                      setCategory(e.currentTarget.value);
                      setChanged(true);
                    }}
                  >
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
                    value={primarilyTaught}
                    onChange={(e) => {
                      setPrimarilyTaught(e.currentTarget.value);
                      setChanged(true);
                    }}
                  ></input>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">Course image</label>
                <div className="flex">
                  {!imageURL && (
                    <img
                      src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                      className="w-auto h-56"
                    />
                  )}
                  {imageURL && <img src={imageURL} className="w-auto h-56" />}

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
                      value={imageURL}
                      onChange={(e) => {
                        setImageURL(e.currentTarget.value);
                        setChanged(true);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <label className="font-bold">Promotional video</label>
                <div className="flex">
                  {videoURL && (
                    <div className="w-auto h-56">
                      <YouTube
                        opts={{ height: 224, width: 398 }}
                        videoId={getVideoIdFromUrl(videoURL)}
                        className=" w-full h-full m-auto"
                      ></YouTube>
                    </div>
                  )}

                  {!videoURL && (
                    <img
                      src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                      className="w-[398px] h-56"
                    />
                  )}
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
                      value={videoURL}
                      onChange={(e) => {
                        setVideoURL(e.currentTarget.value);
                        setChanged(true);
                      }}
                    ></input>
                  </div>
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

export default CourseLandingPage;
