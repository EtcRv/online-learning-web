import { useState } from "react";
import AuthenticationLayout from "../../Components/Layout/AuthenticationLayout/AuthenticationLayout";
import FloatingInput from "../../Components/ReUse/FloatingInput/FloatingInput";
import AuthenticationServices from "../../Services/AuthenticationServices/AuthenticationServices";
import { useNavigate } from "react-router-dom";
import SuccessMessage from "../../Components/ReUse/SuccessMessage/SuccessMessage";
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const minNum = 100000;
  const maxNum = 999999;
  const navigate = useNavigate();
  const getNewPassword = () => {
    const randomNumber = Math.floor(
      Math.random() * (maxNum - minNum + 1) + minNum
    );
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "onlinelearningwebsite2408@gmail.com",
      Password: "05B1F18DD2F71A7BC9CCD8FB59C38F85C35B",
      To: email,
      From: "onlinelearningwebsite2408@gmail.com",
      Subject: "New password of your account",
      Body: `This is new password of your account: ${randomNumber}, remember to change your password!`,
    }).then(async (message) => {
      const response = await AuthenticationServices.genNewPassword(
        email,
        randomNumber
      );
      SuccessMessage("Success", "New password has been sent to your email");
      navigate("/login");
    });
  };
  return (
    <AuthenticationLayout>
      <h1>Hello this is Forget password page</h1>
      <div className="mt-4">
        <div className="mb-6">
          <FloatingInput
            type="email"
            placeholder="Email"
            setValue={setEmail}
            value={email}
          ></FloatingInput>
        </div>
      </div>

      <button
        className="inline-block mt-4 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={getNewPassword}
      >
        Send Email to get new password
      </button>
    </AuthenticationLayout>
  );
};

export default ForgetPassword;
