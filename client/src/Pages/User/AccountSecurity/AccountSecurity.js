import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserPageLayout from "../../../Components/Layout/UserPageLayout/UserPageLayout";
import InfoServices from "../../../Services/UserServices/InfoServices";
import AlertMessage from "../../../Components/ReUse/AlertMessage/AlertMessage";
import Button from "../../../Components/ReUse/Button/Button";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";
import { useNavigate } from "react-router-dom";
import UserToolbar from "../UserToolBar/UserToolBar";

const AccountSecurity = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const [mail, setMail] = useState(user.mail);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePassword = async () => {
    if (newPassword !== confirmPassword) {
      AlertMessage("Error", "Your re-type password was incorrect");
    } else {
      try {
        const response = await InfoServices.updatePassword(
          {
            userId: user.userId,
            oldPassword: password,
            newPassword: newPassword,
          },
          token
        );
        SuccessMessage("Success", "Change password successfully");
      } catch (err) {
        if (err.response.status === 403) {
          AlertMessage("Error", "Your current password was incorrect");
        }
        console.log("error: ", err);
      }
    }
  };

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <UserPageLayout>
      <div className="flex p-3.5 h-full w-full">
        <div className="w-3/12 border-2 border-slate-200 flex flex-col ">
          <UserToolbar />
        </div>
        <div className="w-9/12 text-center border-2 border-l-0 border-slate-200">
          <div className="border-2 border-l-0 border-t-0 border-r-0  py-6  border-slate-200">
            <div className="font-bold text-lg">Account</div>
            <div className="text-base">
              Edit your account settings and change your password here.
            </div>
          </div>
          <div className=" p-6 text-start ">
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <label className="font-bold pb-2 flex">Email:</label>
              <input
                type="text"
                className="px-3 py-3 bg-white border-2 border-slate-600 w-full"
                placeholder="Full Name"
                defaultValue={`Your email address is: ${mail}`}
                disabled
              />
            </div>
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <label className="font-bold pb-2">Password: </label>
              <input
                type="password"
                className="px-3 py-3 my-2 bg-white border-2 border-slate-600 mb-2 w-full"
                placeholder="Enter current password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <input
                type="password"
                className="px-3 py-3 my-2 bg-white border-2 border-slate-600 w-full"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <input
                type="password"
                className="px-3 py-3 my-2 bg-white border-2 border-slate-600 w-full"
                placeholder="Re-type new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              />
            </div>
          </div>

          <Button
            bgColor="bg-gray-600"
            bgColorHover="bg-gray-800"
            textColor="text-white"
            onClickBtn={changePassword}
          >
            Change password
          </Button>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default AccountSecurity;
