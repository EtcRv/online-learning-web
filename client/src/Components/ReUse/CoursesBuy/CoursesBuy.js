// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CardCousera from "../../ReUse/CardCousera/CardCousera";
// import "./CoursesBuy.css";
// import { useSelector } from "react-redux";
// import CourseServices from "../../../Services/CourseServices/CourseServices";
// import { NavLink } from "react-router-dom";
// import CardCouseraBuy from "../CardCouseraBuy/CarCouseraBuy";
// import { useTranslation } from "react-i18next";

// const data = [
//   {
//     courseraImg:
//       "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
//     courseraName: "HTML5 - From Basics to Advanced level [2023]",
//     currentLec: "1. HTML - Introduction",
//     lecTime: "1 min",
//   },
//   {
//     courseraImg:
//       "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
//     courseraName: "HTML5 - From Basics to Advanced level [2023]",
//     currentLec: "1. HTML - Introduction",
//     lecTime: "1 min",
//   },
//   {
//     courseraImg:
//       "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
//     courseraName: "HTML5 - From Basics to Advanced level [2023]",
//     currentLec: "1. HTML - Introduction",
//     lecTime: "1 min",
//   },
//   {
//     courseraImg:
//       "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
//     courseraName: "HTML5 - From Basics to Advanced level [2023]",
//     currentLec: "1. HTML - Introduction",
//     lecTime: "1 min",
//   },
//   {
//     courseraImg:
//       "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
//     courseraName: "HTML5 - From Basics to Advanced level [2023]",
//     currentLec: "1. HTML - Introduction",
//     lecTime: "1 min",
//   },
//   {
//     courseraImg:
//       "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
//     courseraName: "HTML5 - From Basics to Advanced level [2023]",
//     currentLec: "1. HTML - Introduction",
//     lecTime: "1 min",
//   },
// ];

// export default function CouserasBuy() {
//   const token = useSelector((state) => state.user.token);
//   const user = useSelector((state) => state.user.user);
//   const userId = user.userId;
//   const [coursesBuy, setCoursesBuy] = useState([]);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const fetchData = async (userId, token) => {
//       try {
//         const response = await CourseServices.getAllCourseOfUser(userId, token);
//         const coursesData = response.data;
//         console.log(coursesData);
//         const transformedData = coursesData.map((item) => {
//           return {
//             coursesId: item.courseInformation.id,
//             courseraImg: item.courseInformation.course_image,
//             courseraName: item.courseInformation.title,
//             currentLec: "1. Introduction",
//             lecTime: "5 min",
//           };
//         });
//         setCoursesBuy(transformedData);
//       } catch (error) {
//         console.error("Failed when getting all courses:", error);
//       }
//     };

//     fetchData(userId, token);
//     console.log(`coursesBuy: ${coursesBuy}`);
//   }, []);

//   let settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//   };
//   return (
//     <>
//       {coursesBuy.length > 0 && (
//         <div className="couseras mx-[35px] px-[24px] mt-[64px] mb-[96px]">
//           <h2 className="mb-[16px] mx-[45px]">{t("Let's start learning")}</h2>
//           <div className="mx-[45px]">
//             <Slider {...settings}>
//               {coursesBuy.map(
//                 //data-cung  courses-api
//                 (
//                   item,
//                   idx //data=courses
//                 ) => (
//                   <div className="" key={idx}>
//                     <NavLink
//                       to={`/course/${item.coursesId}`}
//                       activeClassName="active"
//                     >
//                       <CardCouseraBuy data={item}></CardCouseraBuy>
//                     </NavLink>
//                   </div>
//                 )
//               )}
//             </Slider>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCousera from "../../ReUse/CardCousera/CardCousera";
import "./CoursesBuy.css";
import { useSelector } from "react-redux";
import CourseServices from "../../../Services/CourseServices/CourseServices";
import { NavLink } from "react-router-dom";
import CardCouseraBuy from "../CardCouseraBuy/CarCouseraBuy";
import { useTranslation } from "react-i18next";

const data = [
  {
    courseraImg:
      "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
    courseraName: "HTML5 - From Basics to Advanced level [2023]",
    currentLec: "1. HTML - Introduction",
    lecTime: "1 min",
  },
  {
    courseraImg:
      "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
    courseraName: "HTML5 - From Basics to Advanced level [2023]",
    currentLec: "1. HTML - Introduction",
    lecTime: "1 min",
  },
  {
    courseraImg:
      "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
    courseraName: "HTML5 - From Basics to Advanced level [2023]",
    currentLec: "1. HTML - Introduction",
    lecTime: "1 min",
  },
  {
    courseraImg:
      "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
    courseraName: "HTML5 - From Basics to Advanced level [2023]",
    currentLec: "1. HTML - Introduction",
    lecTime: "1 min",
  },
  {
    courseraImg:
      "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
    courseraName: "HTML5 - From Basics to Advanced level [2023]",
    currentLec: "1. HTML - Introduction",
    lecTime: "1 min",
  },
  {
    courseraImg:
      "https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
    courseraName: "HTML5 - From Basics to Advanced level [2023]",
    currentLec: "1. HTML - Introduction",
    lecTime: "1 min",
  },
];

export default function CouserasBuy() {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const userId = user.userId;
  const [coursesBuy, setCoursesBuy] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async (userId, token) => {
      try {
        const response = await CourseServices.getAllCourseOfUser(userId, token);
        const coursesData = response.data;
        console.log(coursesData);
        const transformedData = coursesData.map((item) => {
          return {
            coursesId: item.courseInformation.id,
            courseraImg: item.courseInformation.course_image,
            courseraName: item.courseInformation.title,
            currentLec: "1. Introduction",
            lecTime: "5 min",
          };
        });
        setCoursesBuy(transformedData);
      } catch (error) {
        console.error("Failed when getting all courses:", error);
      }
    };

    fetchData(userId, token);
    console.log(`coursesBuy: ${coursesBuy}`);
  }, []);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      {coursesBuy.length > 0 && (
        <div className="couseras mx-[35px] px-[24px] mt-[64px] mb-[96px]">
          <h2 className="mb-[16px] mx-[45px]">{t("Let's start learning")}</h2>
          <div className="mx-[45px]">
            <Slider {...settings}>
              {coursesBuy.map(
                //data-cung  courses-api
                (
                  item,
                  idx //data=courses
                ) => (
                  <div className="" key={idx}>
                    <NavLink
                      to={`/course/${item.coursesId}`}
                      activeClassName="active"
                    >
                      <CardCouseraBuy data={item}></CardCouseraBuy>
                    </NavLink>
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
}
