import InfoServices from "../../../Services/UserServices/InfoServices";
import UserPageLayout from "../../../Components/Layout/UserPageLayout/UserPageLayout";
import React, { useEffect, useState } from "react";
import AlertMessage from "../../../Components/ReUse/AlertMessage/AlertMessage";
import CardCousera from "../../../Components/ReUse/CardCousera/CardCousera";
import { useSelector } from "react-redux";

const data = [
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
];

const ViewPublicProfile = (props) => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  console.log("user: ", user);

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <UserPageLayout>
      <div className="w-full px-8 bg-black py-16">
        <p className="text-5xl text-white font-bold">{user.name}</p>
      </div>
      <div className="w-full px-8 bg-white py-16">
        <img
          src={user.avatar_url}
          className="ml-16 w-36 h-36 rounded-full "
        ></img>
      </div>
      <div className="w-full px-8 py-16 mt-8 border-2 border-slate-800 border-x-0 border-b-0 text-center">
        <p className="font-bold text-xl mb-6">Courses you're enrolled in</p>
        <div className="flex flex-wrap mx-auto lg:w-4/6">
          {data.map((item, idx) => (
            <div className="m-4" key={idx}>
              <CardCousera data={item}></CardCousera>
            </div>
          ))}
        </div>
      </div>
    </UserPageLayout>
  );
};

export default ViewPublicProfile;
