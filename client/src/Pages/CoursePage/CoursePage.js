import React, { useState, useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import { useParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseServices from "../../Services/CourseServices/CourseServices";

const CoursePage = () => {
  const { courseId } = useParams();
  const isLogin = useSelector((state) => state.user.isLogin);
  const token = useSelector((state) => state.user.token);
  const [sections, setSections] = useState([]);
  const [lectureVideoId, setLectureVideoId] = useState("");

  // Gọi hàm fetchData để lấy dữ liệu
  useEffect(() => {
    const fetchData = async (courseId, token) => {
      try {
        const sectionsData = await CourseServices.getAllSectionOfCourse(
          courseId
        );

        let newSections = [];

        for (const section of sectionsData.data.sections) {
          const lecturesBySectionId =
            await CourseServices.getAllLectureOfCourse(courseId);
          const lectures = lecturesBySectionId.data.lectures.filter(
            (lecture) => lecture.sectionId === section.id
          );

          newSections.push({
            ...section,
            lectures,
          });
        }
        console.log("newSections: ", newSections);
        setSections(newSections);
        if (sections.length > 0) {
          setLectureVideoId(
            getVideoIdFromUrl(sections[0].lectures[0].video_url)
          );
        }
        // Sử dụng mảng sections chứa dữ liệu đã tích hợp
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(courseId, token);
  }, []);

  const sectionsNew = [
    {
      id: 1,
      name: "Section 1",
      courseId: 1,
      lectures: [
        {
          id: 1,
          name: "Lecture 1",
          video_url: "https://youtu.be/E7S6zyXYe7M",
          courseId: 1,
          sectionId: 1,
        },
        {
          id: 2,
          name: "Lecture 2",
          video_url: "https://youtu.be/10Ox9ZBIq1c",
          courseId: 1,
          sectionId: 1,
        },
        // Các lecture khác trong section 1
      ],
    },
    {
      id: 2,
      name: "Section 2",
      courseId: 1,
      lectures: [
        {
          id: 3,
          name: "Lecture 3",
          video_url: "https://youtu.be/DJ3uXl5ZgOQ",
          courseId: 1,
          sectionId: 2,
        },
        {
          id: 4,
          name: "Lecture 4",
          video_url: "https://youtu.be/DJ3uXl5ZgOQ",
          courseId: 1,
          sectionId: 2,
        },
        // Các lecture khác trong section 2
      ],
    },
    // Các section khác của khóa học
    {
      id: 3,
      name: "Section 3",
      courseId: 1,
      lectures: [
        {
          id: 5,
          name: "Lecture 5",
          video_url: "https://example.com/lecture5",
          courseId: 1,
          sectionId: 3,
        },
        {
          id: 6,
          name: "Lecture 6",
          video_url: "https://example.com/lecture6",
          courseId: 1,
          sectionId: 3,
        },
        // Các lecture khác trong section 3
      ],
    },
    {
      id: 4,
      name: "Section 4",
      courseId: 1,
      lectures: [
        {
          id: 7,
          name: "Lecture 7",
          video_url: "https://example.com/lecture7",
          courseId: 1,
          sectionId: 4,
        },
        {
          id: 8,
          name: "Lecture 8",
          video_url: "https://example.com/lecture8",
          courseId: 1,
          sectionId: 4,
        },
        {
          id: 9,
          name: "Lecture 8",
          video_url: "https://example.com/lecture8",
          courseId: 1,
          sectionId: 4,
        },
        {
          id: 10,
          name: "Lecture 8",
          video_url: "https://example.com/lecture8",
          courseId: 1,
          sectionId: 4,
        },
        {
          id: 11,
          name: "Lecture 8",
          video_url: "https://example.com/lecture8",
          courseId: 1,
          sectionId: 4,
        },
        // Các lecture khác trong section 4
      ],
    },
  ];

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

  const lessons = [
    { id: 1, title: "Bài học 1", videoUrl: "https://youtu.be/E7S6zyXYe7M" },
    { id: 2, title: "Bài học 2", videoUrl: "https://youtu.be/E7S6zyXYe7M" },
    { id: 3, title: "Bài học 3", videoUrl: "https://youtu.be/E7S6zyXYe7M" },
  ];
  const opts = {
    height: "500",
    width: "100%",

    playerVars: {
      // Các tham số playerVars nếu cần
    },
  };

  const [selectedSubTitles, setSelectedSubTitles] = useState([]);

  const toggleSubTitle = (sectionIndex, subTitleIndex) => {
    // Kiểm tra nếu sectionIndex và subTitleIndex hợp lệ
    if (
      sectionIndex >= 0 &&
      sectionIndex < sections.length &&
      subTitleIndex >= 0 &&
      subTitleIndex < sections[sectionIndex].lectures.length
    ) {
      // Lấy giá trị video_url từ sections
      const selectedLecture = sections[sectionIndex].lectures[subTitleIndex];

      if (selectedLecture) {
        // Cập nhật selectedLesson với videoId mới
        setLectureVideoId(getVideoIdFromUrl(selectedLecture.video_url));
      }
    }

    setSelectedSubTitles((prevSelectedSubTitles) => {
      const isSelected = prevSelectedSubTitles.some(
        ([sIndex, subIndex]) =>
          sIndex === sectionIndex && subIndex === subTitleIndex
      );

      if (isSelected) {
        // Nếu bài giảng đã được chọn trước đó, hủy chọn nó
        return prevSelectedSubTitles.filter(
          ([sIndex, subIndex]) =>
            sIndex !== sectionIndex || subIndex !== subTitleIndex
        );
      } else {
        // Tạo một bản sao của prevSelectedSubTitles
        const updatedSelectedSubTitles = [...prevSelectedSubTitles];

        // Xác định xem section đã được chọn hay chưa
        const isSectionSelected = updatedSelectedSubTitles.some(
          ([sIndex]) => sIndex === sectionIndex
        );

        // Nếu section đã được chọn, hủy chọn tất cả các bài giảng của nó
        if (isSectionSelected) {
          updatedSelectedSubTitles.forEach(([sIndex, subIndex], index) => {
            if (sIndex === sectionIndex) {
              updatedSelectedSubTitles.splice(index, 1);
            }
          });
        }

        // Thêm bài giảng mới vào danh sách chọn
        updatedSelectedSubTitles.push([sectionIndex, subTitleIndex]);

        return updatedSelectedSubTitles;
      }
    });
  };

  return (
    <>
      <Header></Header>
      <div className="flex">
        <div className="w-[70%] ml-">
          <YouTube
            opts={opts}
            videoId={lectureVideoId}
            //  id={lessons[0].id}
            //  title={lessons[0].title}
            className=" w-full h-full m-auto"
          />
          {courseId}
        </div>
        <div className="w-[30%]  max-h-[500px] overflow-y-auto">
          {sections.map((section, sectionIndex) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSubTitle(sectionIndex, null)}
                className="text-black bg-[#f7f9fa] flex font-medium text-sm px-4 py-2.5 text-center items-center w-full"
                type="button"
              >
                <span className="pr-[2px]">{section.name}</span>
                {selectedSubTitles.some(
                  ([sIndex, _]) => sIndex === sectionIndex
                ) ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </button>
              {selectedSubTitles.some(
                ([sIndex, _]) => sIndex === sectionIndex
              ) && (
                <div
                  id="dropdown"
                  className="z-10 bg-white w-full divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="pb-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {section.lectures.map((lecture, lectureIndex) => (
                      <li key={lecture.id}>
                        <a
                          href="" //{lecture.video_url}
                          className={`block px-4 py-2 hover:bg-[#d1d7dc] ${
                            selectedSubTitles.some(
                              ([sIndex, subIndex]) =>
                                sIndex === sectionIndex &&
                                subIndex === lectureIndex
                            )
                              ? "font-semibold bg-[#d1d7dc]"
                              : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleSubTitle(sectionIndex, lectureIndex);
                          }}
                        >
                          {lecture.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CoursePage;
