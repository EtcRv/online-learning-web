import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, addToken } from "../../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { updateState } from "../../../store/createCourseSlice";

function Header() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const [userInfor, setUserInfor] = useState(user);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { t, i18n } = useTranslation();

  const handleSearch = () => {
    if (searchText) {
      navigate(`/coursePage/search/${searchText}`);
      // window.location.reload();
    }
  };

  const logout = () => {
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
    // dispatch(
    //   updateState({
    //     type: "intended_learners",
    //     value: {
    //       learning_object: ["", "", "", ""],
    //       required_skills: "",
    //       course_for: "",
    //     },
    //   })
    // );

    // dispatch(
    //   updateState({
    //     type: "landing_page",
    //     value: {
    //       course_title: "New Course",
    //       course_sub_title: "",
    //       course_description: "",
    //       basic_info: {
    //         language: "English (US)",
    //         level: "-- Select Level --",
    //         category: "-- Select Category --",
    //       },
    //       primarily_taught: "",
    //       course_image: "",
    //       promotional_video: "",
    //     },
    //   })
    // );

    // dispatch(
    //   updateState({
    //     type: "price",
    //     value: "Free",
    //   })
    // );

    // dispatch(
    //   updateState({
    //     type: "course_messages",
    //     value: {
    //       welcome_message: "",
    //       congratulation_message: "",
    //     },
    //   })
    // );
    navigate("/");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div className="w-full  text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="flex  justify-between p-6 mx-auto ">
          <div className="flex">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAC4ALgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAHCAQFBgID/9oACAEBAAAAAGaTcqbHXaSAj5zJGy6gJEwBasOoCiFM2SeoiulLaWNt5g+LXkYkf//EABgBAQADAQAAAAAAAAAAAAAAAAYDBQcC/9oACgICEAMQAAAAO6x1RXwk7qExC+Mhmp6duS//xAAyEAACAQIEAgcHBQEAAAAAAAABAgMEBQAGERITIQcQMTZBYXUVFiIkM1KzIzJCQ7LS/9oACAEBAAE/AM191r/6ZVfiOKagpJbVWVclwWOaJlEdORq0g8SMdGK1Xu7mSWjpIairSWLgRyAEM2mDWZxajaWPKtHxRUaFGC/SAJLfuxlkXKaneW5WyCknEnwLGo02aduoJ6s191r/AOmVX4j1dEtelJbrsnDeSSWoj4cSAktopwqXC43EJO+xIGVysbclP2nwJwnVmvutf/TKr8RxFHJLIscUbO7HRVUFiT5AY6OOPabTdnneOSdp4lSFHDFH0IVH05DFvoxS06qW3yMS0sn3ue04XqzX3Wv/AKZVfiOMriqNXXLSHSdrdUCMAgMSR2L546H6dGprrJL/AETptQ8grMhBOKbTgJoDppherMsTTZcvcSkbnt9Qo184yMP0cXqEktX0CkFB9V9QXOi/xxlBLvaI6mC4rTVblgUmSZQTt1BDkjczDzx7fPP5SLl2/Mr/AM4t1zkqalYzRqoJILCYPoVB5aADqvhAst0J8KOb/Bxd7HJX3SqrYq7gibgaLwtxBgIb7h4jFHlpqesjqDVodkE0e1Ydu7iqyhm+Lmfi549y34ar7RXkiIP0eRCntI3duMiUrW2dqWWpM7TVMswfZs0Lrq3ier//xAAkEQACAgAGAQUBAAAAAAAAAAABAgMEAAUREiExBhATIkFhcf/aAAgBAgEBPwDOwxeEK5Xjsf3CWljr1kQSPIzBNqaaAk9knCLtUDUn9xnz+3tfjhD3jLS6yVkkdH1hkZPor8gOv3X08ruSwXKaLOsSNE5JKbumGK2e2a+scN+CNeCSK/ZOPGcwtX6dmSxKshSyyKyrt1UKp6x//8QAJREAAgICAgEDBQEAAAAAAAAAAQIDEQQFABIGEyExBxAiMnGR/9oACAEDAQE/APp5G8mBnBZSlZCEkAGwBzyCX099sy+PCyiVX7ydrICAUACLHJpfVlZ+ipZ/Vbofy+eBTmDU7WUAErIp9zQ+OeVWu5z07AsZELsBQP4igPt4rs8jDinjTISJHa2LJ3sihzJ1+tzMqSWbMQM3UnrE4F/BoA82WPFj5TRxMGQD2YWL/wB5/9k="></img>

            <div className="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-200 md:mr-auto">
              <NavLink
                className="mr-5 font-medium hover:text-gray-900"
                to="/"
                activeclassname="active"
                exact="true"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center">
              <div className="flex border-2 rounded">
                <input
                  type="text"
                  className="px-4 py-2 w-80"
                  placeholder="Search..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button
                  className="flex items-center justify-center px-4 border-l"
                  onClick={handleSearch}
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center h-full relative">
            {isLogin && user.user_type === "teacher" && (
              <NavLink
                className="px-6 py-2 text-lg text-black "
                to={"/instructor/course"}
                activeclassname="active"
              >
                Teacher
              </NavLink>
            )}
            {isLogin && user.user_type === "admin" && (
              <NavLink
                className="px-6 py-2 text-lg text-black "
                to={"/admin/dashboard"}
                activeclassname="active"
              >
                Admin
              </NavLink>
            )}
            {isLogin && (
              <NavLink
                className="mr-5 font-medium hover:text-gray-900"
                to="/cart"
                activeclassname="active"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-cart"
                  id="IconChangeColor"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                    id="mainIconPathAttribute"
                    stroke="#1e3032"
                    strokeWidth="2.5"
                  ></path>
                </svg>
              </NavLink>
            )}

            {!isLogin && (
              <NavLink
                className="mr-5 font-medium hover:text-gray-900"
                to="/login"
                activeclassname="active"
              >
                Login
              </NavLink>
            )}

            {!isLogin && (
              <NavLink
                className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
                to="/register/student"
                activeclassname="active"
              >
                SignUp
              </NavLink>
            )}

            {isLogin && (
              <div
                className="mr-5 rounded-full w-10 h-10"
                activeclassname="active"
              >
                <div
                  className="relative rounded-full w-full h-full"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button onClick={() => navigate("/user/edit-profile")}>
                    <img
                      src={userInfor.avatar_url}
                      className="rounded-full w-full h-full"
                    />
                  </button>
                  {isHovered && (
                    <div className="absolute z-10 mt-[100px] top-[40px] right-[5px] bg-white divide-y divide-gray-100  shadow w-44">
                      <div className="flex items-center justify-center">
                        <div className="rounded-full w-10 h-10 mr-2">
                          <img
                            src={userInfor.avatar_url}
                            alt="User Avatar"
                            className="rounded-full w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold">{userInfor.name}</p>
                          <p>$ {userInfor.money}</p>
                        </div>
                      </div>
                      <ul className=" text-sm text-gray-700">
                        <li>
                          <NavLink
                            to="/my-learning"
                            className="block py-2 px-[10px]  hover:text-purple-600 hover:bg-gray-100 transition-colors duration-300"
                            activeClassName="text-purple-600"
                          >
                            My learning
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/cart"
                            className="block py-2 px-[10px]  hover:text-purple-600 hover:bg-gray-100 transition-colors duration-300"
                            activeClassName="text-purple-600"
                          >
                            My cart
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/messages"
                            className="block py-2 px-[10px]  hover:text-purple-600 hover:bg-gray-100 transition-colors duration-300"
                            activeClassName="text-purple-600"
                          >
                            Messages
                          </NavLink>
                        </li>
                      </ul>

                      <div class="py-2 px-[10px] ">
                        <button
                          onClick={logout}
                          class="block p-[10px] text-sm text-gray-700 hover:text-[#a435f0] "
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
