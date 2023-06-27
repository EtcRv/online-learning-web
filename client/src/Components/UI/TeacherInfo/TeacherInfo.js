import React from "react";
import "./TeacherInfo.css";
import img from "../../../assets/image/user.png";
import FullStar from "../../ReUse/Star/FullStar";
import EmptyStar from "../../ReUse/Star/EmptyStar";

class TeacherInfo extends React.Component {
    render() {

        const data = this.props.data;

        const fullStar = data.rating;
        const emptyStar = 5 - data.rating;

        return (
            <div className="teacher-card">
                <div className="teacher-card-header">
                    Giảng viên
                </div>
                <div className="teacher-name">
                    {data.name}
                </div>
                <div className="teacher-major">
                    {data.major}
                </div>
                <div className="teacher-info">
                    <div className="teacher-avatar">
                        <img src={data.avatar || img}/>
                    </div>
                    <div className="teacher-overview">
                        <div className="flex">
                            {Array.from({length: fullStar}, (_, index) => (
                                <FullStar key={index}></FullStar>
                            ))}
                            {Array.from({length: emptyStar}, (_, index) => (
                                <EmptyStar key={index}></EmptyStar>
                            ))}
                        </div>
                        <div className="pl-1">{data.numberCourse} khóa học</div>
                        <div className="pl-1">{data.numberStudent} học sinh</div>
                    </div>
                </div>
                <div className="teacher-description">
                    {data.description}
                </div>
            </div>
        );
    }
}

TeacherInfo.defaultProps = {
    data: {
        name: "Nong Viet Dung",
        avatar: img,
        numberCourse: 10,
        numberStudent: 100,
        description: "This is the teacher description section. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cupiditate deleniti distinctio\n" +
            "                dolores dolorum eum ipsum itaque, magnam minima molestiae nihil nostrum, omnis quis ratione saepe sunt,\n" +
            "                voluptas! Expedita, maxime.",
        rating: 3,
        major: "Khoa học máy tính",
    }
}

export default TeacherInfo;
