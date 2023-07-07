import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/AuthenticationPage/Login";
import Register from "./Pages/AuthenticationPage/Register";
import Layout from "./Components/Layout/Layout";
import EditProfilePage from "./Pages/User/Profile/EditProfilePage";
import Course from "./Pages/Course/Course";
import CartCouseras from "./Pages/CartCouseras/CartCouseras";
import ViewPublicProfile from "./Pages/User/PublicProfile/ViewPublicProfile";
import AccountSecurity from "./Pages/User/AccountSecurity/AccountSecurity";
import CloseAccount from "./Pages/User/CloseAccount/CloseAccount";
import Goals from "./Pages/Teacher/Goals/Goals";
import CourseStructure from "./Pages/Teacher/CourseStructure/CourseStructure";
import SetupAndTestVideo from "./Pages/Teacher/Setup/SetupAndTestVideo";
import FilmEdit from "./Pages/Teacher/FilmEdit/FilmEdit";
import Curriculum from "./Pages/Teacher/Curriculum/Curriculum";
import CourseLandingPage from "./Pages/Teacher/CourseLandingPage/CourseLandingPage";
import Pricing from "./Pages/Teacher/Pricing/Pricing";
import CourseMessages from "./Pages/Teacher/CourseMessages/CourseMessages";
import CoursePage from "./Pages/CoursePage/CoursePage"; //buy
import ViewCoursePage from "./Pages/Teacher/ViewCoursePage/ViewCoursePage";
import MessagePage from "./Pages/MessagePage/MessagePage";
import SearchCoursesPage from "./Pages/SearchCoursesPage/SearchCoursesPage";
import DashboardPage from "./Pages/Admin/DashboardPage/DashboardPage";
import DatabasePage from "./Pages/Admin/DatabasePage/DatabasePage";
import ReviewCoursePage from "./Pages/Admin/ReviewCoursePage/ReviewCoursePage";
import ForgetPassword from "./Pages/AuthenticationPage/ForgetPassword";
import LoadingMoney from "./Pages/User/LoadingMoney/LoadingMoney";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register/student" element={<Register />} />
          <Route path="register/teacher" element={<Register />} />
          <Route path="user/edit-profile" element={<EditProfilePage />} />
          <Route path="user/profile" element={<ViewPublicProfile />} />
          <Route path="user/edit-account" element={<AccountSecurity />} />
          <Route path="user/close-account" element={<CloseAccount />} />
          <Route path="user/loading-money" element={<LoadingMoney />} />
          <Route path="course/:courseId" element={<Course />} />
          <Route path="cart" element={<CartCouseras />} />
          <Route path="instructor/course" element={<ViewCoursePage />}></Route>
          <Route
            path="instructor/course/:courseId/manage/goals"
            element={<Goals />}
          ></Route>
          <Route
            path="instructor/course/:courseId/manage/course-structure"
            element={<CourseStructure />}
          ></Route>
          <Route
            path="instructor/course/:courseId/manage/setup"
            element={<SetupAndTestVideo />}
          ></Route>
          <Route
            path="instructor/course/:courseId/manage/film"
            element={<FilmEdit />}
          ></Route>
          <Route
            path="instructor/course/:courseId/manage/curriculum"
            element={<Curriculum />}
          ></Route>
          <Route
            path="instructor/course/:courseId/manage/basics"
            element={<CourseLandingPage />}
          ></Route>
          <Route
            path="instructor/course/:courseId/manage/pricing"
            element={<Pricing />}
          ></Route>
          <Route
            path="instructor/course/:courseId/manage/messages"
            element={<CourseMessages />}
          ></Route>
          <Route path="coursePage/:courseId" element={<CoursePage />} />
          <Route path="message" element={<MessagePage />}></Route>
          <Route
            path="coursePage/search/:title"
            element={<SearchCoursesPage />}
          ></Route>
          <Route path="admin/dashboard" element={<DashboardPage />}></Route>
          <Route path="admin/database" element={<DatabasePage />}></Route>
          <Route path="admin/courses" element={<ReviewCoursePage />}></Route>
          <Route path="forgetpassword" element={<ForgetPassword />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
