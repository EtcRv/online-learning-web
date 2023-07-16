import React, { useState } from "react";
import FloatingInput from "../../Components/ReUse/FloatingInput/FloatingInput";
import AuthenticationLayout from "../../Components/Layout/AuthenticationLayout/AuthenticationLayout";
import AlertMessage from "../../Components/ReUse/AlertMessage/AlertMessage";
import AuthenticationServices from "../../Services/AuthenticationServices/AuthenticationServices";
import SuccessMessage from "../../Components/ReUse/SuccessMessage/SuccessMessage";
import { useDispatch } from "react-redux";
import { updateUser, addToken } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import InfoServices from "../../Services/UserServices/InfoServices";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async () => {
    const checkFieldEmpty = email == "" || password == "";

    if (checkFieldEmpty) {
      AlertMessage("Error", "You have to fill down all the infomation below");
    } else {
      try {
        const response = await AuthenticationServices.login({
          email: email,
          password: password,
        });
        SuccessMessage("Success", "Login successfull");
        dispatch(
          addToken({
            token: response.data.token,
          })
        );

        if (response.data.user.user_type === "admin") {
          let user = [];
          user["email"] = response.data.user.email;
          user["name"] = response.data.user.name;
          user["user_type"] = response.data.user.user_type;
          user["money"] = response.data.user.money;
          console.log("user in login: ", user);
          dispatch(
            updateUser({
              user: user,
            })
          );
          navigate("/admin/dashboard");
        } else {
          const userInfo = await InfoServices.getInfo(
            {
              userId: response.data.user.id,
              user_type: response.data.user.user_type,
            },
            response.data.token
          );

          let user = userInfo.data.userInfor;
          user["name"] = response.data.user.name;
          user["user_type"] = response.data.user.user_type;
          user["money"] = response.data.user.money;
          dispatch(
            updateUser({
              user: user,
            })
          );

          if (response.data.user.user_type === "teacher") {
            const isTeacherLoginFirstTime =
              await AuthenticationServices.checkTeacherLoginFirstTime(
                response.data.user.id
              );
            console.log("isTeacherLoginFirstTime: ", isTeacherLoginFirstTime);
            if (isTeacherLoginFirstTime) {
              navigate(`/user/edit-profile`);
            } else {
              navigate("/");
            }
          } else {
            navigate("/");
          }
        }
      } catch (err) {
        AlertMessage("Error", `${err.response.data.error}`);
      }
    }
  };
  return (
    <AuthenticationLayout>
      <h1>Log in to your Udemy account</h1>
      <div className="mt-4">
        <div className="mb-6">
          <FloatingInput
            type="email"
            placeholder="Email"
            setValue={setEmail}
            value={email}
          ></FloatingInput>
        </div>

        <div className="mb-6">
          <FloatingInput
            type="password"
            placeholder="Password"
            setValue={setPassword}
            value={password}
          ></FloatingInput>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <span>
          Don't have an account?{" "}
          <a href="/register/student" className="text-cyan-300">
            Sign up
          </a>
        </span>
        <a href="/forgetpassword" className="text-cyan-500">
          Forget your password?
        </a>
      </div>

      <button
        className="inline-block mt-4 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={submitForm}
      >
        Sign in
      </button>
      {/* <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
        <p className="text-center font-semibold mx-4 mb-0">OR</p>
      </div>

      <a
        className="bg-blue-600 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        href="/"
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-3.5 h-3.5 mr-2"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
        Continue with Facebook
      </a> */}
    </AuthenticationLayout>
  );
};

export default Login;
