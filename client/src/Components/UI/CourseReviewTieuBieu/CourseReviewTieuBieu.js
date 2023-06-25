import React from "react";
import "./CourseReviewTieuBieu.css";
import img from "../../../assets/image/user.png";
import FullStar from "../../ReUse/Star/FullStar";
import EmptyStar from "../../ReUse/Star/EmptyStar";

const CourseReviewTieuBieu = (props) => {
    const { header, userName, courseAmount, reviewAmount, description, avatar , rating } = props;

    const defaultHeader = "Top Review";
    const defaultUserName = "Nong Viet Dung";
    const defaultCourseAmount = "9";
    const defaultReviewAmount = "2";
    const defaultDescription = "This course is too good. OMG!!! 100% this is what you need to become a good developer. You guy really need to check it out";
    const defaultAvatar = img;
    const defaultRating = 3;

    const fullStar = (rating || defaultRating);
    const emptyStar = 5 - fullStar;

    return (
        <div className="crtb-card">
            <div className="crtb-card-header">
                {header || defaultHeader}
            </div>
            <div className="crtb-user-info">
                <div className="crtb-user-avatar">
                    <img src={avatar || defaultAvatar}/>
                </div>
                <div className="crtb-user-name">
                    <div style={{fontWeight: "bold"}}>{userName || defaultUserName}</div>
                    <div style={{fontSize: "13px"}}>Courses: {courseAmount || defaultCourseAmount}</div>
                    <div style={{fontSize: "13px"}}>Reviews: {reviewAmount || defaultReviewAmount}</div>
                </div>
            </div>
            <div className="crtb-rating">
                {Array.from({ length: fullStar }, (_, index) => (
                    <FullStar key={index}></FullStar>
                ))}
                {Array.from({ length: emptyStar }, (_, index) => (
                    <EmptyStar key={index}></EmptyStar>
                ))}
            </div>
            <div className="crtb-description">
                {description || defaultDescription}
            </div>
        </div>
    );
};

export default CourseReviewTieuBieu;
