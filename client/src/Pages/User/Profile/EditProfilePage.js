import React, { useEffect, useState } from "react";
import UserPageLayout from "../../../Components/Layout/UserPageLayout/UserPageLayout";
import { useSelector } from "react-redux";
import InfoServices from "../../../Services/UserServices/InfoServices";
import AlertMessage from "../../../Components/ReUse/AlertMessage/AlertMessage";
import Button from "../../../Components/ReUse/Button/Button";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";
import { useNavigate } from "react-router-dom";

import UserToolbar from "../UserToolBar/UserToolBar";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/userSlice";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [fullName, setFullName] = useState(user.name);
  const [description, setDescription] = useState(user.description);
  const [phone, setPhone] = useState(user.phone);

  const updateUserProfile = async () => {
    try {
      const response = await InfoServices.setUserProfile(
        {
          userData: {
            userId: user.userId,
            name: fullName,
            description: description,
            avatar_url: user.avatar_url,
            phone: phone,
            mail: user.mail,
          },
          user_type: user.user_type,
        },
        token
      );

      let newUser = {
        id: user.userId,
        userId: user.userId,
        name: fullName,
        description: description,
        phone: phone,
        avatar_url: user.avatar_url,
        user_type: user.user_type,
        mail: user.mail,
      };

      dispatch(
        updateUser({
          user: newUser,
        })
      );
      SuccessMessage("Success", "Update information successfully");
    } catch (err) {
      console.log("err: ", err);
      AlertMessage("Error", "Failed when update user data");
    }
  };

  const changeTab = (tabName) => {
    if (tabName === "Public Profile") {
      navigate("/user/profile");
    } else if (tabName === "Account Security") {
      console.log("hello");
    } else if (tabName === "Close Account") {
      console.log("Hello");
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
            <div className="font-bold text-lg">Public profile</div>
            <div className="text-base">Add information about yourself</div>
          </div>
          <div className=" p-6 text-start ">
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <label className="font-bold pb-2 flex">
                Full Name:{" "}
                {user.user_type === "teacher" ? (
                  <p className="text-red-700">*</p>
                ) : (
                  ""
                )}
              </label>
              <input
                type="text"
                className="px-3 py-3 bg-white border-2 border-slate-600 w-full"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <label className="font-bold pb-2 flex">
                Description about yourself:{" "}
                {user.user_type === "teacher" ? (
                  <p className="text-red-700">*</p>
                ) : (
                  ""
                )}
              </label>
              <textarea
                className="px-3 py-3 bg-white border-2 border-slate-600 h-48 w-full min-h-full"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              ></textarea>
            </div>
            <div className="flex flex-col w-9/12 mx-auto my-4">
              <label className="font-bold pb-2">Contact Information: </label>
              <label className="pb-1 flex">
                Phone:{" "}
                {user.user_type === "teacher" ? (
                  <p className="text-red-700">*</p>
                ) : (
                  ""
                )}
              </label>
              <input
                type="text"
                className="px-3 py-3 my-2 bg-white border-2 border-slate-600 mb-2 w-full"
                placeholder="Your phone"
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
              />
            </div>
          </div>
          {user.user_type === "teacher" ? (
            <p className="text-red-700 mb-3">
              * You must fill down all this information
            </p>
          ) : (
            ""
          )}
          <Button
            bgColor="bg-gray-600"
            bgColorHover="bg-gray-800"
            textColor="text-white"
            onClickBtn={updateUserProfile}
          >
            Save
          </Button>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default EditProfilePage;
