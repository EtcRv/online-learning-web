import React from "react";
import "./Course.css";
import CourseReviewTieuBieu from "../../Components/UI/CourseReviewTieuBieu/CourseReviewTieuBieu";
import TeacherInfo from "../../Components/UI/TeacherInfo/TeacherInfo";
import CourseReview from "../../Components/UI/CourseReview/CourseReview";
import FullStar from "../../Components/ReUse/Star/FullStar";

const Course = (props) => {
    const {id, name, price, status, type, description, rating, sale, teacherId} = props;

    const dataTitle = "Công nghệ Web và Dịch vụ trực tuyến";
    const dataTitleDes = "Học và làm quen với các kỹ năng cơ bản của làm web, HTML, Javascript, CSS, Nodejs, React, . . .";
    const dataSubscribe = 953874;
    const dataTeacher = "Teacher";
    const dataLanguage = ["Tiếng Anh", "Tiếng Việt"];
    const dataLearning = ["Kiến thức cơ bản về Web", "HTML", "Javascript", "CSS", "PHP", "Nodejs"];
    const dataPrice = "2.000.000";

    return (
        <div className="w-screen h-screen">
            <div className="course-courseTitle">
                <div className="flex flex-row h-full w-4/5 course-title">
                    <div className="basis-3/5">
                        <h1>{dataTitle}</h1>
                        <div className="course-des">
                            {dataTitleDes}
                        </div>
                        <div style={{display: "flex", marginBottom: "10px"}}>
                            <div className="course-badge">Bán chạy nhất</div>
                            <div className="course-rate">{dataSubscribe} người đăng ký</div>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            Được tạo bởi:
                            <a href="#"> {dataTeacher}</a>
                        </div>
                        <div>
                            Ngôn ngữ: {dataLanguage.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <div className="flex flex-row h-full w-4/5 m-auto">
                    <div className="basis-3/5">
                        <div className="course-card">
                            <div className="course-cardHeader">
                                Bạn sẽ được học những gì?
                            </div>
                            <div className="course-cardItem">
                                <div className="grid grid-cols-2 gap-4">
                                    {dataLearning.map((item, index) => (
                                        <div className="col-span-1" key={index}>- {item}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="course-card mt-8">
                            <div className="course-cardHeader">
                                Nội dung khóa học:
                            </div>
                            <div className="course-cardItem">
                                Gồm có 5 chương, 14 bài.
                                <div className="mt-1">
                                    <div className="course-listHeader">Mở đầu</div>
                                    <ul className="pl-5">
                                        <li>Web là gì?</li>
                                        <li>Một số công nghệ web</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div className="course-listHeader">HTML</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div className="course-listHeader">CSS</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div className="course-listHeader">Javacript</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div className="course-listHeader">Nodejs</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                        <li>Bài 4</li>
                                        <li>Bài 5</li>
                                    </ul>
                                </div>
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
                                <TeacherInfo></TeacherInfo>
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
                    <img className="w-full h-60" src=""/>
                    <div style={{margin: "1rem"}}>
                        <h1 style={{paddingBottom: "0.5rem"}}>{dataPrice} VNĐ</h1>
                        <button className="course-buttonAdd">Thêm vào giỏ hàng</button>
                        <button className="course-buttonBuy">Mua ngay</button>
                        <b>Bao gồm có:</b>
                        <ul className="list-disc pl-5">
                            <li>14 bài</li>
                            <li>Mỗi bài là một video</li>
                            <li>Kèm theo đầy đủ tài liệu</li>
                            <li>Đầy đủ lý thuyết và bài tập</li>
                            <li>Có thể chat với người tạo ra khóa học</li>
                        </ul>
                        <div style={{marginTop: "10px", display: "flex", justifyContent: "center"}}>
                            <a href="#"><b>Chia sẻ</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
