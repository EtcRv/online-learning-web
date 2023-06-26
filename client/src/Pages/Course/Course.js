import React, { useEffect, useState } from "react";
import "./Course.css";
import CourseReviewTieuBieu from "../../Components/UI/CourseReviewTieuBieu/CourseReviewTieuBieu";
import TeacherInfo from "../../Components/UI/TeacherInfo/TeacherInfo";
import CourseReview from "../../Components/UI/CourseReview/CourseReview";
import FullStar from "../../Components/ReUse/Star/FullStar";
import CourseServices from "../../Services/CourseServices/CourseServices";
import InfoServices from "../../Services/UserServices/InfoServices";
import UserPageLayout from "../../Components/Layout/UserPageLayout/UserPageLayout";
import { useSelector } from "react-redux";

const Course = () => {
  // const dataTitle = "Công nghệ Web và Dịch vụ trực tuyến";
  // const dataTitleDes =
  //   "Học và làm quen với các kỹ năng cơ bản của làm web, HTML, Javascript, CSS, Nodejs, React, . . .";
  // const dataSubscribe = 953874;
  // const dataTeacher = "Teacher";
  // const dataLanguage = ["Tiếng Anh", "Tiếng Việt"];
  // const dataLearning = [
  //   "Kiến thức cơ bản về Web",
  //   "HTML",
  //   "Javascript",
  //   "CSS",
  //   "PHP",
  //   "Nodejs",
  // ];
  // const dataPrice = "2.000.000";
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [courseInformation, setCourseInformation] = useState({});
  const [teacherInformation, setTeacherInformation] = useState({});
  const [sections, setSections] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [structOfCourse, setStructOfCourse] = useState([]);

  const getCourseId = () => {
    let url = document.URL;
    url = url.split("/");
    let courseId = 0;
    url.map((element, idx) => {
      if (/^\d+$/.test(element)) courseId = Number(element);
    });

    return courseId;
  };
  const courseId = getCourseId();

  useEffect(() => {
    const getSectionData = async () => {
      const all_sections = await CourseServices.getAllSectionOfCourse(courseId);

      setSections(all_sections.data.sections);
    };

    const getLectureData = async () => {
      const all_lectures = await CourseServices.getAllLectureOfCourse(courseId);
      setLectures(all_lectures.data.lectures);
    };
    const getCourseData = async () => {
      const response = await CourseServices.getCourseInformation(courseId);
      setCourseInformation(response.data.course);
      const teacherInfo = await InfoServices.getTeacherInfo(
        response.data.course.teacherId
      );
      setTeacherInformation(teacherInfo.data.userInfor);
    };
    getCourseData();
    getSectionData();
    getLectureData();
  }, []);

  useEffect(() => {
    let courseStruct = [];
    sections.map((section, idx) => {
      let number_of_lecture = 0;
      let allLectureInSection = {
        id: section.id,
        section_number: idx + 1,
        section_name: section.name,
        all_lectures: [],
      };

      lectures.map((lecture, idx) => {
        if (lecture.sectionId === section.id) {
          number_of_lecture += 1;

          const lecture_in_section = {
            lecture_id: lecture.id,
            lecture_number: number_of_lecture,
            lecture_name: lecture.name,
            video_url: lecture.video_url,
          };
          allLectureInSection.all_lectures.push(lecture_in_section);
        }
      });

      courseStruct.push(allLectureInSection);
    });
    setStructOfCourse(courseStruct);
  }, [lectures, sections]);

  return (
    <UserPageLayout>
      <div className="w-full h-full">
        <div className="course-courseTitle">
          <div className="flex flex-row h-full w-4/5 course-title">
            <div className="basis-3/5">
              <h1>{courseInformation.title}</h1>
              <div className="course-des">
                {courseInformation.course_description}
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div className="course-badge">Bán chạy nhất</div>
                {/* <div className="course-rate">{dataSubscribe} người đăng ký</div> */}
              </div>
              <div style={{ marginBottom: "10px" }}>
                Created by:
                <a href="#"> {teacherInformation.name}</a>
              </div>
              <div>
                Language:{" "}
                {courseInformation.language
                  ? courseInformation.language
                  : "English"}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-row h-full w-4/5 m-auto">
            <div className="basis-3/5">
              <div className="course-card">
                <div className="course-cardHeader">What you'll learn</div>
                <div className="course-cardItem">
                  <div className="grid grid-cols-2 gap-4">
                    {courseInformation.learning_object
                      ? courseInformation?.learning_object
                          .split("\n")
                          .map((item, index) => (
                            <div className="col-span-1" key={index}>
                              - {item}
                            </div>
                          ))
                      : ""}
                  </div>
                </div>
              </div>
              <div className="course-card mt-8">
                <div className="course-cardHeader">Course content:</div>
                <div className="course-cardItem">
                  Gồm có {sections.length} chương, {lectures.length} bài.
                  {structOfCourse.map((section, idx) => {
                    return (
                      <div className="mt-1" key={idx}>
                        <div className="course-listHeader">
                          {section.section_name}
                        </div>
                        <ul className="pl-5">
                          {section.all_lectures.map((lecture, idx) => {
                            return <li key={idx}>{lecture.lecture_name}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pt-6">
                <hr></hr>
                <div className="pt-4">
                  <CourseReviewTieuBieu></CourseReviewTieuBieu>
                </div>
              </div>
              <div className="pt-6">
                <hr></hr>
                <div className="pt-4">
                  <TeacherInfo
                    name={teacherInformation.name}
                    avatar={teacherInformation.avatar_url}
                    description={teacherInformation.description}
                  ></TeacherInfo>
                </div>
              </div>
              <div className="pt-8">
                <hr></hr>
                <div className="pt-2 pb-3 flex items-center font-bold text-xl gap-2">
                  <FullStar></FullStar>
                  4.7 course rating and 100K ratings
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <CourseReview></CourseReview>
                  <CourseReview></CourseReview>
                  <CourseReview></CourseReview>
                  <CourseReview></CourseReview>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course-priceCard">
          <div className="course-card">
            <img className="w-full h-60" src={courseInformation.course_image} />
            <div style={{ margin: "1rem" }}>
              <h1 style={{ paddingBottom: "0.5rem" }}>
                {courseInformation.price === 0
                  ? "Free"
                  : `${courseInformation.price} $`}
              </h1>
              <button className="course-buttonAdd">Add to cart</button>
              <button className="course-buttonBuy">Buy now</button>
              <b>Bao gồm có:</b>
              <ul className="list-disc pl-5">
                <li>14 bài</li>
                <li>Mỗi bài là một video</li>
                <li>Kèm theo đầy đủ tài liệu</li>
                <li>Đầy đủ lý thuyết và bài tập</li>
                <li>Có thể chat với người tạo ra khóa học</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default Course;
