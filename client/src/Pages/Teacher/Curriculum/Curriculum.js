import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { TbTrashFilled } from "react-icons/tb";

const Curriculum = () => {
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
              <div className="border-2 border-black w-full bg-gray-200 mt-8 group p-2 ">
                <div className="flex items-center p-2">
                  <span className="flex items-center text-lg">
                    <span className="font-bold pr-2"> Section 1:</span>
                    <HiOutlineDocumentText className="mr-2" />
                    Introduction
                  </span>
                  <button className="hidden group-hover:block">
                    <MdEdit className="mx-2" />
                  </button>
                  <button className="hidden group-hover:block">
                    <TbTrashFilled className="mr-2" />
                  </button>
                </div>
                <div className="mt-4 ml-4"></div>
              </div>
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default Curriculum;
