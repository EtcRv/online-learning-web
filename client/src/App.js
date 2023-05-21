import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/AuthenticationPage/Login";
import Register from "./Pages/AuthenticationPage/Register";
import Layout from "./Components/Layout/Layout";
import EditProfilePage from "./Pages/User/Profile/EditProfilePage";
import Course from "./Pages/Course/Course";
import CartCouseras from "./Pages/CartCouseras/CartCouseras";

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
          <Route path="subject" element={<Course />} />
          <Route path="cart" element={<CartCouseras />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
