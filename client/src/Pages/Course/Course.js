import React from "react";

const Course = () => {
    const courseTitle = {
        marginTop: "1rem",
        backgroundColor: "black",
        width: "100%",
        height: "40%",
        paddingTop: "3.2rem",
        paddingBottom: "3.2rem",
    }

    const title = {
        color: "white",
        margin: "auto auto auto auto",
    }

    const des = {
        fontSize: "1.25rem",
        marginTop: "15px",
        marginBottom: "15px"
    }

    const badge = {
        color: "black",
        backgroundColor: "#eceb98",
        width: "120px",
        height: "fit",
        display: "flex",
        justifyContent: "center",
        fontWeight: "bold"
    }

    const rate = {
        marginLeft: "10px"
    }

    const card = {
        border: "1px solid #d1d7dc",
        boxShadow: "0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)",
        backgroundColor: "white",
        marginBottom: "16px"
    }

    const cardHeader = {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: "bold",
        padding: "1.25rem 2rem"
    }

    const cardItem = {
        margin: "0 2rem 1.25rem 2rem"
    }

    const listHeader = {
        fontSize: "1rem",
        lineHeight: "1.75rem",
        fontWeight: "bold",
        margin: "10px -2rem",
        padding: "5px 2rem",
        borderTop: "1px solid #d1d7dc",
        borderBottom: "1px solid #d1d7dc",
        backgroundColor: "#f7f9fa"
    }

    const priceCard = {
        position: "fixed",
        top: "50px",
        right: "120px",
        width: "25%",
    }

    const buttonAdd = {
        backgroundColor: "#a435f0",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.125rem",
        width: "100%",
        height: "50px",
        margin: "0.5rem 0"
    }

    const buttonBuy = {
        fontWeight: "bold",
        fontSize: "1.125rem",
        width: "100%",
        height: "50px",
        margin: "0.5rem 0",
        border: "1px solid black"
    }

    const dataTitle = "Công nghệ Web và Dịch vụ trực tuyến";
    const dataTitleDes = "Học và làm quen với các kỹ năng cơ bản của làm web, HTML, Javascript, CSS, Nodejs, React, . . .";
    const dataSubscribe = 953874;
    const dataTeacher = "Teacher";
    const dataLanguage = ["Tiếng Anh", "Tiếng Việt"];
    const dataLearning = ["Kiến thức cơ bản về Web", "HTML", "Javascript", "CSS", "PHP", "Nodejs"];
    const dataPrice = "2.000.000";

    return (
        <div className="w-screen h-screen">
            <div style={courseTitle}>
                <div className="flex flex-row h-full w-4/5" style={title}>
                    <div className="basis-3/5">
                        <h1>{dataTitle}</h1>
                        <div style={des}>
                            {dataTitleDes}
                        </div>
                        <div style={{display: "flex", marginBottom: "10px"}}>
                            <div style={badge}>Bán chạy nhất</div>
                            <div style={rate}>{dataSubscribe} người đăng ký</div>
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
                        <div style={card}>
                            <div style={cardHeader}>
                                Bạn sẽ được học những gì?
                            </div>
                            <div style={cardItem}>
                                <div className="grid grid-cols-2 gap-4">
                                    {dataLearning.map((item, index) => (
                                        <div className="col-span-1" key={index}>- {item}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={card}>
                            <div style={cardHeader}>
                                Nội dung khóa học:
                            </div>
                            <div style={cardItem}>
                                Gồm có 5 chương, 14 bài.
                                <div className="mt-1">
                                    <div style={listHeader}>Mở đầu</div>
                                    <ul className="pl-5">
                                        <li>Web là gì?</li>
                                        <li>Một số công nghệ web</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div style={listHeader}>HTML</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div style={listHeader}>CSS</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div style={listHeader}>Javacript</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                    </ul>
                                </div>
                                <div className="mt-1">
                                    <div style={listHeader}>Nodejs</div>
                                    <ul className="pl-5">
                                        <li>Bài 1</li>
                                        <li>Bài 2</li>
                                        <li>Bài 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={priceCard}>
                <div style={card}>
                    <img className="w-full h-60" src=""/>
                    <div style={{margin: "1rem"}}>
                        <h1 style={{paddingBottom: "0.5rem"}}>{dataPrice} VNĐ</h1>
                        <button style={buttonAdd}>Thêm vào giỏ hàng</button>
                        <button style={buttonBuy}>Mua ngay</button>
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
