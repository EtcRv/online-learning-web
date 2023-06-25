import UserPageLayout from "../../Components/Layout/UserPageLayout/UserPageLayout";
import React, { useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import Header from "../../Components/UI/Header/Header";
import Footer from "../../Components/UI/Footer/Footer";
import { AiOutlineArrowDown } from "react-icons/ai";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CoursePage = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);

    // Danh sách các bài học
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

    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };



    // const sections = [
    //   {
    //     mainTitle: "Section 1: INTRODUCTION TO HACKING AND SECURITY",
    //     subTitles: ["Subsection 1.1", "Subsection 1.2"],
    //   },
    //   {
    //     mainTitle: "Section 2: ADVANCED HACKING TECHNIQUES",
    //     subTitles: ["Subsection 2.1", "Subsection 2.2", "Subsection 2.3"],
    //   },
    //   {
    //     mainTitle: "Section 3: NETWORK SECURITY",
    //     subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
    //   },
    // ];

    // const [selectedSection, setSelectedSection] = useState(null);

    // const toggleDropdown = (sectionIndex) => {
    //   setSelectedSection((prevSelectedSection) =>
    //     prevSelectedSection === sectionIndex ? null : sectionIndex
    //   );
    // };




    const sections = [
        {
            mainTitle: "Section 1: INTRODUCTION TO HACKING AND SECURITY",
            subTitles: ["Subsection 1.1", "Subsection 1.2"],
        },
        {
            mainTitle: "Section 2: ADVANCED HACKING TECHNIQUES",
            subTitles: ["Subsection 2.1", "Subsection 2.2", "Subsection 2.3"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        }, {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
    ];



    const lectures = [
        {
            mainTitle: "Section 1: INTRODUCTION TO HACKING AND SECURITY",
            subTitles: ["Subsection 1.1", "Subsection 1.2"],
        },
        {
            mainTitle: "Section 2: ADVANCED HACKING TECHNIQUES",
            subTitles: ["Subsection 2.1", "Subsection 2.2", "Subsection 2.3"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        }, {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
        {
            mainTitle: "Section 3: NETWORK SECURITY",
            subTitles: ["Subsection 3.1", "Subsection 3.2", "Subsection 3.3", "Subsection 3.4"],
        },
    ];





    const [selectedSubTitles, setSelectedSubTitles] = useState([]);

    const toggleSubTitle = (sectionIndex, subTitleIndex) => {
        setSelectedSubTitles((prevSelectedSubTitles) => {
            const isSelected = prevSelectedSubTitles.some(
                ([sIndex, subIndex]) => sIndex === sectionIndex && subIndex === subTitleIndex
            );

            if (isSelected) {
                return prevSelectedSubTitles.filter(
                    ([sIndex, subIndex]) => sIndex !== sectionIndex || subIndex !== subTitleIndex
                );
            } else {
                return [...prevSelectedSubTitles, [sectionIndex, subTitleIndex]];
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
                        videoId="E7S6zyXYe7M"
                        id={lessons[0].id}
                        title={lessons[0].title}
                        className=" w-full h-full m-auto"
                    />
                </div>
                <div className="w-[30%]  max-h-[500px] overflow-y-auto">




                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <button
                                onClick={() => toggleSubTitle(sectionIndex, null)}
                                className="text-black bg-[#f7f9fa] flex font-medium text-sm px-4 py-2.5 text-center items-center w-full"
                                type="button"
                            >
                                <span className="pr-[2px]">{section.mainTitle}</span>
                                {selectedSubTitles.some(([sIndex, _]) => sIndex === sectionIndex) ? (
                                    <FaAngleUp />
                                ) : (
                                    <FaAngleDown />
                                )}
                            </button>
                            {selectedSubTitles.some(([sIndex, _]) => sIndex === sectionIndex) && (
                                <div
                                    id="dropdown"
                                    className="z-10 bg-white w-full divide-y divide-gray-100 rounded-lg shadow w-44"
                                >
                                    <ul
                                        className="pb-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownDefaultButton"
                                    >
                                        {section.subTitles.map((subTitle, subTitleIndex) => (
                                            <li key={subTitleIndex}>
                                                <a
                                                    href=""
                                                    className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${selectedSubTitles.some(
                                                        ([sIndex, subIndex]) =>
                                                            sIndex === sectionIndex && subIndex === subTitleIndex
                                                    )
                                                        ? "font-semibold"
                                                        : ""
                                                        }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleSubTitle(sectionIndex, subTitleIndex);
                                                    }}
                                                >
                                                    {subTitle}
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
