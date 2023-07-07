import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/userSlice";

const UserToolbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const url = window.location.href.split("/");
  const current_function = url[url.length - 1];
  const [fullName, setFullName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar_url);
  const handleChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
    user.avatar_url = URL.createObjectURL(e.target.files[0]);
    dispatch(
      updateUser({
        user: user,
      })
    );
  };

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, []);

  const changeTab = (tabName) => {
    if (tabName === "Public Profile") {
      navigate("/user/profile");
    } else if (tabName === "Account Security") {
      navigate("/user/edit-account");
    } else if (tabName === "Close Account") {
      navigate("/user/close-account");
    } else if (tabName === "Edit Profile") {
      navigate("/user/edit-profile");
    } else if (tabName === "Loading Money") {
      navigate("/user/loading-money");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="p-6 text-center">
        <div className="mx-auto mb-3">
          <label className=" w-48 h-48 " htmlFor="changeImage">
            <img src={avatar} className="rounded-full w-48 h-48 mx-auto"></img>
            <input
              type="file"
              onChange={handleChange}
              accept="image/png, image/gif, image/jpeg"
              id="changeImage"
              hidden
            />
          </label>
        </div>
        <div className="font-bold">{fullName}</div>
      </div>
      <div>
        <ul className="list-none ">
          <button
            className={`py-1 px-4 cursor-pointer w-full text-left hover:bg-gray-700 hover:text-white ${
              current_function === "profile" ? "bg-gray-700 text-white" : ""
            }`}
            onClick={() => changeTab("Public Profile")}
          >
            View public profile
          </button>
          <button
            className={`py-1 px-4 cursor-pointer w-full text-left hover:bg-gray-700 hover:text-white ${
              current_function === "edit-profile"
                ? "bg-gray-700 text-white"
                : ""
            }`}
            onClick={() => changeTab("Edit Profile")}
          >
            Profile
          </button>
          <button
            className={`py-1 px-4 cursor-pointer w-full text-left hover:bg-gray-700 hover:text-white ${
              current_function === "loading-money"
                ? "bg-gray-700 text-white"
                : ""
            }`}
            onClick={() => changeTab("Loading Money")}
          >
            Loading Money
          </button>
          <button
            className={`py-1 px-4 cursor-pointer w-full text-left hover:bg-gray-700 hover:text-white ${
              current_function === "edit-account"
                ? "bg-gray-700 text-white"
                : ""
            }`}
            onClick={() => changeTab("Account Security")}
          >
            Account Security
          </button>
          <button
            className={`py-1 px-4 cursor-pointer w-full text-left hover:bg-gray-700 hover:text-white ${
              current_function === "close-account"
                ? "bg-gray-700 text-white"
                : ""
            }`}
            onClick={() => changeTab("Close Account")}
          >
            Close account
          </button>
        </ul>
      </div>
    </div>
  );
};

export default UserToolbar;
