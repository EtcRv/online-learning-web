import React, { useState } from "react";
import FloatingInput from "../../Components/ReUse/FloatingInput/FloatingInput";
import AuthenticationLayout from "../../Components/Layout/AuthenticationLayout/AuthenticationLayout";
import AlertMessage from "../../Components/ReUse/AlertMessage/AlertMessage";
import AuthenticationServices from "../../Services/AuthenticationServices/AuthenticationServices";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifiPass, setVerifiPass] = useState("");
  let url = document.URL;
  url = url.split("/");
  const userType = url[url.length - 1];

  const submitForm = async () => {
    const checkFieldEmpty = email == "" || password == "" || verifiPass == "";

    if (checkFieldEmpty) {
      AlertMessage("Error", "You have to fill down all the infomation below");
    } else if (password !== verifiPass) {
      AlertMessage(
        "Error",
        "The reentered password does not match the password"
      );
    } else {
      try {
        const response = await AuthenticationServices.register({
          email: email,
          password: password,
          user_type: userType,
        });
        console.log("response: ", response);
      } catch (err) {
        AlertMessage("Error", `${err}`);
      }
    }
  };
  return (
    <AuthenticationLayout>
      {userType === "teacher" ? (
        <h2>Sign up and start teaching</h2>
      ) : (
        <h2>Sign up and start learning</h2>
      )}
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

        <div className="mb-6">
          <FloatingInput
            type="password"
            placeholder="Re-Enter Password"
            setValue={setVerifiPass}
            value={verifiPass}
          ></FloatingInput>
        </div>
      </div>
      <button
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        onClick={submitForm}
      >
        Sign up
      </button>
    </AuthenticationLayout>
  );
};

export default Register;
