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
import CartServices from "../../Services/CartServices/CartServices";
import SuccessMessage from "../../Components/ReUse/SuccessMessage/SuccessMessage";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Feedback from "../../Components/UI/Feedback/Feedback";
import YouTube, { YouTubeProps } from "react-youtube";

const Course = () => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [courseInformation, setCourseInformation] = useState({});
  const [teacherInformation, setTeacherInformation] = useState({});
  const [sections, setSections] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [structOfCourse, setStructOfCourse] = useState([]);
  const [inCartOrNot, setInCartOrNot] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  const [showRate, setShowRate] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const navigate = useNavigate();
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

  const showRating = () => {
    setShowRate(!showRate);
  };

  const hideRating = () => {
    setShowRate(false);
  };

  const addCourseIntoCart = async () => {
    const response = await CartServices.addCourseInCart(
      {
        userId: user.userId,
        courseId: courseId,
      },
      token
    );
    setInCartOrNot(true);
    SuccessMessage("Success", "Add Successful");
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

  useEffect(() => {
    const checkCourseBuy = async () => {
      const courses = await CourseServices.getAllCourseOfUser(user.userId, token);
      courses.data.map((course, idx) => {
        if (course.courseInformation.id == courseId) {
          setIsBuy(true);
        }
      });
    };

    const checkCourseInCart = async () => {
      const coursesInCart = await CartServices.getCourseInCart(user.userId, token);
      coursesInCart.data.map((course, idx) => {
        if (course.courseInformation.id == courseId) {
          setInCartOrNot(true);
        }
      });
    };

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
      console.log("response.data.course: ", response.data.course);
      setCourseInformation(response.data.course);
      const teacherInfo = await InfoServices.getTeacherInfo(
        response.data.course.teacherId
      );
      setTeacherInformation(teacherInfo.data.userInfor);
    };
    const getCourseReview = async () => {
      let all_reviews = await CourseServices.getFeedback(courseId);
      all_reviews.data.sort((a, b) => b.rating - a.rating);
      setAllReviews(all_reviews.data);
    };

    getCourseData();
    getSectionData();
    getLectureData();
    getCourseReview();
    checkCourseInCart();
    checkCourseBuy();
  }, []);

  useEffect(() => {
    if (courseInformation.status === "Draft" && user.user_type !== "admin") {
      navigate("/");
    }
  }, [courseInformation]);

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
              {courseInformation.sub_title && (
                <span>{courseInformation.sub_title}</span>
              )}
              <div className="course-des">
                {courseInformation.primarily_taught}
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div className="course-badge">Bán chạy nhất</div>
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
                          {`Section ${idx + 1}: ${section.section_name}`}
                        </div>
                        <ul className="pl-5">
                          {section.all_lectures.map((lecture, idx) => {
                            return (
                              <li key={idx}>{`Lecture ${idx + 1}: ${
                                lecture.lecture_name
                              }`}</li>
                            );
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
                  <span className="font-bold text-2xl">Requirements</span>
                  <ul className="pt-2 px-8 list-disc">
                    {courseInformation.required_skills && (
                      <li>{courseInformation.required_skills}</li>
                    )}
                    {!courseInformation.required_skills && (
                      <li>No requirements</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <hr></hr>
                <div className="pt-4 flex flex-col">
                  <span className="font-bold text-2xl">Description</span>
                  {courseInformation.course_description && (
                    <span>{courseInformation.course_description}</span>
                  )}
                  {!courseInformation.course_description && (
                    <span className="mt-2 ">No description</span>
                  )}
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
                {isBuy && (
                  <button
                    className="rounded p-2 bg-cyan-400 text-white font-bold my-2"
                    onClick={showRating}
                  >
                    Đánh giá khóa học này!
                  </button>
                )}
                {showRate && (
                  <div className="my-2">
                    <Feedback userId={user.userId} courseId={courseId}></Feedback>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  {allReviews.map((review, idx) => {
                    return (
                      <CourseReview data={review} key={idx}></CourseReview>
                    );
                  })}
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
            {courseInformation.promotional_video && (
              <YouTube
                opts={{ height: 240, width: 460 }}
                videoId={getVideoIdFromUrl(courseInformation.promotional_video)}
                className="w-full h-60"
                title="promotional_video"
              ></YouTube>
            )}
            {!courseInformation.promotional_video && (
              <img
                className="w-full h-60"
                src={courseInformation.course_image}
                alt=""
              />
            )}
            <div style={{ margin: "1rem" }}>
              {!isBuy && teacherInformation.userId !== user.userId && (
                <h1 style={{ paddingBottom: "0.5rem" }}>
                  {courseInformation.price === 0
                    ? "Free"
                    : `${courseInformation.price} $`}
                </h1>
              )}
              {user.user_type !== "admin" &&
                teacherInformation.userId !== user.userId &&
                inCartOrNot &&
                !isBuy && (
                  <button
                    className="course-buttonAdd"
                    onClick={() => navigate("/cart")}
                  >
                    Course is in the cart
                  </button>
                )}
              {user.user_type !== "admin" &&
                teacherInformation.userId !== user.userId &&
                !inCartOrNot &&
                !isBuy && (
                  <button
                    className="course-buttonAdd"
                    onClick={addCourseIntoCart}
                  >
                    Add to cart
                  </button>
                )}

              {user.user_type !== "admin" &&
                teacherInformation.userId !== user.userId &&
                !isBuy && (
                  <button
                    className="course-buttonBuy"
                    onClick={() => {
                      addCourseIntoCart();
                      navigate("/cart");
                    }}
                  >
                    Buy now
                  </button>
                )}

              {(user.user_type === "admin" ||
                isBuy ||
                teacherInformation.userId === user.userId) && (
                <button
                  className="course-buttonBuy"
                  onClick={() => navigate(`/coursePage/${courseId}`)}
                >
                  Watch now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default Course;
