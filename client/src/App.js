import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/AuthenticationPage/Login";
import Register from "./Pages/AuthenticationPage/Register";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login/student" element={<Login />} />
          <Route path="register/student" element={<Register />} />
          <Route path="login/teacher" element={<Login />} />
          <Route path="register/teacher" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
