import React from "react";
import "./CourseReviewTieuBieu.css";
import img from "../../../assets/image/user.png";
import FullStar from "../../ReUse/Star/FullStar";
import EmptyStar from "../../ReUse/Star/EmptyStar";

class CourseReviewTieuBieu extends React.Component {
  render() {
    const data = this.props.data;

    const fullStar = data.rating;
    const emptyStar = 5 - fullStar;

    return (
      <div className="crtb-card">
        <div className="crtb-card-header">Featured review</div>
        <div className="crtb-user-info">
          <div className="crtb-user-avatar">
            <img src={data.avatar || img} />
          </div>
          <div className="crtb-user-name">
            <div style={{ fontWeight: "bold" }}>{data.userName}</div>
            <div style={{ fontSize: "13px" }}>
              Khóa học: {data.courseAmount}
            </div>
            <div style={{ fontSize: "13px" }}>Review: {data.reviewAmount}</div>
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
        <div className="crtb-description">{data.description}</div>
      </div>
    );
  }
}

CourseReviewTieuBieu.defaultProps = {
  data: {
    userName: "Nong Viet Dung",
    courseAmount: "9",
    reviewAmount: "2",
    description:
      "This course is too good. OMG!!! 100% this is what you need to become a good developer. You guy really need to check it out",
    avatar: img,
    rating: 3,
  },
};

export default CourseReviewTieuBieu;
