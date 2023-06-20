import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserPageLayout from "../../../Components/Layout/UserPageLayout/UserPageLayout";
import Button from "../../../Components/ReUse/Button/Button";
import UserToolbar from "../UserToolBar/UserToolBar";
import InfoServices from "../../../Services/UserServices/InfoServices";
import { updateUser, addToken } from "../../../store/userSlice";
import AlertMessage from "../../../Components/ReUse/AlertMessage/AlertMessage";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";

const CloseAccount = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, []);

  const closeAccount = async () => {
    if (password.strim === "") {
      AlertMessage("Error", "You have to fill down your password");
    } else {
      try {
        const response = await InfoServices.deleteAccount(
          {
            userId: user.userId,
            password: password,
            user_type: user.user_type,
          },
          token
        );
        SuccessMessage("Success", "Delete account successfully");

        console.log("response: ", response);

        dispatch(
          updateUser({
            user: {},
          })
        );
        dispatch(
          addToken({
            token: "",
          })
        );

        window.location.href = "/";
      } catch (err) {
        if (err.response.status === 403) {
          AlertMessage("Error", "Your password was incorrect");
        }
        console.log("Err: ", err);
      }
    }
  };

  return (
    <UserPageLayout>
      <div className="flex p-3.5 h-full w-full">
        <div className="w-3/12 border-2 border-slate-200 flex flex-col ">
          <UserToolbar />
        </div>
        <div className="w-9/12 text-center border-2 border-l-0 border-slate-200">
          <div className="border-2 border-l-0 border-t-0 border-r-0  py-6  border-slate-200">
            <div className="font-bold text-lg">Close Account</div>
            <div className="text-base">Close your account permanently.</div>
          </div>
          <div className=" p-6 text-start ">
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <label className="pb-2 flex">
                <label className="font-bold text-red-700">{`Warning: `}</label>
                If you close your account, you will be unsubcribed from all your
                courses, and will lose access forever.
              </label>
            </div>
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <label className="font-bold pb-2 flex">
                Enter your password:
              </label>
              <input
                type="password"
                className="px-3 py-3 my-2 bg-white border-2 border-slate-600 mb-2 w-full"
                placeholder="Enter current password to delete your account."
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
          </div>

          <Button
            bgColor="bg-gray-600"
            bgColorHover="bg-gray-800"
            textColor="text-white"
            onClickBtn={closeAccount}
          >
            Close account
          </Button>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default CloseAccount;
