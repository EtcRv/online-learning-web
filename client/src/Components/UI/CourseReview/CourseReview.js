import React from "react";
import "./CourseReview.css";
import img from "../../../assets/image/user.png";
import FullStar from "../../ReUse/Star/FullStar";
import EmptyStar from "../../ReUse/Star/EmptyStar";

class CourseReview extends React.Component {
    render() {

        const data = this.props.data;

        const fullStar = data.rating;
        const emptyStar = 5 - data.rating;

        return (
            <div className="course-review-card">
                <div className="cr-user-info">
                    <div className="cr-user-avatar">
                        <img src={data.avatar || img} alt="user-avatar"/>
                    </div>
                    <div className="cr-user-name">
                        {data.name}
                        <div className="cr-rating">
                            {Array.from({length: fullStar}, (_, index) => (
                                <FullStar key={index}></FullStar>
                            ))}
                            {Array.from({length: emptyStar}, (_, index) => (
                                <EmptyStar key={index}></EmptyStar>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="cr-description">
                    {data.description}
                </div>
            </div>
        );
    }
}

CourseReview.defaultProps = {
    data: {
        name: "Nong Viet Dung",
        avatar: img,
        rating: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis deleniti illo odit. " +
            "Accusantium distinctio dolore dolorem eos ipsa itaque laboriosam magni molestiae natus provident quasi, " +
            "quidem quisquam, rerum suscipit. dolore dolorem eos ipsa itaque laboriosam magni molestiae natus provident quasi, " +
            "quidem quisquam, rerum suscipit. dolore dolorem eos ipsa itaque laboriosam magni molestiae natus provident quasi, " +
            "quidem quisquam, rerum suscipit. dolore dolorem eos ipsa itaque laboriosam magni molestiae natus provident quasi, " +
            "quidem quisquam, rerum suscipit. dolore dolorem eos ipsa itaque laboriosam magni molestiae natus provident quasi, " +
            "quidem quisquam, rerum suscipit."
    }
}

export default CourseReview;
