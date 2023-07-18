import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { TbTrashFilled } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import { useEffect, useState } from "react";
import CourseServices from "../../../Services/CourseServices/CourseServices";
import { useSelector } from "react-redux";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";

const Curriculum = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const course_id = useSelector(
    (state) => state.createCourse.current_course_id
  );
  const [lectures, setLectures] = useState([]);
  const [sections, setSections] = useState([]);
  const [structOfCourse, setStructOfCourse] = useState([]);

  useEffect(() => {
    console.log("first")
    const getSectionData = async () => {
      const all_sections = await CourseServices.getAllSectionOfCourse(
        course_id,
        token
      );

      setSections(all_sections.data.sections);
    };

    const getLectureData = async () => {
      const all_lectures = await CourseServices.getAllLectureOfCourse(
        course_id,
        token
      );
      setLectures(all_lectures.data.lectures);
    };

    getSectionData();
    getLectureData();
    console.log("Running");
    console.log("lectures: ", lectures);
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
    // console.log("đ")
    // console.log(courseStruct)
    setStructOfCourse(courseStruct);
  }, [lectures, sections]);

  const clickSaveBtn = async () => {
    const res = await CourseServices.updateSection(
      course_id,
      { allSections: sections },
      token
    );

    const newSections = res.data.filter((data) => {
      return data.id !== undefined;
    });

    let newLectures = [];
    lectures.map((lecture, idx) => {
      if (!Number.isInteger(Number(lecture.sectionId))) {
        const sectionInfo = sections.find(
          (section) => section.id === lecture.sectionId
        );
        const newSectionInfo = newSections.find((section) => {
          return section.name == sectionInfo.name;
        });
        newLectures.push({
          id: lecture.id,
          name: lecture.name,
          sectionId: newSectionInfo.id,
          video_url: lecture.video_url,
        });
      } else {
        newLectures.push(lecture);
      }
    });

    await CourseServices.updateLecture(
      course_id,
      { allLectures: newLectures },
      token
    );

    const all_lectures = await CourseServices.getAllLectureOfCourse(
      course_id,
      token
    );
    setLectures(all_lectures.data.lectures);

    SuccessMessage("Success", "Save successfull");
  };

  const Lecture = (props) => {
    const [name, setName] = useState(props.lecture.lecture_name);
    const [video_url, setVideoURL] = useState(props.lecture.video_url);
    const [isEdit, setIsEdit] = useState(false);

    const changeVideoUrl = () => {
      let newLectures = lectures.map((lec, idx) => {
        if (props.lecture.lecture_id === lec.id) {
          return {
            id: lec.id,
            sectionId: lec.sectionId,
            name: name,
            video_url: video_url,
          };
        }
        return lec;
      });
      setLectures(newLectures);
    };

    const changeNameOfLecture = () => {
      let newLectures = lectures.map((lec, idx) => {
        if (props.lecture.lecture_id === lec.id) {
          return {
            id: lec.id,
            sectionId: lec.sectionId,
            name: name,
            video_url: lec.video_url,
          };
        }
        return lec;
      });
      setLectures(newLectures);
      setIsEdit(false);
    };

    const removeLecture = () => {
      let newLectures = lectures.map((lec, idx) => {
        if (props.lecture.lecture_id !== lec.id) {
          return lec;
        }
      });

      newLectures = newLectures.filter((element) => element !== undefined);

      setLectures(newLectures);
    };

    return (
      <div className="border-[1px] border-black w-full bg-white mt-4 p-2">
        <div className="flex items-center justify-between p-2 group/lecture">
          <div className="flex">
            <span className="flex items-center text-lg">
              {`Lecture ${props.lecture.lecture_number}: `}
              <HiOutlineDocumentText className="mr-2" />
              {isEdit ? (
                <input
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              ) : (
                name
              )}
            </span>
            {isEdit ? (
              <button
                className="hidden group-hover/lecture:block"
                onClick={() => changeNameOfLecture()}
              >
                <BsCheckLg className="mr-2" />
              </button>
            ) : (
              <button
                className="hidden group-hover/lecture:block"
                onClick={() => setIsEdit(true)}
              >
                <MdEdit className="mx-2" />
              </button>
            )}
            <button
              className="hidden group-hover/lecture:block"
              onClick={() => removeLecture()}
            >
              <TbTrashFilled className="mr-2" />
            </button>
          </div>
        </div>
        <div className="mt-2 w-full">
          <label className="font-bold">Video URL</label>
          <div className="p-4 border-[1px] border-black mt-4 mb-2 w-full">
            <input
              className="w-full outline-0"
              placeholder="Video URL"
              value={video_url}
              onChange={(e) => {
                setVideoURL(e.currentTarget.value);
              }}
              onBlur={() => changeVideoUrl()}
            ></input>
          </div>
        </div>
      </div>
    );
  };

  const Section = (props) => {
    const [name, setName] = useState(props.data.section_name);
    const [isEdit, setIsEdit] = useState(false);

    const addNewLecture = () => {
      const newLecture = {
        id: Math.random() * 1000 + 0.000001,
        sectionId: props.data.id,
        name: "New Lecture",
        video_url: "",
      };

      setLectures([...lectures, newLecture]);
    };

    const addNewSection = () => {
      const newSection = {
        id: Math.random() * 1000 + 0.000000001,
        name: "New Section",
      };

      let newAllSection = [];
      sections.map((section, idx) => {
        newAllSection.push(section);
        if (section.id === props.data.id) {
          newAllSection.push(newSection);
        }
      });

      setSections(newAllSection);
    };

    const deleteSection = () => {
      let newAllSection = [];
      sections.map((section, idx) => {
        if (section.id !== props.data.id) {
          newAllSection.push(section);
        }
      });

      let newAllLecture = [];
      lectures.map((lecture, idx) => {
        if (lecture.sectionId !== props.data.id) {
          newAllLecture.push(lecture);
        }
      });

      setLectures(newAllLecture);
      setSections(newAllSection);
    };

    const changeNameOfSection = () => {
      let newSection = sections.map((section, idx) => {
        if (props.data.id === section.id) {
          return {
            id: section.id,
            name: name,
          };
        }
        return section;
      });
      setSections(newSection);
      setIsEdit(false);
    };

    return (
      <div className="w-full">
        <div className="border-2 border-black w-full bg-gray-200 mt-8 p-2 ">
          <div className="flex items-center group/section p-2">
            <span className="flex items-center text-lg">
              <span className="font-bold pr-2">
                {" "}
                Section {props.data.section_number}:
              </span>
              <HiOutlineDocumentText className="mr-2" />
              {isEdit ? (
                <input
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              ) : (
                name
              )}
            </span>
            {isEdit ? (
              <button
                className="hidden group-hover/section:block"
                onClick={() => changeNameOfSection()}
              >
                <BsCheckLg className="mr-2" />
              </button>
            ) : (
              <button
                className="hidden group-hover/section:block"
                onClick={() => setIsEdit(true)}
              >
                <MdEdit className="mx-2" />
              </button>
            )}
            <button
              className="hidden group-hover/section:block"
              onClick={deleteSection}
            >
              <TbTrashFilled className="mr-2" />
            </button>
          </div>
          <div className="mt-4 ml-4">
            {props.data.all_lectures.map((lecture, idx) => (
              <div className="my-4">
                <Lecture key={idx} lecture={lecture}></Lecture>
              </div>
            ))}
          </div>
          <div className="mt-4 ml-4 w-full justify-items-start">
            <button
              className="flex border-[1px] bg-white border-black p-2 items-center"
              onClick={addNewLecture}
            >
              <IoMdAdd />
              <span className="font-bold px-2">Curriculum item</span>
            </button>
          </div>
        </div>
        <div className={`w-full h-6 py-6 group/add ${props.data.section_number === sections.length ? "block" : "hidden"} `}>
          <button
            className="p-2 border-dashed border-2 border-gray-500 hidden group-hover/add:block"
            onClick={() => addNewSection()}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    );
  };

  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="lg:basis-1/4 hidden lg:block ">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto  basis-full lg:basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Curriculum</label>
            </div>
            <div className="p-8">
              <span className="text-wrap">
                Start putting together your course by creating sections,
                lectures and practice activities (quizzes, coding exercises and
                assignments). Use your course outline to structure your content
                and label your sections and lectures clearly. If you’re
                intending to offer your course for free, the total length of
                video content must be less than 2 hours.
              </span>
              {structOfCourse.map((section, idx) => {
                return <Section key={idx} data={section}></Section>;
              })}
            </div>
            <button
              className={
                "bg-indigo-500 ml-8 mb-8 mt-4 mx-2 px-6 py-2 font-bold text-white"
              }
              onClick={clickSaveBtn}
            >
              Save
            </button>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default Curriculum;