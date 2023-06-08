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
import CreateCourse from "./Pages/Teacher/CreateCourse/CreateCourse";

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
          <Route path="subject" element={<Course />} />
          <Route path="cart" element={<CartCouseras />} />
          <Route
            path="course/create/:questionId"
            element={<CreateCourse />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
