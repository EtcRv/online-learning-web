import React, { useEffect, useState } from "react";
import UserPageLayout from "../../../Components/Layout/UserPageLayout/UserPageLayout";
import { useSelector } from "react-redux";
import InfoServices from "../../../Services/UserServices/InfoServices";
import AlertMessage from "../../../Components/ReUse/AlertMessage/AlertMessage";

const EditProfilePage = () => {
  const [userInfor, setUserInfor] = useState({});
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [avatar, setAvatar] = useState(
    "https://img.freepik.com/premium-vector/avatar-user-icon-vector_97886-15026.jpg?size=626&ext=jpg"
  );
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const handleChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const getUserData = async () => {
    try {
      const getUser = await InfoServices.getInfo(
        { userId: user.id, user_type: user.user_type },
        token
      );
      console.log("getUser: ", getUser);
      setUserInfor(getUser.data.userInfor);
      setFullName(getUser.data.userInfor.name);
      setAvatar(getUser.data.userInfor.avatar_url);
      setDescription(getUser.data.userInfor.description);
      setPhone(getUser.data.userInfor.phone);
      setMail(getUser.data.userInfor.mail);
    } catch (err) {
      console.log("err: ", err);
      AlertMessage("Error", "Failed when load user data");
    }
  };

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }
    getUserData();
  }, []);

  return (
    <UserPageLayout>
      <div className="flex p-3.5 h-full w-full">
        <div className="w-3/12 border-2 border-slate-200 flex flex-col ">
          <div className="p-6 text-center">
            <div className="mx-auto mb-3">
              <label className=" w-48 h-48 " htmlFor="changeImage">
                <img
                  src={avatar}
                  className="rounded-full w-48 h-48 mx-auto"
                ></img>
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
            <ul className="list-none">
              <li className="py-1 px-4 cursor-pointer">View public profile</li>
              <li className="py-1 px-4 cursor-pointer bg-gray-700 text-white">
                Profile
              </li>
              <li className="py-1 px-4 cursor-pointer">Account Security</li>
              <li className="py-1 px-4 cursor-pointer">Close account</li>
            </ul>
          </div>
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
                className="px-3 py-3 bg-white border-2 border-slate-600"
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
                className="px-3 py-3 bg-white border-2 border-slate-600 h-48 min-h-full"
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
                className="px-3 py-3 my-2 bg-white border-2 border-slate-600 mb-2"
                placeholder="Your phone"
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
              />
              <label className="pb-1 flex">
                Mail:{" "}
                {user.user_type === "teacher" ? (
                  <p className="text-red-700">*</p>
                ) : (
                  ""
                )}
              </label>
              <input
                type="email"
                className="px-3 py-3 mt-2 bg-white border-2 border-slate-600"
                placeholder="Your email"
                value={mail}
                onChange={(e) => setMail(e.currentTarget.value)}
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
          <button class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-3 px-4 mb-4">
            Save
          </button>
        </div>
      </div>
    </UserPageLayout>
  );
};

export default EditProfilePage;
