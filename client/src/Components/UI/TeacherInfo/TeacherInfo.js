import React from "react";
import "./TeacherInfo.css";
import img from "../../../assets/image/user.png";
import FullStar from "../../ReUse/Star/FullStar";
import EmptyStar from "../../ReUse/Star/EmptyStar";

const TeacherInfo = (props) => {
    const { name, avatar, numberCourse, numberStudent, description, rating, major } = props;

    const fullStar = rating;
    const emptyStar = 5 - rating;

    return (
        <div className="card">
            <div className="card-header">
                Teacher
            </div>
            <div className="teacher-name">
                {name}
            </div>
            <div className="teacher-major">
                {major}
            </div>
            <div className="teacher-info">
                <div className="teacher-avatar">
                    <img src={avatar}/>
                </div>
                <div className="teacher-overview">
                    <div className="flex">
                        {Array.from({ length: fullStar }, (_, index) => (
                            <FullStar key={index}></FullStar>
                        ))}
                        {Array.from({ length: emptyStar }, (_, index) => (
                            <EmptyStar key={index}></EmptyStar>
                        ))}
                    </div>
                    <div className="pl-1">{numberCourse} Courses</div>
                    <div className="pl-1">{numberStudent} Students</div>
                </div>
            </div>
            <div className="teacher-description">
                {description}
            </div>
        </div>
    );
}

TeacherInfo.defaultProps = {
    name: "Nong Viet Dung",
    avatar: img,
    numberCourse: 0,
    numberStudent: 0,
    description: "This is the teacher description section. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate deleniti distinctio\n" +
        "                dolores dolorum eum ipsum itaque, magnam minima molestiae nihil nostrum, omnis quis ratione saepe sunt,\n" +
        "                voluptas! Expedita, maxime.",
    rating: 3,
    major: "Computer Science"
}

export default TeacherInfo;
