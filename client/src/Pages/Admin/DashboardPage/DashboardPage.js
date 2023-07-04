import Widget from "../../../Components/ReUse/Widget/Widget";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import TotalSpent from "../../../Components/UI/TotalSpent/TotalSpent";
import WeeklyRevenue from "../../../Components/UI/WeeklyRevenue/WeeklyRevenue";
import AdminLayout from "../../../Components/Layout/AdminLayout/AdminLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoServices from "../../../Services/UserServices/InfoServices";
import CourseServices from "../../../Services/CourseServices/CourseServices";

const DashboardPage = () => {
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();
  const [totalUser, setTotalUser] = useState(0);
  const [totalCourse, setTotalCourse] = useState(0);

  useEffect(() => {
    const getUserNumber = async () => {
      const response = await InfoServices.getAllUser(token);

      setTotalUser(response.data.length);
    };

    const getAllCourse = async () => {
      const response = await CourseServices.getAllCourse();
      setTotalCourse(response.data.courses.length);
    };

    getUserNumber();
    getAllCourse();
  }, []);
  return (
    <AdminLayout>
      <div className="h-full w-full">
        <div className=" mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Total User"}
            subtitle={totalUser}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={"Total course"}
            subtitle={totalCourse}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Total Request"}
            subtitle={"$574.34"}
          />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <TotalSpent />
          <WeeklyRevenue />
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardPage;
